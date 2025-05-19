import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, message, toEmail } = body;

        await resend.emails.send({
            from: "noreply@resend.dev",
            to: toEmail,
            subject: `Ny besked fra ${name}`,
            html: `
                <p><strong>Navn:</strong> ${name}</p>
                ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Besked:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error when sending email:", error);
        return NextResponse.json({ success: false, error: "Couldn't send email" }, { status: 500 });
    }
}