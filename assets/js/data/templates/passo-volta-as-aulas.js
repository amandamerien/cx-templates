/**
 * Template: Volta às aulas — PASSO (calçados infantis).
 * Baseado no design do Figma (node 817:10643): menu superior, header roxo,
 * seção teal, 3 imagens e botões em pílula. Fotos como imagens hospedadas
 * (placeholders enquanto não há URL).
 *
 * Obs.: leftovers do design (botão "Escolher minha bebida" e endereço
 * "Clube da Sujeira") foram ajustados para o contexto PASSO.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "passo-volta-as-aulas",
  slug: "passo-volta-as-aulas",
  name: "Volta às aulas — PASSO (calçados infantis)",
  description:
    "E-mail de volta às aulas com menu de categorias, header ilustrado, seções de produtos e botões de ação.",
  category: "Promoção",
  segment: "E-commerce",
  subject: "Nota 10 no primeiro dia: calçados para a volta às aulas 🎒",
  preheader: "Conforto para aprender, brincar e repetir tudo amanhã.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Volta às Aulas — PASSO",
    categoria: "Marketing",
    subcategoria: "Campanha sazonal",
    status: "Publicado",
    assunto: "Nota 10 no primeiro dia: calçados para a volta às aulas 🎒",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado nos botões de ação.",
    },
    {
      key: "ano",
      label: "Ano",
      description: "Ano exibido no rodapé (direitos reservados).",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Volta às aulas — PASSO</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=DynaPuff:wght@400;700&family=Enriqueta:wght@700&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#523a86; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anton { font-family:'Anton','Arial Narrow',Arial,sans-serif; font-weight:400; text-transform:uppercase; }
    .dyna { font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; }
    .serif { font-family:'Enriqueta','Georgia',serif; font-weight:700; }
    .ph { border-radius:16px; text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .nav-a { font-size:14px !important; }
      .hero-title { font-size:38px !important; }
      .sec-title { font-size:32px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#523a86; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#684bab;">
    Conforto para aprender, brincar e repetir tudo amanhã.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#523a86;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#684bab;">

          <!-- Menu -->
          <tr>
            <td style="padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="nav-a" width="33.33%" style="background-color:#59a9b5; padding:24px 8px; text-align:center; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:16px; text-transform:uppercase; color:#ffffff; border-right:1px solid #ffffff;">Calçados</td>
                  <td class="nav-a" width="33.33%" style="background-color:#59a9b5; padding:24px 8px; text-align:center; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:16px; text-transform:uppercase; color:#ffffff; border-right:1px solid #ffffff;">Infantil</td>
                  <td class="nav-a" width="33.33%" style="background-color:#59a9b5; padding:24px 8px; text-align:center; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:16px; text-transform:uppercase; color:#ffffff;">Promoções</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="px" style="padding:48px 45px 0 45px; text-align:center;">
              <p class="serif" style="margin:0 0 16px 0; font-size:40px; color:#ffffff;">PAS <span style="color:#21bfbf;">⌣</span> SO</p>
              <p style="margin:0 0 8px 0; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:15px; text-transform:uppercase; letter-spacing:1px; color:#21bfbf;">
                Checklist de volta às aulas
              </p>
              <h1 class="dyna hero-title" style="margin:0 0 12px 0; font-size:46px; line-height:1; color:#ffffff; text-transform:uppercase;">
                Nota 10 no primeiro dia
              </h1>
              <p style="margin:0; font-size:16px; line-height:1.5; color:#ffffff;">
                Calçados que entenderam a tarefa: conforto para aprender, brincar e repetir tudo
                amanhã.
              </p>
            </td>
          </tr>

          <!-- Imagem 1 -->
          <tr>
            <td style="padding:31px 0 0 0; line-height:0;">
              <div class="ph" style="margin:0 24px; border:2px dashed rgba(255,255,255,0.5); padding:80px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">👟</div>
                <div style="margin-top:8px;">Foto: criança com o calçado (com doodles)</div>
              </div>
            </td>
          </tr>

          <!-- Botão 1 -->
          <tr>
            <td align="center" style="padding:31px 45px 24px 45px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#ffffff; color:#684bab; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:17px; text-decoration:none; padding:20px 40px; border-radius:56px;">
                ESCOLHER MEUS CALÇADOS
              </a>
            </td>
          </tr>

          <!-- Divisória -->
          <tr>
            <td style="background-color:#684bab; line-height:0; font-size:0;">
              <svg width="100%" height="26" viewBox="0 0 600 26" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0,26 L0,15 L30,8 L60,17 L90,7 L120,16 L150,9 L180,18 L210,7 L240,16 L270,10 L300,19 L330,8 L360,17 L390,7 L420,15 L450,9 L480,18 L510,8 L540,16 L570,10 L600,15 L600,26 Z" fill="#1596a3"/>
              </svg>
            </td>
          </tr>

          <!-- Seção teal -->
          <tr>
            <td style="background-color:#1596a3; padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:40px 34px 0 34px; text-align:center;">
                    <p style="margin:0 0 10px 0; font-family:'Inter',Arial,sans-serif; font-weight:600; font-size:15px; text-transform:uppercase; letter-spacing:1px; color:#f4ff75;">
                      Pares nota 10
                    </p>
                    <h2 class="anton sec-title" style="margin:0 0 12px 0; font-size:40px; line-height:1; letter-spacing:-1px; color:#ffffff;">
                      Tênis testado para acompanhar a rotina
                    </h2>
                    <p style="margin:0; font-size:16px; line-height:1.5; color:#ffffff;">
                      Do caminho até a escola às brincadeiras do recreio: conforto, leveza e segurança
                      em cada passo.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="px" style="padding:34px 34px 0 34px; line-height:0;">
                    <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); padding:72px 24px; color:rgba(255,255,255,0.9);">
                      <div style="font-size:30px;">👟</div>
                      <div style="margin-top:8px;">Foto: tênis infantil</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:34px 34px 0 34px;">
                    <a href="{{url_botao}}" target="_blank"
                       style="display:inline-block; border:3px solid #ffffff; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                      VER TÊNIS INFANTIS
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px" style="padding:34px 34px 0 34px; line-height:0;">
                    <div class="ph" style="border:2px dashed rgba(255,255,255,0.6); padding:72px 24px; color:rgba(255,255,255,0.9);">
                      <div style="font-size:30px;">🎒</div>
                      <div style="margin-top:8px;">Foto: acessórios escolares</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:34px 34px 48px 34px;">
                    <a href="{{url_botao}}" target="_blank"
                       style="display:inline-block; border:3px solid #ffffff; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                      COMPRAR ACESSÓRIOS
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#684bab; padding:44px 40px; text-align:center;">
              <p class="serif" style="margin:0 0 14px 0; font-size:34px; color:#ffffff;">PAS <span style="color:#21bfbf;">⌣</span> SO</p>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#ffffff;">
                PASSO · Avenida das Laranjeiras, 210 · São Paulo, SP
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#ffffff;">
                © {{ano}} PASSO. Todos os direitos reservados.
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
