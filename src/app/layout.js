"use client"
import "./globals.css";
import AuthProvider from "@/services/AuthProvider";
import TranstackProvider from "@/services/TranstackProvider";
import Navbar from "../components/shared/Navbar";
import { usePathname } from "next/navigation";
import { Suspense } from "react";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavFoot =
    pathname === "/error" || pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className={`antialiased font-popins`}>
        <TranstackProvider>
          <AuthProvider>
            {!hideNavFoot && (
              <Suspense fallback={<div>...</div>}>
                <Navbar />
              </Suspense>
            )}
            {children}
          </AuthProvider>
        </TranstackProvider>
      </body>
    </html>
  );
}
