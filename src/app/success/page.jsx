"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success() {
  const [paymentStatus, setPaymentStatus] = useState("Loading...");
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      async function fetchSession() {
        try {
          const response = await fetch(
            `/api/check-session?session_id=${sessionId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch session status");
          }
          const data = await response.json();
          if (data.payment_status) {
            setPaymentStatus(
              data.payment_status === "paid"
                ? "Payment Successful"
                : "Payment Failed"
            );
          } else {
            setPaymentStatus("Payment status unavailable");
          }
        } catch (error) {
          console.error("Error fetching session:", error.message);
          setPaymentStatus("Error fetching payment status");
        }
      }
      fetchSession();
    } else {
      setPaymentStatus("No session ID found");
    }
  }, [sessionId]);

  return (
    <div>
      <h1>{paymentStatus}</h1>
      {paymentStatus === "Payment Successful" && (
        <p>Thank you for your payment!</p>
      )}
      {paymentStatus === "Payment Failed" && (
        <p>There was an issue with your payment.</p>
      )}
    </div>
  );
}
