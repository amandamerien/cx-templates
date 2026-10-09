/**
 * Template: Conta quase pronta — Iconix (biblioteca de ícones para devs/designers).
 * Marca fake (nunca "Font Awesome"). Hero amarelo com ilustração SVG original
 * (maleta/kit estilizada) e explicação do porquê criar a conta.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "iconix-conta-quase-pronta",
  slug: "iconix-conta-quase-pronta",
  name: "Conta quase pronta — Iconix",
  description:
    "E-mail de confirmação de conta com hero amarelo, ícone original e explicação do porquê criar a conta.",
  category: "Confirmação",
  segment: "Tecnologia",
  subject: "Sua conta do Iconix está quase pronta",
  preheader: "Confirme seu e-mail para terminar de configurar sua conta.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Conta quase pronta — Iconix",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Sua conta do Iconix está quase pronta",
  },
  variables: [
    { key: "url_confirmar", label: "URL — Confirmar e-mail", description: "Link “confirme seu endereço de e-mail” e do botão “Concluir configuração da conta”." },
    { key: "url_termos", label: "URL — Termos de serviço", description: "Link “termos de serviço”." },
    { key: "url_privacidade", label: "URL — Política de privacidade", description: "Link “política de privacidade”." },
    { key: "url_conta", label: "URL — Sua conta", description: "Link “Sua conta” no rodapé." },
    { key: "url_contato", label: "URL — Fale conosco", description: "Link “Fale conosco” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Sua conta do Iconix está quase pronta</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef1f6; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1b2a4a; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef1f6; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1b2a4a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef1f6;">
    Confirme seu e-mail para terminar de configurar sua conta.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef1f6;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px; text-align:center;">
              <span style="display:inline-block; width:26px; height:26px; background:#1b2a4a; border-radius:7px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:1px; color:#1b2a4a; margin-left:8px; vertical-align:middle;">ICONIX</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero amarelo com ilustração original (maleta/kit) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#ffd43b; padding:34px 24px 28px 24px; text-align:center;">
                    <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maleta de kit do Iconix">
                      <!-- alça -->
                      <path d="M36 28v-4a12 12 0 0 1 24 0v4" fill="none" stroke="#1b2a4a" stroke-width="5" stroke-linecap="round"/>
                      <!-- corpo da maleta -->
                      <rect x="16" y="28" width="64" height="48" rx="8" fill="#1b2a4a"/>
                      <!-- faixa central / fecho -->
                      <rect x="16" y="46" width="64" height="12" fill="#ffd43b"/>
                      <rect x="42" y="44" width="12" height="16" rx="3" fill="#1b2a4a"/>
                      <rect x="45" y="49" width="6" height="6" rx="2" fill="#ffd43b"/>
                    </svg>
                    <h1 class="h1" style="margin:22px 0 0 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; line-height:1.25; color:#1b2a4a;">Sua conta gratuita do Iconix está quase pronta.</h1>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#3a455c;">Você está bem perto de configurar seu primeiro projeto com um Kit! Só precisamos que você <a href="{{url_confirmar}}" target="_blank" style="color:#1b2a4a; font-weight:700; text-decoration:underline;">confirme seu endereço de e-mail</a> e termine de configurar a conta. Prometemos que leva só um segundo.</p>
                    <div style="text-align:center;">
                      <a href="{{url_confirmar}}" target="_blank" style="display:inline-block; background-color:#ffd43b; color:#1b2a4a; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px; border:2px solid #1b2a4a; box-shadow:0 3px 0 rgba(27,42,74,0.25);">Concluir configuração da conta</a>
                    </div>
                  </td>
                </tr>

                <!-- Divisória -->
                <tr>
                  <td class="px" style="padding:32px 40px 0 40px;">
                    <div style="height:1px; background:#e3e7ef; line-height:1px; font-size:1px;">&nbsp;</div>
                  </td>
                </tr>

                <!-- Por que preciso de uma conta -->
                <tr>
                  <td class="px" style="padding:28px 40px 36px 40px;">
                    <h2 style="margin:0 0 12px 0; font-size:18px; font-weight:700; color:#1b2a4a;">Por que preciso de uma conta?</h2>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#3a455c;">Uma conta Iconix é necessária para usar serviços como os Kits. Você pode ler mais nos nossos <a href="{{url_termos}}" target="_blank" style="color:#1b2a4a; text-decoration:underline;">termos de serviço</a> e também na nossa <a href="{{url_privacidade}}" target="_blank" style="color:#1b2a4a; text-decoration:underline;">política de privacidade</a>, se quiser.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:13px; line-height:1.6; color:#8a93a6;">Você está recebendo este e-mail porque solicitou um Kit gratuito no iconix.com.</p>
              <p style="margin:0 0 8px 0; font-size:13px;">
                <span style="color:#1b2a4a; font-weight:700;">Iconix</span>
                <span style="color:#c3cad8;">&nbsp;·&nbsp;</span>
                <a href="{{url_conta}}" target="_blank" style="color:#1b2a4a; text-decoration:underline;">Sua conta</a>
                <span style="color:#c3cad8;">&nbsp;·&nbsp;</span>
                <a href="{{url_contato}}" target="_blank" style="color:#1b2a4a; text-decoration:underline;">Fale conosco</a>
              </p>
              <p style="margin:0; font-size:12px; color:#8a93a6;">© 2026 Iconix · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
