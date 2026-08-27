import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	// Home 直下の package-lock.json を誤検出しないようにする
	outputFileTracingRoot: path.join(__dirname),
	turbopack: {
		root: path.join(__dirname),
	},
};

export default nextConfig;
