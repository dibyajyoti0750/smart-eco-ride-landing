import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartecoride.in"),

  title: "Smart Eco Ride",
  description: "Latibpur, Uluberia, Howrah - 711316",

  alternates: {
    canonical: "https://www.smartecoride.in/",
  },

  openGraph: {
    title: "Smart Eco Ride",
    description: "Latibpur, Uluberia, Howrah - 711316",
    siteName: "Smart Eco Ride",
    url: "https://www.smartecoride.in/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Eco Ride",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Eco Ride",
    description: "Latibpur, Uluberia, Howrah - 711316",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
