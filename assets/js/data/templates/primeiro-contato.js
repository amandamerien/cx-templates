/**
 * Template: Primeiro contato / boas-vindas.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "adv-primeiro-contato",
  slug: "primeiro-contato",
  name: "Primeiro contato",
  description:
    "Mensagem de boas-vindas enviada após o potencial cliente entrar em contato com o escritório.",
  category: "Primeiro contato",
  segment: "Advocacia",
  subject: "Recebemos o seu contato, {{nome_cliente}}",
  preheader:
    "Obrigado por falar com {{nome_escritorio}}. Veja os próximos passos.",
  thumbnail: "",
  createdAt: "2026-08-08",
  updatedAt: "2026-08-08",
  publicacao: {
    nome: "Primeiro Contato — Advocacia",
    categoria: "Relacionamento",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Recebemos o seu contato, {{nome_cliente}}",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome da pessoa que entrou em contato com o escritório.",
    },
    {
      key: "nome_escritorio",
      label: "Nome do escritório",
      description: "Nome do escritório de advocacia remetente.",
    },
    {
      key: "nome_advogado",
      label: "Nome do advogado",
      description: "Advogado ou responsável que assina a mensagem.",
    },
    {
      key: "link_agendamento",
      label: "Link de agendamento",
      description: "Endereço para o cliente escolher um horário de conversa.",
    },
    {
      key: "telefone",
      label: "Telefone",
      description: "Telefone de contato do escritório.",
    },
    {
      key: "link_whatsapp",
      label: "Link do WhatsApp",
      description: "Link direto para conversa no WhatsApp.",
    },
    {
      key: "email",
      label: "E-mail",
      description: "E-mail de contato do escritório.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Recebemos o seu contato</title>
  <style>
    /* Ajustes responsivos suportados pela maioria dos clientes */
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .btn-a { display: block !important; text-align: center !important; }
      .h1 { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial,Helvetica,sans-serif; color:#1e293b;">
  <!-- Preheader (oculto) -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f1f5f9;">
    Obrigado por falar com {{nome_escritorio}}. Veja os próximos passos.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 1px 3px rgba(15,23,42,0.08);">

          <!-- Cabeçalho -->
          <tr>
            <td style="background-color:#151515; padding:28px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:18px; font-weight:bold; color:#ffffff; letter-spacing:0.3px;">
                    {{nome_escritorio}}
                  </td>
                  <td align="right" style="font-size:13px; color:#a1a1aa;">
                    Advocacia
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:40px 40px 8px 40px;">
              <h1 class="h1" style="margin:0 0 16px 0; font-size:26px; line-height:1.25; color:#0f172a;">
                Olá, {{nome_cliente}}!
              </h1>
              <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6; color:#334155;">
                Obrigado por entrar em contato com o {{nome_escritorio}}. Recebemos a sua mensagem
                e queremos que você se sinta bem acompanhado desde o primeiro momento.
              </p>
              <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6; color:#334155;">
                Em breve retornaremos para entender melhor a sua necessidade. Se preferir, você já
                pode escolher um horário para conversarmos com calma:
              </p>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td class="px" align="center" style="padding:16px 40px 24px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="border-radius:10px; background-color:#84dddb;">
                    <a class="btn-a" href="{{link_agendamento}}" target="_blank"
                       style="display:inline-block; padding:14px 32px; font-size:16px; font-weight:bold; color:#0f172a; text-decoration:none; border-radius:10px;">
                      Agendar uma conversa
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reforço -->
          <tr>
            <td class="px" style="padding:0 40px 8px 40px;">
              <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6; color:#334155;">
                Ficou com alguma dúvida antes disso? É só responder a este e-mail ou falar com a
                gente pelos canais abaixo. Teremos prazer em ajudar.
              </p>
            </td>
          </tr>

          <!-- Contatos -->
          <tr>
            <td class="px" style="padding:8px 40px 24px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:10px;">
                <tr>
                  <td style="padding:16px 20px; font-size:14px; line-height:1.8; color:#475569;">
                    <strong style="color:#0f172a;">Fale conosco</strong><br>
                    Telefone: {{telefone}}<br>
                    WhatsApp: <a href="{{link_whatsapp}}" target="_blank" style="color:#151515; text-decoration:none;">iniciar conversa</a><br>
                    E-mail: <a href="mailto:{{email}}" style="color:#151515; text-decoration:none;">{{email}}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Assinatura -->
          <tr>
            <td class="px" style="padding:0 40px 40px 40px;">
              <p style="margin:0; font-size:16px; line-height:1.6; color:#334155;">
                Atenciosamente,<br>
                <strong style="color:#0f172a;">{{nome_advogado}}</strong><br>
                {{nome_escritorio}}
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#0f172a; padding:24px 40px;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#94a3b8;">
                Você recebeu este e-mail porque entrou em contato com {{nome_escritorio}}.
                Se não foi você, por favor desconsidere esta mensagem.
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
