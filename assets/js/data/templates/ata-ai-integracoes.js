/**
 * Template: Integrações — Ata.ai (assistente de IA que grava e transcreve reuniões).
 * Marca fake (design de referência "Fireflies.ai"). E-mail de nutrição apresentando
 * integrações do produto, com ícones SVG originais inline para cada integração fake.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "ata-ai-integracoes",
  slug: "ata-ai-integracoes",
  name: "Integrações — Ata.ai",
  description:
    "E-mail de nutrição apresentando integrações do produto, com ícones originais e CTAs de conexão.",
  category: "Newsletter",
  segment: "Tecnologia",
  subject: "Conecte a Ata.ai às suas ferramentas",
  preheader: "Integre seu fluxo de reuniões com mais de 40 ferramentas.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Integrações — Ata.ai",
    categoria: "Relacionamento",
    subcategoria: "Newsletter",
    status: "Publicado",
    assunto: "Conecte a Ata.ai às suas ferramentas",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Nome usado na saudação." },
    { key: "url_conectar", label: "URL — Conectar", description: "Link dos botões “Conectar” de cada integração." },
    { key: "url_integracoes", label: "URL — Todas as integrações", description: "Link do botão “Explorar todas as integrações”." },
    { key: "url_ajuda", label: "URL — Central de ajuda", description: "Link “central de ajuda”." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “clique aqui para cancelar” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Conecte a Ata.ai às suas ferramentas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#f1effb; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#6b5bf5; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f1effb; font-family:'Inter',Arial,Helvetica,sans-serif; color:#1b1630;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f1effb;">
    Integre seu fluxo de reuniões com mais de 40 ferramentas.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1effb;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:26px; height:26px; vertical-align:middle;">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ata.ai">
                  <rect width="26" height="26" rx="7" fill="#6b5bf5"/>
                  <path d="M8 18l5-11 5 11" stroke="#ffffff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.2 14h5.6" stroke="#ffffff" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                </svg>
              </span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.5px; color:#2a2250; margin-left:8px; vertical-align:middle;">Ata.ai</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden;">

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:36px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 20px 0; font-size:28px; font-weight:800; letter-spacing:-0.5px; color:#1b1630;">Oi, {{nome_cliente}},</h1>
                    <p style="margin:0 0 18px 0; font-size:16px; line-height:1.6; color:#45405c;">A Ata.ai vai muito além do painel. A gente também conecta com mais de 40 ferramentas para enriquecer o seu fluxo de reuniões. Seja em vendas, engenharia ou conteúdo, tem algo pensado para você.</p>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#45405c;">Veja alguns casos de uso com as integrações abaixo e experimente você mesmo.</p>
                  </td>
                </tr>

                <!-- Caixa cinza com integrações -->
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f5fb; border-radius:14px;">

                      <!-- 1) HubFlow (CRM) -->
                      <tr>
                        <td style="padding:22px 22px 18px 22px; border-bottom:1px solid #ebe9f5;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="top" style="width:56px;">
                                <div style="width:44px; height:44px; border-radius:11px; background:#eceaff; text-align:center; line-height:44px;">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HubFlow" style="vertical-align:middle;">
                                    <circle cx="6" cy="6" r="3" stroke="#6b5bf5" stroke-width="2"/>
                                    <circle cx="18" cy="6" r="3" stroke="#6b5bf5" stroke-width="2"/>
                                    <circle cx="12" cy="18" r="3" stroke="#6b5bf5" stroke-width="2"/>
                                    <path d="M7.7 8.2 10.5 15M16.3 8.2 13.5 15" stroke="#6b5bf5" stroke-width="2" stroke-linecap="round"/>
                                  </svg>
                                </div>
                              </td>
                              <td valign="top" style="padding-left:6px;">
                                <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1b1630;">HubFlow <span style="font-size:13px; font-weight:500; color:#8a85a3;">· CRM</span></p>
                                <p style="margin:0 0 12px 0; font-size:14px; line-height:1.55; color:#5a556f;">Envie automaticamente os dados da transcrição para o seu CRM depois da reunião.</p>
                                <a href="{{url_conectar}}" target="_blank" style="display:inline-block; background-color:#eceaff; color:#5b4bd6; font-weight:600; font-size:13px; text-decoration:none; padding:7px 16px; border-radius:40px;">Conectar</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- 2) Chatly (mensageiro) -->
                      <tr>
                        <td style="padding:22px 22px 18px 22px; border-bottom:1px solid #ebe9f5;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="top" style="width:56px;">
                                <div style="width:44px; height:44px; border-radius:11px; background:#eceaff; text-align:center; line-height:44px;">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chatly" style="vertical-align:middle;">
                                    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 14.5z" stroke="#6b5bf5" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M8 9h8M8 12h5" stroke="#6b5bf5" stroke-width="2" stroke-linecap="round"/>
                                  </svg>
                                </div>
                              </td>
                              <td valign="top" style="padding-left:6px;">
                                <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1b1630;">Chatly <span style="font-size:13px; font-weight:500; color:#8a85a3;">· mensageiro</span></p>
                                <p style="margin:0 0 12px 0; font-size:14px; line-height:1.55; color:#5a556f;">Mande transcrições, gravações e notas das reuniões para um canal de chat.</p>
                                <a href="{{url_conectar}}" target="_blank" style="display:inline-block; background-color:#eceaff; color:#5b4bd6; font-weight:600; font-size:13px; text-decoration:none; padding:7px 16px; border-radius:40px;">Conectar</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- 3) Taskio (tarefas) -->
                      <tr>
                        <td style="padding:22px 22px 18px 22px; border-bottom:1px solid #ebe9f5;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="top" style="width:56px;">
                                <div style="width:44px; height:44px; border-radius:11px; background:#eceaff; text-align:center; line-height:44px;">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Taskio" style="vertical-align:middle;">
                                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="#6b5bf5" stroke-width="2"/>
                                    <path d="m8.5 12 2.4 2.4 4.6-5" stroke="#6b5bf5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                              </td>
                              <td valign="top" style="padding-left:6px;">
                                <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1b1630;">Taskio <span style="font-size:13px; font-weight:500; color:#8a85a3;">· tarefas</span></p>
                                <p style="margin:0 0 12px 0; font-size:14px; line-height:1.55; color:#5a556f;">Crie tarefas por comando de voz durante as reuniões.</p>
                                <a href="{{url_conectar}}" target="_blank" style="display:inline-block; background-color:#eceaff; color:#5b4bd6; font-weight:600; font-size:13px; text-decoration:none; padding:7px 16px; border-radius:40px;">Conectar</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- 4) Notea (notas/wiki) -->
                      <tr>
                        <td style="padding:22px 22px 18px 22px; border-bottom:1px solid #ebe9f5;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="top" style="width:56px;">
                                <div style="width:44px; height:44px; border-radius:11px; background:#eceaff; text-align:center; line-height:44px;">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Notea" style="vertical-align:middle;">
                                    <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="#6b5bf5" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M13 3v5h5" stroke="#6b5bf5" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M8.5 13h7M8.5 16.5h5" stroke="#6b5bf5" stroke-width="2" stroke-linecap="round"/>
                                  </svg>
                                </div>
                              </td>
                              <td valign="top" style="padding-left:6px;">
                                <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1b1630;">Notea <span style="font-size:13px; font-weight:500; color:#8a85a3;">· notas/wiki</span></p>
                                <p style="margin:0 0 12px 0; font-size:14px; line-height:1.55; color:#5a556f;">Publique resumos das reuniões como novas páginas automaticamente.</p>
                                <a href="{{url_conectar}}" target="_blank" style="display:inline-block; background-color:#eceaff; color:#5b4bd6; font-weight:600; font-size:13px; text-decoration:none; padding:7px 16px; border-radius:40px;">Conectar</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- 5) Docly (documentos) -->
                      <tr>
                        <td style="padding:22px 22px 22px 22px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="top" style="width:56px;">
                                <div style="width:44px; height:44px; border-radius:11px; background:#eceaff; text-align:center; line-height:44px;">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Docly" style="vertical-align:middle;">
                                    <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7l5.5 5.5v11A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5z" stroke="#6b5bf5" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M13 3v6h6" stroke="#6b5bf5" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="m9 14 2 2 4-4" stroke="#6b5bf5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                              </td>
                              <td valign="top" style="padding-left:6px;">
                                <p style="margin:0 0 4px 0; font-size:16px; font-weight:700; color:#1b1630;">Docly <span style="font-size:13px; font-weight:500; color:#8a85a3;">· documentos</span></p>
                                <p style="margin:0 0 12px 0; font-size:14px; line-height:1.55; color:#5a556f;">Salve notas e resumos como documentos no seu drive automaticamente.</p>
                                <a href="{{url_conectar}}" target="_blank" style="display:inline-block; background-color:#eceaff; color:#5b4bd6; font-weight:600; font-size:13px; text-decoration:none; padding:7px 16px; border-radius:40px;">Conectar</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Botão principal -->
                <tr>
                  <td class="px" style="padding:28px 40px 0 40px; text-align:center;">
                    <a href="{{url_integracoes}}" target="_blank" style="display:inline-block; background-color:#6b5bf5; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 30px; border-radius:40px;">Explorar todas as integrações</a>
                  </td>
                </tr>

                <!-- Ajuda + assinatura -->
                <tr>
                  <td class="px" style="padding:30px 40px 36px 40px;">
                    <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#45405c;"><strong style="color:#1b1630;">Dúvidas?</strong> Tenha respostas na nossa <a href="{{url_ajuda}}" target="_blank" style="color:#6b5bf5; text-decoration:underline;">central de ajuda</a>. Você também pode responder a este e-mail que a gente retorna em até um dia útil!</p>
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#45405c;">— Time Ata.ai</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#8a85a3;">Para parar de receber e-mails assim, <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a85a3; text-decoration:underline;">clique aqui para cancelar</a>.</p>
              <p style="margin:8px 0 0 0; font-size:12px; color:#8a85a3;">Ata.ai Ltda., Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
