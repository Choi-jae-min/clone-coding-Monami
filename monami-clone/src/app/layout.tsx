import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monami Clone Coding",
  description: "Monami Clone Coding with Next.js and TypeScript",
};
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
      <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>" />
          <title>최재민 - 모나미 클론코딩</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
