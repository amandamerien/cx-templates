/**
 * Template: Welcome — Gamma (onboarding de produto, azul).
 * Reproduz o e-mail: logo, boas-vindas, lista de recursos com links, CTA azul,
 * assinatura do time, P.S. e rodapé com redes sociais.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "gamma-boas-vindas",
  slug: "gamma-boas-vindas",
  name: "Welcome — Gamma (onboarding)",
  description:
    "E-mail de boas-vindas de produto com proposta de valor, lista de recursos com links, CTA e rodapé com redes sociais.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Welcome to Gamma",
  preheader: "A revolutionary new way to present ideas powered by AI.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Welcome — Gamma",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Welcome to Gamma",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome exibido na saudação (ex.: Smiles Davis).",
    },
    {
      key: "url_site",
      label: "URL do produto",
      description: "Link usado em “Gamma” e nos recursos do texto.",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link do botão “Get started in Gamma”.",
    },
    {
      key: "url_help",
      label: "URL — Help Center",
      description: "Link da central de ajuda no P.S.",
    },
    {
      key: "url_suporte",
      label: "URL — Support Team",
      description: "Link do time de suporte no P.S.",
    },
    {
      key: "url_unsubscribe",
      label: "URL — Unsubscribe",
      description: "Link de cancelamento no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Gamma</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#edf1fc; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#2b6ef2; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .logo { font-size:40px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#edf1fc; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#edf1fc;">
    A revolutionary new way to present ideas powered by AI.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#edf1fc;">
    <tr>
      <td align="center" style="padding:36px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:8px 0 28px 0; text-align:center;">
              <span class="logo" style="font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:46px; letter-spacing:4px; color:#2b6ef2;">GAMMA</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:6px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 48px 44px 48px; font-size:16px; line-height:1.6; color:#333333;">
                    <p style="margin:0 0 24px 0;">Hi {{nome_cliente}},</p>
                    <p style="margin:0 0 20px 0;">
                      Welcome to <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; font-weight:700; text-decoration:underline;">Gamma</a>,
                      a revolutionary new way to present ideas powered by AI.
                    </p>
                    <p style="margin:0 0 20px 0;">
                      For years, people like you have used presentation tools like PowerPoint and Google
                      Slides that are slow, frustrating, and inflexible.
                    </p>
                    <p style="margin:0 0 20px 0;">Now, there's a better way. With Gamma, you can:</p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px 0;">
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">Use AI to <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">create presentations</a> in half the time.</td></tr>
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">Generate <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">custom themes</a> to match your brand.</td></tr>
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">✦ Supercharge your ideas with <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">AI-powered editing</a>.</td></tr>
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">Easily <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">present</a> or <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">export</a> your presentations.</td></tr>
                    </table>

                    <p style="margin:0 0 24px 0;">
                      Over the next seven days, we're excited to show you how to get the most out of Gamma
                      by sharing some of our favorite features and use cases.
                    </p>

                    <p style="margin:0 0 24px 0;">
                      <a href="{{url_botao}}" target="_blank"
                         style="display:inline-block; background-color:#2b6ef2; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:13px 24px; border-radius:999px;">
                        Get started in Gamma
                      </a>
                    </p>

                    <p style="margin:0 0 4px 0;">See you soon,</p>
                    <p style="margin:0 0 24px 0;">Team Gamma</p>

                    <p style="margin:0; font-size:15px; line-height:1.6; color:#555555;">
                      P.S. Check out our <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">YouTube</a>
                      and <a href="{{url_help}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">Help Center</a>
                      for additional resources. If you need additional help, contact our
                      <a href="{{url_suporte}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">Support Team</a> anytime.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:32px 24px 8px 24px; text-align:center;">
              <p style="margin:0 0 14px 0; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:34px; color:#2b6ef2;">G</p>
              <p style="margin:0 0 8px 0; font-size:14px; font-weight:600; color:#333333;">Follow us</p>
              <p style="margin:0 0 16px 0; font-size:13px; color:#6b7280;">
                <a href="#" style="color:#6b7280; text-decoration:underline;">X</a> &nbsp;|&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:underline;">LinkedIn</a> &nbsp;|&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:underline;">Instagram</a><br>
                <a href="#" style="color:#6b7280; text-decoration:underline;">TikTok</a> &nbsp;|&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:underline;">YouTube</a>
              </p>
              <p style="margin:0 0 4px 0; font-size:13px; color:#8a8f98;">© 2025 Gamma Tech, Inc.</p>
              <p style="margin:0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8f98; text-decoration:underline;">Unsubscribe from marketing emails</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
