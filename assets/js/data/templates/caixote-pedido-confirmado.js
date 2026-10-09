/**
 * Template: Pedido confirmado — Caixote (marketplace).
 * Marca fake "Caixote". E-mail transacional de confirmação de pedido.
 * Ícone/ilustração SVG original (caixa/pacote) inline, sem <img> remota.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "caixote-pedido-confirmado",
  slug: "caixote-pedido-confirmado",
  name: "Pedido confirmado — Caixote",
  description:
    "E-mail transacional de confirmação de pedido com resumo, ícone original e rastreio.",
  category: "Confirmação",
  segment: "E-commerce",
  subject: "Pedido confirmado",
  preheader: "Já estamos preparando tudo para o envio.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Pedido confirmado — Caixote",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Pedido confirmado",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Primeiro nome de quem fez o pedido." },
    { key: "numero_pedido", label: "Número do pedido", description: "Identificador do pedido (ex.: 10482)." },
    { key: "produto_nome", label: "Nome do produto", description: "Nome do item comprado." },
    { key: "valor_total", label: "Valor total", description: "Total do pedido (ex.: R$ 149,90)." },
    { key: "url_rastrear", label: "URL — Acompanhar pedido", description: "Link do botão “Acompanhar pedido”." },
    { key: "url_ajuda", label: "URL — Ajuda", description: "Link “fale com a gente” para dúvidas sobre o pedido." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Pedido confirmado</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f4f1ec; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#c25a1c; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f1ec; font-family:'Inter',Arial,Helvetica,sans-serif; color:#231b12;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4f1ec;">
    Já estamos preparando tudo para o envio.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1ec;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#c25a1c; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#8a3d12; margin-left:8px; vertical-align:middle;">Caixote</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Topo com ícone original (caixa/pacote) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#fbf0e6; padding:36px 24px; text-align:center;">
                    <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Caixa de pedido confirmado">
                      <!-- base circular -->
                      <circle cx="70" cy="70" r="64" fill="#ffffff"/>
                      <circle cx="70" cy="70" r="64" fill="none" stroke="#f0d8c3" stroke-width="2"/>
                      <!-- face lateral esquerda da caixa -->
                      <path d="M38 62l32 16v34l-32-16z" fill="#d9772f"/>
                      <!-- face lateral direita da caixa -->
                      <path d="M102 62l-32 16v34l32-16z" fill="#c25a1c"/>
                      <!-- tampa superior da caixa -->
                      <path d="M70 46l32 16-32 16-32-16z" fill="#efa766"/>
                      <!-- vinco da fita central -->
                      <path d="M70 78v34" stroke="#8a3d12" stroke-width="2" opacity="0.35" fill="none"/>
                      <path d="M54 54l32 16" stroke="#8a3d12" stroke-width="2" opacity="0.25" fill="none"/>
                      <!-- selo de confirmação -->
                      <circle cx="102" cy="48" r="16" fill="#2f9e5e"/>
                      <path d="M95 48l5 5 9-10" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px; text-align:center;">
                    <h1 class="h1" style="margin:0 0 14px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#231b12;">Oi, {{nome_cliente}}, recebemos seu pedido!</h1>
                    <p style="margin:0; font-size:16px; line-height:1.6; color:#5a4b3c;">Já estamos preparando tudo para o envio. Você pode acompanhar cada etapa por aqui.</p>
                  </td>
                </tr>

                <!-- Cartão de resumo -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fbf7f1; border:1px solid #f0e4d6; border-radius:14px;">
                      <tr>
                        <td style="padding:20px 22px 12px 22px; border-bottom:1px solid #f0e4d6;">
                          <p style="margin:0; font-size:13px; font-weight:600; letter-spacing:0.4px; text-transform:uppercase; color:#9a8064;">Pedido #{{numero_pedido}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 22px 4px 22px;">
                          <p style="margin:0; font-size:16px; font-weight:600; line-height:1.5; color:#231b12;">{{produto_nome}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 22px 20px 22px;">
                          <p style="margin:0; font-size:15px; line-height:1.5; color:#5a4b3c;">Total: <span style="font-weight:700; color:#231b12;">{{valor_total}}</span></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Botão -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px; text-align:center;">
                    <a href="{{url_rastrear}}" target="_blank" style="display:inline-block; background-color:#c25a1c; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 32px; border-radius:40px;">Acompanhar pedido</a>
                  </td>
                </tr>

                <!-- Ajuda -->
                <tr>
                  <td class="px" style="padding:26px 40px 36px 40px; text-align:center;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#5a4b3c;">Dúvidas sobre o pedido? <a href="{{url_ajuda}}" target="_blank" style="color:#c25a1c; text-decoration:underline; font-weight:600;">fale com a gente</a>.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#9a8064;">Caixote Marketplace Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
