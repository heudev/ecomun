import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ecomun",
  description: "İZMİR UNIVERSITY OF ECONOMICS ECOMUN CONFERENCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo/favicon.png" type="image/png" sizes="32x32" />
      <body
        className={`antialiased hidden`}
      >
        {children}
      </body>
      <div className="flex justify-center items-center h-screen text-3xl">We will be here soon...</div>
    </html>
  );
}
