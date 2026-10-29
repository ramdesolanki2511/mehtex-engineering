"use client";
import { useEffect, useState } from "react";
import { media } from "../data";

const slides = [
  { kicker: "MEHTEX ENGINEERING · AHMEDABAD, INDIA", title: <>High precision.<br /><em>Made in house.</em></>, copy: "Extensive in-house machine shop with 10+ machines, including VMCs, CNC lathes and VTLs — for complete process and quality control.", image: `${media}958A0136-ratio.jpg`, part: `${media}No-BG-EV-Motor-Housing-Gravity-Die-Cast-Part-with-Machining.png`, label: "Precision manufacturing solutions" },
  { kicker: "ENGINEERED FOR EVERY DETAIL", title: <>Casting strength.<br /><em>Machining precision.</em></>, copy: "From the first die to the final inspection, our teams keep quality and control close to every process.", image: `${media}CNC-Turning-In-Action-2-ratio.jpg`, part: `${media}No-BG-Indoor-Lights-LED-Family-Photos.png`, label: "Integrated aluminium solutions" },
  { kicker: "FOUR DECADES OF EXPERIENCE", title: <>Built on craft.<br /><em>Ready for scale.</em></>, copy: "Three manufacturing plants, experienced people and dependable systems support every customer partnership.", image: `${media}958A0260-VMC-Tooling-Ratio.jpg`, part: `${media}No-BG-EV-Motor-Housing-Parts-GDC-Large-Machined.png`, label: "A capable manufacturing partner" },
];
export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive(i => (i + 1) % slides.length), 6500); return () => window.clearInterval(timer); }, []);
  return <section className="hero hero-slider" aria-roledescription="carousel" aria-label="Mehtex capabilities">
    {slides.map((slide, i) => <article key={slide.label} className={`hero-slide ${i === active ? "is-active" : ""}`} aria-hidden={i !== active} style={{ backgroundImage: `linear-gradient(90deg,rgba(5,14,27,.82),rgba(6,16,31,.28)),url('${slide.image}')` }}>
      <div className="hero-content"><p className="eyebrow light hero-kicker">{slide.kicker}</p><h1 className="hero-title">{slide.title}</h1><p className="hero-copy">{slide.copy}</p><div className="actions"><a className="button button-yellow" href="/contact-us">Request a quote <span className="arrow">↗</span></a><a className="button button-outline" href="/services">Explore services <span aria-hidden="true">↓</span></a></div></div>
      <div className="hero-caption"><span>0{i + 1}</span><span className="caption-line" /><span>{slide.label}</span></div><div className="hero-product"><img src={slide.part} alt="" /></div>
    </article>)}
    <div className="hero-controls">{slides.map((slide, i) => <button key={slide.label} className={i === active ? "hero-dot active" : "hero-dot"} onClick={() => setActive(i)} aria-label={`Show slide ${i + 1}`} aria-current={i === active} />)}<span>0{active + 1} <i>/</i> 0{slides.length}</span></div>
  </section>;
}
