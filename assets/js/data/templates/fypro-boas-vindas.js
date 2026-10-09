/**
 * Template: Welcome — Fypro.ai (onboarding de produto, acento lime + bloco escuro).
 * Reproduz o e-mail: logo, boas-vindas, lista de recursos em caixa, CTAs lime,
 * seção Discord escura e rodapé com unsubscribe.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "fypro-boas-vindas",
  slug: "fypro-boas-vindas",
  name: "Welcome — Fypro.ai (onboarding)",
  description:
    "E-mail de boas-vindas de produto com lista de recursos em destaque, múltiplos CTAs e bloco de comunidade (Discord).",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Welcome to Fypro.ai",
  preheader: "Connect your TikTok and get a personalized growth report.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Welcome — Fypro.ai",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Welcome to Fypro.ai",
  },
  variables: [
    {
      key: "url_connect",
      label: "URL — Connect TikTok",
      description: "Link do botão “Connect TikTok” e do “Personal Center”.",
    },
    {
      key: "url_explore",
      label: "URL — Explore",
      description: "Link do botão “Explore Fypro.ai”.",
    },
    {
      key: "url_discord",
      label: "URL — Discord",
      description: "Link do botão “Join Discord”.",
    },
    {
      key: "url_unsubscribe",
      label: "URL — Unsubscribe",
      description: "Link de cancelamento de inscrição no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Fypro.ai</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f3f4f1; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .btn-lime { display:inline-block; background-color:#c4f03c; color:#141414; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:15px; text-decoration:none; padding:14px 26px; border-radius:999px; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f1; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f3f4f1;">
    Connect your TikTok and get a personalized growth report.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f1;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Card branco -->
          <tr>
            <td style="background-color:#ffffff; border-radius:14px 14px 0 0; padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Logo -->
                <tr>
                  <td class="px" style="padding:36px 40px 0 40px;">
                    <span style="display:inline-block; width:30px; height:30px; background:#c4f03c; border-radius:9px; vertical-align:middle;"></span>
                    <span style="vertical-align:middle; font-weight:800; font-size:22px; color:#141414; margin-left:8px;">Fypro.ai</span>
                  </td>
                </tr>

                <!-- Título + intro -->
                <tr>
                  <td class="px" style="padding:20px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 20px 0; font-size:34px; line-height:1.1; font-weight:800; color:#141414;">Welcome to Fypro.ai</h1>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#444444;">Hi there,</p>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#444444;">
                      You do not need another list of generic creator tips. Fypro.ai starts with your
                      own TikTok account.
                    </p>
                    <p style="margin:0; font-size:16px; line-height:1.6; color:#444444;">
                      Go to <a href="{{url_connect}}" target="_blank" style="color:#141414; font-weight:700;">Personal Center</a>
                      and connect your TikTok account. We will turn your account data into a
                      personalized growth report: what is working, where you stand, and what to create
                      next.
                    </p>
                  </td>
                </tr>

                <!-- Caixa de recursos -->
                <tr>
                  <td class="px" style="padding:24px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ececec; border-radius:12px;">
                      <tr>
                        <td style="padding:24px;">
                          <p style="margin:0 0 14px 0; font-size:16px; font-weight:700; color:#141414;">Once connected, your report helps you see:</p>
                          <p style="margin:0 0 12px 0; font-size:15px; line-height:1.55; color:#444444;">
                            •&nbsp;&nbsp;<strong>What is actually working:</strong> your content strengths, traffic mix, top-performing videos, and viral patterns — not just views, but the signals that move you forward.
                          </p>
                          <p style="margin:0 0 12px 0; font-size:15px; line-height:1.55; color:#444444;">
                            •&nbsp;&nbsp;<strong>How you compare with similar creators:</strong> niche benchmarks across views, engagement rate, like-to-view, share rate, and more, so you know whether the gap is reach, retention, or content mix.
                          </p>
                          <p style="margin:0; font-size:15px; line-height:1.55; color:#444444;">
                            •&nbsp;&nbsp;<strong>What to create next:</strong> clear recommendations for content angles, posting mix, and video ideas based on your own account signals.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA 1 -->
                <tr>
                  <td align="center" style="padding:28px 40px 0 40px;">
                    <a href="{{url_connect}}" target="_blank" class="btn-lime">Connect TikTok</a>
                  </td>
                </tr>

                <!-- Divisória -->
                <tr>
                  <td class="px" style="padding:32px 40px 0 40px;">
                    <div style="border-top:1px solid #ececec; line-height:0; font-size:0;">&nbsp;</div>
                  </td>
                </tr>

                <!-- Keep exploring -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px;">
                    <h2 style="margin:0 0 14px 0; font-size:20px; font-weight:700; color:#141414;">Keep exploring Fypro.ai</h2>
                    <p style="margin:0 0 14px 0; font-size:15px; line-height:1.6; color:#444444;">After your report, you can move from plan to production:</p>
                    <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#444444;">•&nbsp;&nbsp;Find viral ideas in your niche</p>
                    <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#444444;">•&nbsp;&nbsp;Turn viral videos into scripts</p>
                    <p style="margin:0 0 16px 0; font-size:15px; line-height:1.55; color:#444444;">•&nbsp;&nbsp;Create product videos, AI avatar videos, and short AI clips with Seedance 2.0</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#444444;">Less generic advice. More “here is what your account should do next.”</p>
                  </td>
                </tr>

                <!-- CTA 2 -->
                <tr>
                  <td align="center" style="padding:24px 40px 40px 40px;">
                    <a href="{{url_explore}}" target="_blank" class="btn-lime">Explore Fypro.ai</a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Seção Discord (escura) -->
          <tr>
            <td style="background-color:#111111; border-radius:0 0 14px 14px; padding:44px 40px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:20px; font-weight:700; color:#ffffff;">Discord</p>
              <p style="margin:0 0 10px 0; font-size:12px; letter-spacing:2px; font-weight:600; color:#9aa0a6;">CREATOR COMMUNITY</p>
              <p style="margin:0 0 22px 0; font-size:18px; line-height:1.5; font-weight:700; color:#ffffff;">Get access to exclusive drops, tutorials, and a community of creators just like you.</p>
              <a href="{{url_discord}}" target="_blank" class="btn-lime">Join Discord</a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:24px 24px 8px 24px; text-align:center;">
              <p style="margin:0 0 6px 0; font-size:12px; line-height:1.5; color:#9a9a9a;">You are receiving this email because you signed up for Fypro.ai.</p>
              <p style="margin:0; font-size:12px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#9a9a9a; text-decoration:underline;">Unsubscribe</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
