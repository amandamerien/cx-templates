/**
 * Template: Onboarding — Coinly (corretora de criptomoedas).
 * Marca fake (design de referência "Coinbase"). Ilustração SVG original (moeda
 * com gráfico de alta), 3 passos para configurar a conta e avisos.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "coinly-comece-agora",
  slug: "coinly-comece-agora",
  name: "Comece agora — Coinly (cripto)",
  description:
    "E-mail de onboarding de corretora com ilustração original, 3 passos para configurar a conta e CTA azul.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "3 passos para configurar sua conta na Coinly",
  preheader: "Verifique sua identidade, adicione um método e faça seu primeiro aporte.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Comece agora — Coinly",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "3 passos para configurar sua conta na Coinly",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome na saudação (ex.: Ana)." },
    { key: "url_configurar", label: "URL — Configurar", description: "Link do botão “Configurar minha conta”." },
    { key: "url_ajuda", label: "URL — Ajuda", description: "Link da central de ajuda no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>3 passos para configurar sua conta — Coinly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef1f6; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#2f5bff; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef1f6; font-family:'Inter',Arial,Helvetica,sans-serif; color:#0a1f44;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef1f6;">
    Verifique sua identidade, adicione um método e faça seu primeiro aporte.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef1f6;">
    <tr>
      <td align="center" style="padding:24px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:14px;">

          <!-- Header -->
          <tr>
            <td class="px" style="padding:24px 36px; text-align:center;">
              <span style="display:inline-block; width:22px; height:22px; border-radius:50%; background:#2f5bff; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#0a1f44; margin-left:8px; vertical-align:middle;">Coinly</span>
            </td>
          </tr>

          <!-- Hero azul com ilustração SVG original -->
          <tr>
            <td style="background-color:#2f5bff; padding:40px 36px; text-align:center; border-radius:0;">
              <svg width="150" height="130" viewBox="0 0 150 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moeda com gráfico de alta">
                <circle cx="56" cy="62" r="42" fill="#ffffff"/>
                <circle cx="56" cy="62" r="42" fill="none" stroke="#dbe4ff" stroke-width="3"/>
                <path d="M56 40v44M47 49h14a7 7 0 0 1 0 14H49a7 7 0 0 0 0 14h14" fill="none" stroke="#2f5bff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M92 96l16-18 12 10 22-30" fill="none" stroke="#9ffbd0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M134 58l8 0 0 8" fill="none" stroke="#9ffbd0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="92" cy="96" r="5" fill="#9ffbd0"/>
              </svg>
              <h1 class="h1" style="margin:22px 0 8px 0; font-size:28px; font-weight:800; color:#ffffff;">Bem-vindo à Coinly</h1>
              <p style="margin:0; font-size:15px; line-height:1.6; color:#d4deff;">Faltam só 3 passos para você começar a investir.</p>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:34px 36px 0 36px;">
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.7; color:#3a4a6b;">Oi, {{nome_cliente}}! Sua conta foi criada. Complete a configuração para comprar, vender e acompanhar suas criptomoedas com segurança.</p>
            </td>
          </tr>

          <!-- Passos -->
          <tr>
            <td class="px" style="padding:0 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" style="width:44px; padding:0 0 22px 0;"><span style="display:inline-block; width:30px; height:30px; border-radius:50%; background:#eaf0ff; color:#2f5bff; text-align:center; line-height:30px; font-size:14px; font-weight:700;">1</span></td>
                  <td valign="top" style="padding:0 0 22px 6px;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#0a1f44;">Verifique sua identidade</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#55607a;">Confirme seus dados e envie um documento. Leva poucos minutos e protege sua conta.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:44px; padding:0 0 22px 0;"><span style="display:inline-block; width:30px; height:30px; border-radius:50%; background:#eaf0ff; color:#2f5bff; text-align:center; line-height:30px; font-size:14px; font-weight:700;">2</span></td>
                  <td valign="top" style="padding:0 0 22px 6px;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#0a1f44;">Adicione um método de pagamento</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#55607a;">Conecte um Pix ou cartão para depositar e sacar quando quiser.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:44px;"><span style="display:inline-block; width:30px; height:30px; border-radius:50%; background:#eaf0ff; color:#2f5bff; text-align:center; line-height:30px; font-size:14px; font-weight:700;">3</span></td>
                  <td valign="top" style="padding-left:6px;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#0a1f44;">Faça seu primeiro aporte</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#55607a;">Comece com qualquer valor e acompanhe tudo pelo app.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="px" style="padding:32px 36px 36px 36px;">
              <a href="{{url_configurar}}" target="_blank" style="display:block; background-color:#2f5bff; color:#ffffff; font-weight:700; font-size:16px; text-align:center; text-decoration:none; padding:16px; border-radius:10px;">Configurar minha conta</a>
            </td>
          </tr>

          <!-- Aviso -->
          <tr>
            <td class="px" style="padding:0 36px 36px 36px;">
              <div style="border-top:1px solid #eef1f6; padding-top:20px;">
                <p style="margin:0; font-size:13px; line-height:1.7; color:#8a93a8; text-align:center;">Investir em criptomoedas envolve riscos. O valor dos ativos pode variar para cima ou para baixo. Invista com consciência.</p>
              </div>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:24px 36px; background-color:#f6f8fc; border-radius:0 0 14px 14px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:13px;"><a href="{{url_ajuda}}" target="_blank" style="color:#0a1f44; text-decoration:underline;">Central de ajuda</a> &nbsp;·&nbsp; <a href="{{url_unsubscribe}}" target="_blank" style="color:#0a1f44; text-decoration:underline;">Cancelar inscrição</a></p>
              <p style="margin:0; font-size:12px; color:#9aa3b8;">Coinly Ativos Digitais Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
