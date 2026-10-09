/**
 * Template: Consultoria individual — Tarefly (plataforma de gestão de trabalho/tarefas).
 * Marca fake (nunca "monday.com"). Ilustração SVG original inline (chamada de
 * vídeo + calendário com um dia marcado + gráfico), 4 benefícios com check roxo
 * e 3 cartões de recursos de ajuda com ícones próprios.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "tarefly-consultoria-1a1",
  slug: "tarefly-consultoria-1a1",
  name: "Consultoria individual — Tarefly",
  description:
    "E-mail para agendar uma consultoria 1:1 com especialista, com ilustração original, benefícios e recursos de ajuda.",
  category: "Agendamento",
  segment: "Tecnologia",
  subject: "Vamos agendar sua consultoria individual",
  preheader: "Um especialista ajuda você a extrair o máximo da plataforma.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Consultoria individual — Tarefly",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Vamos agendar sua consultoria individual",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação." },
    { key: "url_agendar", label: "URL — Agendar consultoria", description: "Link do botão “Agendar consultoria gratuita”." },
    { key: "url_tutoriais", label: "URL — Tutoriais em vídeo", description: "Link do cartão “Tutoriais em vídeo”." },
    { key: "url_blog", label: "URL — Nosso blog", description: "Link do cartão “Nosso blog”." },
    { key: "url_ajuda", label: "URL — Central de ajuda", description: "Link do cartão “Central de ajuda”." },
    { key: "url_config", label: "URL — Configurações de e-mail", description: "Link para atualizar as configurações de e-mail." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link para parar de receber e-mails de marketing." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Vamos agendar sua consultoria individual</title>
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
      .h1 { font-size:32px !important; }
      .card { display:block !important; width:100% !important; margin:0 0 12px 0 !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a2e;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Um especialista ajuda você a extrair o máximo da plataforma.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 28px 8px; text-align:center;">
              <span style="display:inline-block; width:24px; height:24px; background:#6b4cf0; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1a1a2e; margin-left:8px; vertical-align:middle;">tarefly</span>
              <span style="font-size:13px; font-weight:500; color:#8a8aa0; margin-left:6px; vertical-align:middle;">gestão de trabalho</span>
            </td>
          </tr>

          <!-- Título -->
          <tr>
            <td style="padding:0 8px 8px 8px; text-align:center;">
              <h1 class="h1" style="margin:0; font-size:40px; line-height:1.15; font-weight:800; letter-spacing:-1px; color:#1a1a2e;">Vamos agendar sua <span style="color:#6b4cf0;">consultoria individual</span></h1>
            </td>
          </tr>

          <!-- Ilustração SVG original: chamada de vídeo + calendário + gráfico -->
          <tr>
            <td style="padding:20px 8px 24px 8px; text-align:center;">
              <svg width="100%" height="220" viewBox="0 0 440 220" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Uma chamada de vídeo com especialista, um calendário com um dia marcado e um gráfico de progresso">
                <!-- Janela de chamada de vídeo -->
                <rect x="24" y="30" width="188" height="140" rx="14" fill="#efeafd"/>
                <rect x="24" y="30" width="188" height="140" rx="14" fill="none" stroke="#6b4cf0" stroke-width="3"/>
                <!-- barra superior da janela -->
                <circle cx="40" cy="46" r="4" fill="#ff8a3d"/>
                <circle cx="54" cy="46" r="4" fill="#c9c2f2"/>
                <circle cx="68" cy="46" r="4" fill="#c9c2f2"/>
                <!-- participante grande -->
                <rect x="40" y="62" width="100" height="90" rx="10" fill="#ffffff"/>
                <circle cx="90" cy="96" r="17" fill="#ffd9c2"/>
                <path d="M68 142c0-16 44-16 44 0z" fill="#6b4cf0"/>
                <!-- participante pequeno (especialista) -->
                <rect x="150" y="62" width="48" height="42" rx="8" fill="#ffffff"/>
                <circle cx="174" cy="80" r="9" fill="#ffd9c2"/>
                <path d="M162 100c0-9 24-9 24 0z" fill="#5a3ad6"/>
                <!-- botão de câmera -->
                <rect x="150" y="116" width="48" height="36" rx="8" fill="#6b4cf0"/>
                <path d="M164 128h14l6 5v8l-6 5h-14z" fill="#ffffff"/>

                <!-- Calendário com um dia marcado -->
                <rect x="232" y="30" width="118" height="100" rx="12" fill="#ffffff"/>
                <rect x="232" y="30" width="118" height="100" rx="12" fill="none" stroke="#e6e3f7" stroke-width="3"/>
                <rect x="232" y="30" width="118" height="24" rx="12" fill="#6b4cf0"/>
                <rect x="248" y="22" width="8" height="14" rx="3" fill="#1a1a2e"/>
                <rect x="326" y="22" width="8" height="14" rx="3" fill="#1a1a2e"/>
                <!-- grade de dias -->
                <g fill="#c9c2f2">
                  <rect x="246" y="66" width="12" height="10" rx="2"/>
                  <rect x="268" y="66" width="12" height="10" rx="2"/>
                  <rect x="290" y="66" width="12" height="10" rx="2"/>
                  <rect x="312" y="66" width="12" height="10" rx="2"/>
                  <rect x="246" y="84" width="12" height="10" rx="2"/>
                  <rect x="312" y="84" width="12" height="10" rx="2"/>
                  <rect x="246" y="102" width="12" height="10" rx="2"/>
                  <rect x="290" y="102" width="12" height="10" rx="2"/>
                  <rect x="312" y="102" width="12" height="10" rx="2"/>
                </g>
                <!-- dia marcado -->
                <circle cx="296" cy="89" r="11" fill="#ff8a3d"/>
                <path d="M291 89l4 4 7-8" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

                <!-- Gráfico de progresso -->
                <rect x="232" y="142" width="176" height="56" rx="12" fill="#efeafd"/>
                <path d="M248 184l24-18 22 10 26-26 24 8" stroke="#6b4cf0" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="248" cy="184" r="4" fill="#6b4cf0"/>
                <circle cx="294" cy="176" r="4" fill="#6b4cf0"/>
                <circle cx="368" cy="158" r="5" fill="#ff8a3d"/>
                <rect x="384" y="150" width="12" height="36" rx="3" fill="#c9c2f2"/>
              </svg>
            </td>
          </tr>

          <!-- Introdução -->
          <tr>
            <td class="px" style="padding:0 40px 8px 40px; text-align:center;">
              <p style="margin:0; font-size:17px; line-height:1.6; color:#4a4a63;">{{nome_cliente}}, conte com um especialista para ajudar você a encontrar os recursos do Tarefly que vão te levar aos seus objetivos.</p>
            </td>
          </tr>

          <!-- 4 itens com check roxo -->
          <tr>
            <td class="px" style="padding:24px 40px 8px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" style="width:34px; padding:12px 0;">
                    <span style="display:inline-block; width:24px; height:24px; border-radius:50%; background:#efeafd; color:#6b4cf0; text-align:center; line-height:24px; font-size:14px; font-weight:800;">&#10003;</span>
                  </td>
                  <td valign="top" style="padding:12px 0;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a2e;">Tire suas dúvidas</p>
                    <p style="margin:0; font-size:15px; line-height:1.55; color:#4a4a63;">Nesta conversa individual, pergunte o que quiser sobre o Tarefly e receba respostas personalizadas.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:34px; padding:12px 0;">
                    <span style="display:inline-block; width:24px; height:24px; border-radius:50%; background:#efeafd; color:#6b4cf0; text-align:center; line-height:24px; font-size:14px; font-weight:800;">&#10003;</span>
                  </td>
                  <td valign="top" style="padding:12px 0;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a2e;">Suporte dedicado</p>
                    <p style="margin:0; font-size:15px; line-height:1.55; color:#4a4a63;">Fale sobre seu stack e os desafios do time para receber orientação sob medida.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:34px; padding:12px 0;">
                    <span style="display:inline-block; width:24px; height:24px; border-radius:50%; background:#efeafd; color:#6b4cf0; text-align:center; line-height:24px; font-size:14px; font-weight:800;">&#10003;</span>
                  </td>
                  <td valign="top" style="padding:12px 0;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a2e;">Explore recursos relevantes</p>
                    <p style="margin:0; font-size:15px; line-height:1.55; color:#4a4a63;">Com base no seu contexto, o especialista recomenda recursos para maximizar seu impacto.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:34px; padding:12px 0;">
                    <span style="display:inline-block; width:24px; height:24px; border-radius:50%; background:#efeafd; color:#6b4cf0; text-align:center; line-height:24px; font-size:14px; font-weight:800;">&#10003;</span>
                  </td>
                  <td valign="top" style="padding:12px 0;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a2e;">Escolha o plano certo</p>
                    <p style="margin:0; font-size:15px; line-height:1.55; color:#4a4a63;">Entendendo os objetivos do seu time, o especialista indica os melhores planos.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td class="px" style="padding:24px 40px 10px 40px; text-align:center;">
              <a href="{{url_agendar}}" target="_blank" style="display:inline-block; background-color:#1a1a2e; color:#ffffff; font-weight:700; font-size:16px; text-decoration:none; padding:16px 34px; border-radius:40px;">Agendar consultoria gratuita</a>
            </td>
          </tr>

          <!-- Linha divisória -->
          <tr>
            <td class="px" style="padding:30px 40px;">
              <div style="height:1px; background:#e8e6f2; line-height:1px; font-size:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Seção: Precisa de ajuda para começar? -->
          <tr>
            <td class="px" style="padding:0 40px 4px 40px; text-align:center;">
              <h2 style="margin:0 0 6px 0; font-size:22px; font-weight:800; color:#1a1a2e;">Precisa de ajuda para começar?</h2>
              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#4a4a63;">Aprenda, explore e aproveite mais o seu teste</p>
            </td>
          </tr>

          <!-- 3 cartões de recursos -->
          <tr>
            <td class="px" style="padding:0 40px 8px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Cartão 1: Tutoriais em vídeo -->
                  <td class="card" valign="top" width="33%" style="padding:0 6px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2fb; border-radius:14px;">
                      <tr>
                        <td style="padding:20px 16px; text-align:center;">
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de vídeo">
                            <rect x="4" y="9" width="24" height="22" rx="5" fill="#6b4cf0"/>
                            <path d="M28 16l8-5v18l-8-5z" fill="#ff8a3d"/>
                            <path d="M14 15l8 5-8 5z" fill="#ffffff"/>
                          </svg>
                          <p style="margin:12px 0 0 0; font-size:14px; font-weight:700; line-height:1.4;"><a href="{{url_tutoriais}}" target="_blank" style="color:#1a1a2e; text-decoration:none;">Tutoriais em vídeo</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <!-- Cartão 2: Nosso blog -->
                  <td class="card" valign="top" width="33%" style="padding:0 6px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2fb; border-radius:14px;">
                      <tr>
                        <td style="padding:20px 16px; text-align:center;">
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de blog">
                            <rect x="8" y="5" width="24" height="30" rx="4" fill="#6b4cf0"/>
                            <rect x="13" y="12" width="14" height="3" rx="1.5" fill="#ffffff"/>
                            <rect x="13" y="19" width="14" height="3" rx="1.5" fill="#c9c2f2"/>
                            <rect x="13" y="26" width="9" height="3" rx="1.5" fill="#ff8a3d"/>
                          </svg>
                          <p style="margin:12px 0 0 0; font-size:14px; font-weight:700; line-height:1.4;"><a href="{{url_blog}}" target="_blank" style="color:#1a1a2e; text-decoration:none;">Nosso blog</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <!-- Cartão 3: Central de ajuda -->
                  <td class="card" valign="top" width="33%" style="padding:0 6px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2fb; border-radius:14px;">
                      <tr>
                        <td style="padding:20px 16px; text-align:center;">
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de ajuda">
                            <circle cx="20" cy="20" r="15" fill="#6b4cf0"/>
                            <path d="M16 16c0-3 8-3 8 0 0 2-3 2-4 4" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
                            <circle cx="20" cy="27" r="2" fill="#ff8a3d"/>
                          </svg>
                          <p style="margin:12px 0 0 0; font-size:14px; font-weight:700; line-height:1.4;"><a href="{{url_ajuda}}" target="_blank" style="color:#1a1a2e; text-decoration:none;">Central de ajuda</a></p>
                        </td>
                      </tr>
                    </table>
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
              <p style="margin:0; font-size:12px; color:#a8a8bc;">© 2026 Tarefly | Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
