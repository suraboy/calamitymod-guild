import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calamity Mod Guild — Class & Progression Guide",
  description: "คู่มือเลือกอาชีพและการคราฟอาวุธ เกราะ สำหรับ Terraria Calamity Mod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ background: '#080810' }}
    >
      <body className="min-h-full flex flex-col bg-[#080810] text-slate-200">{children}</body>
    </html>
  );
}
