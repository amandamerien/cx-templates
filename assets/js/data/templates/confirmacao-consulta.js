/**
 * Template: Confirmação de consulta.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "adv-confirmacao-consulta",
  slug: "confirmacao-consulta",
  name: "Confirmação de consulta",
  description:
    "Confirme a data e o horário da consulta com o cliente, com endereço ou link e botão para confirmar.",
  category: "Confirmação",
  segment: "Advocacia",
  subject: "Sua consulta está marcada para {{data_consulta}}",
  preheader:
    "{{nome_cliente}}, confirme sua consulta com {{nome_escritorio}}.",
  thumbnail: "",
  createdAt: "2026-08-08",
  updatedAt: "2026-08-08",
  publicacao: {
    nome: "Confirmação de Consulta",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Sua consulta está marcada para {{data_consulta}}",
  },
  variables: [
    {
      key: "nome_cliente",
      label: "Nome do cliente",
      description: "Nome de quem vai comparecer à consulta.",
    },
    {
      key: "nome_escritorio",
      label: "Nome do escritório",
      description: "Nome do escritório de advocacia remetente.",
    },
    {
      key: "nome_advogado",
      label: "Nome do advogado",
      description: "Advogado que fará o atendimento.",
    },
    {
      key: "data_consulta",
      label: "Data da consulta",
      description: "Data marcada para o atendimento. Ex.: 12/08/2026.",
    },
    {
      key: "horario_consulta",
      label: "Horário da consulta",
      description: "Horário marcado. Ex.: 14h30.",
    },
    {
      key: "endereco",
      label: "Endereço",
      description: "Endereço do escritório ou link da reunião on-line.",
    },
    {
      key: "url_botao",
      label: "URL do botão",
      description: "Link acionado ao confirmar a presença.",
    },
    {
      key: "texto_botao",
      label: "Texto do botão",
      description: "Texto exibido no botão principal. Ex.: Confirmar presença.",
    },
    {
      key: "telefone",
      label: "Telefone",
      description: "Telefone para remarcar ou tirar dúvidas.",
    },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Confirmação de consulta</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .btn-a { display: block !important; text-align: center !important; }
      .h1 { font-size: 22px !important; }
      .info-col { display: block !important; width: 100% !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial,Helvetica,sans-serif; color:#1e293b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f1f5f9;">
    {{nome_cliente}}, confirme sua consulta com {{nome_escritorio}}.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
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
                    Confirmação de consulta
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td class="px" style="padding:40px 40px 8px 40px;">
              <h1 class="h1" style="margin:0 0 16px 0; font-size:26px; line-height:1.25; color:#0f172a;">
                Consulta confirmada, {{nome_cliente}}
              </h1>
              <p style="margin:0 0 8px 0; font-size:16px; line-height:1.6; color:#334155;">
                Estamos organizando tudo para o seu atendimento. Confira abaixo os detalhes
                e, se estiver certo, confirme sua presença.
              </p>
            </td>
          </tr>

          <!-- Cartão de detalhes -->
          <tr>
            <td class="px" style="padding:16px 40px 8px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; border:1px solid #d4d4d8; border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="info-col" width="50%" valign="top" style="padding:6px 0; font-size:14px; line-height:1.6; color:#3f3f46;">
                          <span style="display:block; font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#71717a;">Data</span>
                          <strong style="font-size:18px; color:#151515;">{{data_consulta}}</strong>
                        </td>
                        <td class="info-col" width="50%" valign="top" style="padding:6px 0; font-size:14px; line-height:1.6; color:#3f3f46;">
                          <span style="display:block; font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#71717a;">Horário</span>
                          <strong style="font-size:18px; color:#151515;">{{horario_consulta}}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td class="info-col" colspan="2" valign="top" style="padding:14px 0 0 0; font-size:14px; line-height:1.6; color:#3f3f46;">
                          <span style="display:block; font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#71717a;">Local / Link</span>
                          <strong style="font-size:16px; color:#151515;">{{endereco}}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td class="info-col" colspan="2" valign="top" style="padding:14px 0 0 0; font-size:14px; line-height:1.6; color:#3f3f46;">
                          <span style="display:block; font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:#71717a;">Com</span>
                          <strong style="font-size:16px; color:#151515;">{{nome_advogado}}</strong>
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
            <td class="px" style="padding:16px 40px 40px 40px;">
              <p style="margin:0; font-size:14px; line-height:1.6; color:#64748b;">
                Precisa remarcar ou tem alguma dúvida? Fale com a gente pelo telefone
                {{telefone}} ou responda a este e-mail. Pedimos que avise com antecedência
                caso não consiga comparecer.
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#0f172a; padding:24px 40px;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#94a3b8;">
                {{nome_escritorio}} • Esta é uma confirmação automática do seu agendamento.
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
