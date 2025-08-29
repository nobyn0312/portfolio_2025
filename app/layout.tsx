import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const texgyread = localFont({
	src: [
		{
			path: "../fonts/texgyreadventor-regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/texgyreadventor-italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../fonts/texgyreadventor-bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../fonts/texgyreadventor-bolditalic.otf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-texgyread",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://inouenobuhide.dev"),
	title: "Inoue Nobuhide",
	description: "My Portfolio",
	openGraph: {
		title: "Inoue Nobuhide Portfolio",
		description: "inouenobuhide",
		url: "https://inouenobuhide.dev",
		siteName: "Inoue Nobuhide",
		type: "website",
		locale: "ja_JP",
		images: [
			{
				url: "https://inouenobuhide.dev/images/og-image.png", // 相対パスOK
				width: 1200,
				height: 630,
				alt: "Inoue Nobuhide Portfolio サムネイル",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Inoue Nobuhide Portfolio",
		description: "inouenobuhide",
		images: ["https://inouenobuhide.dev/images/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ja'>
			<body className={`${texgyread.variable} antialiased`}>{children}</body>
		</html>
	);
}
