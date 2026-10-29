export default function PageIntro({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return <section className="page-intro" style={{ backgroundImage: `linear-gradient(90deg,rgba(8,19,42,.86),rgba(8,19,42,.42)),url('${image}')` }}><div className="page-intro-inner"><p className="eyebrow light" data-aos="fade-up">{eyebrow}</p><h1 data-aos="fade-up" data-aos-delay="100">{title}</h1><p data-aos="fade-up" data-aos-delay="200">{copy}</p></div><div className="page-index">MEHTEX ENGINEERING <span>·</span> AHMEDABAD, INDIA</div></section>;
}
