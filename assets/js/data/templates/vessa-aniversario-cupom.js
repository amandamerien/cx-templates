/**
 * Template: Aniversário — Vêssa (loja de moda feminina).
 * Marca fake. Ilustração SVG original inline (presente, balões e confete),
 * sem imagens remotas — renderiza offline. E-mail de aniversário com cupom.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "vessa-aniversario-cupom",
  slug: "vessa-aniversario-cupom",
  name: "Aniversário — Vêssa (cupom)",
  description:
    "E-mail de aniversário com cupom de desconto e ilustração original.",
  category: "Aniversário",
  segment: "E-commerce",
  subject: "Um presente de aniversário pra você",
  preheader: "Seu cupom de aniversário chegou — aproveite com a gente.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Aniversário — Vêssa",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Um presente de aniversário pra você",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome de quem faz aniversário." },
    { key: "cupom", label: "Cupom de desconto", description: "Código do cupom (ex.: NIVER20)." },
    { key: "url_loja", label: "URL — Aproveitar o cupom", description: "Link do botão “Aproveitar o cupom”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Um presente de aniversário pra você</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f7edf1; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#7a1f3d; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f7edf1; font-family:'Inter',Arial,Helvetica,sans-serif; color:#2a1720;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f7edf1;">
    Seu cupom de aniversário chegou — aproveite com a gente.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7edf1;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px; text-align:center;">
              <span style="font-family:'Playfair Display',Georgia,serif; font-size:28px; font-weight:700; letter-spacing:1px; color:#7a1f3d;">Vêssa</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero bordô com ilustração original (presente, balões e confete) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#7a1f3d; padding:30px 24px; text-align:center;">
                    <svg width="100%" height="190" viewBox="0 0 440 190" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Presente de aniversário com balões e confete">
                      <!-- confete -->
                      <rect x="54" y="26" width="10" height="10" rx="2" fill="#f3c6d6" transform="rotate(18 59 31)"/>
                      <rect x="372" y="34" width="9" height="9" rx="2" fill="#f0b64a" transform="rotate(-24 376 38)"/>
                      <rect x="96" y="150" width="9" height="9" rx="2" fill="#f0b64a" transform="rotate(32 100 154)"/>
                      <rect x="346" y="150" width="10" height="10" rx="2" fill="#f3c6d6" transform="rotate(-14 351 155)"/>
                      <circle cx="80" cy="96" r="5" fill="#f3c6d6"/>
                      <circle cx="366" cy="104" r="5" fill="#ffffff" opacity="0.85"/>
                      <circle cx="120" cy="40" r="4" fill="#ffffff" opacity="0.7"/>
                      <circle cx="320" cy="60" r="4" fill="#f0b64a"/>
                      <path d="M64 70l6 6M70 70l-6 6" stroke="#f3c6d6" stroke-width="2" stroke-linecap="round"/>
                      <path d="M384 128l6 6M390 128l-6 6" stroke="#f0b64a" stroke-width="2" stroke-linecap="round"/>

                      <!-- balões -->
                      <ellipse cx="146" cy="60" rx="26" ry="31" fill="#f3c6d6"/>
                      <path d="M146 91l-5 8h10z" fill="#f3c6d6"/>
                      <path d="M146 99c0 12 -14 14 -14 26" stroke="#c98aa0" stroke-width="2" fill="none"/>
                      <ellipse cx="140" cy="52" rx="7" ry="9" fill="#ffffff" opacity="0.35"/>

                      <ellipse cx="300" cy="56" rx="24" ry="29" fill="#f0b64a"/>
                      <path d="M300 85l-5 8h10z" fill="#f0b64a"/>
                      <path d="M300 93c0 12 12 14 12 26" stroke="#cf992f" stroke-width="2" fill="none"/>
                      <ellipse cx="294" cy="48" rx="6" ry="8" fill="#ffffff" opacity="0.4"/>

                      <!-- presente -->
                      <rect x="178" y="96" width="84" height="66" rx="6" fill="#ffffff"/>
                      <rect x="178" y="96" width="84" height="20" rx="4" fill="#f7edf1"/>
                      <rect x="214" y="96" width="12" height="66" fill="#f0b64a"/>
                      <rect x="178" y="112" width="84" height="8" fill="#f0b64a"/>
                      <!-- laço -->
                      <path d="M220 96c-14 -4 -30 -14 -24 -24 6 -10 22 4 24 24z" fill="#f0b64a"/>
                      <path d="M220 96c14 -4 30 -14 24 -24 -6 -10 -22 4 -24 24z" fill="#f0b64a"/>
                      <circle cx="220" cy="92" r="6" fill="#cf992f"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:36px 40px 0 40px; text-align:center;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-family:'Playfair Display',Georgia,serif; font-size:32px; font-weight:700; letter-spacing:-0.3px; color:#2a1720;">Feliz aniversário, {{nome_cliente}}!</h1>
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#5c4650;">Para comemorar com você, preparamos um presente: 20% de desconto em toda a loja.</p>
                  </td>
                </tr>

                <!-- Cupom em destaque -->
                <tr>
                  <td class="px" style="padding:4px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#f7edf1; border:2px dashed #c98aa0; border-radius:12px; padding:20px 16px; text-align:center;">
                          <p style="margin:0 0 6px 0; font-size:12px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#a06078;">Seu cupom</p>
                          <p style="margin:0; font-size:28px; font-weight:700; letter-spacing:3px; color:#7a1f3d;">{{cupom}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Botão -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px; text-align:center;">
                    <a href="{{url_loja}}" target="_blank" style="display:inline-block; background-color:#7a1f3d; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:16px 36px; border-radius:40px;">Aproveitar o cupom</a>
                    <p style="margin:18px 0 0 0; font-size:14px; line-height:1.6; color:#8a7580;">Válido por 7 dias.</p>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:30px 40px 36px 40px; text-align:center;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#5c4650;">Com carinho,<br>Equipe Vêssa</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#7a1f3d; text-decoration:underline;">Cancelar inscrição</a></p>
              <p style="margin:0; font-size:12px; color:#a8929c;">© 2026 Vêssa Moda Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
