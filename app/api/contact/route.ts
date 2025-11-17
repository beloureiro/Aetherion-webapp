import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Conteúdo do email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      cc: process.env.EMAIL_CC,
      subject: `[Aetherion Website] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #152A3B 0%, #1a3a4f 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">AETHERION</h1>
            <p style="color: #e0e0e0; margin: 10px 0 0 0; font-size: 14px;">Empowering Lives for Generations</p>
          </div>

          <div style="background: #ffffff; padding: 30px; border-left: 4px solid #152A3B;">
            <h2 style="color: #152A3B; margin-top: 0; font-size: 22px; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
              Nova Mensagem do Site
            </h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;">
                <strong style="color: #152A3B; display: inline-block; width: 100px;">Nome:</strong>
                <span style="color: #333;">${name}</span>
              </p>

              <p style="margin: 10px 0;">
                <strong style="color: #152A3B; display: inline-block; width: 100px;">Email:</strong>
                <span style="color: #333;">${email}</span>
              </p>

              <p style="margin: 10px 0;">
                <strong style="color: #152A3B; display: inline-block; width: 100px;">Assunto:</strong>
                <span style="color: #333;">${subject}</span>
              </p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin-top: 20px;">
              <strong style="color: #152A3B; display: block; margin-bottom: 10px;">Mensagem:</strong>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>

          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 3px solid #152A3B;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              Mensagem recebida através do formulário de contato do website Aetherion
            </p>
            <p style="color: #999; margin: 5px 0 0 0; font-size: 11px;">
              ${new Date().toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' })}
            </p>
          </div>
        </div>
      `,
      text: `
Nova mensagem do website Aetherion

Nome: ${name}
Email: ${email}
Assunto: ${subject}

Mensagem:
${message}

---
Recebido em: ${new Date().toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' })}
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
