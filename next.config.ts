import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	// Home 直下の package-lock.json を誤検出しないようにする
	outputFileTracingRoot: path.join(__dirname),
	turbopack: {
		root: path.join(__dirname),
	},
	async rewrites() {
		return [{ source: "/top", destination: "/" }];
	},
	async headers() {
		return [
			{
				source: "/top",
				headers: [{ key: "Clear-Site-Data", value: '"cache"' }],
			},
		];
	},
};

export default nextConfig;
