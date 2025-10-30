import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Type definition for form data
interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  interest?: string
  message: string
  privacy: boolean
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json()

    // Validate required fields
    const { firstName, lastName, email, phone, message, privacy } = body

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' },
        { status: 400 }
      )
    }

    if (!privacy) {
      return NextResponse.json(
        { error: 'Bitte akzeptiere die Datenschutzerklärung.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse an.' },
        { status: 400 }
      )
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #9333ea 0%, #a855f7 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #9333ea; margin-bottom: 5px; }
            .field-value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #9333ea; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🔔 Neue Kontaktanfrage</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Leadboom Kontaktformular</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Name</div>
                <div class="field-value">${firstName} ${lastName}</div>
              </div>

              <div class="field">
                <div class="field-label">📧 E-Mail</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">📱 Telefon</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>

              ${body.company ? `
              <div class="field">
                <div class="field-label">🏢 Agentur/Unternehmen</div>
                <div class="field-value">${body.company}</div>
              </div>
              ` : ''}

              ${body.interest ? `
              <div class="field">
                <div class="field-label">🎯 Interessensgebiet</div>
                <div class="field-value">${body.interest}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="field-label">💬 Nachricht</div>
                <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                <p>Diese E-Mail wurde automatisch vom Leadboom Kontaktformular gesendet.</p>
                <p>Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version
    const emailText = `
Neue Kontaktanfrage von Leadboom

Name: ${firstName} ${lastName}
E-Mail: ${email}
Telefon: ${phone}
${body.company ? `Agentur/Unternehmen: ${body.company}` : ''}
${body.interest ? `Interessensgebiet: ${body.interest}` : ''}

Nachricht:
${message}

---
Gesendet am: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
    `

    // Send email
    await transporter.sendMail({
      from: `"Leadboom Kontaktformular" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
      text: emailText,
      html: emailHtml,
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Deine Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Dir!'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Es ist ein Fehler beim Versenden der Nachricht aufgetreten. Bitte versuche es später erneut.'
      },
      { status: 500 }
    )
  }
}
