import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNev from "./components/Home/Navbar/ResponsiveNev";

const fontSora = Sora({
  weight: ["100","200","300","400","500","600","700","800",],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webdev Portfolio",
  description: "Webdev Portfolio with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSora.className}`}
      >
        <ResponsiveNev />
        {children}
      </body>
    </html>
  );
}
