/**
 * Template: Welcome — Reviewly (plataforma de avaliações).
 * Marca fake (design de referência "Trustpilot"). Header verde, hero, CTA azul,
 * bloco "write a review", rodapé com app e legal.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "reviewly-boas-vindas",
  slug: "reviewly-boas-vindas",
  name: "Welcome — Reviewly (avaliações)",
  description:
    "E-mail de boas-vindas com header colorido, CTA de perfil, bloco de incentivo a avaliar e rodapé com app.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Welcome to Reviewly!",
  preheader: "Now it's easier than ever to read, write, and share your reviews.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Welcome — Reviewly",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Welcome to Reviewly!",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome na saudação (ex.: Smiles)." },
    { key: "url_botao", label: "URL do botão", description: "Link de “Customize your profile”." },
    { key: "url_review", label: "URL — Write a review", description: "Link de “Write a review”." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Manage your preferences”." },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Reviewly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef0f2; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1f3bdd; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef0f2; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef0f2;">
    Now it's easier than ever to read, write, and share your reviews.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f2;">
    <tr>
      <td align="center" style="padding:16px 16px 36px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Topo escuro com logo -->
          <tr>
            <td style="background-color:#191919; padding:20px 28px;">
              <span style="color:#00b67a; font-size:16px;">★</span>
              <span style="color:#ffffff; font-weight:700; font-size:18px; margin-left:4px; vertical-align:middle;">Reviewly</span>
            </td>
          </tr>

          <!-- Hero verde -->
          <tr>
            <td style="background-color:#00b67a; padding:40px 28px; text-align:center;">
              <div style="font-size:40px; line-height:1;">✉️</div>
              <h1 style="margin:16px 0 0 0; font-size:28px; font-weight:700; color:#191919;">Welcome to Reviewly!</h1>
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td style="background-color:#ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:32px 36px 0 36px;">
                    <p style="margin:0 0 16px 0; font-size:16px; color:#333333;">Hi {{nome_cliente}},</p>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#333333;">Welcome to Reviewly. We're happy to have you on board! Now it's easier than ever to read, write, and share your reviews.</p>
                    <a href="{{url_botao}}" target="_blank" style="display:block; background-color:#1f3bdd; color:#ffffff; font-weight:600; font-size:16px; text-align:center; text-decoration:none; padding:16px; border-radius:6px;">Customize your profile</a>
                  </td>
                </tr>
                <tr>
                  <td class="px" style="padding:28px 36px 0 36px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eeeeee;">
                      <tr>
                        <td valign="top" style="width:72px; padding-top:24px;"><div style="width:52px; height:52px; background:#fff3bf; border-radius:10px; text-align:center; line-height:52px; font-size:26px;">🏷️</div></td>
                        <td valign="top" style="padding-top:24px;">
                          <p style="margin:0 0 8px 0; font-size:18px; font-weight:700; color:#191919;">Bought something recently?</p>
                          <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#444444;">Share your experience to empower others to shop with confidence and help companies improve.</p>
                          <p style="margin:0; font-size:15px; font-weight:700;"><a href="{{url_review}}" target="_blank" style="color:#191919; text-decoration:underline;">Write a review →</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="px" style="padding:28px 36px 32px 36px;">
                    <div style="border-top:1px solid #eeeeee; padding-top:20px;">
                      <p style="margin:0; font-size:14px; line-height:1.6; color:#777777;">This email contains direct links to your account. Please don't share it with anyone else.</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:28px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 16px 0; font-size:14px;">
                <a href="#" style="color:#333333; text-decoration:none;">Go to Reviewly</a> &nbsp;|&nbsp;
                <a href="#" style="color:#333333; text-decoration:none;">Help Center</a> &nbsp;|&nbsp;
                <a href="#" style="color:#333333; text-decoration:none;">Contact</a>
              </p>
              <p style="margin:0 0 20px 0; font-size:13px; line-height:1.6; color:#888888;">This email is an account update, which are always enabled. <a href="{{url_preferencias}}" target="_blank" style="color:#888888; text-decoration:underline;">Manage your preferences</a> for other emails from Reviewly.</p>
              <p style="margin:0 0 12px 0; font-size:14px; font-weight:700; color:#191919;">Get the Reviewly app</p>
              <p style="margin:0 0 18px 0;"><span style="display:inline-block; background:#191919; color:#ffffff; font-size:12px; padding:9px 16px; border-radius:6px;">Download on the App Store</span></p>
              <p style="margin:0; font-size:12px; line-height:1.6; color:#999999;">Reviewly A/S (Company number: 30276582), 50 West 23rd St. Suite 1000, New York, NY 10010, United States | <a href="#" style="color:#999999; text-decoration:underline;">Privacy Policy</a>.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
