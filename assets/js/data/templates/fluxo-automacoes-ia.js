/**
 * Template: Boas-vindas / recurso — Fluxo (automação no-code com IA).
 * Marca fake (design de referência "Zapier"). Ilustração SVG original (blocos
 * conectados por um raio), passos de automação e CTA "Falar com o Copiloto".
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "fluxo-automacoes-ia",
  slug: "fluxo-automacoes-ia",
  name: "Automações com IA — Fluxo",
  description:
    "E-mail de novidade de produto com ilustração original, como funciona em 3 passos e CTA para o assistente de IA.",
  category: "Boas-vindas",
  segment: "Tecnologia",
  subject: "Monte sua primeira automação com o Copiloto",
  preheader: "Descreva o que você quer automatizar — o resto a gente monta.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Automações com IA — Fluxo",
    categoria: "Onboarding",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Monte sua primeira automação com o Copiloto",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome na saudação (ex.: Ana)." },
    { key: "url_copiloto", label: "URL — Copiloto", description: "Link do botão “Falar com o Copiloto”." },
    { key: "url_modelos", label: "URL — Modelos", description: "Link “Ver modelos prontos”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar inscrição”." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Monte sua primeira automação — Fluxo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f1efe9; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#ff5a2d; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:28px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f1efe9; font-family:'Inter',Arial,Helvetica,sans-serif; color:#201c18;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f1efe9;">
    Descreva o que você quer automatizar — o resto a gente monta.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1efe9;">
    <tr>
      <td align="center" style="padding:24px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:14px;">

          <!-- Header -->
          <tr>
            <td class="px" style="padding:24px 36px;">
              <span style="font-size:22px; font-weight:800; letter-spacing:-0.5px; color:#201c18;">Fluxo</span>
            </td>
          </tr>

          <!-- Hero com ilustração SVG original -->
          <tr>
            <td class="px" style="padding:0 36px;">
              <div style="background:#fff1ea; border-radius:14px; padding:36px 24px; text-align:center;">
                <svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Três blocos conectados por um raio de automação">
                  <rect x="20" y="38" width="64" height="64" rx="14" fill="#ffffff" stroke="#ffd0bd" stroke-width="2"/>
                  <circle cx="52" cy="70" r="14" fill="#ff5a2d"/>
                  <rect x="118" y="38" width="64" height="64" rx="14" fill="#ffffff" stroke="#ffd0bd" stroke-width="2"/>
                  <rect x="216" y="38" width="64" height="64" rx="14" fill="#ffffff" stroke="#ffd0bd" stroke-width="2"/>
                  <rect x="238" y="62" width="20" height="4" rx="2" fill="#201c18"/>
                  <rect x="246" y="54" width="4" height="20" rx="2" fill="#201c18"/>
                  <path d="M84 70h34" stroke="#ff5a2d" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 8"/>
                  <path d="M182 70h34" stroke="#ff5a2d" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 8"/>
                  <path d="M150 20l-14 24h12l-10 24 26-30h-13l11-18z" fill="#ff5a2d"/>
                </svg>
              </div>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:34px 36px 0 36px;">
              <h1 class="h1" style="margin:0 0 16px 0; font-size:30px; font-weight:800; line-height:1.15; color:#201c18;">Descreva. O Copiloto monta.</h1>
              <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7; color:#4a443d;">Oi, {{nome_cliente}}! Agora você não precisa saber por onde começar. Conte em uma frase o que quer automatizar e o Copiloto da Fluxo sugere os apps, os gatilhos e as ações para você.</p>
              <p style="margin:0 0 28px 0; font-size:16px; line-height:1.7; color:#4a443d;">Veja como é simples:</p>
            </td>
          </tr>

          <!-- Passos -->
          <tr>
            <td class="px" style="padding:0 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="top" style="width:40px; padding:0 0 22px 0;"><span style="display:inline-block; width:28px; height:28px; border-radius:8px; background:#fff1ea; color:#ff5a2d; text-align:center; line-height:28px; font-size:14px; font-weight:700;">1</span></td>
                  <td valign="top" style="padding:0 0 22px 6px;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#201c18;">Diga o que precisa</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#5a544c;">“Quando chegar um lead no formulário, me avise no WhatsApp e salve na planilha.”</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:40px; padding:0 0 22px 0;"><span style="display:inline-block; width:28px; height:28px; border-radius:8px; background:#fff1ea; color:#ff5a2d; text-align:center; line-height:28px; font-size:14px; font-weight:700;">2</span></td>
                  <td valign="top" style="padding:0 0 22px 6px;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#201c18;">Revise a sugestão</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#5a544c;">O Copiloto monta o fluxo com gatilho e ações. Você só ajusta o que quiser.</p>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style="width:40px;"><span style="display:inline-block; width:28px; height:28px; border-radius:8px; background:#fff1ea; color:#ff5a2d; text-align:center; line-height:28px; font-size:14px; font-weight:700;">3</span></td>
                  <td valign="top" style="padding-left:6px;">
                    <p style="margin:0 0 4px 0; font-size:16px; font-weight:600; color:#201c18;">Ative e relaxe</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#5a544c;">Publique a automação e deixe a Fluxo trabalhar por você, 24 horas por dia.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="px" style="padding:32px 36px 10px 36px;">
              <a href="{{url_copiloto}}" target="_blank" style="display:block; background-color:#ff5a2d; color:#ffffff; font-weight:700; font-size:16px; text-align:center; text-decoration:none; padding:16px; border-radius:10px;">Falar com o Copiloto</a>
            </td>
          </tr>
          <tr>
            <td class="px" style="padding:0 36px 36px 36px; text-align:center;">
              <a href="{{url_modelos}}" target="_blank" style="font-size:14px; font-weight:600; color:#ff5a2d; text-decoration:none;">Ver modelos prontos →</a>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td class="px" style="padding:24px 36px; background-color:#faf8f4; border-radius:0 0 14px 14px; text-align:center;">
              <p style="margin:0 0 10px 0; font-size:13px; line-height:1.6; color:#8a8378;">Você recebe este e-mail porque tem uma conta na Fluxo.</p>
              <p style="margin:0 0 10px 0; font-size:13px;"><a href="{{url_unsubscribe}}" target="_blank" style="color:#201c18; text-decoration:underline;">Cancelar inscrição</a></p>
              <p style="margin:0; font-size:12px; color:#a59d90;">Fluxo Automação Ltda. · Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
