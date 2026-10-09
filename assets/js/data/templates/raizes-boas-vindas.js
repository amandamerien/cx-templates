/**
 * Template: Boas-vindas — Raízes (loja de plantas entregues em casa).
 * Marca fake (design de referência "Bloomscape"). Ilustração SVG original
 * (vaso com folhagem) e apresentação acolhedora do time.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "raizes-boas-vindas",
  slug: "raizes-boas-vindas",
  name: "Boas-vindas — Raízes (plantas)",
  description:
    "E-mail de boas-vindas acolhedor de uma loja de plantas, com ilustração original e apresentação do time.",
  category: "Boas-vindas",
  segment: "Casa e Jardim",
  subject: "Oi! Boas-vindas à Raízes",
  preheader: "As plantas mais saudáveis, da nossa estufa direto para a sua casa.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Raízes",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Oi! Boas-vindas à Raízes",
  },
  variables: [
    { key: "url_conhecer", label: "URL — Conhecer a Raízes", description: "Link do botão “Conhecer a Raízes” e do nome “Raízes” no texto." },
    { key: "url_cuidados", label: "URL — Guia de cuidados", description: "Link do “guia de cuidados” das plantas." },
    { key: "url_navegador", label: "URL — Versão web", description: "Link “ver no navegador” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Oi! Boas-vindas à Raízes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f7f7ec; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#2e5a3e; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f7f7ec; font-family:'Nunito Sans',Arial,Helvetica,sans-serif; color:#2f3b32;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f7f7ec;">
    As plantas mais saudáveis, da nossa estufa direto para a sua casa.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7ec;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:6px 8px 22px 8px; text-align:center;">
              <span style="font-family:'Fraunces',Georgia,'Times New Roman',serif; font-size:30px; font-weight:700; letter-spacing:-0.5px; color:#2e5a3e;">raízes</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Ilustração original: vaso com folhagem -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#eaf1e4; padding:30px 24px 18px 24px; text-align:center;">
                    <svg width="100%" height="200" viewBox="0 0 440 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de um vaso com uma planta de folhagem verde">
                      <!-- chão/sombra -->
                      <ellipse cx="220" cy="186" rx="86" ry="9" fill="#d3e0c8"/>
                      <!-- caules -->
                      <path d="M220 150 C214 118 200 98 182 82" stroke="#3f7a52" stroke-width="4" fill="none" stroke-linecap="round"/>
                      <path d="M220 150 C226 116 242 94 262 80" stroke="#3f7a52" stroke-width="4" fill="none" stroke-linecap="round"/>
                      <path d="M220 150 C220 110 220 86 220 62" stroke="#3f7a52" stroke-width="4" fill="none" stroke-linecap="round"/>
                      <!-- folhas -->
                      <path d="M182 82 C150 74 136 48 150 28 C176 34 192 58 182 82 Z" fill="#5aa26a"/>
                      <path d="M182 82 C150 74 136 48 150 28" stroke="#3f7a52" stroke-width="2" fill="none"/>
                      <path d="M262 80 C294 70 310 44 298 22 C270 30 252 56 262 80 Z" fill="#5aa26a"/>
                      <path d="M262 80 C294 70 310 44 298 22" stroke="#3f7a52" stroke-width="2" fill="none"/>
                      <path d="M220 62 C200 40 204 14 224 4 C244 16 242 44 220 62 Z" fill="#6fb77f"/>
                      <path d="M220 62 C200 40 204 14 224 4" stroke="#3f7a52" stroke-width="2" fill="none"/>
                      <path d="M206 108 C182 108 164 92 166 72 C190 76 206 90 206 108 Z" fill="#6fb77f"/>
                      <path d="M234 108 C258 108 276 92 274 72 C250 76 234 90 234 108 Z" fill="#6fb77f"/>
                      <!-- vaso -->
                      <path d="M178 150 L262 150 L252 188 C250 190 248 192 244 192 L196 192 C192 192 190 190 188 188 Z" fill="#c97b4a"/>
                      <rect x="172" y="140" width="96" height="14" rx="4" fill="#d98c58"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-family:'Fraunces',Georgia,'Times New Roman',serif; font-size:30px; font-weight:700; letter-spacing:-0.5px; color:#1f3a28;">Oi, tudo bem?</h1>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.65; color:#4a574d;">Aqui é a Marina, passando para dizer oi e te apresentar à <a href="{{url_conhecer}}" target="_blank" style="color:#2e5a3e; font-weight:700; text-decoration:underline;">Raízes</a> e ao time Cultive com a Gente!</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.65; color:#4a574d;">Se você ainda não nos conhece, somos um grupo de apaixonados por plantas — fanáticos, até — trabalhando sem parar para levar as plantas mais saudáveis do planeta, da nossa estufa direto para a sua porta!</p>
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.65; color:#4a574d;">Com experiências que vão de paisagismo a horticultura, boa parte do nosso time passou a vida observando, cultivando e cuidando de plantas — e estamos prontos para dividir tudo isso com você!</p>
                    <a href="{{url_conhecer}}" target="_blank" style="display:inline-block; background-color:#2e5a3e; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Conhecer a Raízes</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:28px 40px 36px 40px;">
                    <p style="margin:0 0 18px 0; font-size:15px; line-height:1.65; color:#4a574d;">Ah, e já salve o nosso <a href="{{url_cuidados}}" target="_blank" style="color:#2e5a3e; font-weight:700; text-decoration:underline;">guia de cuidados</a> para deixar suas plantas sempre lindas.</p>
                    <p style="margin:0; font-size:15px; line-height:1.65; color:#4a574d;">Com carinho,<br>Marina e o time Raízes</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px;"><a href="{{url_navegador}}" target="_blank" style="color:#2e5a3e; text-decoration:underline;">Ver no navegador</a></p>
              <p style="margin:0 0 8px 0; font-size:12px; color:#8a988a;">Raízes Plantas Ltda., Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:12px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#8a988a; text-decoration:underline;">Cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
