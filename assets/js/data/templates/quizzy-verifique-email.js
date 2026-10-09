/**
 * Template: Verifique seu e-mail — Quizzy (plataforma de quizzes/aprendizado gamificado).
 * Marca fake (nunca "Kahoot"). Logo original lúdico (bloco roxo inclinado) e formas
 * geométricas de fundo desenhadas em SVG inline. Renderiza offline, sem imagem externa.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "quizzy-verifique-email",
  slug: "quizzy-verifique-email",
  name: "Verifique seu e-mail — Quizzy",
  description:
    "E-mail transacional de verificação de endereço, com logo original lúdico e aviso de expiração.",
  category: "Confirmação",
  segment: "Tecnologia",
  subject: "Verifique seu e-mail — Quizzy",
  preheader: "Use o link para confirmar seu endereço. Ele expira em 24 horas.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Verifique seu e-mail — Quizzy",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Verifique seu e-mail — Quizzy",
  },
  variables: [
    { key: "email", label: "E-mail a verificar", description: "Endereço de e-mail exibido no corpo da mensagem." },
    { key: "url_verificar", label: "URL — Verificar e-mail", description: "Link do botão “Verificar e-mail”." },
    { key: "url_termos", label: "URL — Termos e condições", description: "Link do texto “termos e condições”." },
    { key: "url_privacidade", label: "URL — Política de privacidade", description: "Link do texto “política de privacidade”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Verifique seu e-mail — Quizzy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f3f0fb; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#3b5bfe; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:26px !important; padding-right:26px !important; }
      .h1 { font-size:24px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f3f0fb; font-family:'Poppins',Arial,Helvetica,sans-serif; color:#1d1340;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f3f0fb;">
    Use o link para confirmar seu endereço. Ele expira em 24 horas.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f0fb;">
    <tr>
      <td align="center" style="padding:0;">

        <!-- Topo com formas lúdicas de fundo (SVG original) -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="position:relative; padding:0;">
              <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">
                <tr>
                  <td style="padding:0; line-height:0;">
                    <svg width="100%" height="150" viewBox="0 0 600 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Formas geométricas lúdicas">
                      <rect width="600" height="150" fill="#f3f0fb"/>
                      <circle cx="70" cy="42" r="26" fill="#d9ccfb"/>
                      <circle cx="70" cy="42" r="12" fill="#c0a8f7"/>
                      <rect x="150" y="18" width="34" height="34" rx="7" transform="rotate(18 167 35)" fill="#ffd56b"/>
                      <path d="M300 14l22 38h-44z" fill="#67e8c3"/>
                      <rect x="430" y="24" width="30" height="30" rx="7" transform="rotate(-12 445 39)" fill="#8fb0ff"/>
                      <circle cx="540" cy="46" r="20" fill="#f7a8c4"/>
                      <path d="M508 104l18 30h-36z" fill="#ffd56b"/>
                      <circle cx="120" cy="116" r="16" fill="#8fb0ff"/>
                      <rect x="250" y="100" width="26" height="26" rx="6" transform="rotate(24 263 113)" fill="#67e8c3"/>
                      <circle cx="380" cy="120" r="10" fill="#f7a8c4"/>
                    </svg>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo Quizzy! (bloco roxo inclinado) -->
          <tr>
            <td align="center" style="padding:0 16px 22px 16px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#5a28d6; border-radius:14px; padding:12px 22px; transform:rotate(-4deg); box-shadow:0 8px 20px rgba(90,40,214,0.28);">
                    <span style="display:inline-block; font-size:26px; font-weight:800; letter-spacing:-0.5px; color:#ffffff;">Quizzy!</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Cartão branco central -->
          <tr>
            <td style="padding:0 16px 0 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:18px; box-shadow:0 10px 30px rgba(29,19,64,0.08);">
                <tr>
                  <td class="px" style="padding:40px 44px 36px 44px;">
                    <h1 class="h1" style="margin:0 0 20px 0; font-size:26px; font-weight:800; letter-spacing:-0.5px; line-height:1.3; color:#1d1340;">Verifique seu e-mail para continuar usando o Quizzy</h1>

                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#4a4165;">Recebemos um pedido para verificar <strong style="color:#1d1340;">{{email}}</strong> como endereço de e-mail vinculado à sua conta Quizzy.</p>

                    <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#4a4165;">Se você quiser verificar este endereço, use o link a seguir.</p>

                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px 0;">
                      <tr>
                        <td style="border-radius:40px; background-color:#3b5bfe;">
                          <a href="{{url_verificar}}" target="_blank" style="display:inline-block; background-color:#3b5bfe; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 34px; border-radius:40px;">Verificar e-mail</a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:0 0 28px 0; font-size:15px; line-height:1.6; color:#4a4165;">Se você não solicitou esta verificação, ignore esta mensagem. O link expira em 24 horas.</p>

                    <p style="margin:0; font-size:15px; line-height:1.6; color:#4a4165;">Tudo de bom,<br><strong style="color:#1d1340;">Time Quizzy</strong></p>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:0 44px 36px 44px;">
                    <p style="margin:0; padding-top:22px; border-top:1px solid #ece7f8; font-size:12px; line-height:1.6; color:#8b83a3;">Os <a href="{{url_termos}}" target="_blank" style="color:#3b5bfe; text-decoration:underline;">termos e condições</a> e a <a href="{{url_privacidade}}" target="_blank" style="color:#3b5bfe; text-decoration:underline;">política de privacidade</a> se aplicam ao uso dos serviços do Quizzy.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td align="center" style="padding:30px 16px 40px 16px; text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 12px auto;">
                <tr>
                  <td style="background-color:#5a28d6; border-radius:9px; padding:7px 13px; transform:rotate(-4deg);">
                    <span style="display:inline-block; font-size:15px; font-weight:800; letter-spacing:-0.3px; color:#ffffff;">Quizzy!</span>
                  </td>
                </tr>
              </table>
              <p style="margin:0; font-size:12px; color:#8b83a3;">Endereço: Av. Paulista, 1000, São Paulo, SP.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
