import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Landmark,
  Handshake,
  Leaf,
  Sparkles,
  Flower2,
  Menu,
  Globe2,
  Play,
  MapPin,
  Users,
  Trees,
  Cloud,
  Heart,
  ArrowRight,
  Sprout,
} from "lucide-react";
import "./index.css";

const transformCards = [
  {
    title: "Busana Adat Pria Bali",
    desc: "Wisatawan pria diperkenalkan dengan udeng, kamen, dan saput sebagai busana adat Bali yang sopan saat berkunjung ke pura, desa adat, dan ruang budaya.",
    caption: "Udeng, Kamen & Saput",
    beforeLabel: "Pakaian Biasa",
    afterLabel: "Busana Adat Pria",
    icon: Shirt,
    beforeImg: "/images/male-before-1.png",
    afterImg: "/images/male-after-udeng-1.png",
  },
  {
    title: "Busana Adat Wanita Bali",
    desc: "Wisatawan wanita dapat mengenal kebaya Bali, kamen, dan selendang sebagai busana yang anggun, sopan, dan menghormati nilai budaya Bali.",
    caption: "Kebaya, Kamen & Selendang",
    beforeLabel: "Pakaian Biasa",
    afterLabel: "Busana Adat Wanita",
    icon: Landmark,
    beforeImg: "/images/female-before-1.png",
    afterImg: "/images/female-after-kebaya-1.png",
  },
];

const destinations = [
  {
    title: "Jatiluwih Rice Terrace",
    subtitle: "Warisan alam dan budaya",
    location: "Tabanan, Bali",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Pura Besakih",
    subtitle: "The Mother Temple",
    location: "Karangasem, Bali",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Penglipuran Village",
    subtitle: "Desa tradisional Bali",
    location: "Bangli, Bali",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Nusa Penida",
    subtitle: "Natural Paradise",
    location: "Klungkung, Bali",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=900&q=90",
  },
];

const purposeItems = [
  {
    title: "Protect Nature",
    desc: "Menjaga ekosistem, pantai, hutan, dan satwa Bali yang unik.",
    icon: Sprout,
  },
  {
    title: "Empower Communities",
    desc: "Mendukung pekerjaan lokal dan ekonomi masyarakat desa wisata.",
    icon: Users,
  },
  {
    title: "Preserve Culture",
    desc: "Menghormati tradisi, pura, busana, dan warisan budaya Bali.",
    icon: Landmark,
  },
  {
    title: "Sustainable Future",
    desc: "Aksi kecil hari ini untuk pariwisata Bali yang lebih baik.",
    icon: Globe2,
  },
];

