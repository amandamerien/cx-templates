/**
 * Catálogo de categorias e segmentos.
 *
 * A ordem aqui define a ordem de exibição dos filtros. Categorias usadas por
 * um template mas não listadas aqui continuam funcionando (o registry deriva
 * as categorias reais dos dados) — esta lista apenas garante ordem e permite
 * exibir categorias ainda sem templates, se desejado.
 */

/** Rótulo especial do filtro que mostra todos os templates. */
export const ALL_CATEGORY = "Todos";

/** Ordem canônica das categorias iniciais. */
export const CATEGORY_ORDER = [
  "Captação",
  "Boas-vindas",
  "Aniversário",
  "Primeiro contato",
  "Agendamento",
  "Confirmação",
  "Lembrete",
  "Follow-up",
  "Promoção",
  "Proposta",
  "Documentos",
  "Newsletter",
  "Pós-atendimento",
  "Reativação",
  "Institucional",
];

/** Segmentos previstos (usado para futura organização por segmento). */
export const SEGMENTS = [
  "Advocacia",
  "Presentes corporativos",
  "E-commerce",
  "Cafeteria",
  "Restaurante",
  "Saúde",
  "Arte",
  "Barbearia",
  "Educação",
  "Tecnologia",
  "Clínicas",
  "Imobiliárias",
];

/**
 * Ordena uma lista de categorias segundo CATEGORY_ORDER. Categorias
 * desconhecidas vão para o fim, em ordem alfabética.
 * @param {string[]} categories
 * @returns {string[]}
 */
export function sortCategories(categories) {
  const rank = (c) => {
    const i = CATEGORY_ORDER.indexOf(c);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  return [...categories].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b, "pt-BR");
  });
}
