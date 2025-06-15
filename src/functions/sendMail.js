// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { name, email, title, message } = req.body;

//   if (!name || !email || !title || !message) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   // Create reusable transporter object using SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.example.com", // Replace with your SMTP server
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.STMP_USER, // Replace with your SMTP username
//       pass: process.env.STMP_PASS, // Replace with your SMTP password
//     },
//   });

//   try {
//     // Send mail to site owner
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "your_email@example.com", // Your email address
//       subject: title,
//       text: message,
//       html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
//     });

//     // Send auto-reply to user
//     await transporter.sendMail({
//       from: '"Your Site Name" <your_email@example.com>',
//       to: email,
//       subject: "Thank you for contacting us",
//       text: `Hi ${name},\n\nThank you for your message. We will get back to you shortly.\n\nBest regards,\nYour Site Team`,
//       html: `<p>Hi ${name},</p><p>Thank you for your message. We will get back to you shortly.</p><p>Best regards,<br/>Your Site Team</p>`,
//     });

//     res.status(200).json({ success: true, message: "Emails sent" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, message: "Error sending email" });
//   }
// }
