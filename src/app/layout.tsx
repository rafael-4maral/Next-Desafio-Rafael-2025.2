import type { Metadata } from "next";
import { Poppins, Merienda } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
});

const merienda = Merienda({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-merienda',
});

export const metadata: Metadata = {
  title: "MyLibrary",
  description: "E-commerce de livros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
      
        {children}
        
      </body>
    </html>
  );
}
