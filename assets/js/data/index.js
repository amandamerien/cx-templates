/**
 * Registry central de templates.
 *
 * >>> PARA ADICIONAR UM NOVO TEMPLATE <<<
 *   1. Crie o arquivo HTML+metadados em ./templates/<slug>.js
 *      (exporte uma constante `template` seguindo o tipo EmailTemplate).
 *   2. Importe-o aqui.
 *   3. Adicione-o ao array `templates` abaixo.
 *   Pronto — ele aparece automaticamente na biblioteca, e sua categoria/segmento
 *   passam a existir nos filtros sem nenhuma outra alteração de interface.
 */

import { template as boasVindasPresentes } from "./templates/boas-vindas-presentes.js";
import { template as clubeDaSujeiraCupom } from "./templates/clube-da-sujeira-cupom.js";
import { template as graoCoAniversario } from "./templates/grao-co-aniversario.js";
import { template as minhaHistoriaCupom } from "./templates/minha-historia-cupom.js";
import { template as soltaLeve2Pague1 } from "./templates/solta-leve2-pague1.js";
import { template as passoVoltaAsAulas } from "./templates/passo-volta-as-aulas.js";
import { template as doceLabLancamento } from "./templates/doce-lab-lancamento.js";
import { template as casaMuchachoCombos } from "./templates/casa-muchacho-combos.js";
import { template as momoPetIndiqueGanhe } from "./templates/momo-pet-indique-ganhe.js";
import { template as lunaAssistenteSono } from "./templates/luna-assistente-sono.js";
import { template as leveNovoValor } from "./templates/leve-novo-valor.js";
import { template as beatflowClubeBeneficios } from "./templates/beatflow-clube-beneficios.js";
import { template as helenaPradoBoasVindas } from "./templates/helena-prado-boas-vindas.js";
import { template as bravusBarbeariaAgende } from "./templates/bravus-barbearia-agende.js";
import { template as edducaDogTreinamento } from "./templates/edduca-dog-treinamento.js";
import { template as advideoAiAnuncios } from "./templates/advideo-ai-anuncios.js";
import { template as greenhouseMyGreenhouse } from "./templates/greenhouse-mygreenhouse.js";
import { template as markerBoasVindas } from "./templates/marker-boas-vindas.js";
import { template as fyproBoasVindas } from "./templates/fypro-boas-vindas.js";
import { template as claudeAssinaturaPro } from "./templates/claude-assinatura-pro.js";
import { template as gammaBoasVindas } from "./templates/gamma-boas-vindas.js";
import { template as brightnestNewsletter } from "./templates/brightnest-newsletter.js";
import { template as budgetlyBoasVindas } from "./templates/budgetly-boas-vindas.js";
import { template as stowlyBoasVindas } from "./templates/stowly-boas-vindas.js";
import { template as weblumeGetStarted } from "./templates/weblume-get-started.js";
import { template as tracklyBoasVindas } from "./templates/trackly-boas-vindas.js";
import { template as rossaInscricao } from "./templates/rossa-inscricao.js";
import { template as reviewlyBoasVindas } from "./templates/reviewly-boas-vindas.js";
import { template as bakerNoirBoasVindas } from "./templates/baker-noir-boas-vindas.js";
import { template as primeiroContato } from "./templates/primeiro-contato.js";
import { template as confirmacaoConsulta } from "./templates/confirmacao-consulta.js";
import { template as lembreteDocumentos } from "./templates/lembrete-documentos.js";
import { template as prosaDicasLeitura } from "./templates/prosa-dicas-leitura.js";
import { template as prosaCodigoVerificacao } from "./templates/prosa-codigo-verificacao.js";
import { template as fluxoAutomacoesIa } from "./templates/fluxo-automacoes-ia.js";
import { template as coinlyComeceAgora } from "./templates/coinly-comece-agora.js";
import { template as atendoCopilotoLancamento } from "./templates/atendo-copiloto-lancamento.js";
import { template as engajoConviteTime } from "./templates/engajo-convite-time.js";
import { template as zeloSuporteCompleto } from "./templates/zelo-suporte-completo.js";
import { template as serenoCheckIn } from "./templates/sereno-check-in.js";
import { template as curseoOferta3Por1 } from "./templates/curseo-oferta-3-por-1.js";
import { template as tareflyMaisUmaSemana } from "./templates/tarefly-mais-uma-semana.js";
import { template as fluentoConfirmeEmail } from "./templates/fluento-confirme-email.js";
import { template as iconixContaQuasePronta } from "./templates/iconix-conta-quase-pronta.js";
import { template as quizzyVerifiqueEmail } from "./templates/quizzy-verifique-email.js";
import { template as viajaBoasVindas } from "./templates/viaja-boas-vindas.js";
import { template as telaflixCriarConta } from "./templates/telaflix-criar-conta.js";
import { template as pixelaBoasVindas } from "./templates/pixela-boas-vindas.js";
import { template as dominixBoasVindas } from "./templates/dominix-boas-vindas.js";
import { template as testiaBetaAprovado } from "./templates/testia-beta-aprovado.js";
import { template as orbitaConfiancaClientes } from "./templates/orbita-confianca-clientes.js";
import { template as datalisBoasVindas } from "./templates/datalis-boas-vindas.js";
import { template as tareflyConsultoria1a1 } from "./templates/tarefly-consultoria-1a1.js";
import { template as zeloPerguntasFrequentes } from "./templates/zelo-perguntas-frequentes.js";
import { template as ataAiIntegracoes } from "./templates/ata-ai-integracoes.js";
import { template as streamiaBoasVindas } from "./templates/streamia-boas-vindas.js";
import { template as raizesBoasVindas } from "./templates/raizes-boas-vindas.js";
import { ALL_CATEGORY, sortCategories } from "./categories.js";

