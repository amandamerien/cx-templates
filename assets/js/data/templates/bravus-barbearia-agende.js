/**
 * Template: Bravus Barbearia — Agende seu corte.
 * Baseado no design do Figma (node 813:9580): tema escuro com detalhes dourados,
 * card com foto, horário, CTA de agendamento e avaliação. Foto como placeholder.
 *
 * Obs.: "tutores satisfeitos" (leftover) ajustado para "clientes satisfeitos".
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "bravus-barbearia-agende",
  slug: "bravus-barbearia-agende",
  name: "Bravus Barbearia — Agende seu corte",
  description:
    "E-mail de agendamento para barbearia com visual escuro e dourado, foto, horário de funcionamento e avaliação.",
  category: "Agendamento",
  segment: "Barbearia",
  subject: "Seu corte está a um clique 💈",
  preheader: "Cortes a partir de R$ 35 — agende seu horário na Bravus Barbearia.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Agende seu Corte — Bravus",
    categoria: "Agendamento",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Seu corte está a um clique 💈",
  },
  variables: [
    {
      key: "valor",
      label: "Valor a partir de",
      description: "Preço exibido no destaque (ex.: R$ 35,00).",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Agendar horário”.",
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
  <title>Agende seu corte — Bravus Barbearia</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Angkor&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#1e1e1e; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .display { font-family:'Angkor','Rockwell','Georgia',serif; font-weight:400; text-transform:uppercase; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .brand { font-size:26px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#1e1e1e; font-family:'Inter',Arial,Helvetica,sans-serif; color:#d6d6d6;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#1e1e1e;">
    Cortes a partir de R$ 35 — agende seu horário na Bravus Barbearia.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1e1e1e;">
    <tr>
      <td align="center" style="padding:35px 33px;">
        <table role="presentation" class="container" width="615" cellpadding="0" cellspacing="0" style="width:615px; max-width:615px; border:3px solid #f3c67a;">
          <tr>
            <td style="padding:48px 34px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <!-- Título -->
                <tr>
                  <td style="padding:0 0 40px 0; text-align:center;">
                    <span class="display brand" style="font-size:34px; color:#f3c67a;">Bravus Barbearia</span>
                  </td>
                </tr>

                <!-- Card -->
                <tr>
                  <td style="background-color:#232323; border:2px solid #f3c67a; padding:34px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="line-height:0; padding:0 0 28px 0;">
                          <div class="ph" style="border-radius:12px; background:#111111; padding:88px 24px; color:#8a8a8a;">
                            <div style="font-size:30px;">💈</div>
                            <div style="margin-top:8px;">Foto: ambiente da barbearia</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align:center;">
                          <h1 class="display h1" style="margin:0 0 20px 0; font-size:30px; color:#f3c67a;">Cortes a partir de {{valor}}</h1>
                          <p style="margin:0 0 16px 0; font-size:16px; line-height:1.5; color:#d6d6d6;">
                            Seu estilo começa com um atendimento feito nos detalhes. Na Bravus, cada
                            corte é pensado para combinar com o seu rosto, sua personalidade e sua
                            rotina.
                          </p>
                          <p style="margin:0 0 24px 0; font-size:16px; line-height:1.5; color:#d6d6d6;">
                            Conte com barbeiros especializados, ambiente confortável e produtos
                            profissionais para cuidar do seu visual.
                          </p>
                          <div style="border:2px dashed #f3c67a; border-radius:12px; padding:20px; margin:0 0 24px 0; font-size:15px; font-weight:600; letter-spacing:0.5px; color:#f3c67a;">
                            SEGUNDA A SÁBADO, DAS 9H ÀS 20H
                          </div>
                          <a href="{{url_botao}}" target="_blank"
                             style="display:block; background-color:#f3c67a; color:#1e1e1e; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:17px; text-align:center; text-decoration:none; padding:22px 24px; border-radius:8px;">
                            AGENDAR HORÁRIO →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Avaliação -->
                <tr>
                  <td style="padding:34px 0 0 0; text-align:center;">
                    <div style="font-size:22px; color:#f3c67a; letter-spacing:4px;">★★★★★</div>
                    <p style="margin:12px 0 0 0; font-size:16px; font-weight:500; color:#f3c67a;">
                      4,9/5 — mais de 2.500 clientes satisfeitos
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>

        <!-- Rodapé -->
        <table role="presentation" width="615" cellpadding="0" cellspacing="0" style="width:615px; max-width:615px;">
          <tr>
            <td style="padding:28px 20px 0 20px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:14px; line-height:1.5; color:#8e8e8e;">
                Bravus Barbearia · Avenida Central, 234 · São Paulo
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#8e8e8e;">
                © {{ano}} Bravus Barbearia. Todos os direitos reservados.
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
