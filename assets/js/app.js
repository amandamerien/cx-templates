/**
 * Entrada da aplicação: liga dados, estado e interface da biblioteca.
 */

import { filterTemplates } from "./lib/search.js";
import { copyText } from "./lib/clipboard.js";
import { ALL_CATEGORY } from "./data/categories.js";
import { createCard } from "./ui/card.js";
import { renderFilters } from "./ui/filters.js";
import { openModal, closeModal, isModalOpen } from "./ui/modal.js";
import { showToast } from "./ui/toast.js";
import {
  renderLoading,
  renderEmpty,
  renderNoResults,
  renderError,
} from "./ui/states.js";
import { icons } from "./ui/icons.js";

/** @typedef {import("../../types/template").EmailTemplate} EmailTemplate */

const dom = {
  grid: document.getElementById("grid"),
  filters: document.getElementById("filters"),
  search: /** @type {HTMLInputElement} */ (document.getElementById("search")),
  searchClear: document.getElementById("search-clear"),
  count: document.getElementById("result-count"),
  liveRegion: document.getElementById("sr-live"),
};

/** @type {{ all: EmailTemplate[], query: string, category: string, loaded: boolean }} */
const state = {
  all: [],
  query: "",
  category: ALL_CATEGORY,
  loaded: false,
};

let registry = null; // funções do módulo de dados (getCategories, etc.)

// ---------------------------------------------------------------------------
// Ciclo de vida
// ---------------------------------------------------------------------------

async function init() {
  bindStaticEvents();
  await loadData();
}

/** Carrega o registry de forma assíncrona para ter estados reais de loading/erro. */
async function loadData() {
  showLoading();
  try {
    registry = await import("./data/index.js");
    state.all = registry.templates;
    state.loaded = true;
    render();
  } catch (err) {
    console.error("Falha ao carregar templates:", err);
    showError();
  }
}

// ---------------------------------------------------------------------------
// Eventos
// ---------------------------------------------------------------------------

function bindStaticEvents() {
  let debounce;
  dom.search.addEventListener("input", () => {
    clearTimeout(debounce);
    const value = dom.search.value;
    dom.searchClear.hidden = value.length === 0;
    debounce = setTimeout(() => {
      state.query = value;
      render();
    }, 140);
  });

  dom.searchClear.addEventListener("click", () => {
    dom.search.value = "";
    dom.searchClear.hidden = true;
    state.query = "";
    render();
    dom.search.focus();
  });

  // Deep-link: abre um template ao carregar/navegar com #template=slug
  window.addEventListener("hashchange", handleHashOpen);
}

function resetFilters() {
  state.query = "";
  state.category = ALL_CATEGORY;
  dom.search.value = "";
  dom.searchClear.hidden = true;
  render();
}

// ---------------------------------------------------------------------------
// Renderização
// ---------------------------------------------------------------------------

function showLoading() {
  dom.grid.setAttribute("aria-busy", "true");
  dom.grid.replaceChildren(renderLoading(6));
  dom.count.textContent = "Carregando templates…";
}

function showError() {
  dom.grid.setAttribute("aria-busy", "false");
  dom.grid.replaceChildren(renderError(loadData));
  dom.count.textContent = "";
}

function render() {
  if (!state.loaded) return;
  dom.grid.setAttribute("aria-busy", "false");

  // Filtros dinâmicos (derivados dos dados)
  renderFilters(dom.filters, {
    categories: registry.getCategories(state.all),
    counts: registry.getCategoryCounts(state.all),
    active: state.category,
    onSelect: (category) => {
      state.category = category;
      render();
    },
  });

  // Biblioteca vazia (nenhum template cadastrado)
  if (state.all.length === 0) {
    dom.grid.replaceChildren(renderEmpty());
    updateCount(0, 0);
    return;
  }

  const results = filterTemplates(state.all, {
    category: state.category,
    query: state.query,
  });

  updateCount(results.length, state.all.length);

  if (results.length === 0) {
    dom.grid.replaceChildren(renderNoResults(resetFilters));
    return;
  }

  const frag = document.createDocumentFragment();
  for (const t of results) {
    frag.appendChild(createCard(t, { onView: openTemplate, onCopy: handleCopy }));
  }
  dom.grid.replaceChildren(frag);
}

/**
 * Atualiza o contador de resultados.
 * @param {number} shown
 * @param {number} total
 */
function updateCount(shown, total) {
  const noun = shown === 1 ? "template" : "templates";
  dom.count.replaceChildren();
  const strong = document.createElement("strong");
  strong.textContent = String(shown);
  dom.count.appendChild(strong);
  const suffix =
    shown === total ? ` ${noun}` : ` de ${total} templates`;
  dom.count.appendChild(document.createTextNode(suffix));
  // Anúncio para leitores de tela
  announce(`${shown} ${noun} ${shown === 1 ? "encontrado" : "encontrados"}.`);
}

/** @param {string} message */
function announce(message) {
  if (dom.liveRegion) dom.liveRegion.textContent = message;
}

// ---------------------------------------------------------------------------
// Ações
// ---------------------------------------------------------------------------

/** @param {EmailTemplate} template */
function openTemplate(template) {
  openModal(template, { onCopy: handleCopy, onClose: clearTemplateHash });
  // Reflete no hash para permitir deep-link/voltar (pushState não dispara hashchange).
  if (location.hash !== `#template=${template.slug}`) {
    history.pushState(null, "", `#template=${template.slug}`);
  }
}

/** Remove o hash de deep-link ao fechar o modal (sem recarregar). */
function clearTemplateHash() {
  if (location.hash.startsWith("#template=")) {
    history.replaceState(null, "", location.pathname + location.search);
  }
}

/**
 * Copia o HTML completo e dá feedback (label + ícone + toast + reversão + erro).
 * @param {EmailTemplate} template
 * @param {HTMLButtonElement} btn
 */
async function handleCopy(template, btn) {
  const labelEl = btn.querySelector(".btn__label");
  const iconEl = btn.querySelector(".btn__icon");
  const originalLabel = labelEl ? labelEl.textContent : null;
  const originalIcon = iconEl ? iconEl.innerHTML : null;

  try {
    await copyText(template.html);

    if (labelEl) labelEl.textContent = "HTML copiado";
    if (iconEl) iconEl.innerHTML = icons.check;
    btn.classList.add("is-copied");
    showToast("HTML copiado para a área de transferência", { type: "success" });

    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => {
      if (labelEl && originalLabel !== null) labelEl.textContent = originalLabel;
      if (iconEl && originalIcon !== null) iconEl.innerHTML = originalIcon;
      btn.classList.remove("is-copied");
    }, 2200);
  } catch (err) {
    // Condição tratada (damos feedback por toast); warn, não error.
    console.warn("Falha ao copiar HTML:", err);
    showToast(
      "Não foi possível copiar. Copie manualmente pela aba Código HTML.",
      { type: "error", duration: 4200 }
    );
  }
}

// ---------------------------------------------------------------------------
// Deep-link por hash
// ---------------------------------------------------------------------------

function handleHashOpen() {
  const match = location.hash.match(/^#template=(.+)$/);
  if (!match) {
    if (isModalOpen()) closeModal();
    return;
  }
  const slug = decodeURIComponent(match[1]);
  const template = registry && registry.getTemplateBySlug(slug, state.all);
  if (template) {
    openModal(template, { onCopy: handleCopy, onClose: clearTemplateHash });
  }
}

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

init().then(() => {
  // Se a página abriu já com um deep-link, exibe o template.
  if (location.hash.startsWith("#template=")) handleHashOpen();
});
