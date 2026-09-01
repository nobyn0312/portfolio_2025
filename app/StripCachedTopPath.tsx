"use client";

import { useEffect } from "react";

/** my_fashion_app の 308 キャッシュで /top に来たとき、URL だけ / に戻す */
export default function StripCachedTopPath() {
	useEffect(() => {
		if (window.location.pathname === "/top") {
			window.history.replaceState(null, "", `/${window.location.search}${window.location.hash}`);
		}
	}, []);

	return null;
}