const impacts = [
  {
    number: 250,
    suffix: "+",
    label: "Eco-Friendly Destinations",
    icon: Leaf,
  },
  {
    number: 1200,
    suffix: "+",
    label: "Local Partners & Communities",
    icon: Users,
  },
  {
    number: 35000,
    suffix: "+",
    label: "Trees Planted",
    icon: Trees,
  },
  {
    number: 5600,
    suffix: "+",
    label: "Tons of CO₂ Offset",
    icon: Cloud,
  },
  {
    number: 98,
    suffix: "%",
    label: "Traveler Satisfaction",
    icon: Heart,
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
];

function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full px-5 py-7">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between text-white">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-white/10 text-2xl backdrop-blur-md">
            ♨
          </div>
          <div className="font-bali text-2xl font-black leading-none">
            Bali Eco
            <br />
            Tourism
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {["Home", "Destinations", "Experiences", "Sustainable Travel", "About Us", "Blog"].map(
            (item) => (
              <a
                key={item}
                href={`#${item === "Home" ? "home" : item.toLowerCase().replaceAll(" ", "-")}`}
                className="relative opacity-90 transition hover:opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-white after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full bg-white/85 px-4 py-3 text-xs font-black text-[#141414] shadow-lg backdrop-blur-md sm:flex">
            <Globe2 size={15} />
            EN
          </button>

          <a
            href="#destinations"
            className="hidden rounded-full bg-[#0f4f32] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0b3f27] sm:inline-flex"
          >
            Plan Your Trip
          </a>

          <button className="grid h-12 w-12 place-items-center rounded-full bg-white/85 text-[#141414] shadow-lg backdrop-blur-md">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[780px] items-center overflow-hidden bg-cover bg-center px-5"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(246,239,228,.97) 0%, rgba(246,239,228,.80) 35%, rgba(246,239,228,.12) 72%), linear-gradient(180deg, rgba(0,0,0,.26), rgba(0,0,0,.10)), url('images/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,.14),transparent_35%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f5ecdf] to-transparent" />
      

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 pt-28 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-bali mb-4 text-2xl italic text-[#123523]">
            Explore. Respect. Preserve.
          </p>

          <h1 className="font-bali max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-[#141414] md:text-7xl xl:text-[86px]">
            Discover Bali,
            <br />
            Travel with <span className="text-[#0f4f32]">Respect.</span>
          </h1>

          <div className="my-7 flex items-center gap-4 text-[#b8893b]">
            <div className="h-px w-28 bg-[#b8893b]" />
            <Sparkles size={23} />
            <div className="h-px w-28 bg-[#b8893b]" />
          </div>

          <p className="max-w-lg text-base leading-8 text-[#282828]">
            Rasakan keindahan spiritual Bali melalui perjalanan yang bertanggung jawab.
            Dukung masyarakat lokal, lindungi alam, dan ikut menjaga budaya Bali.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#destinations"
              className="inline-flex items-center gap-3 rounded-full bg-[#0f4f32] px-7 py-4 text-sm font-black text-white shadow-[0_15px_30px_rgba(15,79,50,.28)] transition hover:-translate-y-1 hover:bg-[#0b3f27]"
            >
              <Leaf size={18} />
              Explore Eco Trips
              <ArrowRight size={18} />
            </a>

            <button className="inline-flex items-center gap-3 rounded-full bg-white/80 px-7 py-4 text-sm font-black text-[#222] shadow-lg backdrop-blur-md transition hover:-translate-y-1">
              <Play size={18} />
              Watch Our Story
            </button>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex">
              {avatars.map((avatar, index) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt="Responsible traveler"
                  className="-ml-3 h-11 w-11 rounded-full border-[3px] border-[#f5ecdf] object-cover first:ml-0"
                />
              ))}
            </div>
            <p className="text-sm leading-5 text-[#2f2f2f]">
              <b>Join 15K+ responsible travelers</b>
              <br />💚 making an impact in Bali
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative hidden min-h-[570px] overflow-visible items-end justify-center lg:flex"
        >
          <div className="absolute bottom-[94px] right-[58px] z-30 w-[300px] rounded-[24px] border border-white/70 bg-white/90 p-3 shadow-[0_18px_40px_rgba(0,0,0,.16)] backdrop-blur-xl">
            <div className="grid grid-cols-[78px_1fr] items-center gap-3">
              <img
                src="./images/lempuyang.jpeg"
                alt="Pura Lempuyang"
                className="h-[72px] w-[78px] rounded-[16px] object-cover"
              />

              <div className="min-w-0 text-left">
                <h4 className="text-[15px] font-black leading-[1.15] text-[#171717]">
                  Pura Lempuyang
                </h4>

                <p className="mt-1 text-[12px] font-semibold leading-[1.35] text-[#333]">
                  The Gateway to Heaven
                </p>

                <p className="mt-1 flex items-center gap-1 text-[12px] font-semibold leading-[1.3] text-[#333]">
                  <MapPin size={12} className="shrink-0 text-[#9a6b2d]" />
                  <span>Karangasem, Bali</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TransformationCard({ item, index }) {
  const Icon = item.icon;
  const isMale = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-[28px] border border-[#d4ad65]/70 bg-[#09251b]/80 shadow-[0_30px_80px_rgba(0,0,0,.36)] backdrop-blur-md"
    >
      <div className="relative grid h-[390px] grid-cols-2 overflow-hidden">
        <div className="relative overflow-hidden border-r border-[#d4ad65]/45">
          <img
            src={item.beforeImg}
            alt={`${item.title} sebelum`}
            className="h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[.72]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="relative overflow-hidden">
          <img
            src={item.afterImg}
            alt={`${item.title} sesudah`}
            className="h-full w-full object-cover object-top opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          />
          <img
            src={item.beforeImg}
            alt="Preview before"
            className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:opacity-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="absolute left-5 top-5 z-20 flex items-center gap-3 rounded-br-[28px] rounded-tl-[20px] bg-[#071f17]/90 px-5 py-4 text-[#d4ad65] backdrop-blur-md">
          <Icon size={32} strokeWidth={1.5} />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em]">
              {isMale ? "For Male" : "For Female"}
            </p>
            <p className="mt-1 text-[11px] font-black uppercase tracking-[0.18em]">
              Traveler
            </p>
          </div>
        </div>

        <div className="absolute left-5 bottom-5 z-20 rounded-2xl bg-black/55 px-5 py-4 text-white shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.12em]">Before</p>
              <p className="mt-1 text-sm font-semibold text-white/90">Casual Visitor</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/35 text-white/70">
              ×
            </span>
          </div>
        </div>

        <div className="absolute right-5 bottom-5 z-20 rounded-2xl bg-[#b8893b]/90 px-5 py-4 text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.12em]">After</p>
              <p className="mt-1 text-sm font-semibold">Respectful Traveler</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/65 text-white">
              ✓
            </span>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-30 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#f5ecdf] text-[#071f17] shadow-[0_12px_28px_rgba(0,0,0,.28)] transition duration-500 group-hover:rotate-180">
          ↔
        </div>
      </div>

      <div className="flex gap-5 px-7 py-5 text-white">
        <Sparkles size={36} className="mt-1 shrink-0 text-[#d4ad65]" />
        <p className="text-[15px] leading-7 text-white/82">
          {item.desc}
        </p>
      </div>
    </motion.article>
  );
}

function TransformationSection() {
  const etiquetteTips = [
    {
      icon: Landmark,
      desc: "Gunakan pakaian sopan dan tertutup saat memasuki area suci atau pura.",
    },
    {
      icon: Shirt,
      desc: "Gunakan kamen dan selendang yang tersedia atau bawalah sendiri.",
    },
    {
      icon: Leaf,
      desc: "Hormati adat istiadat lokal dan minta izin sebelum mengambil foto.",
    },
    {
      icon: Handshake,
      desc: "Jaga sikap dan tutur kata karena Anda berada di lingkungan yang sakral.",
    },
  ];

  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-[#071f17] px-6 py-24 text-white md:py-28"
    >
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,31,23,.90), rgba(7,31,23,.96)), url('https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,137,59,.16),transparent_48%)]" />
      <div className="pointer-events-none absolute -left-24 top-0 hidden h-[280px] w-[280px] rotate-12 rounded-full border-[55px] border-[#d4ad65]/10 lg:block" />
      <div className="pointer-events-none absolute -right-24 bottom-0 hidden h-[310px] w-[310px] -rotate-12 rounded-full border-[60px] border-[#d4ad65]/10 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-5xl text-center"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.32em] text-[#d4ad65]">
            Cultural Etiquette Guide
          </p>

          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-[#d4ad65]/55" />
            <Sparkles size={22} className="text-[#d4ad65]" />
            <div className="h-px w-24 bg-[#d4ad65]/55" />
          </div>

          <h2 className="font-bali text-5xl font-black leading-tight text-white md:text-7xl">
            From Visitor to <span className="text-[#d4ad65]">Respectful Traveler</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
            Kenali busana adat Bali dan etika berpakaian yang tepat saat berkunjung ke
            pura, desa adat, dan ruang budaya. Arahkan kursor ke setiap kartu untuk melihat
            transformasi dari pakaian biasa menjadi tampilan yang lebih sopan dan menghormati budaya.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {transformCards.map((item, index) => (
            <TransformationCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-6xl overflow-hidden rounded-[28px] border border-[#b8893b]/45 bg-[#09251b]/78 shadow-[0_24px_70px_rgba(0,0,0,.28)] backdrop-blur-md lg:grid-cols-[230px_1fr]"
        >
          <div className="flex flex-col items-center justify-center border-b border-[#b8893b]/30 p-8 text-center lg:border-b-0 lg:border-r">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d4ad65]">
              Etiquette Tips
            </p>
            <div className="mt-4 flex items-center gap-3 text-[#d4ad65]">
              <div className="h-px w-14 bg-[#d4ad65]/50" />
              <Sparkles size={18} />
              <div className="h-px w-14 bg-[#d4ad65]/50" />
            </div>
          </div>

          <div className="grid divide-y divide-[#b8893b]/25 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
            {etiquetteTips.map((tip, index) => {
              const TipIcon = tip.icon;

              return (
                <div key={index} className="flex gap-4 p-6">
                  <TipIcon size={36} strokeWidth={1.5} className="shrink-0 text-[#d4ad65]" />
                  <p className="text-sm leading-6 text-white/78">{tip.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 rounded-full border border-[#b8893b]/35 bg-[#09251b]/68 px-8 py-5 text-center backdrop-blur-md md:flex-row md:text-left"
        >
          <p className="text-sm leading-6 text-white/75">
            Berpakaian dengan sopan bukan hanya aturan, tetapi bentuk penghargaan terhadap budaya dan masyarakat Bali.
          </p>
          <div className="hidden h-8 w-px bg-[#b8893b]/35 md:block" />
          <p className="font-bali text-xl italic text-[#d4ad65]">
            Respect the Culture, Preserve the Beauty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  return (
    <section id="destinations" className="bg-[#f3eadc] px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#b8893b]">
            Explore Bali
          </p>
          <h2 className="font-bali text-4xl font-black leading-tight text-[#171717] md:text-5xl">
            Eco-Friendly Destinations
          </h2>
          <p className="my-6 text-[15px] leading-8 text-[#555]">
            Temukan keindahan alam, budaya, dan keramahan Bali sambil memberikan dampak
            positif untuk lingkungan serta masyarakat lokal.
          </p>
          <a
            href="#sustainable-travel"
            className="inline-flex items-center gap-3 rounded-full border border-[#9e8f7c] px-6 py-4 text-sm font-black text-[#111] transition hover:border-[#0f4f32] hover:bg-[#0f4f32] hover:text-white"
          >
            View All Destinations
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              viewport={{ once: true }}
              className="group relative min-h-[310px] overflow-hidden rounded-[24px] bg-cover bg-center shadow-[0_16px_35px_rgba(0,0,0,.16)] transition duration-500 hover:-translate-y-3"
              style={{ backgroundImage: `url('${destination.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/85" />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                <h3 className="mb-1 text-xl font-black">{destination.title}</h3>
                <p className="mb-3 text-sm opacity-90">{destination.subtitle}</p>
                <p className="flex items-center gap-1 text-sm text-[#f5d487]">
                  <MapPin size={15} />
                  {destination.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section
      id="sustainable-travel"
      className="relative overflow-hidden bg-cover bg-center px-6 py-20 text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(5,48,30,.98), rgba(6,66,40,.94)), url('https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1600&q=90')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Flower2 className="absolute left-10 top-14" size={150} />
        <Flower2 className="absolute bottom-8 right-10" size={180} />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[300px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#d4ad65]">
            Why Travel Responsibly
          </p>
          <h2 className="font-bali mb-5 text-4xl font-black leading-tight md:text-5xl">
            Your Journey Makes a Difference
          </h2>
          <p className="mb-7 text-[15px] leading-8 text-white/80">
            Setiap pilihan perjalanan yang bertanggung jawab membantu menjaga lingkungan,
            budaya, dan masyarakat Bali.
          </p>
          <a
            href="#impact"
            className="inline-flex items-center gap-3 rounded-full border border-white/60 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#0f4f32]"
          >
            Learn More
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:border-l xl:border-white/20">
          {purposeItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.65 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 p-7 text-center xl:rounded-none xl:border-y-0 xl:border-l-0 xl:border-r xl:border-white/20"
              >
                <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border border-[#d4ad65] text-[#d4ad65]">
                  <Icon size={34} />
                </div>
                <h3 className="mb-3 text-lg font-black">{item.title}</h3>
                <p className="text-sm leading-7 text-white/75">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnimatedImpactNumber({ number, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        setStarted(true);
        let current = 0;
        const increment = Math.ceil(number / 90);

        const update = () => {
          current += increment;

          if (current >= number) {
            setValue(number);
            return;
          }

          setValue(current);
          requestAnimationFrame(update);
        };

        update();
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [number, started]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function ImpactSection() {
  return (
    <section id="impact" className="bg-[#fbf5ec] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-sm font-black uppercase tracking-[0.22em] text-[#0f4f32]">
          Our Impact Together
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;

            return (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 border-b border-[#d8c9b5] p-5 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
              >
                <Icon className="shrink-0 text-[#b8893b]" size={42} />
                <div>
                  <h3 className="font-bali text-4xl font-black text-[#121212]">
                    <AnimatedImpactNumber number={impact.number} suffix={impact.suffix} />
                  </h3>
                  <p className="text-sm leading-5 text-[#555]">{impact.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#08351f] px-6 py-9 text-center text-sm text-white">
      © 2026 Bali Eco Tourism. Explore Bali with respect and responsibility.
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5ecdf]">
      <Header />
      <Hero />
      <TransformationSection />
      <DestinationsSection />
      <PurposeSection />
      <ImpactSection />
      <Footer />
    </main>
  );
}
