import nodemailer from 'nodemailer'

export const handler = async (event: any) => {
  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'seemoys@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: 'seemoys@gmail.com',
      subject: subject,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email failed to send' }),
    }
  }
}
