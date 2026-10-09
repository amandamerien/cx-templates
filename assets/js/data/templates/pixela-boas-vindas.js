/**
 * Template: Boas-vindas — Pixela (plataforma criativa/de design).
 * Marca fake (design de referência "rawpixel"). Ilustração SVG original em
 * estilo doodle/line-art preto (pessoas comemorando com instrumento musical
 * e laptop/criatividade). Renderiza offline, sem imagens remotas.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "pixela-boas-vindas",
  slug: "pixela-boas-vindas",
  name: "Boas-vindas — Pixela (criativo)",
  description:
    "E-mail de boas-vindas de uma plataforma criativa, com ilustração doodle original e CTA para criar.",
  category: "Boas-vindas",
  segment: "Arte",
  subject: "Boas-vindas à comunidade Pixela",
  preheader: "Solte a criatividade na plataforma de design mais completa.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Pixela",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à comunidade Pixela",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação do título." },
    { key: "url_criar", label: "URL — Criar algo incrível", description: "Link do botão “Criar algo incrível”." },
    { key: "url_faq", label: "URL — Perguntas frequentes", description: "Link “Perguntas frequentes”." },
    { key: "url_discord", label: "URL — Canal no Discord", description: "Link “canal no Discord”." },
    { key: "email_contato", label: "E-mail de contato", description: "E-mail de contato exibido em mailto (ex.: contato@pixela.com.br)." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à comunidade Pixela</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f4f5f7; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#12b5a5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7; font-family:'Poppins',Arial,Helvetica,sans-serif; color:#15181d;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4f5f7;">
    Solte a criatividade na plataforma de design mais completa.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px; text-align:center;">
              <span style="display:inline-block; width:26px; height:26px; background:#12b5a5; border-radius:6px; vertical-align:middle;"></span>
              <span style="font-size:22px; font-weight:800; letter-spacing:-0.5px; color:#15181d; margin-left:8px; vertical-align:middle;">pixela</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Conteúdo topo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 40px 0 40px; text-align:center;">
                    <h1 class="h1" style="margin:0 0 18px 0; font-size:30px; font-weight:800; letter-spacing:-0.5px; color:#15181d;">Boas-vindas à comunidade Pixela, {{nome_cliente}}!</h1>
                    <p style="margin:0; font-size:16px; line-height:1.6; color:#444c57;">Solte sua criatividade com a plataforma de design mais poderosa do mundo. O único limite é a sua imaginação.</p>
                  </td>
                </tr>

                <!-- Ilustração SVG original (doodle / line-art preto) -->
                <tr>
                  <td style="padding:28px 24px 8px 24px; text-align:center;">
                    <svg width="100%" height="200" viewBox="0 0 440 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pessoas comemorando a criatividade com um violão e um laptop">
                      <g fill="none" stroke="#15181d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                        <!-- chão -->
                        <path d="M40 176h360"/>
                        <!-- confetes / faíscas de criatividade -->
                        <path d="M70 44l6 6M76 44l-6 6"/>
                        <path d="M372 40l7 7M379 40l-7 7"/>
                        <path d="M210 26v10M205 31h10"/>
                        <circle cx="120" cy="34" r="3.2"/>
                        <circle cx="330" cy="60" r="3.2"/>
                        <circle cx="400" cy="96" r="3.2"/>
                        <circle cx="46" cy="92" r="3.2"/>

                        <!-- Pessoa 1: tocando violão -->
                        <circle cx="120" cy="86" r="17"/>
                        <path d="M110 80c3 4 17 4 20 0"/>
                        <path d="M120 103v34"/>
                        <!-- braços segurando o violão -->
                        <path d="M120 112l-20 14M120 116l22 6"/>
                        <!-- pernas -->
                        <path d="M120 137l-13 39M120 137l13 39"/>
                        <!-- violão -->
                        <ellipse cx="128" cy="134" rx="20" ry="15" transform="rotate(22 128 134)"/>
                        <circle cx="126" cy="135" r="4.5"/>
                        <path d="M138 121l24-24"/>
                        <path d="M160 94l6 5"/>

                        <!-- Pessoa 2: braços erguidos comemorando -->
                        <circle cx="222" cy="78" r="18"/>
                        <path d="M212 72c3 4 17 4 20 0"/>
                        <path d="M222 96v36"/>
                        <path d="M222 104l-22-16M222 104l22-16"/>
                        <path d="M222 132l-14 44M222 132l14 44"/>

                        <!-- Pessoa 3: com laptop / criatividade -->
                        <circle cx="330" cy="92" r="17"/>
                        <path d="M320 86c3 4 17 4 20 0"/>
                        <path d="M330 109v30"/>
                        <path d="M330 116l-18 16M330 116l18 16"/>
                        <path d="M330 139l-12 37M330 139l12 37"/>
                        <!-- laptop -->
                        <rect x="300" y="146" width="60" height="30" rx="3"/>
                        <path d="M292 176h76"/>
                        <path d="M312 158h26M312 166h18"/>
                        <!-- raio de ideia sobre o laptop -->
                        <path d="M352 118l-9 14h7l-3 12 11-16h-7z"/>
                      </g>
                    </svg>
                  </td>
                </tr>

                <!-- Botão -->
                <tr>
                  <td class="px" style="padding:8px 40px 4px 40px; text-align:center;">
                    <a href="{{url_criar}}" target="_blank" style="display:inline-block; background-color:#15181d; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Criar algo incrível ⚡</a>
                  </td>
                </tr>

                <!-- Linha divisória -->
                <tr>
                  <td class="px" style="padding:30px 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top:1px solid #e8eaee; font-size:0; line-height:0;">&nbsp;</td></tr></table>
                  </td>
                </tr>

                <!-- Texto de apoio -->
                <tr>
                  <td class="px" style="padding:26px 40px 36px 40px;">
                    <p style="margin:0; font-size:15px; line-height:1.65; color:#444c57;">Agradecemos muito o seu apoio e mal podemos esperar para compartilhar os novos projetos que temos planejados. Veja nossas <a href="{{url_faq}}" target="_blank" style="color:#12b5a5; text-decoration:underline;">Perguntas frequentes</a>, entre na nossa comunidade no <a href="{{url_discord}}" target="_blank" style="color:#12b5a5; text-decoration:underline;">canal no Discord</a> ou fale com a gente em <a href="mailto:{{email_contato}}" style="color:#12b5a5; text-decoration:underline;">{{email_contato}}</a>.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Redes sociais + rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0 0 14px 0; font-size:13px; letter-spacing:3px; color:#15181d;">Instagram  ·  X  ·  Behance  ·  Dribbble</p>
              <p style="margin:0 0 6px 0; font-size:12px; color:#8a929c;">Copyright © 2026 Pixela Ltda. Todos os direitos reservados.</p>
              <p style="margin:0 0 6px 0; font-size:12px; color:#8a929c;">Escritório: Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:12px; color:#8a929c;">Você recebeu este e-mail porque se cadastrou. <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a929c; text-decoration:underline;">cancelar inscrição</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
