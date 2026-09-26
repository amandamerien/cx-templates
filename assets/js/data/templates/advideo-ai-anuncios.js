/**
 * Template: AdVideo AI — Transforme ideias em anúncios (produto/SaaS).
 * Baseado no design do Figma (node 812:9058): card branco, hero, título forte,
 * texto e CTA. Foto como placeholder.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "advideo-ai-anuncios",
  slug: "advideo-ai-anuncios",
  name: "AdVideo AI — Transforme ideias em anúncios",
  description:
    "E-mail de produto/onboarding com hero, proposta de valor e CTA, em layout limpo e moderno.",
  category: "Institucional",
  segment: "Tecnologia",
  subject: "Transforme qualquer ideia em um anúncio que vende 🎬",
  preheader:
    "Crie anúncios completos com IA em poucos minutos — roteiro, cenas e narração.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Onboarding — AdVideo AI",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Transforme qualquer ideia em um anúncio que vende 🎬",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Criar meu primeiro anúncio”.",
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
  <title>Transforme ideias em anúncios — AdVideo AI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Danfo&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f6f6f6; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .danfo { font-family:'Danfo','Arial Black',Arial,sans-serif; font-weight:400; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .h1 { font-size:24px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f6f6f6; font-family:'Inter',Arial,Helvetica,sans-serif; color:#111111;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f6f6f6;">
    Crie anúncios completos com IA em poucos minutos — roteiro, cenas e narração.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f6f6;">
    <tr>
      <td align="center" style="padding:35px 33px;">
        <table role="presentation" class="container" width="615" cellpadding="0" cellspacing="0" style="width:615px; max-width:615px; background-color:#ffffff; border-radius:16px;">
          <tr>
            <td class="px" style="padding:34px;">

              <!-- Logo -->
              <p class="danfo" style="margin:0 0 28px 0; text-align:center; font-size:30px; color:#000000;">VEEDy</p>

              <!-- Hero -->
              <div class="ph" style="border-radius:16px; background:linear-gradient(135deg,#3a0b12,#a12128); padding:80px 24px; color:rgba(255,255,255,0.9); margin-bottom:34px;">
                <div style="font-size:30px;">🎬</div>
                <div style="margin-top:8px;">Foto: criador usando o AdVideo AI</div>
              </div>

              <!-- Título -->
              <h1 class="h1" style="margin:0 0 24px 0; font-family:'Inter',Arial,sans-serif; font-weight:600; font-size:28px; line-height:1.2; color:#000000;">
                Transforme qualquer ideia em um anúncio que vende
              </h1>

              <!-- Texto -->
              <p style="margin:0 0 18px 0; font-size:16px; line-height:1.5; color:#697077;">
                O AdVideo AI transforma uma ideia simples em um anúncio completo: informe o seu
                produto, escolha o formato e deixe a inteligência artificial criar o roteiro, as
                cenas e a narração.
              </p>
              <p style="margin:0 0 18px 0; font-size:16px; line-height:1.5; color:#697077;">
                Agora você pode produzir diferentes versões do mesmo anúncio em poucos minutos — sem
                precisar gravar, editar ou contratar uma equipe.
              </p>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.5; color:#697077;">
                Crie conteúdos para Instagram, TikTok, YouTube e campanhas de tráfego pago. Você
                cuida da estratégia. A IA acelera a produção.
              </p>

              <!-- Botão -->
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#a12128; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:16px; text-decoration:none; padding:18px 32px; border-radius:56px;">
                Criar meu primeiro anúncio
              </a>

            </td>
          </tr>
        </table>

        <!-- Rodapé -->
        <table role="presentation" width="615" cellpadding="0" cellspacing="0" style="width:615px; max-width:615px;">
          <tr>
            <td style="padding:28px 30px 0 30px; text-align:center;">
              <p style="margin:0 0 12px 0; font-size:14px; line-height:1.5; color:#8e8e8e;">
                Você está recebendo este e-mail porque criou uma conta no AdVideo AI ou se cadastrou
                para receber nossas novidades.
              </p>
              <p style="margin:0 0 12px 0; font-size:14px; line-height:1.5; color:#8e8e8e;">
                Se não quiser mais receber nossos e-mails, você pode cancelar sua inscrição com
                segurança.
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#8e8e8e;">
                © {{ano}} AdVideo AI. Todos os direitos reservados.
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
