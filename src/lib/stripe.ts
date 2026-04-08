import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'TODO') {
  console.warn('⚠️  STRIPE_SECRET_KEY is not configured. Set it in .env.local');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'sk_test_placeholder', {
  apiVersion: '2026-03-25.dahlia',
  typescript: true,
});
