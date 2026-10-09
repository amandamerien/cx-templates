/**
 * Template: Boas-vindas — Pluma (onboarding editorial, tipografia serifada).
 * Marca fake (design de referência "Marker"). Reproduz o e-mail de boas-vindas
 * minimalista: logo serifado, texto pessoal com links, assinatura, P.S. e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "marker-boas-vindas",
  slug: "marker-boas-vindas",
  name: "Boas-vindas — Pluma (editorial)",
  description:
    "E-mail de boas-vindas minimalista e pessoal, com tipografia serifada, texto corrido, links e assinatura do time.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Boas-vindas à Pluma",
  preheader: "Obrigado por se inscrever na Pluma, nossa carta de amor a quem escreve.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Pluma",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à Pluma",
  },
  variables: [
    {
      key: "url_site",
      label: "URL do site",
      description: "Link usado na palavra “Pluma” ao longo do texto.",
    },
    {
      key: "email_contato",
      label: "E-mail de contato",
      description: "E-mail de feedback (ex.: oi@pluma.app).",
    },
    {
      key: "url_call",
      label: "URL para agendar call",
      description: "Link de “agendar uma call em vídeo”.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Pluma</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f7efec; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .serif { font-family:'Lora','Georgia','Times New Roman',serif; }
    a { color:#2b2b2b; text-decoration:underline; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f7efec; font-family:'Lora','Georgia',serif; color:#2b2b2b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f7efec;">
    Obrigado por se inscrever na Pluma, nossa carta de amor a quem escreve.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7efec;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff;">

          <!-- Cabeçalho: logo + marca -->
          <tr>
            <td class="px" style="padding:40px 48px 24px 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle" style="text-align:left;">
                    <span class="serif" style="font-size:26px; font-weight:700; color:#2b2b2b;">Pluma</span>
                  </td>
                  <td valign="middle" style="text-align:right; white-space:nowrap;">
                    <span style="display:inline-block; width:18px; height:26px; background:#3a3632; border-radius:46% 46% 50% 50%;"></span>
                    <span style="display:inline-block; width:18px; height:22px; background:#c06a52; border-radius:50%; margin-left:-6px;"></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td class="px serif" style="padding:8px 48px 0 48px; font-size:16px; line-height:1.65; color:#2b2b2b;">
              <p style="margin:0 0 20px 0;">Boas-vindas!</p>
              <p style="margin:0 0 20px 0;">
                Obrigado por se inscrever na <a href="{{url_site}}" target="_blank">Pluma</a>, nossa carta
                de amor a quem escreve.
              </p>
              <p style="margin:0 0 20px 0;">
                Criamos a Pluma para ser um espaço de escrita simples e intuitivo, cheio de recursos
                para ajudar você a escrever melhor de verdade.
              </p>
              <p style="margin:0 0 20px 0;">
                Você é uma das primeiras pessoas a usar a Pluma. Então, obrigado! Nosso pequeno time
                está trabalhando duro para realizar grandes planos para o que vem a seguir.
              </p>
              <p style="margin:0 0 20px 0;">
                Embora a gente construa a Pluma com muito cuidado, esta é uma versão inicial da
                ferramenta e você pode encontrar bugs (eca!) ou coisas que ainda não fazem muito
                sentido. Se isso acontecer, por favor, nos avise.
              </p>
              <p style="margin:0 0 20px 0;">
                Compartilhe o que achou da Pluma (feedback, ideias, recursos dos sonhos) com a gente em
                <a href="mailto:{{email_contato}}">{{email_contato}}</a>. Você também pode agendar uma
                call rápida em vídeo <a href="{{url_call}}" target="_blank">aqui</a>. Vamos adorar ouvir
                você.
              </p>
              <p style="margin:0 0 20px 0;">Boa escrita!</p>
              <p style="margin:0 0 20px 0;">— Jon, Ryan e o time da Pluma</p>
              <p style="margin:0 0 8px 0;">
                P.S. Na próxima semana, vamos enviar alguns e-mails com dicas para você aproveitar a
                Pluma ao máximo. Depois disso, aparecemos de vez em quando com novidades conforme
                evoluímos.
              </p>
            </td>
          </tr>

          <!-- Divisória -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px;">
              <div style="border-top:1px solid #ece6e2; line-height:0; font-size:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px serif" style="padding:20px 48px 44px 48px; font-size:13px; line-height:1.6; color:#9a938d;">
              Você está recebendo esta mensagem porque é usuário da
              <a href="{{url_site}}" target="_blank" style="color:#9a938d;">Pluma</a>.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
