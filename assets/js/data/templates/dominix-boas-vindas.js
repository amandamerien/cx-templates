/**
 * Template: Boas-vindas — Dominix (registro de domínios e hospedagem).
 * Marca fake (design de referência "OnlyDomains"). Ilustrações e ícones SVG
 * originais inline (pessoa com balões .com/.net, globo, envelope, site), 3 passos
 * e tour pela plataforma. Bloco de avaliações genérico com estrelas (sem marca).
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "dominix-boas-vindas",
  slug: "dominix-boas-vindas",
  name: "Boas-vindas — Dominix (domínios)",
  description:
    "E-mail de boas-vindas de um registrador de domínios, com ilustração original, 3 passos e tour pela plataforma.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Boas-vindas à Dominix",
  preheader: "Tudo para colocar suas ideias online — a começar pelo domínio.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Dominix",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à Dominix",
  },
  variables: [
    { key: "url_navegador", label: "URL — Ver no navegador", description: "Link “Ver no navegador” no topo." },
    { key: "url_registrar", label: "URL — Registrar o seu", description: "Link do passo 1 “Registrar o seu >>”." },
    { key: "url_email_gratis", label: "URL — Testar grátis", description: "Link do passo 2 “Testar grátis >>”." },
    { key: "url_wordpress", label: "URL — Vamos de WordPress", description: "Link do passo 3 “Vamos de WordPress >>”." },
    { key: "url_painel", label: "URL — Visitar agora", description: "Botão do bloco “O painel da Dominix”." },
    { key: "url_ajuda", label: "URL — Saiba mais", description: "Botão do bloco “Base de Conhecimento”." },
    { key: "url_contato", label: "URL — Fale conosco", description: "Botão do bloco “Precisa de ajuda?”." },
    { key: "url_blog", label: "URL — Ler mais", description: "Botão do bloco “Nosso blog”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Dominix</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#fdf1ec; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#ff6b57; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#fdf1ec; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#fdf1ec;">
    Tudo para colocar suas ideias online — a começar pelo domínio.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf1ec;">
    <tr>
      <td align="center" style="padding:24px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Topo: logo + ver no navegador -->
          <tr>
            <td style="padding:0 8px 16px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle" style="text-align:left;">
                    <span style="display:inline-block; font-size:20px; font-weight:800; line-height:0.95; letter-spacing:0.5px; color:#111111;">DOMI<br>NIX</span>
                  </td>
                  <td valign="middle" style="text-align:right;">
                    <a href="{{url_navegador}}" target="_blank" style="color:#9a7f76; font-size:12px; text-decoration:underline;">Ver no navegador</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero creme com ilustração original: pessoa com balões .com/.net -->
          <tr>
            <td style="background-color:#fbe7dd; border-radius:16px; padding:28px 24px; text-align:center;">
              <svg width="100%" height="200" viewBox="0 0 440 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pessoa pensando em nomes de domínio com balões .com e .net">
                <!-- balão .com -->
                <g>
                  <rect x="70" y="30" width="96" height="42" rx="21" fill="#ffffff" stroke="#ff6b57" stroke-width="2"/>
                  <path d="M104 72l-10 16 24-12z" fill="#ffffff" stroke="#ff6b57" stroke-width="2"/>
                  <text x="118" y="58" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="20" font-weight="800" fill="#ff6b57">.com</text>
                </g>
                <!-- balão .net -->
                <g>
                  <rect x="286" y="46" width="88" height="40" rx="20" fill="#111111"/>
                  <path d="M336 86l12 14-24-8z" fill="#111111"/>
                  <text x="330" y="72" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="800" fill="#ffffff">.net</text>
                </g>
                <!-- balãozinho .site -->
                <circle cx="205" cy="34" r="6" fill="#ffffff" stroke="#ff6b57" stroke-width="2"/>
                <circle cx="222" cy="24" r="9" fill="#ffffff" stroke="#ff6b57" stroke-width="2"/>
                <text x="222" y="28" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="8" font-weight="700" fill="#ff6b57">.site</text>
                <!-- pessoa -->
                <circle cx="220" cy="118" r="30" fill="#f7b79f"/>
                <path d="M190 118a30 30 0 0 1 60 0z" fill="#3a2a24"/>
                <circle cx="210" cy="116" r="3.5" fill="#1a1a1a"/>
                <circle cx="230" cy="116" r="3.5" fill="#1a1a1a"/>
                <path d="M210 130c6 6 14 6 20 0" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                <!-- corpo -->
                <path d="M176 200c0-28 20-46 44-46s44 18 44 46z" fill="#ff6b57"/>
                <rect x="206" y="152" width="28" height="18" rx="6" fill="#f7b79f"/>
                <!-- mão no queixo (pensando) -->
                <circle cx="248" cy="150" r="8" fill="#f7b79f"/>
              </svg>
            </td>
          </tr>

          <!-- Cartão: mensagem de boas-vindas -->
          <tr><td style="height:14px; line-height:14px; font-size:0;">&nbsp;</td></tr>
          <tr>
            <td style="background-color:#ffffff; border-radius:16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:32px 40px 30px 40px;">
                    <h1 class="h1" style="margin:0 0 20px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#111111;">Oi, tudo bem?</h1>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#444444;">Parabéns por começar algo novo e dar os primeiros passos para colocar suas ideias no ar. Estamos aqui para ajudar no que precisar.</p>
                    <p style="margin:0; font-size:16px; line-height:1.6; color:#444444;">Isso significa domínios (claro), mas também cada parte de transformar as ideias num negócio completo. Ou blog. Ou portfólio. O que vier, você tem o nosso apoio.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Cartão: 3 passos -->
          <tr><td style="height:14px; line-height:14px; font-size:0;">&nbsp;</td></tr>
          <tr>
            <td style="background-color:#ffffff; border-radius:16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:32px 40px 10px 40px;">
                    <h2 style="margin:0; font-size:21px; font-weight:800; letter-spacing:-0.3px; color:#111111;">3 passos para começar sua jornada online</h2>
                  </td>
                </tr>

                <!-- Passo 1: Ache o nome perfeito (ícone globo) -->
                <tr>
                  <td class="px" style="padding:20px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px;">
                          <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Globo">
                            <circle cx="26" cy="26" r="24" fill="#fdf1ec"/>
                            <circle cx="26" cy="26" r="16" fill="none" stroke="#ff6b57" stroke-width="2.5"/>
                            <ellipse cx="26" cy="26" rx="7" ry="16" fill="none" stroke="#ff6b57" stroke-width="2.5"/>
                            <path d="M11 20h30M11 32h30" stroke="#ff6b57" stroke-width="2.5"/>
                          </svg>
                        </td>
                        <td valign="top" style="padding-left:6px;">
                          <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#111111;">Ache o nome perfeito</p>
                          <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#555555;">Nomes são difíceis, mas essenciais. Dedique um tempo para achar o certo. Tudo começa por aí.</p>
                          <a href="{{url_registrar}}" target="_blank" style="font-size:14px; font-weight:700; color:#ff6b57; text-decoration:none;">Registrar o seu &gt;&gt;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Passo 2: E-mail personalizado (ícone envelope) -->
                <tr>
                  <td class="px" style="padding:22px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px;">
                          <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Envelope">
                            <circle cx="26" cy="26" r="24" fill="#fdf1ec"/>
                            <rect x="12" y="17" width="28" height="19" rx="3" fill="#ffffff" stroke="#ff6b57" stroke-width="2.5"/>
                            <path d="M13 19l13 10 13-10" fill="none" stroke="#ff6b57" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </td>
                        <td valign="top" style="padding-left:6px;">
                          <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#111111;">Crie um e-mail personalizado</p>
                          <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#555555;">É o que separa amadores de profissionais. Hora de aposentar aquele e-mail genérico e usar ola@suamarca.com.</p>
                          <a href="{{url_email_gratis}}" target="_blank" style="font-size:14px; font-weight:700; color:#ff6b57; text-decoration:none;">Testar grátis &gt;&gt;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Passo 3: Publique um site (ícone site/janela) -->
                <tr>
                  <td class="px" style="padding:22px 40px 34px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="width:72px;">
                          <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Janela de site">
                            <circle cx="26" cy="26" r="24" fill="#fdf1ec"/>
                            <rect x="12" y="15" width="28" height="22" rx="3" fill="#ffffff" stroke="#ff6b57" stroke-width="2.5"/>
                            <path d="M12 22h28" stroke="#ff6b57" stroke-width="2.5"/>
                            <circle cx="17" cy="18.5" r="1.4" fill="#ff6b57"/>
                            <circle cx="21" cy="18.5" r="1.4" fill="#ff6b57"/>
                            <rect x="16" y="26" width="12" height="3" rx="1.5" fill="#ff6b57"/>
                            <rect x="16" y="31" width="20" height="3" rx="1.5" fill="#f7b79f"/>
                          </svg>
                        </td>
                        <td valign="top" style="padding-left:6px;">
                          <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#111111;">Publique um site</p>
                          <p style="margin:0 0 10px 0; font-size:15px; line-height:1.55; color:#555555;">Use nossa hospedagem WordPress ou o construtor por arrastar e soltar para tirar sua ideia do papel.</p>
                          <a href="{{url_wordpress}}" target="_blank" style="font-size:14px; font-weight:700; color:#ff6b57; text-decoration:none;">Vamos de WordPress &gt;&gt;</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Cartão: Deixa a gente te mostrar -->
          <tr><td style="height:14px; line-height:14px; font-size:0;">&nbsp;</td></tr>
          <tr>
            <td style="background-color:#ffffff; border-radius:16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:32px 40px 6px 40px;">
                    <h2 style="margin:0; font-size:21px; font-weight:800; letter-spacing:-0.3px; color:#111111;">Deixa a gente te mostrar</h2>
                  </td>
                </tr>

                <!-- Linha 1: Painel -->
                <tr>
                  <td class="px" style="padding:22px 40px 0 40px;">
                    <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#ff6b57;">O painel da Dominix</p>
                    <p style="margin:0 0 14px 0; font-size:15px; line-height:1.55; color:#555555;">Onde você faz login, gerencia domínios, hospedagem, configurações e pagamentos.</p>
                    <a href="{{url_painel}}" target="_blank" style="display:inline-block; background-color:#ff6b57; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:11px 22px; border-radius:40px;">Visitar agora</a>
                  </td>
                </tr>

                <!-- Linha 2: Base de Conhecimento -->
                <tr>
                  <td class="px" style="padding:24px 40px 0 40px;">
                    <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#ff6b57;">Nossa Base de Conhecimento</p>
                    <p style="margin:0 0 14px 0; font-size:15px; line-height:1.55; color:#555555;">Construir um site pela primeira vez pode ser desafiador. Respondemos dúvidas como “Como redireciono meu domínio?”.</p>
                    <a href="{{url_ajuda}}" target="_blank" style="display:inline-block; background-color:#ff6b57; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:11px 22px; border-radius:40px;">Saiba mais</a>
                  </td>
                </tr>

                <!-- Linha 3: Precisa de ajuda? -->
                <tr>
                  <td class="px" style="padding:24px 40px 0 40px;">
                    <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#ff6b57;">Precisa de ajuda?</p>
                    <p style="margin:0 0 14px 0; font-size:15px; line-height:1.55; color:#555555;">Nosso time de sucesso do cliente está a um telefonema (ou chat) de distância, 24/5, de segunda a sexta.</p>
                    <a href="{{url_contato}}" target="_blank" style="display:inline-block; background-color:#ff6b57; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:11px 22px; border-radius:40px;">Fale conosco</a>
                  </td>
                </tr>

                <!-- Linha 4: Nosso blog -->
                <tr>
                  <td class="px" style="padding:24px 40px 32px 40px;">
                    <p style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:#ff6b57;">Nosso blog</p>
                    <p style="margin:0 0 14px 0; font-size:15px; line-height:1.55; color:#555555;">Nosso time escreve bons conteúdos para ajudar você a montar um site e um negócio online. Dois artigos novos por mês.</p>
                    <a href="{{url_blog}}" target="_blank" style="display:inline-block; background-color:#ff6b57; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:11px 22px; border-radius:40px;">Ler mais</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Despedida -->
          <tr>
            <td style="padding:28px 24px 10px 24px; text-align:center;">
              <p style="margin:0; font-size:16px; line-height:1.6; color:#555555;">Mais alguma coisa? Você sabe onde nos encontrar ;)</p>
            </td>
          </tr>

          <!-- Rodapé preto -->
          <tr><td style="height:12px; line-height:12px; font-size:0;">&nbsp;</td></tr>
          <tr>
            <td style="background-color:#111111; border-radius:16px; padding:30px 32px; text-align:center;">

              <!-- logo rodapé -->
              <p style="margin:0 0 18px 0; font-size:18px; font-weight:800; line-height:0.95; letter-spacing:0.5px; color:#ffffff;">DOMINIX</p>

              <!-- redes sociais (ícones SVG simples) -->
              <p style="margin:0 0 20px 0;">
                <a href="#" target="_blank" style="text-decoration:none; margin:0 6px;"><span style="display:inline-block; width:30px; height:30px; line-height:30px; border-radius:50%; background:#2a2a2a; color:#ffffff; font-size:13px; font-weight:700;">in</span></a>
                <a href="#" target="_blank" style="text-decoration:none; margin:0 6px;"><span style="display:inline-block; width:30px; height:30px; line-height:30px; border-radius:50%; background:#2a2a2a; color:#ffffff; font-size:13px; font-weight:700;">X</span></a>
                <a href="#" target="_blank" style="text-decoration:none; margin:0 6px;"><span style="display:inline-block; width:30px; height:30px; line-height:30px; border-radius:50%; background:#2a2a2a; color:#ffffff; font-size:13px; font-weight:700;">f</span></a>
                <a href="#" target="_blank" style="text-decoration:none; margin:0 6px;"><span style="display:inline-block; width:30px; height:30px; line-height:30px; border-radius:50%; background:#2a2a2a; color:#ffffff; font-size:13px; font-weight:700;">◎</span></a>
              </p>

              <!-- bloco de avaliações genérico (estrelas) -->
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto 20px auto;">
                <tr>
                  <td style="padding:12px 18px; background:#1d1d1d; border-radius:10px; text-align:center;">
                    <svg width="110" height="20" viewBox="0 0 110 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nota 4,5 de 5 estrelas">
                      <defs>
                        <polygon id="st" points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7"/>
                        <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="50%" stop-color="#ffc24b"/>
                          <stop offset="50%" stop-color="#4a4a4a"/>
                        </linearGradient>
                      </defs>
                      <use href="#st" x="0" fill="#ffc24b"/>
                      <use href="#st" x="22" fill="#ffc24b"/>
                      <use href="#st" x="44" fill="#ffc24b"/>
                      <use href="#st" x="66" fill="#ffc24b"/>
                      <use href="#st" x="88" fill="url(#half)"/>
                    </svg>
                    <p style="margin:8px 0 0 0; font-size:13px; color:#cccccc;">Nota 4,5 · 3.102 avaliações</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 10px 0; font-size:12px; line-height:1.6; color:#999999;">Dominix, Caixa Postal 110, São Paulo, SP</p>
              <p style="margin:0; font-size:12px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#ff6b57; text-decoration:underline;">Cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
