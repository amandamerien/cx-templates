/**
 * Toasts de feedback (sucesso / erro / info), acessíveis via aria-live.
 */

const ICONS = {
  success:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  error:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
};

let region;

/** Garante que a região de toasts exista no DOM. */
function ensureRegion() {
  if (region && document.body.contains(region)) return region;
  region = document.createElement("div");
  region.className = "toast-region";
  region.setAttribute("role", "status");
  region.setAttribute("aria-live", "polite");
  region.setAttribute("aria-atomic", "true");
  document.body.appendChild(region);
  return region;
}

/**
 * Exibe um toast.
 * @param {string} message
 * @param {{ type?: "success" | "error" | "info", duration?: number }} [options]
 */
export function showToast(message, options = {}) {
  const { type = "info", duration = 3200 } = options;
  const host = ensureRegion();

  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${ICONS[type] || ICONS.info}</span>
    <span class="toast__msg"></span>
  `;
  toast.querySelector(".toast__msg").textContent = message;
  host.appendChild(toast);

  const remove = () => {
    toast.classList.add("is-leaving");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
    // Fallback caso a animação não dispare
    setTimeout(() => toast.remove(), 400);
  };

  const timer = setTimeout(remove, duration);
  toast.addEventListener("click", () => {
    clearTimeout(timer);
    remove();
  });
}
