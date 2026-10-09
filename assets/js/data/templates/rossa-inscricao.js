/**
 * Template: Confirmação de inscrição — Rossa (automotivo de luxo).
 * Marca fake (design de referência "Ferrari"). Bloco vermelho, confirmação,
 * CTA, navegação, redes e rodapé institucional.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "rossa-inscricao",
  slug: "rossa-inscricao",
  name: "Confirmação de inscrição — Rossa",
  description:
    "E-mail de confirmação de inscrição em newsletter, com visual marcante, CTA e rodapé institucional.",
  category: "Confirmação",
  segment: "E-commerce",
  subject: "Obrigado por se inscrever",
  preheader: "A partir de agora, você vai receber todas as novidades.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Confirmação de inscrição — Rossa",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Obrigado por se inscrever",
  },
  variables: [
    { key: "url_botao", label: "URL do botão", description: "Link do botão “Visitar o site”." },
    { key: "ano", label: "Ano", description: "Ano exibido no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Obrigado por se inscrever — Rossa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#111111; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .cond { font-family:'Oswald','Arial Narrow',Arial,sans-serif; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:34px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#111111; font-family:'Inter',Arial,Helvetica,sans-serif; color:#ffffff;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#111111;">
    A partir de agora, você vai receber todas as novidades.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#111111;">
    <tr>
      <td align="center" style="padding:16px 16px 36px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <tr>
            <td style="padding:0 0 10px 0; text-align:center;">
              <a href="{{url_botao}}" target="_blank" style="color:#9a9a9a; font-size:12px; text-decoration:underline;">Abrir a versão web</a>
            </td>
          </tr>

          <!-- Bloco vermelho -->
          <tr>
            <td style="background-color:#c00000; padding:48px 40px; text-align:center;">
              <div style="font-size:44px; line-height:1;">🐎</div>
              <h1 class="cond h1" style="margin:20px 0 18px 0; font-size:44px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:#ffffff;">Obrigado por se inscrever</h1>
              <p class="cond" style="margin:0 0 30px 0; font-size:20px; font-weight:500; line-height:1.3; color:#f3d6d6;">Inscrição confirmada: a partir de agora, você vai receber todas as novidades da Rossa.</p>
              <a href="{{url_botao}}" target="_blank" class="cond" style="display:inline-block; background-color:#111111; color:#ffffff; font-size:15px; font-weight:600; letter-spacing:1px; text-transform:uppercase; text-decoration:none; padding:16px 34px;">Visitar o site</a>
            </td>
          </tr>

          <!-- Até breve -->
          <tr>
            <td style="background-color:#1a1a1a; padding:40px; text-align:center;">
              <p class="cond" style="margin:0 0 6px 0; font-size:22px; font-weight:700; color:#ffffff;">Até breve</p>
              <p class="cond" style="margin:0; font-size:18px; color:#c9c9c9;">Rossa</p>
            </td>
          </tr>

          <!-- Navegação -->
          <tr>
            <td style="padding:28px 10px 0 10px; text-align:center;">
              <span class="cond" style="font-size:13px; letter-spacing:1px; color:#dddddd;">
                <a href="#" style="color:#dddddd; text-decoration:none; margin:0 10px;">NOTÍCIAS</a>|
                <a href="#" style="color:#dddddd; text-decoration:none; margin:0 10px;">CARROS ESPORTIVOS</a>|
                <a href="#" style="color:#dddddd; text-decoration:none; margin:0 10px;">FÓRMULA 1</a>|
                <a href="#" style="color:#dddddd; text-decoration:none; margin:0 10px;">COLEÇÕES</a>
              </span>
            </td>
          </tr>

          <!-- Redes -->
          <tr>
            <td style="padding:20px 0 0 0; text-align:center; border-bottom:1px solid #333333; padding-bottom:22px;">
              <span style="font-size:18px; letter-spacing:8px; color:#dddddd;">f  ◎  X  ▶  in</span>
            </td>
          </tr>

          <!-- Rodapé legal -->
          <tr>
            <td style="padding:22px 24px 0 24px; text-align:center;">
              <p style="margin:0 0 14px 0; font-size:12px; color:#9a9a9a;">Este é um e-mail automático, por favor não responda.</p>
              <p style="margin:0 0 10px 0; font-size:11px; line-height:1.6; color:#888888;">
                Rossa N.V. - Holding - Sociedade constituída segundo a legislação, com sede e endereço registrados no órgão competente.
              </p>
              <p style="margin:0 0 14px 0; font-size:11px; line-height:1.6; color:#888888;">
                Rossa S.A. - Sociedade com sede, registro na junta comercial, CNPJ e capital social conforme publicado.
              </p>
              <p style="margin:0; font-size:11px; color:#888888;">Copyright {{ano}} - Todos os direitos reservados</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
