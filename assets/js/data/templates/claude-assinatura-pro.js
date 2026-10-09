/**
 * Template: Confirmação de assinatura — Claude (Anthropic), transacional/financeiro.
 * Reproduz o e-mail: card claro, logo, confirmação de cobrança, próxima data,
 * link de billing, CTA escuro e rodapé com help center + wordmark.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "claude-assinatura-pro",
  slug: "claude-assinatura-pro",
  name: "Confirmação de assinatura — Claude",
  description:
    "E-mail transacional de confirmação de assinatura/cobrança, com próxima data de pagamento, link de billing e CTA.",
  category: "Confirmação",
  segment: "Tecnologia",
  subject: "Thanks for starting your Pro subscription",
  preheader: "Your payment was processed. See your next charge date and billing options.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Confirmação de assinatura — Claude",
    categoria: "Financeiro",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Thanks for starting your Pro subscription",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome exibido na saudação (ex.: Smiles Davis).",
    },
    {
      key: "data_cobranca",
      label: "Data da próxima cobrança",
      description: "Próxima data de cobrança (ex.: Jan 15, 2026).",
    },
    {
      key: "url_billing",
      label: "URL — Billing settings",
      description: "Link para a página de configurações de cobrança.",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link do botão “Chat with Claude”.",
    },
    {
      key: "url_help",
      label: "URL — Help center",
      description: "Link da central de ajuda no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Your Pro subscription</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#efece5; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .serif { font-family:'Lora','Georgia','Times New Roman',serif; }
    a { color:#3a3a3a; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#efece5; font-family:'Lora','Georgia',serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#efece5;">
    Your payment was processed. See your next charge date and billing options.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#efece5;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:12px; box-shadow:0 1px 3px rgba(0,0,0,0.05); padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <!-- Logo -->
                <tr>
                  <td class="px" style="padding:40px 48px 24px 48px;">
                    <span style="vertical-align:middle;">
                      <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="vertical-align:middle;">
                        <g stroke="#cc785c" stroke-width="2" stroke-linecap="round">
                          <line x1="12" y1="3" x2="12" y2="21"/>
                          <line x1="3" y1="12" x2="21" y2="12"/>
                          <line x1="5.6" y1="5.6" x2="18.4" y2="18.4"/>
                          <line x1="18.4" y1="5.6" x2="5.6" y2="18.4"/>
                        </g>
                      </svg>
                    </span>
                    <span class="serif" style="vertical-align:middle; font-size:24px; color:#1f1f1f; margin-left:8px;">Claude</span>
                  </td>
                </tr>
                <!-- Corpo -->
                <tr>
                  <td class="px serif" style="padding:0 48px 0 48px; font-size:17px; line-height:1.65; color:#333333;">
                    <p style="margin:0 0 20px 0;">Thanks for starting your Pro subscription, {{nome_cliente}}</p>
                    <p style="margin:0 0 20px 0;">
                      Your payment method has been charged. The next charge will be on
                      <strong>{{data_cobranca}}</strong>.
                    </p>
                    <p style="margin:0 0 28px 0;">
                      You can modify your payment method or cancel your subscription anytime by visiting
                      the Claude <a href="{{url_billing}}" target="_blank" style="color:#3a3a3a; text-decoration:underline;">billing settings</a> page.
                    </p>
                  </td>
                </tr>
                <!-- Botão -->
                <tr>
                  <td class="px" style="padding:0 48px 44px 48px;">
                    <a href="{{url_botao}}" target="_blank"
                       style="display:inline-block; background-color:#141413; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:500; font-size:16px; text-decoration:none; padding:14px 24px; border-radius:10px;">
                      Chat with Claude
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Help center -->
          <tr>
            <td class="serif" style="padding:36px 24px 0 24px; text-align:center; font-size:16px; line-height:1.6; color:#5a564e;">
              For any further questions, please visit our
              <a href="{{url_help}}" target="_blank" style="color:#5a564e; text-decoration:underline;">help center</a>.
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:34px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 10px 0; font-family:'Inter',Arial,sans-serif; font-size:16px; font-weight:600; letter-spacing:1px; color:#6b665d;">ANTHROP\\C</p>
              <p style="margin:0; font-size:14px; color:#8a857b;">Claude.ai · Research · Products · Company</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
