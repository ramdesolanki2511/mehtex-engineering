import type { Metadata } from "next";
import "./globals.css";
import AosInit from "./components/AosInit";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import WhatsApp from "./components/WhatsApp";

export const metadata: Metadata = {
  title: "Mehtex Engineering | Precision Aluminium Castings",
  description: "High precision aluminium die casting, machining and manufacturing solutions from Mehtex Engineering, Ahmedabad.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><AosInit /><SiteHeader />{children}<SiteFooter /><WhatsApp /></body></html>;
}
