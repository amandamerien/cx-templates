/**
 * Template: Duas formas de começar — Weblume (onboarding no-code).
 * Marca fake (design de referência "Webflow"). Header com login, hero, passos,
 * CTA, dois cards (ajuda/inspiração), redes e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "weblume-get-started",
  slug: "weblume-get-started",
  name: "Começar — Weblume (onboarding)",
  description:
    "E-mail de onboarding de produto com hero, passos para começar, CTA e cards de ajuda/inspiração.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Duas formas de começar na Weblume",
  preheader: "Dê vida à sua ideia sem escrever código.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Começar — Weblume",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Duas formas de começar na Weblume",
  },
  variables: [
    { key: "url_login", label: "URL — Entrar", description: "Link do “Entrar” no topo." },
    { key: "url_botao", label: "URL do botão", description: "Link de “Criar meu site” / “Começar do zero”." },
    { key: "url_template", label: "URL — Templates", description: "Link de “Escolher um template”." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Gerenciar inscrição”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Começar na Weblume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#4b5bf5; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .col { display:block !important; width:100% !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#111111;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Dê vida à sua ideia sem escrever código.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Header -->
          <tr>
            <td class="px" style="padding:12px 24px 24px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-weight:700; font-size:22px; color:#4b5bf5;">weblume</td>
                  <td style="text-align:right; font-size:14px; font-weight:600; color:#111111;"><a href="{{url_login}}" target="_blank" style="color:#111111; text-decoration:none;">Entrar</a></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px" style="padding:0 24px; line-height:0;">
              <div class="ph" style="border-radius:8px; background:linear-gradient(135deg,#ffb4a1,#ff8f7a); padding:120px 24px; color:#8a3a2c;">
                <div style="font-size:28px;">🎨</div>
                <div style="margin-top:8px;">Imagem: ilustração do produto</div>
              </div>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:36px 24px 0 24px;">
              <h1 class="h1" style="margin:0 0 18px 0; font-size:36px; font-weight:800; color:#111111;">Duas formas de começar</h1>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#333333;">Dê vida à sua ideia sem escrever código. Comece com uma tela em branco ou um template e use nossas ferramentas visuais para personalizar seu site.</p>

              <h2 style="margin:0 0 12px 0; font-size:20px; font-weight:700; color:#111111;">1. Comece do zero</h2>
              <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#333333;">Começar com um site em branco te dá total liberdade criativa. Explore o painel Adicionar (+) no Editor para todos os elementos que você precisa — de seções e botões a títulos e formulários. <a href="{{url_botao}}" target="_blank" style="color:#4b5bf5; text-decoration:none;">Começar do zero →</a></p>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.6; color:#333333;"><strong>Dica:</strong> confira os layouts prontos no painel Adicionar (+) para blocos que economizam tempo.</p>

              <h2 style="margin:0 0 12px 0; font-size:20px; font-weight:700; color:#111111;">2. Comece com um template</h2>
              <p style="margin:0 0 26px 0; font-size:16px; line-height:1.6; color:#333333;">Se precisar de um ponto de partida, os templates são o caminho. Escolha entre mais de 1.000 opções gratuitas e premium e deixe com a sua cara no Editor. <a href="{{url_template}}" target="_blank" style="color:#4b5bf5; text-decoration:none;">Escolher um template →</a></p>

              <a href="{{url_botao}}" target="_blank" style="display:inline-block; background-color:#4b5bf5; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:14px 22px; border-radius:6px;">Criar meu site →</a>
            </td>
          </tr>

          <!-- Cards -->
          <tr>
            <td class="px" style="padding:36px 24px 0 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="col" valign="top" width="50%" style="padding-right:8px;">
                    <div style="background:#4b5bf5; border-radius:8px; padding:28px; color:#ffffff;">
                      <p style="margin:0 0 10px 0; font-size:20px; font-weight:700;">Precisa de ajuda?</p>
                      <p style="margin:0; font-size:14px; line-height:1.55; color:#e6e8ff;">Encontre vídeos e aulas gratuitos (e divertidos) na Weblume University</p>
                    </div>
                  </td>
                  <td class="col" valign="top" width="50%" style="padding-left:8px;">
                    <div style="background:#111111; border-radius:8px; padding:28px; color:#ffffff;">
                      <p style="margin:0 0 10px 0; font-size:20px; font-weight:700;">Inspire-se</p>
                      <p style="margin:0; font-size:14px; line-height:1.55; color:#cccccc;">Descubra criações incríveis da comunidade em Feito na Weblume</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:32px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 16px 0; font-size:18px; letter-spacing:6px; color:#111111;">f  X  ◎  in  ▶  ●  ♪</p>
              <p style="margin:0 0 8px 0; font-size:13px; color:#555555;">Weblume Inc. · Av. Paulista, 1000, São Paulo, SP</p>
              <p style="margin:0; font-size:13px; font-weight:600;">
                <a href="{{url_preferencias}}" target="_blank" style="color:#111111; text-decoration:none;">Gerenciar inscrição</a> &nbsp;|&nbsp;
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#111111; text-decoration:none;">Cancelar inscrição</a>
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
