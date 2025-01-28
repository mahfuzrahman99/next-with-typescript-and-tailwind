import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
