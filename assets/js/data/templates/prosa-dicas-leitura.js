/**
 * Template: Newsletter de dicas — Prosa (plataforma de publicação/leitura).
 * Marca fake (design de referência "Medium"). Ilustração SVG original (pena +
 * linhas de texto), lista de dicas numeradas e rodapé editorial.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "prosa-dicas-leitura",
  slug: "prosa-dicas-leitura",
  name: "Dicas de escrita — Prosa (newsletter)",
  description:
    "Newsletter editorial com ilustração original, dicas numeradas para escrever melhor e rodapé com links.",
  category: "Newsletter",
  segment: "Tecnologia",
  subject: "3 dicas para a sua próxima publicação",
  preheader: "Pequenos ajustes que fazem o leitor chegar até o fim.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Dicas de escrita — Prosa",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "3 dicas para a sua próxima publicação",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome na saudação (ex.: Ana)." },
    { key: "url_escrever", label: "URL — Escrever", description: "Link do botão “Começar a escrever”." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Gerenciar e-mails”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>3 dicas para a sua próxima publicação — Prosa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f5f3ee; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1a1a1a; }
    .serif { font-family:'Fraunces','Georgia',serif; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f5f3ee; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f5f3ee;">
    Pequenos ajustes que fazem o leitor chegar até o fim.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr>
      <td align="center" style="padding:24px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border:1px solid #e7e3d9;">

          <!-- Header -->
          <tr>
            <td class="px" style="padding:26px 40px; border-bottom:1px solid #eeeae0;">
              <span class="serif" style="font-size:26px; font-weight:600; letter-spacing:-0.5px; color:#1a1a1a;">Prosa</span>
            </td>
          </tr>

          <!-- Ilustração SVG original -->
          <tr>
            <td style="padding:36px 40px 0 40px; text-align:center;">
              <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pena escrevendo sobre linhas de texto">
                <rect x="34" y="40" width="118" height="9" rx="4.5" fill="#ece7db"/>
                <rect x="34" y="62" width="150" height="9" rx="4.5" fill="#ece7db"/>
                <rect x="34" y="84" width="104" height="9" rx="4.5" fill="#ece7db"/>
                <rect x="34" y="106" width="132" height="9" rx="4.5" fill="#f0d9a8"/>
                <path d="M181 24c-28 10-54 34-70 74 14-2 27-7 38-16" fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
                <path d="M181 24c6 20 2 40-12 58-7 9-16 15-26 20" fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
                <path d="M181 24l10 10" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
                <circle cx="150" cy="112" r="6" fill="#f0a500"/>
              </svg>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:20px 40px 0 40px;">
              <p style="margin:0 0 10px 0; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#8a8575;">Carta semanal</p>
              <h1 class="serif h1" style="margin:0 0 18px 0; font-size:34px; font-weight:600; line-height:1.15; color:#1a1a1a;">3 dicas para a sua próxima publicação</h1>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.7; color:#44413a;">Oi, {{nome_cliente}}. Escrever bem é, quase sempre, reescrever. Separamos três ajustes simples que ajudam o leitor a chegar até o fim do seu texto.</p>
            </td>
          </tr>

          <!-- Dicas -->
          <tr>
            <td class="px" style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" style="width:46px; padding:16px 0;"><span class="serif" style="display:inline-block; width:34px; height:34px; border-radius:50%; background:#1a1a1a; color:#ffffff; text-align:center; line-height:34px; font-size:16px; font-weight:600;">1</span></td>
                  <td valign="top" style="padding:16px 0 16px 6px; border-bottom:1px solid #eeeae0;">
                    <p style="margin:0 0 6px 0; font-size:17px; font-weight:600; color:#1a1a1a;">Comece pelo meio</p>
                    <p style="margin:0; font-size:15px; line-height:1.65; color:#55524a;">O leitor decide ficar nas primeiras linhas. Corte a introdução e abra com a ideia mais forte do texto.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:46px; padding:16px 0;"><span class="serif" style="display:inline-block; width:34px; height:34px; border-radius:50%; background:#1a1a1a; color:#ffffff; text-align:center; line-height:34px; font-size:16px; font-weight:600;">2</span></td>
                  <td valign="top" style="padding:16px 0 16px 6px; border-bottom:1px solid #eeeae0;">
                    <p style="margin:0 0 6px 0; font-size:17px; font-weight:600; color:#1a1a1a;">Uma ideia por parágrafo</p>
                    <p style="margin:0; font-size:15px; line-height:1.65; color:#55524a;">Parágrafos curtos respiram. Se um trecho tem duas ideias, provavelmente são dois parágrafos.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:46px; padding:16px 0;"><span class="serif" style="display:inline-block; width:34px; height:34px; border-radius:50%; background:#1a1a1a; color:#ffffff; text-align:center; line-height:34px; font-size:16px; font-weight:600;">3</span></td>
                  <td valign="top" style="padding:16px 0 16px 6px;">
                    <p style="margin:0 0 6px 0; font-size:17px; font-weight:600; color:#1a1a1a;">Leia em voz alta</p>
                    <p style="margin:0; font-size:15px; line-height:1.65; color:#55524a;">Onde você tropeça lendo, o leitor também tropeça. É o jeito mais rápido de encontrar frases travadas.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="px" style="padding:30px 40px 40px 40px;">
              <a href="{{url_escrever}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:14px 26px; border-radius:40px;">Começar a escrever</a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:26px 40px; background-color:#faf8f3; border-top:1px solid #eeeae0; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:13px; line-height:1.6; color:#8a8575;">Você recebe a carta semanal da Prosa porque assina nossas novidades.</p>
              <p style="margin:0 0 10px 0; font-size:13px;">
                <a href="{{url_preferencias}}" target="_blank" style="color:#1a1a1a; text-decoration:underline;">Gerenciar e-mails</a> &nbsp;·&nbsp;
                <a href="{{url_unsubscribe}}" target="_blank" style="color:#1a1a1a; text-decoration:underline;">Cancelar inscrição</a>
              </p>
              <p style="margin:0; font-size:12px; color:#a8a393;">Prosa Mídia Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
