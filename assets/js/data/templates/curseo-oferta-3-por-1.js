/**
 * Template: Oferta 3 por 1 — Curseo (plataforma para criar e vender cursos online).
 * Marca fake (design de referência promocional). Hero SVG original com gradiente
 * azul-marinho, faixa de destaque verde-limão e fine print promocional.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "curseo-oferta-3-por-1",
  slug: "curseo-oferta-3-por-1",
  name: "Oferta 3 por 1 — Curseo",
  description:
    "E-mail promocional de oferta por tempo limitado, com faixa de destaque, hero original e termos.",
  category: "Promoção",
  segment: "Educação",
  subject: "A maior oferta do ano: 3 meses pelo preço de 1",
  preheader: "Compre um mês em qualquer plano e ganhe dois.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Oferta 3 por 1 — Curseo",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "A maior oferta do ano: 3 meses pelo preço de 1",
  },
  variables: [
    { key: "url_oferta", label: "URL — Ver a oferta", description: "Link dos botões “Ver a oferta” e “Garantir oferta”." },
    { key: "url_termos", label: "URL — Termos de Uso", description: "Link “Termos de Uso” na letra miúda." },
    { key: "url_uso_justo", label: "URL — Política de Uso Justo", description: "Link “Política de Uso Justo” na letra miúda." },
    { key: "url_preferencias", label: "URL — Gerenciar preferências", description: "Link “Gerenciar preferências” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>A maior oferta do ano: 3 meses pelo preço de 1</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef1f6; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1a2a52; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef1f6; font-family:'Inter',Arial,Helvetica,sans-serif; color:#13203a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef1f6;">
    Compre um mês em qualquer plano e ganhe dois.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef1f6;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Faixa de destaque -->
          <tr>
            <td style="background-color:#d4f03c; border-radius:10px; padding:12px 20px; text-align:center;">
              <span style="font-size:13px; font-weight:800; letter-spacing:3px; color:#13203a; text-transform:uppercase;">A maior oferta do ano</span>
            </td>
          </tr>

          <!-- Logo -->
          <tr>
            <td style="padding:22px 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; background:#1a2a52; border-radius:7px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#1a2a52; margin-left:8px; vertical-align:middle;">curseo</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Hero com gradiente e ilustração SVG original -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1a2a52; background:linear-gradient(135deg,#1a2a52 0%,#2d4a7a 100%); padding:0;">
                    <svg width="100%" height="300" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3 meses para crescer pelo preço de 1">
                      <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stop-color="#1a2a52"/>
                          <stop offset="1" stop-color="#2d4a7a"/>
                        </linearGradient>
                      </defs>
                      <rect width="600" height="300" fill="url(#bg)"/>
                      <!-- formas decorativas próprias -->
                      <circle cx="520" cy="60" r="120" fill="#ffffff" opacity="0.05"/>
                      <circle cx="70" cy="250" r="90" fill="#d4f03c" opacity="0.08"/>
                      <path d="M0 230c120 40 360 40 600-10v80H0z" fill="#ffffff" opacity="0.04"/>
                      <!-- três "cartões de curso" ilustrando 3 por 1 -->
                      <g transform="translate(360 54)">
                        <rect x="0" y="22" width="150" height="96" rx="12" fill="#ffffff" opacity="0.14"/>
                        <rect x="20" y="11" width="150" height="96" rx="12" fill="#ffffff" opacity="0.22"/>
                        <rect x="40" y="0" width="150" height="96" rx="12" fill="#ffffff"/>
                        <rect x="56" y="16" width="118" height="46" rx="8" fill="#2d4a7a"/>
                        <path d="M104 30l22 13-22 13z" fill="#d4f03c"/>
                        <rect x="56" y="72" width="80" height="7" rx="3" fill="#1a2a52"/>
                        <rect x="56" y="84" width="58" height="6" rx="3" fill="#c3cbdd"/>
                      </g>
                      <!-- título serifado branco -->
                      <text x="40" y="110" font-family="'Playfair Display',Georgia,serif" font-size="38" font-weight="700" fill="#ffffff">3 meses para</text>
                      <text x="40" y="154" font-family="'Playfair Display',Georgia,serif" font-size="38" font-weight="700" fill="#ffffff">crescer.</text>
                      <text x="40" y="198" font-family="'Playfair Display',Georgia,serif" font-size="38" font-weight="700" fill="#d4f03c">Um terço do preço.</text>
                      <!-- botão -->
                      <rect x="40" y="226" width="168" height="48" rx="24" fill="#e9ec5a"/>
                      <text x="124" y="256" text-anchor="middle" font-family="'Inter',Arial,sans-serif" font-size="16" font-weight="700" fill="#13203a">Ver a oferta</text>
                    </svg>
                  </td>
                </tr>
                <!-- botão clicável real sobre o hero (acessibilidade/fallback) -->
                <tr>
                  <td style="background:#1a2a52; padding:0 0 24px 0; text-align:left;">
                    <div style="padding:0 40px;">
                      <a href="{{url_oferta}}" target="_blank" style="display:inline-block; background-color:#e9ec5a; color:#13203a; font-weight:700; font-size:15px; text-decoration:none; padding:14px 30px; border-radius:40px;">Ver a oferta</a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <p style="margin:0 0 22px 0; font-size:20px; line-height:1.4; color:#13203a;">A conta é simples: <strong style="color:#1a2a52;">Compre um mês em qualquer plano. Ganhe dois.</strong></p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#3a4663;">Por tempo limitado, você garante 3 meses de Curseo pelo preço de 1 — além de uma call de onboarding 1:1 e 30 dias de recursos pro para lançar rápido.</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.6; color:#3a4663;">Em três meses você pode ter seu primeiro curso no ar, sua audiência inscrita e o negócio rodando com automações.</p>
                    <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#3a4663;">É só aproveitar a oferta.</p>
                    <a href="{{url_oferta}}" target="_blank" style="display:inline-block; background-color:#e9ec5a; color:#13203a; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Garantir minha oferta 3 por 1</a>
                  </td>
                </tr>

                <!-- Destaque do prazo -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color:#f3f8dd; border-left:4px solid #d4f03c; border-radius:8px; padding:16px 20px;">
                          <p style="margin:0; font-size:15px; font-weight:700; line-height:1.5; color:#13203a;">Corra! A oferta termina na segunda, 1 de dezembro.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Letra miúda -->
                <tr>
                  <td class="px" style="padding:28px 40px 36px 40px;">
                    <p style="margin:0; font-size:11px; line-height:1.6; color:#8a93a8;">
                      Oferta válida somente para novos assinantes da Curseo, por tempo limitado e enquanto durar a promoção. A condição “3 meses pelo preço de 1” aplica-se à primeira contratação de qualquer plano elegível; após o período promocional, a assinatura é renovada automaticamente pelo preço padrão vigente, salvo cancelamento antes da renovação. Não cumulativa com outras promoções, descontos ou cupons, e intransferível. A Curseo pode alterar ou encerrar esta oferta a qualquer momento. Consulte os
                      <a href="{{url_termos}}" target="_blank" style="color:#1a2a52; text-decoration:underline;">Termos de Uso</a>
                      e a
                      <a href="{{url_uso_justo}}" target="_blank" style="color:#1a2a52; text-decoration:underline;">Política de Uso Justo</a>.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 10px 0;">
                <span style="display:inline-block; width:22px; height:22px; background:#1a2a52; border-radius:6px; vertical-align:middle;"></span>
                <span style="font-size:17px; font-weight:800; letter-spacing:-0.5px; color:#1a2a52; margin-left:7px; vertical-align:middle;">curseo</span>
              </p>
              <p style="margin:0 0 8px 0; font-size:18px; letter-spacing:6px; color:#1a2a52;">in  X  ◎  ▶</p>
              <p style="margin:0 0 8px 0; font-size:13px;">
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#1a2a52; text-decoration:underline;">Cancelar inscrição</a>
                &nbsp;·&nbsp;
                <a href="{{url_preferencias}}" target="_blank" style="color:#1a2a52; text-decoration:underline;">Gerenciar preferências</a>
              </p>
              <p style="margin:0; font-size:12px; color:#8a93a8;">Copyright © 2026 Curseo Ltda. Todos os direitos reservados.<br>Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
