import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Test Company — Architecture for a more thoughtful future",
  description:
    "Test Company is an international architecture studio working at the intersection of space, environment, material and human experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
