"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AosInit() {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({ duration: 750, easing: "ease-out-quart", once: true, offset: 70, mirror: false });
    const timer = window.setTimeout(() => AOS.refreshHard(), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);
  return null;
}
