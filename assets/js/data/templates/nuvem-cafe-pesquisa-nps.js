/**
 * Template: Pesquisa NPS — Nuvem Café (cafeteria, marca fake).
 * E-mail pós-compra com pesquisa de satisfação (escala 0 a 10) e ilustração
 * SVG original inline (xícara de café + estrelas de avaliação), sem imagens remotas.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "nuvem-cafe-pesquisa-nps",
  slug: "nuvem-cafe-pesquisa-nps",
  name: "Pesquisa NPS — Nuvem Café",
  description:
    "E-mail pós-compra com pesquisa de satisfação (escala 0 a 10) e ilustração original.",
  category: "Pós-atendimento",
  segment: "Cafeteria",
  subject: "Como foi sua experiência?",
  preheader: "Leva 30 segundos e ajuda muito.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Pesquisa NPS — Nuvem Café",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Como foi sua experiência?",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Primeiro nome de quem recebe a pesquisa." },
    { key: "url_pesquisa", label: "URL — Pesquisa", description: "Link dos botões da escala (0 a 10) e do botão “Responder agora”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Como foi sua experiência?</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f4ece3; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#8a5a2b; }
    .nps a { text-decoration:none; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:26px !important; padding-right:26px !important; }
      .h1 { font-size:26px !important; }
      .nps td { padding:0 2px !important; }
      .nps a { width:30px !important; line-height:30px !important; font-size:13px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4ece3; font-family:'Poppins',Arial,Helvetica,sans-serif; color:#2e2016;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4ece3;">
    Leva 30 segundos e ajuda muito.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4ece3;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px; text-align:center;">
              <span style="display:inline-block; width:26px; height:26px; background:#6f4321; border-radius:50%; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#6f4321; margin-left:8px; vertical-align:middle;">Nuvem Café</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero com ilustração original: xícara + estrelas -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#6f4321; padding:30px 24px; text-align:center;">
                    <svg width="100%" height="170" viewBox="0 0 440 170" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Xícara de café com estrelas de avaliação">
                      <!-- vapor -->
                      <path d="M196 44c-8-8 8-14 0-22M220 40c-8-8 8-14 0-22M244 44c-8-8 8-14 0-22" stroke="#d9b68c" stroke-width="3" fill="none" stroke-linecap="round"/>
                      <!-- pires -->
                      <ellipse cx="220" cy="140" rx="86" ry="14" fill="#5a3418"/>
                      <!-- corpo da xícara -->
                      <path d="M158 70h104v26a52 42 0 0 1-104 0z" fill="#ffffff"/>
                      <!-- café -->
                      <ellipse cx="210" cy="72" rx="52" ry="9" fill="#3c2410"/>
                      <!-- asa -->
                      <path d="M262 80c26 0 26 34 0 34" stroke="#ffffff" stroke-width="9" fill="none"/>
                      <!-- estrelas de avaliação -->
                      <path d="M120 54l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" fill="#f2c14e"/>
                      <path d="M330 48l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" fill="#f2c14e"/>
                      <path d="M356 86l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" fill="#f2c14e"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px; text-align:center;">
                    <h1 class="h1" style="margin:0 0 16px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#2e2016;">Como foi sua experiência?</h1>
                    <p style="margin:0 0 10px 0; font-size:16px; line-height:1.6; color:#5a4938;">Oi, {{nome_cliente}}! Obrigado pela visita à Nuvem Café.</p>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#5a4938;">De 0 a 10, o quanto você recomendaria a Nuvem Café a um amigo?</p>
                  </td>
                </tr>

                <!-- Escala NPS 0 a 10 -->
                <tr>
                  <td class="px" style="padding:0 30px 4px 30px;">
                    <table role="presentation" class="nps" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                      <tr>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">0</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">1</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">2</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">3</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">4</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">5</a></td>
                      </tr>
                    </table>
                    <table role="presentation" class="nps" align="center" cellpadding="0" cellspacing="0" style="margin:8px auto 0 auto;">
                      <tr>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">6</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">7</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">8</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f4ece3; color:#6f4321; font-size:15px; font-weight:600; border-radius:8px;">9</a></td>
                        <td style="padding:0 3px;"><a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; width:38px; line-height:38px; text-align:center; background:#f2c14e; color:#2e2016; font-size:15px; font-weight:700; border-radius:8px;">10</a></td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:300px; margin:8px auto 0 auto;">
                      <tr>
                        <td style="font-size:11px; color:#9a8a79; text-align:left;">Nada provável</td>
                        <td style="font-size:11px; color:#9a8a79; text-align:right;">Muito provável</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Botão responder -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px; text-align:center;">
                    <a href="{{url_pesquisa}}" target="_blank" style="display:inline-block; background-color:#6f4321; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 32px; border-radius:40px;">Responder agora</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:24px 40px 36px 40px; text-align:center;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#5a4938;">Sua opinião ajuda a melhorar nosso cafezinho.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:12px; color:#9a8a79;">Nuvem Café Ltda., Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#8a5a2b; text-decoration:underline;">Cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
