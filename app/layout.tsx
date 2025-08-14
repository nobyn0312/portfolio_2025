import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inoue Nobuhide",
  description: "My Portfolio",
  openGraph: {
    title: "Inoue Nobuhide Portfolio",
    description: "Web制作・3DCG・音楽などを手がけるポートフォリオサイト",
    url: "https://inouenobuhide.dev",
    siteName: "Inoue Nobuhide",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "https://inouenobuhide.dev/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inoue Nobuhide Portfolio",
    description: "Web制作・3DCG・音楽などを手がけるポートフォリオサイト",
    images: ["https://inouenobuhide.dev/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
