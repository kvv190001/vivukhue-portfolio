"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Next.js's <Link> now defaults to preserving scroll position across
 * navigations (like browser back/forward) instead of always scrolling to
 * the top of the new page. Since our sidebar/top nav persist across routes,
 * Next.js treats the page as "already visible" and skips its own scroll
 * reset. This forces a scroll-to-top on every route change instead.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
