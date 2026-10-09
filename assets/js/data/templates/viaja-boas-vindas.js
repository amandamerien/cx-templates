/**
 * Template: Boas-vindas — Viajá (plataforma/app de viagens).
 * Marca fake "Viajá" (passagens e hotéis). Ícones e ilustrações SVG originais
 * inline (mala, cofrinho, etiqueta de desconto, relógio, celular) — nada de
 * imagem externa, renderiza offline.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "viaja-boas-vindas",
  slug: "viaja-boas-vindas",
  name: "Boas-vindas — Viajá (viagens)",
  description:
    "E-mail de boas-vindas de um app de viagens, com ícones originais de benefícios e bloco de download do app.",
  category: "Boas-vindas",
  segment: "Turismo",
  subject: "Boas-vindas à sua próxima viagem",
  preheader: "Acesse sua conta e aproveite as vantagens de viajar com a gente.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Viajá",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à sua próxima viagem",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação do título." },
    { key: "url_conta", label: "URL — Acessar conta", description: "Link do botão “Acessar minha conta”." },
    { key: "url_avisar", label: "URL — Avise aqui", description: "Link “Avise aqui” para quem não pediu o e-mail." },
    { key: "url_app_android", label: "URL — Google Play", description: "Link do selo da loja Google Play." },
    { key: "url_app_ios", label: "URL — App Store", description: "Link do selo da loja App Store." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à sua próxima viagem</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f3f0fb; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#6b2fd6; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:26px !important; padding-right:26px !important; }
      .h1 { font-size:26px !important; }
      .stack { display:block !important; width:100% !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f3f0fb; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1c1430;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f3f0fb;">
    Acesse sua conta e aproveite as vantagens de viajar com a gente.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f0fb;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo Viajá -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Viajá" style="vertical-align:middle;">
                <defs>
                  <linearGradient id="viajaLogo" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#8a53ea"/>
                    <stop offset="1" stop-color="#6b2fd6"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="26" height="26" rx="7" fill="url(#viajaLogo)"/>
                <path d="M7 8l4.5 10h1.6l4.9-11-2 0-3.6 8.2L10 8z" fill="#ffffff"/>
              </svg>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1c1430; margin-left:8px; vertical-align:middle;">Viajá</span>
            </td>
          </tr>

          <!-- Card principal -->
          <tr>
            <td style="background-color:#ffffff; border:1px solid #ece6fa; border-radius:16px; overflow:hidden;">

              <!-- Hero: mala + título + botão -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 40px 10px 40px; text-align:center;">
                    <!-- Ícone de mala (original) -->
                    <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mala de viagem">
                      <rect x="36" y="14" width="24" height="16" rx="6" fill="none" stroke="#19a39a" stroke-width="4"/>
                      <rect x="14" y="28" width="68" height="54" rx="12" fill="#2bbdb0"/>
                      <rect x="14" y="28" width="68" height="54" rx="12" fill="none" stroke="#19a39a" stroke-width="3"/>
                      <rect x="33" y="28" width="6" height="54" fill="#15857d"/>
                      <rect x="57" y="28" width="6" height="54" fill="#15857d"/>
                      <rect x="38" y="48" width="20" height="6" rx="3" fill="#e7fbf8"/>
                    </svg>
                    <h1 class="h1" style="margin:16px 0 22px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; line-height:1.25; color:#1c1430;">{{nome_cliente}}, boas-vindas à sua próxima viagem!</h1>
                    <a href="{{url_conta}}" target="_blank" style="display:inline-block; background-color:#ffffff; color:#6b2fd6; font-weight:700; font-size:15px; text-decoration:none; padding:14px 30px; border:2px solid #6b2fd6; border-radius:40px;">Acessar minha conta</a>
                  </td>
                </tr>
              </table>

              <!-- Vantagens -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 6px 40px;">
                    <p style="margin:0; font-size:18px; font-weight:700; color:#1c1430;">Descubra as vantagens de viajar com a gente:</p>
                  </td>
                </tr>

                <!-- 1. Suas viagens -->
                <tr>
                  <td class="px" style="padding:10px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px; padding:12px 0;">
                          <div style="width:52px; height:52px; border-radius:14px; background:#f1ecfc; text-align:center;">
                            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bilhete" style="margin-top:12px;">
                              <path d="M3 8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4z" fill="#6b2fd6"/>
                              <path d="M16 6v16" stroke="#ffffff" stroke-width="2" stroke-dasharray="2 3"/>
                              <rect x="6" y="11" width="6" height="2.5" rx="1.25" fill="#ffffff"/>
                              <rect x="6" y="15" width="4" height="2.5" rx="1.25" fill="#ffffff"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:12px 0;">
                          <p style="margin:0 0 4px 0; font-size:15px; font-weight:700; color:#1c1430;">Suas viagens</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#5a5470;">Gerencie sua reserva e acompanhe o status quando e onde quiser.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- 2. Mais economia -->
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px; padding:12px 0;">
                          <div style="width:52px; height:52px; border-radius:14px; background:#f1ecfc; text-align:center;">
                            <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cofrinho" style="margin-top:11px;">
                              <path d="M4 16a9 7 0 0 1 9-7h4a9 7 0 0 1 8.6 5.2l2.4.6v4l-2.6.3A9 7 0 0 1 20 22v2a1.5 1.5 0 0 1-3 0v-1h-4v1a1.5 1.5 0 0 1-3 0v-2.2A9 7 0 0 1 4 16z" fill="#6b2fd6"/>
                              <circle cx="21" cy="14" r="1.6" fill="#ffffff"/>
                              <rect x="12" y="4.5" width="8" height="3.2" rx="1.6" fill="#8a53ea"/>
                              <rect x="13.5" y="10" width="5" height="2.4" rx="1.2" fill="#ffffff"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:12px 0;">
                          <p style="margin:0 0 4px 0; font-size:15px; font-weight:700; color:#1c1430;">Mais economia</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#5a5470;">Compre e aproveite ótimos descontos.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- 3. Procurando ofertas? -->
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px; padding:12px 0;">
                          <div style="width:52px; height:52px; border-radius:14px; background:#f1ecfc; text-align:center;">
                            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Etiqueta de desconto" style="margin-top:12px;">
                              <path d="M3 5a2 2 0 0 1 2-2h8.2a2 2 0 0 1 1.4.6l9.8 9.8a2 2 0 0 1 0 2.8l-8.2 8.2a2 2 0 0 1-2.8 0L3.6 14.6A2 2 0 0 1 3 13.2z" fill="#6b2fd6"/>
                              <circle cx="8.5" cy="8.5" r="2.4" fill="#ffffff"/>
                              <path d="M11 17l6-6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:12px 0;">
                          <p style="margin:0 0 4px 0; font-size:15px; font-weight:700; color:#1c1430;">Procurando ofertas?</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#5a5470;">Crie um alerta de preço para seus destinos favoritos.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- 4. Economize tempo -->
                <tr>
                  <td class="px" style="padding:0 40px 8px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px; padding:12px 0;">
                          <div style="width:52px; height:52px; border-radius:14px; background:#f1ecfc; text-align:center;">
                            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Relógio" style="margin-top:12px;">
                              <circle cx="14" cy="14" r="11" fill="#6b2fd6"/>
                              <circle cx="14" cy="14" r="11" fill="none" stroke="#8a53ea" stroke-width="2"/>
                              <path d="M14 7.5V14l4.5 2.8" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" fill="none"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:12px 0;">
                          <p style="margin:0 0 4px 0; font-size:15px; font-weight:700; color:#1c1430;">Economize tempo</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#5a5470;">Use as informações do seu perfil e faça compras mais rápido!</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Aviso: não pediu este e-mail -->
                <tr>
                  <td class="px" style="padding:18px 40px 36px 40px;">
                    <div style="border-top:1px solid #ece6fa; padding-top:18px;">
                      <p style="margin:0; font-size:13px; line-height:1.6; color:#8a829c;">Não pediu este e-mail? <a href="{{url_avisar}}" target="_blank" style="color:#6b2fd6; font-weight:600; text-decoration:underline;">Avise aqui</a> para nos informar.</p>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Bloco de download do app -->
          <tr>
            <td style="padding:18px 0 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdeef4; border:1px solid #f8d9e6; border-radius:16px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <!-- Mockup de celular -->
                        <td class="stack" valign="middle" style="width:120px; text-align:center; padding-bottom:6px;">
                          <svg width="90" height="130" viewBox="0 0 90 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="App no celular">
                            <rect x="6" y="2" width="78" height="126" rx="16" fill="#1c1430"/>
                            <rect x="11" y="9" width="68" height="112" rx="10" fill="#ffffff"/>
                            <rect x="35" y="5" width="20" height="3" rx="1.5" fill="#3a2d57"/>
                            <rect x="11" y="9" width="68" height="34" rx="10" fill="#6b2fd6"/>
                            <path d="M20 30l12-7 14 4 13-8" stroke="#c9b3f5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                            <circle cx="59" cy="19" r="4" fill="#ffd166"/>
                            <rect x="18" y="52" width="54" height="8" rx="4" fill="#efeafc"/>
                            <rect x="18" y="66" width="40" height="6" rx="3" fill="#efeafc"/>
                            <rect x="18" y="82" width="54" height="22" rx="8" fill="#f1ecfc"/>
                            <rect x="25" y="89" width="22" height="8" rx="4" fill="#6b2fd6"/>
                          </svg>
                        </td>
                        <td class="stack" valign="middle" style="padding-left:18px;">
                          <p style="margin:0 0 4px 0; font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#d6457f;">Aproveite os benefícios</p>
                          <p style="margin:0 0 16px 0; font-size:20px; font-weight:800; letter-spacing:-0.4px; color:#1c1430;">Baixe nosso app gratuitamente</p>
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding:0 10px 0 0;">
                                <a href="{{url_app_android}}" target="_blank" style="display:inline-block; background-color:#1c1430; color:#ffffff; font-weight:600; font-size:13px; text-decoration:none; padding:11px 18px; border-radius:10px;">Google Play</a>
                              </td>
                              <td>
                                <a href="{{url_app_ios}}" target="_blank" style="display:inline-block; background-color:#1c1430; color:#ffffff; font-weight:600; font-size:13px; text-decoration:none; padding:11px 18px; border-radius:10px;">App Store</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:18px; letter-spacing:6px; color:#6b2fd6;">in  X  ◎  ▶</p>
              <p style="margin:0 0 6px 0; font-size:13px; color:#5a5470;">Time Viajá</p>
              <p style="margin:0; font-size:12px; color:#9a92ad;">Viajá Viagens Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
