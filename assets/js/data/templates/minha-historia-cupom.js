/**
 * Template: Promoção — Minha História (cupom R$50 em livros).
 * Baseado no design do Figma (node 815:10457): fundo azul, detalhes amarelos,
 * 3 imagens e cupom em pílula. As fotos entram como imagens hospedadas —
 * enquanto não há URL, exibimos placeholders.
 *
 * Obs.: o design original tinha copy "leftover" da SOLTA (bebidas) no corpo e
 * rodapé; aqui o conteúdo foi mantido coerente com "Minha História" (livros).
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "minha-historia-cupom",
  slug: "minha-historia-cupom",
  name: "Promoção — Minha História (cupom R$50)",
  description:
    "E-mail promocional com cupom de desconto em livros personalizados, header azul e imagens de destaque.",
  category: "Promoção",
  segment: "E-commerce",
  subject: "R$ 50 de desconto em livros personalizados 📖",
  preheader:
    "Presentes para irmãos que estão crescendo juntos — use o cupom {{codigo_cupom}}.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Promoção Cupom — Minha História",
    categoria: "Vendas",
    subcategoria: "Promoção",
    status: "Publicado",
    assunto: "R$ 50 de desconto em livros personalizados 📖",
  },
  variables: [
    {
      key: "codigo_cupom",
      label: "Código do cupom",
      description: "Cupom de desconto exibido no e-mail (ex.: #MINHAHISTORIA50).",
    },
    {
      key: "url_botao",
      label: "URL do botão/cupom",
      description: "Link acionado ao clicar na pílula do cupom.",
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
  <title>R$ 50 de desconto em livros</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=DynaPuff:wght@400;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#013a8a; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anton { font-family:'Anton','Arial Narrow',Arial,sans-serif; font-weight:400; text-transform:uppercase; }
    .ph { border-radius:16px; text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:34px !important; }
      .sec-title { font-size:30px !important; }
      .coupon { font-size:16px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#013a8a; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#0149ac;">
    Presentes para irmãos que estão crescendo juntos — use o cupom {{codigo_cupom}}.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#013a8a;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#0149ac;">

          <!-- Cabeçalho -->
          <tr>
            <td class="px" style="padding:48px 45px 0 45px; text-align:center;">
              <p style="margin:0 0 20px 0; font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; font-size:24px; color:#f4ff75; text-transform:uppercase; letter-spacing:0.5px;">
                Minha História
              </p>
              <h1 class="anton hero-title" style="margin:0; font-size:48px; line-height:0.92; letter-spacing:-1px; color:#ffffff;">
                R$ 50 de desconto em livros para todos
              </h1>
            </td>
          </tr>

          <!-- Imagem 1 (produto) -->
          <tr>
            <td style="padding:34px 0 0 0; line-height:0;">
              <div class="ph" style="margin:0 24px; border:2px dashed rgba(244,255,117,0.6); padding:72px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">📚</div>
                <div style="margin-top:8px;">Foto: livros personalizados (produto)</div>
              </div>
            </td>
          </tr>

          <!-- Chamada -->
          <tr>
            <td class="px" style="padding:40px 45px 0 45px; text-align:center;">
              <h2 class="anton sec-title" style="margin:0 0 14px 0; font-size:40px; line-height:1; letter-spacing:-1px; color:#ffffff;">
                Presentes para irmãos que estão crescendo juntos
              </h2>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Um livro personalizado sobre irmãos mais velhos e mais novos, criado para fortalecer
                o vínculo, a amizade e os momentos compartilhados entre eles.
              </p>
            </td>
          </tr>

          <!-- Cupom 1 -->
          <tr>
            <td align="center" style="padding:28px 45px 0 45px;">
              <a href="{{url_botao}}" target="_blank" class="coupon"
                 style="display:inline-block; border:3px solid #f4ff75; color:#f4ff75; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                CUPOM: {{codigo_cupom}}
              </a>
            </td>
          </tr>

          <!-- Imagem 2 (com moldura ilustrada) -->
          <tr>
            <td class="px" style="padding:34px 45px 0 45px; line-height:0;">
              <div class="ph" style="border:2px dashed rgba(244,255,117,0.6); padding:64px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">📷</div>
                <div style="margin-top:8px;">Foto: crianças lendo<br><span style="opacity:0.7;">(imagem com moldura ilustrada)</span></div>
              </div>
            </td>
          </tr>

          <!-- Imagem 3 (full) -->
          <tr>
            <td style="padding:34px 0 0 0; line-height:0;">
              <div class="ph" style="margin:0 24px; border:2px dashed rgba(244,255,117,0.6); padding:72px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">📷</div>
                <div style="margin-top:8px;">Foto: crianças lendo (destaque)</div>
              </div>
            </td>
          </tr>

          <!-- Texto de fecho -->
          <tr>
            <td class="px" style="padding:34px 45px 0 45px; text-align:center;">
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Esta é a sua chance de criar uma lembrança que dura para sempre. O desconto é
                aplicado automaticamente na finalização da compra.
              </p>
            </td>
          </tr>

          <!-- Cupom 2 -->
          <tr>
            <td align="center" style="padding:28px 45px 48px 45px;">
              <a href="{{url_botao}}" target="_blank" class="coupon"
                 style="display:inline-block; border:3px solid #f4ff75; color:#f4ff75; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                CUPOM: {{codigo_cupom}}
              </a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#ffffff; padding:34px 40px; text-align:center;">
              <p style="margin:0 0 14px 0; font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; font-size:24px; color:#233d7f; text-transform:uppercase;">
                Minha História
              </p>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#233d7f;">
                Minha História · São Paulo, Brasil
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#233d7f;">
                © {{ano}} Minha História. Todos os direitos reservados.
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
