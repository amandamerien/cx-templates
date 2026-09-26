/**
 * Card de template para a listagem.
 */

import { icons } from "./icons.js";

/**
 * Cria o card de um template.
 * @param {import("../../../types/template").EmailTemplate} template
 * @param {{ onView: (t: any) => void, onCopy: (t: any, btn: HTMLButtonElement) => void }} handlers
 * @returns {HTMLElement}
 */
export function createCard(template, { onView, onCopy }) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.slug = template.slug;

  // ---- Preview (miniatura) ----
  const preview = document.createElement("div");
  preview.className = "card__preview";

  const badge = document.createElement("span");
  badge.className = "card__badge";
  badge.textContent = template.category;
  preview.appendChild(badge);

  if (template.thumbnail) {
    const img = document.createElement("img");
    img.src = template.thumbnail;
    img.alt = `Pré-visualização do template ${template.name}`;
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    preview.appendChild(img);
  } else {
    // Miniatura viva a partir do próprio HTML, isolada em iframe sandbox.
    const frame = document.createElement("iframe");
    frame.className = "card__preview-frame";
    frame.setAttribute("sandbox", "");
    frame.setAttribute("scrolling", "no");
    frame.setAttribute("tabindex", "-1");
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("loading", "lazy");
    frame.title = `Pré-visualização de ${template.name}`;
    frame.srcdoc = template.html;
    preview.appendChild(frame);
  }
  const overlay = document.createElement("div");
  overlay.className = "card__preview-overlay";
  preview.appendChild(overlay);

  // ---- Corpo ----
  const body = document.createElement("div");
  body.className = "card__body";
  body.innerHTML = `
    <div class="card__meta">
      <span class="card__segment"></span>
      <span class="card__dot"></span>
      <span class="card__category"></span>
    </div>
    <h3 class="card__title"></h3>
    <p class="card__desc"></p>
  `;
  body.querySelector(".card__segment").textContent = template.segment;
  body.querySelector(".card__category").textContent = template.category;
  body.querySelector(".card__title").textContent = template.name;
  body.querySelector(".card__desc").textContent = template.description;

  // ---- Ações ----
  const actions = document.createElement("div");
  actions.className = "card__actions";

  const viewBtn = document.createElement("button");
  viewBtn.type = "button";
  viewBtn.className = "btn btn--primary";
  viewBtn.innerHTML = `<span class="btn__icon">${icons.eye}</span><span>Visualizar template</span>`;
  viewBtn.setAttribute("aria-label", `Visualizar template ${template.name}`);
  viewBtn.addEventListener("click", () => onView(template));

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "btn btn--secondary";
  copyBtn.dataset.copy = "card";
  copyBtn.innerHTML = `<span class="btn__icon">${icons.copy}</span><span class="btn__label">Copiar HTML</span>`;
  copyBtn.setAttribute("aria-label", `Copiar HTML do template ${template.name}`);
  copyBtn.addEventListener("click", () => onCopy(template, copyBtn));

  actions.append(viewBtn, copyBtn);
  card.append(preview, body, actions);

  return card;
}
