/**
 * Template: BeatFlow — Clube de Benefícios (parceria).
 * Baseado no design do Figma (node 818:10762): header amarelo, corpo escuro com
 * imagem, lista "Como funciona" e CTA. Foto como placeholder.
 *
 * Obs.: endereço leftover ("Clube da Sujeira") ajustado para BeatFlow.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "beatflow-clube-beneficios",
  slug: "beatflow-clube-beneficios",
  name: "BeatFlow — Clube de Benefícios (parceria)",
  description:
    "E-mail de anúncio de parceria com header vibrante, corpo escuro, lista de benefícios e CTA.",
  category: "Institucional",
  segment: "E-commerce",
  subject: "Novidade no Clube de Benefícios BeatFlow 🎶",
  preheader:
    "BeatFlow × PrintStage: crie e venda produtos personalizados do seu projeto.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Clube de Benefícios — BeatFlow",
    categoria: "Relacionamento",
    subcategoria: "Lançamento",
    status: "Publicado",
    assunto: "Novidade no Clube de Benefícios BeatFlow 🎶",
  },
  variables: [
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado no botão “Começar agora”.",
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
  <title>Clube de Benefícios — BeatFlow</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Enriqueta:wght@700&family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#1e1e1e; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .serif { font-family:'Enriqueta','Georgia',serif; font-weight:700; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#1e1e1e; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#1e1e1e;">
    BeatFlow × PrintStage: crie e venda produtos personalizados do seu projeto.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1e1e1e;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#1e1e1e;">

          <!-- Header -->
          <tr>
            <td style="background-color:#fbe62e; padding:34px; text-align:center;">
              <span class="serif" style="font-size:40px; color:#000000;">BeatFlow</span>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px" style="padding:56px 46px 0 46px; line-height:0;">
              <div class="ph" style="border:2px dashed rgba(251,230,46,0.5); border-radius:12px; padding:96px 24px; color:rgba(255,255,255,0.85);">
                <div style="font-size:30px;">🎽</div>
                <div style="margin-top:8px;">Foto: produto do clube (BeatFlow × PrintStage)</div>
              </div>
            </td>
          </tr>

          <!-- Corpo -->
          <tr>
            <td class="px" style="padding:40px 46px 0 46px;">
              <p style="margin:0 0 18px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Da distribuição musical ao armazenamento de arquivos, passando pela divulgação de
                lançamentos e produção de CDs e vinis: nossa missão é reunir tudo o que você precisa
                para desenvolver sua carreira em uma única plataforma.
              </p>
              <p style="margin:0 0 18px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Com a nova parceria disponível no Clube de Benefícios BeatFlow, estamos ainda mais
                próximos desse objetivo.
              </p>
              <p style="margin:0 0 18px 0; font-size:18px; line-height:1.5; color:#ffffff;">
                Unimos forças com a PrintStage para oferecer aos artistas independentes uma solução
                completa e escalável para criar e vender produtos personalizados.
              </p>
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Você desenvolve camisetas, moletons, bonés e acessórios com a identidade do seu
                projeto. A PrintStage cuida de todo o restante: produção, estoque, envio e
                atendimento aos clientes.
              </p>
            </td>
          </tr>

          <!-- Como funciona -->
          <tr>
            <td class="px" style="padding:32px 46px 0 46px;">
              <p style="margin:0 0 14px 0; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:18px; color:#fbe62e;">
                Como funciona
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:5px 0; font-size:18px; line-height:1.4; color:#ffffff;">•&nbsp;&nbsp;Crie sua loja personalizada em poucos minutos</td></tr>
                <tr><td style="padding:5px 0; font-size:18px; line-height:1.4; color:#ffffff;">•&nbsp;&nbsp;Adicione sua identidade, capas, ilustrações e estampas</td></tr>
                <tr><td style="padding:5px 0; font-size:18px; line-height:1.4; color:#ffffff;">•&nbsp;&nbsp;A PrintStage cuida da produção e do envio dos pedidos</td></tr>
                <tr><td style="padding:5px 0; font-size:18px; line-height:1.4; color:#ffffff;">•&nbsp;&nbsp;Venda sem precisar investir em estoque antecipadamente</td></tr>
                <tr><td style="padding:5px 0; font-size:18px; line-height:1.4; color:#ffffff;">•&nbsp;&nbsp;Sem intermediários ou mensalidades adicionais</td></tr>
                <tr><td style="padding:5px 0; font-size:18px; line-height:1.4; color:#ffffff;">•&nbsp;&nbsp;Você mantém o relacionamento direto com seus fãs</td></tr>
              </table>
            </td>
          </tr>

          <!-- Fecho -->
          <tr>
            <td class="px" style="padding:28px 46px 0 46px;">
              <p style="margin:0; font-size:18px; line-height:1.5; color:#ffffff;">
                Faça parte da BeatFlow para acessar o Clube de Benefícios e uma coleção completa de
                ferramentas e serviços desenvolvidos para levar sua carreira muito além da
                distribuição musical.
              </p>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td class="px" style="padding:34px 46px 56px 46px;">
              <a href="{{url_botao}}" target="_blank"
                 style="display:inline-block; background-color:#fbe62e; color:#000000; font-family:'Inter',Arial,sans-serif; font-weight:800; font-size:17px; text-decoration:none; padding:20px 36px; border-radius:8px;">
                COMEÇAR AGORA
              </a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#fbe62e; padding:48px 40px; text-align:center;">
              <p style="margin:0 0 16px 0;"><span class="serif" style="font-size:38px; color:#000000;">BeatFlow</span></p>
              <p style="margin:0 0 8px 0; font-size:15px; line-height:1.5; color:#000000;">
                BeatFlow · Avenida das Laranjeiras, 210 · São Paulo, SP
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#000000;">
                © {{ano}} BeatFlow. Todos os direitos reservados.
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
