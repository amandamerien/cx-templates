/**
 * Template: Welcome — Trackly (onboarding minimalista de produto).
 * Marca fake (design de referência "Linear"). Card claro, logo em gradiente,
 * seções com links, contatos e CTA.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "trackly-boas-vindas",
  slug: "trackly-boas-vindas",
  name: "Welcome — Trackly (onboarding)",
  description:
    "E-mail de boas-vindas minimalista com seções de recursos, contatos e CTA, em layout limpo.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Welcome to Trackly",
  preheader: "Software can feel magical. Welcome to the Trackly community.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Welcome — Trackly",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Welcome to Trackly",
  },
  variables: [
    { key: "url_site", label: "URL do produto", description: "Link das seções (Method/Guide/Changelog)." },
    { key: "url_botao", label: "URL do botão", description: "Link do botão “Open Trackly”." },
    { key: "email_contato", label: "E-mail de contato", description: "E-mail de suporte (ex.: hello@trackly.app)." },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Trackly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef0f3; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#5b5bd6; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef0f3; font-family:'Inter',Arial,Helvetica,sans-serif; color:#3a3a3a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef0f3;">
    Software can feel magical. Welcome to the Trackly community.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f3;">
    <tr>
      <td align="center" style="padding:36px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:10px;">
          <tr>
            <td class="px" style="padding:40px 40px 44px 40px;">

              <!-- Logo -->
              <div style="width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg,#6e6ef0,#3a3a9e); margin-bottom:24px;"></div>

              <h1 style="margin:0 0 20px 0; font-size:24px; font-weight:600; color:#1f1f1f;">Welcome to Trackly</h1>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">At Trackly we believe software can feel magical. Well designed tools and practices encourage momentum and level up execution in our teams.</p>
              <p style="margin:0 0 28px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">We're excited to welcome you to the Trackly community. And we're committed to pushing our own limits so that we can help you reach yours.</p>

              <div style="border-top:1px solid #ececf0; padding-top:20px;">
                <p style="margin:0 0 6px 0;"><a href="{{url_site}}" target="_blank" style="color:#5b5bd6; font-weight:600; text-decoration:none;">Trackly Method →</a></p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">Why we built Trackly and what we aim to do with the software.</p>
              </div>

              <div style="border-top:1px solid #ececf0; margin-top:20px; padding-top:20px;">
                <p style="margin:0 0 6px 0;"><a href="{{url_site}}" target="_blank" style="color:#5b5bd6; font-weight:600; text-decoration:none;">Trackly Guide →</a></p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">Our documentation and tips on how to use the product better.</p>
              </div>

              <div style="border-top:1px solid #ececf0; margin-top:20px; padding-top:20px;">
                <p style="margin:0 0 6px 0;"><a href="{{url_site}}" target="_blank" style="color:#5b5bd6; font-weight:600; text-decoration:none;">Trackly Changelog →</a></p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">We believe software should always improve. We share our new improvements and updates in our weekly changelog.</p>
              </div>

              <div style="border-top:1px solid #ececf0; margin-top:20px; padding-top:20px;">
                <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                  Thanks for signing up. We're here to help you and your team. If you have any questions,
                  contact us at <a href="mailto:{{email_contato}}" style="color:#5b5bd6; text-decoration:none;">{{email_contato}}</a>
                  or on <a href="#" style="color:#5b5bd6; text-decoration:none;">Twitter</a>. You can also join
                  <a href="#" style="color:#5b5bd6; text-decoration:none;">Trackly Slack</a> to ask questions and meet other software creators using Trackly.
                </p>
                <p style="margin:0 0 24px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">– The Trackly team</p>
                <a href="{{url_botao}}" target="_blank" style="display:inline-block; background-color:#5b5bd6; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:12px 20px; border-radius:8px;">Open Trackly</a>
              </div>

              <div style="border-top:1px solid #ececf0; margin-top:28px; padding-top:18px;">
                <p style="margin:0; font-size:13px; color:#9a9a9a;">Trackly</p>
              </div>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
