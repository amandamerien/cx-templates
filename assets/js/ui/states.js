/**
 * Renderizadores de estados da lista: carregando, vazio, sem resultados e erro.
 * Cada função retorna um elemento pronto para inserir no grid.
 */

import { icons } from "./icons.js";

/**
 * Cria um bloco de estado genérico.
 * @param {{ icon: string, title: string, desc: string, variant?: string, action?: HTMLElement }} opts
 * @returns {HTMLElement}
 */
function stateBlock({ icon, title, desc, variant, action }) {
  const el = document.createElement("div");
  el.className = "state" + (variant ? ` state--${variant}` : "");
  el.setAttribute("role", "status");
  el.innerHTML = `
    <div class="state__icon">${icon}</div>
    <h2 class="state__title"></h2>
    <p class="state__desc"></p>
  `;
  el.querySelector(".state__title").textContent = title;
  el.querySelector(".state__desc").textContent = desc;
  if (action) el.appendChild(action);
  return el;
}

/**
 * Skeleton de carregamento (N cards).
 * @param {number} [count=6]
 * @returns {DocumentFragment}
 */
export function renderLoading(count = 6) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");
    card.className = "skeleton-card";
    card.setAttribute("aria-hidden", "true");
    card.innerHTML = `
      <div class="skeleton skeleton-card__preview"></div>
      <div class="skeleton skeleton-card__line skeleton-card__line--sm"></div>
      <div class="skeleton skeleton-card__line skeleton-card__line--lg"></div>
      <div class="skeleton skeleton-card__line"></div>
    `;
    frag.appendChild(card);
  }
  return frag;
}

/** Estado: nenhum template cadastrado. */
export function renderEmpty() {
  return stateBlock({
    icon: icons.inbox,
    title: "Nenhum template cadastrado",
    desc: "Assim que um template for adicionado à biblioteca, ele aparecerá aqui.",
  });
}

/**
 * Estado: busca/filtros sem resultados.
 * @param {() => void} [onReset]
 */
export function renderNoResults(onReset) {
  let action;
  if (typeof onReset === "function") {
    action = document.createElement("button");
    action.className = "btn btn--secondary btn--sm";
    action.type = "button";
    action.textContent = "Limpar filtros";
    action.addEventListener("click", onReset);
  }
  return stateBlock({
    icon: icons.search,
    title: "Nenhum template encontrado",
    desc: "Tente outra palavra-chave ou remova os filtros aplicados.",
    action,
  });
}

/**
 * Estado: erro ao carregar.
 * @param {() => void} [onRetry]
 */
export function renderError(onRetry) {
  let action;
  if (typeof onRetry === "function") {
    action = document.createElement("button");
    action.className = "btn btn--secondary btn--sm";
    action.type = "button";
    action.textContent = "Tentar novamente";
    action.addEventListener("click", onRetry);
  }
  return stateBlock({
    icon: icons.alert,
    title: "Não foi possível carregar os templates",
    desc: "Ocorreu um erro ao carregar a biblioteca. Verifique sua conexão e tente novamente.",
    variant: "error",
    action,
  });
}
