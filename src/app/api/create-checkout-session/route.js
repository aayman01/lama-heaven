import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { price, daysBetween } = await req.json();

    // Ensure the URLs are correctly set using the NEXT_PUBLIC_URL environment variable
    const baseUrl = process.env.NEXT_PUBLIC_URL;

    if (!baseUrl) {
      throw new Error(
        "Base URL (NEXT_PUBLIC_URL) is not defined in environment variables."
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Stay Reservation",
            },
            unit_amount: price * daysBetween * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      // success_url: `${baseUrl}/success`,
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
