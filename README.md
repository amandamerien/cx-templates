# CX Templates — Biblioteca de templates de e-mail

Biblioteca visual para **visualizar, filtrar, pré-visualizar (desktop/mobile),
ver o código e copiar** templates de e-mail em HTML prontos para personalizar.

Site **estático, sem build e sem framework** (HTML + CSS + JavaScript com ES
modules). Os dados dos templates ficam em arquivos organizados e tipados, então
adicionar um novo template não exige mexer na interface.

---

## Como rodar

ES modules não carregam via `file://` — é preciso servir por HTTP.

```bash
npm run serve
```

Abre em `http://localhost:4173`. (Também pode usar qualquer servidor estático,
ex.: `python3 -m http.server`.)

## Scripts

| Comando          | O que faz                                                        |
| ---------------- | ---------------------------------------------------------------- |
| `npm run serve`  | Sobe um servidor estático local (somente Node nativo).           |
| `npm test`       | Roda os testes (`node --test`) — busca, registry e realce.       |
| `npm run lint`   | Roda o ESLint.                                                   |
| `npm run build`  | Valida o registry e copia os arquivos servíveis para `./dist`.   |

> `npm install` só é necessário para o `lint` (o ESLint é a única dependência).
> `serve`, `test` e `build` usam apenas o Node nativo.

---

## Estrutura

```
index.html                      Página "Templates de e-mail"
assets/css/                     Design system (tokens) + componentes
  tokens.css  base.css  app.css
assets/js/
  app.js                        Estado (busca/filtro), render, contador, estados
  lib/  clipboard.js  highlight.js  search.js
  ui/   card.js  filters.js  modal.js  toast.js  states.js  icons.js
  data/
    categories.js               Catálogo/ordem das categorias e segmentos
    templates/                  1 arquivo por template
    index.js                    Registry central (fonte única de verdade)
types/template.d.ts             Tipagem (autocomplete no editor, sem build)
scripts/ serve.js  build.js  validate-templates.js
tests/   search.test.js  templates.test.js
```

---

## Como adicionar um novo template

Exemplo: um template da categoria **Follow-up**.

1. **Crie o HTML + metadados** em `assets/js/data/templates/<slug>.js`.
   A forma mais rápida é copiar um arquivo existente
   (ex.: `primeiro-contato.js`) e ajustar. O objeto exportado deve seguir o
   tipo `EmailTemplate` (ver `types/template.d.ts`):

   ```js
   /** @type {import("../../../../types/template").EmailTemplate} */
   export const template = {
     id: "adv-follow-up-proposta",
     slug: "follow-up-proposta",          // kebab-case, único
     name: "Follow-up de proposta",
     description: "Retoma o contato após o envio de uma proposta.",
     category: "Follow-up",               // categoria nova aparece sozinha no filtro
     segment: "Advocacia",
     subject: "Podemos seguir com a sua proposta, {{nome_cliente}}?",
     preheader: "Ficou com alguma dúvida sobre a proposta?",
     thumbnail: "",                        // opcional; vazio = preview gerado do HTML
     createdAt: "2026-08-09",
     updatedAt: "2026-08-09",
     variables: [
       { key: "nome_cliente", label: "Nome do cliente", description: "..." },
       // ... toda variável declarada precisa aparecer no HTML como {{chave}}
     ],
     html: `<!DOCTYPE html> ... {{nome_cliente}} ...`,
   };
   ```

2. **Registre no `index.js`** (`assets/js/data/index.js`): importe o arquivo e
   adicione a constante ao array `templates`.

   ```js
   import { template as followUpProposta } from "./templates/follow-up-proposta.js";
   export const templates = [ /* ...existentes */, followUpProposta ];
   ```

3. **Pronto.** O template aparece automaticamente na biblioteca. Se a categoria
   for nova, o filtro correspondente surge sozinho (filtros são derivados dos
   dados). Rode `npm test` para validar (ids/slugs únicos, campos obrigatórios,
   variáveis declaradas presentes no HTML etc.).

### Boas práticas para o HTML de e-mail

- Layout em **tabelas** e **CSS inline**; largura máxima **~600px**.
- Sem JavaScript; evite dependências externas desnecessárias.
- `alt` em todas as imagens; botões com boa área de clique.
- Inclua `<meta name="viewport">` e ajustes `@media` para mobile.
- **Mantenha os placeholders `{{...}}` intactos** — a substituição é feita depois,
  no seu sistema. A biblioteca não substitui variáveis nesta versão.

---

## Placeholders padronizados

`{{nome_cliente}}` · `{{nome_escritorio}}` · `{{nome_advogado}}` ·
`{{data_consulta}}` · `{{horario_consulta}}` · `{{link_agendamento}}` ·
`{{telefone}}` · `{{email}}` · `{{endereco}}` · `{{link_whatsapp}}` ·
`{{texto_botao}}` · `{{url_botao}}`

## Notas

- O preview usa `<iframe sandbox srcdoc>` — o CSS do e-mail fica **isolado** e
  não afeta a interface da documentação.
- Copiar HTML usa a Clipboard API com **fallback** e feedback (rótulo, ícone,
  toast) — requer contexto seguro (`https`/`localhost`) e um clique real.
- Futuro: novas categorias e segmentos (clínicas, imobiliárias, etc.) são só
  novos valores nos dados — a interface não precisa mudar.
