/**
 * Template: Boas-vindas — Baker Noir (padaria artesanal).
 * Marca fake (design de referência "Baker Bleu"). Fundo azul, logo serifado,
 * foto, texto monoespaçado centralizado e rodapé com redes.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "baker-noir-boas-vindas",
  slug: "baker-noir-boas-vindas",
  name: "Boas-vindas — Baker Noir (padaria)",
  description:
    "Primeiro e-mail de comunidade de uma padaria, com visual monocromático, foto e história da marca.",
  category: "Boas-vindas",
  segment: "Cafeteria",
  subject: "Pão para compartilhar — boas-vindas à Baker Noir",
  preheader: "Que bom ter você aqui. Este é o nosso primeiro e-mail para a comunidade.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Baker Noir",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Pão para compartilhar — boas-vindas à Baker Noir",
  },
  variables: [
    { key: "url_contato", label: "URL — Contato", description: "Link “Fale conosco” no rodapé." },
    { key: "url_privacy", label: "URL — Privacidade", description: "Link “Política de Privacidade” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Baker Noir</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#1a5fd0; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .serif { font-family:'Playfair Display','Georgia',serif; font-style:italic; }
    .mono { font-family:'Space Mono','Courier New',monospace; }
    a { color:#ffffff; }
    .ph { text-align:center; font-family:'Space Mono',monospace; font-size:13px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .logo { font-size:52px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#1a5fd0; font-family:'Space Mono',monospace; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#1a5fd0;">
    Que bom ter você aqui. Este é o nosso primeiro e-mail para a comunidade.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a5fd0;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#1a5fd0;">

          <!-- Logo -->
          <tr>
            <td style="padding:44px 24px 24px 24px; text-align:center;">
              <span class="serif logo" style="font-size:66px; font-weight:700; color:#ffffff;">Baker Noir</span>
            </td>
          </tr>

          <!-- Foto -->
          <tr>
            <td class="px" style="padding:0 40px; line-height:0;">
              <div class="ph" style="background:#15479e; padding:92px 24px; color:#aecbf2; border:1px solid #3b78d8;">
                <div style="font-size:26px;">🥖</div>
                <div style="margin-top:8px;">Foto: pães feitos à mão</div>
              </div>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:40px 48px 0 48px;">
              <p class="mono" style="margin:0 0 24px 0; font-size:12px; letter-spacing:3px; color:#cfe0f7;">BOAS-VINDAS</p>
              <h1 class="mono" style="margin:0 0 32px 0; font-size:30px; font-weight:700; letter-spacing:2px; color:#ffffff;">PÃO PARA COMPARTILHAR</h1>

              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">Que bom ter você aqui.</p>
              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">Este é o primeiro e-mail que enviamos à nossa comunidade. Você está recebendo porque escolheu ouvir da gente e acompanhar tudo o que acontece na Baker Noir.</p>
              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">Na Baker Noir, fazemos fermentação natural do jeito certo, com calma e à mão, todos os dias. Nossos pães de casca escura são a nossa marca, fresquinhos diariamente, além de confeitaria, cafés, sanduíches, salgados e edições limitadas em todas as nossas lojas.</p>
              <p class="mono" style="margin:0 0 22px 0; font-size:14px; line-height:1.9; color:#e6effb;">A Baker Noir começou em 2016 numa pequena loja. Uma padaria onde Mike e Mia queriam fazer pão de verdade, de longa fermentação, modelado à mão e cheio de sabor. A casca escura virou assinatura e ficou. Hoje você nos encontra em cinco bairros, mas o pão ainda é feito do mesmo jeito, com a mesma farinha, pelas mesmas mãos.</p>
              <p class="mono" style="margin:0; font-size:14px; line-height:1.9; color:#e6effb;">Amamos nossas comunidades e estamos animados para manter você por dentro do que vem por aí.</p>
            </td>
          </tr>

          <!-- Divisória -->
          <tr><td class="px" style="padding:40px 48px 0 48px;"><div style="border-top:1px solid #3b78d8; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:44px 48px 48px 48px;">
              <div style="width:46px; height:46px; background:#ffffff; border-radius:40% 40% 46% 46%; margin:0 auto 28px auto; text-align:center; line-height:46px;">
                <span style="color:#1a5fd0; font-size:20px;">▲</span>
              </div>
              <p class="mono" style="margin:0 0 20px 0; font-size:18px; letter-spacing:6px; color:#ffffff;">◎  f  in</p>
              <p class="mono" style="margin:0 0 20px 0; font-size:13px; color:#cfe0f7;">
                <a href="{{url_contato}}" target="_blank" style="color:#ffffff; text-decoration:none;">Fale conosco</a> |
                <a href="{{url_privacy}}" target="_blank" style="color:#ffffff; text-decoration:none;">Política de Privacidade</a>
              </p>
              <p class="mono" style="margin:0 0 6px 0; font-size:12px; color:#bcd2f2;">Não quer mais receber estes e-mails? <a href="{{url_unsubscribe}}" target="_blank" style="color:#ffffff; text-decoration:underline;">Cancelar inscrição</a></p>
              <p class="mono" style="margin:0; font-size:12px; line-height:1.6; color:#bcd2f2;">Baker Noir<br>Caixa Postal 2128, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
