/**
 * Filtros por categoria — chips dinâmicos.
 * As categorias vêm do registry (derivadas dos dados), então novas categorias
 * aparecem automaticamente aqui.
 */

/**
 * Renderiza/atualiza os chips de categoria dentro de um container.
 * Usa roving tabindex + navegação por setas para acessibilidade.
 *
 * @param {HTMLElement} container
 * @param {object} opts
 * @param {string[]} opts.categories - categorias (inclui "Todos" na frente)
 * @param {Record<string, number>} opts.counts - contagem por categoria
 * @param {string} opts.active - categoria ativa
 * @param {(category: string) => void} opts.onSelect
 */
export function renderFilters(container, { categories, counts, active, onSelect }) {
  container.innerHTML = "";
  container.setAttribute("role", "toolbar");
  container.setAttribute("aria-label", "Filtrar por categoria");

  categories.forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.category = category;
    const isActive = category === active;
    chip.setAttribute("aria-pressed", String(isActive));
    chip.tabIndex = isActive ? 0 : -1;

    const label = document.createElement("span");
    label.textContent = category;
    chip.appendChild(label);

    const count = counts[category];
    if (typeof count === "number") {
      const badge = document.createElement("span");
      badge.className = "chip__count";
      badge.textContent = String(count);
      chip.appendChild(badge);
    }

    chip.addEventListener("click", () => onSelect(category));
    chip.addEventListener("keydown", (e) => handleArrowNav(e, container));

    container.appendChild(chip);
  });
}

/**
 * Navegação por setas entre os chips (padrão de toolbar acessível).
 * @param {KeyboardEvent} e
 * @param {HTMLElement} container
 */
function handleArrowNav(e, container) {
  const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
  if (!keys.includes(e.key)) return;
  e.preventDefault();

  const chips = Array.from(container.querySelectorAll(".chip"));
  const currentIndex = chips.indexOf(document.activeElement);
  let nextIndex = currentIndex;

  if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % chips.length;
  else if (e.key === "ArrowLeft")
    nextIndex = (currentIndex - 1 + chips.length) % chips.length;
  else if (e.key === "Home") nextIndex = 0;
  else if (e.key === "End") nextIndex = chips.length - 1;

  const next = chips[nextIndex];
  if (next) {
    chips.forEach((c) => (c.tabIndex = -1));
    next.tabIndex = 0;
    next.focus();
  }
}
