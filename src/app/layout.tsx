import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fund Fix & Flip - Fast Real Estate Investment Financing",
  description: "Get fast, flexible financing for your fix and flip projects. Up to 90% LTV, 24-48 hour approval, competitive rates starting at 9.5% APR.",
  keywords: "fix and flip financing, real estate investment loans, hard money lending, property rehab loans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
