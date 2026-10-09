/**
 * Template: Criar conta — Telaflix (serviço de streaming de filmes e séries).
 * Marca fake. E-mail transacional de criação de conta via link mágico,
 * com ícones SVG originais inline (escudo com check, círculo com barra,
 * tela/monitor) e aviso de expiração do link.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "telaflix-criar-conta",
  slug: "telaflix-criar-conta",
  name: "Criar conta — Telaflix (streaming)",
  description:
    "E-mail transacional de criação de conta via link, com benefícios em ícones originais e aviso de expiração.",
  category: "Confirmação",
  segment: "Entretenimento",
  subject: "Vamos criar sua conta na Telaflix",
  preheader: "Toque no link para criar sua conta. Ele expira em 15 minutos.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Criar conta — Telaflix",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Vamos criar sua conta na Telaflix",
  },
  variables: [
    { key: "url_criar", label: "URL — Criar conta", description: "Link do botão “Criar minha conta”." },
    { key: "url_avisar", label: "URL — Avise a gente", description: "Link “Avise a gente” para quem não pediu a conta." },
    { key: "url_ajuda", label: "URL — Central de Ajuda", description: "Link da Central de Ajuda." },
    { key: "url_config", label: "URL — Configurações de notificação", description: "Link das configurações de notificação." },
    { key: "url_termos", label: "URL — Termos de Uso", description: "Link dos Termos de Uso." },
    { key: "url_privacidade", label: "URL — Privacidade", description: "Link da política de privacidade." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Vamos criar sua conta na Telaflix</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f2f2f2; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#e50914; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f2f2f2; font-family:'Inter',Arial,Helvetica,sans-serif; color:#000000;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f2f2f2;">
    Toque no link para criar sua conta. Ele expira em 15 minutos.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f2f2;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo topo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:30px; height:30px; background:#e50914; border-radius:6px; text-align:center; vertical-align:middle;">
                <span style="display:inline-block; font-size:20px; font-weight:800; line-height:30px; color:#ffffff;">T</span>
              </span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 22px 0; font-size:34px; font-weight:800; letter-spacing:-0.5px; color:#000000;">Vamos criar sua conta</h1>
                    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.6; color:#000000;">Oi, tudo bem?</p>
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#000000;">Que bom ter você por aqui! Toque no link abaixo para criar sua conta e começar a assistir aos filmes e séries do momento. <strong>Planos a partir de R$ 20,90/mês.</strong></p>
                    <a href="{{url_criar}}" target="_blank" style="display:inline-block; background-color:#e50914; color:#ffffff; font-weight:700; font-size:16px; text-decoration:none; padding:15px 30px; border-radius:6px;">Criar minha conta</a>
                    <p style="margin:18px 0 0 0; font-size:14px; line-height:1.6; color:#555555;">Este link expira em 15 minutos.</p>
                  </td>
                </tr>

                <!-- Benefícios -->
                <tr>
                  <td class="px" style="padding:30px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <!-- Benefício 1: Sem senha (escudo com check) -->
                      <tr>
                        <td valign="top" style="width:64px; padding:14px 0;">
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Escudo com check">
                            <path d="M20 4l13 5v9c0 8.4-5.6 15.4-13 17.6C12.6 33.4 7 26.4 7 18V9l13-5z" fill="none" stroke="#333333" stroke-width="2.2" stroke-linejoin="round"/>
                            <path d="M14 19.5l4.2 4.2L27 15" fill="none" stroke="#333333" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </td>
                        <td valign="top" style="padding:14px 0;">
                          <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#000000;">Sem senha</p>
                          <p style="margin:0; font-size:15px; line-height:1.55; color:#555555;">Use este e-mail para entrar com segurança em qualquer lugar.</p>
                        </td>
                      </tr>
                      <!-- Benefício 2: Cancele quando quiser (círculo com barra) -->
                      <tr>
                        <td valign="top" style="width:64px; padding:14px 0;">
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Símbolo de cancelar">
                            <circle cx="20" cy="20" r="15" fill="none" stroke="#333333" stroke-width="2.2"/>
                            <line x1="9.5" y1="9.5" x2="30.5" y2="30.5" stroke="#333333" stroke-width="2.2" stroke-linecap="round"/>
                          </svg>
                        </td>
                        <td valign="top" style="padding:14px 0;">
                          <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#000000;">Cancele quando quiser</p>
                          <p style="margin:0; font-size:15px; line-height:1.55; color:#555555;">Altere ou cancele seu plano a qualquer momento.</p>
                        </td>
                      </tr>
                      <!-- Benefício 3: Entretenimento ilimitado (tela/monitor) -->
                      <tr>
                        <td valign="top" style="width:64px; padding:14px 0;">
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tela de monitor">
                            <rect x="5" y="7" width="30" height="20" rx="3" fill="none" stroke="#333333" stroke-width="2.2"/>
                            <path d="M17 15l6 3.5-6 3.5z" fill="#333333"/>
                            <line x1="14" y1="33" x2="26" y2="33" stroke="#333333" stroke-width="2.2" stroke-linecap="round"/>
                            <line x1="20" y1="27" x2="20" y2="33" stroke="#333333" stroke-width="2.2"/>
                          </svg>
                        </td>
                        <td valign="top" style="padding:14px 0;">
                          <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#000000;">Entretenimento ilimitado</p>
                          <p style="margin:0; font-size:15px; line-height:1.55; color:#555555;">Assista o quanto quiser, em todos os seus aparelhos, por um preço único.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:26px 40px 36px 40px;">
                    <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#555555;">Não pediu para criar uma conta na Telaflix? <a href="{{url_avisar}}" target="_blank" style="color:#e50914; text-decoration:underline;">Avise a gente</a>.</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#000000;">Time Telaflix</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Divisória -->
          <tr>
            <td style="padding:0 8px;">
              <div style="border-top:1px solid #dddddd; font-size:0; line-height:0; margin:28px 0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:0 8px; text-align:center;">
              <span style="display:inline-block; width:22px; height:22px; background:#e50914; border-radius:5px; text-align:center;">
                <span style="display:inline-block; font-size:14px; font-weight:800; line-height:22px; color:#ffffff;">T</span>
              </span>
              <p style="margin:14px 0 8px 0; font-size:14px; line-height:1.6; color:#555555;">Dúvidas? Acesse a <a href="{{url_ajuda}}" target="_blank" style="color:#e50914; text-decoration:underline;">Central de Ajuda</a>.</p>
              <p style="margin:0 0 16px 0; font-size:13px; color:#8a8a8a;">Telaflix · Av. Paulista, 1000, São Paulo, SP.</p>
              <p style="margin:0 0 6px 0; font-size:13px;"><a href="{{url_config}}" target="_blank" style="color:#555555; text-decoration:underline;">Configurações de notificação</a></p>
              <p style="margin:0 0 6px 0; font-size:13px;"><a href="{{url_termos}}" target="_blank" style="color:#555555; text-decoration:underline;">Termos de Uso</a></p>
              <p style="margin:0 0 6px 0; font-size:13px;"><a href="{{url_privacidade}}" target="_blank" style="color:#555555; text-decoration:underline;">Privacidade</a></p>
              <p style="margin:0; font-size:13px;"><a href="{{url_ajuda}}" target="_blank" style="color:#555555; text-decoration:underline;">Central de Ajuda</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
