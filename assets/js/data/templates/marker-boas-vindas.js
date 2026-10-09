/**
 * Template: Boas-vindas — Marker (onboarding editorial, tipografia serifada).
 * Reproduz o e-mail de boas-vindas minimalista: logo serifado, texto pessoal
 * com links, assinatura do time, P.S. e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "marker-boas-vindas",
  slug: "marker-boas-vindas",
  name: "Boas-vindas — Marker (editorial)",
  description:
    "E-mail de boas-vindas minimalista e pessoal, com tipografia serifada, texto corrido, links e assinatura do time.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Welcome to Marker",
  preheader: "Thank you for signing up to Marker, our love letter to writers.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Marker",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Welcome to Marker",
  },
  variables: [
    {
      key: "url_site",
      label: "URL do site",
      description: "Link usado na palavra “Marker” ao longo do texto.",
    },
    {
      key: "email_contato",
      label: "E-mail de contato",
      description: "E-mail de feedback (ex.: hi@marker.page).",
    },
    {
      key: "url_call",
      label: "URL para agendar call",
      description: "Link de “book a quick video call”.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Marker</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f7efec; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .serif { font-family:'Lora','Georgia','Times New Roman',serif; }
    a { color:#2b2b2b; text-decoration:underline; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f7efec; font-family:'Lora','Georgia',serif; color:#2b2b2b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f7efec;">
    Thank you for signing up to Marker, our love letter to writers.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7efec;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff;">

          <!-- Cabeçalho: logo + marca -->
          <tr>
            <td class="px" style="padding:40px 48px 24px 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle" style="text-align:left;">
                    <span class="serif" style="font-size:26px; font-weight:700; color:#2b2b2b;">Marker</span>
                  </td>
                  <td valign="middle" style="text-align:right; white-space:nowrap;">
                    <span style="display:inline-block; width:18px; height:26px; background:#3a3632; border-radius:46% 46% 50% 50%;"></span>
                    <span style="display:inline-block; width:18px; height:22px; background:#c06a52; border-radius:50%; margin-left:-6px;"></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td class="px serif" style="padding:8px 48px 0 48px; font-size:16px; line-height:1.65; color:#2b2b2b;">
              <p style="margin:0 0 20px 0;">Welcome!</p>
              <p style="margin:0 0 20px 0;">
                Thank you for signing up to <a href="{{url_site}}" target="_blank">Marker</a>, our love
                letter to writers.
              </p>
              <p style="margin:0 0 20px 0;">
                We designed Marker to be a simple and intuitive writing space, packed with features to
                help you actually write better.
              </p>
              <p style="margin:0 0 20px 0;">
                You're now one of the first people to use Marker. So, thank you! Our small team in
                London is working hard to realise big plans for what's next.
              </p>
              <p style="margin:0 0 20px 0;">
                While we are building Marker with tremendous care, this is an early version of the tool
                and you may encounter bugs (eek!) or things that don't totally make sense. If so,
                please do let us know.
              </p>
              <p style="margin:0 0 20px 0;">
                Share your thoughts about Marker (feedback, ideas, dream features) with us at
                <a href="mailto:{{email_contato}}">{{email_contato}}</a>. You can also book a quick
                video call with us <a href="{{url_call}}" target="_blank">here</a>. We'd love to hear
                from you.
              </p>
              <p style="margin:0 0 20px 0;">Happy writing!</p>
              <p style="margin:0 0 20px 0;">— Jon, Ryan &amp; the Marker team</p>
              <p style="margin:0 0 8px 0;">
                P.S. Over the next week, we'll send a few emails with tips for getting the most out of
                Marker. After that, we'll drop in occasionally with updates as we build.
              </p>
            </td>
          </tr>

          <!-- Divisória -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px;">
              <div style="border-top:1px solid #ece6e2; line-height:0; font-size:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px serif" style="padding:20px 48px 44px 48px; font-size:13px; line-height:1.6; color:#9a938d;">
              You're receiving this message as a user of
              <a href="{{url_site}}" target="_blank" style="color:#9a938d;">Marker</a>.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
