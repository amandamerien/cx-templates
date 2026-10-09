/**
 * Template: Lançamento de produto — Atendo Copiloto (assistente de IA p/ suporte).
 * Marca fake (design de referência "Zendesk"). Ilustrações SVG originais (painel
 * do assistente com botão de play e cluster de avatares), botões lime e seção
 * verde-escura "Dúvidas?".
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "atendo-copiloto-lancamento",
  slug: "atendo-copiloto-lancamento",
  name: "Lançamento — Atendo Copiloto (IA)",
  description:
    "E-mail de lançamento de um assistente de IA para times de suporte, com ilustrações originais, lista de benefícios e seção de dúvidas.",
  category: "Institucional",
  segment: "Tecnologia",
  subject: "Todo time merece um Copiloto",
  preheader: "Conheça o assistente de IA que antecipa o que o cliente precisa.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Lançamento — Atendo Copiloto",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Todo time merece um Copiloto",
  },
  variables: [
    { key: "url_planos", label: "URL — Ver planos", description: "Link “Ver planos” no topo." },
    { key: "url_cta", label: "URL — Testar", description: "Link dos botões “Testar o Copiloto”." },
    { key: "url_agendar", label: "URL — Agendar", description: "Link do botão “Agendar agora”." },
    { key: "url_webversion", label: "URL — Versão web", description: "Link “ver como página” no topo." },
    { key: "url_privacidade", label: "URL — Privacidade", description: "Link “Aviso de Privacidade”." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Gerenciar preferências”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Todo time merece um Copiloto — Atendo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1a1a1a; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:38px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Conheça o assistente de IA que antecipa o que o cliente precisa.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Pré-cabeçalho -->
          <tr>
            <td style="padding:14px 24px; text-align:center;">
              <span style="font-size:11px; color:#8a8a8a;">Para ver este e-mail como página, <a href="{{url_webversion}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">clique aqui</a></span>
            </td>
          </tr>

          <!-- Logo + Ver planos -->
          <tr>
            <td class="px" style="padding:20px 40px 10px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <span style="display:inline-block; width:32px; height:32px; background:#1a1a1a; border-radius:7px; text-align:center; line-height:32px; color:#c9f24d; font-size:17px; font-weight:800; vertical-align:middle;">A</span>
                    <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1a1a1a; margin-left:8px; vertical-align:middle;">atendo</span>
                  </td>
                  <td style="text-align:right; vertical-align:middle;">
                    <a href="{{url_planos}}" target="_blank" style="font-size:14px; font-weight:600; color:#1a1a1a; text-decoration:underline;">Ver planos</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Título + intro -->
          <tr>
            <td class="px" style="padding:30px 40px 0 40px;">
              <h1 class="h1" style="margin:0 0 20px 0; font-size:44px; font-weight:800; line-height:1.08; letter-spacing:-1px; color:#1a1a1a;">Todo time merece um Copiloto</h1>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">Conheça o assistente de IA mais proativo: o Atendo Copiloto antecipa o que o cliente precisa, orienta os atendentes com o próximo passo certo e automatiza tarefas repetitivas — para o seu time trabalhar mais rápido e com mais inteligência.</p>
              <a href="{{url_cta}}" target="_blank" style="display:inline-block; background-color:#c9f24d; color:#0f1b10; font-weight:700; font-size:15px; text-decoration:none; padding:15px 26px; border-radius:40px;">Testar o Copiloto</a>
            </td>
          </tr>

          <!-- Ilustração original: painel do assistente -->
          <tr>
            <td class="px" style="padding:34px 40px 0 40px;">
              <div style="background:linear-gradient(180deg,#f3f7ec 0%,#dcf0b4 100%); border-radius:18px; padding:30px 24px 26px 24px;">
                <p style="margin:0 0 18px 6px; font-size:26px; font-weight:800; letter-spacing:-0.5px; color:#1a1a1a;">Apresentamos o Copiloto</p>
                <svg width="100%" height="240" viewBox="0 0 500 240" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Painel do assistente com sugestão automática e lista de passos">
                  <!-- painel esquerdo -->
                  <rect x="8" y="14" width="300" height="212" rx="14" fill="#ffffff"/>
                  <circle cx="40" cy="48" r="12" fill="#c9f24d"/>
                  <rect x="60" y="42" width="120" height="8" rx="4" fill="#2a2a2a"/>
                  <rect x="60" y="56" width="70" height="6" rx="3" fill="#cfcfcf"/>
                  <rect x="40" y="82" width="230" height="30" rx="8" fill="#f1f1ef"/>
                  <rect x="54" y="93" width="150" height="7" rx="3.5" fill="#b9b9b9"/>
                  <rect x="40" y="126" width="80" height="7" rx="3.5" fill="#1a1a1a"/>
                  <rect x="40" y="144" width="230" height="46" rx="10" fill="#eaf7cf" stroke="#c9f24d" stroke-width="2"/>
                  <path d="M56 160l4 4 7-8" stroke="#2a2a2a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="74" y="156" width="120" height="6" rx="3" fill="#6b7a4f"/>
                  <rect x="74" y="170" width="150" height="6" rx="3" fill="#9aa87c"/>
                  <rect x="40" y="204" width="90" height="10" rx="5" fill="#dedede"/>
                  <!-- painel direito (lista de passos) -->
                  <rect x="300" y="60" width="192" height="150" rx="14" fill="#ffffff"/>
                  <rect x="318" y="78" width="90" height="7" rx="3.5" fill="#2a2a2a"/>
                  <g>
                    <circle cx="326" cy="108" r="7" fill="none" stroke="#bdbdbd" stroke-width="2"/>
                    <rect x="342" y="105" width="120" height="6" rx="3" fill="#c7c7c7"/>
                    <circle cx="326" cy="134" r="7" fill="none" stroke="#bdbdbd" stroke-width="2"/>
                    <rect x="342" y="131" width="130" height="6" rx="3" fill="#c7c7c7"/>
                    <circle cx="326" cy="160" r="7" fill="none" stroke="#bdbdbd" stroke-width="2"/>
                    <rect x="342" y="157" width="104" height="6" rx="3" fill="#c7c7c7"/>
                    <circle cx="326" cy="186" r="8" fill="#c9f24d"/>
                    <path d="M322.5 186l2.5 2.5 4.5-5" stroke="#1a1a1a" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="342" y="183" width="90" height="6" rx="3" fill="#1a1a1a"/>
                  </g>
                  <!-- botão play central -->
                  <circle cx="250" cy="120" r="34" fill="#141414"/>
                  <path d="M242 104l20 16-20 16z" fill="#ffffff"/>
                </svg>
              </div>
            </td>
          </tr>

          <!-- Benefícios -->
          <tr>
            <td class="px" style="padding:46px 40px 0 40px;">
              <h2 style="margin:0 0 22px 0; font-size:28px; font-weight:700; letter-spacing:-0.5px; color:#1a1a1a;">Dê ao seu time um aliado</h2>
              <div style="background:#f4f4f1; border-radius:14px; padding:30px 28px;">
                <p style="margin:0 0 22px 0; font-size:15px; line-height:1.65; color:#2a2a2a;"><strong style="color:#1a1a1a;">Apoie seus atendentes:</strong> aumente a produtividade com ferramentas de IA que escalam o suporte, reduzem o tempo de treinamento e entregam experiências excepcionais sem aumentar a equipe.</p>
                <p style="margin:0 0 22px 0; font-size:15px; line-height:1.65; color:#2a2a2a;"><strong style="color:#1a1a1a;">Otimize seus fluxos:</strong> automatize tarefas repetitivas e agilize a triagem de tickets com as recomendações proativas do Copiloto. Melhore os fluxos continuamente e foque a automação onde ela importa.</p>
                <p style="margin:0; font-size:15px; line-height:1.65; color:#2a2a2a;"><strong style="color:#1a1a1a;">Antecipe o que o cliente precisa:</strong> entenda o que as pessoas estão pedindo e como se sentem, com uma IA que capta os detalhes importantes de cada solicitação.</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="px" style="padding:30px 40px 44px 40px;">
              <a href="{{url_cta}}" target="_blank" style="display:inline-block; background-color:#c9f24d; color:#0f1b10; font-weight:700; font-size:15px; text-decoration:none; padding:15px 26px; border-radius:40px;">Testar o Copiloto</a>
            </td>
          </tr>

          <!-- Seção verde: dúvidas -->
          <tr>
            <td style="background-color:#1b2e1f; padding:44px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" style="width:58%;">
                    <h2 style="margin:0 0 14px 0; font-size:30px; font-weight:700; letter-spacing:-0.5px; color:#ffffff;">Tem dúvidas?</h2>
                    <p style="margin:0 0 26px 0; font-size:15px; line-height:1.65; color:#cfe0c8;">Precisa de ajuda para aproveitar ao máximo o Copiloto? Agende uma conversa ou responda a este e-mail, e um especialista da Atendo vai te acompanhar passo a passo.</p>
                    <a href="{{url_agendar}}" target="_blank" style="display:inline-block; border:1px solid #9bb089; color:#ffffff; font-weight:600; font-size:14px; text-decoration:none; padding:13px 26px; border-radius:40px;">Agendar agora</a>
                  </td>
                  <td valign="middle" style="width:42%; text-align:right;">
                    <!-- Ilustração original: cluster de avatares -->
                    <svg width="180" height="170" viewBox="0 0 180 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Equipe de especialistas">
                      <g>
                        <rect x="20" y="8" width="74" height="74" rx="12" fill="#2f5d3a"/>
                        <circle cx="57" cy="42" r="15" fill="#d7e8cd"/>
                        <path d="M35 78a22 20 0 0 1 44 0z" fill="#d7e8cd"/>
                      </g>
                      <g>
                        <rect x="100" y="30" width="66" height="66" rx="12" fill="#13251a"/>
                        <circle cx="133" cy="58" r="13" fill="#bcd3f0"/>
                        <path d="M114 92a19 17 0 0 1 38 0z" fill="#bcd3f0"/>
                      </g>
                      <g>
                        <rect x="30" y="92" width="64" height="64" rx="12" fill="#3a6b2f"/>
                        <circle cx="62" cy="118" r="12" fill="#f0dcc0"/>
                        <path d="M44 150a18 16 0 0 1 36 0z" fill="#f0dcc0"/>
                      </g>
                    </svg>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:30px 40px 44px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top">
                    <p style="margin:0 0 10px 0; font-size:12px; line-height:1.6; color:#8a8a8a;">Av. Paulista, 1000, 17º andar · São Paulo, SP</p>
                    <p style="margin:0; font-size:12px; line-height:1.6; color:#8a8a8a;">
                      <a href="{{url_privacidade}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Aviso de Privacidade</a> |
                      <a href="{{url_preferencias}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Gerenciar preferências</a> |
                      <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Cancelar inscrição</a>
                    </p>
                  </td>
                  <td valign="top" style="text-align:right;">
                    <span style="display:inline-block; width:26px; height:26px; background:#1a1a1a; border-radius:6px; text-align:center; line-height:26px; color:#c9f24d; font-size:14px; font-weight:800; vertical-align:middle;">A</span>
                    <span style="font-size:17px; font-weight:800; letter-spacing:-0.5px; color:#1a1a1a; margin-left:6px; vertical-align:middle;">atendo</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
