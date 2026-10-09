/**
 * Template: Boas-vindas — Datalis (plataforma de dashboards/análise de dados).
 * Marca fake. Visual minimalista tipográfico com ícone/logo SVG original
 * (um "D" com gráfico de barras minimalista). Sem imagens remotas.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "datalis-boas-vindas",
  slug: "datalis-boas-vindas",
  name: "Boas-vindas — Datalis (dados)",
  description:
    "E-mail de boas-vindas minimalista com guia de início rápido.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Boas-vindas à Datalis",
  preheader: "Preparamos um guia rápido para você começar com o pé direito.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Datalis",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à Datalis",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação." },
    { key: "url_guia", label: "URL — Guia de início rápido", description: "Link do botão “Ver o guia de início rápido”." },
    { key: "email_suporte", label: "E-mail de suporte", description: "E-mail de contato (ex.: suporte@datalis.com.br) usado em mailto." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
    { key: "url_preferencias", label: "URL — Preferências de inscrição", description: "Link “Preferências de inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Datalis</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#2563eb; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Preparamos um guia rápido para você começar com o pé direito.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:32px 16px 48px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo: ícone SVG original (um "D" com gráfico de barras minimalista) + wordmark -->
          <tr>
            <td class="px" style="padding:0 40px 32px 40px;">
              <span style="display:inline-block; vertical-align:middle;">
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Datalis">
                  <rect x="0" y="0" width="30" height="30" rx="7" fill="#1a1a1a"/>
                  <path d="M8 7h5.5a7.5 8 0 0 1 0 16H8z" fill="none" stroke="#ffffff" stroke-width="2.4"/>
                  <rect x="11" y="16" width="2.4" height="4.5" rx="1" fill="#ffffff"/>
                  <rect x="14.6" y="13" width="2.4" height="7.5" rx="1" fill="#ffffff"/>
                  <rect x="18.2" y="10" width="2.4" height="10.5" rx="1" fill="#ffffff"/>
                </svg>
              </span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1a1a1a; margin-left:10px; vertical-align:middle;">Datalis</span>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:0 40px 0 40px;">
              <h1 class="h1" style="margin:0 0 24px 0; font-size:30px; font-weight:800; letter-spacing:-0.6px; color:#1a1a1a;">Boas-vindas à Datalis</h1>
              <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#3f3f46;">Olá, {{nome_cliente}},</p>
              <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#3f3f46;">Obrigado por se cadastrar na Datalis!</p>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#3f3f46;">Preparamos um guia prático para ajudar você a colocar tudo para funcionar. Ele cobre o essencial. Dá uma olhada!</p>
              <a href="{{url_guia}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 28px; border-radius:8px;">Ver o guia de início rápido</a>
              <p style="margin:32px 0 0 0; font-size:15px; line-height:1.6; color:#3f3f46;">Se tiver qualquer dúvida ou feedback, é só responder a este e-mail ou escrever para <a href="mailto:{{email_suporte}}" style="color:#2563eb; text-decoration:underline;">{{email_suporte}}</a>.</p>
              <p style="margin:28px 0 0 0; font-size:15px; line-height:1.6; color:#3f3f46;">Abraços,<br>Time Datalis</p>
            </td>
          </tr>

          <!-- Divisor -->
          <tr>
            <td class="px" style="padding:36px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="border-top:1px solid #e5e7eb; font-size:0; line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:20px 40px 0 40px;">
              <p style="margin:0 0 8px 0; font-size:13px; line-height:1.6;">
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#6b7280; text-decoration:underline;">Cancelar inscrição</a>
                <span style="color:#9ca3af;"> &middot; </span>
                <a href="{{url_preferencias}}" target="_blank" style="color:#6b7280; text-decoration:underline;">Preferências de inscrição</a>
              </p>
              <p style="margin:0; font-size:12px; line-height:1.6; color:#9ca3af;">Datalis Software Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
