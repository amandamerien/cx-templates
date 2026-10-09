/**
 * Template: Confirme seu e-mail — Fluento (plataforma de aulas de idiomas com tutores).
 * Marca fake. Ilustrações/ícones SVG originais inline (capelo de formatura,
 * etiqueta e balão de pesquisa), desenhados à mão. Renderiza offline, sem <img> remoto.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "fluento-confirme-email",
  slug: "fluento-confirme-email",
  name: "Confirme seu e-mail — Fluento",
  description:
    "E-mail de confirmação de cadastro com botão principal e sugestões de notificação, com ícones originais.",
  category: "Confirmação",
  segment: "Educação",
  subject: "Confirme seu e-mail na Fluento",
  preheader: "Confirme seu endereço e comece a falar com tutores e agendar aulas.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Confirme seu e-mail — Fluento",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Confirme seu e-mail na Fluento",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação do primeiro cartão." },
    { key: "url_confirmar", label: "URL — Confirmar e-mail", description: "Link do botão “Confirmar meu e-mail”." },
    { key: "url_config", label: "URL — Configurações", description: "Link do botão “Personalizar minhas configurações”." },
    { key: "email_inscrito", label: "E-mail inscrito", description: "Endereço de e-mail exibido no rodapé." },
    { key: "url_contato", label: "URL — Fale conosco", description: "Link “Fale conosco” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Confirme seu e-mail na Fluento</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f4f5f7; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#d6367f; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:26px !important; padding-right:26px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7; font-family:'Nunito',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4f5f7;">
    Confirme seu endereço e comece a falar com tutores e agendar aulas.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:30px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 22px 8px; text-align:center;">
              <span style="font-size:26px; font-weight:800; letter-spacing:-0.5px; color:#1a1a1a;">Fluento</span>
            </td>
          </tr>

          <!-- Cartão 1: confirmação -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:38px 40px 40px 40px;">
                    <h1 class="h1" style="margin:0 0 16px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#1a1a1a;">Que bom ter você, {{nome_cliente}}!</h1>
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#4a4a4a;">Sua jornada de aprendizado na Fluento está prestes a começar! Confirme seu endereço de e-mail e já comece a conversar com tutores e agendar aulas.</p>
                    <a href="{{url_confirmar}}" target="_blank" style="display:inline-block; background-color:#ff5ca0; color:#1a1a1a; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Confirmar meu e-mail</a>
                    <p style="margin:26px 0 0 0; font-size:13px; line-height:1.6; color:#8a8a8a;">Ao confirmar, você passa a receber nossas notificações sugeridas. Você pode personalizar ou cancelar quando quiser.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- espaçador -->
          <tr><td style="height:20px; line-height:20px; font-size:0;">&nbsp;</td></tr>

          <!-- Cartão 2: notificações sugeridas -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:36px 40px 10px 40px;">
                    <h2 style="margin:0; font-size:19px; font-weight:800; color:#1a1a1a;">Notificações sugeridas:</h2>
                  </td>
                </tr>

                <!-- Item 1: Aulas e aprendizado (capelo de formatura) -->
                <tr>
                  <td class="px" style="padding:18px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:64px; padding:0 0 10px 0;">
                          <div style="width:48px; height:48px; border-radius:12px; background:#ffe3ef; text-align:center;">
                            <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Capelo de formatura" style="margin-top:11px;">
                              <path d="M24 10 4 20l20 10 16-8v9" fill="none" stroke="#d6367f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 26v8c0 2.8 5.4 6 12 6s12-3.2 12-6v-8" fill="none" stroke="#d6367f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <circle cx="40" cy="31" r="2.4" fill="#d6367f"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:0 0 10px 0;">
                          <p style="margin:0 0 3px 0; font-size:15px; font-weight:700; color:#1a1a1a;">Aulas e aprendizado</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#6a6a6a;">Receba atualizações sobre suas aulas, mensagens e progresso.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Item 2: Dicas e descontos (etiqueta) -->
                <tr>
                  <td class="px" style="padding:12px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:64px; padding:0 0 10px 0;">
                          <div style="width:48px; height:48px; border-radius:12px; background:#ffe3ef; text-align:center;">
                            <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Etiqueta de desconto" style="margin-top:11px;">
                              <path d="M24 6H10a4 4 0 0 0-4 4v14l18 18 18-18z" fill="none" stroke="#d6367f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <circle cx="16" cy="16" r="3.4" fill="#d6367f"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:0 0 10px 0;">
                          <p style="margin:0 0 3px 0; font-size:15px; font-weight:700; color:#1a1a1a;">Dicas e descontos</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#6a6a6a;">Descubra dicas para aprender na Fluento e receba promoções especiais.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Item 3: Pesquisas e entrevistas (balão de pesquisa/chat) -->
                <tr>
                  <td class="px" style="padding:12px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:64px; padding:0 0 10px 0;">
                          <div style="width:48px; height:48px; border-radius:12px; background:#ffe3ef; text-align:center;">
                            <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balão de pesquisa" style="margin-top:11px;">
                              <path d="M8 10h32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H20l-10 8v-8H8a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" fill="none" stroke="#d6367f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <circle cx="17" cy="22" r="2.4" fill="#d6367f"/>
                              <circle cx="24" cy="22" r="2.4" fill="#d6367f"/>
                              <circle cx="31" cy="22" r="2.4" fill="#d6367f"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:0 0 10px 0;">
                          <p style="margin:0 0 3px 0; font-size:15px; font-weight:700; color:#1a1a1a;">Pesquisas e entrevistas</p>
                          <p style="margin:0; font-size:14px; line-height:1.55; color:#6a6a6a;">Ganhe recompensas dando feedback sobre sua experiência.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Botão configurações -->
                <tr>
                  <td class="px" style="padding:22px 40px 38px 40px;">
                    <a href="{{url_config}}" target="_blank" style="display:inline-block; background-color:#ff5ca0; color:#1a1a1a; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Personalizar minhas configurações</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:28px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 12px 0; font-size:14px; letter-spacing:5px; color:#9a9a9a;">in&nbsp;&nbsp;X&nbsp;&nbsp;◎&nbsp;&nbsp;▶</p>
              <p style="margin:0 0 10px 0; font-size:13px; color:#8a8a8a;">E-mail inscrito: {{email_inscrito}}</p>
              <p style="margin:0 0 10px 0; font-size:13px;">
                <a href="#" target="_blank" style="color:#d6367f; text-decoration:underline;">Gerenciar notificações</a>
                &nbsp;·&nbsp;
                <a href="{{url_contato}}" target="_blank" style="color:#d6367f; text-decoration:underline;">Fale conosco</a>
              </p>
              <p style="margin:0 0 12px 0; font-size:12px; color:#9a9a9a;">Copyright © 2026 Fluento Ltda., Av. Paulista, 1000, São Paulo, SP.</p>
              <p style="margin:0; font-size:12px; color:#b0b0b0;">App Store&nbsp;&nbsp;·&nbsp;&nbsp;Google Play</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
