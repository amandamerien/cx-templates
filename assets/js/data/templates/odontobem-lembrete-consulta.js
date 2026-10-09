/**
 * Template: Lembrete de consulta — OdontoBem (clínica odontológica).
 * Marca fake "OdontoBem". E-mail transacional de lembrete de consulta com
 * ações de confirmar/remarcar e ícone SVG original (dente + calendário).
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "odontobem-lembrete-consulta",
  slug: "odontobem-lembrete-consulta",
  name: "Lembrete de consulta — OdontoBem",
  description:
    "E-mail transacional de lembrete de consulta com confirmar/remarcar e ícone original.",
  category: "Lembrete",
  segment: "Clínicas",
  subject: "Lembrete: sua consulta é amanhã",
  preheader: "Confirme sua presença em um clique.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Lembrete de consulta — OdontoBem",
    categoria: "Transacional",
    subcategoria: "Sem subcategoria",
    status: "Publicado",
    assunto: "Lembrete: sua consulta é amanhã",
  },
  variables: [
    { key: "nome_cliente", label: "Nome do cliente", description: "Primeiro nome de quem recebe o lembrete." },
    { key: "data_consulta", label: "Data da consulta", description: "Data da consulta (ex.: 12/10)." },
    { key: "hora_consulta", label: "Hora da consulta", description: "Horário da consulta (ex.: 14h30)." },
    { key: "profissional", label: "Profissional", description: "Profissional que fará o atendimento (ex.: Dra. Helena Prado)." },
    { key: "url_confirmar", label: "URL — Confirmar presença", description: "Link do botão “Confirmar presença”." },
    { key: "url_remarcar", label: "URL — Remarcar", description: "Link do botão “Remarcar”." },
    { key: "telefone", label: "Telefone", description: "Telefone de contato da clínica (ex.: (11) 4000-0000)." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Lembrete: sua consulta é amanhã</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#eef5f7; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    a { color:#0e8ba3; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:28px !important; padding-right:28px !important; }
      .h1 { font-size:26px !important; }
      .btn { display:block !important; width:100% !important; box-sizing:border-box !important; text-align:center !important; }
      .btn-gap { height:12px !important; line-height:12px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#eef5f7; font-family:'Inter',Arial,Helvetica,sans-serif; color:#10323a;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#eef5f7;">
    Confirme sua presença em um clique.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef5f7;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 8px 18px 8px;">
              <span style="display:inline-block; width:28px; height:28px; background:#0e8ba3; border-radius:8px; vertical-align:middle;"></span>
              <span style="font-size:20px; font-weight:800; letter-spacing:-0.4px; color:#0b5563; margin-left:8px; vertical-align:middle;">OdontoBem</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #dcebef;">

              <!-- Hero azul/verde-água com ícone SVG original (dente + calendário) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0b5563; padding:30px 24px; text-align:center;">
                    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dente e calendário de consulta">
                      <!-- disco de fundo -->
                      <circle cx="60" cy="60" r="56" fill="#0e6f82"/>
                      <circle cx="60" cy="60" r="56" fill="none" stroke="#3fb6cc" stroke-width="2"/>
                      <!-- dente -->
                      <path d="M60 30c-11 0-18 6-24 6-5 0-8-2-8-2s-3 10 2 30c3 12 6 24 11 24 4 0 4-14 9-14s5 14 9 14c5 0 8-12 11-24 5-20 2-30 2-30s-3 2-8 2c-6 0-13-6-24-6z" fill="#ffffff"/>
                      <path d="M46 46c3-3 8-4 14-4" stroke="#bfe8f0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                      <!-- calendário (selo) -->
                      <rect x="70" y="68" width="34" height="32" rx="6" fill="#9ef0d6"/>
                      <rect x="70" y="68" width="34" height="10" rx="6" fill="#36c89b"/>
                      <rect x="77" y="63" width="4" height="10" rx="2" fill="#0b5563"/>
                      <rect x="93" y="63" width="4" height="10" rx="2" fill="#0b5563"/>
                      <path d="M79 88l5 5 9-10" stroke="#0b5563" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </td>
                </tr>
              </table>

              <!-- Conteúdo -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="px" style="padding:34px 40px 0 40px;">
                    <h1 class="h1" style="margin:0 0 16px 0; font-size:28px; font-weight:800; letter-spacing:-0.4px; color:#10323a;">Oi, {{nome_cliente}}!</h1>
                    <p style="margin:0 0 24px 0; font-size:16px; line-height:1.6; color:#415a61;">Passando para lembrar da sua consulta na OdontoBem.</p>
                  </td>
                </tr>

                <!-- Cartão de detalhes -->
                <tr>
                  <td class="px" style="padding:0 40px 0 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1fafc; border:1px solid #d4edf2; border-radius:12px;">
                      <tr>
                        <td style="padding:20px 22px;">
                          <p style="margin:0 0 10px 0; font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#0e8ba3;">Sua consulta</p>
                          <p style="margin:0 0 6px 0; font-size:17px; line-height:1.5; color:#10323a;"><strong style="color:#0b5563;">Data:</strong> {{data_consulta}} às {{hora_consulta}}</p>
                          <p style="margin:0; font-size:17px; line-height:1.5; color:#10323a;"><strong style="color:#0b5563;">Profissional:</strong> {{profissional}}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Botões -->
                <tr>
                  <td class="px" style="padding:26px 40px 0 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                      <tr>
                        <td align="left">
                          <a href="{{url_confirmar}}" target="_blank" class="btn" style="display:inline-block; background-color:#0e8ba3; color:#ffffff; font-weight:700; font-size:15px; text-decoration:none; padding:15px 28px; border-radius:40px;">Confirmar presença</a>
                        </td>
                      </tr>
                      <tr><td class="btn-gap" style="height:14px; line-height:14px; font-size:0;">&nbsp;</td></tr>
                      <tr>
                        <td align="left">
                          <a href="{{url_remarcar}}" target="_blank" class="btn" style="display:inline-block; background-color:#ffffff; color:#0b5563; font-weight:700; font-size:15px; text-decoration:none; padding:14px 28px; border-radius:40px; border:2px solid #0e8ba3;">Remarcar</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="px" style="padding:28px 40px 36px 40px;">
                    <p style="margin:0; font-size:15px; line-height:1.6; color:#415a61;">Precisa falar com a gente? Ligue para <a href="tel:{{telefone}}" style="color:#0e8ba3; font-weight:600; text-decoration:none;">{{telefone}}</a>.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:26px 16px 0 16px; text-align:center;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#7d939a;">OdontoBem Clínica Odontológica, Av. Paulista, 1000, São Paulo, SP</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
};
