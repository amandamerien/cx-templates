/**
 * Template: Convite para webinar — Síncrono (plataforma de eventos/webinars ao vivo).
 * Marca fake. Ilustração SVG original inline (tela com play + calendário),
 * sem imagens remotas. Convite para webinar gratuito ao vivo com inscrição.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "sincrono-convite-webinar",
  slug: "sincrono-convite-webinar",
  name: "Convite para webinar — Síncrono",
  description:
    "E-mail de convite para webinar gratuito ao vivo, com ilustração original e inscrição.",
  category: "Captação",
  segment: "Educação",
  subject: "Convite: webinar gratuito ao vivo",
  preheader: "Garanta sua vaga — vagas limitadas.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Convite para webinar — Síncrono",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Convite: webinar gratuito ao vivo",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome de quem recebe o convite." },
    { key: "tema_webinar", label: "Tema do webinar", description: "Assunto do webinar (ex.: Como vender mais pelo WhatsApp)." },
    { key: "data_webinar", label: "Data do webinar", description: "Data em que o webinar acontece (ex.: 20/10/2026)." },
    { key: "hora_webinar", label: "Horário do webinar", description: "Horário de início (ex.: 19h)." },
    { key: "palestrante", label: "Palestrante", description: "Nome de quem apresenta (ex.: Marina Costa)." },
    { key: "url_inscrever", label: "URL — Garantir minha vaga", description: "Link do botão “Garantir minha vaga”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Convite: webinar gratuito ao vivo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef0f7; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#5b3df5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef0f7; font-family:'Inter',Arial,Helvetica,sans-serif; color:#161430;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef0f7;">
    Garanta sua vaga — vagas limitadas.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f7;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#5b3df5; border-radius:7px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#2b1c66; margin-left:8px; vertical-align:middle;">Síncrono</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero roxo com ilustração original (tela com play + calendário) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#2b1c66; padding:30px 24px; text-align:center;">
                    <svg width="100%" height="190" viewBox="0 0 440 190" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tela de webinar ao vivo com botão de play e calendário">
                      <!-- Monitor / tela de transmissão -->
                      <rect x="96" y="30" width="200" height="124" rx="12" fill="#ffffff"/>
                      <rect x="96" y="30" width="200" height="30" rx="12" fill="#efeafd"/>
                      <circle cx="114" cy="45" r="4" fill="#5b3df5"/>
                      <circle cx="128" cy="45" r="4" fill="#c9bdf9"/>
                      <circle cx="142" cy="45" r="4" fill="#c9bdf9"/>
                      <!-- tag AO VIVO -->
                      <rect x="236" y="39" width="48" height="13" rx="6" fill="#ff5a5f"/>
                      <circle cx="245" cy="45" r="3" fill="#ffffff"/>
                      <!-- área de vídeo -->
                      <rect x="112" y="70" width="168" height="72" rx="8" fill="#1f1448"/>
                      <!-- botão de play central -->
                      <circle cx="196" cy="106" r="22" fill="#5b3df5"/>
                      <path d="M190 96l18 10-18 10z" fill="#ffffff"/>
                      <!-- base do monitor -->
                      <rect x="176" y="154" width="40" height="8" rx="2" fill="#1f1448"/>
                      <rect x="160" y="162" width="72" height="7" rx="3" fill="#15103a"/>
                      <!-- Calendário -->
                      <rect x="300" y="78" width="96" height="88" rx="12" fill="#ffffff"/>
                      <rect x="300" y="78" width="96" height="26" rx="12" fill="#5b3df5"/>
                      <rect x="316" y="72" width="8" height="16" rx="4" fill="#9ef0b4"/>
                      <rect x="372" y="72" width="8" height="16" rx="4" fill="#9ef0b4"/>
                      <!-- grade de dias -->
                      <rect x="312" y="114" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="333" y="114" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="354" y="114" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="375" y="114" width="12" height="10" rx="2" fill="#e5def9"/>
                      <rect x="312" y="130" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="333" y="130" width="14" height="10" rx="2" fill="#ff5a5f"/>
                      <rect x="354" y="130" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="375" y="130" width="12" height="10" rx="2" fill="#e5def9"/>
                      <rect x="312" y="146" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="333" y="146" width="14" height="10" rx="2" fill="#e5def9"/>
                      <rect x="354" y="146" width="14" height="10" rx="2" fill="#e5def9"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 16px 0; font-size:30px; font-weight:800; letter-spacing:-0.5px; color:#161430;">Oi, {{nome_cliente}}!</h1>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#43406a;">Você está convidado para um webinar gratuito ao vivo.</p>

                    <!-- Cartão do webinar -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1fe; border-radius:14px;">
                      <tr>
                        <td style="padding:24px 24px 24px 24px;">
                          <p style="margin:0 0 12px 0; font-size:20px; font-weight:800; letter-spacing:-0.3px; color:#2b1c66;">{{tema_webinar}}</p>
                          <p style="margin:0 0 6px 0; font-size:15px; line-height:1.5; color:#43406a;"><strong style="color:#161430;">Data:</strong> {{data_webinar}} às {{hora_webinar}}</p>
                          <p style="margin:0; font-size:15px; line-height:1.5; color:#43406a;">Com {{palestrante}}</p>
                        </td>
                      </tr>
                    </table>

                    <div style="text-align:center; padding:28px 0 4px 0;">
                      <a href="{{url_inscrever}}" target="_blank" style="display:inline-block; background-color:#5b3df5; color:#ffffff; font-weight:700; font-size:16px; text-decoration:none; padding:16px 36px; border-radius:40px;">Garantir minha vaga</a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:18px 40px 36px 40px;">
                    <p style="margin:0; font-size:14px; line-height:1.6; color:#6a6790; text-align:center;">Vagas limitadas — a gravação é enviada só para quem se inscrever.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#5b3df5; text-decoration:underline;">Cancelar inscrição</a></p>
              <p style="margin:0; font-size:12px; color:#8a88a8;">© 2026 Síncrono Eventos Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
