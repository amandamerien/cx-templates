/**
 * Template: Newsletter de conteúdo — BrightNest (parentalidade).
 * Marca fake (design de referência "Good Inside"). Reproduz o layout: menu,
 * ícone, seções de conteúdo com links, blocos de membership e evento, CTA,
 * bloco amarelo de fecho, disclaimer e rodapé completo.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "brightnest-newsletter",
  slug: "brightnest-newsletter",
  name: "Newsletter de conteúdo — BrightNest",
  description:
    "Newsletter editorial de parentalidade com menu, seções de livros/recursos, membership, evento (support circle), CTAs e rodapé completo.",
  category: "Institucional",
  segment: "Saúde",
  subject: "For Autism Acceptance Month: books, shows & resources",
  preheader:
    "A few books, shows and resources to talk about autism with more understanding and joy.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Newsletter de conteúdo — BrightNest",
    categoria: "Nutrição",
    subcategoria: "Conteúdo educativo",
    status: "Publicado",
    assunto: "For Autism Acceptance Month: books, shows & resources",
  },
  variables: [
    {
      key: "data_evento",
      label: "Data do evento",
      description: "Data/horário do support circle (ex.: April 10th | 12 PM ET).",
    },
    {
      key: "url_learn_more",
      label: "URL — Learn more",
      description: "Link do botão “Learn more” (membership).",
    },
    {
      key: "url_rsvp",
      label: "URL — RSVP",
      description: "Link do botão “Join to RSVP” (evento).",
    },
    {
      key: "url_preferencias",
      label: "URL — Preferências",
      description: "Link “Update your preferences” no rodapé.",
    },
    {
      key: "url_unsubscribe",
      label: "URL — Unsubscribe",
      description: "Link “Unsubscribe from all” no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Autism Acceptance Month — BrightNest</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .glink { color:#2f7d4f; font-weight:700; text-decoration:underline; }
    .btn-y { display:inline-block; background-color:#ffd60a; color:#1a1a1a; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:13px; letter-spacing:0.5px; text-decoration:none; padding:14px 22px; border-radius:6px; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .nav a { display:inline-block; margin:4px 8px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#2b2b2b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    A few books, shows and resources to talk about autism with more understanding and joy.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff;">

          <!-- Menu -->
          <tr>
            <td style="background-color:#f3ead1; padding:22px 24px; text-align:center;">
              <div style="font-weight:800; font-size:22px; letter-spacing:1px; color:#1a1a1a;">BrightNest</div>
              <div class="nav" style="margin-top:10px; font-size:13px; font-weight:600; color:#6b6450;">
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Home</a>
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Workshops</a>
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Reviews</a>
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Get Started</a>
              </div>
            </td>
          </tr>

          <!-- Ícone -->
          <tr>
            <td style="padding:36px 0 8px 0; text-align:center;">
              <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M29 48C29 48 6 34 6 18.5C6 11 11.6 6 18 6c4.3 0 8 2.4 11 7 3-4.6 6.7-7 11-7 6.4 0 12 5 12 12.5C52 34 29 48 29 48Z" stroke="#1a1a1a" stroke-width="2.4" stroke-linejoin="round"/>
                <path d="M41 20h4a2 2 0 0 1 2 2v3a2.5 2.5 0 0 0 0 5v3a2 2 0 0 1-2 2h-4" stroke="#1a1a1a" stroke-width="2.2" stroke-linejoin="round" fill="#ffffff"/>
              </svg>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td class="px" style="padding:12px 40px 0 40px;">
              <h1 style="margin:0 0 20px 0; font-size:30px; font-weight:800; color:#1a1a1a;">Hi there,</h1>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                For Autism Acceptance Month, we're celebrating autistic kids and the many ways they move
                through the world.
              </p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                Because belonging isn't about changing who you are. It is about being known, respected,
                and welcomed <em>exactly as you are.</em>
              </p>
              <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                We're sharing a few books, shows, and resources from BrightNest and beyond to help
                families talk about autism with more understanding, more clarity, and more joy.
              </p>
            </td>
          </tr>

          <tr><td class="px" style="padding:28px 40px 0 40px;"><div style="border-top:1px solid #e7e7e7; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Books and shows -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px;">
              <h2 style="margin:0 0 18px 0; font-size:17px; font-weight:700; color:#1a1a1a;">Books and shows to watch with your kid</h2>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Pablo (TV series)</a></p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Pablo is an autistic boy with a big imagination that he uses to make sense of the world around him. This thoughtful series celebrates art, big feelings, and the rich inner world so many autistic kids have inside of them.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">More Than Words: So Many Ways to Say What We Mean</a></p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">This story follows a kid who doesn't speak many words, but has so much to communicate. It's a powerful reminder that connection can happen through gestures, devices, movement, expression, and presence.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">All My Stripes</a></p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">In this picture book, Zane worries that his autism is the thing everyone notices most about him. With his mom's help, he learns that autism is just a part of who he is, among so many other important parts.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Benji, the Bad Day, and Me</a></p>
              <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">When both brothers are having a hard day, Sammy wonders if anyone notices he's struggling too - until his autistic brother Benji steps in to help. This sweet story opens up conversations about sibling feelings, feeling overlooked, and showing up for each other.</p>
            </td>
          </tr>

          <tr><td class="px" style="padding:28px 40px 0 40px;"><div style="border-top:1px solid #e7e7e7; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- New in membership -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px;">
              <h2 style="margin:0 0 16px 0; font-size:17px; font-weight:700; color:#1a1a1a;">New in membership</h2>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                We're always updating our library based on what our members want and need. Parents asked
                for more support around autism, so we partnered with clinical psychologist Dr. Alex Reed
                to make that happen - <strong>now available in the BrightNest app</strong>.
              </p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">When Autism Becomes a Part of Your Family</a></p>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">A guide for parents navigating a new diagnosis.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Talking About Autism with Your Child and Others</a></p>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">A grounded place to begin when you're not sure how to start the conversation.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">How Predictability Can Help Autistic Kids Feel More Capable</a></p>
              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Four practical ways to create more steadiness at home.</p>

              <a href="{{url_learn_more}}" target="_blank" class="btn-y">LEARN MORE</a>
            </td>
          </tr>

          <tr><td class="px" style="padding:28px 40px 0 40px;"><div style="border-top:1px solid #e7e7e7; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Support circle -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px;">
              <span style="display:inline-block; background:#ffd60a; color:#1a1a1a; font-size:12px; font-weight:700; padding:5px 12px; border-radius:6px;">Support Circles</span>
              <h2 style="margin:16px 0 6px 0; font-size:18px; font-weight:700; color:#1a1a1a;">Parenting with Neurodivergent Kids: Autism Acceptance</h2>
              <p style="margin:0 0 16px 0; font-size:14px; font-weight:600; color:#6b6450;">{{data_evento}}</p>
              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                Dr. Alex Reed is hosting a special support circle this month. If you've been wanting a
                space to bring real questions, feel less alone, and get grounded support, we'd love to
                have you there.
              </p>
              <a href="{{url_rsvp}}" target="_blank" class="btn-y">JOIN TO RSVP</a>
            </td>
          </tr>

          <!-- Bloco amarelo -->
          <tr>
            <td style="padding:34px 0 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffd60a;">
                <tr>
                  <td class="px" style="padding:34px 40px; font-size:15px; line-height:1.6; color:#1a1a1a;">
                    <p style="margin:0 0 18px 0;">We hope this gives your family a few meaningful ways to keep the conversation going.</p>
                    <p style="margin:0 0 18px 0;">Because it's not about helping autistic kids fit more neatly into the world. It's about leading with curiosity and understanding. That's how we build a world that gives kids more room to be themselves.</p>
                    <p style="margin:0;">The BrightNest Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Disclaimer -->
          <tr>
            <td class="px" style="padding:26px 48px 0 48px; text-align:center;">
              <p style="margin:0; font-size:12px; font-style:italic; line-height:1.6; color:#8a8a8a;">
                This content is not medical or therapeutic advice. BrightNest does not diagnose or treat
                medical or developmental conditions. If you have questions or concerns about your child,
                please consult a qualified professional.
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:30px 24px 36px 24px; text-align:center;">
              <div style="width:34px; height:34px; line-height:34px; margin:0 auto 14px auto; background:#ffd60a; border-radius:50%; font-weight:800; color:#1a1a1a;">B</div>
              <p style="margin:0 0 14px 0; font-size:13px; font-weight:600; color:#1a1a1a;">
                <a href="#" style="color:#1a1a1a; text-decoration:none;">Mobile App</a> &nbsp;·&nbsp;
                <a href="#" style="color:#1a1a1a; text-decoration:none;">Workshops</a> &nbsp;·&nbsp;
                <a href="#" style="color:#1a1a1a; text-decoration:none;">Help</a>
              </p>
              <p style="margin:0 0 4px 0; font-size:12px;"><a href="#" style="color:#2f7d4f; text-decoration:underline;">Legal Disclosures</a></p>
              <p style="margin:0 0 14px 0; font-size:12px; color:#8a8a8a;">BrightNest, Inc. | 224 W 35th St Ste 500 #2433 | New York, NY 10001</p>
              <p style="margin:0; font-size:12px; color:#8a8a8a;">
                No longer feeling good about these emails?<br>
                <a href="{{url_preferencias}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Update Your Preferences</a>
                or <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Unsubscribe From All</a>
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
