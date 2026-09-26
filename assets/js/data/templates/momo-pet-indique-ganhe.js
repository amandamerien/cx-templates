/**
 * Template: Momo Pet — Indique e ganhe (programa de indicação).
 * Baseado no design do Figma (node 819:11317): header verde, seção laranja com
 * 3 passos numerados e imagens, botão e rodapé. Fotos como imagens hospedadas
 * (placeholders enquanto não há URL).
 *
 * Obs.: leftovers da SOLTA (parágrafo do header e rodapé) foram ajustados para
 * o contexto Momo Pet.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "momo-pet-indique-ganhe",
  slug: "momo-pet-indique-ganhe",
  name: "Momo Pet — Indique e ganhe (50% OFF)",
  description:
    "E-mail de programa de indicação com recompensas em etapas, imagens de brindes e CTA para o aplicativo.",
  category: "Promoção",
  segment: "E-commerce",
  subject: "Indique amigos e ganhe presentes exclusivos 🐾",
  preheader:
    "50% OFF + ecobag, boné e box a cada indicação confirmada na Momo Pet.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Indique e Ganhe — Momo Pet",
    categoria: "Relacionamento",
    subcategoria: "Promoção",
    status: "Publicado",
    assunto: "Indique amigos e ganhe presentes exclusivos 🐾",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Acessar aplicativo”.",
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
  <title>Indique e ganhe — Momo Pet</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .freckle { font-family:'Freckle Face','Comic Sans MS',cursive; font-weight:400; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .off { font-size:80px !important; }
      .sec-title { font-size:38px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#0b4122;">
    50% OFF + ecobag, boné e box a cada indicação confirmada na Momo Pet.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#0b4122;">

          <!-- Header -->
          <tr>
            <td class="px" style="background-color:#0b4122; padding:56px 45px; text-align:center;">
              <p style="margin:0 0 28px 0;">
                <span class="freckle" style="font-size:38px; color:#ffffff;">momo</span>
                <span style="font-size:30px; color:#ec5d24; margin:0 6px;">&#10047;</span>
                <span class="freckle" style="font-size:38px; color:#ffffff;">pet</span>
              </p>
              <h1 class="freckle off" style="margin:0 0 12px 0; font-size:96px; line-height:0.85; color:#ffffff;">50% OFF!</h1>
              <p class="freckle" style="margin:0 0 20px 0; font-size:36px; line-height:0.95; color:#ffffff;">+ presentes exclusivos Momo Pet</p>
              <p style="margin:0; font-size:16px; line-height:1.5; color:#ffffff;">
                Indique amigos para a Momo Pet e ganhe presentes exclusivos a cada indicação
                confirmada. Quanto mais amigos, mais recompensas para você e para eles.
              </p>
            </td>
          </tr>

          <!-- Seção laranja (passos) -->
          <tr>
            <td style="background-color:#0b4122; padding:0 24px 24px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ec5d24;">
                <tr>
                  <td class="px" style="padding:56px 45px 0 45px; text-align:center;">
                    <p class="freckle sec-title" style="margin:0 0 12px 0; font-size:42px; line-height:0.95; color:#ffffff;">+ presentes exclusivos Momo Pet</p>
                    <p style="margin:0; font-size:16px; line-height:1.5; color:#ffffff;">
                      Indique um amigo e ganhe uma ecobag. Indique outro e leve também um boné
                      exclusivo.
                    </p>
                  </td>
                </tr>

                <!-- Passo 01 -->
                <tr>
                  <td class="px" style="padding:34px 45px 0 45px; text-align:center;">
                    <div class="freckle" style="display:inline-block; width:52px; height:52px; line-height:52px; border-radius:50%; background:#0b4122; color:#ffffff; font-size:22px;">01</div>
                    <p class="freckle" style="margin:16px 0 8px 0; font-size:28px; color:#ffffff;">Ecobag Momo Pet</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.5; color:#ffffff;">
                      Quando seu primeiro amigo realizar o cadastro, você ganha uma ecobag exclusiva
                      da Momo Pet.
                    </p>
                    <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); border-radius:12px; padding:64px 24px; color:rgba(255,255,255,0.9);">
                      <div style="font-size:28px;">👜</div>
                      <div style="margin-top:8px;">Foto: ecobag Momo Pet</div>
                    </div>
                  </td>
                </tr>

                <!-- Passo 02 -->
                <tr>
                  <td class="px" style="padding:34px 45px 0 45px; text-align:center;">
                    <div class="freckle" style="display:inline-block; width:52px; height:52px; line-height:52px; border-radius:50%; background:#0b4122; color:#ffffff; font-size:22px;">02</div>
                    <p class="freckle" style="margin:16px 0 8px 0; font-size:28px; color:#ffffff;">Boné Momo Pet</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.5; color:#ffffff;">
                      Na segunda indicação confirmada, você recebe um boné exclusivo e desbloqueia
                      novos benefícios.
                    </p>
                    <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); border-radius:12px; padding:64px 24px; color:rgba(255,255,255,0.9);">
                      <div style="font-size:28px;">🧢</div>
                      <div style="margin-top:8px;">Foto: boné Momo Pet</div>
                    </div>
                  </td>
                </tr>

                <!-- Passo 03 -->
                <tr>
                  <td class="px" style="padding:34px 45px 0 45px; text-align:center;">
                    <div class="freckle" style="display:inline-block; width:52px; height:52px; line-height:52px; border-radius:50%; background:#0b4122; color:#ffffff; font-size:22px;">03</div>
                    <p class="freckle" style="margin:16px 0 8px 0; font-size:28px; color:#ffffff;">Box Momo Pet Premium</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.5; color:#ffffff;">
                      Na terceira indicação confirmada, você ganha um Box Momo Pet Premium completo.
                    </p>
                    <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); border-radius:12px; padding:64px 24px; color:rgba(255,255,255,0.9);">
                      <div style="font-size:28px;">📦</div>
                      <div style="margin-top:8px;">Foto: Box Momo Pet Premium</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:34px 45px 56px 45px; text-align:center;">
                    <p style="margin:0; font-size:16px; line-height:1.5; color:#ffffff;">
                      O seu amigo também ganha 50% de desconto na primeira compra.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#0b4122; padding:34px 40px 48px 40px; text-align:center;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#ec5d24; color:#ffffff; border:3px solid #ffffff; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 36px; border-radius:56px;">
                ACESSAR APLICATIVO
              </a>
              <p style="margin:34px 0 16px 0;">
                <span class="freckle" style="font-size:32px; color:#ffffff;">momo</span>
                <span style="font-size:26px; color:#ec5d24; margin:0 6px;">&#10047;</span>
                <span class="freckle" style="font-size:32px; color:#ffffff;">pet</span>
              </p>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#ffffff;">
                Momo Pet · São Paulo, Brasil
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#ffffff;">
                © {{ano}} Momo Pet. Todos os direitos reservados.
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
