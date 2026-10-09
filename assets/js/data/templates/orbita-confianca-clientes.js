/**
 * Template: Confiança com clientes — Órbita (plataforma de negócios/comércio).
 * Marca fake (nunca "Meta"/"Facebook"). Ilustração SVG original inline
 * (bloco de notas com lista + lápis) no topo do cartão branco.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "orbita-confianca-clientes",
  slug: "orbita-confianca-clientes",
  name: "Confiança com clientes — Órbita",
  description:
    "E-mail institucional pedindo dados do negócio para exibir aos clientes, com ilustração original e CTA.",
  category: "Institucional",
  segment: "Tecnologia",
  subject: "Ajude a criar mais confiança com os clientes",
  preheader: "Adicione as informações do seu negócio para exibir aos clientes.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Confiança com clientes — Órbita",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Ajude a criar mais confiança com os clientes",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação." },
    { key: "url_comecar", label: "URL — Começar", description: "Link do botão “Começar”." },
    { key: "email_destino", label: "E-mail de destino", description: "E-mail exibido no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “cancele a inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Ajude a criar mais confiança com os clientes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef0f3; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1877f2; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:24px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef0f3; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1c1e21;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef0f3;">
    Adicione as informações do seu negócio para exibir aos clientes.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef0f3;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo Órbita (centralizado) -->
          <tr>
            <td style="padding:0 8px 20px 8px; text-align:center;">
              <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Símbolo Órbita" style="vertical-align:middle;">
                <path d="M8 13c0-3 1.6-5 3.6-5 2.9 0 4.9 5 7.8 5 2 0 3.6-2 3.6-5s-1.6-5-3.6-5c-2.9 0-4.9 5-7.8 5C9.6 8 8 10 8 13z" fill="none" stroke="#1877f2" stroke-width="2.4" transform="translate(-3 0)"/>
              </svg>
              <span style="font-size:22px; font-weight:800; letter-spacing:-0.5px; color:#1877f2; margin-left:6px; vertical-align:middle;">Órbita</span>
            </td>
          </tr>

          <!-- Cartão branco -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Ilustração SVG original: bloco de notas com lista + lápis -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:36px 24px 10px 24px; text-align:center;">
                    <svg width="200" height="180" viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bloco de notas com uma lista e um lápis">
                      <!-- sombra -->
                      <ellipse cx="96" cy="166" rx="66" ry="8" fill="#e4e8ee"/>
                      <!-- capa do bloco -->
                      <rect x="40" y="24" width="104" height="130" rx="10" fill="#1877f2"/>
                      <!-- página -->
                      <rect x="48" y="18" width="104" height="130" rx="10" fill="#ffffff" stroke="#d8dde5" stroke-width="2"/>
                      <!-- espiral do topo -->
                      <circle cx="68" cy="18" r="4" fill="#9fb6d6"/>
                      <circle cx="90" cy="18" r="4" fill="#9fb6d6"/>
                      <circle cx="112" cy="18" r="4" fill="#9fb6d6"/>
                      <circle cx="134" cy="18" r="4" fill="#9fb6d6"/>
                      <!-- item 1: check marcado -->
                      <rect x="62" y="44" width="16" height="16" rx="4" fill="#1877f2"/>
                      <path d="M66 52l3 3 5-6" stroke="#ffffff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                      <rect x="86" y="49" width="52" height="7" rx="3.5" fill="#c9d2de"/>
                      <!-- item 2: check marcado -->
                      <rect x="62" y="72" width="16" height="16" rx="4" fill="#1877f2"/>
                      <path d="M66 80l3 3 5-6" stroke="#ffffff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                      <rect x="86" y="77" width="44" height="7" rx="3.5" fill="#c9d2de"/>
                      <!-- item 3: vazio -->
                      <rect x="62" y="100" width="16" height="16" rx="4" fill="none" stroke="#c9d2de" stroke-width="2"/>
                      <rect x="86" y="105" width="50" height="7" rx="3.5" fill="#e0e6ee"/>
                      <!-- lápis -->
                      <g transform="rotate(42 150 120)">
                        <rect x="140" y="70" width="16" height="78" rx="3" fill="#f5c542"/>
                        <rect x="140" y="70" width="16" height="10" fill="#e8a33d"/>
                        <path d="M140 148l8 14 8-14z" fill="#f0ddc0"/>
                        <path d="M145 155l3 7 3-7z" fill="#3a3a3a"/>
                        <rect x="140" y="62" width="16" height="8" rx="3" fill="#f06a6a"/>
                      </g>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:14px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 20px 0; font-size:26px; font-weight:800; letter-spacing:-0.5px; color:#1c1e21; text-align:center;">Ajude a criar mais confiança com os clientes</h1>
                    <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6; color:#3a3f47;">Oi, {{nome_cliente}},</p>
                    <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#3a3f47;">Adicione informações como o nome e o e-mail do seu negócio. Esses dados serão exibidos para os clientes e podem ser exigidos pelo seu país ou região no futuro.</p>
                  </td>
                </tr>

                <!-- Botão largura total -->
                <tr>
                  <td class="px" style="padding:0 40px 4px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="background-color:#1877f2; border-radius:8px;">
                          <a href="{{url_comecar}}" target="_blank" style="display:block; width:100%; color:#ffffff; font-weight:700; font-size:16px; text-decoration:none; padding:15px 0; border-radius:8px; text-align:center;">Começar</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:30px 40px 36px 40px;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3f47;">Abraços,<br>Time Órbita</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px; line-height:1.6; color:#8a8f98;">
                Esta mensagem foi enviada para {{email_destino}}. Se não quiser mais receber estes e-mails da Órbita, <a href="{{url_unsubscribe}}" target="_blank" style="color:#1877f2; text-decoration:underline;">cancele a inscrição</a>.
              </p>
              <p style="margin:0; font-size:12px; color:#9aa0a8;">Órbita Tecnologia Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
