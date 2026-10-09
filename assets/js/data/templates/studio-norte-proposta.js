/**
 * Template: Proposta comercial — Studio Norte (agência de marketing/design).
 * Marca fake. Ilustração/ícone SVG original (documento com gráfico) inline,
 * sem imagens remotas. Visual sóbrio e profissional, PT-BR.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "studio-norte-proposta",
  slug: "studio-norte-proposta",
  name: "Proposta comercial — Studio Norte",
  description:
    "E-mail de envio de proposta comercial com resumo de investimento e CTA, com ilustração original.",
  category: "Proposta",
  segment: "Serviços",
  subject: "Sua proposta — Studio Norte",
  preheader: "Preparamos um plano sob medida para o seu projeto.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Proposta comercial — Studio Norte",
    categoria: "Relacionamento",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Sua proposta — Studio Norte",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome de quem recebe a proposta." },
    { key: "projeto", label: "Projeto", description: "Projeto discutido (ex.: redesign do site)." },
    { key: "valor", label: "Investimento", description: "Valor do investimento (ex.: R$ 12.000)." },
    { key: "validade", label: "Validade da proposta", description: "Data limite da proposta (ex.: 15/10/2026)." },
    { key: "url_proposta", label: "URL — Ver proposta completa", description: "Link do botão “Ver proposta completa”." },
    { key: "email_contato", label: "E-mail de contato", description: "E-mail para dúvidas (ex.: contato@studionorte.com.br)." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Sua proposta — Studio Norte</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef0f4; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1f3a5f; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef0f4; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a2433;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef0f4;">
    Preparamos um plano sob medida para o seu projeto.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f4;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#1f3a5f; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.3px; color:#1f3a5f; margin-left:8px; vertical-align:middle;">Studio Norte</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e2e6ee;">

              <!-- Hero com ilustração original (documento/gráfico) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1f3a5f; padding:30px 24px; text-align:center;">
                    <svg width="100%" height="168" viewBox="0 0 440 168" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Documento de proposta com gráfico">
                      <!-- folha do documento -->
                      <rect x="150" y="18" width="140" height="132" rx="10" fill="#ffffff"/>
                      <rect x="150" y="18" width="140" height="30" rx="10" fill="#2f5486"/>
                      <rect x="150" y="38" width="140" height="10" fill="#2f5486"/>
                      <!-- título e linhas de texto -->
                      <rect x="166" y="28" width="70" height="8" rx="4" fill="#cde0f7"/>
                      <rect x="166" y="60" width="108" height="6" rx="3" fill="#dde3ee"/>
                      <rect x="166" y="74" width="86" height="6" rx="3" fill="#dde3ee"/>
                      <!-- gráfico de barras dentro do documento -->
                      <rect x="166" y="98" width="16" height="36" rx="3" fill="#9fb9dd"/>
                      <rect x="188" y="110" width="16" height="24" rx="3" fill="#6f97cb"/>
                      <rect x="210" y="90" width="16" height="44" rx="3" fill="#3f6fb0"/>
                      <rect x="232" y="104" width="16" height="30" rx="3" fill="#6f97cb"/>
                      <rect x="254" y="118" width="16" height="16" rx="3" fill="#9fb9dd"/>
                      <!-- linha de tendência -->
                      <path d="M174 100 L196 112 L218 92 L240 106 L262 120" stroke="#f0b64a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="218" cy="92" r="4" fill="#f0b64a"/>
                      <!-- selo de aprovação -->
                      <circle cx="300" cy="120" r="24" fill="#e9f3ff"/>
                      <circle cx="300" cy="120" r="24" fill="none" stroke="#f0b64a" stroke-width="2"/>
                      <path d="M290 120l7 7 14-15" stroke="#1f3a5f" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-size:28px; font-weight:800; letter-spacing:-0.4px; color:#1a2433;">Oi, {{nome_cliente}},</h1>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#45516a;">Foi um prazer conversar sobre {{projeto}}. Preparamos uma proposta sob medida para o que vocês precisam.</p>
                  </td>
                </tr>

                <!-- Cartão de investimento -->
                <tr>
                  <td class="px" style="padding:6px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fb; border:1px solid #e2e6ee; border-radius:12px;">
                      <tr>
                        <td style="padding:22px 24px;">
                          <p style="margin:0 0 4px 0; font-size:12px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:#8591a8;">Investimento</p>
                          <p style="margin:0 0 16px 0; font-size:26px; font-weight:800; color:#1f3a5f;">{{valor}}</p>
                          <p style="margin:0; font-size:14px; line-height:1.5; color:#45516a;">Proposta válida até: <strong style="color:#1a2433;">{{validade}}</strong></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <a href="{{url_proposta}}" target="_blank" style="display:inline-block; background-color:#1f3a5f; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Ver proposta completa</a>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:26px 40px 36px 40px;">
                    <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#45516a;">Qualquer dúvida, é só responder a este e-mail ou escrever para <a href="mailto:{{email_contato}}" target="_blank" style="color:#1f3a5f; text-decoration:underline;">{{email_contato}}</a>.</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#45516a;">Abraços,<br>Time Studio Norte</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#8591a8;">Studio Norte Comunicação Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
