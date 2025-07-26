import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans'  // 👈 This line enables use of .variable
})


export const metadata = {
  title: "JobGuru",
  description: "Your guru is here, just get started",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-arp="">
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
