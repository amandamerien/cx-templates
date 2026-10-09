/**
 * Template: Welcome — Baker Noir (padaria artesanal).
 * Marca fake (design de referência "Baker Bleu"). Fundo azul, logo serifado,
 * foto, texto monoespaçado centralizado e rodapé com redes.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "baker-noir-boas-vindas",
  slug: "baker-noir-boas-vindas",
  name: "Welcome — Baker Noir (padaria)",
  description:
    "Primeiro e-mail de comunidade de uma padaria, com visual monocromático, foto e história da marca.",
  category: "Boas-vindas",
  segment: "Cafeteria",
  subject: "Bread for sharing — welcome to Baker Noir",
  preheader: "We're pleased that you're here. This is our first email to the community.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Welcome — Baker Noir",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Bread for sharing — welcome to Baker Noir",
  },
  variables: [
    { key: "url_contato", label: "URL — Contato", description: "Link “Contact Us” no rodapé." },
    { key: "url_privacy", label: "URL — Privacy", description: "Link “Privacy Policy” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Unsubscribe", description: "Link “Unsubscribe” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Baker Noir</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#1a5fd0; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .serif { font-family:'Playfair Display','Georgia',serif; font-style:italic; }
    .mono { font-family:'Space Mono','Courier New',monospace; }
    a { color:#ffffff; }
    .ph { text-align:center; font-family:'Space Mono',monospace; font-size:13px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .logo { font-size:52px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#1a5fd0; font-family:'Space Mono',monospace; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#1a5fd0;">
    We're pleased that you're here. This is our first email to the community.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a5fd0;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#1a5fd0;">

          <!-- Logo -->
          <tr>
            <td style="padding:44px 24px 24px 24px; text-align:center;">
              <span class="serif logo" style="font-size:66px; font-weight:700; color:#ffffff;">Baker Noir</span>
            </td>
          </tr>

          <!-- Foto -->
          <tr>
            <td class="px" style="padding:0 40px; line-height:0;">
              <div class="ph" style="background:#15479e; padding:92px 24px; color:#aecbf2; border:1px solid #3b78d8;">
                <div style="font-size:26px;">🥖</div>
                <div style="margin-top:8px;">Foto: pães sendo feitos à mão</div>
              </div>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:40px 48px 0 48px;">
              <p class="mono" style="margin:0 0 24px 0; font-size:12px; letter-spacing:3px; color:#cfe0f7;">WELCOME</p>
              <h1 class="mono" style="margin:0 0 32px 0; font-size:30px; font-weight:700; letter-spacing:2px; color:#ffffff;">BREAD FOR SHARING</h1>

              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">We're pleased that you're here.</p>
              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">This is the first email we've sent to our community. You're receiving this because you've chosen to hear from us and stay up to date with everything happening at Baker Noir.</p>
              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">At Baker Noir we bake sourdough properly, slowly, and by hand, every day. Our dark crust loaves are what we're known for, fresh daily as well as pastries, coffees, sandwiches, savoury items and limited-edition specials across our bakeries.</p>
              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">Baker Noir started in 2016 in a small shop in Elsternwick. A bakery where Mike and Mia wanted to make real bread, long fermented, hand shaped and deeply flavoured. The dark crust became a signature and stayed. These days you'll find us in five neighbourhoods across Melbourne and Sydney, but the bread is still made the same way, with the same flour, by the same hands.</p>
              <p class="mono" style="margin:0; font-size:14px; line-height:1.9; color:#e6effb;">We love our communities, and we're excited to keep you updated on what's coming up soon.</p>
            </td>
          </tr>

          <!-- Divisória -->
          <tr><td class="px" style="padding:40px 48px 0 48px;"><div style="border-top:1px solid #3b78d8; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:44px 48px 48px 48px;">
              <div style="width:46px; height:46px; background:#ffffff; border-radius:40% 40% 46% 46%; margin:0 auto 28px auto; text-align:center; line-height:46px;">
                <span style="color:#1a5fd0; font-size:20px;">▲</span>
              </div>
              <p class="mono" style="margin:0 0 20px 0; font-size:18px; letter-spacing:6px; color:#ffffff;">◎  f  in</p>
              <p class="mono" style="margin:0 0 20px 0; font-size:13px; color:#cfe0f7;">
                <a href="{{url_contato}}" target="_blank" style="color:#ffffff; text-decoration:none;">Contact Us</a> |
                <a href="{{url_privacy}}" target="_blank" style="color:#ffffff; text-decoration:none;">Privacy Policy</a>
              </p>
              <p class="mono" style="margin:0 0 6px 0; font-size:12px; color:#bcd2f2;">No longer want to receive these emails? <a href="{{url_unsubscribe}}" target="_blank" style="color:#ffffff; text-decoration:underline;">Unsubscribe</a></p>
              <p class="mono" style="margin:0; font-size:12px; line-height:1.6; color:#bcd2f2;">Baker Noir<br>PO BOX 2128 Caulfield North, VIC 3161</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
