// import { NextApiRequest, NextApiResponse } from 'next';
// const mail = require('@sendgrid/mail');
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { Email } from '../../components/Email';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  try {
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'mtech.websites@gmail.com',
      subject: 'Email from Goshen Group Website',
      html: `<p>Name: ${name} </p><br/><p>Email: ${email}</p><br/><p>Message: ${message}</p>`,
    });
    return NextResponse.json({ hello: 'hello from Resend' });
  } catch (err) {
    return NextResponse.json({ err });
  }
}

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export function handler(req, res) {
//   const body = JSON.parse(req.body);
//   const message = `
//   Name: ${body.name}\r\n
//   Email: ${body.email}\r\n
//   Message: ${body.message}
//   `;
//   const data = {
//     to: 'dtmiller@brandeis.edu',
//     cc: 'johnson.368@gmail.com',
//     from: 'mtech.websites@gmail.com',
//     subject: 'Emai-Test message',
//     test: message,
//     html: message.replace(/\r\n/g, '<br>'),
//   };
//   mail.send(data);
//   res.status(200).json({ status: 'OK' });
// }
// import type { NextApiRequest, NextApiResponse } from 'next';
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(
//   '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'
// );
// type Data = {
//   message: string;
// };
// export async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method === 'POST') {
//     const {
//       name,
//       email,
//       message,
//     }: { name: string; email: string; message: string } = req.body;
//     const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
//     const data = {
//       to: 'dtmiller@brandeis.edu',
//       cc: 'johnson.368@gmail.com',
//       from: 'mtech.websites@gmail.com',
//       subject: `${name.toUpperCase()} sent you a message from Contact Form`,
//       text: `Email => ${email}`,
//       html: msg.replace(/\r\n/g, '<br>'),
//     };
//     try {
//       await sgMail.send(data);
//       res.status(200).json({ message: 'Your message was sent successfully.' });
//     } catch (err) {
//       res
//         .status(500)
//         .json({ message: `There was an error sending your message. ${err}` });
//     }
//   }
// }
