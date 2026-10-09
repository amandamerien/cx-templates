/**
 * Template: Redefinir senha — Lumo (app de produtividade).
 * Marca fake. E-mail transacional de redefinição de senha com ícone SVG
 * original (cadeado) inline e aviso de expiração do link.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "lumo-redefinir-senha",
  slug: "lumo-redefinir-senha",
  name: "Redefinir senha — Lumo",
  description:
    "E-mail transacional de redefinição de senha com ícone original e aviso de expiração.",
  category: "Confirmação",
  segment: "Tecnologia",
  subject: "Redefina sua senha do Lumo",
  preheader: "Link válido por 30 minutos.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Redefinir senha — Lumo",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Redefina sua senha do Lumo",
  },
  variables: [
    { key: "url_redefinir", label: "URL — Redefinir senha", description: "Link do botão “Redefinir senha”." },
    { key: "minutos", label: "Minutos até expirar", description: "Tempo de validade do link, em minutos (ex.: 30)." },
    { key: "url_ajuda", label: "URL — Central de ajuda", description: "Link “central de ajuda” para dúvidas." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Redefina sua senha do Lumo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef0f5; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#4b4ddb; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef0f5; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1d2b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef0f5;">
    Link válido por 30 minutos.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f5;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#4b4ddb; border-radius:7px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1a1d2b; margin-left:8px; vertical-align:middle;">Lumo</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Ícone cadeado (SVG original inline) -->
                <tr>
                  <td class="px" style="padding:44px 40px 0 40px; text-align:center;">
                    <span style="display:inline-block; width:72px; height:72px; background:#ececfb; border-radius:50%; text-align:center; line-height:72px;">
                      <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de cadeado" style="vertical-align:middle;">
                        <path d="M10 15v-3a7 7 0 0 1 14 0v3" fill="none" stroke="#4b4ddb" stroke-width="2.6" stroke-linecap="round"/>
                        <rect x="7" y="15" width="20" height="14" rx="4" fill="#4b4ddb"/>
                        <circle cx="17" cy="21" r="2.6" fill="#ffffff"/>
                        <rect x="15.7" y="22.6" width="2.6" height="4.4" rx="1.3" fill="#ffffff"/>
                      </svg>
                    </span>
                  </td>
                </tr>

                <!-- Conteúdo -->
                <tr>
                  <td class="px" style="padding:24px 40px 0 40px; text-align:center;">
                    <h1 class="h1" style="margin:0 0 16px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#1a1d2b;">Redefinir sua senha</h1>
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#444a5e;">Recebemos um pedido para redefinir a senha da sua conta Lumo.</p>
                    <a href="{{url_redefinir}}" target="_blank" style="display:inline-block; background-color:#4b4ddb; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 32px; border-radius:40px;">Redefinir senha</a>
                    <p style="margin:26px 0 0 0; font-size:14px; line-height:1.6; color:#6b7180;">Este link expira em {{minutos}} minutos e só pode ser usado uma vez.</p>
                  </td>
                </tr>

                <!-- Divisor -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px;">
                    <div style="border-top:1px solid #e7e9f0; font-size:0; line-height:0;">&nbsp;</div>
                  </td>
                </tr>

                <!-- Aviso de segurança -->
                <tr>
                  <td class="px" style="padding:22px 40px 40px 40px;">
                    <p style="margin:0; font-size:14px; line-height:1.6; color:#6b7180;">Se você não fez este pedido, ignore este e-mail — sua conta continua segura. Dúvidas? Veja a <a href="{{url_ajuda}}" target="_blank" style="color:#4b4ddb; text-decoration:underline;">central de ajuda</a>.</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#9095a3;">Lumo Software Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
