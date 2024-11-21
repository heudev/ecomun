import { GoogleAnalytics } from '@next/third-parties/google'
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
        className={`antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-BMN0G9J26G" />
    </html>
  );
}
