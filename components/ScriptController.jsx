"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptController() {
  const pathname = usePathname();

  useEffect(() => {
    // When pathname changes, re-init scripts
    // We use setTimeout to ensure DOM is ready
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.initPageScripts) {
        window.initPageScripts();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
