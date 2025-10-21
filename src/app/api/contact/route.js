import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create Nodemailer transporter for Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@topbizllp.pk",
        pass: "email@Top1",
      },
    });

    // Email options
    const mailOptions = {
      from: '"Top Biz LLP" <info@topbizllp.pk>',
      to: "info@topbizllp.pk",
      subject: `New Contact Form Submission from ${name}`,
      text: `
                You have received a new message from your website contact form.

                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
      html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
