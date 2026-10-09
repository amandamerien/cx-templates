/**
 * Template: Check-in de terapia — Sereno (plataforma de saúde mental/terapia).
 * Marca fake (design de referência "Octave"). Ilustração SVG original
 * (line-art de duas pessoas em conversa) e nota transacional.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "sereno-check-in",
  slug: "sereno-check-in",
  name: "Check-in de terapia — Sereno",
  description:
    "E-mail de acompanhamento pós-sessão, com ilustração original, pedido de feedback e nota transacional.",
  category: "Pós-atendimento",
  segment: "Saúde",
  subject: "Como está sua jornada de terapia?",
  preheader: "Leva só alguns minutos e faz diferença de verdade.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Check-in de terapia — Sereno",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Como está sua jornada de terapia?",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação." },
    { key: "url_cta", label: "URL — Enviar atualização", description: "Link do botão “Enviar uma atualização rápida”." },
    { key: "email_suporte", label: "E-mail de suporte", description: "E-mail de suporte, ex.: suporte@sereno.com.br." },
    { key: "url_navegador", label: "URL — Versão web", description: "Link “ver no navegador” no rodapé." },
    { key: "url_privacidade", label: "URL — Política de Privacidade", description: "Link da Política de Privacidade no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Como está sua jornada de terapia?</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f7f5ee; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#b2542e; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f7f5ee; font-family:'Inter',Arial,Helvetica,sans-serif; color:#2a2a2a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f7f5ee;">
    Leva só alguns minutos e faz diferença de verdade.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f5ee;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td class="px" style="padding:4px 40px 16px 40px;">
              <span style="font-family:'Lora',Georgia,'Times New Roman',serif; font-size:26px; font-weight:700; letter-spacing:0.5px; color:#b2542e;">Sereno</span>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px; line-height:1px; font-size:1px; background-color:#e5ded0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:32px 40px 0 40px;">
              <p style="margin:0 0 20px 0; font-family:'Lora',Georgia,serif; font-size:22px; font-weight:600; color:#2a2a2a;">Oi, {{nome_cliente}},</p>
              <p style="margin:0 0 18px 0; font-size:16px; line-height:1.7; color:#2a2a2a;">Parabéns por ter dado o primeiro passo e começado a sua terapia — e obrigado pela confiança em nós. Gostaríamos muito de saber como está sendo a sua experiência com o seu terapeuta até aqui.</p>
              <p style="margin:0 0 18px 0; font-size:16px; line-height:1.7; color:#2a2a2a;">O seu feedback nos ajuda a apoiar você melhor em cada etapa dessa jornada.</p>
              <p style="margin:0 0 26px 0; font-size:16px; line-height:1.7; color:#2a2a2a;">Leva só alguns minutos e faz diferença de verdade.</p>
              <a href="{{url_cta}}" target="_blank" style="display:inline-block; background-color:#e9ec5a; color:#2a2a2a; font-weight:600; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:10px;">Enviar uma atualização rápida</a>
              <p style="margin:30px 0 4px 0; font-size:16px; line-height:1.7; color:#2a2a2a;">Tenha um ótimo dia!</p>
              <p style="margin:0; font-family:'Lora',Georgia,serif; font-size:16px; font-weight:600; color:#b2542e;">— Time Sereno</p>
            </td>
          </tr>

          <!-- Divisória -->
          <tr>
            <td style="padding:30px 40px 0 40px;">
              <div style="height:1px; line-height:1px; font-size:1px; background-color:#e5ded0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Caixa P.S. com ilustração original -->
          <tr>
            <td class="px" style="padding:26px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fffdf7; border:1px solid #ece4d3; border-radius:14px;">
                <tr>
                  <td valign="top" style="width:112px; padding:20px 8px 20px 20px;">
                    <svg width="92" height="92" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Duas pessoas conversando em traços simples">
                      <circle cx="46" cy="46" r="44" fill="#f7f0e3"/>
                      <!-- pessoa à esquerda (line-art) -->
                      <circle cx="33" cy="38" r="9" fill="none" stroke="#b2542e" stroke-width="2.5"/>
                      <path d="M20 68c0-9 6-15 13-15s13 6 13 15" fill="none" stroke="#b2542e" stroke-width="2.5" stroke-linecap="round"/>
                      <!-- pessoa à direita (line-art) -->
                      <circle cx="61" cy="42" r="8" fill="none" stroke="#2a2a2a" stroke-width="2.5"/>
                      <path d="M49 68c0-8 5-13 12-13s12 5 12 13" fill="none" stroke="#2a2a2a" stroke-width="2.5" stroke-linecap="round"/>
                      <!-- balão de conversa -->
                      <path d="M52 22h20a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H60l-6 5 1-5h-3a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" fill="none" stroke="#e0b94a" stroke-width="2.5" stroke-linejoin="round"/>
                    </svg>
                  </td>
                  <td valign="middle" style="padding:20px 20px 20px 4px;">
                    <p style="margin:0 0 6px 0; font-family:'Lora',Georgia,serif; font-size:16px; font-weight:600; color:#b2542e;">P.S. Alguma dúvida?</p>
                    <p style="margin:0; font-size:14px; line-height:1.6; color:#2a2a2a;">Ótimo — estamos aqui para ajudar. É só responder a este e-mail e alguém do time retorna rapidinho.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Nota transacional -->
          <tr>
            <td class="px" style="padding:28px 40px 0 40px; text-align:center;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#8a8575;">Esta é uma mensagem transacional enviada para informar sobre uma atualização de cobrança.</p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:24px 40px 0 40px; text-align:center;">
              <p style="margin:0 0 6px 0; font-size:12px; color:#8a8575;">© 2026 Sereno Saúde Ltda. Todos os direitos reservados.</p>
              <p style="margin:0 0 12px 0; font-size:12px; color:#8a8575;">Av. Paulista, 1000, 15º andar, São Paulo, SP</p>
              <p style="margin:0; font-size:12px; line-height:1.8; color:#8a8575;">
                <a href="{{url_navegador}}" target="_blank" style="color:#b2542e; text-decoration:underline;">Ver no navegador</a>
                &nbsp;·&nbsp;
                <a href="mailto:{{email_suporte}}" style="color:#b2542e; text-decoration:underline;">suporte@sereno.com.br</a>
                &nbsp;·&nbsp;
                <a href="{{url_privacidade}}" target="_blank" style="color:#b2542e; text-decoration:underline;">Política de Privacidade</a>
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
