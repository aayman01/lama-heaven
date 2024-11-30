import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  if (!sessionId) {
    return new Response(JSON.stringify({ error: "Session ID is required" }), {
      status: 400,
    });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return new Response(
      JSON.stringify({ payment_status: session.payment_status }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving session:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to retrieve session" }),
      { status: 500 }
    );
  }
}
