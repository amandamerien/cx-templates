/**
 * Entrada da aplicação: liga dados, estado e interface da biblioteca.
 */

import { filterTemplates } from "./lib/search.js";
import { copyText } from "./lib/clipboard.js";
import { ALL_CATEGORY } from "./data/categories.js";
import {
  getStatus,
  setStatus,
  getStatusCounts,
  STATUS,
  STATUS_ORDER,
  STATUS_LABEL,
} from "./lib/status.js";
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
  statusFilter: document.getElementById("status-filter"),
  search: /** @type {HTMLInputElement} */ (document.getElementById("search")),
  searchClear: document.getElementById("search-clear"),
  count: document.getElementById("result-count"),
  liveRegion: document.getElementById("sr-live"),
};

/** @type {{ all: EmailTemplate[], query: string, category: string, status: string, loaded: boolean }} */
const state = {
  all: [],
  query: "",
  category: ALL_CATEGORY,
  status: STATUS.RASCUNHO, // tela inicial = rascunho (o que ainda falta fazer)
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

  // Filtro por status de trabalho (Rascunho / Finalizados / Publicados)
  const statusCounts = getStatusCounts(state.all);
  renderFilters(dom.statusFilter, {
    categories: STATUS_ORDER,
    counts: statusCounts,
    active: state.status,
    ariaLabel: "Filtrar por status",
    labelFor: (s) => STATUS_LABEL[s] || s,
    onSelect: (status) => {
      state.status = status;
      state.category = ALL_CATEGORY; // evita categoria "presa" sem itens na nova faixa
      render();
    },
  });

  // Recorta pela faixa de status atual antes dos demais filtros
  const inStatus = state.all.filter((t) => getStatus(t.slug) === state.status);

  // Filtros de categoria derivados do subconjunto do status atual
  renderFilters(dom.filters, {
    categories: registry.getCategories(inStatus),
    counts: registry.getCategoryCounts(inStatus),
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

  const results = filterTemplates(inStatus, {
    category: state.category,
    query: state.query,
  });

  updateCount(results.length, inStatus.length);

  if (results.length === 0) {
    // Sem busca/categoria ativa, a faixa de status está realmente vazia.
    const filtering = state.query !== "" || state.category !== ALL_CATEGORY;
    dom.grid.replaceChildren(
      filtering ? renderNoResults(resetFilters) : renderEmptyStatus(state.status)
    );
    return;
  }

  const frag = document.createDocumentFragment();
  for (const t of results) {
    frag.appendChild(
      createCard(t, {
        onView: openTemplate,
        onCopy: handleCopy,
        onStatusChange: handleStatusChange,
      })
    );
  }
  dom.grid.replaceChildren(frag);
}

/**
 * Mensagem de estado vazio específica para cada faixa de status.
 * @param {string} status
 */
function renderEmptyStatus(status) {
  const messages = {
    [STATUS.RASCUNHO]: {
      title: "Nenhum rascunho por aqui",
      desc: "Todos os templates já foram finalizados ou publicados. Use o filtro acima para revê-los.",
    },
    [STATUS.FINALIZADO]: {
      title: "Nenhum template finalizado ainda",
      desc: "Marque um template como “Finalizado” no card para acompanhá-lo aqui.",
    },
    [STATUS.PUBLICADO]: {
      title: "Nenhum template publicado ainda",
      desc: "Marque um template como “Publicado” no card para acompanhá-lo aqui.",
    },
  };
  const m = messages[status] || messages[STATUS.RASCUNHO];
  const el = document.createElement("div");
  el.className = "state";
  el.setAttribute("role", "status");
  el.innerHTML = `
    <div class="state__icon">${icons.inbox}</div>
    <h2 class="state__title"></h2>
    <p class="state__desc"></p>
  `;
  el.querySelector(".state__title").textContent = m.title;
  el.querySelector(".state__desc").textContent = m.desc;
  return el;
}

/**
 * Persiste o novo status, dá feedback e re-renderiza (o card sai da faixa atual).
 * @param {EmailTemplate} template
 * @param {string} status
 */
function handleStatusChange(template, status) {
  setStatus(template.slug, status);
  render();
  showToast(`“${template.name}” marcado como ${STATUS_LABEL[status]}`, {
    type: "success",
  });
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
