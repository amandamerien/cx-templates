/**
 * Template: Boas-vindas — Slydo (onboarding de produto, azul).
 * Marca fake (design de referência "Gamma"). Logo, boas-vindas, lista de
 * recursos com links, CTA azul, assinatura do time, P.S. e rodapé social.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "gamma-boas-vindas",
  slug: "gamma-boas-vindas",
  name: "Boas-vindas — Slydo (onboarding)",
  description:
    "E-mail de boas-vindas de produto com proposta de valor, lista de recursos com links, CTA e rodapé com redes sociais.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Boas-vindas à Slydo",
  preheader: "Um jeito novo e revolucionário de apresentar ideias com IA.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Slydo",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à Slydo",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome exibido na saudação (ex.: Ana).",
    },
    {
      key: "url_site",
      label: "URL do produto",
      description: "Link usado em “Slydo” e nos recursos do texto.",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link do botão “Começar na Slydo”.",
    },
    {
      key: "url_help",
      label: "URL — Central de ajuda",
      description: "Link da central de ajuda no P.S.",
    },
    {
      key: "url_suporte",
      label: "URL — Suporte",
      description: "Link do time de suporte no P.S.",
    },
    {
      key: "url_unsubscribe",
      label: "URL — Cancelar inscrição",
      description: "Link de cancelamento no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Slydo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#edf1fc; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#2b6ef2; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .logo { font-size:40px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#edf1fc; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#edf1fc;">
    Um jeito novo e revolucionário de apresentar ideias com IA.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#edf1fc;">
    <tr>
      <td align="center" style="padding:36px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:8px 0 28px 0; text-align:center;">
              <span class="logo" style="font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:46px; letter-spacing:4px; color:#2b6ef2;">SLYDO</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:6px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 48px 44px 48px; font-size:16px; line-height:1.6; color:#333333;">
                    <p style="margin:0 0 24px 0;">Olá, {{nome_cliente}},</p>
                    <p style="margin:0 0 20px 0;">
                      Boas-vindas à <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; font-weight:700; text-decoration:underline;">Slydo</a>,
                      um jeito novo e revolucionário de apresentar ideias com inteligência artificial.
                    </p>
                    <p style="margin:0 0 20px 0;">
                      Por anos, pessoas como você usaram ferramentas de apresentação como PowerPoint e
                      Google Slides, que são lentas, frustrantes e pouco flexíveis.
                    </p>
                    <p style="margin:0 0 20px 0;">Agora existe um jeito melhor. Com a Slydo, você pode:</p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px 0;">
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">Usar IA para <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">criar apresentações</a> na metade do tempo.</td></tr>
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">Gerar <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">temas personalizados</a> com a cara da sua marca.</td></tr>
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">✦ Turbinar suas ideias com <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">edição por IA</a>.</td></tr>
                      <tr><td style="padding:3px 0; font-size:16px; line-height:1.6; color:#333333;">Facilmente <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">apresentar</a> ou <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">exportar</a> suas apresentações.</td></tr>
                    </table>

                    <p style="margin:0 0 24px 0;">
                      Nos próximos sete dias, vamos mostrar como aproveitar a Slydo ao máximo,
                      compartilhando alguns dos nossos recursos e casos de uso favoritos.
                    </p>

                    <p style="margin:0 0 24px 0;">
                      <a href="{{url_botao}}" target="_blank"
                         style="display:inline-block; background-color:#2b6ef2; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:13px 24px; border-radius:999px;">
                        Começar na Slydo
                      </a>
                    </p>

                    <p style="margin:0 0 4px 0;">Até breve,</p>
                    <p style="margin:0 0 24px 0;">Time Slydo</p>

                    <p style="margin:0; font-size:15px; line-height:1.6; color:#555555;">
                      P.S. Dê uma olhada no nosso <a href="{{url_site}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">YouTube</a>
                      e na <a href="{{url_help}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">Central de Ajuda</a>
                      para mais recursos. Se precisar de ajuda, fale com o nosso
                      <a href="{{url_suporte}}" target="_blank" style="color:#2b6ef2; text-decoration:underline;">time de suporte</a> quando quiser.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:32px 24px 8px 24px; text-align:center;">
              <p style="margin:0 0 14px 0; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:34px; color:#2b6ef2;">S</p>
              <p style="margin:0 0 8px 0; font-size:14px; font-weight:600; color:#333333;">Siga a gente</p>
              <p style="margin:0 0 16px 0; font-size:13px; color:#6b7280;">
                <a href="#" style="color:#6b7280; text-decoration:underline;">X</a> &nbsp;|&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:underline;">LinkedIn</a> &nbsp;|&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:underline;">Instagram</a><br>
                <a href="#" style="color:#6b7280; text-decoration:underline;">TikTok</a> &nbsp;|&nbsp;
                <a href="#" style="color:#6b7280; text-decoration:underline;">YouTube</a>
              </p>
              <p style="margin:0 0 4px 0; font-size:13px; color:#8a8f98;">© 2025 Slydo Tech. Todos os direitos reservados.</p>
              <p style="margin:0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8f98; text-decoration:underline;">Cancelar inscrição destes e-mails</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
