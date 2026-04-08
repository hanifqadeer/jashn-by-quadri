import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'TODO') {
  console.warn('⚠️  RESEND_API_KEY is not configured. Set it in .env.local');
}

export const resend = new Resend(process.env.RESEND_API_KEY ?? 're_placeholder');

export const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@jashnbyquadri.com';
