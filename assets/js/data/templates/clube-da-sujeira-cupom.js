/**
 * Template: Boas-vindas — Clube da Sujeira (cupom de desconto).
 * Reproduz o design do Figma (node 815:10011): header azul com logo,
 * corpo laranja, foto do produto, botão azul e rodapé com endereço.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "clube-da-sujeira-cupom",
  slug: "clube-da-sujeira-cupom",
  name: "Boas-vindas — Clube da Sujeira (cupom)",
  description:
    "E-mail de boas-vindas com cupom de desconto, header colorido e foto de produto, no estilo divertido do Clube da Sujeira.",
  category: "Boas-vindas",
  segment: "E-commerce",
  subject: "Bem-vindo ao Clube da Sujeira 🧺 seu cupom de 10% chegou",
  preheader:
    "O clube mais limpo para quem não tem medo de se sujar — use o cupom {{codigo_cupom}}.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Boas-vindas com Cupom — Clube da Sujeira",
    categoria: "Onboarding",
    subcategoria: "Promoção",
    status: "Publicado",
    assunto: "Bem-vindo ao Clube da Sujeira 🧺 seu cupom de 10% chegou",
  },
  variables: [
    {
      key: "codigo_cupom",
      label: "Código do cupom",
      description: "Cupom de desconto exibido no e-mail (ex.: LAVAE10).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Aplicar meu desconto”.",
    },
    {
      key: "nome_remetente",
      label: "Nome de quem assina",
      description: "Nome exibido na assinatura da mensagem.",
    },
    {
      key: "cargo_remetente",
      label: "Cargo de quem assina",
      description: "Cargo/função exibido abaixo do nome.",
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
  <title>Bem-vindo ao Clube da Sujeira</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#d64e1c; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .btn-a { font-size:20px !important; }
      .footer-logo { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#d64e1c; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <!-- Preheader (oculto) -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ec5d24;">
    O clube mais limpo para quem não tem medo de se sujar — use o cupom {{codigo_cupom}}.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#d64e1c;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ec5d24;">

          <!-- Header (banner com logo) -->
          <tr>
            <td align="center" style="background-color:#1b3b8a; padding:0; line-height:0;">
              <img src="https://i.pinimg.com/736x/b1/d5/ca/b1d5ca996b64cf8c8b5c51c01a96282f.jpg"
                   alt="Clube da Sujeira"
                   width="600"
                   style="display:block; width:100%; max-width:600px; height:auto; border:0;">
            </td>
          </tr>

          <!-- Saudação -->
          <tr>
            <td class="px" style="padding:40px 48px 0 48px;">
              <p style="margin:0; font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; font-size:32px; line-height:1; color:#ffffff;">
                OLÁ, ROUPA SUJA!
              </p>
            </td>
          </tr>

          <!-- Intro + cupom -->
          <tr>
            <td class="px" style="padding:20px 48px 0 48px;">
              <p style="margin:0 0 18px 0; font-size:17px; line-height:1.55; color:#ffffff;">
                Boas-vindas ao Clube da Sujeira — o clube mais limpo para quem não tem medo de se
                sujar.
              </p>
              <p style="margin:0; font-size:17px; line-height:1.55; color:#ffffff;">
                Para comemorar sua chegada, aqui está um cupom com 10% de desconto:
                <strong>{{codigo_cupom}}</strong>
              </p>
            </td>
          </tr>

          <!-- Imagem do produto -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px; line-height:0;">
              <img src="https://i.pinimg.com/736x/80/ba/d1/80bad16ba06ef1de57e058b1402464b0.jpg"
                   alt="Lava Roupas Concentrado — Clube da Sujeira"
                   width="504"
                   style="display:block; width:100%; max-width:504px; height:auto; border:0; border-radius:24px;">
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px;">
              <p style="margin:0 0 18px 0; font-size:17px; line-height:1.55; color:#ffffff;">
                Agora que você faz parte do nosso clube extremamente exclusivo*, será a primeira
                pessoa a conhecer novos produtos, ofertas fresquinhas, dicas para derrotar manchas
                e todas as novidades da marca.
              </p>
              <p style="margin:0; font-size:17px; line-height:1.55; color:#ffffff;">
                Temos grandes planos — todos relacionados à limpeza — e mal podemos esperar para
                levar você nessa jornada escorregadia e cheia de espuma. 🫧
              </p>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td class="px" style="padding:28px 48px 0 48px;">
              <a class="btn-a" href="{{url_botao}}" target="_blank"
                 style="display:block; background-color:#1b3b8a; color:#f4ff75; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:22px; letter-spacing:0.4px; text-align:center; text-decoration:none; padding:22px 24px;">
                APLICAR MEU DESCONTO
              </a>
            </td>
          </tr>

          <!-- Nota de rodapé + assinatura -->
          <tr>
            <td class="px" style="padding:24px 48px 40px 48px;">
              <p style="margin:0 0 20px 0; font-size:15px; line-height:1.5; color:#ffffff;">
                *Tudo bem, qualquer pessoa pode entrar. Mas você continua sendo especial.
              </p>
              <p style="margin:0; font-size:17px; line-height:1.4; color:#ffffff;">
                <strong>{{nome_remetente}}</strong><br>
                {{cargo_remetente}}
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#233d7f; padding:34px 40px; text-align:center;">
              <p class="footer-logo" style="margin:0 0 16px 0; font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; font-size:30px; line-height:1; color:#ffffff;">
                <span style="color:#f4ff75;">✦</span> CLUBE DA SUJEIRA <span style="color:#f4ff75;">✦</span>
              </p>
              <p style="margin:0 0 10px 0; font-size:14px; line-height:1.5; color:#ffffff;">
                Clube da Sujeira · Avenida das Laranjeiras, 210 · São Paulo, SP
              </p>
              <p style="margin:0; font-size:13px; line-height:1.5; color:#ffffff;">
                © {{ano}} Clube da Sujeira. Todos os direitos reservados.
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
