import { NextRequest, NextResponse } from 'next/server';
import { resend, adminEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      companyName,
      contactPerson,
      email,
      phone,
      businessType,
      eventType,
      eventDate,
      duration,
      location,
      guestCount,
      message,
    } = body;

    if (!companyName || !contactPerson || !email || !phone || !businessType || !eventType || !duration || !location) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Send to admin
    await resend.emails.send({
      from: 'JASHN by Quadri <noreply@jashnbyquadri.com>',
      to: adminEmail,
      subject: `B2B Photobooth Enquiry: ${companyName} — ${eventType}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f0e8; padding: 40px;">
          <h1 style="color: #e8c96a; font-size: 28px; margin-bottom: 8px;">B2B Photobooth Enquiry</h1>
          <p style="color: #888; margin-bottom: 32px;">JASHN by Quadri — Commercial Photobooth</p>
          
          <p style="color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;">Company Details</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888; width: 40%;">Company</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${companyName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Contact</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${contactPerson}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #e8c96a;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Phone</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Business Type</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${businessType}</td></tr>
          </table>

          <p style="color: #d4a843; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;">Event Details</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888; width: 40%;">Event Type</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${eventType}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Date</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${eventDate || 'TBD'}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Duration</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${duration}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Location</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${location}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888;">Footfall</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${guestCount || 'Not specified'}</td></tr>
          </table>

          ${message ? `<div style="padding: 20px; background: #111; border-left: 2px solid #d4a843;"><p style="color: #888; line-height: 1.8;">${message}</p></div>` : ''}
        </div>
      `,
    });

    // Auto-reply
    await resend.emails.send({
      from: 'JASHN by Quadri <noreply@jashnbyquadri.com>',
      to: email,
      subject: 'Your B2B Photobooth Enquiry — JASHN by Quadri',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f0e8; padding: 40px;">
          <h1 style="color: #e8c96a; font-size: 24px; margin-bottom: 12px;">Thank you, ${contactPerson}</h1>
          <p style="color: #888; line-height: 1.8; margin-bottom: 24px;">
            We've received your commercial photobooth enquiry for <strong style="color: #e8c96a;">${companyName}</strong>. 
            Our partnerships team will be in touch within 24 hours.
          </p>
          <p style="color: #555; font-size: 13px;">— The JASHN by Quadri Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('[/api/photobooth] Error:', err);
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
