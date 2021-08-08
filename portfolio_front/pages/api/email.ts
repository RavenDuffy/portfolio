import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { FormData } from '../../components/contact/contact'

const EmailMe = (formData: FormData) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  transporter.verify((error) => {
    if (error) console.error(error)
    else {
      transporter.sendMail({
        from: formData.email,
        to: process.env.EMAIL_USERNAME,
        subject: `${formData.name}'s Project Proposal`,
        text: formData.details,
      })
    }
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body === undefined || req.body === '') {
    res.status(400).json({ error: 'Please send a valid body' })
    return
  }

  EmailMe(req.body.formData)

  res.status(200).json({ email: process.env.EMAIL_USERNAME })
}
