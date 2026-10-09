/**
 * Template: Boas-vindas — Budgetly (onboarding, tom bem-humorado).
 * Marca fake (design de referência "YNAB"). Fundo roxo, card branco, texto
 * com personalidade, caixa de destaque, próximos passos e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "budgetly-boas-vindas",
  slug: "budgetly-boas-vindas",
  name: "Boas-vindas — Budgetly (onboarding)",
  description:
    "E-mail de boas-vindas com tom pessoal e bem-humorado, caixa de destaque, próximos passos e rodapé com redes sociais.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Que bom ter você aqui!",
  preheader: "Boas-vindas à Budgetly — bora organizar a grana com leveza.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Budgetly",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Que bom ter você aqui!",
  },
  variables: [
    { key: "url_explore", label: "URL — Explorar", description: "Link de “explore a Budgetly” no texto." },
    { key: "url_guide", label: "URL — Guia", description: "Link do “Guia completo para começar”." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Atualizar preferências” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Budgetly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#5b5bf5; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#4b4be0; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#5b5bf5; font-family:'Inter',Arial,Helvetica,sans-serif; color:#333333;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#5b5bf5;">
    Boas-vindas à Budgetly — bora organizar a grana com leveza.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#5b5bf5;">
    <tr>
      <td align="center" style="padding:28px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 0 22px 0; text-align:center;">
              <span style="font-weight:800; font-size:26px; letter-spacing:1px; color:#ffffff;">Budgetly</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Ícone + título -->
                <tr>
                  <td style="padding:36px 0 0 0; text-align:center;">
                    <div style="font-size:48px; line-height:1;">🧠</div>
                    <h1 class="h1" style="margin:16px 0 0 0; font-size:30px; font-weight:800; color:#1f2a66;">Que bom ter você aqui!</h1>
                    <div style="width:140px; height:3px; background:#4b4be0; border-radius:3px; margin:14px auto 0 auto;"></div>
                  </td>
                </tr>

                <!-- Corpo -->
                <tr>
                  <td class="px" style="padding:28px 44px 0 44px; font-size:15px; line-height:1.65; color:#333333;">
                    <p style="margin:0 0 18px 0; font-weight:700; font-size:17px; color:#1f2a66;">Olá e boas-vindas à Budgetly!</p>
                    <p style="margin:0 0 18px 0;">Você provavelmente está aqui porque ouviu falar de como somos charmosos e engraçados, né?</p>
                    <p style="margin:0 0 18px 0;">Ah… a questão do dinheiro. Isso também.</p>
                    <p style="margin:0 0 18px 0;">É sempre: "Com a Budgetly, mudei minha vida, melhorei meus relacionamentos, acabei com boa parte do meu estresse diário e ajudei a transformar meus sonhos em realidade." Mas, pra ser justo, às vezes dizem que somos engraçados. Juro.</p>
                    <p style="margin:0 0 18px 0;">Enfim, chega de falar da gente. Vamos ao que importa: quitar o carro, reformar a cozinha ou o que mais seu coração desejar.</p>
                    <p style="margin:0 0 18px 0;">Antes de seguir, vamos deixar uma coisa clara: a Budgetly não é um app que resolve sua vida financeira magicamente quando você baixa. É que a percepção e a capacidade de decisão que você já tem (mesmo sem perceber) são mais poderosas e transformadoras do que qualquer recurso que a gente pudesse criar.</p>
                    <p style="margin:0;">O Método Budgetly te dá uma estrutura confiável e testada no tempo para canalizar seu conhecimento e sua criatividade num estilo de vida com gastos conscientes. O app oferece as ferramentas para fazer um plano e colocá-lo em prática.</p>
                  </td>
                </tr>

                <!-- Caixa de destaque -->
                <tr>
                  <td class="px" style="padding:24px 44px 0 44px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e1e2fb; border-radius:10px;">
                      <tr>
                        <td style="padding:24px; text-align:center;">
                          <div style="font-size:34px; line-height:1;">🔔</div>
                          <p style="margin:12px 0 0 0; font-size:15px; font-style:italic; font-weight:700; color:#1f2a66;">Mas não se engane: VOCÊ é o recurso mais transformador da Budgetly.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Continuação -->
                <tr>
                  <td class="px" style="padding:24px 44px 0 44px; font-size:15px; line-height:1.65; color:#333333;">
                    <p style="margin:0;">Nos próximos e-mails, vamos conhecer melhor o nosso recurso favorito (você!) e mostrar como a Budgetly pode ajudar você a amar o jeito como gasta.</p>
                  </td>
                </tr>

                <!-- Próximos passos -->
                <tr>
                  <td class="px" style="padding:24px 44px 0 44px; font-size:15px; line-height:1.65; color:#333333;">
                    <h2 style="margin:0 0 12px 0; font-size:17px; font-weight:700; color:#4b4be0;">Próximos passos</h2>
                    <p style="margin:0 0 18px 0;">No próximo e-mail, vamos falar sobre como fazer orçamento é chato. Também vamos te dar um guia online gratuito, então fique de olho nesse e-mail.</p>
                    <p style="margin:0 0 18px 0;">Até lá, <a href="{{url_explore}}" target="_blank" style="color:#4b4be0; font-weight:700; text-decoration:underline;">explore a Budgetly</a> no app ou no computador e conclua o assistente de configuração, que, infelizmente, não é uma entidade mágica de capa, mas ainda assim é bem útil.</p>
                    <p style="margin:0 0 18px 0;">Você também pode conferir nosso <a href="{{url_guide}}" target="_blank" style="color:#4b4be0; font-weight:700; text-decoration:underline;">Guia completo para começar</a> (mas não precisa — não estamos aqui para mandar em você).</p>
                    <p style="margin:0 0 18px 0;">A gente se vê amanhã!</p>
                    <p style="margin:0 0 18px 0;">Com gastos conscientes,</p>
                  </td>
                </tr>

                <!-- Assinatura -->
                <tr>
                  <td class="px" style="padding:0 44px 40px 44px;">
                    <span style="font-size:30px; vertical-align:middle;">🌳</span>
                    <span style="vertical-align:middle; font-weight:700; font-size:15px; color:#1f2a66; margin-left:8px;">Time Budgetly</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:28px 24px 10px 24px; text-align:center;">
              <div style="font-size:26px; margin-bottom:12px;">🌳</div>
              <p style="margin:0 0 14px 0; font-size:13px; color:#dcdcff;">
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">Facebook</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">X</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">Instagram</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">TikTok</a>·
                <a href="#" style="color:#ffffff; text-decoration:none; margin:0 6px;">YouTube</a>
              </p>
              <p style="margin:0 0 4px 0; font-size:12px; color:#dcdcff;">Copyright © 2025, Budgetly. Todos os direitos reservados.</p>
              <p style="margin:0 0 12px 0; font-size:12px; color:#dcdcff;">Av. Paulista, 1000<br>São Paulo, SP</p>
              <p style="margin:0; font-size:12px;">
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#dcdcff; text-decoration:underline;">Cancelar inscrição</a>
                ou <a href="{{url_preferencias}}" target="_blank" style="color:#dcdcff; text-decoration:underline;">Atualizar preferências</a>
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
