import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation (Professional check)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    console.log("Contact Request Received:", { name, email, message });

    // In a real app, you'd use a service like Resend or Nodemailer here
    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}