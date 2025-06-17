import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  try {
    const data = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>", // ✅ or your verified domain
      to: ["nkavya@umich.edu"],                   // ✅ your receiving email
      subject: `New message from ${name}`,
      reply_to: email,
      text: message,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
