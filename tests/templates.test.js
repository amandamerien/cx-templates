import { test } from "node:test";
import assert from "node:assert/strict";
import { validateTemplates } from "../scripts/validate-templates.js";
import { highlightHtml, escapeHtml, countLines } from "../assets/js/lib/highlight.js";
import {
  templates,
  getCategories,
  getCategoryCounts,
  getSegments,
  getTemplateBySlug,
} from "../assets/js/data/index.js";

test("o registry tem pelo menos os 3 templates iniciais", () => {
  assert.ok(templates.length >= 3);
});

test("todos os templates são válidos", () => {
  const errors = validateTemplates(templates);
  assert.deepEqual(errors, [], errors.join("\n"));
});

test("os slugs esperados existem", () => {
  for (const slug of [
    "primeiro-contato",
    "confirmacao-consulta",
    "lembrete-documentos",
  ]) {
    assert.ok(getTemplateBySlug(slug), `faltando slug ${slug}`);
  }
});

test('getCategories inclui "Todos" na frente e é ordenada', () => {
  const cats = getCategories();
  assert.equal(cats[0], "Todos");
  assert.ok(cats.includes("Confirmação"));
});

test("getCategoryCounts soma corretamente", () => {
  const counts = getCategoryCounts();
  assert.equal(counts["Todos"], templates.length);
});

test("getSegments retorna Advocacia", () => {
  assert.ok(getSegments().includes("Advocacia"));
});

test("todo HTML mantém os placeholders das variáveis intactos", () => {
  for (const t of templates) {
    for (const v of t.variables) {
      assert.ok(
        t.html.includes(`{{${v.key}}}`),
        `${t.slug}: placeholder {{${v.key}}} ausente`
      );
    }
  }
});

test("HTML de e-mail usa tabela e largura máxima ~600px", () => {
  for (const t of templates) {
    assert.match(t.html, /<table/i, `${t.slug}: sem <table>`);
    assert.match(t.html, /600px|width="600"/i, `${t.slug}: sem largura de 600`);
  }
});

test("escapeHtml escapa caracteres perigosos", () => {
  assert.equal(escapeHtml('<a href="x">&'), "&lt;a href=\"x\"&gt;&amp;");
});

test("highlightHtml não deixa vazar tags do código-fonte", () => {
  const out = highlightHtml('<script>alert(1)</script>');
  assert.ok(!out.includes("<script>"), "tag <script> crua vazou");
  assert.ok(out.includes("&lt;"), "não escapou <");
});

test("highlightHtml realça placeholders", () => {
  const out = highlightHtml("Olá {{nome_cliente}}");
  assert.match(out, /tok-var/);
});

test("countLines conta linhas", () => {
  assert.equal(countLines("a\nb\nc"), 3);
  assert.equal(countLines(""), 1);
});
