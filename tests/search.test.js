import { test } from "node:test";
import assert from "node:assert/strict";
import {
  normalize,
  matchesQuery,
  filterTemplates,
} from "../assets/js/lib/search.js";

/** @type {any[]} */
const sample = [
  {
    name: "Confirmação de consulta",
    description: "Confirme data e horário",
    category: "Confirmação",
    segment: "Advocacia",
    subject: "Sua consulta",
    preheader: "confirme",
    variables: [{ key: "nome_cliente", label: "Nome do cliente" }],
  },
  {
    name: "Primeiro contato",
    description: "Boas-vindas ao cliente",
    category: "Primeiro contato",
    segment: "Advocacia",
    subject: "Recebemos seu contato",
    preheader: "obrigado",
    variables: [{ key: "nome_escritorio", label: "Nome do escritório" }],
  },
];

test("normalize remove acentos e caixa", () => {
  assert.equal(normalize("Confirmação ÀÉÍ Óç"), "confirmacao aei oc");
  assert.equal(normalize(null), "");
});

test("matchesQuery ignora acentos", () => {
  assert.equal(matchesQuery(sample[0], "confirmacao"), true);
  assert.equal(matchesQuery(sample[0], "CONFIRMAÇÃO"), true);
});

test("matchesQuery com termo vazio retorna true", () => {
  assert.equal(matchesQuery(sample[0], ""), true);
  assert.equal(matchesQuery(sample[0], "   "), true);
});

test("matchesQuery exige todos os termos (AND)", () => {
  assert.equal(matchesQuery(sample[0], "consulta data"), true);
  assert.equal(matchesQuery(sample[0], "consulta inexistente"), false);
});

test("matchesQuery encontra por chave de variável", () => {
  assert.equal(matchesQuery(sample[1], "nome_escritorio"), true);
});

test("filterTemplates por categoria", () => {
  const r = filterTemplates(sample, { category: "Confirmação" });
  assert.equal(r.length, 1);
  assert.equal(r[0].name, "Confirmação de consulta");
});

test('filterTemplates com "Todos" retorna tudo', () => {
  const r = filterTemplates(sample, { category: "Todos" });
  assert.equal(r.length, 2);
});

test("filterTemplates combina categoria + busca", () => {
  const r = filterTemplates(sample, {
    category: "Todos",
    query: "boas-vindas",
  });
  assert.equal(r.length, 1);
  assert.equal(r[0].name, "Primeiro contato");
});

test("filterTemplates sem resultados", () => {
  const r = filterTemplates(sample, { query: "xyz-nao-existe" });
  assert.equal(r.length, 0);
});
