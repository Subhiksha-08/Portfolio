import { Outfit, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Subhiksha S S | ECE & RF Engineer Portfolio",
  description: "Professional portfolio of Subhiksha S S, an Electronics & Communication Engineering student at Kongu Engineering College. Specializing in RF design, digital signal processing, and embedded systems.",
  keywords: "Subhiksha S S, ECE Portfolio, RF Design Engineer, Digital Signal Processing MATLAB, PCB Fabrication, NIT Trichy Intern",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
