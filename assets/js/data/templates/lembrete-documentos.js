/**
 * Template: Lembrete de documentos.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "adv-lembrete-documentos",
  slug: "lembrete-documentos",
  name: "Lembrete de documentos",
  description:
    "Informe ao cliente quais documentos ele precisa enviar antes da consulta.",
  category: "Lembrete",
  segment: "Advocacia",
  subject: "Documentos para a sua consulta em {{data_consulta}}",
  preheader:
    "{{nome_cliente}}, separe estes documentos antes da nossa conversa.",
  thumbnail: "",
  createdAt: "2026-08-08",
  updatedAt: "2026-08-08",
  publicacao: {
    nome: "Lembrete de Documentos",
    categoria: "Agendamento",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Documentos para a sua consulta em {{data_consulta}}",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome de quem vai enviar os documentos.",
    },
    {
      key: "nome_escritorio",
      label: "Nome do escritório",
      description: "Nome do escritório de advocacia remetente.",
    },
    {
      key: "nome_advogado",
      label: "Nome do advogado",
      description: "Advogado responsável pelo atendimento.",
    },
    {
      key: "data_consulta",
      label: "Data da consulta",
      description: "Data em que os documentos serão necessários.",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link para o cliente enviar os documentos.",
    },
    {
      key: "texto_botao",
      label: "Texto do botão",
      description: "Texto do botão principal. Ex.: Enviar documentos.",
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
  <title>Lembrete de documentos</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .btn-a { display: block !important; text-align: center !important; }
      .h1 { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial,Helvetica,sans-serif; color:#1e293b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f1f5f9;">
    {{nome_cliente}}, separe estes documentos antes da nossa conversa.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
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
                    Preparação para a consulta
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:40px 40px 8px 40px;">
              <h1 class="h1" style="margin:0 0 16px 0; font-size:26px; line-height:1.25; color:#0f172a;">
                Olá, {{nome_cliente}}
              </h1>
              <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6; color:#334155;">
                Para aproveitarmos melhor a nossa conversa no dia <strong>{{data_consulta}}</strong>,
                separamos abaixo os documentos que ajudam a entender a sua situação. Se puder,
                envie com antecedência.
              </p>
            </td>
          </tr>

          <!-- Checklist -->
          <tr>
            <td class="px" style="padding:8px 40px 8px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:12px;">
                <tr>
                  <td style="padding:8px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="padding:12px 0; font-size:16px; line-height:1.5; color:#334155; border-bottom:1px solid #e2e8f0;">
                          <span style="color:#151515; font-weight:bold;">&#10003;</span>&nbsp;&nbsp;Documento de identidade com foto (RG ou CNH)
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:12px 0; font-size:16px; line-height:1.5; color:#334155; border-bottom:1px solid #e2e8f0;">
                          <span style="color:#151515; font-weight:bold;">&#10003;</span>&nbsp;&nbsp;CPF e comprovante de endereço atualizado
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:12px 0; font-size:16px; line-height:1.5; color:#334155; border-bottom:1px solid #e2e8f0;">
                          <span style="color:#151515; font-weight:bold;">&#10003;</span>&nbsp;&nbsp;Documentos relacionados ao seu assunto (contratos, comprovantes, notificações)
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:12px 0; font-size:16px; line-height:1.5; color:#334155;">
                          <span style="color:#151515; font-weight:bold;">&#10003;</span>&nbsp;&nbsp;Mensagens, e-mails ou protocolos que ajudem a contar o que aconteceu
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Botão -->
          <tr>
            <td class="px" align="center" style="padding:24px 40px 8px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="border-radius:10px; background-color:#84dddb;">
                    <a class="btn-a" href="{{url_botao}}" target="_blank"
                       style="display:inline-block; padding:14px 32px; font-size:16px; font-weight:bold; color:#0f172a; text-decoration:none; border-radius:10px;">
                      {{texto_botao}}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Observação -->
          <tr>
            <td class="px" style="padding:16px 40px 8px 40px;">
              <p style="margin:0 0 16px 0; font-size:14px; line-height:1.6; color:#64748b;">
                Não encontrou algum documento? Sem problema. Traga o que tiver em mãos e
                seguimos a partir disso. Se preferir, fale com a gente pelo
                <a href="{{link_whatsapp}}" target="_blank" style="color:#151515; text-decoration:none;">WhatsApp</a>
                ou pelo e-mail
                <a href="mailto:{{email}}" style="color:#151515; text-decoration:none;">{{email}}</a>.
              </p>
            </td>
          </tr>

          <!-- Assinatura -->
          <tr>
            <td class="px" style="padding:0 40px 40px 40px;">
              <p style="margin:0; font-size:16px; line-height:1.6; color:#334155;">
                Até breve,<br>
                <strong style="color:#0f172a;">{{nome_advogado}}</strong><br>
                {{nome_escritorio}}
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#0f172a; padding:24px 40px;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#94a3b8;">
                {{nome_escritorio}} • Envie apenas os documentos solicitados por canais oficiais do escritório.
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
