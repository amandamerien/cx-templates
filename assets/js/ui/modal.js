/**
 * Modal de detalhes do template.
 *
 * Recursos: abas Visual/Código HTML, alternância desktop/mobile, preview
 * isolado em <iframe sandbox srcdoc>, código com numeração de linhas e realce,
 * lista de variáveis, orientações e botão copiar. Acessível: foco preso,
 * ESC fecha, foco retorna ao elemento de origem.
 */

import { icons } from "./icons.js";
import { highlightHtml, countLines } from "../lib/highlight.js";
import { copyText } from "../lib/clipboard.js";
import { showToast } from "./toast.js";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

let openState = null;

/**
 * Monta a sugestão de cadastro (usa template.publicacao ou deriva dos campos).
 * @param {import("../../../types/template").EmailTemplate} t
 * @returns {Array<[string, string]>}
 */
function getPublicacao(t) {
  const p = t.publicacao || {};
  return [
    ["Nome", p.nome || t.name],
    ["Categoria", p.categoria || "Marketing"],
    ["Subcategoria", p.subcategoria || t.category],
    ["Status", p.status || "Publicado"],
    ["Assunto", p.assunto || t.subject || ""],
  ];
}

/**
 * Abre o modal para um template.
 * @param {import("../../../types/template").EmailTemplate} template
 * @param {{ onCopy: (t: any, btn: HTMLButtonElement) => void, onClose?: () => void }} handlers
 */
export function openModal(template, { onCopy, onClose }) {
  closeModal();

  const previousFocus = document.activeElement;

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";

  const titleId = `modal-title-${template.slug}`;
  const descId = `modal-desc-${template.slug}`;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", titleId);
  modal.setAttribute("aria-describedby", descId);

  modal.innerHTML = buildMarkup(template, titleId, descId);
  fillContent(modal, template);
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);
  document.body.style.overflow = "hidden";

  // ---- Referências ----
  const q = (sel) => modal.querySelector(sel);
  const viewer = q('[data-region="viewer"]');
  const device = q('[data-region="device"]');
  const codeView = q('[data-region="code"]');
  const copyBtn = /** @type {HTMLButtonElement} */ (q('[data-copy="modal"]'));

  // ---- Preview (iframe isolado) ----
  renderPreview(viewer, device, template);

  // ---- Código com realce + numeração ----
  renderCode(codeView, template.html);

  // ---- Abas Visual / Código ----
  const tabVisual = q('[data-tab="visual"]');
  const tabCode = q('[data-tab="code"]');
  const setTab = (tab) => {
    const isVisual = tab === "visual";
    tabVisual.setAttribute("aria-selected", String(isVisual));
    tabCode.setAttribute("aria-selected", String(!isVisual));
    viewer.classList.toggle("is-hidden", !isVisual);
    codeView.classList.toggle("is-active", !isVisual);
    q('[data-region="devices"]').style.visibility = isVisual
      ? "visible"
      : "hidden";
  };
  tabVisual.addEventListener("click", () => setTab("visual"));
  tabCode.addEventListener("click", () => setTab("code"));

  // ---- Desktop / Mobile ----
  const btnDesktop = q('[data-device="desktop"]');
  const btnMobile = q('[data-device="mobile"]');
  const setDevice = (mode) => {
    const mobile = mode === "mobile";
    device.classList.toggle("is-mobile", mobile);
    btnDesktop.setAttribute("aria-pressed", String(!mobile));
    btnMobile.setAttribute("aria-pressed", String(mobile));
  };
  btnDesktop.addEventListener("click", () => setDevice("desktop"));
  btnMobile.addEventListener("click", () => setDevice("mobile"));

  // ---- Copiar ----
  copyBtn.addEventListener("click", () => onCopy(template, copyBtn));

  // ---- Copiar campos da sugestão de cadastro ----
  const copyField = async (value, label) => {
    try {
      await copyText(value);
      showToast(`${label} copiado`, { type: "success" });
    } catch {
      showToast("Não foi possível copiar", { type: "error" });
    }
  };
  modal.querySelectorAll(".reg-copy").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.closest(".reg-item")?.querySelector(".reg-item__label")
        ?.textContent;
      copyField(btn.dataset.value || "", label || "Campo");
    });
  });
  const copyAllBtn = q("[data-reg-copy-all]");
  if (copyAllBtn) {
    copyAllBtn.addEventListener("click", () => {
      const text = getPublicacao(template)
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n");
      copyField(text, "Todos os campos");
    });
  }

  // ---- Fechar ----
  q('[data-action="close"]').addEventListener("click", closeModal);
  backdrop.addEventListener("mousedown", (e) => {
    if (e.target === backdrop) closeModal();
  });

  // ---- Teclado: ESC + focus trap ----
  const onKeydown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    } else if (e.key === "Tab") {
      trapFocus(e, modal);
    }
  };
  document.addEventListener("keydown", onKeydown);

  openState = { backdrop, previousFocus, onKeydown, onClose };

  // Foco inicial no botão de fechar
  q('[data-action="close"]').focus();
}

