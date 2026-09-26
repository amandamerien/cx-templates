/**
 * Template: Boas-vindas — "Chegamos trazendo presentes" (Laços).
 * Reproduz o design do Figma (node 815:9932): header festivo com confetes,
 * corpo em creme, botão plum e rodapé com o logo "Laços".
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "lacos-boas-vindas-presentes",
  slug: "boas-vindas-presentes",
  name: "Boas-vindas — Chegamos trazendo presentes",
  description:
    "E-mail de boas-vindas festivo apresentando o Calendário de Celebrações, com header colorido e presente para a equipe.",
  category: "Boas-vindas",
  segment: "Presentes corporativos",
  subject: "Chegamos trazendo presentes 🎁",
  preheader:
    "Um presente para cuidar da cultura da sua equipe: o Calendário de Celebrações Laços.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Presente Corporativo",
    categoria: "Marketing",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Chegamos trazendo presentes 🎁",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Acessar o calendário”.",
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
  <title>Chegamos trazendo presentes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#edeae1; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .btn-a { font-size:20px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#edeae1; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <!-- Preheader (oculto) -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#edeae1;">
    Um presente para cuidar da cultura da sua equipe: o Calendário de Celebrações Laços.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#edeae1;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#feffeb; border-radius:6px; overflow:hidden;">

          <!-- Header festivo (imagem hospedada) -->
          <tr>
            <td align="center" style="background-color:#431a3b; padding:0; line-height:0;">
              <img src="https://i.pinimg.com/736x/70/9c/8d/709c8db04f86c7ef03a33f91616ed614.jpg"
                   alt="Chegamos trazendo presentes"
                   width="600"
                   style="display:block; width:100%; max-width:600px; height:auto; border:0;">
            </td>
          </tr>

          <!-- Saudação -->
          <tr>
            <td class="px" style="padding:36px 56px 0 56px;">
              <p style="margin:0; font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; font-size:24px; color:#111111;">
                Olá, pessoal!
              </p>
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td class="px" style="padding:20px 56px 0 56px;">
              <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                Ao construir uma equipe baseada em confiança, é importante garantir que todas as
                pessoas se sintam vistas e valorizadas.
              </p>
              <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                Existem muitas formas de fazer isso como líder: adaptar uma reunião em respeito a
                uma celebração religiosa, enviar um presente para alguém que acabou de ter um filho
                ou reconhecer uma conquista profissional. Uma cultura verdadeiramente inclusiva é
                construída todos os dias.
              </p>
              <p style="margin:0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                Queremos tornar esse cuidado mais simples para você. Por isso, criamos o
                <strong>Calendário de Celebrações Laços</strong>, uma ferramenta gratuita para
                acompanhar datas importantes, reconhecer diferentes culturas e celebrar os momentos
                especiais da sua equipe.
              </p>
            </td>
          </tr>

          <!-- Lista -->
          <tr>
            <td class="px" style="padding:24px 56px 0 56px;">
              <p style="margin:0 0 12px 0; font-size:18px; font-weight:600; color:#111111;">
                O que você encontrará:
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Calendário atualizado ao longo do ano</td></tr>
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Datas organizadas por categorias</td></tr>
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Celebrações culturais e religiosas</td></tr>
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Conquistas e momentos profissionais</td></tr>
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Datas leves e divertidas para engajar a equipe</td></tr>
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Filtros para encontrar rapidamente o que procura</td></tr>
                <tr><td style="padding:6px 0; font-size:18px; line-height:1.4; color:#1a1a1a;">•&nbsp;&nbsp;Acesso totalmente gratuito</td></tr>
              </table>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td class="px" style="padding:28px 56px 0 56px;">
              <a class="btn-a" href="{{url_botao}}" target="_blank"
                 style="display:block; background-color:#431a3b; color:#f4ff75; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:22px; letter-spacing:0.4px; text-align:center; text-decoration:none; padding:22px 24px;">
                ACESSAR O CALENDÁRIO
              </a>
            </td>
          </tr>

          <!-- Fecho -->
          <tr>
            <td class="px" style="padding:28px 56px 0 56px;">
              <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                Agora queremos saber como você celebra as pessoas da sua equipe. Envie fotos ou
                vídeos de alguma comemoração especial e compartilhe suas ideias com a gente.
              </p>
              <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                Da nossa equipe para a sua,
              </p>
              <p style="margin:0; font-size:18px; line-height:1.4; color:#1a1a1a;">
                <strong>{{nome_remetente}}</strong><br>
                {{cargo_remetente}}
              </p>
            </td>
          </tr>

          <!-- Espaço antes do rodapé -->
          <tr><td style="height:40px; line-height:40px; font-size:0;">&nbsp;</td></tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#431a3b; padding:34px 56px; text-align:center;">
              <p style="margin:0 0 12px 0; font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; font-size:30px; color:#f3c67a;">
                Laços
              </p>
              <p style="margin:0; font-size:13px; line-height:1.5; color:#ffffff;">
                © {{ano}} Laços Presentes Corporativos.<br>
                Todos os direitos reservados.
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
