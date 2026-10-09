/**
 * Template: Boas-vindas — Viralize (onboarding de produto, acento lime + bloco escuro).
 * Marca fake (design de referência "Fypro.ai"). Logo, boas-vindas, lista de
 * recursos em caixa, CTAs lime, seção de comunidade (Discord) e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "fypro-boas-vindas",
  slug: "fypro-boas-vindas",
  name: "Boas-vindas — Viralize (onboarding)",
  description:
    "E-mail de boas-vindas de produto com lista de recursos em destaque, múltiplos CTAs e bloco de comunidade (Discord).",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Boas-vindas à Viralize",
  preheader: "Conecte seu TikTok e receba um relatório de crescimento personalizado.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Viralize",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à Viralize",
  },
  variables: [
    {
      key: "url_connect",
      label: "URL — Conectar TikTok",
      description: "Link do botão “Conectar TikTok” e da “Central Pessoal”.",
    },
    {
      key: "url_explore",
      label: "URL — Explorar",
      description: "Link do botão “Explorar a Viralize”.",
    },
    {
      key: "url_discord",
      label: "URL — Discord",
      description: "Link do botão “Entrar no Discord”.",
    },
    {
      key: "url_unsubscribe",
      label: "URL — Cancelar inscrição",
      description: "Link de cancelamento de inscrição no rodapé.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Viralize</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f3f4f1; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .btn-lime { display:inline-block; background-color:#c4f03c; color:#141414; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:15px; text-decoration:none; padding:14px 26px; border-radius:999px; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f1; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f3f4f1;">
    Conecte seu TikTok e receba um relatório de crescimento personalizado.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f1;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Card branco -->
          <tr>
            <td style="background-color:#ffffff; border-radius:14px 14px 0 0; padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Logo -->
                <tr>
                  <td class="px" style="padding:36px 40px 0 40px;">
                    <span style="display:inline-block; width:30px; height:30px; background:#c4f03c; border-radius:9px; vertical-align:middle;"></span>
                    <span style="vertical-align:middle; font-weight:800; font-size:22px; color:#141414; margin-left:8px;">Viralize</span>
                  </td>
                </tr>

                <!-- Título + intro -->
                <tr>
                  <td class="px" style="padding:20px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 20px 0; font-size:34px; line-height:1.1; font-weight:800; color:#141414;">Boas-vindas à Viralize</h1>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#444444;">Olá,</p>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#444444;">
                      Você não precisa de mais uma lista de dicas genéricas para criadores. A Viralize
                      começa pela sua própria conta do TikTok.
                    </p>
                    <p style="margin:0; font-size:16px; line-height:1.6; color:#444444;">
                      Vá até a <a href="{{url_connect}}" target="_blank" style="color:#141414; font-weight:700;">Central Pessoal</a>
                      e conecte sua conta do TikTok. Vamos transformar os dados da sua conta em um
                      relatório de crescimento personalizado: o que está funcionando, onde você está e o
                      que criar a seguir.
                    </p>
                  </td>
                </tr>

                <!-- Caixa de recursos -->
                <tr>
                  <td class="px" style="padding:24px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ececec; border-radius:12px;">
                      <tr>
                        <td style="padding:24px;">
                          <p style="margin:0 0 14px 0; font-size:16px; font-weight:700; color:#141414;">Depois de conectar, seu relatório ajuda você a ver:</p>
                          <p style="margin:0 0 12px 0; font-size:15px; line-height:1.55; color:#444444;">
                            •&nbsp;&nbsp;<strong>O que realmente funciona:</strong> os pontos fortes do seu conteúdo, o mix de tráfego, os vídeos de melhor desempenho e padrões virais — não só visualizações, mas os sinais que fazem você avançar.
                          </p>
                          <p style="margin:0 0 12px 0; font-size:15px; line-height:1.55; color:#444444;">
                            •&nbsp;&nbsp;<strong>Como você se compara a criadores parecidos:</strong> benchmarks do seu nicho em visualizações, engajamento, curtidas por visualização, taxa de compartilhamento e mais, para saber se o gargalo é alcance, retenção ou mix de conteúdo.
                          </p>
                          <p style="margin:0; font-size:15px; line-height:1.55; color:#444444;">
                            •&nbsp;&nbsp;<strong>O que criar a seguir:</strong> recomendações claras de ângulos de conteúdo, mix de postagens e ideias de vídeo com base nos sinais da sua própria conta.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA 1 -->
                <tr>
                  <td align="center" style="padding:28px 40px 0 40px;">
                    <a href="{{url_connect}}" target="_blank" class="btn-lime">Conectar TikTok</a>
                  </td>
                </tr>

                <!-- Divisória -->
                <tr>
                  <td class="px" style="padding:32px 40px 0 40px;">
                    <div style="border-top:1px solid #ececec; line-height:0; font-size:0;">&nbsp;</div>
                  </td>
                </tr>

                <!-- Continue explorando -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px;">
                    <h2 style="margin:0 0 14px 0; font-size:20px; font-weight:700; color:#141414;">Continue explorando a Viralize</h2>
                    <p style="margin:0 0 14px 0; font-size:15px; line-height:1.6; color:#444444;">Depois do seu relatório, você pode sair do plano para a produção:</p>
                    <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#444444;">•&nbsp;&nbsp;Encontrar ideias virais no seu nicho</p>
                    <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#444444;">•&nbsp;&nbsp;Transformar vídeos virais em roteiros</p>
                    <p style="margin:0 0 16px 0; font-size:15px; line-height:1.55; color:#444444;">•&nbsp;&nbsp;Criar vídeos de produto, vídeos com avatar de IA e clipes curtos de IA com o Seedance 2.0</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#444444;">Menos conselho genérico. Mais “é isto que a sua conta deve fazer a seguir.”</p>
                  </td>
                </tr>

                <!-- CTA 2 -->
                <tr>
                  <td align="center" style="padding:24px 40px 40px 40px;">
                    <a href="{{url_explore}}" target="_blank" class="btn-lime">Explorar a Viralize</a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Seção Discord (escura) -->
          <tr>
            <td style="background-color:#111111; border-radius:0 0 14px 14px; padding:44px 40px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:20px; font-weight:700; color:#ffffff;">Discord</p>
              <p style="margin:0 0 10px 0; font-size:12px; letter-spacing:2px; font-weight:600; color:#9aa0a6;">COMUNIDADE DE CRIADORES</p>
              <p style="margin:0 0 22px 0; font-size:18px; line-height:1.5; font-weight:700; color:#ffffff;">Tenha acesso a drops exclusivos, tutoriais e uma comunidade de criadores como você.</p>
              <a href="{{url_discord}}" target="_blank" class="btn-lime">Entrar no Discord</a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:24px 24px 8px 24px; text-align:center;">
              <p style="margin:0 0 6px 0; font-size:12px; line-height:1.5; color:#9a9a9a;">Você está recebendo este e-mail porque se cadastrou na Viralize.</p>
              <p style="margin:0; font-size:12px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#9a9a9a; text-decoration:underline;">Cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
