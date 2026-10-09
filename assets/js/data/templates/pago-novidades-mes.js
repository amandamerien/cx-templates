/**
 * Template: Novidades do mês — Pagô (fintech de pagamentos).
 * Marca fake. Newsletter mensal com três novidades e ícones SVG originais
 * inline (cartão, gráfico e Pix), sem imagens remotas.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "pago-novidades-mes",
  slug: "pago-novidades-mes",
  name: "Novidades do mês — Pagô",
  description:
    "Newsletter mensal de uma fintech com três novidades e ícones originais.",
  category: "Newsletter",
  segment: "Finanças",
  subject: "O que mudou no Pagô este mês",
  preheader: "Novidades, melhorias e dicas para cuidar do seu dinheiro.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Novidades do mês — Pagô",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "O que mudou no Pagô este mês",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Primeiro nome de quem recebe o e-mail." },
    { key: "url_novidade1", label: "URL — Pix agendado", description: "Link “Saiba mais” da novidade Pix agendado." },
    { key: "url_novidade2", label: "URL — Cartão virtual", description: "Link “Saiba mais” da novidade Cartão virtual na hora." },
    { key: "url_novidade3", label: "URL — Relatório de gastos", description: "Link “Saiba mais” da novidade Relatório de gastos." },
    { key: "url_app", label: "Abrir o app", description: "Link do botão “Abrir o app”." },
    { key: "url_preferencias", label: "Preferências", description: "Link “Preferências” no rodapé." },
    { key: "url_unsubscribe", label: "Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>O que mudou no Pagô este mês</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#e9efe9; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#0e8a56; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
      .icon-cell { padding-bottom:12px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#e9efe9; font-family:'Inter',Arial,Helvetica,sans-serif; color:#0f1f18;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#e9efe9;">
    Novidades, melhorias e dicas para cuidar do seu dinheiro.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e9efe9;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#0b3a2a; border-radius:7px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#0b3a2a; margin-left:8px; vertical-align:middle;">Pagô</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Cabeçalho -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0b3a2a; padding:30px 40px;">
                    <p style="margin:0 0 6px 0; font-size:13px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:#8fe6b7;">Novidades do mês</p>
                    <h1 class="h1" style="margin:0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#ffffff;">O que mudou no Pagô este mês</h1>
                  </td>
                </tr>
              </table>

              <!-- Intro -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:32px 40px 8px 40px;">
                    <p style="margin:0; font-size:17px; line-height:1.6; color:#2d3f36;">Oi, {{nome_cliente}}! Veja o resumo do mês no Pagô:</p>
                  </td>
                </tr>
              </table>

              <!-- Novidade 1: Pix agendado (ícone: Pix) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:22px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="icon-cell" valign="top" style="width:76px; padding:4px 0;">
                          <div style="width:56px; height:56px; border-radius:14px; background:#e4f7ec; text-align:center; line-height:56px;">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone Pix" style="vertical-align:middle;">
                              <path d="M12 2.6l3.1 3.1a2.6 2.6 0 0 1-3.68 0L12 2.6zM5.7 8.9l2.52-2.52a2.6 2.6 0 0 1 3.68 0L14.9 9.4a1.5 1.5 0 0 0 2.12 0l1.18-1.18 1.2 1.2a2.6 2.6 0 0 1 0 3.68l-1.2 1.2-1.18-1.18a1.5 1.5 0 0 0-2.12 0l-3 3a2.6 2.6 0 0 1-3.68 0L5.7 15.1a2.6 2.6 0 0 1 0-3.68L5.7 8.9zM3.5 8.98L2.6 9.9a2.6 2.6 0 0 0 0 3.68l.9.92a1 1 0 0 0 0-.05V9.03a1 1 0 0 0 0-.05zM12 21.4l-3.1-3.1a2.6 2.6 0 0 1 3.68 0L12 21.4z" fill="#0b8a52"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:4px 0;">
                          <p style="margin:0 0 4px 0; font-size:17px; font-weight:700; color:#0f1f18;">Pix agendado</p>
                          <p style="margin:0 0 8px 0; font-size:15px; line-height:1.55; color:#2d3f36;">Programe seus Pix para a data certa.</p>
                          <a href="{{url_novidade1}}" target="_blank" style="font-size:14px; font-weight:600; color:#0e8a56; text-decoration:none;">Saiba mais &rarr;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td class="px" style="padding:22px 40px 0 40px;"><div style="height:1px; background:#e6ede8; line-height:1px; font-size:1px;">&nbsp;</div></td></tr>
              </table>

              <!-- Novidade 2: Cartão virtual na hora (ícone: cartão) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:22px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="icon-cell" valign="top" style="width:76px; padding:4px 0;">
                          <div style="width:56px; height:56px; border-radius:14px; background:#e4f7ec; text-align:center; line-height:56px;">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de cartão" style="vertical-align:middle;">
                              <rect x="2" y="5" width="20" height="14" rx="3" fill="#0b8a52"/>
                              <rect x="2" y="8.5" width="20" height="3" fill="#0b3a2a"/>
                              <rect x="5" y="14.5" width="7" height="2" rx="1" fill="#8fe6b7"/>
                              <rect x="15" y="14.5" width="4" height="2" rx="1" fill="#8fe6b7"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:4px 0;">
                          <p style="margin:0 0 4px 0; font-size:17px; font-weight:700; color:#0f1f18;">Cartão virtual na hora</p>
                          <p style="margin:0 0 8px 0; font-size:15px; line-height:1.55; color:#2d3f36;">Crie um cartão para compras on-line em segundos.</p>
                          <a href="{{url_novidade2}}" target="_blank" style="font-size:14px; font-weight:600; color:#0e8a56; text-decoration:none;">Saiba mais &rarr;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td class="px" style="padding:22px 40px 0 40px;"><div style="height:1px; background:#e6ede8; line-height:1px; font-size:1px;">&nbsp;</div></td></tr>
              </table>

              <!-- Novidade 3: Relatório de gastos (ícone: gráfico) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:22px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="icon-cell" valign="top" style="width:76px; padding:4px 0;">
                          <div style="width:56px; height:56px; border-radius:14px; background:#e4f7ec; text-align:center; line-height:56px;">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de gráfico" style="vertical-align:middle;">
                              <rect x="3" y="12" width="4" height="8" rx="1.5" fill="#0b3a2a"/>
                              <rect x="10" y="7" width="4" height="13" rx="1.5" fill="#0b8a52"/>
                              <rect x="17" y="4" width="4" height="16" rx="1.5" fill="#8fe6b7"/>
                            </svg>
                          </div>
                        </td>
                        <td valign="top" style="padding:4px 0;">
                          <p style="margin:0 0 4px 0; font-size:17px; font-weight:700; color:#0f1f18;">Relatório de gastos</p>
                          <p style="margin:0 0 8px 0; font-size:15px; line-height:1.55; color:#2d3f36;">Veja para onde seu dinheiro foi, por categoria.</p>
                          <a href="{{url_novidade3}}" target="_blank" style="font-size:14px; font-weight:600; color:#0e8a56; text-decoration:none;">Saiba mais &rarr;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Botão -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:30px 40px 40px 40px;" align="center">
                    <a href="{{url_app}}" target="_blank" style="display:inline-block; background-color:#0b3a2a; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 40px; border-radius:40px;">Abrir o app</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:13px;">
                <a href="{{url_preferencias}}" target="_blank" style="color:#0e8a56; text-decoration:underline;">Preferências</a>
                <span style="color:#9aa8a0;">&nbsp;·&nbsp;</span>
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#0e8a56; text-decoration:underline;">Cancelar inscrição</a>
              </p>
              <p style="margin:0; font-size:12px; line-height:1.6; color:#8a988f;">Pagô Instituição de Pagamento Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