/**
 * Fonte única de verdade. A ordem aqui é a ordem padrão de exibição.
 * @type {import("../../../types/template").EmailTemplate[]}
 */
export const templates = [
  boasVindasPresentes,
  clubeDaSujeiraCupom,
  graoCoAniversario,
  minhaHistoriaCupom,
  soltaLeve2Pague1,
  passoVoltaAsAulas,
  doceLabLancamento,
  casaMuchachoCombos,
  momoPetIndiqueGanhe,
  lunaAssistenteSono,
  leveNovoValor,
  beatflowClubeBeneficios,
  helenaPradoBoasVindas,
  bravusBarbeariaAgende,
  edducaDogTreinamento,
  advideoAiAnuncios,
  greenhouseMyGreenhouse,
  markerBoasVindas,
  fyproBoasVindas,
  claudeAssinaturaPro,
  gammaBoasVindas,
  brightnestNewsletter,
  budgetlyBoasVindas,
  stowlyBoasVindas,
  weblumeGetStarted,
  tracklyBoasVindas,
  rossaInscricao,
  reviewlyBoasVindas,
  bakerNoirBoasVindas,
  primeiroContato,
  confirmacaoConsulta,
  lembreteDocumentos,
  prosaDicasLeitura,
  prosaCodigoVerificacao,
  fluxoAutomacoesIa,
  coinlyComeceAgora,
  atendoCopilotoLancamento,
  engajoConviteTime,
  zeloSuporteCompleto,
  serenoCheckIn,
  curseoOferta3Por1,
  tareflyMaisUmaSemana,
  fluentoConfirmeEmail,
  iconixContaQuasePronta,
  quizzyVerifiqueEmail,
  viajaBoasVindas,
  telaflixCriarConta,
  pixelaBoasVindas,
  dominixBoasVindas,
  testiaBetaAprovado,
  orbitaConfiancaClientes,
  datalisBoasVindas,
  tareflyConsultoria1a1,
  zeloPerguntasFrequentes,
  ataAiIntegracoes,
  streamiaBoasVindas,
  raizesBoasVindas,
];

/**
 * Deriva as categorias realmente usadas pelos templates (com "Todos" na frente),
 * ordenadas segundo o catálogo. Filtros são, portanto, dinâmicos.
 * @param {import("../../../types/template").EmailTemplate[]} [list=templates]
 * @returns {string[]}
 */
export function getCategories(list = templates) {
  const used = new Set(list.map((t) => t.category).filter(Boolean));
  return [ALL_CATEGORY, ...sortCategories([...used])];
}

/**
 * Deriva os segmentos usados pelos templates.
 * @param {import("../../../types/template").EmailTemplate[]} [list=templates]
 * @returns {string[]}
 */
export function getSegments(list = templates) {
  return [...new Set(list.map((t) => t.segment).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "pt-BR")
  );
}

/**
 * Conta quantos templates existem por categoria.
 * @param {import("../../../types/template").EmailTemplate[]} [list=templates]
 * @returns {Record<string, number>}
 */
export function getCategoryCounts(list = templates) {
  /** @type {Record<string, number>} */
  const counts = { [ALL_CATEGORY]: list.length };
  for (const t of list) {
    counts[t.category] = (counts[t.category] || 0) + 1;
  }
  return counts;
}

/**
 * Busca um template pelo slug.
 * @param {string} slug
 * @param {import("../../../types/template").EmailTemplate[]} [list=templates]
 * @returns {import("../../../types/template").EmailTemplate | undefined}
 */
export function getTemplateBySlug(slug, list = templates) {
  return list.find((t) => t.slug === slug);
}
