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

export const metadata = {
  title: "JobGuru",
  description: "Your guru is here, just get started",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-arp="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F172B] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
