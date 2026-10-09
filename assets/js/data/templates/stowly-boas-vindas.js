/**
 * Template: Boas-vindas — Stowly (marketplace de espaços/armazenamento).
 * Marca fake (design de referência "Neighbor"). Card branco, saudação, CTAs
 * azuis, imagem, lista de benefícios e rodapé com badges de app.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "stowly-boas-vindas",
  slug: "stowly-boas-vindas",
  name: "Boas-vindas — Stowly (marketplace)",
  description:
    "E-mail de boas-vindas de marketplace com saudação personalizada, imagem, lista de benefícios e dois CTAs.",
  category: "Boas-vindas",
  segment: "E-commerce",
  subject: "Boas-vindas à Stowly — encontre o espaço ideal para o seu veículo",
  preheader: "Vamos te conectar com o espaço de armazenamento perfeito.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Boas-vindas — Stowly",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Boas-vindas à Stowly — encontre o espaço ideal para o seu veículo",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome na saudação (ex.: Ana)." },
    { key: "url_botao", label: "URL do botão", description: "Link dos botões (“Ver meus espaços” / “Bora lá”)." },
    { key: "email_suporte", label: "E-mail de suporte", description: "E-mail de contato no rodapé." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Gerenciar preferências” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “cancelar inscrição” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Boas-vindas à Stowly</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eceef0; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .btn-b { display:inline-block; background-color:#2f5bff; color:#ffffff; font-family:'Inter',Arial,sans-serif; font-weight:600; font-size:17px; text-decoration:none; padding:16px 28px; border-radius:8px; }
    .ph { text-align:center; font-family:'Inter',Arial,sans-serif; font-size:14px; line-height:1.5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eceef0; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eceef0;">
    Vamos te conectar com o espaço de armazenamento perfeito.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eceef0;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px;">

          <!-- Saudação -->
          <tr>
            <td class="px" style="padding:40px 44px 0 44px;">
              <h1 style="margin:0 0 18px 0; font-size:28px; font-weight:700; color:#1a1a1a;">Oi, {{nome_cliente}}!</h1>
              <p style="margin:0; font-size:17px; line-height:1.6; color:#333333;">
                Boas-vindas à comunidade Stowly! Vamos te conectar com o espaço ideal para o seu veículo.
              </p>
            </td>
          </tr>

          <!-- CTA 1 -->
          <tr>
            <td align="center" style="padding:26px 44px 0 44px;">
              <a href="{{url_botao}}" target="_blank" class="btn-b" style="display:block; text-align:center;">Ver meus espaços</a>
            </td>
          </tr>

          <!-- Imagem -->
          <tr>
            <td class="px" style="padding:24px 44px 32px 44px; line-height:0;">
              <div class="ph" style="border-radius:10px; background:linear-gradient(135deg,#9fb6d6,#c7d6e6); padding:96px 24px; color:#4a5a6a;">
                <div style="font-size:28px;">🚐</div>
                <div style="margin-top:8px;">Foto: espaço para o veículo</div>
              </div>
            </td>
          </tr>

          <!-- Seção "a gente facilita" -->
          <tr>
            <td style="background-color:#eef2f6;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 44px 0 44px;">
                    <h2 style="margin:0 0 22px 0; font-size:22px; font-weight:700; color:#1a1a1a;">A gente facilita:</h2>
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a1a;">Explore espaços</p>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.55; color:#444444;">É como fazer uma vitrine, mas de espaços para guardar seu veículo</p>
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a1a;">Encontre o lugar perfeito</p>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.55; color:#444444;">Temos o espaço certo com o seu nome nele</p>
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1a1a1a;">Reserve em poucos cliques</p>
                    <p style="margin:0 0 20px 0; font-size:16px; line-height:1.55; color:#444444;">Fácil, rápido e sem complicação</p>
                    <p style="margin:0; font-size:16px; line-height:1.55; color:#444444;">Pronto para encontrar o seu espaço ideal?</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:28px 44px 40px 44px;">
                    <a href="{{url_botao}}" target="_blank" class="btn-b">Bora lá</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:28px 44px 16px 44px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" style="width:120px;">
                    <div style="width:52px; height:52px; background:#2f5bff; border-radius:8px; text-align:center; line-height:52px; font-size:26px;">🏠</div>
                    <p style="margin:10px 0 0 0; font-size:13px; font-weight:700; color:#1a1a1a;">Stowly</p>
                    <p style="margin:2px 0 0 0; font-size:12px; color:#777777;">Criando espaço para oportunidades</p>
                  </td>
                  <td valign="top" style="font-size:12px; line-height:1.6; color:#777777;">
                    Av. Paulista, 1000, São Paulo, SP<br>
                    <a href="{{url_preferencias}}" target="_blank" style="color:#777777; text-decoration:underline;">Gerenciar preferências</a>
                    ou <a href="{{url_unsubscribe}}" target="_blank" style="color:#777777; text-decoration:underline;">cancelar inscrição</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 24px 32px 24px; text-align:center;">
              <p style="margin:0 0 6px 0; font-size:12px; color:#9a9a9a;">
                Enviado pela Stowly. Dúvidas? Fale com
                <a href="mailto:{{email_suporte}}" style="color:#2f5bff; text-decoration:none;">{{email_suporte}}</a>
                ou responda este e-mail
              </p>
              <p style="margin:10px 0 0 0;">
                <span style="display:inline-block; background:#1a1a1a; color:#ffffff; font-size:11px; padding:8px 14px; border-radius:6px; margin:0 4px;">App Store</span>
                <span style="display:inline-block; background:#1a1a1a; color:#ffffff; font-size:11px; padding:8px 14px; border-radius:6px; margin:0 4px;">Google Play</span>
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
