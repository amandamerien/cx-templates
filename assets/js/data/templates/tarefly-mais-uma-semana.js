/**
 * Template: Fim do teste — Tarefly (plataforma de gestão de trabalho/tarefas).
 * Marca fake (design de referência "monday.com"). Ilustração SVG original
 * (pessoa correndo com cronômetro + etiquetas "Trabalhando nisso") e três
 * caminhos: assinar, saber mais ou continuar testando.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "tarefly-mais-uma-semana",
  slug: "tarefly-mais-uma-semana",
  name: "Fim do teste — Tarefly",
  description:
    "E-mail de fim de período de teste com ilustração original e três caminhos: assinar, saber mais ou continuar testando.",
  category: "Reativação",
  segment: "Tecnologia",
  subject: "Mais uma semana no Tarefly",
  preheader: "Vamos revisar suas opções antes do seu teste acabar.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Fim do teste — Tarefly",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Mais uma semana no Tarefly",
  },
  variables: [
    { key: "url_plano", label: "URL — Escolher um plano", description: "Link do texto e do botão “escolher um plano”." },
    { key: "url_info", label: "URL — Saiba mais", description: "Link “Saiba mais!” para ajudar a decidir o plano." },
    { key: "url_quadro", label: "URL — Ir para meu quadro", description: "Link “Ir para meu quadro” para continuar testando." },
    { key: "url_config", label: "URL — Configurações de e-mail", description: "Link para atualizar as configurações de e-mail." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link para parar de receber e-mails de marketing." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Mais uma semana no Tarefly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#6b4cf0; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:34px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a2e;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Vamos revisar suas opções antes do seu teste acabar.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 28px 8px;">
              <span style="display:inline-block; width:24px; height:24px; background:#6b4cf0; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1a1a2e; margin-left:8px; vertical-align:middle;">tarefly</span>
              <span style="font-size:13px; font-weight:500; color:#8a8aa0; margin-left:6px; vertical-align:middle;">gestão de trabalho</span>
            </td>
          </tr>

          <!-- Título -->
          <tr>
            <td style="padding:0 8px 8px 8px; text-align:center;">
              <h1 class="h1" style="margin:0; font-size:44px; line-height:1.1; font-weight:800; letter-spacing:-1px; color:#1a1a2e;">Mais uma <span style="color:#6b4cf0;">semana</span></h1>
            </td>
          </tr>

          <!-- Ilustração SVG original: pessoa correndo com cronômetro -->
          <tr>
            <td style="padding:14px 8px 10px 8px; text-align:center;">
              <svg width="100%" height="220" viewBox="0 0 440 220" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pessoa correndo com um cronômetro, sugerindo que o tempo está acabando">
                <!-- chão -->
                <path d="M40 184h360" stroke="#e6e3f7" stroke-width="3" fill="none" stroke-linecap="round"/>
                <!-- linhas de velocidade -->
                <path d="M60 96h46M50 120h40M64 144h40" stroke="#c9c2f2" stroke-width="4" fill="none" stroke-linecap="round"/>

                <!-- cronômetro grande (o tempo correndo) -->
                <circle cx="330" cy="74" r="40" fill="#efeafd"/>
                <circle cx="330" cy="74" r="40" fill="none" stroke="#6b4cf0" stroke-width="4"/>
                <rect x="322" y="26" width="16" height="8" rx="3" fill="#1a1a2e"/>
                <rect x="326" y="18" width="8" height="10" rx="2" fill="#1a1a2e"/>
                <!-- ponteiros -->
                <path d="M330 74V52M330 74l16 10" stroke="#1a1a2e" stroke-width="4" fill="none" stroke-linecap="round"/>
                <circle cx="330" cy="74" r="4" fill="#ff8a3d"/>

                <!-- pessoa correndo -->
                <!-- cabeça -->
                <circle cx="188" cy="70" r="16" fill="#ffd9c2"/>
                <path d="M174 64c2-12 26-14 28 0 2-8-6-14-14-14s-16 6-14 14z" fill="#1a1a2e"/>
                <!-- tronco -->
                <path d="M188 86c14 2 24 10 24 24l-10 30c-2 6-14 4-13-2l6-24-18-6c-10-3-13-14-7-22z" fill="#6b4cf0"/>
                <!-- braços -->
                <path d="M186 100l-26 6c-6 2-6 12 1 12l24-4z" fill="#5a3ad6"/>
                <path d="M206 98l24 14c6 3 1 12-5 10l-26-12z" fill="#5a3ad6"/>
                <!-- pernas -->
                <path d="M196 140l-6 34c-1 7-13 6-13-1l2-34z" fill="#1a1a2e"/>
                <path d="M206 142l20 24c4 6-5 12-10 7l-22-23z" fill="#2a2a44"/>
                <!-- tênis -->
                <path d="M174 172h22c4 0 4 8 0 8h-24z" fill="#ff8a3d"/>
                <path d="M224 170l10 10c3 3-1 8-5 7l-14-8z" fill="#ff8a3d"/>
              </svg>
            </td>
          </tr>

          <!-- Etiquetas laranja "Trabalhando nisso" -->
          <tr>
            <td style="padding:0 8px 26px 8px; text-align:center;">
              <span style="display:inline-block; background:#ff8a3d; color:#ffffff; font-size:12px; font-weight:700; padding:6px 12px; border-radius:20px; margin:4px 5px;">Trabalhando nisso</span>
              <span style="display:inline-block; background:#ff8a3d; color:#ffffff; font-size:12px; font-weight:700; padding:6px 12px; border-radius:20px; margin:4px 5px;">Trabalhando nisso</span>
              <span style="display:inline-block; background:#ff8a3d; color:#ffffff; font-size:12px; font-weight:700; padding:6px 12px; border-radius:20px; margin:4px 5px;">Trabalhando nisso</span>
            </td>
          </tr>

          <!-- Card de conteúdo -->
          <tr>
            <td style="background-color:#ffffff;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <p style="margin:0 0 26px 0; font-size:17px; font-weight:600; color:#1a1a2e;">Vamos revisar suas opções:</p>
                  </td>
                </tr>

                <!-- Seção: Quero continuar -->
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <h2 style="margin:0 0 10px 0; font-size:20px; font-weight:800; color:#1a1a2e;">Quero continuar</h2>
                    <p style="margin:0 0 20px 0; font-size:15px; line-height:1.6; color:#4a4a63;">Para seguir usando todos os recursos favoritos do Tarefly sem interrupção, basta <a href="{{url_plano}}" target="_blank" style="color:#6b4cf0; font-weight:600; text-decoration:underline;">escolher um plano</a> e preencher seus dados.</p>
                    <a href="{{url_plano}}" target="_blank" style="display:inline-block; background-color:#1a1a2e; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">escolher um plano</a>
                  </td>
                </tr>

                <!-- Linha divisória -->
                <tr>
                  <td class="px" style="padding:30px 40px;">
                    <div style="height:1px; background:#e8e6f2; line-height:1px; font-size:0;">&nbsp;</div>
                  </td>
                </tr>

                <!-- Seção: Não sei bem o que quero -->
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <h2 style="margin:0 0 10px 0; font-size:20px; font-weight:800; color:#1a1a2e;">Não sei bem o que quero...</h2>
                    <p style="margin:0 0 6px 0; font-size:15px; line-height:1.6; color:#4a4a63;">Precisa de ajuda para decidir qual plano é ideal para você? <a href="{{url_info}}" target="_blank" style="color:#6b4cf0; font-weight:600; text-decoration:underline;">Saiba mais!</a></p>
                  </td>
                </tr>

                <!-- Linha divisória -->
                <tr>
                  <td class="px" style="padding:30px 40px;">
                    <div style="height:1px; background:#e8e6f2; line-height:1px; font-size:0;">&nbsp;</div>
                  </td>
                </tr>

                <!-- Seção: Não tenho interesse agora -->
                <tr>
                  <td class="px" style="padding:0 40px 8px 40px;">
                    <h2 style="margin:0 0 10px 0; font-size:20px; font-weight:800; color:#1a1a2e;">Não tenho interesse agora</h2>
                    <p style="margin:0 0 6px 0; font-size:15px; line-height:1.6; color:#4a4a63;">Ainda não quer assinar? Sem problema, você ainda tem mais uma semana para testar o Tarefly. <a href="{{url_quadro}}" target="_blank" style="color:#6b4cf0; font-weight:600; text-decoration:underline;">Ir para meu quadro</a></p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:40px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:13px; line-height:1.6; color:#8a8aa0;">Para atualizar suas configurações de e-mail, <a href="{{url_config}}" target="_blank" style="color:#8a8aa0; text-decoration:underline;">clique aqui</a>.</p>
              <p style="margin:0 0 24px 0; font-size:13px; line-height:1.6; color:#8a8aa0;">Para parar de receber e-mails de marketing, <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8aa0; text-decoration:underline;">cancele aqui</a>.</p>
              <p style="margin:0 0 12px 0; font-size:14px; font-weight:600; color:#1a1a2e;">Quer gerenciar seu trabalho de qualquer lugar? Baixe o app do Tarefly</p>
              <p style="margin:0 0 20px 0;">
                <span style="display:inline-block; background:#1a1a2e; color:#ffffff; font-size:12px; font-weight:600; padding:10px 18px; border-radius:8px; margin:4px 5px;">App Store</span>
                <span style="display:inline-block; background:#1a1a2e; color:#ffffff; font-size:12px; font-weight:600; padding:10px 18px; border-radius:8px; margin:4px 5px;">Google Play</span>
              </p>
              <p style="margin:0; font-size:12px; color:#a8a8bc;">Tarefly | Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
