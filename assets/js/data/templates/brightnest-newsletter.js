/**
 * Template: Newsletter de conteúdo — BrightNest (parentalidade).
 * Marca fake (design de referência "Good Inside"). Menu, ícone, seções de
 * conteúdo com links, membership, evento, CTA, bloco amarelo e rodapé.
 * @type {import("../../../../types/template").EmailTemplate}
 */
export const template = {
  id: "brightnest-newsletter",
  slug: "brightnest-newsletter",
  name: "Newsletter de conteúdo — BrightNest",
  description:
    "Newsletter editorial de parentalidade com menu, seções de livros/recursos, membership, evento, CTAs e rodapé completo.",
  category: "Institucional",
  segment: "Saúde",
  subject: "Mês da Aceitação do Autismo: livros, séries e recursos",
  preheader:
    "Alguns livros, séries e recursos para falar sobre autismo com mais compreensão e alegria.",
  thumbnail: "",
  createdAt: "2026-10-09",
  updatedAt: "2026-10-09",
  publicacao: {
    nome: "Newsletter de conteúdo — BrightNest",
    categoria: "Nutrição",
    subcategoria: "Conteúdo educativo",
    status: "Publicado",
    assunto: "Mês da Aceitação do Autismo: livros, séries e recursos",
  },
  variables: [
    { key: "data_evento", label: "Data do evento", description: "Data/horário do círculo de apoio (ex.: 10 de abril | 12h)." },
    { key: "url_learn_more", label: "URL — Saiba mais", description: "Link do botão “Saiba mais” (membership)." },
    { key: "url_rsvp", label: "URL — Confirmar", description: "Link do botão “Confirmar presença” (evento)." },
    { key: "url_preferencias", label: "URL — Preferências", description: "Link “Atualizar preferências” no rodapé." },
    { key: "url_unsubscribe", label: "URL — Cancelar inscrição", description: "Link “Cancelar tudo” no rodapé." },
  ],
  html: `<!DOCTYPE html>
<html lang="pt-BR" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Mês da Aceitação do Autismo — BrightNest</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { margin:0; padding:0; background-color:#ffffff; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; }
    .glink { color:#2f7d4f; font-weight:700; text-decoration:underline; }
    .btn-y { display:inline-block; background-color:#ffd60a; color:#1a1a1a; font-family:'Inter',Arial,sans-serif; font-weight:700; font-size:13px; letter-spacing:0.5px; text-decoration:none; padding:14px 22px; border-radius:6px; }
    @media only screen and (max-width:600px) {
      .container { width:100% !important; }
      .px { padding-left:24px !important; padding-right:24px !important; }
      .nav a { display:inline-block; margin:4px 8px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Inter',Arial,Helvetica,sans-serif; color:#2b2b2b;">
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#ffffff;">
    Alguns livros, séries e recursos para falar sobre autismo com mais compreensão e alegria.&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff;">

          <!-- Menu -->
          <tr>
            <td style="background-color:#f3ead1; padding:22px 24px; text-align:center;">
              <div style="font-weight:800; font-size:22px; letter-spacing:1px; color:#1a1a1a;">BrightNest</div>
              <div class="nav" style="margin-top:10px; font-size:13px; font-weight:600; color:#6b6450;">
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Início</a>
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Workshops</a>
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Avaliações</a>
                <a href="#" style="color:#6b6450; text-decoration:none; margin:0 10px;">Começar</a>
              </div>
            </td>
          </tr>

          <!-- Ícone -->
          <tr>
            <td style="padding:36px 0 8px 0; text-align:center;">
              <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M29 48C29 48 6 34 6 18.5C6 11 11.6 6 18 6c4.3 0 8 2.4 11 7 3-4.6 6.7-7 11-7 6.4 0 12 5 12 12.5C52 34 29 48 29 48Z" stroke="#1a1a1a" stroke-width="2.4" stroke-linejoin="round"/>
                <path d="M41 20h4a2 2 0 0 1 2 2v3a2.5 2.5 0 0 0 0 5v3a2 2 0 0 1-2 2h-4" stroke="#1a1a1a" stroke-width="2.2" stroke-linejoin="round" fill="#ffffff"/>
              </svg>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td class="px" style="padding:12px 40px 0 40px;">
              <h1 style="margin:0 0 20px 0; font-size:30px; font-weight:800; color:#1a1a1a;">Olá,</h1>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                No Mês da Aceitação do Autismo, estamos celebrando as crianças autistas e as muitas
                formas como elas vivem o mundo.
              </p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                Porque pertencer não é sobre mudar quem você é. É sobre ser reconhecido, respeitado e
                acolhido <em>exatamente como você é.</em>
              </p>
              <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                Separamos alguns livros, séries e recursos da BrightNest e de outras fontes para ajudar
                as famílias a falar sobre autismo com mais compreensão, mais clareza e mais alegria.
              </p>
            </td>
          </tr>

          <tr><td class="px" style="padding:28px 40px 0 40px;"><div style="border-top:1px solid #e7e7e7; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Livros e séries -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px;">
              <h2 style="margin:0 0 18px 0; font-size:17px; font-weight:700; color:#1a1a1a;">Livros e séries para ver com sua criança</h2>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Pablo (série)</a></p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Pablo é um menino autista com uma imaginação enorme, que ele usa para entender o mundo ao redor. Uma série sensível que celebra a arte, os grandes sentimentos e o rico mundo interior de tantas crianças autistas.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Mais que palavras: tantos jeitos de dizer o que sentimos</a></p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">A história acompanha uma criança que fala poucas palavras, mas tem muito a comunicar. Um lembrete poderoso de que a conexão acontece por gestos, dispositivos, movimento, expressão e presença.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Todas as minhas listras</a></p>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Neste livro ilustrado, Zane teme que o autismo seja a coisa que todos mais notam nele. Com a ajuda da mãe, ele aprende que o autismo é só uma parte de quem ele é, entre tantas outras partes importantes.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Benji, o dia ruim e eu</a></p>
              <p style="margin:0; font-size:15px; line-height:1.6; color:#3a3a3a;">Quando os dois irmãos têm um dia difícil, Sammy se pergunta se alguém percebe que ele também está em apuros — até seu irmão autista, Benji, entrar para ajudar. Uma história doce que abre conversas sobre sentimentos entre irmãos, sentir-se invisível e estar presente um para o outro.</p>
            </td>
          </tr>

          <tr><td class="px" style="padding:28px 40px 0 40px;"><div style="border-top:1px solid #e7e7e7; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Novidades na assinatura -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px;">
              <h2 style="margin:0 0 16px 0; font-size:17px; font-weight:700; color:#1a1a1a;">Novidades na assinatura</h2>
              <p style="margin:0 0 18px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                Estamos sempre atualizando nossa biblioteca com base no que os membros querem e precisam.
                As famílias pediram mais apoio sobre autismo, então nos juntamos à psicóloga clínica
                Dra. Alex Reed para tornar isso realidade - <strong>agora disponível no app da BrightNest</strong>.
              </p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Quando o autismo passa a fazer parte da sua família</a></p>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Um guia para pais e mães navegando um novo diagnóstico.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Falando sobre autismo com seu filho e com os outros</a></p>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Um ponto de partida acolhedor para quando você não sabe como começar a conversa.</p>

              <p style="margin:0 0 4px 0;"><a href="#" class="glink">Como a previsibilidade ajuda crianças autistas a se sentirem mais capazes</a></p>
              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">Quatro formas práticas de criar mais estabilidade em casa.</p>

              <a href="{{url_learn_more}}" target="_blank" class="btn-y">SAIBA MAIS</a>
            </td>
          </tr>

          <tr><td class="px" style="padding:28px 40px 0 40px;"><div style="border-top:1px solid #e7e7e7; font-size:0; line-height:0;">&nbsp;</div></td></tr>

          <!-- Círculo de apoio -->
          <tr>
            <td class="px" style="padding:24px 40px 0 40px;">
              <span style="display:inline-block; background:#ffd60a; color:#1a1a1a; font-size:12px; font-weight:700; padding:5px 12px; border-radius:6px;">Círculos de Apoio</span>
              <h2 style="margin:16px 0 6px 0; font-size:18px; font-weight:700; color:#1a1a1a;">Criando com crianças neurodivergentes: Aceitação do Autismo</h2>
              <p style="margin:0 0 16px 0; font-size:14px; font-weight:600; color:#6b6450;">{{data_evento}}</p>
              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.6; color:#3a3a3a;">
                A Dra. Alex Reed vai conduzir um círculo de apoio especial neste mês. Se você quer um
                espaço para trazer perguntas reais, se sentir menos sozinho e receber apoio de verdade,
                vamos adorar ter você lá.
              </p>
              <a href="{{url_rsvp}}" target="_blank" class="btn-y">CONFIRMAR PRESENÇA</a>
            </td>
          </tr>

          <!-- Bloco amarelo -->
          <tr>
            <td style="padding:34px 0 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffd60a;">
                <tr>
                  <td class="px" style="padding:34px 40px; font-size:15px; line-height:1.6; color:#1a1a1a;">
                    <p style="margin:0 0 18px 0;">Esperamos que isto dê à sua família alguns caminhos significativos para manter a conversa viva.</p>
                    <p style="margin:0 0 18px 0;">Porque não se trata de ajudar crianças autistas a caberem melhor no mundo. Trata-se de liderar com curiosidade e compreensão. É assim que construímos um mundo que dá às crianças mais espaço para serem elas mesmas.</p>
                    <p style="margin:0;">Time BrightNest</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Disclaimer -->
          <tr>
            <td class="px" style="padding:26px 48px 0 48px; text-align:center;">
              <p style="margin:0; font-size:12px; font-style:italic; line-height:1.6; color:#8a8a8a;">
                Este conteúdo não é orientação médica ou terapêutica. A BrightNest não diagnostica nem
                trata condições médicas ou de desenvolvimento. Se você tiver dúvidas ou preocupações
                sobre sua criança, consulte um profissional qualificado.
              </p>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="padding:30px 24px 36px 24px; text-align:center;">
              <div style="width:34px; height:34px; line-height:34px; margin:0 auto 14px auto; background:#ffd60a; border-radius:50%; font-weight:800; color:#1a1a1a;">B</div>
              <p style="margin:0 0 14px 0; font-size:13px; font-weight:600; color:#1a1a1a;">
                <a href="#" style="color:#1a1a1a; text-decoration:none;">App</a> &nbsp;·&nbsp;
                <a href="#" style="color:#1a1a1a; text-decoration:none;">Workshops</a> &nbsp;·&nbsp;
                <a href="#" style="color:#1a1a1a; text-decoration:none;">Ajuda</a>
              </p>
              <p style="margin:0 0 4px 0; font-size:12px;"><a href="#" style="color:#2f7d4f; text-decoration:underline;">Avisos legais</a></p>
              <p style="margin:0 0 14px 0; font-size:12px; color:#8a8a8a;">BrightNest, Inc. | Av. Paulista, 1000 | São Paulo, SP</p>
              <p style="margin:0; font-size:12px; color:#8a8a8a;">
                Não quer mais receber estes e-mails?<br>
                <a href="{{url_preferencias}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Atualizar preferências</a>
                ou <a href="{{url_unsubscribe}}" target="_blank" style="color:#8a8a8a; text-decoration:underline;">Cancelar tudo</a>
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
