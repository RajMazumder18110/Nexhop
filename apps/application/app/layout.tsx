/** @notice Library imports */
import { Geist, Geist_Mono } from "next/font/google";
/// Local imports
import { rootLayoutMeta } from "@/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = rootLayoutMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
