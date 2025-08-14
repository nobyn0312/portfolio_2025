import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["300", "400", "700"], // 300を追加してより細いウェイトを利用可能に
	variable: "--font-outfit", // CSS変数名
	display: "swap",
});

export const metadata = {
	title: "Inoue Nobuhide",
	description: "My Portfolio",
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