/** Fecha o modal e restaura o foco. */
export function closeModal() {
  if (!openState) return;
  const { backdrop, previousFocus, onKeydown, onClose } = openState;
  openState = null; // evita reentrância a partir do onClose
  document.removeEventListener("keydown", onKeydown);
  backdrop.remove();
  document.body.style.overflow = "";
  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
  if (typeof onClose === "function") onClose();
}

/** @returns {boolean} */
export function isModalOpen() {
  return openState !== null;
}

// ---------------------------------------------------------------------------
// Helpers internos
// ---------------------------------------------------------------------------

function buildMarkup(t, titleId, descId) {
  return `
    <header class="modal__header">
      <div class="modal__heading">
        <h2 class="modal__title" id="${titleId}"></h2>
        <p class="modal__desc" id="${descId}"></p>
        <div class="modal__meta">
          <span class="tag tag--accent" data-field="category"></span>
          <span class="tag" data-field="segment"></span>
        </div>
      </div>
      <button type="button" class="modal__close" data-action="close" aria-label="Fechar">
        ${icons.close}
      </button>
    </header>

    <div class="modal__body">
      <div class="modal__main">
        <div class="viewer-toolbar">
          <div class="segmented" role="tablist" aria-label="Modo de visualização">
            <button type="button" class="segmented__btn" role="tab" data-tab="visual" aria-selected="true">
              ${icons.layout}<span>Visual</span>
            </button>
            <button type="button" class="segmented__btn" role="tab" data-tab="code" aria-selected="false">
              ${icons.code}<span>Código HTML</span>
            </button>
          </div>
          <div class="segmented" data-region="devices" role="group" aria-label="Tamanho da tela">
            <button type="button" class="segmented__btn" data-device="desktop" aria-pressed="true" aria-label="Visualizar em desktop">
              ${icons.desktop}<span>Desktop</span>
            </button>
            <button type="button" class="segmented__btn" data-device="mobile" aria-pressed="false" aria-label="Visualizar em mobile">
              ${icons.mobile}<span>Mobile</span>
            </button>
          </div>
        </div>

        <div class="viewer" data-region="viewer">
          <div class="viewer__stage">
            <div class="viewer__device" data-region="device"></div>
          </div>
        </div>

        <div class="code-view" data-region="code"></div>
      </div>

      <aside class="modal__aside">
        <div>
          <div class="aside-section__title">${icons.clipboard}<span>Sugestão de cadastro</span></div>
          <div class="reg-list" data-region="registro"></div>
          <button type="button" class="btn btn--secondary btn--sm btn--block" data-reg-copy-all style="margin-top:12px;">
            <span class="btn__icon">${icons.copy}</span><span>Copiar todos os campos</span>
          </button>
        </div>

        <div class="field-block">
          <span class="field-block__label">Assunto sugerido</span>
          <span class="field-block__value" data-field="subject"></span>
        </div>
        <div class="field-block">
          <span class="field-block__label">Preheader sugerido</span>
          <span class="field-block__value" data-field="preheader"></span>
        </div>

        <div>
          <div class="aside-section__title">${icons.braces}<span>Variáveis disponíveis</span></div>
          <div class="var-list" data-region="variables"></div>
        </div>

        <div>
          <div class="aside-section__title">${icons.sparkles}<span>Como personalizar</span></div>
          <ul class="tips">
            <li>Substitua cada variável no formato <code>{{chave}}</code> pelo valor real antes de enviar.</li>
            <li>Os placeholders permanecem no HTML copiado — a substituição é feita depois, no seu sistema.</li>
            <li>Confira o assunto e o preheader; eles aparecem na caixa de entrada antes de abrir o e-mail.</li>
            <li>Envie um teste para você mesmo e confira em desktop e no celular.</li>
          </ul>
        </div>
      </aside>
    </div>

    <footer class="modal__footer">
      <button type="button" class="btn btn--ghost" data-action="close">Fechar</button>
      <button type="button" class="btn btn--primary" data-copy="modal">
        <span class="btn__icon">${icons.copy}</span><span class="btn__label">Copiar HTML</span>
      </button>
    </footer>
  `;
}

