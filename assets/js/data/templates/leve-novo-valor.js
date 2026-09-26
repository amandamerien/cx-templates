/**
 * Template: leve — Novo valor do plano (programa de saúde/GLP-1).
 * Baseado no design do Figma (node 819:11806): header branco, card verde de
 * oferta, disclaimer legal e rodapé. Imagens como placeholders.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "leve-novo-valor",
  slug: "leve-novo-valor",
  name: "leve — Novo valor do plano (saúde)",
  description:
    "E-mail de oferta de programa de saúde com card de destaque, avisos legais e rodapé com redes sociais.",
  category: "Promoção",
  segment: "Saúde",
  subject: "Novo valor no plano de 6 meses 🌿",
  preheader:
    "Programa de controle de peso com acompanhamento médico e possibilidade de GLP-1.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Nova Oferta — leve",
    categoria: "Vendas",
    subcategoria: "Promoção",
    status: "Publicado",
    assunto: "Novo valor no plano de 6 meses 🌿",
  },
  variables: [
    {
      key: "valor_plano",
      label: "Valor do plano",
      description: "Valor exibido no destaque (ex.: R$ 699/mês).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Começar a avaliação”.",
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
  <title>Novo valor no plano — leve</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Freckle+Face&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anton { font-family:'Anton','Arial Narrow',Arial,sans-serif; font-weight:400; text-transform:uppercase; }
    .freckle { font-family:'Freckle Face','Comic Sans MS',cursive; font-weight:400; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:44px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#0c2518;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Programa de controle de peso com acompanhamento médico e possibilidade de GLP-1.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:34px 24px 24px 24px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 0 28px 0; text-align:center;">
              <span class="freckle" style="font-size:40px; color:#0c2518;">leve</span>
            </td>
          </tr>

          <!-- Banner verde-claro -->
          <tr>
            <td style="padding:0 0 14px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#c5ed82; border-radius:100px;">
                <tr><td style="padding:22px 34px; text-align:center; font-family:'Inter',Arial,sans-serif; font-weight:600; font-size:16px; text-transform:uppercase; color:#0c2518;">
                  Novo valor no plano de 6 meses. Conheça agora.
                </td></tr>
              </table>
            </td>
          </tr>

          <!-- Card de oferta -->
          <tr>
            <td style="padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0c3523; border-radius:24px;">
                <tr>
                  <td class="px" style="padding:56px 45px 0 45px; text-align:center;">
                    <h1 class="anton hero-title" style="margin:0 0 20px 0; font-size:56px; line-height:0.95; color:#ffffff;">
                      Agora por {{valor_plano}}*
                    </h1>
                    <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                      Programa personalizado para controle de peso com acompanhamento médico e
                      possibilidade de tratamento com GLP-1.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="px" style="padding:34px 45px 0 45px; line-height:0;">
                    <div class="ph" style="border:2px dashed rgba(255,255,255,0.4); border-radius:16px; padding:72px 24px; color:rgba(255,255,255,0.85);">
                      <div style="font-size:28px;">💊</div>
                      <div style="margin-top:8px;">Foto: produto do programa</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="px" align="center" style="padding:34px 45px 56px 45px;">
                    <a href="{{url_botao}}" target="_blank"
                       style="display:block; background-color:#ffffff; color:#0c2518; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-align:center; text-decoration:none; padding:22px 24px; border-radius:56px;">
                      COMEÇAR A AVALIAÇÃO
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Disclaimer -->
          <tr>
            <td class="px" style="padding:34px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 22px 0; font-size:16px; line-height:1.4; color:#0c4424;">
                Medicamentos agonistas de GLP-1 exigem prescrição e acompanhamento de um profissional
                de saúde habilitado.
              </p>
              <p style="margin:0 0 22px 0; font-size:16px; line-height:1.4; color:#0c4424;">
                A contratação do programa não garante a prescrição de medicamentos. A indicação
                depende da avaliação individual, do histórico clínico, dos critérios de elegibilidade
                e da decisão do profissional responsável.
              </p>
              <p style="margin:0; font-size:16px; line-height:1.4; color:#0c4424;">
                *Valor ilustrativo referente ao plano de seis meses, mediante pagamento conforme as
                condições contratadas. O preço final pode variar de acordo com o plano e o tratamento
                prescrito.
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:34px 0 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0c3724; border-radius:24px;">
                <tr><td style="padding:40px; text-align:center;">
                  <p style="margin:0 0 16px 0;"><span class="freckle" style="font-size:36px; color:#ffffff;">leve</span></p>
                  <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#ffffff;">
                    Facebook · X · Instagram · TikTok
                  </p>
                  <p style="margin:0; font-size:14px; line-height:1.5; color:#ffffff;">
                    © {{ano}} Leve Saúde Digital. Todos os direitos reservados.
                  </p>
                </td></tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
