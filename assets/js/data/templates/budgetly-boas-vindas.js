/**
 * Template: Welcome — Budgetly (onboarding, tom bem-humorado).
 * Marca fake (design de referência "YNAB"). Fundo roxo, card branco, texto
 * longo com personalidade, caixa de destaque, "Next Steps" e rodapé roxo.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "budgetly-boas-vindas",
  slug: "budgetly-boas-vindas",
  name: "Welcome — Budgetly (onboarding)",
  description:
    "E-mail de boas-vindas com tom pessoal e bem-humorado, caixa de destaque, próximos passos e rodapé com redes sociais.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "We're glad you're here!",
  preheader: "Welcome to Budgetly — let's get down to spendfulness.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Welcome — Budgetly",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "We're glad you're here!",
  },
  variables: [
    {
      key: "url_explore",
      label: "URL — Explore",
      description: "Link de “explore Budgetly” no texto.",
    },
    {
      key: "url_guide",
      label: "URL — Get Started Guide",
      description: "Link do “Ultimate Get Started Guide”.",
    },
    {
      key: "url_preferencias",
      label: "URL — Preferências",
      description: "Link “Update your preferences” no rodapé.",
    },
    {
      key: "url_unsubscribe",
      label: "URL — Unsubscribe",
      description: "Link “Unsubscribe” no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Budgetly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#5b5bf5; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#4b4be0; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#5b5bf5; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#5b5bf5;">
    Welcome to Budgetly — let's get down to spendfulness.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#5b5bf5;">
    <tr>
      <td align="center" style="padding:28px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 0 22px 0; text-align:center;">
              <span style="font-weight:800; font-size:26px; letter-spacing:1px; color:#ffffff;">Budgetly</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Ícone + título -->
                <tr>
                  <td style="padding:36px 0 0 0; text-align:center;">
                    <div style="font-size:48px; line-height:1;">🧠</div>
                    <h1 class="h1" style="margin:16px 0 0 0; font-size:30px; font-weight:800; color:#1f2a66;">We're glad you're here!</h1>
                    <div style="width:140px; height:3px; background:#4b4be0; border-radius:3px; margin:14px auto 0 auto;"></div>
                  </td>
                </tr>

                <!-- Corpo -->
                <tr>
                  <td class="px" style="padding:28px 44px 0 44px; font-size:15px; line-height:1.65; color:#333333;">
                    <p style="margin:0 0 18px 0; font-weight:700; font-size:17px; color:#1f2a66;">Hello and welcome to Budgetly!</p>
                    <p style="margin:0 0 18px 0;">You're probably here because you heard about how charming and funny we are, right?</p>
                    <p style="margin:0 0 18px 0;">Oh… the money thing. Yeah, that too.</p>
                    <p style="margin:0 0 18px 0;">It's always, "With Budgetly, I changed my life, improved my relationship, eliminated most of my daily stress, and helped turn my dreams into reality," but, to be fair, sometimes people say we're funny. I swear.</p>
                    <p style="margin:0 0 18px 0;">Anyway, enough about us. Let's get down to paying off your car and renovating your kitchen or whatever it is that your heart desires.</p>
                    <p style="margin:0 0 18px 0;">Before we go any further, let's get one thing straight though: Budgetly isn't an app that magically sorts out your money situation when you download it. That's because the insight and decision-making skills you already possess (even if you don't realize it yet) are more powerful and life-changing than any feature we could develop.</p>
                    <p style="margin:0;">The Budgetly Method gives you a reliable, time-tested framework for channeling your knowledge and creativity into a lifestyle of spendfulness. The app gives you a set of tools for making a plan and putting it into action.</p>
                  </td>
                </tr>

                <!-- Caixa de destaque -->
                <tr>
                  <td class="px" style="padding:24px 44px 0 44px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e1e2fb; border-radius:10px;">
                      <tr>
                        <td style="padding:24px; text-align:center;">
                          <div style="font-size:34px; line-height:1;">🔔</div>
                          <p style="margin:12px 0 0 0; font-size:15px; font-style:italic; font-weight:700; color:#1f2a66;">But make no mistake: YOU are Budgetly's most life-changing feature.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Continuação -->
                <tr>
                  <td class="px" style="padding:24px 44px 0 44px; font-size:15px; line-height:1.65; color:#333333;">
                    <p style="margin:0;">In the next several emails, we're going to spend some time getting to know more about our favorite feature (you!) and learning how Budgetly can help you learn to love the way you spend.</p>
                  </td>
                </tr>

                <!-- Next steps -->
                <tr>
                  <td class="px" style="padding:24px 44px 0 44px; font-size:15px; line-height:1.65; color:#333333;">
                    <h2 style="margin:0 0 12px 0; font-size:17px; font-weight:700; color:#4b4be0;">Next Steps</h2>
                    <p style="margin:0 0 18px 0;">In the next email, we're going to talk about how budgeting is boring. We're also going to give you a free online workbook, so make sure you open that email.</p>
                    <p style="margin:0 0 18px 0;">Until then, <a href="{{url_explore}}" target="_blank" style="color:#4b4be0; font-weight:700; text-decoration:underline;">explore Budgetly</a> in the app or on your computer and make sure you've completed the onboarding wizard, which is, sadly, not a magical robe-wearing entity, but is still very helpful.</p>
                    <p style="margin:0 0 18px 0;">You might also want to check out our <a href="{{url_guide}}" target="_blank" style="color:#4b4be0; font-weight:700; text-decoration:underline;">Ultimate Get Started Guide</a> (but you don't have to—we're not here to boss you around.)</p>
                    <p style="margin:0 0 18px 0;">We'll see you tomorrow!</p>
                    <p style="margin:0 0 18px 0;">Spendfully Yours,</p>
                  </td>
                </tr>

                <!-- Assinatura -->
                <tr>
                  <td class="px" style="padding:0 44px 40px 44px;">
                    <span style="font-size:30px; vertical-align:middle;">🌳</span>
                    <span style="vertical-align:middle; font-weight:700; font-size:15px; color:#1f2a66; margin-left:8px;">The Budgetly Team</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:28px 24px 10px 24px; text-align:center;">
              <div style="font-size:26px; margin-bottom:12px;">🌳</div>
              <p style="margin:0 0 14px 0; font-size:13px; color:#dcdcff;">
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">Facebook</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">X</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">Instagram</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">TikTok</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">YouTube</a>
              </p>
              <p style="margin:0 0 4px 0; font-size:12px; color:#dcdcff;">Copyright © 2025, Budgetly, All Rights Reserved.</p>
              <p style="margin:0 0 12px 0; font-size:12px; color:#dcdcff;">770 E. Main St, #236<br>Lehi, UT 84043</p>
              <p style="margin:0; font-size:12px;">
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#dcdcff; text-decoration:underline;">Unsubscribe</a>
                or <a href="{{url_preferencias}}" target="_blank" style="color:#dcdcff; text-decoration:underline;">Update your preferences</a>
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
