/**
 * Template: Casa Muchacho — Combos especiais (restaurante mexicano).
 * Baseado no design do Figma (node 818:10977): header navy com logo, hero com
 * doodles, faixa "Novidades" e galeria de fotos. Fotos como imagens hospedadas
 * (placeholders enquanto não há URL).
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "casa-muchacho-combos",
  slug: "casa-muchacho-combos",
  name: "Casa Muchacho — Combos especiais",
  description:
    "E-mail de novidades de cardápio com header vibrante, faixa de destaque e galeria de fotos gastronômicas.",
  category: "Promoção",
  segment: "Restaurante",
  subject: "Combos especiais chegaram à Casa Muchacho 🌮",
  preheader: "O sabor e a alegria do México na sua mesa — novidades no cardápio.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Novidades do Cardápio — Casa Muchacho",
    categoria: "Marketing",
    subcategoria: "Lançamento",
    status: "Publicado",
    assunto: "Combos especiais chegaram à Casa Muchacho 🌮",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Encontrar uma loja”.",
    },
    {
      key: "ano",
      label: "Ano",
      description: "Ano exibido no rodapé (direitos reservados).",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Combos especiais — Casa Muchacho</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Gorditas:wght@400;700&family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .freckle { font-family:'Freckle Face','Comic Sans MS',cursive; font-weight:400; }
    .gorditas { font-family:'Gorditas','Comic Sans MS',cursive; font-weight:700; text-transform:uppercase; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:52px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#1c2344;">
    O sabor e a alegria do México na sua mesa — novidades no cardápio.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#1c2344;">

          <!-- Header (logo) -->
          <tr>
            <td style="background-color:#1c2344; padding:34px; text-align:center;">
              <span class="freckle" style="font-size:38px; color:#ffffff;">Casa</span>
              <span style="font-size:34px; margin:0 8px;">🌮</span>
              <span class="freckle" style="font-size:38px; color:#ffffff;">Muchacho</span>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px" style="background-color:#1c2344; padding:24px 34px 56px 34px; text-align:center;">
              <div class="ph" style="border:2px dashed rgba(2,197,188,0.6); border-radius:12px; padding:80px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">🌮</div>
                <div style="margin-top:8px;">Foto: combo de tacos (com doodles + selo 10/10)</div>
              </div>
              <h1 class="gorditas hero-title" style="margin:28px 0 18px 0; font-size:64px; line-height:0.9; color:#ffffff;">
                Combos especiais
              </h1>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                O sabor e a alegria do México chegaram à Casa Muchacho!
              </p>
            </td>
          </tr>

          <!-- Imagem 1 -->
          <tr>
            <td style="line-height:0;">
              <div class="ph" style="background:#2a3358; padding:110px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">🌮</div>
                <div style="margin-top:8px;">Foto: tacos na tábua</div>
              </div>
            </td>
          </tr>

          <!-- Faixa Novidades -->
          <tr>
            <td style="background-color:#fa2f59; padding:26px 34px; text-align:center;">
              <span class="gorditas" style="font-size:40px; color:#ffffff;">Novidades</span>
            </td>
          </tr>

          <!-- Imagem 2 -->
          <tr>
            <td style="line-height:0;">
              <div class="ph" style="background:#2a3358; padding:110px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">🧀</div>
                <div style="margin-top:8px;">Foto: nachos</div>
              </div>
            </td>
          </tr>

          <!-- Imagem 3 -->
          <tr>
            <td style="line-height:0;">
              <div class="ph" style="background:#2a3358; padding:110px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">🌯</div>
                <div style="margin-top:8px;">Foto: burritos</div>
              </div>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#1c2344; padding:56px 40px; text-align:center;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#fa2f59; color:#ffffff; border:3px solid #ffffff; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 36px; border-radius:56px;">
                ENCONTRAR UMA LOJA
              </a>
              <p style="margin:34px 0 16px 0;">
                <span class="freckle" style="font-size:32px; color:#ffffff;">Casa</span>
                <span style="font-size:28px; margin:0 8px;">🌮</span>
                <span class="freckle" style="font-size:32px; color:#ffffff;">Muchacho</span>
              </p>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#ffffff;">
                Casa Muchacho · Rua das Palmeiras, 185 · São Paulo, SP
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#ffffff;">
                © {{ano}} Casa Muchacho. Todos os direitos reservados.
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
