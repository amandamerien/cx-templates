/**
 * Definições de tipo para a biblioteca de templates de e-mail.
 *
 * Estes tipos servem apenas para autocompletar/checagem no editor. O projeto
 * roda como site estático (sem build), então nada aqui é compilado — os dados
 * reais ficam em arquivos `.js` (ver `assets/js/data/`).
 */

/** Uma variável (placeholder) usada por um template. */
export interface TemplateVariable {
  /** Chave do placeholder, sem as chaves duplas. Ex.: "nome_cliente" */
  key: string;
  /** Rótulo curto e legível. Ex.: "Nome do cliente" */
  label: string;
  /** Explicação breve do que a variável representa. */
  description: string;
}

/** Sugestão de cadastro (para o formulário de "novo template" da plataforma). */
export interface TemplatePublicacao {
  /** Nome sugerido. */
  nome: string;
  /** Categoria sugerida (ex.: "Marketing"). */
  categoria: string;
  /** Subcategoria sugerida (ex.: "Newsletter"). */
  subcategoria: string;
  /** Status sugerido (ex.: "Publicado"). */
  status: string;
  /** Assunto sugerido (linha de assunto do e-mail). */
  assunto: string;
}

/** Um template de e-mail completo. */
export interface EmailTemplate {
  /** Identificador único e estável. */
  id: string;
  /** Slug único, usado em URLs/deep-links. */
  slug: string;
  /** Nome exibido do template. */
  name: string;
  /** Descrição curta mostrada no card e nos detalhes. */
  description: string;
  /** Categoria (ex.: "Confirmação"). Deve existir em categories.js. */
  category: string;
  /** Segmento de mercado (ex.: "Advocacia"). */
  segment: string;
  /** Assunto sugerido para o e-mail. */
  subject: string;
  /** Texto de preheader sugerido. */
  preheader: string;
  /** Miniatura opcional (URL/data-uri). Se ausente, geramos um preview. */
  thumbnail?: string;
  /** HTML completo do e-mail, compatível com clientes de e-mail. */
  html: string;
  /** Sugestão de cadastro para o formulário da plataforma (opcional). */
  publicacao?: TemplatePublicacao;
  /** Variáveis (placeholders) disponíveis no template. */
  variables: TemplateVariable[];
  /** Data de criação (ISO 8601). */
  createdAt: string;
  /** Data da última atualização (ISO 8601). */
  updatedAt: string;
}
