/**
 * Template: Acesso ao Beta — Testia (ferramenta de criação de testes/quizzes com IA).
 * Marca fake (nunca "Meiro"). Tema escuro, header com gradiente SVG original
 * (verde-limão → rosa → lilás) e lista de recursos com setas verde-limão.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "testia-beta-aprovado",
  slug: "testia-beta-aprovado",
  name: "Acesso ao Beta — Testia",
  description:
    "E-mail de aprovação no beta de uma ferramenta de quizzes com IA, tema escuro, header em gradiente e lista de recursos.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Você foi aprovado no Testia Beta",
  preheader: "Seu acesso ao Beta está liberado — é grátis, experimente agora.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Acesso ao Beta — Testia",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Você foi aprovado no Testia Beta",
  },
  variables: [
    { key: "url_signup", label: "URL — Criar conta", description: "Link do botão “Criar conta”." },
    { key: "url_roadmap", label: "URL — Abrir roadmap", description: "Link do botão “Abrir roadmap”." },
    { key: "url_twitter", label: "URL — Seguir no Twitter", description: "Link do botão “Seguir no Twitter”." },
    { key: "url_telegram", label: "URL — Chat no Telegram", description: "Link “chat no Telegram” para feedback." },
    { key: "email_contato", label: "E-mail de contato", description: "E-mail do time no rodapé (ex.: contato@testia.com.br)." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Você foi aprovado no Testia Beta</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#0e0e0e; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#b98cff; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#0e0e0e; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ececec;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#0e0e0e;">
    Seu acesso ao Beta está liberado — é grátis, experimente agora.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0e0e0e;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Card -->
          <tr>
            <td style="background-color:#141414; border-radius:16px; overflow:hidden; border:1px solid #242424;">

              <!-- Header com gradiente SVG original -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0;">
                    <svg width="100%" height="240" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Você foi aprovado para o Testia Beta">
                      <defs>
                        <linearGradient id="tstGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#d4f03c"/>
                          <stop offset="48%" stop-color="#ff7ac2"/>
                          <stop offset="100%" stop-color="#b98cff"/>
                        </linearGradient>
                        <radialGradient id="tstGlow" cx="0.8" cy="0.2" r="0.9">
                          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
                          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                        </radialGradient>
                      </defs>
                      <rect x="0" y="0" width="600" height="240" fill="url(#tstGrad)"/>
                      <rect x="0" y="0" width="600" height="240" fill="url(#tstGlow)"/>
                      <circle cx="505" cy="48" r="80" fill="#ffffff" fill-opacity="0.08"/>
                      <circle cx="80" cy="200" r="70" fill="#ffffff" fill-opacity="0.08"/>
                      <!-- logo testia em preto -->
                      <text x="40" y="58" font-family="Inter,Arial,sans-serif" font-size="26" font-weight="800" letter-spacing="-1" fill="#0e0e0e">testia</text>
                      <!-- faixas brancas com texto preto -->
                      <rect x="40" y="108" width="300" height="42" rx="8" fill="#ffffff"/>
                      <text x="58" y="136" font-family="Inter,Arial,sans-serif" font-size="20" font-weight="700" fill="#0e0e0e">Você foi aprovado para</text>
                      <rect x="40" y="160" width="250" height="48" rx="8" fill="#ffffff"/>
                      <text x="58" y="193" font-family="Inter,Arial,sans-serif" font-size="26" font-weight="800" letter-spacing="-0.5" fill="#0e0e0e">Testia Beta ✨</text>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-size:24px; font-weight:800; letter-spacing:-0.4px; color:#ffffff;">Oi, tudo bem?</h1>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#cfcfcf;">O Testia Beta está esperando por você! <strong style="color:#ffffff;">É grátis, então experimente agora.</strong></p>
                    <a href="{{url_signup}}" target="_blank" style="display:inline-block; background-color:#d4f03c; color:#0e0e0e; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Criar conta</a>
                  </td>
                </tr>

                <!-- Divisória -->
                <tr>
                  <td class="px" style="padding:30px 40px 0 40px;">
                    <div style="height:1px; background-color:#2a2a2a; line-height:1px; font-size:0;">&nbsp;</div>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#cfcfcf;">Este é um grande momento para a gente, e esperamos que você curta. Lembre que é uma versão Beta, então alguns recursos podem ainda não estar disponíveis.</p>
                    <p style="margin:0 0 6px 0; font-size:15px; font-weight:700; color:#ffffff;">No Beta, você pode:</p>
                  </td>
                </tr>

                <!-- Lista de recursos -->
                <tr>
                  <td class="px" style="padding:4px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:26px; padding:8px 0; color:#d4f03c; font-size:16px; font-weight:800;">→</td>
                        <td valign="top" style="padding:8px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#cfcfcf;">criar um teste ou quiz automaticamente com IA</p></td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:26px; padding:8px 0; color:#d4f03c; font-size:16px; font-weight:800;">→</td>
                        <td valign="top" style="padding:8px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#cfcfcf;">editar/adicionar os blocos do desafio manualmente ou regenerá-los com IA</p></td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:26px; padding:8px 0; color:#d4f03c; font-size:16px; font-weight:800;">→</td>
                        <td valign="top" style="padding:8px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#cfcfcf;">criar formulários de captura protegidos com reCAPTCHA</p></td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:26px; padding:8px 0; color:#d4f03c; font-size:16px; font-weight:800;">→</td>
                        <td valign="top" style="padding:8px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#cfcfcf;">personalizar os botões de ação</p></td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:26px; padding:8px 0; color:#d4f03c; font-size:16px; font-weight:800;">→</td>
                        <td valign="top" style="padding:8px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#cfcfcf;">ver análises e respostas</p></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Caixa destacada -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color:#1c1c1c; border:1px solid #2e2e2e; border-left:3px solid #d4f03c; border-radius:10px; padding:18px 20px;">
                          <p style="margin:0; font-size:15px; line-height:1.6; color:#dcdcdc;">Adoraríamos ver suas criações — não esqueça de marcar <strong style="color:#d4f03c;">@TestiaAI</strong> se compartilhar no Twitter.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- O que vem a seguir -->
                <tr>
                  <td class="px" style="padding:30px 40px 0 40px;">
                    <h2 style="margin:0 0 12px 0; font-size:18px; font-weight:800; color:#ffffff;">O que vem a seguir</h2>
                    <p style="margin:0 0 20px 0; font-size:15px; line-height:1.6; color:#cfcfcf;">Novos recursos estão chegando — veja nosso roadmap para mais detalhes.</p>
                    <a href="{{url_roadmap}}" target="_blank" style="display:inline-block; background-color:#d4f03c; color:#0e0e0e; font-weight:700; font-size:15px; text-decoration:none; padding:14px 28px; border-radius:40px;">Abrir roadmap</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:28px 40px 0 40px;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#cfcfcf;">Se encontrar qualquer problema, avise pelo nosso <a href="{{url_telegram}}" target="_blank" style="color:#b98cff; text-decoration:underline;">chat no Telegram</a>. Valorizamos e acolhemos todo feedback e vamos trabalhar duro para deixar o Testia cada vez melhor.</p>
                  </td>
                </tr>

                <!-- Vamos criar magia juntos -->
                <tr>
                  <td class="px" style="padding:30px 40px 0 40px;">
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; font-weight:700; color:#ffffff;">Vamos criar magia juntos ✦</p>
                    <a href="{{url_twitter}}" target="_blank" style="display:inline-block; background-color:#d4f03c; color:#0e0e0e; font-weight:700; font-size:15px; text-decoration:none; padding:14px 28px; border-radius:40px;">Seguir no Twitter</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:30px 40px 38px 40px;">
                    <p style="margin:0 0 4px 0; font-size:15px; line-height:1.6; color:#cfcfcf;">Um abraço,</p>
                    <p style="margin:0 0 4px 0; font-size:15px; line-height:1.6; font-weight:700; color:#ffffff;">Time Testia</p>
                    <p style="margin:0; font-size:14px; line-height:1.6;"><a href="mailto:{{email_contato}}" style="color:#b98cff; text-decoration:underline;">{{email_contato}}</a></p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:24px 16px 0 16px; text-align:center;">
              <p style="margin:0; font-size:12px; color:#6f6f6f;">© 2026 Testia Tecnologia Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
