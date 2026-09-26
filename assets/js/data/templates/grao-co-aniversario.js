/**
 * Template: Aniversário — Grão & Co. (brinde/bebida gratuita).
 * Reproduz o design do Figma (node 815:10109): header verde com título grande,
 * seções em creme, botão pílula e rodapé. As 3 fotos (com molduras ilustradas)
 * entram como imagens hospedadas — enquanto não há URL, exibimos um placeholder.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "grao-co-aniversario",
  slug: "grao-co-aniversario",
  name: "Aniversário — Grão & Co.",
  description:
    "E-mail de aniversário com brinde de bebida gratuita, seções de destaque e visual ilustrado da Grão & Co.",
  category: "Aniversário",
  segment: "Cafeteria",
  subject: "Um brinde a você 🎉 sua bebida é por nossa conta",
  preheader:
    "Feliz aniversário! Sua bebida artesanal gratuita está esperando por você.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Aniversário — Grão & Co.",
    categoria: "Relacionamento",
    subcategoria: "Campanha sazonal",
    status: "Publicado",
    assunto: "Um brinde a você 🎉 sua bebida é por nossa conta",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome exibido no título (ex.: UM BRINDE A VOCÊ, ANA!).",
    },
    {
      key: "data_limite",
      label: "Data limite do benefício",
      description: "Prazo para usar a bebida gratuita (ex.: 28/07).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Escolher minha bebida”.",
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
  <title>Um brinde a você</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Enriqueta:wght@700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#02452f; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anton { font-family:'Anton','Arial Narrow',Arial,sans-serif; font-weight:400; text-transform:uppercase; }
    .serif { font-family:'Enriqueta','Georgia',serif; font-weight:700; }
    .hero-title { font-size:52px; line-height:1; letter-spacing:-1px; }
    .ph {
      border-radius:20px;
      text-align:center;
      font-family:'Inter',Arial,sans-serif;
      font-size:14px;
      line-height:1.5;
    }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:34px !important; }
      .sec-title { font-size:32px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#02452f; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <!-- Preheader (oculto) -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#025d3d;">
    Feliz aniversário! Sua bebida artesanal gratuita está esperando por você.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#02452f;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#025d3d;">

          <!-- Cabeçalho: logo + título -->
          <tr>
            <td class="px" style="padding:48px 45px 8px 45px; text-align:center;">
              <p class="serif" style="margin:0 0 18px 0; font-size:38px; color:#ffffff;">Grão &amp; Co.</p>
              <h1 class="anton hero-title" style="margin:0; color:#ffffff;">
                Um brinde a você, {{nome_cliente}}!
              </h1>
            </td>
          </tr>

          <!-- Foto 1 (hero, com moldura ilustrada) -->
          <tr>
            <td class="px" style="padding:28px 45px 0 45px;">
              <div class="ph" data-img="hero" style="border:2px dashed rgba(85,255,199,0.6); padding:72px 24px; color:rgba(255,255,255,0.9);">
                <div style="font-size:30px;">📷</div>
                <div style="margin-top:8px;">Foto: pessoa com a bebida artesanal<br><span style="opacity:0.7;">(imagem com moldura ilustrada)</span></div>
              </div>
            </td>
          </tr>

          <!-- Texto do benefício -->
          <tr>
            <td class="px" style="padding:24px 45px 0 45px; text-align:center;">
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Venha aproveitar sua bebida artesanal gratuita até {{data_limite}}. Use o benefício
                no checkout do aplicativo ou informe ao barista ao fazer seu pedido presencialmente.
              </p>
            </td>
          </tr>

          <!-- Botão (pílula branca) -->
          <tr>
            <td class="px" align="center" style="padding:24px 45px 48px 45px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#ffffff; color:#025d3d; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:17px; letter-spacing:0.4px; text-decoration:none; padding:20px 40px; border-radius:56px;">
                ESCOLHER MINHA BEBIDA
              </a>
            </td>
          </tr>

          <!-- Divisória de papel rasgado -->
          <tr>
            <td style="background-color:#025d3d; line-height:0; font-size:0;">
              <svg width="100%" height="26" viewBox="0 0 600 26" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0,26 L0,15 L30,8 L60,17 L90,7 L120,16 L150,9 L180,18 L210,7 L240,16 L270,10 L300,19 L330,8 L360,17 L390,7 L420,15 L450,9 L480,18 L510,8 L540,16 L570,10 L600,15 L600,26 Z" fill="#f4f2ec"/>
              </svg>
            </td>
          </tr>

          <!-- Seção creme -->
          <tr>
            <td style="background-color:#f4f2ec; padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Aniversariantes -->
                <tr>
                  <td class="px" style="padding:40px 45px 0 45px; text-align:center;">
                    <h2 class="anton sec-title" style="margin:0 0 12px 0; font-size:40px; line-height:1; letter-spacing:-1px; color:#025d3d;">
                      Aniversariantes de julho
                    </h2>
                    <p style="margin:0; font-size:16px; line-height:1.5; color:#025d3d;">
                      Estamos celebrando todos os integrantes do Grão &amp; Co. Recompensas que
                      compartilham o seu mês de aniversário — além de algumas tendências especiais
                      que conectam vocês.
                    </p>
                  </td>
                </tr>

                <!-- Foto 2 -->
                <tr>
                  <td class="px" style="padding:24px 45px 0 45px;">
                    <div class="ph" data-img="foto2" style="border:2px dashed rgba(2,93,61,0.5); padding:64px 24px; color:#025d3d;">
                      <div style="font-size:30px;">📷</div>
                      <div style="margin-top:8px;">Foto: pessoas com bebidas<br><span style="opacity:0.7;">(imagem com moldura rabiscada)</span></div>
                    </div>
                  </td>
                </tr>

                <!-- Curiosidade -->
                <tr>
                  <td class="px" style="padding:40px 45px 0 45px; text-align:center;">
                    <h2 class="anton sec-title" style="margin:0 0 12px 0; font-size:40px; line-height:1; letter-spacing:-1px; color:#025d3d;">
                      Curiosidade do grupo
                    </h2>
                    <p style="margin:0; font-size:16px; line-height:1.5; color:#025d3d;">
                      Você está muito bem acompanhada! Mais de 3.431.874 membros da nossa comunidade
                      também fazem aniversário em julho.
                    </p>
                  </td>
                </tr>

                <!-- Foto 3 -->
                <tr>
                  <td class="px" style="padding:24px 45px 48px 45px;">
                    <div class="ph" data-img="foto3" style="border:2px dashed rgba(2,93,61,0.5); padding:64px 24px; color:#025d3d;">
                      <div style="font-size:30px;">📷</div>
                      <div style="margin-top:8px;">Foto: bebida especial<br><span style="opacity:0.7;">(imagem com doodles)</span></div>
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#025d3d; padding:34px 40px; text-align:center;">
              <p class="serif" style="margin:0 0 14px 0; font-size:34px; color:#ffffff;">Grão &amp; Co.</p>
              <p style="margin:0 0 10px 0; font-size:14px; line-height:1.5; color:#ffffff;">
                Grão &amp; Co. · Avenida das Laranjeiras, 210 · São Paulo, SP
              </p>
              <p style="margin:0; font-size:13px; line-height:1.5; color:#ffffff;">
                © {{ano}} Grão &amp; Co. Todos os direitos reservados.
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
