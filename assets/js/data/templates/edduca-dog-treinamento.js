/**
 * Template: Edduca Dog — Treinamento canino (cupom).
 * Baseado no design do Figma (node 813:9380): card verde com foto, história da
 * especialista, cupom e CTA, mais avaliação. Foto como placeholder.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "edduca-dog-treinamento",
  slug: "edduca-dog-treinamento",
  name: "Edduca Dog — Treinamento canino (cupom)",
  description:
    "E-mail de infoproduto com apresentação da especialista, argumentação, cupom de desconto e avaliação.",
  category: "Promoção",
  segment: "Educação",
  subject: "Eduque seu cachorro em 21 dias 🐶 30% OFF",
  preheader:
    "Método simples e positivo para educar seu cão em casa — use {{codigo_cupom}}.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Treinamento Canino — Edduca Dog",
    categoria: "Vendas",
    subcategoria: "Promoção",
    status: "Publicado",
    assunto: "Eduque seu cachorro em 21 dias 🐶 30% OFF",
  },
  variables: [
    {
      key: "codigo_cupom",
      label: "Código do cupom",
      description: "Cupom exibido no e-mail (ex.: MEUCAO30).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Começar o treinamento”.",
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
  <title>Treinamento canino — Edduca Dog</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Dangrek&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f6f6f6; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anton { font-family:'Anton','Arial Narrow',Arial,sans-serif; font-weight:400; text-transform:uppercase; }
    .dangrek { font-family:'Dangrek','Arial Black',Arial,sans-serif; font-weight:400; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:22px !important; padding-right:22px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f6f6f6; font-family:'Inter',Arial,Helvetica,sans-serif; color:#0c4424;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f6f6f6;">
    Método simples e positivo para educar seu cão em casa — use {{codigo_cupom}}.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f6f6;">
    <tr>
      <td align="center" style="padding:35px 33px;">
        <table role="presentation" class="container" width="615" cellpadding="0" cellspacing="0" style="width:615px; max-width:615px; background-color:#ffffff; border-radius:16px;">
          <tr>
            <td style="padding:34px 24px;">

              <!-- Logo -->
              <p class="dangrek" style="margin:0 0 28px 0; text-align:center; font-size:40px; letter-spacing:-1px; color:#0c4424;">EDDUCA DOG</p>

              <!-- Card verde -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#115e33; border-radius:16px;">
                <tr>
                  <td class="px" style="padding:34px;">
                    <!-- Imagem -->
                    <div class="ph" style="border-radius:12px; background:#0c4424; padding:88px 24px; color:#a9c9b5; margin-bottom:28px;">
                      <div style="font-size:30px;">🐕</div>
                      <div style="margin-top:8px;">Foto: especialista com o cão</div>
                    </div>
                    <!-- Título -->
                    <h1 class="anton h1" style="margin:0 0 24px 0; font-size:36px; line-height:1; text-align:center; color:#ffffff;">
                      Olá, eu sou a Mariana, especialista em comportamento canino
                    </h1>
                    <!-- Texto -->
                    <p style="margin:0 0 16px 0; font-size:16px; line-height:1.5; text-align:center; color:#eaf3ec;">Uma situação que vejo todos os dias é esta:</p>
                    <p style="margin:0 0 16px 0; font-size:16px; line-height:1.5; text-align:center; color:#eaf3ec;">
                      Muitos tutores acreditam que comportamentos como latir excessivamente, puxar a
                      guia ou destruir objetos fazem parte da personalidade do cachorro.
                    </p>
                    <p style="margin:0 0 16px 0; font-size:16px; line-height:1.5; text-align:center; color:#eaf3ec;">
                      Mas, na maioria dos casos, esses comportamentos são resultado da falta de uma
                      rotina clara, estímulos adequados e uma comunicação que o animal consiga
                      compreender.
                    </p>
                    <p style="margin:0 0 28px 0; font-size:16px; line-height:1.5; text-align:center; color:#eaf3ec;">
                      Foi por isso que criei o programa Cão Educado em 21 Dias: um método simples e
                      positivo para ajudar você a educar seu cachorro dentro de casa, mesmo que nunca
                      tenha feito nenhum treinamento.
                    </p>
                    <!-- Cupom -->
                    <div style="border:2px dashed #7fb894; border-radius:12px; padding:22px; text-align:center; margin-bottom:28px;">
                      <p style="margin:0 0 6px 0; font-size:14px; letter-spacing:1px; color:#c7dccd;">GANHE 30% DE DESCONTO</p>
                      <p style="margin:0; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:28px; color:#ffffff;">{{codigo_cupom}}</p>
                    </div>
                    <!-- Botão -->
                    <a href="{{url_botao}}" target="_blank"
                       style="display:block; background-color:#ffffff; color:#115e33; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:17px; text-align:center; text-decoration:none; padding:22px 24px; border-radius:56px;">
                      COMEÇAR O TREINAMENTO
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Avaliação -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:34px 0 0 0; text-align:center;">
                    <div style="font-size:22px; color:#2e9e5b; letter-spacing:4px;">★★★★★</div>
                    <p style="margin:12px 0 0 0; font-size:16px; font-weight:500; color:#0c4424;">
                      4,9/5 — mais de 2.500 tutores satisfeitos
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

        <!-- Rodapé -->
        <table role="presentation" width="615" cellpadding="0" cellspacing="0" style="width:615px; max-width:615px;">
          <tr>
            <td style="padding:28px 20px 0 20px; text-align:center;">
              <p style="margin:0; font-size:14px; line-height:1.5; color:#8e8e8e;">
                © {{ano}} Cão Educado em 21 Dias. Todos os direitos reservados.
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
