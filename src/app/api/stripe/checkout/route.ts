import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { priceId, eventName, customerEmail } = body;

    const depositPriceId = priceId ?? process.env.STRIPE_DEPOSIT_PRICE_ID;

    if (!depositPriceId || depositPriceId === 'TODO') {
      return NextResponse.json(
        { error: 'Payment configuration is incomplete. Please contact support.' },
        { status: 503 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: depositPriceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        eventName: eventName ?? 'Custom Event',
        source: 'jashn-web',
      },
      success_url: `${siteUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/book?cancelled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error('[/api/stripe/checkout] Error:', err);
    return NextResponse.json(
      { error: 'Failed to create checkout session. Please try again.' },
      { status: 500 }
    );
  }
}
