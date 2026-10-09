/**
 * Status de trabalho de cada template, definido pela pessoa e guardado
 * localmente (localStorage). É por navegador/dispositivo — não vai para o
 * servidor nem é compartilhado.
 *
 * Estados:
 *   - rascunho   (padrão) → aparece na tela inicial, ainda não foi feito
 *   - finalizado          → "já fiz"; sai da tela inicial
 *   - publicado           → já publicado na plataforma
 */

const KEY = "cxt:status:v1";

export const STATUS = Object.freeze({
  RASCUNHO: "rascunho",
  FINALIZADO: "finalizado",
  PUBLICADO: "publicado",
});

/** Estado padrão (quando a pessoa ainda não marcou nada). */
export const DEFAULT_STATUS = STATUS.RASCUNHO;

/** Rótulos legíveis por status. */
export const STATUS_LABEL = Object.freeze({
  [STATUS.RASCUNHO]: "Rascunho",
  [STATUS.FINALIZADO]: "Finalizado",
  [STATUS.PUBLICADO]: "Publicado",
});

/** Ordem de exibição dos status (tela inicial = rascunho). */
export const STATUS_ORDER = [STATUS.RASCUNHO, STATUS.FINALIZADO, STATUS.PUBLICADO];

const VALID = new Set(STATUS_ORDER);

/** @returns {Record<string, string>} */
function read() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** @param {Record<string, string>} map */
function write(map) {
  try {
    localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    /* modo privado / storage bloqueado: segue sem persistir */
  }
}

/**
 * Status atual de um template (padrão: rascunho).
 * @param {string} slug
 * @returns {string}
 */
export function getStatus(slug) {
  const s = read()[slug];
  return VALID.has(s) ? s : DEFAULT_STATUS;
}

/**
 * Define o status de um template. Volta para o padrão remove a entrada.
 * @param {string} slug
 * @param {string} status
 */
export function setStatus(slug, status) {
  if (!VALID.has(status)) return;
  const map = read();
  if (status === DEFAULT_STATUS) delete map[slug];
  else map[slug] = status;
  write(map);
}

/**
 * Conta quantos templates há em cada status, considerando a lista informada.
 * @param {{ slug: string }[]} list
 * @returns {Record<string, number>}
 */
export function getStatusCounts(list) {
  const counts = {
    [STATUS.RASCUNHO]: 0,
    [STATUS.FINALIZADO]: 0,
    [STATUS.PUBLICADO]: 0,
  };
  const map = read();
  for (const t of list) {
    const s = VALID.has(map[t.slug]) ? map[t.slug] : DEFAULT_STATUS;
    counts[s] += 1;
  }
  return counts;
}
