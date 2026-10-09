/**
 * Template: Sentimos sua falta — PumpFit (academia, marca fake).
 * E-mail de reengajamento com cupom em destaque e ilustração SVG original
 * (halter/peso) inline, sem imagens remotas. Visual escuro + verde-limão.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "pumpfit-sentimos-falta",
  slug: "pumpfit-sentimos-falta",
  name: "Sentimos sua falta — PumpFit",
  description:
    "E-mail de reengajamento de academia com cupom e ilustração original.",
  category: "Reativação",
  segment: "Fitness",
  subject: "Bora voltar a treinar?",
  preheader: "Sentimos sua falta na PumpFit.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Sentimos sua falta — PumpFit",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Bora voltar a treinar?",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Primeiro nome de quem recebe o e-mail." },
    { key: "cupom", label: "Cupom de desconto", description: "Código do cupom de reativação (ex.: VOLTEI30)." },
    { key: "url_planos", label: "URL — Ver planos", description: "Link do botão “Ver planos”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Bora voltar a treinar?</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#0c0f12; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#c6f24e; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:26px !important; padding-right:26px !important; }
      .h1 { font-size:28px !important; }
      .coupon { font-size:26px !important; letter-spacing:4px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#0c0f12; font-family:'Montserrat',Arial,Helvetica,sans-serif; color:#eef2e6;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#0c0f12;">
    Sentimos sua falta na PumpFit.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0c0f12;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#c6f24e; border-radius:7px; vertical-align:middle;"></span>
              <span style="font-size:22px; font-weight:900; letter-spacing:1px; color:#ffffff; margin-left:9px; vertical-align:middle; text-transform:uppercase;">Pump<span style="color:#c6f24e;">Fit</span></span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#16191d; border-radius:18px; overflow:hidden;">

              <!-- Hero escuro com ilustração original (halter) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1d2126; padding:34px 24px; text-align:center;">
                    <svg width="100%" height="150" viewBox="0 0 440 150" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Halter de musculação">
                      <!-- barra central -->
                      <rect x="150" y="68" width="140" height="14" rx="7" fill="#c6f24e"/>
                      <!-- colares internos -->
                      <rect x="140" y="60" width="14" height="30" rx="4" fill="#e9fbb0"/>
                      <rect x="286" y="60" width="14" height="30" rx="4" fill="#e9fbb0"/>
                      <!-- anilhas internas -->
                      <rect x="112" y="46" width="24" height="58" rx="8" fill="#9fd82f"/>
                      <rect x="304" y="46" width="24" height="58" rx="8" fill="#9fd82f"/>
                      <!-- anilhas externas (grandes) -->
                      <rect x="84" y="32" width="28" height="86" rx="10" fill="#c6f24e"/>
                      <rect x="328" y="32" width="28" height="86" rx="10" fill="#c6f24e"/>
                      <!-- brilho nas anilhas -->
                      <rect x="92" y="44" width="6" height="62" rx="3" fill="#eafcae"/>
                      <rect x="336" y="44" width="6" height="62" rx="3" fill="#eafcae"/>
                      <!-- ponteiras -->
                      <rect x="72" y="60" width="12" height="30" rx="5" fill="#7bb020"/>
                      <rect x="356" y="60" width="12" height="30" rx="5" fill="#7bb020"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:36px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-size:30px; font-weight:900; letter-spacing:-0.5px; color:#ffffff; text-transform:uppercase;">{{nome_cliente}}, a gente sentiu sua falta!</h1>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#b9c2ad;">Faz um tempinho que você não aparece na PumpFit. Que tal retomar de onde parou?</p>
                    <p style="margin:0; font-size:16px; line-height:1.6; color:#b9c2ad;">Para te dar aquele empurrão, use o cupom <strong style="color:#ffffff;">{{cupom}}</strong> e volte com desconto.</p>
                  </td>
                </tr>

                <!-- Cupom em destaque -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#0c0f12; border:2px dashed #c6f24e; border-radius:14px; padding:22px 20px; text-align:center;">
                          <p style="margin:0 0 6px 0; font-size:12px; font-weight:700; letter-spacing:3px; color:#9fd82f; text-transform:uppercase;">Seu cupom</p>
                          <p class="coupon" style="margin:0; font-size:34px; font-weight:900; letter-spacing:6px; color:#c6f24e;">{{cupom}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Botão -->
                <tr>
                  <td class="px" style="padding:30px 40px 6px 40px; text-align:center;">
                    <a href="{{url_planos}}" target="_blank" style="display:inline-block; background-color:#c6f24e; color:#0c0f12; font-weight:800; font-size:16px; text-decoration:none; padding:16px 40px; border-radius:40px; text-transform:uppercase; letter-spacing:0.5px;">Ver planos</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:22px 40px 38px 40px; text-align:center;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#b9c2ad;">Te esperamos no treino. Bora pra cima!<br>Equipe PumpFit</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:12px; color:#6f7a66;">PumpFit Academia Ltda., Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:12px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#9fd82f; text-decoration:underline;">Cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
