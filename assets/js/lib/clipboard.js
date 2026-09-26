/**
 * Cópia para a área de transferência com fallback e tratamento de erro.
 *
 * Tenta a Clipboard API moderna (requer contexto seguro / permissão). Se
 * indisponível ou negada, usa o fallback baseado em <textarea> + execCommand.
 */

/**
 * Copia texto. Lança um Error se todas as estratégias falharem
 * (ex.: permissão negada em contexto não seguro).
 * @param {string} text
 * @returns {Promise<void>}
 */
export async function copyText(text) {
  const value = String(text ?? "");

  // Estratégia 1: Clipboard API (assíncrona, moderna)
  if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function" &&
    (typeof window === "undefined" || window.isSecureContext !== false)
  ) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Cai para o fallback abaixo.
    }
  }

  // Estratégia 2: fallback com textarea temporário
  if (!copyWithTextarea(value)) {
    throw new Error(
      "Não foi possível copiar. Verifique as permissões da área de transferência."
    );
  }
}

/**
 * Fallback síncrono usando um textarea fora da tela e document.execCommand.
 * @param {string} value
 * @returns {boolean} sucesso
 */
function copyWithTextarea(value) {
  if (typeof document === "undefined") return false;
  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-9999px";
  ta.style.left = "-9999px";
  ta.style.opacity = "0";
  document.body.appendChild(ta);

  const selection = document.getSelection();
  const previousRange =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  ta.select();
  ta.setSelectionRange(0, value.length);

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }

  document.body.removeChild(ta);

  // Restaura a seleção anterior do usuário, se havia.
  if (previousRange && selection) {
    selection.removeAllRanges();
    selection.addRange(previousRange);
  }
  return ok;
}
