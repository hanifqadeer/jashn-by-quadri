import { NextRequest, NextResponse } from 'next/server';
import { resend, adminEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, eventType, eventDate, guestCount, message } = body;

    if (!name || !email || !message || !eventType) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Send notification to admin
    await resend.emails.send({
      from: 'JASHN by Quadri <noreply@jashnbyquadri.com>',
      to: adminEmail,
      subject: `New Enquiry: ${eventType} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f0e8; padding: 40px;">
          <h1 style="color: #e8c96a; font-size: 28px; margin-bottom: 8px;">New Event Enquiry</h1>
          <p style="color: #888; margin-bottom: 32px;">JASHN by Quadri — Contact Form</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #e8c96a;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Event Type</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${eventType}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Event Date</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${eventDate || 'Not specified'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Guest Count</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${guestCount || 'Not specified'}</td></tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #111; border-left: 2px solid #d4a843;">
            <p style="color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Message</p>
            <p style="color: #aaa; line-height: 1.8;">${message}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to client
    await resend.emails.send({
      from: 'JASHN by Quadri <noreply@jashnbyquadri.com>',
      to: email,
      subject: 'We\'ve received your enquiry — JASHN by Quadri',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f0e8; padding: 40px;">
          <h1 style="color: #e8c96a; font-size: 28px; margin-bottom: 8px;">Thank You, ${name}</h1>
          <p style="color: #888; margin-bottom: 32px; line-height: 1.8;">
            We've received your enquiry for a <strong style="color: #e8c96a;">${eventType}</strong> and our team will reach out within 24 hours to discuss your vision.
          </p>
          <p style="color: #555; font-size: 13px;">— The JASHN by Quadri Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('[/api/contact] Error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
