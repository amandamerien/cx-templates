/**
 * "Build" de um site estático: não há bundling. Este passo valida a
 * integridade dos dados e copia os arquivos servíveis para ./dist.
 *
 *   node scripts/build.js
 *
 * Sai com código != 0 se a validação falhar (útil em CI).
 */
import { cp, rm, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { validateRegistry } from "./validate-templates.js";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIST = join(ROOT, "dist");

async function main() {
  console.log("→ Validando registry de templates…");
  const { errors, count } = await validateRegistry();

  if (errors.length) {
    console.error(`\n✖ ${errors.length} erro(s) de validação:\n`);
    for (const e of errors) console.error("  • " + e);
    process.exit(1);
  }
  console.log(`✓ ${count} templates válidos.`);

  console.log("→ Gerando ./dist…");
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });
  await cp(join(ROOT, "index.html"), join(DIST, "index.html"));
  await cp(join(ROOT, "assets"), join(DIST, "assets"), { recursive: true });
  await cp(join(ROOT, "types"), join(DIST, "types"), { recursive: true });

  console.log("✓ Build concluído em ./dist\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
