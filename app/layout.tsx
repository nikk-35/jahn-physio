import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jahn Physiotherapie – Ihre Gesundheit. Unsere Leidenschaft.",
  description: "Physiotherapie in Langgöns seit über 20 Jahren. Krankengymnastik, Manuelle Therapie, Massage und mehr. Thomas Jahn – Ihr vertrauensvoller Physiotherapeut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
