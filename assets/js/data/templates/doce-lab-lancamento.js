/**
 * Template: Lançamento — Doce Lab (Brigadeiro & Baunilha).
 * Baseado no design do Figma (node 818:10932): header magenta, corpo preto,
 * imagem de produto e botão pílula. Foto como imagem hospedada (placeholder).
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "doce-lab-lancamento",
  slug: "doce-lab-lancamento",
  name: "Lançamento — Doce Lab (Brigadeiro & Baunilha)",
  description:
    "E-mail de lançamento de produto com header vibrante, corpo escuro, foto em destaque e CTA de loja.",
  category: "Promoção",
  segment: "Cafeteria",
  subject: "Novidade: Brigadeiro & Baunilha chegou às lojas 🍫",
  preheader:
    "Sorvete de baunilha com calda de brigadeiro, brownie e granulado — por tempo limitado.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Lançamento — Doce Lab",
    categoria: "Marketing",
    subcategoria: "Lançamento",
    status: "Publicado",
    assunto: "Novidade: Brigadeiro & Baunilha chegou às lojas 🍫",
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
  <title>Brigadeiro & Baunilha — Doce Lab</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#000000; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .freckle { font-family:'Freckle Face','Comic Sans MS',cursive; font-weight:400; }
    .ph { border-radius:12px; text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:44px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#000000; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#000000;">
    Sorvete de baunilha com calda de brigadeiro, brownie e granulado — por tempo limitado.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#000000;">

          <!-- Header -->
          <tr>
            <td style="background-color:#c82d70; padding:28px 34px; text-align:center;">
              <span class="freckle" style="font-size:40px; color:#ffffff;">Doce</span>
              <span style="font-size:34px; color:#f4cd69; margin:0 6px;">&#10047;</span>
              <span class="freckle" style="font-size:40px; color:#ffffff;">Lab</span>
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td class="px" style="padding:64px 40px 0 40px; text-align:center;">
              <p style="margin:0 0 22px 0; font-family:'Inter',Arial,sans-serif; font-weight:600; font-size:16px; text-transform:uppercase; letter-spacing:3px; color:#ff8dbc;">
                Agora disponível em nossas lojas:
              </p>
              <h1 class="freckle hero-title" style="margin:0 0 28px 0; font-size:60px; line-height:0.9; color:#ffffff; text-transform:uppercase;">
                Brigadeiro &amp; Baunilha
              </h1>
              <p style="margin:0 0 18px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Todo mundo sabe que a melhor parte do brigadeiro está na combinação entre o chocolate
                intenso, a textura cremosa e os granulados que ficam para o final.
              </p>
              <p style="margin:0 0 18px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Agora, essa nostalgia brasileira chegou às nossas lojas em uma sobremesa irresistível:
                sorvete cremoso de baunilha finalizado com calda de brigadeiro, pedaços de brownie e
                muito granulado de chocolate.
              </p>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Peça em forma de sundae, milk-shake ou sobremesa no pote — por tempo limitado.
              </p>
            </td>
          </tr>

          <!-- Imagem do produto -->
          <tr>
            <td class="px" style="padding:48px 40px 0 40px; line-height:0;">
              <div class="ph" style="border:2px dashed rgba(255,255,255,0.35); padding:96px 24px; color:rgba(255,255,255,0.85);">
                <div style="font-size:30px;">🍨</div>
                <div style="margin-top:8px;">Foto: sobremesa em destaque</div>
              </div>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td align="center" style="padding:48px 40px 64px 40px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#cd0856; color:#ffffff; border:3px solid #ffffff; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 36px; border-radius:56px;">
                ENCONTRAR UMA LOJA
              </a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#ffeedb; padding:48px 40px; text-align:center;">
              <p style="margin:0 0 16px 0;">
                <span class="freckle" style="font-size:34px; color:#000000;">Doce</span>
                <span style="font-size:28px; color:#cd0856; margin:0 6px;">&#10047;</span>
                <span class="freckle" style="font-size:34px; color:#000000;">Lab</span>
              </p>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#000000;">
                Rua Augusta, 250 · São Paulo, SP
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#000000;">
                © {{ano}} Doce Lab. Todos os direitos reservados.
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
