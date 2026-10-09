/**
 * Template: Carrinho abandonado — Garimpo (marca fake, e-commerce de achados).
 * E-mail de recuperação de carrinho com ilustração SVG original (carrinho de
 * compras) inline, sem imagens remotas, e CTA de retorno ao carrinho.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "garimpo-carrinho-abandonado",
  slug: "garimpo-carrinho-abandonado",
  name: "Carrinho abandonado — Garimpo",
  description:
    "E-mail de recuperação de carrinho com ilustração original e CTA de retorno.",
  category: "Reativação",
  segment: "E-commerce",
  subject: "Você esqueceu algo no carrinho",
  preheader: "Seus itens ainda estão te esperando.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Carrinho abandonado — Garimpo",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Você esqueceu algo no carrinho",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Primeiro nome de quem recebe o e-mail." },
    { key: "produto_nome", label: "Produto do carrinho", description: "Nome do produto em destaque (ex.: Tênis Garimpo Urban)." },
    { key: "url_carrinho", label: "URL — Voltar ao carrinho", description: "Link do botão “Voltar ao carrinho”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Você esqueceu algo no carrinho</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f3efe8; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#b4531f; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f3efe8; font-family:'Inter',Arial,Helvetica,sans-serif; color:#221a12;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f3efe8;">
    Seus itens ainda estão te esperando.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3efe8;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#8a3a12; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#8a3a12; margin-left:8px; vertical-align:middle;">Garimpo</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero com ilustração original (carrinho de compras) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#8a3a12; padding:30px 24px; text-align:center;">
                    <svg width="100%" height="180" viewBox="0 0 440 180" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carrinho de compras com itens">
                      <!-- piso / sombra -->
                      <ellipse cx="220" cy="156" rx="150" ry="10" fill="#6e2d0d"/>
                      <!-- cesto do carrinho -->
                      <path d="M150 64h170l-20 62H176z" fill="#ffffff"/>
                      <path d="M150 64h170l-6 18H156z" fill="#f0c66f"/>
                      <!-- grades verticais do cesto -->
                      <path d="M196 70v50M226 70v52M256 70v52M286 70v50" stroke="#e2d9cc" stroke-width="2" fill="none"/>
                      <!-- itens dentro do carrinho -->
                      <circle cx="196" cy="54" r="16" fill="#9ed6b0"/>
                      <rect x="220" y="34" width="30" height="30" rx="6" fill="#6fd0da"/>
                      <path d="M280 30l16 10v18l-16 10-16-10V40z" fill="#f0a15c"/>
                      <!-- cabo do carrinho -->
                      <path d="M120 44h20l10 20" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                      <!-- haste até as rodas -->
                      <path d="M176 126l-8 14M300 126l8 14" stroke="#ffffff" stroke-width="7" stroke-linecap="round" fill="none"/>
                      <!-- rodas -->
                      <circle cx="186" cy="150" r="11" fill="#2a1a0e" stroke="#ffffff" stroke-width="4"/>
                      <circle cx="298" cy="150" r="11" fill="#2a1a0e" stroke="#ffffff" stroke-width="4"/>
                      <!-- tag de preço pendurada -->
                      <path d="M332 70l34 34-18 18-34-34v-18z" fill="#9ef0b4"/>
                      <circle cx="328" cy="80" r="5" fill="#8a3a12"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-size:30px; font-weight:800; letter-spacing:-0.5px; color:#221a12;">Oi, {{nome_cliente}}, ficou algo pra trás.</h1>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#4a3e32;">Separamos {{produto_nome}} e o restante do seu carrinho — mas não conseguimos garantir o estoque por muito tempo.</p>
                    <a href="{{url_carrinho}}" target="_blank" style="display:inline-block; background-color:#8a3a12; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Voltar ao carrinho</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:28px 40px 36px 40px;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#4a3e32;">Precisa de ajuda? É só responder a este e-mail.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#b4531f; text-decoration:underline;">Cancelar inscrição</a></p>
              <p style="margin:0; font-size:12px; color:#9a8c7c;">Garimpo Comércio Digital Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
