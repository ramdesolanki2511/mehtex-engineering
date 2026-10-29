"use client";
import { useState } from "react";

const links = [["Home", "/"], ["Company", "/company"], ["Services", "/services"], ["Industry", "/industry"], ["Projects", "/projects"], ["Exports", "/exports"], ["Contact", "/contact-us"]];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <a className="brand" href="/" aria-label="Mehtex Engineering home"><img src="https://www.mehtex.com/wp-content/uploads/2026/08/mehtex-logo.svg" alt="Mehtex Engineering Pvt. Ltd." /></a>
    <nav className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-quote" href="/contact-us">Request a quote <span>↗</span></a></nav>
    <button className="dots" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /><i /><i /><i /><i /><i /><i /></button>
  </header>;
}
