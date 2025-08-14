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
	description: "Web制作・3DCG・音楽などを手がけるポートフォリオサイト",
	openGraph: {
		title: "Inoue Nobuhide",
		description: "Web制作・3DCG・音楽などを手がけるポートフォリオサイト",
		url: "https://inouenobuhide.dev",
		siteName: "Inoue Nobuhide",
		images: [
			{
				url: "https://inouenobuhide.dev/og-image.png", // 公開されている絶対URL
				width: 1200,
				height: 630,
			},
		],
		locale: "ja_JP",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Inoue Nobuhide",
		description: "Web制作・3DCG・音楽などを手がけるポートフォリオサイト",
		images: ["https://inouenobuhide.dev/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${outfit.variable} antialiased`}>{children}</body>
		</html>
	);
}
