/**
 * Validação da integridade do registry de templates.
 * Reutilizada pelo build e pelos testes.
 */
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

const REQUIRED_STRING_FIELDS = [
  "id",
  "slug",
  "name",
  "description",
  "category",
  "segment",
  "subject",
  "preheader",
  "html",
  "createdAt",
  "updatedAt",
];

/**
 * Valida uma lista de templates.
 * @param {import("../types/template").EmailTemplate[]} templates
 * @returns {string[]} lista de mensagens de erro (vazia = ok)
 */
export function validateTemplates(templates) {
  const errors = [];
  const ids = new Map();
  const slugs = new Map();

  if (!Array.isArray(templates)) {
    return ["`templates` deve ser um array."];
  }

  templates.forEach((t, i) => {
    const ref = t && (t.slug || t.id) ? `"${t.slug || t.id}"` : `#${i}`;

    if (!t || typeof t !== "object") {
      errors.push(`Template ${ref}: não é um objeto.`);
      return;
    }

    for (const field of REQUIRED_STRING_FIELDS) {
      if (typeof t[field] !== "string" || t[field].trim() === "") {
        errors.push(`Template ${ref}: campo obrigatório "${field}" ausente ou vazio.`);
      }
    }

    // Slug em kebab-case
    if (t.slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(t.slug)) {
      errors.push(`Template ${ref}: slug "${t.slug}" deve estar em kebab-case.`);
    }

    // Unicidade
    if (t.id) {
      if (ids.has(t.id)) errors.push(`id duplicado: "${t.id}".`);
      ids.set(t.id, true);
    }
    if (t.slug) {
      if (slugs.has(t.slug)) errors.push(`slug duplicado: "${t.slug}".`);
      slugs.set(t.slug, true);
    }

    // Datas ISO
    for (const dateField of ["createdAt", "updatedAt"]) {
      if (t[dateField] && Number.isNaN(Date.parse(t[dateField]))) {
        errors.push(`Template ${ref}: ${dateField} "${t[dateField]}" não é uma data válida.`);
      }
    }

    // Variáveis bem formadas + coerência com o HTML
    if (!Array.isArray(t.variables)) {
      errors.push(`Template ${ref}: "variables" deve ser um array.`);
    } else {
      t.variables.forEach((v, vi) => {
        if (!v || typeof v.key !== "string" || !v.key.trim()) {
          errors.push(`Template ${ref}: variável #${vi} sem "key".`);
          return;
        }
        if (typeof v.label !== "string" || !v.label.trim()) {
          errors.push(`Template ${ref}: variável "${v.key}" sem "label".`);
        }
        if (typeof v.description !== "string" || !v.description.trim()) {
          errors.push(`Template ${ref}: variável "${v.key}" sem "description".`);
        }
        if (typeof t.html === "string" && !t.html.includes(`{{${v.key}}}`)) {
          errors.push(
            `Template ${ref}: variável "${v.key}" declarada mas não usada no HTML.`
          );
        }
      });
    }

    // Boas práticas de e-mail: viewport para mobile
    if (typeof t.html === "string" && !/name=["']viewport["']/.test(t.html)) {
      errors.push(`Template ${ref}: HTML sem meta viewport (recomendado para mobile).`);
    }
  });

  return errors;
}

/**
 * Carrega o registry real e valida.
 * @returns {Promise<{ errors: string[], count: number }>}
 */
export async function validateRegistry() {
  const mod = await import(
    pathToFileURL(join(ROOT, "assets/js/data/index.js")).href
  );
  const templates = mod.templates || [];
  return { errors: validateTemplates(templates), count: templates.length };
}
