/**
 * Realce de sintaxe de HTML — leve, sem dependências externas.
 *
 * Segurança: o texto é escapado ANTES de qualquer processamento; só então
 * inserimos <span> de realce. O HTML do template nunca é executado aqui.
 */

/**
 * Escapa caracteres especiais de HTML.
 * @param {string} str
 * @returns {string}
 */
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Gera HTML com realce de sintaxe a partir de uma string de código HTML.
 * Retorna markup seguro (já escapado) pronto para innerHTML.
 * @param {string} code
 * @returns {string}
 */
export function highlightHtml(code) {
  const escaped = escapeHtml(code);

  // 1) Comentários HTML: <!-- ... -->
  let out = escaped.replace(
    /(&lt;!--[\s\S]*?--&gt;)/g,
    (m) => `<span class="tok-comment">${m}</span>`
  );

  // 2) Tags: de &lt; até &gt;. Dentro, realça nome da tag, atributos e strings.
  out = out.replace(/&lt;\/?[a-zA-Z][\s\S]*?&gt;/g, (tag) => highlightTag(tag));

  // 3) Placeholders {{variavel}} em qualquer lugar (inclusive texto)
  out = out.replace(
    /\{\{\s*[\w.-]+\s*\}\}/g,
    (m) => `<span class="tok-var">${m}</span>`
  );

  return out;
}

/**
 * Realça o interior de uma tag já escapada.
 *
 * Trabalha sobre as partes cruas da tag (abertura, nome, atributos, fechamento)
 * e só então injeta os <span>. Assim o realce de atributos nunca "enxerga" o
 * markup que nós mesmos inserimos (evita corromper as classes dos spans).
 * @param {string} tag
 * @returns {string}
 */
function highlightTag(tag) {
  const openMatch = tag.match(/^&lt;\/?/);
  const open = openMatch ? openMatch[0] : "";
  const closeMatch = tag.match(/\/?&gt;$/);
  const close = closeMatch ? closeMatch[0] : "";

  let inner = tag.slice(open.length, tag.length - close.length);

  // Nome da tag (logo após a abertura)
  let nameHtml = "";
  const nameMatch = inner.match(/^[a-zA-Z][\w:-]*/);
  if (nameMatch) {
    nameHtml = `<span class="tok-tag">${nameMatch[0]}</span>`;
    inner = inner.slice(nameMatch[0].length);
  }

  // Atributos (região sem spans injetados — seguro aplicar regex aqui)
  const attrsHtml = inner.replace(
    /([\w:-]+)(=)("[\s\S]*?"|'[\s\S]*?')/g,
    (_m, name, eq, value) =>
      `<span class="tok-attr">${name}</span>` +
      `<span class="tok-punc">${eq}</span>` +
      `<span class="tok-string">${value}</span>`
  );

  return (
    `<span class="tok-punc">${open}</span>` +
    nameHtml +
    attrsHtml +
    `<span class="tok-punc">${close}</span>`
  );
}

/**
 * Conta linhas de um texto (para a numeração da coluna lateral).
 * @param {string} code
 * @returns {number}
 */
export function countLines(code) {
  if (!code) return 1;
  return code.split("\n").length;
}
