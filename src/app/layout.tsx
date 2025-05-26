import { ApiProvider } from "@/api/providers/api-provider";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Electrical Engineer Portfolio",
  description: "Showcase of projects, skills, and achievements of an electrical engineer.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/flag.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${manrope.className} text-gray-900`}>
        <ApiProvider>
          {children}
        </ApiProvider>
      </body>
    </html>
  );
}