/** Preenche textos e a lista de variáveis (via textContent, sem innerHTML). */
function fillContent(modal, t) {
  modal.querySelector(".modal__title").textContent = t.name;
  modal.querySelector(".modal__desc").textContent = t.description;
  modal.querySelector('[data-field="category"]').textContent = t.category;
  modal.querySelector('[data-field="segment"]').textContent = t.segment;
  modal.querySelector('[data-field="subject"]').textContent = t.subject || "—";
  modal.querySelector('[data-field="preheader"]').textContent =
    t.preheader || "—";

  // Sugestão de cadastro
  const regRegion = modal.querySelector('[data-region="registro"]');
  if (regRegion) {
    regRegion.innerHTML = "";
    for (const [label, value] of getPublicacao(t)) {
      const item = document.createElement("div");
      item.className = "reg-item";
      item.innerHTML = `
        <div class="reg-item__head">
          <span class="reg-item__label"></span>
          <button type="button" class="reg-copy" title="Copiar" aria-label="Copiar">${icons.copy}</button>
        </div>
        <div class="reg-item__value"></div>
      `;
      item.querySelector(".reg-item__label").textContent = label;
      item.querySelector(".reg-item__value").textContent = value;
      const btn = item.querySelector(".reg-copy");
      btn.dataset.value = value;
      btn.setAttribute("aria-label", `Copiar ${label}`);
      regRegion.appendChild(item);
    }
  }

  const varRegion = modal.querySelector('[data-region="variables"]');
  varRegion.innerHTML = "";
  const vars = t.variables || [];
  if (!vars.length) {
    const empty = document.createElement("p");
    empty.className = "var-item__desc";
    empty.textContent = "Este template não possui variáveis.";
    varRegion.appendChild(empty);
    return;
  }
  vars.forEach((v) => {
    const item = document.createElement("div");
    item.className = "var-item";
    item.innerHTML = `
      <code class="var-item__key"></code>
      <div class="var-item__label"></div>
      <div class="var-item__desc"></div>
    `;
    item.querySelector(".var-item__key").textContent = `{{${v.key}}}`;
    item.querySelector(".var-item__label").textContent = v.label;
    item.querySelector(".var-item__desc").textContent = v.description;
    varRegion.appendChild(item);
  });
}

/** Renderiza o preview no iframe isolado, ou o estado "indisponível". */
function renderPreview(viewer, device, t) {
  if (!t.html || !t.html.trim()) {
    viewer.querySelector(".viewer__stage").innerHTML = `
      <div class="viewer__unavailable state">
        <div class="state__icon">${icons.imageOff}</div>
        <p class="state__title" style="color:#e2e8f0">Pré-visualização indisponível</p>
        <p class="state__desc" style="color:#94a3b8">Este template ainda não tem HTML para exibir.</p>
      </div>`;
    return;
  }
  const frame = document.createElement("iframe");
  frame.className = "viewer__frame";
  frame.setAttribute("sandbox", "");
  frame.setAttribute("loading", "lazy");
  frame.title = `Pré-visualização do e-mail: ${t.name}`;
  frame.srcdoc = t.html;
  device.appendChild(frame);
}

/** Renderiza o código com numeração de linhas e realce de sintaxe. */
function renderCode(codeView, html) {
  const lines = countLines(html);
  const gutter = Array.from({ length: lines }, (_, i) => i + 1).join("\n");

  codeView.innerHTML = `
    <div class="code-scroll">
      <div class="code-table">
        <div class="code-gutter" aria-hidden="true"></div>
        <pre class="code-content"><code></code></pre>
      </div>
    </div>
  `;
  codeView.querySelector(".code-gutter").textContent = gutter;
  // highlightHtml retorna markup já escapado e seguro.
  codeView.querySelector(".code-content code").innerHTML = highlightHtml(html);
}

/** Mantém o foco dentro do modal ao usar Tab. */
function trapFocus(e, modal) {
  const focusables = Array.from(modal.querySelectorAll(FOCUSABLE)).filter(
    (el) => el.offsetParent !== null || el === document.activeElement
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}
