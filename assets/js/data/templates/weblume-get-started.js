/**
 * Template: Two ways to get started — Weblume (onboarding de ferramenta no-code).
 * Marca fake (design de referência "Webflow"). Header com login, hero, passos,
 * CTA, dois cards (ajuda/inspiração), redes e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "weblume-get-started",
  slug: "weblume-get-started",
  name: "Get started — Weblume (onboarding)",
  description:
    "E-mail de onboarding de produto com hero, passos para começar, CTA e cards de ajuda/inspiração.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Two ways to get started with Weblume",
  preheader: "Bring your vision to life without writing any code.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Get started — Weblume",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Two ways to get started with Weblume",
  },
  variables: [
    { key: "url_login", label: "URL — Log in", description: "Link do “Log in” no topo." },
    { key: "url_botao", label: "URL do botão", description: "Link de “Build your site” / “Start building”." },
    { key: "url_template", label: "URL — Templates", description: "Link de “Pick a template”." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Manage Subscriptions”." },
    { key: "url_unsubscribe", label: "URL — Unsubscribe", description: "Link “Unsubscribe”." },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Get started with Weblume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#4b5bf5; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .col { display:block !important; width:100% !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#111111;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Bring your vision to life without writing any code.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Header -->
          <tr>
            <td class="px" style="padding:12px 24px 24px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-weight:700; font-size:22px; color:#4b5bf5;">weblume</td>
                  <td style="text-align:right; font-size:14px; font-weight:600; color:#111111;"><a href="{{url_login}}" target="_blank" style="color:#111111; text-decoration:none;">Log in</a></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px" style="padding:0 24px; line-height:0;">
              <div class="ph" style="border-radius:8px; background:linear-gradient(135deg,#ffb4a1,#ff8f7a); padding:120px 24px; color:#8a3a2c;">
                <div style="font-size:28px;">🎨</div>
                <div style="margin-top:8px;">Imagem: ilustração do produto</div>
              </div>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:36px 24px 0 24px;">
              <h1 class="h1" style="margin:0 0 18px 0; font-size:36px; font-weight:800; color:#111111;">Two ways to get started</h1>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#333333;">Bring your vision to life without writing any code. Get started with a blank canvas or a template, and use our visual development tools to customize your site.</p>

              <h2 style="margin:0 0 12px 0; font-size:20px; font-weight:700; color:#111111;">1. Build from scratch</h2>
              <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#333333;">Starting with a blank site gives you complete creative freedom. Browse the Add (+) panel in the Designer for all the elements you'll need — from sections and buttons to headings and forms. <a href="{{url_botao}}" target="_blank" style="color:#4b5bf5; text-decoration:none;">Start building →</a></p>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#333333;"><strong>Tip:</strong> Check out Prebuilt layouts in the Add (+) panel for time-saving building blocks.</p>

              <h2 style="margin:0 0 12px 0; font-size:20px; font-weight:700; color:#111111;">2. Start with a template</h2>
              <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#333333;">If you need a starting point, templates are the way to go. Choose from over 1,000 free and premium options, and make them your own in the Designer. <a href="{{url_template}}" target="_blank" style="color:#4b5bf5; text-decoration:none;">Pick a template →</a></p>

              <a href="{{url_botao}}" target="_blank" style="display:inline-block; background-color:#4b5bf5; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:14px 22px; border-radius:6px;">Build your site →</a>
            </td>
          </tr>

          <!-- Cards -->
          <tr>
            <td class="px" style="padding:36px 24px 0 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="col" valign="top" width="50%" style="padding-right:8px;">
                    <div style="background:#4b5bf5; border-radius:8px; padding:28px; color:#ffffff;">
                      <p style="margin:0 0 10px 0; font-size:20px; font-weight:700;">Need help?</p>
                      <p style="margin:0; font-size:14px; line-height:1.55; color:#e6e8ff;">Find free, educational (and entertaining) videos and lessons on Weblume University</p>
                    </div>
                  </td>
                  <td class="col" valign="top" width="50%" style="padding-left:8px;">
                    <div style="background:#111111; border-radius:8px; padding:28px; color:#ffffff;">
                      <p style="margin:0 0 10px 0; font-size:20px; font-weight:700;">Get inspired</p>
                      <p style="margin:0; font-size:14px; line-height:1.55; color:#cccccc;">Discover cool builds from the Weblume community on Made in Weblume</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:32px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 16px 0; font-size:18px; letter-spacing:6px; color:#111111;">f  X  ◎  in  ▶  ●  ♪</p>
              <p style="margin:0 0 8px 0; font-size:13px; color:#555555;">Weblume Inc. 398 11th Street, 2nd floor, San Francisco, CA 94103</p>
              <p style="margin:0; font-size:13px; font-weight:600;">
                <a href="{{url_preferencias}}" target="_blank" style="color:#111111; text-decoration:none;">Manage Subscriptions</a> &nbsp;|&nbsp;
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#111111; text-decoration:none;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
