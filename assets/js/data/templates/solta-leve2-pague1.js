/**
 * Template: Promoção — SOLTA (leve 2, pague 1 / 50% OFF).
 * Baseado no design do Figma (node 818:10862): header magenta com produto,
 * corpo laranja, cupom e botões em pílula. Fotos entram como imagens hospedadas
 * (placeholders enquanto não há URL).
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "solta-leve2-pague1",
  slug: "solta-leve-2-pague-1",
  name: "Promoção — SOLTA (leve 2, pague 1)",
  description:
    "E-mail promocional de última chamada (leve 2, pague 1) com cupom, imagens de produto e visual vibrante.",
  category: "Promoção",
  segment: "E-commerce",
  subject: "Último dia: leve 2 e pague 1 em tudo 🍹",
  preheader:
    "O verão está acabando — aproveite o leve 2, pague 1 com o cupom {{codigo_cupom}}.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Última Chance — SOLTA",
    categoria: "Vendas",
    subcategoria: "Promoção",
    status: "Publicado",
    assunto: "Último dia: leve 2 e pague 1 em tudo 🍹",
  },
  variables: [
    {
      key: "codigo_cupom",
      label: "Código do cupom",
      description: "Cupom exibido no e-mail (ex.: #SOLTA50%).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado nos botões de compra.",
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
  <title>Leve 2, pague 1</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#7d0a2a; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anton { font-family:'Anton','Arial Narrow',Arial,sans-serif; font-weight:400; text-transform:uppercase; }
    .ph { border-radius:16px; text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:36px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#7d0a2a; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ec5d24;">
    O verão está acabando — aproveite o leve 2, pague 1 com o cupom {{codigo_cupom}}.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#7d0a2a;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ec5d24;">

          <!-- Header (magenta + produto + selo) -->
          <tr>
            <td style="background-color:#a60e37; padding:0 0 28px 0; border-radius:0 0 36px 36px;">
              <div class="ph" style="margin:0; border-bottom-left-radius:36px; border-bottom-right-radius:36px; border:2px dashed rgba(244,205,105,0.7); padding:96px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">🥤</div>
                <div style="margin-top:8px;">Foto: mão segurando a lata (produto)</div>
              </div>
              <div style="text-align:center; margin-top:-34px;">
                <span class="anton" style="display:inline-block; background:#ffffff; color:#a60e37; border:3px solid #f4cd69; font-size:26px; padding:12px 28px; border-radius:40px;">50% OFF</span>
              </div>
            </td>
          </tr>

          <!-- Título -->
          <tr>
            <td class="px" style="padding:44px 45px 0 45px; text-align:center;">
              <h1 class="anton hero-title" style="margin:0; font-size:46px; line-height:1; letter-spacing:-1px; color:#ffffff;">
                É o último dia para levar 2 e pagar 1 em tudo
              </h1>
            </td>
          </tr>

          <!-- Botão 1 -->
          <tr>
            <td align="center" style="padding:24px 45px 0 45px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; border:3px solid #ffffff; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:17px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                APROVEITAR ANTES QUE ACABE
              </a>
            </td>
          </tr>

          <!-- Imagem 2 (com moldura) -->
          <tr>
            <td class="px" style="padding:34px 45px 0 45px; line-height:0;">
              <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); padding:64px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">📷</div>
                <div style="margin-top:8px;">Foto: latas em destaque<br><span style="opacity:0.7;">(imagem com moldura ilustrada)</span></div>
              </div>
            </td>
          </tr>

          <!-- Texto -->
          <tr>
            <td class="px" style="padding:34px 45px 0 45px; text-align:center;">
              <p style="margin:0 0 16px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                O evento mais refrescante do verão está chegando ao fim.
              </p>
              <p style="margin:0 0 16px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Hoje é sua última oportunidade para levar duas bebidas e pagar apenas uma em todos os
                sabores da SOLTA.
              </p>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                O desconto será aplicado automaticamente na finalização da compra.
              </p>
            </td>
          </tr>

          <!-- Cupom -->
          <tr>
            <td align="center" style="padding:28px 45px 0 45px;">
              <span class="anton" style="display:inline-block; background:#a60e37; color:#ffffff; border:3px solid #ffffff; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:22px; padding:20px 32px; border-radius:12px;">
                CUPOM: {{codigo_cupom}}
              </span>
            </td>
          </tr>

          <!-- Texto 2 -->
          <tr>
            <td class="px" style="padding:34px 45px 0 45px; text-align:center;">
              <p style="margin:0 0 12px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Abasteça a geladeira para todos os programas que ainda vêm por aí: dias de praia,
                tardes na piscina, encontros com os amigos e noites de jogos.
              </p>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Esse é o espírito SOLTA: bebidas refrescantes, sabores inesperados e bons momentos
                para compartilhar.
              </p>
            </td>
          </tr>

          <!-- Imagem 3 (linha de latas) -->
          <tr>
            <td class="px" style="padding:34px 45px 0 45px; line-height:0;">
              <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); padding:64px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">🥫</div>
                <div style="margin-top:8px;">Foto: linha de sabores (4 latas)</div>
              </div>
            </td>
          </tr>

          <!-- Botão 2 -->
          <tr>
            <td align="center" style="padding:34px 45px 48px 45px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; border:3px solid #ffffff; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:17px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                COMPRAR ANTES QUE ACABE
              </a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#a60e37; padding:34px 40px; text-align:center;">
              <div style="font-size:26px; margin-bottom:10px;">👑</div>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#ffffff;">
                SOLTA Bebidas · São Paulo, Brasil
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#ffffff;">
                © {{ano}} SOLTA. Todos os direitos reservados.
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
