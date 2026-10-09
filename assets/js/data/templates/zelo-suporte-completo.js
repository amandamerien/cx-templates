/**
 * Template: Institucional/serviço — Zelo (telessaúde).
 * Marca fake (design de referência "Hims"). Ilustração SVG original (profissional
 * de saúde no laptop), lista de benefícios com checks e seção de como funciona.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "zelo-suporte-completo",
  slug: "zelo-suporte-completo",
  name: "Suporte completo — Zelo (telessaúde)",
  description:
    "E-mail institucional de um serviço de telessaúde, com ilustração original, benefícios em checklist e explicação do plano de tratamento.",
  category: "Institucional",
  segment: "Saúde",
  subject: "Suporte completo, confiança total",
  preheader: "Atendimento com profissionais licenciados em cada etapa do caminho.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Suporte completo — Zelo",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Suporte completo, confiança total",
  },
  variables: [
    { key: "url_tratamentos", label: "URL — Tratamentos", description: "Botão “Ver todos os tratamentos”." },
    { key: "url_saibamais", label: "URL — Saiba mais", description: "Botões “Saiba mais”." },
    { key: "url_comecar", label: "URL — Começar", description: "Botão “Começar agora”." },
    { key: "url_privacidade", label: "URL — Privacidade", description: "Link “Política de Privacidade”." },
    { key: "url_termos", label: "URL — Termos", description: "Link “Termos de serviço”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Suporte completo, confiança total — Zelo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f4f3f1; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1a1a1a; }
    .accent { color:#c47a5a; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:36px !important; }
      .col { display:block !important; width:100% !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f3f1; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4f3f1;">
    Atendimento com profissionais licenciados em cada etapa do caminho.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f3f1;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:28px 24px 10px 24px; text-align:center;">
              <span style="font-size:28px; font-weight:700; letter-spacing:-0.5px; color:#1a1a1a;">zelo</span>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px" style="padding:26px 40px 0 40px; text-align:center;">
              <h1 class="h1" style="margin:0 0 16px 0; font-size:42px; font-weight:700; line-height:1.1; letter-spacing:-1px; color:#1a1a1a;">Suporte completo,<br><span class="accent">confiança total</span></h1>
              <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#55524f;">Profissionais licenciados pela Zelo são a sua referência em conhecimento médico e cuidado personalizado, em cada etapa do caminho.</p>
              <a href="{{url_tratamentos}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:14px 26px; border-radius:40px; margin:0 4px 8px 4px;">Ver todos os tratamentos</a>
              <a href="{{url_saibamais}}" target="_blank" style="display:inline-block; background-color:#ffffff; color:#1a1a1a; font-weight:600; font-size:15px; text-decoration:none; padding:13px 26px; border-radius:40px; border:1px solid #d6d3cf; margin:0 4px 8px 4px;">Saiba mais</a>
            </td>
          </tr>

          <!-- Card: benefícios -->
          <tr>
            <td class="px" style="padding:34px 40px 0 40px;">
              <div style="background:#ffffff; border-radius:18px; padding:34px 30px;">
                <h2 style="margin:0 0 24px 0; font-size:26px; font-weight:700; text-align:center; letter-spacing:-0.5px; color:#1a1a1a;">Suporte de verdade, <span class="accent">resultados de verdade</span></h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="top" style="width:36px; padding:8px 0;"><span style="display:inline-block; width:22px; height:22px; border-radius:50%; background:#c47a5a; color:#ffffff; text-align:center; line-height:22px; font-size:13px;">✓</span></td>
                    <td valign="top" style="padding:8px 0; font-size:15px; line-height:1.55; color:#3a3734;">Prescrições feitas por profissionais licenciados, que analisam seu histórico e seus objetivos de saúde.</td>
                  </tr>
                  <tr>
                    <td valign="top" style="width:36px; padding:8px 0;"><span style="display:inline-block; width:22px; height:22px; border-radius:50%; background:#c47a5a; color:#ffffff; text-align:center; line-height:22px; font-size:13px;">✓</span></td>
                    <td valign="top" style="padding:8px 0; font-size:15px; line-height:1.55; color:#3a3734;">Mensagens 24/7 no app com o seu time de cuidado, para dúvidas grandes e pequenas.</td>
                  </tr>
                  <tr>
                    <td valign="top" style="width:36px; padding:8px 0;"><span style="display:inline-block; width:22px; height:22px; border-radius:50%; background:#c47a5a; color:#ffffff; text-align:center; line-height:22px; font-size:13px;">✓</span></td>
                    <td valign="top" style="padding:8px 0; font-size:15px; line-height:1.55; color:#3a3734;">Ajustes de medicação para ajudar a lidar com possíveis efeitos e potencializar resultados.</td>
                  </tr>
                  <tr>
                    <td valign="top" style="width:36px; padding:8px 0;"><span style="display:inline-block; width:22px; height:22px; border-radius:50%; background:#c47a5a; color:#ffffff; text-align:center; line-height:22px; font-size:13px;">✓</span></td>
                    <td valign="top" style="padding:8px 0; font-size:15px; line-height:1.55; color:#3a3734;">Guias e materiais no app para apoiar a sua jornada de saúde.</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Como funciona -->
          <tr>
            <td class="px" style="padding:30px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="col" valign="top" width="46%" style="padding-right:10px;">
                    <!-- Ilustração original: profissional no laptop -->
                    <div style="background:#c87d5c; border-radius:14px; padding:18px; text-align:center;">
                      <svg width="100%" height="150" viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Profissional de saúde analisando no laptop">
                        <rect x="40" y="120" width="150" height="8" rx="4" fill="#9c5c40"/>
                        <circle cx="104" cy="52" r="22" fill="#f0cbb4"/>
                        <path d="M86 50a18 18 0 0 1 36 0l-4-2c-6 3-22 3-28 0z" fill="#3a2a22"/>
                        <rect x="92" y="40" width="24" height="7" rx="3.5" fill="none" stroke="#2a2a2a" stroke-width="1.5"/>
                        <path d="M76 120c0-24 12-42 28-42s28 18 28 42z" fill="#ffffff"/>
                        <path d="M104 80v22M94 86l10 16 10-16" fill="none" stroke="#bcd3cf" stroke-width="3"/>
                        <rect x="118" y="104" width="54" height="34" rx="3" fill="#c9b79f"/>
                        <rect x="120" y="100" width="50" height="8" rx="2" fill="#8a7a63"/>
                        <rect x="40" y="110" width="40" height="26" rx="3" fill="#efe7da"/>
                      </svg>
                    </div>
                  </td>
                  <td class="col" valign="middle" width="54%" style="padding-left:10px;">
                    <h2 style="margin:16px 0 12px 0; font-size:26px; font-weight:700; line-height:1.15; letter-spacing:-0.5px; color:#1a1a1a;">Como montamos o seu <span class="accent">plano de tratamento</span></h2>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#55524f;">Um profissional licenciado analisa seu histórico, objetivos e necessidades para identificar qual tratamento é o melhor para você — sem achismo, só resultados.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA final -->
          <tr>
            <td class="px" style="padding:38px 40px 40px 40px; text-align:center;">
              <h2 style="margin:0 0 12px 0; font-size:28px; font-weight:700; letter-spacing:-0.5px; color:#1a1a1a;"><span class="accent">Assuma o controle</span> da sua saúde</h2>
              <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#55524f;">Faça a avaliação on-line e gratuita — começar é simples.</p>
              <a href="{{url_comecar}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:14px 28px; border-radius:40px; margin:0 4px 8px 4px;">Começar agora</a>
              <a href="{{url_saibamais}}" target="_blank" style="display:inline-block; background-color:#ffffff; color:#1a1a1a; font-weight:600; font-size:15px; text-decoration:none; padding:13px 26px; border-radius:40px; border:1px solid #d6d3cf; margin:0 4px 8px 4px;">Saiba mais</a>
            </td>
          </tr>

          <!-- Rodapé escuro -->
          <tr>
            <td style="background-color:#141414; padding:34px 40px; text-align:center;">
              <p style="margin:0 0 20px 0; font-size:11px; line-height:1.6; color:#9a9a9a;">Produtos com prescrição exigem uma consulta on-line com um profissional de saúde, que vai avaliar se a prescrição é apropriada. Restrições se aplicam. Consulte o site para detalhes completos e informações importantes de segurança.</p>
              <p style="margin:0 0 16px 0; font-size:20px; font-weight:700; color:#ffffff;">O seu eu do futuro agradece.</p>
              <p style="margin:0 0 16px 0; font-size:18px; letter-spacing:6px; color:#ffffff;">f  X  ◎  ♪</p>
              <p style="margin:0 0 8px 0; font-size:11px; color:#8a8a8a;">© 2026 Zelo Saúde Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:11px; color:#8a8a8a;">
                <a href="{{url_privacidade}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Política de Privacidade</a> |
                <a href="{{url_termos}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Termos de serviço</a> |
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Cancelar inscrição</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
