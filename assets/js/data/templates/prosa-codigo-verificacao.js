/**
 * Template: Código de verificação — Prosa (login sem senha).
 * Marca fake (design de referência "Medium"). Ilustração SVG original (cadeado
 * com dígitos), código em destaque e avisos de segurança.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "prosa-codigo-verificacao",
  slug: "prosa-codigo-verificacao",
  name: "Código de verificação — Prosa",
  description:
    "E-mail transacional de login com ilustração original, código de acesso em destaque e aviso de segurança.",
  category: "Confirmação",
  segment: "Tecnologia",
  subject: "Seu código de acesso à Prosa",
  preheader: "Use o código abaixo para entrar. Ele expira em 10 minutos.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Código de verificação — Prosa",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Seu código de acesso à Prosa",
  },
  variables: [
    { key: "codigo", label: "Código de acesso", description: "Código numérico de uso único (ex.: 418 902)." },
    { key: "url_entrar", label: "URL — Entrar", description: "Link do botão “Entrar na Prosa”." },
    { key: "url_ajuda", label: "URL — Ajuda", description: "Link da central de ajuda no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Seu código de acesso — Prosa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f5f3ee; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#1a1a1a; }
    .serif { font-family:'Fraunces','Georgia',serif; }
    .code { font-family:'Inter',Arial,sans-serif; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .code { font-size:34px !important; letter-spacing:8px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f5f3ee; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1a1a1a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f5f3ee;">
    Use o código abaixo para entrar. Ele expira em 10 minutos.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ee;">
    <tr>
      <td align="center" style="padding:24px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border:1px solid #e7e3d9;">

          <!-- Header -->
          <tr>
            <td class="px" style="padding:26px 40px; border-bottom:1px solid #eeeae0; text-align:center;">
              <span class="serif" style="font-size:26px; font-weight:600; letter-spacing:-0.5px; color:#1a1a1a;">Prosa</span>
            </td>
          </tr>

          <!-- Ilustração SVG original -->
          <tr>
            <td style="padding:40px 40px 0 40px; text-align:center;">
              <svg width="130" height="130" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cadeado de acesso">
                <rect x="30" y="58" width="70" height="54" rx="12" fill="#1a1a1a"/>
                <path d="M45 58V44a20 20 0 0 1 40 0v14" fill="none" stroke="#1a1a1a" stroke-width="8"/>
                <circle cx="65" cy="82" r="8" fill="#f0a500"/>
                <rect x="61" y="86" width="8" height="16" rx="4" fill="#f0a500"/>
                <circle cx="104" cy="40" r="5" fill="#f0a500"/>
                <circle cx="24" cy="96" r="4" fill="#d8d2c4"/>
              </svg>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px; text-align:center;">
              <h1 class="serif" style="margin:0 0 14px 0; font-size:28px; font-weight:600; color:#1a1a1a;">Entre na sua conta</h1>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.7; color:#44413a;">Use o código abaixo para concluir seu acesso à Prosa. Ele expira em 10 minutos e só pode ser usado uma vez.</p>
            </td>
          </tr>

          <!-- Código -->
          <tr>
            <td class="px" style="padding:0 40px;">
              <div style="background:#faf8f3; border:1px dashed #d8d2c4; border-radius:12px; padding:24px; text-align:center;">
                <p class="code" style="margin:0; font-size:40px; font-weight:600; letter-spacing:12px; color:#1a1a1a;">{{codigo}}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="px" style="padding:28px 40px 0 40px; text-align:center;">
              <a href="{{url_entrar}}" target="_blank" style="display:inline-block; background-color:#1a1a1a; color:#ffffff; font-weight:600; font-size:15px; text-decoration:none; padding:14px 30px; border-radius:40px;">Entrar na Prosa</a>
            </td>
          </tr>

          <!-- Aviso -->
          <tr>
            <td class="px" style="padding:30px 40px 40px 40px;">
              <p style="margin:0; font-size:14px; line-height:1.7; color:#8a8575; text-align:center;">Se você não tentou entrar na Prosa, ignore este e-mail — sua conta continua segura. Nunca compartilhe este código com ninguém.</p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:26px 40px; background-color:#faf8f3; border-top:1px solid #eeeae0; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px;"><a href="{{url_ajuda}}" target="_blank" style="color:#1a1a1a; text-decoration:underline;">Central de ajuda</a></p>
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
