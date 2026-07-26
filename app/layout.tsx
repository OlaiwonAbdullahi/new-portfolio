import type { Metadata } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
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
        <link rel="icon" type="image/png" href="/dp.jpg" />
        <link rel="shortcut icon" href="/dp.jpg" />
        <link rel="apple-touch-icon" href="/dp.jpg" />

        <meta
          name="google-site-verification"
          content="Z9ImB_0s-j0OhbxPBbpqLmtukXX9r2W81ustqCf1Lfs"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W3MX88S0B8"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W3MX88S0B8');
  `}
        </Script>
      </head>

      <body
        className={`${newsreader.variable} ${dmSans.variable} antialiased bg-canvas text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
