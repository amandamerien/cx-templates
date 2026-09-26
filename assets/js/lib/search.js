/**
 * Lógica pura de busca e filtragem de templates.
 * Sem dependências de DOM — assim é facilmente testável (ver tests/).
 */

import { ALL_CATEGORY } from "../data/categories.js";

/**
 * Normaliza texto para busca: minúsculas e sem acentos.
 * @param {string} value
 * @returns {string}
 */
export function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/**
 * Verifica se um template corresponde ao termo de busca.
 * Considera nome, descrição, categoria, segmento, assunto e chaves de variáveis.
 * @param {import("../../../types/template").EmailTemplate} template
 * @param {string} query
 * @returns {boolean}
 */
export function matchesQuery(template, query) {
  const q = normalize(query).trim();
  if (!q) return true;
  const terms = q.split(/\s+/);
  const haystack = normalize(
    [
      template.name,
      template.description,
      template.category,
      template.segment,
      template.subject,
      template.preheader,
      ...(template.variables || []).map((v) => `${v.key} ${v.label}`),
    ].join(" ")
  );
  return terms.every((term) => haystack.includes(term));
}

/**
 * Filtra a lista de templates por categoria e termo de busca.
 * @param {import("../../../types/template").EmailTemplate[]} templates
 * @param {{ category?: string, query?: string }} [options]
 * @returns {import("../../../types/template").EmailTemplate[]}
 */
export function filterTemplates(templates, options = {}) {
  const { category = ALL_CATEGORY, query = "" } = options;
  return templates.filter((t) => {
    const categoryOk = category === ALL_CATEGORY || t.category === category;
    return categoryOk && matchesQuery(t, query);
  });
}
