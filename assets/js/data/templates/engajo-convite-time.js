/**
 * Template: Convite para o time — Engajo (plataforma de engajamento de clientes).
 * Marca fake (design de referência "Customer.io"). Ilustração SVG original
 * (canvas de automação/jornada) e 3 benefícios com ícones próprios.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "engajo-convite-time",
  slug: "engajo-convite-time",
  name: "Convite para o time — Engajo",
  description:
    "E-mail de convite para entrar em um workspace, com ilustração original de jornada e benefícios da plataforma.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Você foi convidado para o Engajo",
  preheader: "Entre no time e crie jornadas personalizadas em todos os canais.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Convite para o time — Engajo",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Você foi convidado para o Engajo",
  },
  variables: [
    { key: "convidante", label: "Quem convidou", description: "Nome e e-mail de quem enviou o convite." },
    { key: "empresa", label: "Empresa/Workspace", description: "Nome do workspace que convidou." },
    { key: "url_entrar", label: "URL — Entrar no time", description: "Link do botão “Entrar no time”." },
    { key: "url_navegador", label: "URL — Versão web", description: "Link “ver no navegador” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Você foi convidado para o Engajo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef1ee; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#0e7a4b; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef1ee; font-family:'Inter',Arial,Helvetica,sans-serif; color:#13211a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef1ee;">
    Entre no time e crie jornadas personalizadas em todos os canais.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef1ee;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#0e3d2e; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#0e3d2e; margin-left:8px; vertical-align:middle;">engajo</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero verde com ilustração original -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0e3d2e; padding:28px 24px; text-align:center;">
                    <svg width="100%" height="180" viewBox="0 0 440 180" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Canvas de jornada automatizada">
                      <path d="M120 70h60M260 70h60M220 96v26" stroke="#3f6b55" stroke-width="2" fill="none"/>
                      <path d="M140 118c30 20 130 20 160 0" stroke="#3f6b55" stroke-width="2" fill="none"/>
                      <!-- nó gatilho -->
                      <circle cx="220" cy="34" r="16" fill="#9ef0b4"/>
                      <path d="M222 26l-8 12h6l-2 10 8-12h-6z" fill="#0e3d2e"/>
                      <!-- nó central: enviar e-mail -->
                      <rect x="168" y="54" width="104" height="30" rx="8" fill="#ffffff"/>
                      <rect x="180" y="64" width="14" height="10" rx="2" fill="#0e3d2e"/>
                      <rect x="200" y="66" width="60" height="6" rx="3" fill="#2a6b4d"/>
                      <!-- nós laterais -->
                      <rect x="56" y="56" width="92" height="26" rx="13" fill="#17503c"/>
                      <rect x="70" y="66" width="64" height="6" rx="3" fill="#9ef0b4"/>
                      <rect x="292" y="56" width="96" height="26" rx="13" fill="#17503c"/>
                      <rect x="306" y="66" width="68" height="6" rx="3" fill="#9ef0b4"/>
                      <!-- cartão inferior -->
                      <rect x="150" y="104" width="140" height="56" rx="10" fill="#ffffff"/>
                      <rect x="164" y="116" width="90" height="8" rx="4" fill="#0e3d2e"/>
                      <rect x="164" y="132" width="112" height="6" rx="3" fill="#cfe6d9"/>
                      <rect x="164" y="144" width="80" height="6" rx="3" fill="#cfe6d9"/>
                      <!-- avatares -->
                      <circle cx="176" cy="96" r="9" fill="#9ef0b4"/>
                      <circle cx="192" cy="96" r="9" fill="#6fd6e0"/>
                      <circle cx="208" cy="96" r="9" fill="#f0c66f"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-size:30px; font-weight:800; letter-spacing:-0.5px; color:#13211a;">Entre no time do {{empresa}}</h1>
                    <p style="margin:0 0 22px 0; font-size:16px; line-height:1.6; color:#3a493f;">{{convidante}} convidou você para entrar no workspace no Engajo.</p>
                    <a href="{{url_entrar}}" target="_blank" style="display:inline-block; background-color:#0e3d2e; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 28px; border-radius:40px;">Entrar no time</a>
                    <p style="margin:26px 0 0 0; font-size:15px; line-height:1.6; color:#3a493f;">O Engajo é uma plataforma de engajamento de clientes que ajuda times a criar jornadas personalizadas em todos os canais, movidas por dados próprios.</p>
                  </td>
                </tr>

                <!-- Benefícios -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:70px; padding:14px 0;"><div style="width:48px; height:48px; border-radius:12px; background:#dff7e4; text-align:center; line-height:48px; color:#0e7a4b; font-size:22px;">✎</div></td>
                        <td valign="top" style="padding:14px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#3a493f;">Crie e automatize mensagens com flexibilidade e personalização incomparáveis.</p></td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:70px; padding:14px 0;"><div style="width:48px; height:48px; border-radius:12px; background:#dff7e4; text-align:center; line-height:48px; color:#0e7a4b; font-size:22px;">⇄</div></td>
                        <td valign="top" style="padding:14px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#3a493f;">Colete e direcione seus dados próprios para todas as ferramentas que você usa.</p></td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:70px; padding:14px 0;"><div style="width:48px; height:48px; border-radius:12px; background:#dff7e4; text-align:center; line-height:48px; color:#0e7a4b; font-size:22px;">▤</div></td>
                        <td valign="top" style="padding:14px 0;"><p style="margin:0; font-size:15px; line-height:1.55; color:#3a493f;">Crie, pré-visualize e colabore usando a plataforma pensada para e-mail.</p></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:20px 40px 36px 40px;">
                    <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a493f;">Teve algum problema para aceitar o convite? Responda a este e-mail com suas dúvidas.</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#3a493f;">Abraços,<br>Time Engajo</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:18px; letter-spacing:6px; color:#0e3d2e;">in  X  ◎  ▶</p>
              <p style="margin:0 0 8px 0; font-size:13px;"><a href="{{url_navegador}}" target="_blank" style="color:#0e7a4b; text-decoration:underline;">Ver no navegador</a></p>
              <p style="margin:0; font-size:12px; color:#8a988f;">© 2026 Engajo Software Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
