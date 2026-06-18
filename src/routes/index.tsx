import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Clock,
  HeartHandshake,
  BadgeIndianRupee,
  Drumstick,
  Send,
  Navigation,
  Mail,
} from "lucide-react";
import heroImg from "@/assets/hero-chicken.jpg";
import pWhole from "@/assets/product-whole.jpg";
import pCurry from "@/assets/product-curry.jpg";
import pBoneless from "@/assets/product-boneless.jpg";
import pSpecial from "@/assets/product-special.jpg";
import pMarinated from "@/assets/product-marinated.jpg";
import logoImg from "@/assets/logo.png";
import liveChickenImg from "@/assets/live-chicken.jpg";
import henImg from "@/assets/hen.jpg";
import eggsImg from "@/assets/eggs.jpg";
import quailImg from "@/assets/quail.jpg";
import chickImg from "@/assets/chick.jpg";

const PHONE = "6379151623";
const WA_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Hi Anu Chicken, I'd like to place an order."
)}`;
const CALL_LINK = `tel:+91${PHONE}`;
const ADDRESS = "Thiruttani Main Road, Gururajapettai, Tamil Nadu, India";
const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anu Chicken — Fresh & Hygienic Raw Chicken in Gururajapettai" },
      {
        name: "description",
        content:
          "Anu Chicken offers fresh, hygienic raw chicken daily in Gururajapettai, Thiruttani. Whole chicken, curry cut, boneless & marinated. Call 6379151623 to order.",
      },
      { property: "og:title", content: "Anu Chicken — Fresh Raw Chicken Daily" },
      {
        property: "og:description",
        content:
          "Trusted local chicken shop on Thiruttani Main Road. Fresh daily supply, hygienic cutting, best local price.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Anu Chicken",
          image: "/",
          telephone: "+916379151623",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Thiruttani Main Road",
            addressLocality: "Gururajapettai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          priceRange: "₹",
        }),
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    name: "Fresh Whole Chicken",
    desc: "Farm-fresh whole chicken, cleaned & dressed to your preference.",
    img: pWhole,
    tag: "Bestseller",
  },
  {
    name: "Curry Cut Chicken",
    desc: "Traditional curry-cut pieces, perfect for gravies & biryani.",
    img: pCurry,
    tag: "Popular",
  },
  {
    name: "Boneless Chicken",
    desc: "Tender boneless breast & thigh cuts — ideal for tikka & stir fry.",
    img: pBoneless,
  },
  {
    name: "Special Cut Pieces",
    desc: "Drumsticks, thighs & wings — hand-cut to your portion size.",
    img: pSpecial,
  },
  {
    name: "Marinated Chicken",
    desc: "Freshly marinated in house masalas — ready to cook.",
    img: pMarinated,
    tag: "Chef's pick",
  },
];

const WHY = [
  { icon: Sparkles, title: "100% Fresh Daily", text: "New stock every morning — never frozen, never stale." },
  { icon: ShieldCheck, title: "Hygienic Cutting", text: "Clean tools, gloves & sanitized counters every cut." },
  { icon: BadgeIndianRupee, title: "Best Local Price", text: "Honest pricing with daily market-rate updates." },
  { icon: Clock, title: "Fast Service", text: "Quick cutting, ready packs and walk-in friendly." },
  { icon: HeartHandshake, title: "Trusted Local Shop", text: "Loved by Gururajapettai families for years." },
  { icon: Drumstick, title: "Custom Cuts", text: "Tell us how you want it — we cut to order." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Livestock />
      <About />
      <Products />
      <WhyUs />
      <Location />
      <Contact />
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 min-w-0">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-card border border-border shadow-card overflow-hidden">
              <img src={logoImg} alt="Anu Chicken logo" width={44} height={44} className="h-9 w-9 object-contain" />
            </span>
            <span className="truncate font-extrabold text-lg tracking-tight leading-none">
              Anu <span className="text-flame">Chicken</span>
              <span className="block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground mt-0.5">FARM • FRESH • DAILY</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a
              href={CALL_LINK}
              className="inline-flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-flame hover:scale-[1.03] transition-transform"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={CALL_LINK}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-flame px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call 6379151623
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-flame opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-accent opacity-30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-semibold text-primary shadow-card">
            <Sparkles className="h-3.5 w-3.5" /> Farm Fresh • Daily • Hygienic
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
            From our farm <br className="hidden sm:block" /> to your <span className="text-flame">kitchen.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Anu Chicken raises healthy live chickens, hens, quails and chicks — and delivers the freshest cuts daily to Gururajapettai families.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CALL_LINK}
              className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-flame hover:scale-[1.03] transition-transform"
            >
              <Phone className="h-4 w-4" /> Call to Order
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 bg-card px-6 py-3.5 text-sm font-bold text-foreground hover:border-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { k: "100%", v: "Fresh Daily" },
              { k: "5★", v: "Local Rated" },
              { k: "10min", v: "Quick Cut" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-card border border-border px-4 py-3 shadow-card">
                <div className="text-2xl font-extrabold text-flame">{s.k}</div>
                <div className="text-xs text-muted-foreground font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -m-6 bg-flame opacity-25 blur-3xl rounded-full" />
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border-4 border-card shadow-glow">
            <img
              src={liveChickenImg}
              alt="Healthy live rooster at Anu Chicken farm"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card border border-border shadow-card p-3 pr-5 animate-float">
            <img src={chickImg} alt="Baby chick" width={56} height={56} className="h-14 w-14 rounded-xl object-cover" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Raised with care</div>
              <div className="text-sm font-extrabold">Healthy & natural</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-full bg-card border border-border shadow-card px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-flame animate-pulse" />
            <span className="text-xs font-bold">Open Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const LIVESTOCK = [
  { name: "Live Chicken", desc: "Healthy free-range broilers raised on our farm.", img: liveChickenImg },
  { name: "Country Hen", desc: "Naati / Naadan country hens — rich flavour.", img: henImg },
  { name: "Farm Eggs", desc: "Fresh brown & white eggs, collected daily.", img: eggsImg },
  { name: "Quail", desc: "Tender quail birds & eggs on request.", img: quailImg },
  { name: "Baby Chicks", desc: "Day-old chicks for farms & home rearing.", img: chickImg },
];

function Livestock() {
  return (
    <section id="livestock" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Farm</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-xl">
              Raised live. <span className="text-flame">Delivered fresh.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We rear our own chickens, hens, quails and chicks — so you always know exactly where your food comes from.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {LIVESTOCK.map((item, i) => (
            <article
              key={item.name}
              className={`group relative rounded-3xl overflow-hidden border border-border bg-card shadow-card hover:shadow-flame hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-square"}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-extrabold text-primary-foreground">{item.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-primary-foreground/80 line-clamp-2">{item.desc}</p>
                </div>
                <span className="absolute top-3 right-3 rounded-full bg-card/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 text-foreground">
                  Live
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-primary uppercase">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Your neighborhood's <span className="text-flame">freshest</span> chicken shop.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            At Anu Chicken, we believe great meals begin with great meat. Every morning we source fresh, locally
            raised chicken, cut and clean it with strict hygiene, and serve it at honest local prices. No freezers,
            no shortcuts — just freshness you can taste.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Daily fresh supply, never frozen",
              "Strict hygiene & sanitized cutting",
              "Friendly service & honest pricing",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame text-primary-foreground text-[10px]">✓</span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-flame opacity-20 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 gap-4">
            <img src={pCurry} alt="Curry cut" width={800} height={800} loading="lazy" className="rounded-3xl shadow-card aspect-square object-cover animate-float" />
            <img src={pBoneless} alt="Boneless" width={800} height={800} loading="lazy" className="rounded-3xl shadow-card aspect-square object-cover mt-8" />
            <img src={pMarinated} alt="Marinated" width={800} height={800} loading="lazy" className="rounded-3xl shadow-card aspect-square object-cover -mt-4" />
            <img src={pSpecial} alt="Special cut" width={800} height={800} loading="lazy" className="rounded-3xl shadow-card aspect-square object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Products</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-xl">
              Cut fresh. <span className="text-flame">Packed clean.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Choose from our daily-fresh selection. Tap any product to call and place your order directly.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-flame hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-flame text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-flame">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={CALL_LINK}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-flame px-4 py-2.5 text-sm font-bold text-primary-foreground hover:scale-[1.02] transition-transform"
                  >
                    <Phone className="h-4 w-4" /> Call to Order
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full bg-muted hover:bg-accent transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Loved by locals. <span className="text-flame">Trusted daily.</span>
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-card transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-flame text-primary-foreground shadow-flame group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Visit Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Find Anu Chicken in <span className="text-flame">Gururajapettai</span>
          </h2>
          <div className="mt-6 flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-flame text-primary-foreground shadow-flame">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <div className="font-bold">Our Shop</div>
              <p className="text-muted-foreground">{ADDRESS}</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-flame text-primary-foreground shadow-flame">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <div className="font-bold">Call</div>
              <a href={CALL_LINK} className="text-muted-foreground hover:text-primary">+91 6379151623</a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_DIR}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 text-sm font-bold text-primary-foreground shadow-flame hover:scale-[1.03] transition-transform"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={CALL_LINK}
              className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-6 py-3 text-sm font-bold hover:border-primary transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Shop
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card border border-border bg-card aspect-[4/3]">
          <iframe
            title="Anu Chicken location"
            src={MAPS_EMBED}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Anu Chicken, I'm ${form.name}. ${form.message}`;
    window.open(`https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Order in <span className="text-flame">one tap.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Call us directly or drop a message on WhatsApp — we'll have your order ready in minutes.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={CALL_LINK}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-card hover:border-primary/40 transition-all"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame text-primary-foreground shadow-flame">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call us</div>
                <div className="text-lg font-extrabold">+91 6379151623</div>
              </div>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-card hover:border-primary/40 transition-all"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame text-primary-foreground shadow-flame">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="text-lg font-extrabold">Chat & order now</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame text-primary-foreground shadow-flame">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Visit</div>
                <div className="text-sm font-semibold">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
          <h3 className="text-xl font-extrabold">Send a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll reply on WhatsApp.</p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">Your name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="e.g. Ravi"
              />
            </div>
            <div>
              <label htmlFor="msg" className="text-sm font-semibold">Message</label>
              <textarea
                id="msg"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="What would you like to order?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-flame px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-flame hover:scale-[1.02] transition-transform"
            >
              <Send className="h-4 w-4" /> {sent ? "Opened WhatsApp" : "Send via WhatsApp"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-flame">
                <Drumstick className="h-5 w-5" />
              </span>
              <span className="font-extrabold text-lg">Anu Chicken</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Fresh & hygienic raw chicken, served daily with a smile in Gururajapettai.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent">Visit</div>
            <p className="mt-3 text-sm text-primary-foreground/80">{ADDRESS}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent">Contact</div>
            <a href={CALL_LINK} className="mt-3 block text-sm text-primary-foreground/80 hover:text-accent">+91 6379151623</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-1.5 block text-sm text-primary-foreground/80 hover:text-accent">WhatsApp Order</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Anu Chicken. All rights reserved.</p>
          <p>Made with care in Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={CALL_LINK}
        aria-label="Call"
        className="grid h-14 w-14 place-items-center rounded-full bg-flame text-primary-foreground shadow-flame hover:scale-110 transition-transform animate-float"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
