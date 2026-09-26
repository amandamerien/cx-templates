/**
 * Template: Luna — Assistente de sono infantil (Ninho).
 * Baseado no design do Figma (node 819:11570): tema noturno, hero ilustrado,
 * 3 cards de benefício e disclaimer. Ilustração como imagem hospedada
 * (placeholder); ícones dos cards representados por emoji.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "luna-assistente-sono",
  slug: "luna-assistente-sono",
  name: "Luna — Assistente de sono (Ninho)",
  description:
    "E-mail de apresentação de assistente de IA com tema noturno, cards de benefícios e aviso responsável.",
  category: "Institucional",
  segment: "Saúde",
  subject: "Pais cansados, podem respirar 🌙 conheça a Luma",
  preheader:
    "Sua assistente de sono infantil, 24h por dia, ao seu lado em todas as noites.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Novidade Luna — Ninho",
    categoria: "Marketing",
    subcategoria: "Lançamento",
    status: "Publicado",
    assunto: "Pais cansados, podem respirar 🌙 conheça a Luma",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado nos botões “Conversar com a Luma”.",
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
  <title>Pais cansados, podem respirar — Luna</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#091934; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .dyna { font-family:'DynaPuff','Comic Sans MS',cursive; font-weight:700; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .hero-title { font-size:38px !important; }
      .sec-title { font-size:34px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#091934; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#091934;">
    Sua assistente de sono infantil, 24h por dia, ao seu lado em todas as noites.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#091934;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#091934;">

          <!-- Menu -->
          <tr>
            <td style="padding:28px 45px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:15px; color:#ffffff;">para adultos</td>
                  <td style="text-align:center; font-size:24px; color:#8cb1e3;">&#10058;</td>
                  <td style="text-align:right; font-size:15px; color:#ffffff;">para crianças</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px" style="padding:0 24px; line-height:0;">
              <div class="ph" style="border:2px dashed rgba(140,177,227,0.5); border-radius:16px; padding:110px 24px; color:rgba(255,255,255,0.85);">
                <div style="font-size:30px;">🌙</div>
                <div style="margin-top:8px;">Ilustração: cena noturna (abajur/aconchego)</div>
              </div>
            </td>
          </tr>

          <!-- Título + intro -->
          <tr>
            <td class="px" style="padding:40px 46px 0 46px; text-align:center;">
              <h1 class="dyna hero-title" style="margin:0 0 24px 0; font-size:48px; line-height:1; color:#ffffff;">
                Pais cansados, podem respirar.
              </h1>
              <p style="margin:0 0 20px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Luma, nossa assistente de inteligência artificial, está disponível 24 horas por dia e
                foi treinada com centenas de conversas reais de famílias, estratégias comprovadas e
                conteúdos desenvolvidos por especialistas em sono infantil.
              </p>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                E pode ficar tranquila: nossas consultoras continuam disponíveis para oferecer um
                atendimento humano e personalizado. Mas, quando surgir uma dúvida no meio da noite, a
                Luma poderá ajudar você imediatamente.
              </p>
            </td>
          </tr>

          <!-- Botão 1 -->
          <tr>
            <td class="px" align="center" style="padding:28px 56px 56px 56px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:block; background-color:#ffffff; color:#091934; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-align:center; text-decoration:none; padding:22px 24px; border-radius:56px;">
                CONVERSAR COM A LUMA
              </a>
            </td>
          </tr>

          <!-- Seção cards -->
          <tr>
            <td class="px" style="padding:0 45px; text-align:center;">
              <h2 class="dyna sec-title" style="margin:0 0 24px 0; font-size:44px; line-height:1; color:#ffffff;">
                Ao seu lado em todas as noites
              </h2>
            </td>
          </tr>

          <!-- Card 1 -->
          <tr>
            <td class="px" style="padding:0 45px 24px 45px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:24px;">
                <tr><td style="padding:44px 32px; text-align:center;">
                  <div style="font-size:44px;">😴</div>
                  <p class="dyna" style="margin:20px 0 12px 0; font-size:26px; color:#091934;">Suporte 24 horas</p>
                  <p style="margin:0; font-size:16px; line-height:1.5; color:#334155;">
                    Luma está disponível para aquelas dúvidas das 2h da manhã, quando seu bebê
                    desperta novamente e você não pode esperar até o dia seguinte.
                  </p>
                </td></tr>
              </table>
            </td>
          </tr>

          <!-- Card 2 -->
          <tr>
            <td class="px" style="padding:0 45px 24px 45px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:24px;">
                <tr><td style="padding:44px 32px; text-align:center;">
                  <div style="font-size:44px;">🗓️</div>
                  <p class="dyna" style="margin:20px 0 12px 0; font-size:26px; color:#091934;">Treinada por especialistas</p>
                  <p style="margin:0; font-size:16px; line-height:1.5; color:#334155;">
                    Chega de depender de dicas aleatórias da internet. A Luma foi desenvolvida com
                    conteúdos e estratégias criados por profissionais de sono e desenvolvimento
                    infantil.
                  </p>
                </td></tr>
              </table>
            </td>
          </tr>

          <!-- Card 3 -->
          <tr>
            <td class="px" style="padding:0 45px 34px 45px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:24px;">
                <tr><td style="padding:44px 32px; text-align:center;">
                  <div style="font-size:44px;">🤝</div>
                  <p class="dyna" style="margin:20px 0 12px 0; font-size:26px; color:#091934;">Atendimento humano</p>
                  <p style="margin:0; font-size:16px; line-height:1.5; color:#334155;">
                    Nossas consultoras continuam disponíveis para oferecer acolhimento, contexto e
                    orientação personalizada de segunda a sexta, das 8h às 18h.
                  </p>
                </td></tr>
              </table>
            </td>
          </tr>

          <!-- Botão 2 -->
          <tr>
            <td class="px" align="center" style="padding:0 45px 34px 45px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:block; border:3px solid #8cb1e3; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:18px; text-align:center; text-decoration:none; padding:22px 24px; border-radius:56px;">
                CONVERSAR COM A LUMA
              </a>
            </td>
          </tr>

          <!-- Disclaimer -->
          <tr>
            <td class="px" style="padding:0 45px 56px 45px; text-align:center;">
              <p style="margin:0 0 14px 0; font-size:16px; line-height:1.5; color:#c7d2e6;">
                O atendimento Ninho 1:1, incluindo nossas consultoras e a assistente Luma, foi
                desenvolvido para oferecer orientações gerais sobre o sono infantil — não para
                substituir avaliação ou aconselhamento médico.
              </p>
              <p style="margin:0; font-size:16px; line-height:1.5; color:#c7d2e6;">
                Em caso de dúvidas sobre a saúde ou o desenvolvimento do seu bebê, procure o pediatra
                ou outro profissional de saúde qualificado.
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#ffffff; padding:34px 40px; text-align:center;">
              <div style="font-size:26px; color:#8cb1e3; margin-bottom:12px;">&#10058;</div>
              <p style="margin:0; font-size:15px; line-height:1.5; color:#091934;">
                © {{ano}} luna. Todos os direitos reservados.
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
