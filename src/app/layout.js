import "./globals.css";
import AuthProvider from "@/services/AuthProvider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased font-popins`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
