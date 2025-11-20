import type { Metadata } from "next";
import { Afacad_Flux } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const afacadFlux = Afacad_Flux({
  variable: "--font-afacadFlux",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullahi Olaiwon",
  description: "A Software Engineer solving complex problem using 0 and 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-40F4B6REQ8"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-40F4B6REQ8');
  `}
        </Script>
      </head>

      <body className={`${afacadFlux.variable}  antialiased`}>{children}</body>
    </html>
  );
}
