/**
 * Template: Boas-vindas — Streamia (guia/newsletter de streaming).
 * Marca fake (design de referência "The Streamable"). Ilustração SVG original
 * (TV com botão de play e cards de canais) e CTA editorial.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "streamia-boas-vindas",
  slug: "streamia-boas-vindas",
  name: "Boas-vindas — Streamia (streaming)",
  description:
    "Newsletter de boas-vindas editorial de um guia de streaming, com ilustração original e CTA.",
  category: "Boas-vindas",
  segment: "Entretenimento",
  subject: "Ninguém entende de streaming como a gente",
  preheader: "Boas-vindas à comunidade que descomplica o streaming.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Streamia",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Ninguém entende de streaming como a gente",
  },
  variables: [
    { key: "url_site", label: "URL — Começar a explorar", description: "Link do botão “Começar a explorar”." },
    { key: "url_navegador", label: "URL — Versão web", description: "Link “Ver no navegador” no topo." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Ninguém entende de streaming como a gente</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f2f6fb; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#e11d2a; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f2f6fb; font-family:'Inter',Arial,Helvetica,sans-serif; color:#131a24;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f2f6fb;">
    Boas-vindas à comunidade que descomplica o streaming.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f6fb;">
    <tr>
      <td align="center" style="padding:20px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Ver no navegador -->
          <tr>
            <td style="padding:0 8px 18px 8px; text-align:right;">
              <a href="{{url_navegador}}" target="_blank" style="font-size:12px; color:#6b7a8d; text-decoration:underline;">Ver no navegador</a>
            </td>
          </tr>

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 22px 8px;">
              <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Streamia" style="vertical-align:middle;">
                <rect x="1" y="3" width="20" height="14" rx="3" fill="#e11d2a"/>
                <path d="M9 7.5l6 3.5-6 3.5z" fill="#ffffff"/>
              </svg>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#131a24; margin-left:8px; vertical-align:middle;">Streamia</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 26px 0; font-size:34px; font-weight:800; line-height:1.15; letter-spacing:-0.8px; color:#131a24;">Ninguém entende de streaming como a gente.</h1>
                  </td>
                </tr>

                <!-- Ilustração original: TV com play + cards de canais -->
                <tr>
                  <td class="px" style="padding:0 40px 8px 40px; text-align:center;">
                    <svg width="100%" height="220" viewBox="0 0 440 220" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Televisão com botão de play e cards de canais">
                      <!-- cards de canais ao fundo -->
                      <rect x="36" y="40" width="70" height="92" rx="10" fill="#dbe7f5"/>
                      <rect x="48" y="52" width="46" height="46" rx="8" fill="#9ec1e8"/>
                      <rect x="48" y="104" width="46" height="7" rx="3.5" fill="#b7cde8"/>
                      <rect x="48" y="116" width="32" height="7" rx="3.5" fill="#b7cde8"/>

                      <rect x="334" y="40" width="70" height="92" rx="10" fill="#dbe7f5"/>
                      <rect x="346" y="52" width="46" height="46" rx="8" fill="#f2b8bd"/>
                      <rect x="346" y="104" width="46" height="7" rx="3.5" fill="#b7cde8"/>
                      <rect x="346" y="116" width="32" height="7" rx="3.5" fill="#b7cde8"/>

                      <!-- TV -->
                      <rect x="120" y="28" width="200" height="130" rx="14" fill="#131a24"/>
                      <rect x="132" y="40" width="176" height="106" rx="8" fill="#1f2b3c"/>
                      <!-- botão de play -->
                      <circle cx="220" cy="93" r="30" fill="#e11d2a"/>
                      <path d="M212 79l20 14-20 14z" fill="#ffffff"/>
                      <!-- barra de progresso -->
                      <rect x="150" y="132" width="140" height="5" rx="2.5" fill="#33455c"/>
                      <rect x="150" y="132" width="78" height="5" rx="2.5" fill="#e11d2a"/>
                      <!-- base/suporte da TV -->
                      <rect x="206" y="158" width="28" height="16" fill="#131a24"/>
                      <rect x="176" y="174" width="88" height="9" rx="4.5" fill="#131a24"/>
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:22px 40px 0 40px;">
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#3a475a;">Oi, tudo bem? Que bom que você decidiu entrar para a nossa comunidade, com milhões de pessoas no mundo todo que descobrem o que assistir com a gente.</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#3a475a;">A Streamia nasceu em 2018, quando a gente também estava perdido em meio a pacotes confusos, catálogos espalhados e aparelhos de streaming novos chegando o tempo todo. Dava para imaginar que isso ficaria mais simples, mas só complicou desde então.</p>
                    <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#3a475a;">Todo mês surgem novos serviços e canais, títulos trocam de plataforma e os preços mudam. A nossa missão é descomplicar tudo isso para você.</p>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td class="px" style="padding:0 40px 40px 40px;">
                    <a href="{{url_site}}" target="_blank" style="display:inline-block; background-color:#131a24; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Começar a explorar</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:12px; color:#6b7a8d;">Streamia Mídia Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:12px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#6b7a8d; text-decoration:underline;">Cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
