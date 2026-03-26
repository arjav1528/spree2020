import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SPREE 2026",
    template: "%s | SPREE '26",
  },
  description: "Spree is the annual sports festival of BITS Pilani K.K. Birla Goa Campus. Join us for 5 days of intense competition, 30+ events, and untamed energy.",
  keywords: ["Spree", "BITS Pilani", "Sports Festival", "Goa", "Spree 26", "College Fest", "Athletics", "Untamed Arena", "BITS Goa"],
  authors: [{ name: "Spree '26 WebD Team" }],
  
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "SPREE '26 | The Ultimate Arena",
    description: "Spree is the annual sports festival of BITS Pilani K.K. Birla Goa Campus. Experience the untamed energy.",
    url: "https://bits-spree.in", 
    siteName: "SPREE '26",
    images: [
      {
        url: "/logo.png", 
        width: 800,
        height: 600,
        alt: "SPREE 2026 Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SPREE '26 | The Ultimate Arena",
    description: "The official sports festival of BITS Pilani K.K. Birla Goa Campus.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`} 
      data-scroll-behavior="smooth"
    >
      <body className="bg-[#050200] text-white antialiased selection:bg-[#FF6B00] selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}