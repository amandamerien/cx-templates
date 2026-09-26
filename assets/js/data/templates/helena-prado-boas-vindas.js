/**
 * Template: Boas-vindas — Helena Prado (artista plástica).
 * Baseado no design do Figma (node 815:9889): moldura bordô, card creme,
 * cabeçalho leve, foto editorial e assinatura manuscrita. Foto como placeholder.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "helena-prado-boas-vindas",
  slug: "helena-prado-boas-vindas",
  name: "Boas-vindas — Helena Prado (artista)",
  description:
    "E-mail de boas-vindas elegante e editorial, com foto de destaque, texto acolhedor e assinatura manuscrita.",
  category: "Boas-vindas",
  segment: "Arte",
  subject: "Boas-vindas! Que bom ter você por aqui 🎨",
  preheader:
    "Sou Helena, artista plástica. Obrigada por fazer parte desta comunidade.",
  thumbnail: "",
  createdAt: "2026-08-09",
  updatedAt: "2026-08-09",
  publicacao: {
    nome: "Boas-vindas — Helena Prado",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas! Que bom ter você por aqui 🎨",
  },
  variables: [
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
  <title>Boas-vindas — Helena Prado</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@300;400&family=Inter:wght@400;500&family=Passions+Conflict&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#671a19; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .anek { font-family:'Anek Telugu','Helvetica Neue',Arial,sans-serif; font-weight:300; }
    .script { font-family:'Passions Conflict','Segoe Script',cursive; font-weight:400; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:36px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#671a19; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#671a19;">
    Sou Helena, artista plástica. Obrigada por fazer parte desta comunidade.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#671a19;">
    <tr>
      <td align="center" style="padding:34px;">
        <table role="presentation" class="container" width="580" cellpadding="0" cellspacing="0" style="width:580px; max-width:580px;">

          <!-- Card creme -->
          <tr>
            <td style="background-color:#f5f4ed; padding:45px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <!-- Cabeçalho -->
                <tr>
                  <td class="px" style="padding:0 56px 45px 56px;">
                    <p class="anek" style="margin:0; font-size:42px; letter-spacing:1px; text-transform:uppercase; color:#232323;">Helena Prado</p>
                  </td>
                </tr>
                <!-- Imagem -->
                <tr>
                  <td style="line-height:0;">
                    <div class="ph" style="background:#e7e2d6; padding:88px 24px; color:#8a8578;">
                      <div style="font-size:28px;">🖼️</div>
                      <div style="margin-top:8px;">Foto editorial da artista</div>
                    </div>
                  </td>
                </tr>
                <!-- Texto -->
                <tr>
                  <td class="px" style="padding:45px 56px 0 56px;">
                    <h1 class="h1" style="margin:0 0 24px 0; font-size:44px; line-height:1.1; color:#111111;">Boas-vindas!</h1>
                    <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">Fico muito feliz por ter você aqui.</p>
                    <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                      Sou Helena, artista plástica brasileira, e crio obras abstratas que exploram
                      memória, natureza e pertencimento. Minhas peças são produzidas com pigmentos
                      naturais, tintas preparadas à mão e diferentes texturas, unindo técnicas
                      artesanais a uma estética contemporânea.
                    </p>
                    <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                      Seja você uma pessoa apaixonada por arte ou alguém começando sua primeira
                      coleção, espero que minhas obras proporcionem momentos de pausa, conexão e
                      contemplação.
                    </p>
                    <p style="margin:0 0 20px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                      De pequenas peças emolduradas a grandes pinturas que transformam ambientes, cada
                      obra é criada de maneira autoral, com intenção, sensibilidade e profundidade.
                    </p>
                    <p style="margin:0 0 24px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">
                      Muito obrigada por fazer parte desta comunidade. Mal posso esperar para
                      compartilhar novas obras, processos criativos e histórias com você.
                    </p>
                    <p style="margin:0 0 8px 0; font-size:18px; line-height:1.55; color:#1a1a1a;">Com carinho, Helena.</p>
                    <p class="script" style="margin:0; font-size:44px; line-height:1; color:#111111;">Helena Prado</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:34px 40px 8px 40px; text-align:center;">
              <p style="margin:0 0 14px 0; font-size:14px; line-height:1.5; color:#ffffff;">
                Você está recebendo este e-mail porque se cadastrou para conhecer minhas obras e
                novidades.
              </p>
              <p style="margin:0; font-size:14px; line-height:1.5; color:#ffffff;">
                © {{ano}} Helena Prado Arte. Todos os direitos reservados.
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
