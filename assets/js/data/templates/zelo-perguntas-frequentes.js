/**
 * Template: Dúvidas frequentes — Zelo (telessaúde).
 * Marca fake (design de referência "Hims"). Mantém a identidade visual Zelo
 * (logo "zelo", cor terracota #c47a5a, rodapé escuro). Ilustrações/ícones SVG
 * originais inline: avatar do depoimento e miniaturas dos posts do blog.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "zelo-perguntas-frequentes",
  slug: "zelo-perguntas-frequentes",
  name: "Dúvidas frequentes — Zelo (telessaúde)",
  description:
    "E-mail educativo de telessaúde com perguntas frequentes, depoimento e indicações de conteúdo.",
  category: "Institucional",
  segment: "Saúde",
  subject: "Tem dúvidas? Tenha respostas.",
  preheader: "Entenda como funciona o atendimento on-line com profissionais licenciados.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Dúvidas frequentes — Zelo",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Tem dúvidas? Tenha respostas.",
  },
  variables: [
    { key: "url_comecar", label: "URL — Começar", description: "Botões “Começar agora”." },
    { key: "url_avaliacao", label: "URL — Avaliação", description: "Link “Preencha uma avaliação”." },
    { key: "url_blog1", label: "URL — Post 1", description: "Link do primeiro post do blog." },
    { key: "url_blog2", label: "URL — Post 2", description: "Link do segundo post do blog." },
    { key: "url_blog3", label: "URL — Post 3", description: "Link do terceiro post do blog." },
    { key: "url_privacidade", label: "URL — Privacidade", description: "Link “Política de Privacidade”." },
    { key: "url_termos", label: "URL — Termos", description: "Link “Termos de serviço”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tem dúvidas? Tenha respostas. — Zelo</title>
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
      .h1 { font-size:34px !important; }
      .col { display:block !important; width:100% !important; padding:0 0 18px 0 !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f3f1; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4f3f1;">
    Entenda como funciona o atendimento on-line com profissionais licenciados.&nbsp;&zwnj;&nbsp;&zwnj;
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

          <!-- Bloco superior: título em tom suave cinza-azulado -->
          <tr>
            <td class="px" style="padding:16px 40px 0 40px;">
              <div style="background:#dfe4e8; border-radius:18px; padding:44px 30px; text-align:center;">
                <h1 class="h1" style="margin:0 0 22px 0; font-size:40px; font-weight:700; line-height:1.12; letter-spacing:-1px; color:#1a1a1a;">Tem dúvidas?<br><span class="accent">Tenha respostas.</span></h1>
                <a href="{{url_comecar}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:14px 28px; border-radius:40px;">Começar agora</a>
              </div>
            </td>
          </tr>

          <!-- Seção: perguntas frequentes -->
          <tr>
            <td class="px" style="padding:36px 40px 0 40px;">
              <h2 style="margin:0 0 20px 0; font-size:24px; font-weight:700; letter-spacing:-0.5px; color:#1a1a1a;">Perguntas <span class="accent">frequentes</span></h2>

              <div style="padding:18px 0; border-top:1px solid #e4e1dd;">
                <p style="margin:0 0 8px 0; font-size:17px; font-weight:600; color:#1a1a1a;">O que é a Zelo?</p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#55524f;">A Zelo é uma plataforma 100% on-line que dá acesso a profissionais de saúde licenciados, que podem recomendar planos de tratamento personalizados, entregues com discrição na sua casa.</p>
              </div>

              <div style="padding:18px 0; border-top:1px solid #e4e1dd;">
                <p style="margin:0 0 8px 0; font-size:17px; font-weight:600; color:#1a1a1a;">Como a Zelo funciona?</p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#55524f;"><a href="{{url_avaliacao}}" target="_blank" style="color:#c47a5a; font-weight:600; text-decoration:underline;">Preencha uma avaliação</a> para ser conectado a um profissional, que vai analisar suas informações e avaliar as opções de tratamento.</p>
              </div>

              <div style="padding:18px 0; border-top:1px solid #e4e1dd; border-bottom:1px solid #e4e1dd;">
                <p style="margin:0 0 8px 0; font-size:17px; font-weight:600; color:#1a1a1a;">Quem são os profissionais da Zelo?</p>
                <p style="margin:0; font-size:15px; line-height:1.6; color:#55524f;">Temos um time de profissionais e médicos licenciados que oferecem cuidado seguro, de alta qualidade e baseado em evidências.</p>
              </div>
            </td>
          </tr>

          <!-- Depoimento -->
          <tr>
            <td class="px" style="padding:34px 40px 0 40px;">
              <div style="background:#ffffff; border-radius:18px; padding:30px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="top" style="width:74px; padding-right:16px;">
                      <!-- Avatar SVG original -->
                      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar do cliente">
                        <circle cx="30" cy="30" r="30" fill="#f0d9cb"/>
                        <circle cx="30" cy="24" r="11" fill="#c47a5a"/>
                        <path d="M11 54c0-11 8.5-19 19-19s19 8 19 19z" fill="#c47a5a"/>
                      </svg>
                    </td>
                    <td valign="top">
                      <p style="margin:0 0 12px 0; font-size:17px; line-height:1.55; font-weight:600; color:#1a1a1a;">“O atendimento foi prático e acolhedor. Me senti cuidado em cada etapa.”</p>
                      <p style="margin:0; font-size:14px; color:#55524f;">— Paulo, 38 · cliente Zelo desde 2024</p>
                    </td>
                  </tr>
                </table>
                <p style="margin:18px 0 0 0; font-size:12px; line-height:1.5; color:#8a8681;">Clientes que deram depoimento receberam um brinde.</p>
              </div>
            </td>
          </tr>

          <!-- Blog -->
          <tr>
            <td class="px" style="padding:36px 40px 0 40px;">
              <h2 style="margin:0 0 20px 0; font-size:22px; font-weight:700; letter-spacing:-0.5px; color:#1a1a1a;">Quer saber mais? <span class="accent">Veja no nosso blog:</span></h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Card 1 -->
                  <td class="col" valign="top" width="33.33%" style="padding:0 8px 0 0;">
                    <a href="{{url_blog1}}" target="_blank" style="text-decoration:none; color:#1a1a1a;">
                      <div style="background:#eef1f3; border-radius:12px; padding:14px; text-align:center;">
                        <svg width="100%" height="88" viewBox="0 0 160 88" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Consulta on-line">
                          <rect x="30" y="20" width="100" height="62" rx="6" fill="#ffffff"/>
                          <rect x="30" y="20" width="100" height="16" rx="6" fill="#c47a5a"/>
                          <circle cx="80" cy="54" r="13" fill="#f0d9cb"/>
                          <circle cx="80" cy="50" r="5" fill="#c47a5a"/>
                          <path d="M71 64c0-5 4-8 9-8s9 3 9 8z" fill="#c47a5a"/>
                          <rect x="40" y="26" width="8" height="4" rx="2" fill="#ffffff"/>
                        </svg>
                      </div>
                      <p style="margin:12px 2px 0 2px; font-size:14px; line-height:1.4; font-weight:600; color:#1a1a1a;">Como funciona uma consulta on-line</p>
                    </a>
                  </td>
                  <!-- Card 2 -->
                  <td class="col" valign="top" width="33.33%" style="padding:0 4px;">
                    <a href="{{url_blog2}}" target="_blank" style="text-decoration:none; color:#1a1a1a;">
                      <div style="background:#eef1f3; border-radius:12px; padding:14px; text-align:center;">
                        <svg width="100%" height="88" viewBox="0 0 160 88" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mais energia no dia a dia">
                          <circle cx="80" cy="44" r="30" fill="#ffffff"/>
                          <path d="M83 26l-16 22h11l-3 16 16-22h-11z" fill="#c47a5a"/>
                        </svg>
                      </div>
                      <p style="margin:12px 2px 0 2px; font-size:14px; line-height:1.4; font-weight:600; color:#1a1a1a;">Hábitos para mais energia no dia a dia</p>
                    </a>
                  </td>
                  <!-- Card 3 -->
                  <td class="col" valign="top" width="33.33%" style="padding:0 0 0 8px;">
                    <a href="{{url_blog3}}" target="_blank" style="text-decoration:none; color:#1a1a1a;">
                      <div style="background:#eef1f3; border-radius:12px; padding:14px; text-align:center;">
                        <svg width="100%" height="88" viewBox="0 0 160 88" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seu plano de tratamento">
                          <rect x="46" y="14" width="68" height="60" rx="6" fill="#ffffff"/>
                          <rect x="56" y="26" width="48" height="5" rx="2.5" fill="#dfe4e8"/>
                          <rect x="56" y="38" width="48" height="5" rx="2.5" fill="#dfe4e8"/>
                          <rect x="56" y="50" width="30" height="5" rx="2.5" fill="#dfe4e8"/>
                          <circle cx="98" cy="60" r="13" fill="#c47a5a"/>
                          <path d="M92 60l4 4 8-8" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <p style="margin:12px 2px 0 2px; font-size:14px; line-height:1.4; font-weight:600; color:#1a1a1a;">O que esperar do seu plano de tratamento</p>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA final -->
          <tr>
            <td class="px" style="padding:40px 40px 42px 40px; text-align:center;">
              <h2 style="margin:0 0 22px 0; font-size:28px; font-weight:700; line-height:1.2; letter-spacing:-0.5px; color:#1a1a1a;">Faça sua avaliação <span class="accent">on-line e gratuita</span></h2>
              <a href="{{url_comecar}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:14px 28px; border-radius:40px;">Começar agora</a>
            </td>
          </tr>

          <!-- Rodapé escuro -->
          <tr>
            <td style="background-color:#141414; padding:34px 40px; text-align:center;">
              <p style="margin:0 0 20px 0; font-size:11px; line-height:1.6; color:#9a9a9a;">Produtos com prescrição exigem uma consulta on-line com um profissional de saúde, que vai avaliar se a prescrição é apropriada. Restrições se aplicam.</p>
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
