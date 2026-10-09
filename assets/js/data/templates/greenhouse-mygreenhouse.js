/**
 * Template: Boas-vindas — MyTalently (onboarding de produto, estilo clean).
 * Reproduz o layout do e-mail de boas-vindas: logo, hero, lista de benefícios
 * com destaque, botão e rodapé com link de preferências. Hero como placeholder.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "greenhouse-mygreenhouse",
  slug: "greenhouse-mygreenhouse",
  name: "Boas-vindas — MyTalently",
  description:
    "E-mail de boas-vindas/onboarding minimalista, com hero, lista de benefícios em destaque, CTA e rodapé com preferências.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "MyTalently: seu novo lar para encontrar vagas",
  preheader:
    "Descubra vagas, candidate-se mais rápido e acompanhe seu progresso — tudo em um só lugar.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — MyTalently",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "MyTalently: seu novo lar para encontrar vagas",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do destinatário",
      description: "Nome exibido na saudação (ex.: Olá, Ana).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Começar minha busca”.",
    },
    {
      key: "url_preferencias",
      label: "URL de preferências",
      description: "Link de “Atualizar preferências de e-mail” no rodapé.",
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
  <title>Boas-vindas ao MyTalently</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f1f3f0; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .logo { font-family:'Poppins','Segoe UI',Arial,sans-serif; font-weight:600; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    a { color:#2f6fe0; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f1f3f0; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f1f3f0;">
    Descubra vagas, candidate-se mais rápido e acompanhe seu progresso — tudo em um só lugar.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f3f0;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:24px 0 28px 0; text-align:center;">
              <span class="logo" style="font-size:34px; color:#2e9c66; letter-spacing:-0.5px;">talently</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border:1px solid #e7eae4; border-radius:12px; padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Hero -->
                <tr>
                  <td style="padding:16px 16px 0 16px; line-height:0;">
                    <div class="ph" style="border-radius:10px; background:linear-gradient(135deg,#dfeee6,#eef1ea); padding:96px 24px; color:#6c7a70;">
                      <div style="font-size:28px;">🖼️</div>
                      <div style="margin-top:8px;">Imagem: destaque de recursos (hero)</div>
                    </div>
                  </td>
                </tr>

                <!-- Conteúdo -->
                <tr>
                  <td class="px" style="padding:28px 40px 8px 40px;">
                    <p style="margin:0 0 20px 0; font-size:17px; line-height:1.6; color:#333333;">Olá, {{nome_cliente}}</p>
                    <p style="margin:0 0 22px 0; font-size:17px; line-height:1.6; color:#333333;">
                      O MyTalently é o seu novo lar para encontrar vagas e acompanhar candidaturas —
                      para você conquistar o próximo emprego com menos estresse.
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 6px 0;">
                      <tr>
                        <td valign="top" style="padding:0 10px 14px 4px; font-size:17px; line-height:1.5; color:#333333; width:18px;">•</td>
                        <td valign="top" style="padding:0 0 14px 0; font-size:17px; line-height:1.5; color:#333333;">
                          <strong>Descubra vagas</strong> que combinam com você, como salário, meio período ou 100% remoto.
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:0 10px 14px 4px; font-size:17px; line-height:1.5; color:#333333;">•</td>
                        <td valign="top" style="padding:0 0 14px 0; font-size:17px; line-height:1.5; color:#333333;">
                          <strong>Candidate-se mais rápido</strong> com login sem senha e candidaturas preenchidas automaticamente.
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:0 10px 14px 4px; font-size:17px; line-height:1.5; color:#333333;">•</td>
                        <td valign="top" style="padding:0 0 14px 0; font-size:17px; line-height:1.5; color:#333333;">
                          <strong>Seja notado</strong> marcando vagas como Vaga dos Sonhos.
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:0 10px 0 4px; font-size:17px; line-height:1.5; color:#333333;">•</td>
                        <td valign="top" style="padding:0; font-size:17px; line-height:1.5; color:#333333;">
                          <strong>Acompanhe seu progresso</strong> vendo todas as atualizações das suas candidaturas em um só lugar.
                        </td>
                      </tr>
                    </table>

                    <p style="margin:22px 0 0 0; font-size:17px; line-height:1.6; color:#333333;">
                      Sua próxima vaga pode estar a uma busca de distância.
                    </p>
                  </td>
                </tr>

                <!-- Botão -->
                <tr>
                  <td align="center" style="padding:26px 40px 40px 40px;">
                    <a href="{{url_botao}}" target="_blank"
                       style="display:inline-block; background-color:#2f6fe0; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:600; font-size:16px; text-decoration:none; padding:14px 26px; border-radius:6px;">
                      Começar minha busca
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:24px 24px 8px 24px; text-align:center;">
              <p style="margin:0 0 14px 0; font-size:14px;">
                <a href="{{url_preferencias}}" target="_blank" style="color:#2f6fe0; text-decoration:underline;">Atualizar preferências de e-mail</a>
              </p>
              <p style="margin:0; font-size:13px; line-height:1.5; color:#8a8f98;">
                © {{ano}} Talently&nbsp;&nbsp;•&nbsp;&nbsp;Av. Paulista, 1000 · São Paulo, SP
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
