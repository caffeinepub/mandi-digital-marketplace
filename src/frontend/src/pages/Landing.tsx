import type React from "react";
import { useEffect, useRef, useState } from "react";
import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MOCK_ANIMALS = [
  {
    id: 1,
    title: "Holstein Cow",
    breed: "Holstein Friesian",
    age: "3 years",
    weight: "480 kg",
    location: "Lahore, Punjab",
    price: "PKR 180,000",
  },
  {
    id: 2,
    title: "Sahiwal Bull",
    breed: "Sahiwal",
    age: "4 years",
    weight: "520 kg",
    location: "Faisalabad, Punjab",
    price: "PKR 220,000",
  },
  {
    id: 3,
    title: "Beetal Goat",
    breed: "Beetal",
    age: "2 years",
    weight: "65 kg",
    location: "Multan, Punjab",
    price: "PKR 45,000",
  },
  {
    id: 4,
    title: "Teddy Bakra",
    breed: "Teddy Goat",
    age: "1.5 years",
    weight: "55 kg",
    location: "Karachi, Sindh",
    price: "PKR 38,000",
  },
  {
    id: 5,
    title: "Nili-Ravi Buffalo",
    breed: "Nili-Ravi",
    age: "5 years",
    weight: "600 kg",
    location: "Sahiwal, Punjab",
    price: "PKR 350,000",
  },
  {
    id: 6,
    title: "Kundi Buffalo",
    breed: "Kundi",
    age: "4 years",
    weight: "550 kg",
    location: "Hyderabad, Sindh",
    price: "PKR 310,000",
  },
  {
    id: 7,
    title: "Kajli Sheep",
    breed: "Kajli",
    age: "2 years",
    weight: "70 kg",
    location: "Sargodha, Punjab",
    price: "PKR 55,000",
  },
  {
    id: 8,
    title: "Lohani Sheep",
    breed: "Lohani",
    age: "3 years",
    weight: "80 kg",
    location: "Peshawar, KPK",
    price: "PKR 62,000",
  },
  {
    id: 9,
    title: "Dhanni Bull",
    breed: "Dhanni",
    age: "3 years",
    weight: "490 kg",
    location: "Chakwal, Punjab",
    price: "PKR 195,000",
  },
  {
    id: 10,
    title: "Red Sindhi Cow",
    breed: "Red Sindhi",
    age: "4 years",
    weight: "400 kg",
    location: "Sukkur, Sindh",
    price: "PKR 165,000",
  },
  {
    id: 11,
    title: "Kankrej Bull",
    breed: "Kankrej",
    age: "5 years",
    weight: "580 kg",
    location: "Bahawalpur, Punjab",
    price: "PKR 245,000",
  },
  {
    id: 12,
    title: "Barbari Goat",
    breed: "Barbari",
    age: "1 year",
    weight: "40 kg",
    location: "Gujranwala, Punjab",
    price: "PKR 28,000",
  },
  {
    id: 13,
    title: "Rakhshani Sheep",
    breed: "Rakhshani",
    age: "2.5 years",
    weight: "90 kg",
    location: "Quetta, Balochistan",
    price: "PKR 75,000",
  },
  {
    id: 14,
    title: "Cholistani Cow",
    breed: "Cholistani",
    age: "3 years",
    weight: "420 kg",
    location: "Rahim Yar Khan",
    price: "PKR 175,000",
  },
  {
    id: 15,
    title: "Murghabi Buffalo",
    breed: "Murghabi",
    age: "4 years",
    weight: "520 kg",
    location: "Sheikhupura, Punjab",
    price: "PKR 290,000",
  },
  {
    id: 16,
    title: "Dera Din Panah Goat",
    breed: "Dera Din Panah",
    age: "2 years",
    weight: "72 kg",
    location: "Muzaffargarh, Punjab",
    price: "PKR 52,000",
  },
  {
    id: 17,
    title: "Harnai Sheep",
    breed: "Harnai",
    age: "3 years",
    weight: "85 kg",
    location: "Ziarat, Balochistan",
    price: "PKR 68,000",
  },
  {
    id: 18,
    title: "Achai Cattle",
    breed: "Achai",
    age: "4 years",
    weight: "350 kg",
    location: "Dir, KPK",
    price: "PKR 155,000",
  },
  {
    id: 19,
    title: "Tharparkar Cow",
    breed: "Tharparkar",
    age: "3.5 years",
    weight: "390 kg",
    location: "Tharparkar, Sindh",
    price: "PKR 160,000",
  },
  {
    id: 20,
    title: "Dajal Sheep",
    breed: "Dajal",
    age: "2 years",
    weight: "78 kg",
    location: "Dera Ghazi Khan",
    price: "PKR 60,000",
  },
];

const STATS = [
  { value: "50K+", label: "Animals Listed" },
  { value: "12K+", label: "Verified Sellers" },
  { value: "98%", label: "Buyer Satisfaction" },
  { value: "PKR 2B+", label: "Transactions" },
];

const VALUE_PROPS = [
  { icon: "🔍", title: "Transparency", desc: "Fair pricing, no middlemen" },
  { icon: "✅", title: "Trust", desc: "Verified sellers & buyers" },
  { icon: "📱", title: "Accessibility", desc: "Built for rural Pakistan" },
  { icon: "🚀", title: "Innovation", desc: "Modern livestock trade" },
];

const JOURNEY_PILLS = [
  { icon: "✅", label: "Verified Sellers" },
  { icon: "🔒", label: "Secure Payments" },
  { icon: "🔨", label: "Live Auctions" },
  { icon: "🐄", label: "50K+ Animals" },
];

const AUCTION_ITEMS = [
  { id: "pCFTe_EWyAA", heading: "Cattle Auction", tag: "LIVE" },
  { id: "4w0hjlvR5H8", heading: "Goat Bidding", tag: "BIDDING" },
  { id: "7Q8nnHfS2uE", heading: "Farm Preview", tag: "PREVIEW" },
  { id: "tGTGLnCQ7-0", heading: "Live Bids", tag: "HOT" },
];

function AuctionSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("auction-visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #0A1F14 0%, #0F2C1F 60%, #091810 100%)",
      }}
      className="relative overflow-hidden"
    >
      <style>{`
        @keyframes auctionFadeUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(208,122,42,0); }
          50% { box-shadow: 0 0 20px 4px rgba(208,122,42,0.35); }
        }
        @keyframes liveBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .auction-visible .auction-heading { animation: auctionFadeUp 0.7s ease forwards; }
        .auction-visible .auction-subtitle { animation: auctionFadeUp 0.7s ease forwards 0.15s; }
        .auction-visible .auction-card-1 { animation: auctionFadeUp 0.6s ease forwards 0.1s; }
        .auction-visible .auction-card-2 { animation: auctionFadeUp 0.6s ease forwards 0.22s; }
        .auction-visible .auction-card-3 { animation: auctionFadeUp 0.6s ease forwards 0.34s; }
        .auction-visible .auction-card-4 { animation: auctionFadeUp 0.6s ease forwards 0.46s; }
        .auction-heading, .auction-subtitle,
        .auction-card-1, .auction-card-2,
        .auction-card-3, .auction-card-4 { opacity: 0; }
      `}</style>

      {/* Subtle top accent line */}
      <div
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, transparent, #D07A2A, #F5A623, #D07A2A, transparent)",
        }}
      />

      <div ref={ref} className="relative z-10">
        {/* Section heading */}
        <div className="text-center pt-10 md:pt-16 pb-6 md:pb-10 px-4">
          <div className="auction-heading inline-flex items-center gap-3 mb-5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-red-500"
              style={{ animation: "liveBlink 1.2s ease-in-out infinite" }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#F5A623" }}
            >
              Live Now
            </span>
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-red-500"
              style={{ animation: "liveBlink 1.2s ease-in-out infinite 0.6s" }}
            />
          </div>
          <h2
            className="auction-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 30px rgba(245,166,35,0.2)",
            }}
          >
            Live{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D07A2A, #F5A623, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Auctions
            </span>
          </h2>
          <p className="auction-subtitle text-gray-400 text-sm md:text-lg mt-4 max-w-xl mx-auto px-4">
            Watch real-time livestock auctions. Bid on premium cattle, goats,
            and more — directly from verified farms across Pakistan.
          </p>
        </div>

        {/* 4 tall video containers — flush, no gap, no border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {AUCTION_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`auction-card-${i + 1} relative overflow-hidden w-full`}
              style={{ minHeight: "clamp(280px, 45vw, 520px)" }}
              data-ocid={`auction.item.${i + 1}`}
            >
              {/* YouTube embed fills the full container */}
              <iframe
                src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=1&loop=1&playlist=${item.id}&controls=0&rel=0&showinfo=0&modestbranding=1`}
                title={item.heading}
                allow="autoplay; encrypted-media"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  // Scale up slightly to hide letterbox bars
                  transform: "scale(1.05)",
                  objectFit: "cover",
                }}
              />

              {/* Scanline overlay for cinematic feel */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 3px)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />

              {/* Dark gradient at top for text legibility */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "55%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* Dark gradient at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />

              {/* Tag badge (top-left) */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  zIndex: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background:
                    item.tag === "LIVE" || item.tag === "BIDDING"
                      ? "rgba(220,38,38,0.85)"
                      : "rgba(208,122,42,0.85)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 6,
                  padding: "3px 10px",
                }}
              >
                {(item.tag === "LIVE" || item.tag === "BIDDING") && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#fff",
                      animation: "liveBlink 1s ease-in-out infinite",
                    }}
                  />
                )}
                <span
                  style={{
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Centered overlay heading */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 24,
                  paddingBottom: 0,
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "clamp(1rem, 2vw, 1.35rem)",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 12px rgba(0,0,0,0.7)",
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  {item.heading}
                </h3>
              </div>

              {/* Bottom: bid indicator */}
              <div
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 0,
                  right: 0,
                  zIndex: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <button
                  type="button"
                  onClick={() => navigate("/auctions")}
                  style={{
                    background: "linear-gradient(135deg, #D07A2A, #F5A623)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                    borderRadius: 24,
                    padding: "7px 22px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 16px rgba(208,122,42,0.5)",
                    letterSpacing: "0.04em",
                    animation: "pulseGlow 2.5s ease-in-out infinite",
                    animationDelay: `${i * 0.4}s`,
                  }}
                  data-ocid={`auction.primary_button.${i + 1}`}
                >
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            height: 3,
            background:
              "linear-gradient(90deg, transparent, #5A8A2E, #D07A2A, #5A8A2E, transparent)",
          }}
        />
      </div>
    </section>
  );
}

function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [traderCount, setTraderCount] = useState(12000);
  const [animalCount, setAnimalCount] = useState(49000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.15 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;
    const target1 = 12847;
    const target2 = 50423;
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - (1 - progress) ** 3;
      setTraderCount(Math.round(12000 + (target1 - 12000) * ease));
      setAnimalCount(Math.round(49000 + (target2 - 49000) * ease));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isVisible]);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${5 + ((i * 5.5) % 90)}%`,
    delay: `${(i * 0.4) % 4}s`,
    duration: `${5 + ((i * 0.7) % 5)}s`,
    size: i % 3 === 0 ? 5 : i % 3 === 1 ? 3 : 4,
  }));

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 px-4"
      style={{
        background:
          "linear-gradient(160deg, #FDFAF4 0%, #F5F0E4 40%, #EEF6EC 100%)",
      }}
    >
      <style>{`
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px, 25px) scale(0.95); }
        }
        @keyframes shimmerTextLight {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes journeyFadeUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pillSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes particleDrift {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-120px) translateX(12px); opacity: 0; }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes bgPatternShift {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes counterPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .journey-enter { animation: journeyFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .journey-pill-1 { animation: pillSlideUp 0.5s ease forwards 0.35s; opacity: 0; }
        .journey-pill-2 { animation: pillSlideUp 0.5s ease forwards 0.50s; opacity: 0; }
        .journey-pill-3 { animation: pillSlideUp 0.5s ease forwards 0.65s; opacity: 0; }
        .journey-pill-4 { animation: pillSlideUp 0.5s ease forwards 0.80s; opacity: 0; }
        .journey-pill-hover:hover {
          background: linear-gradient(135deg, rgba(134,179,76,0.18), rgba(208,167,42,0.15)) !important;
          border-color: rgba(134,179,76,0.55) !important;
          color: #2E5E10 !important;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 4px 16px rgba(134,179,76,0.25);
        }
        .journey-pill-hover { transition: all 0.2s ease; }
        .pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 2px solid rgba(208,122,42,0.6);
          animation: pulseRing 2s ease-out infinite;
        }
        .pulse-ring-2 {
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 2px solid rgba(208,122,42,0.4);
          animation: pulseRing 2s ease-out infinite 0.7s;
        }
        .counter-pop { animation: counterPop 0.4s ease; }
      `}</style>

      {/* Subtle geometric SVG pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2386b34c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          animation: "bgPatternShift 20s linear infinite alternate",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Warm light blobs */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: -80,
          width: 380,
          height: "clamp(240px, 40vw, 380px)",
          borderRadius: "50%",
          background: "rgba(255,200,80,0.18)",
          filter: "blur(70px)",
          animation: "blobFloat1 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -60,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(134,179,76,0.14)",
          filter: "blur(60px)",
          animation: "blobFloat2 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(255,165,50,0.10)",
          filter: "blur(50px)",
          animation: "blobFloat1 6s ease-in-out infinite reverse",
        }}
      />

      {/* Floating particle dots */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "10%",
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background:
              p.id % 2 === 0
                ? "rgba(134,179,76,0.55)"
                : "rgba(208,140,42,0.45)",
            animation: `particleDrift ${p.duration} ease-in infinite ${p.delay}`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        {/* Live counters row */}
        {isVisible && (
          <div
            className="journey-enter flex flex-wrap justify-center gap-6 sm:gap-8 mb-8"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex flex-col items-center">
              <span
                className="text-2xl sm:text-3xl font-extrabold"
                style={{
                  color: "#2E5E10",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {traderCount.toLocaleString()}+
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-widest mt-1"
                style={{ color: "#7A6940" }}
              >
                Active Traders
              </span>
            </div>
            <div
              style={{
                width: 1,
                background: "rgba(134,179,76,0.3)",
                height: 52,
              }}
            />
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-extrabold"
                style={{
                  color: "#2E5E10",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {animalCount.toLocaleString()}+
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-widest mt-1"
                style={{ color: "#7A6940" }}
              >
                Animals Listed
              </span>
            </div>
            <div
              style={{
                width: 1,
                background: "rgba(134,179,76,0.3)",
                height: 52,
              }}
            />
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-extrabold"
                style={{
                  color: "#2E5E10",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                98%
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-widest mt-1"
                style={{ color: "#7A6940" }}
              >
                Satisfaction Rate
              </span>
            </div>
          </div>
        )}

        {/* Badge */}
        {isVisible && (
          <div
            className="journey-enter mb-6 inline-block"
            style={{ animationDelay: "0.08s" }}
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
              style={{
                background: "rgba(134,179,76,0.15)",
                border: "1px solid rgba(134,179,76,0.4)",
                color: "#3A6B12",
              }}
            >
              🌟 Pakistan's Fastest-Growing Livestock Marketplace
            </span>
          </div>
        )}

        {/* Headline */}
        {isVisible && (
          <h2
            className="journey-enter text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A3A0A",
              animationDelay: "0.15s",
            }}
          >
            Start Your Journey{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #3A7D12, #86B34C, #C8A020, #3A7D12)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmerTextLight 3s linear infinite",
              }}
            >
              With Us
            </span>
          </h2>
        )}

        {/* Sub-headline */}
        {isVisible && (
          <p
            className="journey-enter text-lg mb-8 max-w-xl mx-auto"
            style={{ color: "#5A6045", animationDelay: "0.22s" }}
          >
            Join Pakistan's fastest-growing livestock marketplace. Buy, sell,
            and auction with confidence.
          </p>
        )}

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {JOURNEY_PILLS.map((pill, i) => (
            <span
              key={pill.label}
              className={`journey-pill-${i + 1} journey-pill-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold cursor-default`}
              style={{
                background: "rgba(134,179,76,0.1)",
                border: "1px solid rgba(134,179,76,0.28)",
                color: "#3A5A18",
              }}
            >
              <span>{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        {isVisible && (
          <div
            className="journey-enter flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-8"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="relative inline-block">
              <div className="pulse-ring" />
              <div className="pulse-ring-2" />
              <button
                type="button"
                onClick={() => navigate("/livestock")}
                className="relative font-semibold px-8 py-3 rounded-full text-white transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #C07020, #F5A623)",
                  boxShadow: "0 4px 22px rgba(208,122,42,0.4)",
                  zIndex: 1,
                }}
                data-ocid="journey.primary_button"
              >
                Explore Livestock
              </button>
            </div>
            <button
              type="button"
              onClick={() => navigate("/auth")}
              className="font-semibold px-8 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
              style={{
                borderColor: "rgba(58,93,24,0.45)",
                color: "#2E5E10",
                background: "rgba(134,179,76,0.08)",
              }}
              data-ocid="journey.secondary_button"
            >
              List Your Animals
            </button>
          </div>
        )}

        {/* Trust line */}
        {isVisible && (
          <p
            className="journey-enter text-sm"
            style={{ color: "#8A8A6A", animationDelay: "0.42s" }}
          >
            Free to join &nbsp;·&nbsp; No hidden fees &nbsp;·&nbsp; Verified
            community
          </p>
        )}
      </div>
    </section>
  );
}

function FeaturedLivestockSlider() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isSliderMobile = viewportWidth < 640;
  const isSliderTablet = viewportWidth >= 640 && viewportWidth < 1024;
  const CARD_WIDTH = isSliderMobile
    ? Math.min(Math.floor(viewportWidth * 0.75), 280)
    : isSliderTablet
      ? 220
      : 320;
  const CARD_GAP = isSliderMobile ? 12 : 20;
  const VISIBLE_CARDS = isSliderMobile ? 1 : isSliderTablet ? 2 : 4;
  const CARD_STEP = CARD_WIDTH + CARD_GAP;
  const totalCards = MOCK_ANIMALS.length;
  const maxIndex = Math.max(0, totalCards - VISIBLE_CARDS);

  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"waiting" | "spreading" | "sliding">(
    "waiting",
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === "waiting") {
          setTimeout(() => {
            setPhase("spreading");
            setTimeout(() => setPhase("sliding"), 850);
          }, 80);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [phase]);

  const goTo = (idx: number) => {
    setCurrentIndex(Math.max(0, Math.min(maxIndex, idx)));
    setDragOffset(0);
    isDragging.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (phase !== "sliding") return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
    e.preventDefault();
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    dragCurrentX.current = e.clientX;
    setDragOffset(e.clientX - dragStartX.current);
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = dragStartX.current - e.clientX;
    const steps = Math.round(delta / CARD_STEP);
    goTo(currentIndex + steps);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (phase !== "sliding") return;
    dragStartX.current = e.touches[0].clientX;
    dragCurrentX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    dragCurrentX.current = e.touches[0].clientX;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    isDragging.current = false;
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    const steps = Math.round(delta / CARD_STEP);
    goTo(currentIndex + steps);
  };

  const trackTranslateX =
    -(currentIndex * CARD_STEP) + (phase === "sliding" ? dragOffset : 0);

  const sliderViewportWidth =
    VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;
  const viewportCenter = sliderViewportWidth / 2;

  const CONVEX_ANGLES = [16, 5, -5, -16];
  const CONVEX_Z = [-60, 20, 20, -60];
  const getCardStyle = (i: number): React.CSSProperties => {
    if (phase === "sliding") {
      const visibleOffset = i - currentIndex;
      if (isSliderMobile || isSliderTablet) {
        return {
          transition: isDragging.current ? "none" : undefined,
        };
      }
      const rotateY =
        visibleOffset >= 0 && visibleOffset < VISIBLE_CARDS
          ? CONVEX_ANGLES[visibleOffset]
          : 0;
      const translateZ =
        visibleOffset >= 0 && visibleOffset < VISIBLE_CARDS
          ? CONVEX_Z[visibleOffset]
          : 0;
      return {
        transition: isDragging.current ? "none" : undefined,
        transform: `perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      };
    }
    const cardCenter = i * CARD_STEP + CARD_WIDTH / 2;
    const offset = viewportCenter - cardCenter;
    if (phase === "waiting") {
      return {
        transform: `translateX(${offset}px)`,
        transition: "none",
        opacity: i < VISIBLE_CARDS ? 1 : 0,
      };
    }
    return {
      transform: "translateX(0px)",
      transition: `transform 0.75s cubic-bezier(0.4,0,0.2,1) ${i < VISIBLE_CARDS ? i * 0.06 : 0}s, opacity 0.4s ease ${i < VISIBLE_CARDS ? i * 0.06 : 0}s`,
      opacity: 1,
    };
  };

  return (
    <div
      ref={sectionRef}
      style={{
        height: isSliderMobile ? "auto" : "calc(100vh - 64px)",
        minHeight: isSliderMobile ? 500 : undefined,
        paddingBottom: isSliderMobile ? 40 : undefined,
        width: "100%",
        background:
          "linear-gradient(160deg, #0A1A0F 0%, #0D2118 50%, #0A1510 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 50px) scale(0.9); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, 60px) scale(1.15); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(50px, -70px) scale(1.05); }
          80% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(45, 212, 130, 0.3), 0 0 40px rgba(45, 212, 130, 0.1); }
          50% { box-shadow: 0 0 30px rgba(45, 212, 130, 0.5), 0 0 60px rgba(45, 212, 130, 0.2); }
        }
        .livestock-card-dark {
          width: ${CARD_WIDTH}px;
          min-width: ${CARD_WIDTH}px;
          height: ${isSliderMobile ? 340 : isSliderTablet ? 380 : 440}px;
          border-radius: 0;
          background: rgba(10, 28, 18, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(45, 212, 130, 0.12);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .livestock-card-dark:hover {
          border-color: rgba(45, 212, 130, 0.45);
          box-shadow: 0 12px 48px rgba(0,0,0,0.5), 0 0 24px rgba(45, 212, 130, 0.15), inset 0 1px 0 rgba(255,255,255,0.08);
          transform: translateY(-4px);
        }
        .livestock-track {
          display: flex;
          gap: ${CARD_GAP}px;
          align-items: stretch;
          will-change: transform;
          user-select: none;
          cursor: grab;
        }
        .livestock-track:active { cursor: grabbing; }
        .livestock-track.is-sliding {
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .livestock-track.is-dragging {
          transition: none;
        }
        .arrow-btn-glow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(45, 212, 130, 0.4);
          background: rgba(10, 28, 18, 0.8);
          backdrop-filter: blur(12px);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          cursor: pointer;
          transition: all 0.25s ease;
          animation: glowPulse 3s ease-in-out infinite;
        }
        .arrow-btn-glow:hover {
          background: rgba(45, 212, 130, 0.2);
          border-color: rgba(45, 212, 130, 0.8);
          box-shadow: 0 0 20px rgba(45, 212, 130, 0.4);
          transform: scale(1.1);
        }
        .arrow-btn-glow:disabled {
          opacity: 0.25;
          cursor: not-allowed;
          animation: none;
          transform: none;
        }
        .price-gold {
          background: linear-gradient(90deg, #F5A623, #FFD700, #F5A623);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s linear infinite;
          font-weight: 800;
          font-size: 1rem;
        }
        .verified-badge-glow {
          background: rgba(45, 212, 130, 0.15);
          border: 1px solid rgba(45, 212, 130, 0.4);
          color: #4ade80;
          text-shadow: 0 0 8px rgba(45, 212, 130, 0.6);
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          letter-spacing: 0.05em;
        }
        .heading-gradient {
          background: linear-gradient(135deg, #4ade80 0%, #86efac 30%, #F5A623 70%, #FFD700 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s linear infinite;
        }
        .dot-indicator {
          height: 3px;
          border-radius: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
      `}</style>

      {/* Background ambient orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
            animation: "floatOrb1 18s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-8%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
            animation: "floatOrb2 22s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "15%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)",
            animation: "floatOrb3 15s ease-in-out infinite",
          }}
        />
        {/* Grain texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: isSliderMobile ? "0 12px" : "0 24px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isSliderMobile ? 20 : 36,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,212,130,0.08)",
              border: "1px solid rgba(45,212,130,0.2)",
              padding: "4px 16px",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                color: "#4ade80",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              ✦ Live Marketplace ✦
            </span>
          </div>
          <h2
            className="heading-gradient"
            style={{
              fontSize: "clamp(1.5rem, 6vw, 3.2rem)",
              fontWeight: 900,
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Featured Livestock
          </h2>
          <div
            style={{
              width: 80,
              height: 2,
              margin: "12px auto 0",
              background:
                "linear-gradient(90deg, transparent, #4ade80, #F5A623, transparent)",
            }}
          />
          <p
            style={{
              color: "rgba(200,230,210,0.6)",
              marginTop: 10,
              fontSize: 14,
              letterSpacing: "0.03em",
            }}
          >
            Hand-picked animals from verified sellers across Pakistan
          </p>
        </div>

        {/* Slider area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {/* Left Arrow */}
          <button
            type="button"
            data-ocid="featured.pagination_prev"
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="arrow-btn-glow"
            style={{ flexShrink: 0 }}
          >
            ‹
          </button>

          {/* Viewport */}
          <div
            ref={viewportRef}
            style={{
              overflow: "hidden",
              width: `${sliderViewportWidth}px`,
              maxWidth: "calc(100vw - 140px)",
              perspective: "1400px",
            }}
          >
            <div
              className={`livestock-track${phase === "sliding" && !isDragging.current ? " is-sliding" : phase === "sliding" && isDragging.current ? " is-dragging" : ""}`}
              style={{
                transform: `translateX(${trackTranslateX}px)`,
                transformStyle: "preserve-3d",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {MOCK_ANIMALS.map((animal, i) => (
                <div
                  key={animal.id}
                  className="livestock-card-dark"
                  style={getCardStyle(i)}
                >
                  {/* Image area */}
                  <div
                    style={{
                      height: isSliderMobile ? 200 : isSliderTablet ? 230 : 260,
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={`https://picsum.photos/400/300?random=${animal.id + 20}`}
                      alt={animal.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transform: "scale(1.08)",
                      }}
                      draggable={false}
                    />
                    {/* Gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(10,28,18,0.95) 100%)",
                      }}
                    />
                    {/* Vignette / barrel lens effect */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.5) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    {/* Verified badge */}
                    <span
                      className="verified-badge-glow"
                      style={{ position: "absolute", top: 10, right: 10 }}
                    >
                      ✓ VERIFIED
                    </span>
                    {/* Animal type tag */}
                    <span
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "2px 8px",
                      }}
                    >
                      {animal.breed}
                    </span>
                  </div>

                  {/* Card body */}
                  <div
                    style={{
                      padding: "14px 16px 16px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background:
                        "linear-gradient(180deg, rgba(10,28,18,0.9) 0%, rgba(8,20,12,0.98) 100%)",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          color: "#f0faf4",
                          fontWeight: 700,
                          fontSize: 15,
                          marginBottom: 8,
                          letterSpacing: "0.01em",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {animal.title}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                        }}
                      >
                        <span
                          style={{
                            color: "rgba(180,220,195,0.65)",
                            fontSize: 12,
                          }}
                        >
                          📅 {animal.age} &nbsp;·&nbsp; ⚖️ {animal.weight}
                        </span>
                        <span
                          style={{
                            color: "rgba(180,220,195,0.55)",
                            fontSize: 12,
                          }}
                        >
                          📍 {animal.location}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 12,
                      }}
                    >
                      <span className="price-gold">{animal.price}</span>
                      <button
                        type="button"
                        data-ocid={`featured.item.${i + 1}`}
                        onClick={() => navigate("/auth")}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(45,212,130,0.1))",
                          border: "1px solid rgba(74,222,128,0.4)",
                          color: "#4ade80",
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "6px 14px",
                          cursor: "pointer",
                          letterSpacing: "0.05em",
                          transition: "all 0.2s ease",
                          borderRadius: 0,
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.background = "rgba(74,222,128,0.25)";
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.borderColor = "rgba(74,222,128,0.7)";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.background =
                            "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(45,212,130,0.1))";
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.borderColor = "rgba(74,222,128,0.4)";
                        }}
                      >
                        VIEW →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            data-ocid="featured.pagination_next"
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex >= maxIndex}
            className="arrow-btn-glow"
            style={{ flexShrink: 0 }}
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 24,
          }}
        >
          {Array.from({ length: maxIndex + 1 }, (_, i) => i).map((i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => goTo(i)}
              className="dot-indicator"
              style={{
                width: i === currentIndex ? 28 : 8,
                background:
                  i === currentIndex
                    ? "linear-gradient(90deg, #4ade80, #F5A623)"
                    : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CARDS = [
    {
      num: "01",
      tag: "ATTENTION",
      headline: "Pakistan ka Apna Digital Mandi",
      subtext:
        "Mandi is Pakistan's first digital livestock marketplace — connecting buyers, sellers, farms, and service providers in one trusted platform.",
      body: "We're digitizing the traditional mandi experience. No more travelling hours, no more middlemen, no more uncertainty. Transparency, trust, and accessibility for every Pakistani — from Lahore to Larkana.",
      badges: [
        "🇵🇰 Made for Pakistan",
        "🤝 Community-Driven",
        "🔒 Fully Verified",
      ],
      knowMore: null,
      role: null,
    },
    {
      num: "02",
      tag: "AS A BUYER",
      headline: "Tired of the Khuwari?",
      subtext: "You deserve to buy livestock with confidence — not anxiety.",
      problems: [
        "Travelling hours to distant mandis",
        "No price transparency — dalals set the rules",
        "Risk of sick or misrepresented animals",
        "Heavy manual labour and physical exhaustion",
        "Cheated by middlemen with hidden markups",
        "No guarantee of authenticity or health",
      ],
      solution:
        "Mandi gives you verified listings, real photos, vet health certificates, escrow-protected payments, and doorstep delivery.",
      knowMore: "/about/buyer",
      role: "Buyer",
    },
    {
      num: "03",
      tag: "AS A SELLER",
      headline: "Selling Shouldn't Cost You More Than You Earn",
      subtext:
        "The traditional mandi takes from you at every step. There's a better way.",
      problems: [
        "Expensive transport to bring animals to mandi",
        "Forced negotiations with dalals who take their cut",
        "Unsold animals mean total loss — time and money",
        "No reach beyond your local area",
        "Weather and time pressure force bad deals",
        "No record of your reputation or past sales",
      ],
      solution:
        "List from home, set your own price, reach thousands of verified buyers across Pakistan.",
      knowMore: "/about/seller",
      role: "Seller",
    },
    {
      num: "04",
      tag: "AS A CATTLE FARMER",
      headline: "Your Farm Deserves a Bigger Market",
      subtext:
        "You've built something valuable. Now let the right buyers find you.",
      problems: [
        "Limited customer base — only local buyers know you",
        "Managing multiple breeds with no unified platform",
        "No way to showcase your full herd professionally",
        "Competing with large informal sellers with no verification",
        "No system to update customers on new availability",
        "Seasonal demand spikes with no advance booking",
      ],
      solution:
        "A dedicated farm profile, live herd updates, verified badge, breeding records, and direct repeat-buyer connections.",
      knowMore: "/about/cattle-farmer",
      role: "Cattle Farmer",
    },
    {
      num: "05",
      tag: "AS A SERVICE PROVIDER",
      headline: "The Livestock Economy Needs You",
      subtext:
        "Fodder, feed, vet services, equipment — all scattered. Until now.",
      problems: [
        "Fodder and feed suppliers with no online visibility",
        "Tori, gandum, khal vendors serving only local area",
        "Veterinary services unknown beyond their street",
        "Equipment and transport providers missing nationwide demand",
        "No unified marketplace for livestock-related products",
        "Transporters waste capacity with no matching platform",
      ],
      solution:
        "List your products and services where the buyers already are — inside Mandi's thriving livestock economy.",
      knowMore: "/about/service-provider",
      role: "Service Provider",
    },
    {
      num: "06",
      tag: "ACTION",
      headline: "Multiple Roles. One Solution.",
      subtext: "Mandi — Sab Ke Liye",
      body: "Whether you're buying your Qurbani animal, selling your herd, running a cattle farm, or supplying fodder and feed — Mandi is your single trusted platform. Join thousands of Pakistanis already trading smarter.",
      badges: [
        "🛒 Buy Verified Livestock",
        "💰 Sell at Fair Price",
        "🌾 List Your Services",
      ],
      knowMore: null,
      role: null,
    },
  ];

  const totalCards = CARDS.length;

  const getCardStyle = (index: number): React.CSSProperties => {
    // scrollProgress 0→1 across 600vh track
    // Each card peels away over a portion of scroll
    const cardSlot = 1 / totalCards;
    const cardStart = index * cardSlot;
    const _cardEnd = cardStart + cardSlot;

    if (index === totalCards - 1) {
      // Last card never peels
      return {
        transform: "translateY(0) scale(1)",
        opacity: 1,
        zIndex: totalCards - index,
      };
    }

    const progress = Math.max(
      0,
      Math.min(1, (scrollProgress - cardStart) / cardSlot),
    );
    const ty = -progress * 100; // percent
    const scale = 1 - progress * 0.06;
    const opacity = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;

    return {
      transform: `translateY(${ty}%) scale(${scale})`,
      opacity,
      zIndex: totalCards - index,
    };
  };

  // ─── Card 01: Who We Are ─────────────────────────────────────────────────────
  const Card01 = ({ card }: { card: (typeof CARDS)[0] }) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#FAF6EE",
        overflow: "hidden",
      }}
    >
      {/* Topographic line art background */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.07,
        }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50,300 Q100,180 250,300 T550,300 T850,300"
          stroke="#C8830A"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-50,340 Q100,220 250,340 T550,340 T850,340"
          stroke="#C8830A"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-50,380 Q100,260 250,380 T550,380 T850,380"
          stroke="#C8830A"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-50,260 Q100,140 250,260 T550,260 T850,260"
          stroke="#1B5E3B"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50,220 Q100,100 250,220 T550,220 T850,220"
          stroke="#1B5E3B"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50,420 Q100,300 250,420 T550,420 T850,420"
          stroke="#C8830A"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50,460 Q100,340 250,460 T550,460 T850,460"
          stroke="#C8830A"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M-50,180 Q100,60 250,180 T550,180 T850,180"
          stroke="#1B5E3B"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
      {/* Urdu calligraphy watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(120px,25vw,220px)",
          fontWeight: 900,
          color: "#C8830A",
          opacity: 0.05,
          userSelect: "none",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          fontFamily: "serif",
        }}
      >
        مندی
      </div>
      {/* Cattle herd silhouette bottom-right */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "clamp(200px,40vw,420px)",
          opacity: 0.08,
        }}
        viewBox="0 0 420 120"
        preserveAspectRatio="xMaxYMax meet"
      >
        {/* Cow 1 */}
        <ellipse cx="60" cy="80" rx="30" ry="18" fill="#6B3A1F" />
        <rect x="44" y="93" width="6" height="20" rx="2" fill="#6B3A1F" />
        <rect x="54" y="93" width="6" height="22" rx="2" fill="#6B3A1F" />
        <rect x="64" y="93" width="6" height="22" rx="2" fill="#6B3A1F" />
        <rect x="74" y="93" width="6" height="20" rx="2" fill="#6B3A1F" />
        <ellipse cx="90" cy="74" rx="16" ry="12" fill="#6B3A1F" />
        <path
          d="M94,62 Q98,55 100,60"
          stroke="#6B3A1F"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M88,62 Q84,55 82,60"
          stroke="#6B3A1F"
          strokeWidth="2"
          fill="none"
        />
        <ellipse cx="40" cy="76" rx="10" ry="8" fill="#6B3A1F" />
        {/* Cow 2 */}
        <ellipse cx="180" cy="82" rx="28" ry="16" fill="#8B5C2A" />
        <rect x="164" y="94" width="5" height="18" rx="2" fill="#8B5C2A" />
        <rect x="174" y="94" width="5" height="20" rx="2" fill="#8B5C2A" />
        <rect x="184" y="94" width="5" height="20" rx="2" fill="#8B5C2A" />
        <rect x="194" y="94" width="5" height="18" rx="2" fill="#8B5C2A" />
        <ellipse cx="208" cy="77" rx="14" ry="10" fill="#8B5C2A" />
        <path
          d="M211,67 Q215,60 217,65"
          stroke="#8B5C2A"
          strokeWidth="2"
          fill="none"
        />
        {/* Goat */}
        <ellipse cx="300" cy="85" rx="20" ry="13" fill="#9B7A50" />
        <rect x="289" y="95" width="4" height="16" rx="2" fill="#9B7A50" />
        <rect x="297" y="95" width="4" height="17" rx="2" fill="#9B7A50" />
        <rect x="306" y="95" width="4" height="17" rx="2" fill="#9B7A50" />
        <rect x="314" y="95" width="4" height="16" rx="2" fill="#9B7A50" />
        <ellipse cx="320" cy="80" rx="12" ry="9" fill="#9B7A50" />
        <path
          d="M321,71 Q324,64 326,69"
          stroke="#9B7A50"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M318,71 Q315,64 313,69"
          stroke="#9B7A50"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Small cow */}
        <ellipse cx="390" cy="88" rx="22" ry="14" fill="#7A4B20" />
        <rect x="376" y="99" width="5" height="15" rx="2" fill="#7A4B20" />
        <rect x="385" y="99" width="5" height="16" rx="2" fill="#7A4B20" />
        <rect x="395" y="99" width="5" height="16" rx="2" fill="#7A4B20" />
        <rect x="404" y="99" width="5" height="15" rx="2" fill="#7A4B20" />
        <ellipse cx="412" cy="83" rx="13" ry="9" fill="#7A4B20" />
      </svg>
      {/* Top accent border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #1B5E3B, #C8830A, #1B5E3B)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px 80px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              background: "#1B5E3B",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
            }}
          >
            ATTENTION
          </span>
          <span style={{ width: 40, height: 1, background: "#C8830A" }} />
          <span
            style={{
              color: "#C8830A",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            01 / 06
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(30px,5.5vw,58px)",
            fontWeight: 800,
            color: "#1B2E1E",
            marginBottom: 10,
            lineHeight: 1.1,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {card.headline}
        </h2>
        <div
          style={{
            width: 70,
            height: 3,
            background: "linear-gradient(90deg,#C8830A,#1B5E3B)",
            marginBottom: 20,
            borderRadius: 2,
          }}
        />
        <p
          style={{
            fontSize: "clamp(14px,2vw,19px)",
            color: "#3B4A3E",
            marginBottom: 16,
            maxWidth: 620,
            lineHeight: 1.65,
          }}
        >
          {card.subtext}
        </p>
        {"body" in card && card.body && (
          <p
            style={{
              fontSize: "clamp(13px,1.6vw,16px)",
              color: "#5A6B5D",
              maxWidth: 580,
              lineHeight: 1.75,
              marginBottom: 28,
            }}
          >
            {card.body}
          </p>
        )}
        {"badges" in card && card.badges && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {(card.badges as string[]).map((b) => (
              <span
                key={b}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  background: "#1B5E3B",
                  color: "#FAF6EE",
                  letterSpacing: "0.02em",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Card number watermark */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 28,
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 900,
          color: "#1B5E3B",
          opacity: 0.06,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        01
      </div>
    </div>
  );

  // ─── Card 02: As a Buyer ─────────────────────────────────────────────────────
  const Card02 = ({ card }: { card: (typeof CARDS)[1] }) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #F0F7FF 0%, #FFF9F0 100%)",
        overflow: "hidden",
      }}
    >
      {/* Marketplace grid floor pattern */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid02"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10,0 L0,0 0,10"
              fill="none"
              stroke="#0E5163"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid02)" />
      </svg>
      {/* Buyer figure + cow silhouette top-right */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(140px,28vw,280px)",
          opacity: 0.1,
        }}
        viewBox="0 0 280 260"
      >
        {/* Person figure */}
        <circle cx="210" cy="40" r="18" fill="#0E5163" />
        <rect x="196" y="58" width="28" height="50" rx="8" fill="#0E5163" />
        <rect x="184" y="62" width="14" height="36" rx="6" fill="#0E5163" />
        <rect x="222" y="62" width="14" height="36" rx="6" fill="#0E5163" />
        <rect x="196" y="105" width="11" height="42" rx="5" fill="#0E5163" />
        <rect x="209" y="105" width="11" height="42" rx="5" fill="#0E5163" />
        {/* Magnifying glass */}
        <circle
          cx="175"
          cy="90"
          r="16"
          stroke="#D4880C"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="186"
          y1="101"
          x2="196"
          y2="111"
          stroke="#D4880C"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Cow silhouette */}
        <ellipse cx="80" cy="180" rx="45" ry="28" fill="#D4880C" />
        <ellipse cx="125" cy="168" rx="22" ry="17" fill="#D4880C" />
        <path
          d="M128,151 Q135,140 138,148"
          stroke="#D4880C"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M122,151 Q115,140 112,148"
          stroke="#D4880C"
          strokeWidth="3"
          fill="none"
        />
        <rect x="50" y="204" width="9" height="30" rx="3" fill="#D4880C" />
        <rect x="65" y="204" width="9" height="33" rx="3" fill="#D4880C" />
        <rect x="82" y="204" width="9" height="33" rx="3" fill="#D4880C" />
        <rect x="97" y="204" width="9" height="30" rx="3" fill="#D4880C" />
        <ellipse cx="40" cy="175" rx="16" ry="12" fill="#D4880C" />
      </svg>
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #0E5163, #D4880C, #0E5163)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 960,
          margin: "0 auto",
          padding: "80px 24px 60px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              background: "#0E5163",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
            }}
          >
            AS A BUYER
          </span>
          <span style={{ width: 40, height: 1, background: "#D4880C" }} />
          <span
            style={{
              color: "#D4880C",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            02 / 06
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,5vw,52px)",
            fontWeight: 800,
            color: "#0E2A36",
            marginBottom: 8,
            lineHeight: 1.15,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {card.headline}
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg,#D4880C,#0E5163)",
            marginBottom: 16,
            borderRadius: 2,
          }}
        />
        <p
          style={{
            fontSize: "clamp(13px,1.8vw,17px)",
            color: "#2C4A55",
            marginBottom: 18,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          {card.subtext}
        </p>
        {"problems" in card && card.problems && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: "8px 20px",
              marginBottom: 16,
            }}
          >
            {(card.problems as string[]).map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "8px 12px",
                  background: "#FFF0F0",
                  borderLeft: "3px solid #E05252",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                <span
                  style={{
                    color: "#C0392B",
                    fontSize: 11,
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  ✕
                </span>
                <span
                  style={{
                    fontSize: "clamp(11px,1.4vw,13px)",
                    color: "#3A2020",
                    lineHeight: 1.45,
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        )}
        {"solution" in card && card.solution && (
          <div
            style={{
              padding: "12px 18px",
              background: "#E8F5E9",
              borderLeft: "3px solid #1B5E3B",
              borderRadius: "0 10px 10px 0",
              marginBottom: 22,
              fontSize: "clamp(12px,1.5vw,14px)",
              color: "#1B3A22",
              maxWidth: 580,
              lineHeight: 1.6,
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#1B5E3B", marginRight: 8 }}>✓</span>
            {card.solution}
          </div>
        )}
        <div style={{ display: "flex", gap: 12 }}>
          {card.knowMore && (
            <button
              type="button"
              onClick={() => navigate("/about/buyer" as const)}
              style={{
                padding: "11px 26px",
                borderRadius: 8,
                border: "2px solid #0E5163",
                background: "transparent",
                color: "#0E5163",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
              data-ocid="about.buyer.button"
            >
              Know More →
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 28,
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 900,
          color: "#0E5163",
          opacity: 0.05,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        02
      </div>
    </div>
  );

  // ─── Card 03: As a Seller ────────────────────────────────────────────────────
  const Card03 = ({ card }: { card: (typeof CARDS)[2] }) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #FFF8EE 0%, #FFF3DD 100%)",
        overflow: "hidden",
      }}
    >
      {/* Diagonal stripe texture */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="stripe03"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="12"
              stroke="#C0541B"
              strokeWidth="4"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#stripe03)" />
      </svg>
      {/* Mandi gate / scales right side */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          right: "2%",
          width: "clamp(120px,22vw,220px)",
          opacity: 0.1,
        }}
        viewBox="0 0 220 300"
      >
        {/* Gate arch */}
        <path
          d="M20,280 L20,120 Q20,40 110,40 Q200,40 200,120 L200,280"
          stroke="#C0541B"
          strokeWidth="4"
          fill="none"
        />
        <line
          x1="20"
          y1="280"
          x2="200"
          y2="280"
          stroke="#C0541B"
          strokeWidth="4"
        />
        {/* Gate door */}
        <rect
          x="70"
          y="200"
          width="80"
          height="80"
          stroke="#8B7D2A"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="110" cy="240" r="5" fill="#8B7D2A" />
        {/* Scales */}
        <line
          x1="110"
          y1="80"
          x2="110"
          y2="160"
          stroke="#8B7D2A"
          strokeWidth="3"
        />
        <line
          x1="70"
          y1="160"
          x2="150"
          y2="160"
          stroke="#8B7D2A"
          strokeWidth="3"
        />
        <line
          x1="70"
          y1="160"
          x2="55"
          y2="185"
          stroke="#8B7D2A"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="160"
          x2="165"
          y2="185"
          stroke="#8B7D2A"
          strokeWidth="2"
        />
        <path
          d="M45,185 Q55,190 65,185"
          stroke="#8B7D2A"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M155,185 Q165,190 175,185"
          stroke="#8B7D2A"
          strokeWidth="2"
          fill="none"
        />
        {/* Transport truck faint */}
        <rect
          x="30"
          y="230"
          width="55"
          height="32"
          rx="3"
          stroke="#C0541B"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="55"
          y="220"
          width="30"
          height="14"
          rx="2"
          stroke="#C0541B"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="42"
          cy="264"
          r="7"
          stroke="#C0541B"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="73"
          cy="264"
          r="7"
          stroke="#C0541B"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #C0541B, #8B7D2A, #C0541B)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 960,
          margin: "0 auto",
          padding: "80px 24px 60px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              background: "#C0541B",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
            }}
          >
            AS A SELLER
          </span>
          <span style={{ width: 40, height: 1, background: "#8B7D2A" }} />
          <span
            style={{
              color: "#8B7D2A",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            03 / 06
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(26px,4.5vw,48px)",
            fontWeight: 800,
            color: "#2A1200",
            marginBottom: 8,
            lineHeight: 1.15,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {card.headline}
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg,#C0541B,#8B7D2A)",
            marginBottom: 16,
            borderRadius: 2,
          }}
        />
        <p
          style={{
            fontSize: "clamp(13px,1.8vw,17px)",
            color: "#4A2C10",
            marginBottom: 18,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          {card.subtext}
        </p>
        {"problems" in card && card.problems && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: 16,
            }}
          >
            {(card.problems as string[]).map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 12px",
                  background: "#FDE8D8",
                  border: "1px solid #C0541B44",
                  borderRadius: 6,
                  fontSize: "clamp(11px,1.3vw,13px)",
                  color: "#7A2A08",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#C0541B", fontWeight: 800 }}>!</span> {p}
              </span>
            ))}
          </div>
        )}
        {"solution" in card && card.solution && (
          <div
            style={{
              padding: "14px 20px",
              background: "linear-gradient(90deg,#FFF8EE,#FFFAEF)",
              border: "1.5px solid #C0541B",
              borderRadius: 10,
              marginBottom: 22,
              fontSize: "clamp(12px,1.5vw,14px)",
              color: "#2A1200",
              maxWidth: 580,
              lineHeight: 1.65,
              fontWeight: 600,
              boxShadow: "0 2px 12px #C0541B18",
            }}
          >
            <span style={{ color: "#C0541B", marginRight: 8, fontWeight: 900 }}>
              ✓
            </span>
            {card.solution}
          </div>
        )}
        <div>
          {card.knowMore && (
            <button
              type="button"
              onClick={() => navigate("/about/seller" as const)}
              style={{
                padding: "11px 26px",
                borderRadius: 8,
                border: "2px solid #C0541B",
                background: "transparent",
                color: "#C0541B",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
              data-ocid="about.seller.button"
            >
              Know More →
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 28,
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 900,
          color: "#C0541B",
          opacity: 0.05,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        03
      </div>
    </div>
  );

  // ─── Card 04: As a Cattle Farmer ─────────────────────────────────────────────
  const Card04 = ({ card }: { card: (typeof CARDS)[3] }) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(160deg, #F0F7F0 0%, #EFF9EE 100%)",
        overflow: "hidden",
      }}
    >
      {/* Meadow hills at bottom */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "35%",
          opacity: 0.12,
        }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 Q180,60 360,120 Q540,180 720,80 Q900,0 1080,80 Q1260,160 1440,60 L1440,200 Z"
          fill="#2D6A2F"
        />
        <path
          d="M0,200 Q200,100 400,140 Q600,180 800,100 Q1000,20 1200,100 Q1350,160 1440,100 L1440,200 Z"
          fill="#4A8B4C"
          opacity="0.7"
        />
      </svg>
      {/* Sunrise arc top-right */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: "clamp(180px,30vw,300px)",
          opacity: 0.1,
        }}
        viewBox="0 0 300 300"
      >
        <circle
          cx="150"
          cy="150"
          r="100"
          stroke="#D4A017"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="150"
          cy="150"
          r="75"
          stroke="#D4A017"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
        />
        <circle
          cx="150"
          cy="150"
          r="50"
          stroke="#2D6A2F"
          strokeWidth="2"
          fill="none"
        />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (angle) => (
            <line
              key={angle}
              x1={150 + 108 * Math.cos((angle * Math.PI) / 180)}
              y1={150 + 108 * Math.sin((angle * Math.PI) / 180)}
              x2={150 + 120 * Math.cos((angle * Math.PI) / 180)}
              y2={150 + 120 * Math.sin((angle * Math.PI) / 180)}
              stroke="#D4A017"
              strokeWidth="2"
            />
          ),
        )}
      </svg>
      {/* Cattle herd panorama bottom */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "2%",
          width: "clamp(160px,35vw,380px)",
          opacity: 0.09,
        }}
        viewBox="0 0 380 80"
      >
        {[0, 80, 160, 240, 320].map((x) => (
          <g key={x} transform={`translate(${x},0)`}>
            <ellipse cx="30" cy="48" rx="24" ry="14" fill="#2D6A2F" />
            <ellipse cx="54" cy="40" rx="14" ry="10" fill="#2D6A2F" />
            <path
              d="M56,30 Q60,22 62,28"
              stroke="#2D6A2F"
              strokeWidth="2"
              fill="none"
            />
            <rect x="20" y="59" width="5" height="16" rx="2" fill="#2D6A2F" />
            <rect x="28" y="59" width="5" height="18" rx="2" fill="#2D6A2F" />
            <rect x="36" y="59" width="5" height="18" rx="2" fill="#2D6A2F" />
            <rect x="44" y="59" width="5" height="16" rx="2" fill="#2D6A2F" />
          </g>
        ))}
      </svg>
      {/* Scattered grass marks */}
      {[10, 25, 40, 55, 70, 85].map((x) => (
        <div
          key={x}
          style={{
            position: "absolute",
            bottom: "28%",
            left: `${x}%`,
            width: 3,
            height: 14,
            background: "#2D6A2F",
            opacity: 0.08,
            borderRadius: 2,
            transform: "rotate(-5deg)",
          }}
        />
      ))}
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #2D6A2F, #D4A017, #2D6A2F)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 960,
          margin: "0 auto",
          padding: "80px 24px 60px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              background: "#2D6A2F",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
            }}
          >
            AS A CATTLE FARMER
          </span>
          <span style={{ width: 40, height: 1, background: "#D4A017" }} />
          <span
            style={{
              color: "#D4A017",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            04 / 06
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,5vw,52px)",
            fontWeight: 800,
            color: "#1A3A1C",
            marginBottom: 8,
            lineHeight: 1.15,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {card.headline}
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg,#2D6A2F,#D4A017)",
            marginBottom: 16,
            borderRadius: 2,
          }}
        />
        <p
          style={{
            fontSize: "clamp(13px,1.8vw,17px)",
            color: "#1E4220",
            marginBottom: 18,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          {card.subtext}
        </p>
        {"problems" in card && card.problems && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: "8px 20px",
              marginBottom: 16,
            }}
          >
            {(card.problems as string[]).map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: "7px 10px",
                  background: "rgba(255,255,255,0.6)",
                  borderRadius: 6,
                  border: "1px solid #B8D9BC",
                }}
              >
                <span
                  style={{
                    color: "#D4A017",
                    fontSize: 12,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  ◆
                </span>
                <span
                  style={{
                    fontSize: "clamp(11px,1.3vw,13px)",
                    color: "#1E3A22",
                    lineHeight: 1.45,
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        )}
        {"solution" in card && card.solution && (
          <div
            style={{
              padding: "12px 18px",
              background: "rgba(255,255,255,0.75)",
              border: "2px solid #2D6A2F",
              borderRadius: 10,
              marginBottom: 22,
              fontSize: "clamp(12px,1.5vw,14px)",
              color: "#1A3A1C",
              maxWidth: 580,
              lineHeight: 1.6,
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#2D6A2F", marginRight: 8 }}>🌿</span>
            {card.solution}
          </div>
        )}
        <div>
          {card.knowMore && (
            <button
              type="button"
              onClick={() => navigate("/about/cattle-farmer" as const)}
              style={{
                padding: "11px 26px",
                borderRadius: 8,
                border: "2px solid #2D6A2F",
                background: "transparent",
                color: "#2D6A2F",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
              data-ocid="about.cattle_farmer.button"
            >
              Know More →
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 28,
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 900,
          color: "#2D6A2F",
          opacity: 0.05,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        04
      </div>
    </div>
  );

  // ─── Card 05: As a Service Provider ──────────────────────────────────────────
  const Card05 = ({ card }: { card: (typeof CARDS)[4] }) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #FDF6EC 0%, #F9F0DF 100%)",
        overflow: "hidden",
      }}
    >
      {/* Grain/wheat repeating pattern */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
        }}
        viewBox="0 0 80 80"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grain05"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20,35 Q18,28 20,20 Q22,28 20,35"
              stroke="#8B5E3C"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M20,20 Q15,16 10,18"
              stroke="#8B5E3C"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M20,20 Q25,16 30,18"
              stroke="#8B5E3C"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M20,24 Q15,20 10,22"
              stroke="#6EA832"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M20,24 Q25,20 30,22"
              stroke="#6EA832"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grain05)" />
      </svg>
      {/* Grain sacks / fodder bales right side */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "3%",
          width: "clamp(120px,25vw,260px)",
          opacity: 0.12,
        }}
        viewBox="0 0 260 180"
      >
        {/* Sack 1 */}
        <ellipse cx="50" cy="130" rx="40" ry="45" fill="#8B5E3C" />
        <ellipse cx="50" cy="100" rx="30" ry="15" fill="#7A4E2C" />
        <path
          d="M35,100 Q50,90 65,100"
          stroke="#6B3E1C"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="30"
          y1="115"
          x2="70"
          y2="115"
          stroke="#6B3E1C"
          strokeWidth="1.5"
        />
        <line
          x1="28"
          y1="128"
          x2="72"
          y2="128"
          stroke="#6B3E1C"
          strokeWidth="1.5"
        />
        {/* Sack 2 */}
        <ellipse cx="130" cy="135" rx="38" ry="42" fill="#9B6E4C" />
        <ellipse cx="130" cy="105" rx="28" ry="13" fill="#8B5E3C" />
        <line
          x1="110"
          y1="118"
          x2="150"
          y2="118"
          stroke="#7A4E2C"
          strokeWidth="1.5"
        />
        <line
          x1="108"
          y1="130"
          x2="152"
          y2="130"
          stroke="#7A4E2C"
          strokeWidth="1.5"
        />
        {/* Bale */}
        <rect x="180" y="110" width="70" height="50" rx="8" fill="#6EA832" />
        <line
          x1="180"
          y1="125"
          x2="250"
          y2="125"
          stroke="#5A8A28"
          strokeWidth="2"
        />
        <line
          x1="180"
          y1="140"
          x2="250"
          y2="140"
          stroke="#5A8A28"
          strokeWidth="2"
        />
        <line
          x1="205"
          y1="110"
          x2="205"
          y2="160"
          stroke="#5A8A28"
          strokeWidth="2"
        />
        <line
          x1="225"
          y1="110"
          x2="225"
          y2="160"
          stroke="#5A8A28"
          strokeWidth="2"
        />
        {/* Wheat stalks */}
        <line
          x1="200"
          y1="80"
          x2="200"
          y2="110"
          stroke="#8B5E3C"
          strokeWidth="2"
        />
        <path
          d="M200,90 Q193,84 188,88"
          stroke="#8B5E3C"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M200,90 Q207,84 212,88"
          stroke="#8B5E3C"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M200,82 Q193,76 188,80"
          stroke="#6EA832"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M200,82 Q207,76 212,80"
          stroke="#6EA832"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="220"
          y1="75"
          x2="220"
          y2="110"
          stroke="#8B5E3C"
          strokeWidth="2"
        />
        <path
          d="M220,85 Q213,79 208,83"
          stroke="#8B5E3C"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M220,85 Q227,79 232,83"
          stroke="#8B5E3C"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #8B5E3C, #6EA832, #8B5E3C)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 960,
          margin: "0 auto",
          padding: "80px 24px 60px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              background: "#8B5E3C",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
            }}
          >
            AS A SERVICE PROVIDER
          </span>
          <span style={{ width: 40, height: 1, background: "#6EA832" }} />
          <span
            style={{
              color: "#6EA832",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            05 / 06
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,5vw,52px)",
            fontWeight: 800,
            color: "#2A1800",
            marginBottom: 8,
            lineHeight: 1.15,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {card.headline}
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg,#8B5E3C,#6EA832)",
            marginBottom: 16,
            borderRadius: 2,
          }}
        />
        <p
          style={{
            fontSize: "clamp(13px,1.8vw,17px)",
            color: "#3A2A10",
            marginBottom: 18,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          {card.subtext}
        </p>
        {"problems" in card && card.problems && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: 16,
            }}
          >
            {(card.problems as string[]).map((p) => (
              <span
                key={p}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 12px",
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid #C4934A",
                  borderRadius: 999,
                  fontSize: "clamp(11px,1.3vw,12px)",
                  color: "#4A2A08",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#8B5E3C",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {p}
              </span>
            ))}
          </div>
        )}
        {"solution" in card && card.solution && (
          <div
            style={{
              padding: "12px 18px",
              background: "rgba(110,168,50,0.12)",
              border: "2px solid #6EA832",
              borderRadius: 10,
              marginBottom: 22,
              fontSize: "clamp(12px,1.5vw,14px)",
              color: "#2A3A08",
              maxWidth: 580,
              lineHeight: 1.6,
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#6EA832", marginRight: 8 }}>🌾</span>
            {card.solution}
          </div>
        )}
        <div>
          {card.knowMore && (
            <button
              type="button"
              onClick={() => navigate("/about/service-provider" as const)}
              style={{
                padding: "11px 26px",
                borderRadius: 8,
                border: "2px solid #8B5E3C",
                background: "transparent",
                color: "#8B5E3C",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
              data-ocid="about.service_provider.button"
            >
              Know More →
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 28,
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 900,
          color: "#8B5E3C",
          opacity: 0.05,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        05
      </div>
    </div>
  );

  // ─── Card 06: Multiple Roles. One Solution. ───────────────────────────────────
  const Card06 = ({ card }: { card: (typeof CARDS)[5] }) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(160deg, #FFFFFF 0%, #E8F5E9 100%)",
        overflow: "hidden",
      }}
    >
      {/* Orbit convergence diagram */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "clamp(-60px,-5vw,20px)",
          transform: "translateY(-50%)",
          width: "clamp(200px,38vw,420px)",
          height: "clamp(200px,38vw,420px)",
        }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 420 420"
          style={{ width: "100%", height: "100%", opacity: 0.18 }}
        >
          {/* Orbit rings */}
          <circle
            cx="210"
            cy="210"
            r="160"
            stroke="#1B5E3B"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 4"
          />
          <circle
            cx="210"
            cy="210"
            r="110"
            stroke="#1B5E3B"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 6"
          />
          <circle
            cx="210"
            cy="210"
            r="60"
            stroke="#C8830A"
            strokeWidth="2"
            fill="none"
          />
          {/* Center M */}
          <circle cx="210" cy="210" r="36" fill="#1B5E3B" />
          <text
            x="210"
            y="218"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="900"
            fontFamily="serif"
          >
            م
          </text>
          {/* Role nodes on outer orbit */}
          {[
            { angle: 270, label: "Buyer", color: "#0E5163", icon: "🛒" },
            { angle: 342, label: "Seller", color: "#C0541B", icon: "💰" },
            { angle: 54, label: "Farmer", color: "#2D6A2F", icon: "🌾" },
            { angle: 126, label: "Provider", color: "#8B5E3C", icon: "📦" },
            { angle: 198, label: "Mandi", color: "#C8830A", icon: "🏪" },
          ].map(({ angle, color, icon }) => {
            const rad = ((angle - 90) * Math.PI) / 180;
            const cx2 = 210 + 160 * Math.cos(rad);
            const cy2 = 210 + 160 * Math.sin(rad);
            const ix = 210 + 75 * Math.cos(rad);
            const iy = 210 + 75 * Math.sin(rad);
            return (
              <g key={angle}>
                <line
                  x1={cx2}
                  y1={cy2}
                  x2={ix}
                  y2={iy}
                  stroke={color}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <circle cx={cx2} cy={cy2} r="22" fill={color} />
                <text x={cx2} y={cy2 + 6} textAnchor="middle" fontSize="16">
                  {icon}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #1B5E3B, #C8830A, #1B5E3B)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 960,
          margin: "0 auto",
          padding: "80px 24px 80px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              background: "#1B5E3B",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
            }}
          >
            ACTION
          </span>
          <span style={{ width: 40, height: 1, background: "#C8830A" }} />
          <span
            style={{
              color: "#C8830A",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            06 / 06
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(32px,6vw,64px)",
            fontWeight: 900,
            color: "#1B2E1E",
            marginBottom: 8,
            lineHeight: 1.05,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {card.headline}
        </h2>
        <p
          style={{
            fontSize: "clamp(18px,3vw,28px)",
            color: "#C8830A",
            fontWeight: 700,
            marginBottom: 12,
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
          }}
        >
          {card.subtext}
        </p>
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg,#1B5E3B,#C8830A)",
            marginBottom: 20,
            borderRadius: 2,
          }}
        />
        {"body" in card && card.body && (
          <p
            style={{
              fontSize: "clamp(14px,1.8vw,17px)",
              color: "#3B4A3E",
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            {card.body}
          </p>
        )}
        {"badges" in card && card.badges && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 32,
            }}
          >
            {(card.badges as string[]).map((b) => (
              <span
                key={b}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  background: "#1B5E3B",
                  color: "#FAF6EE",
                  letterSpacing: "0.02em",
                  boxShadow: "0 2px 12px #1B5E3B30",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        )}
        <div>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "15px 40px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg,#1B5E3B,#2D8A57)",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 16,
              cursor: "pointer",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 24px #1B5E3B40",
            }}
            data-ocid="about.join_mandi.primary_button"
          >
            Join Mandi Today 🚀
          </button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 28,
          fontSize: "clamp(60px,10vw,100px)",
          fontWeight: 900,
          color: "#1B5E3B",
          opacity: 0.04,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        06
      </div>
    </div>
  );

  const CardComponents = [Card01, Card02, Card03, Card04, Card05, Card06];

  return (
    <>
      {/* Stacking cards scroll track */}
      <div
        ref={sectionRef}
        id="who-we-are"
        style={{ height: "600vh", position: "relative", background: "#FAF6EE" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {CARDS.map((card, i) => {
            const CardComp = CardComponents[i];
            return (
              <div
                key={card.num}
                style={{
                  position: "absolute",
                  inset: 0,
                  transition: "transform 0.1s linear, opacity 0.1s linear",
                  ...getCardStyle(i),
                  willChange: "transform, opacity",
                  borderRadius: i < CARDS.length - 1 ? "0 0 16px 16px" : 0,
                  overflow: "hidden",
                  boxShadow:
                    i < CARDS.length - 1
                      ? "0 8px 40px rgba(0,0,0,0.12)"
                      : "none",
                }}
              >
                <CardComp card={card as any} />
                {/* Scroll indicator (first card only) */}
                {i === 0 && scrollProgress < 0.02 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 32,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                      animation: "bounce 2s ease-in-out infinite",
                      zIndex: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        color: "#1B5E3B",
                        letterSpacing: "0.15em",
                        fontWeight: 700,
                        opacity: 0.5,
                      }}
                    >
                      SCROLL
                    </span>
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background: "#1B5E3B",
                        opacity: 0.25,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* VALUE_PROPS strip (Transparency/Trust/Accessibility/Innovation) */}
      <div className="w-full" style={{ background: "#E7F4EA" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#B8D9C0]">
            {VALUE_PROPS.map((vp, i) => (
              <div
                key={vp.title}
                className="text-center py-6 px-4 animate-fade-up"
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                <div className="text-2xl mb-2">{vp.icon}</div>
                <div className="font-bold text-[#173B2A] text-sm mb-0.5">
                  {vp.title}
                </div>
                <div className="text-xs text-[#5E6660]">{vp.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy divider */}
      <div className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#173B2A"
          />
        </svg>
      </div>
    </>
  );
}

export default function Landing() {
  const heroImages = [
    "/assets/generated/hero-livestock-1.dim_800x500.jpg",
    "/assets/generated/hero-livestock-2.dim_800x500.jpg",
    "/assets/generated/hero-livestock-3.dim_800x500.jpg",
    "/assets/generated/hero-livestock-4.dim_800x500.jpg",
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setHeroIndex((i) => (i + 1) % heroImages.length),
      17000,
    );
    return () => clearInterval(t);
  }, []);

  // Scroll-driven hero animation
  const outerWrapperRef = useRef<HTMLDivElement>(null);
  const tvRef = useRef<HTMLDivElement>(null);
  const tvInnerRef = useRef<HTMLDivElement>(null);
  const tvBadgeBottomRef = useRef<HTMLDivElement>(null);
  const tvBadgeTopRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let rafId: number;
    let cachedScaleNeeded = 1;
    let cachedTargetX = 0;
    let cachedTargetY = 0;
    let measured = false;

    const measure = () => {
      const tvEl = tvInnerRef.current;
      if (!tvEl) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rect = tvEl.getBoundingClientRect();
      const scaleX = vw / rect.width;
      const scaleY = vh / rect.height;
      cachedScaleNeeded = Math.max(scaleX, scaleY) * 1.05;
      const tvCenterX = rect.left + rect.width / 2;
      const tvCenterY = rect.top + rect.height / 2;
      cachedTargetX = vw / 2 - tvCenterX;
      cachedTargetY = vh / 2 - tvCenterY;
      measured = true;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const outer = outerWrapperRef.current;
        const tvEl = tvInnerRef.current;
        if (!outer || !tvEl) return;

        // Re-measure on first scroll so we get the settled layout
        if (!measured) measure();

        const outerRect = outer.getBoundingClientRect();
        const trackLength = outer.offsetHeight - window.innerHeight;
        const scrolled = -outerRect.top; // pixels scrolled into the wrapper
        const progress = Math.max(0, Math.min(1, scrolled / trackLength));

        const currentScale = 1 + (cachedScaleNeeded - 1) * progress;
        const currentX = cachedTargetX * progress;
        const currentY = cachedTargetY * progress;

        // Interpolate rotation from 4deg → 0deg
        const startRotZ = 4;
        const startRotY = 10;
        const rotZ = startRotZ * (1 - progress);
        const rotY = startRotY * (1 - progress);

        tvEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale}) perspective(900px) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
        tvEl.style.transformOrigin = "center center";

        // Fade badges out as TV expands (disappear after 60% progress)
        const badgeOpacity = Math.max(0, 1 - progress * 2.5);
        if (tvBadgeBottomRef.current)
          tvBadgeBottomRef.current.style.opacity = String(badgeOpacity);
        if (tvBadgeTopRef.current)
          tvBadgeTopRef.current.style.opacity = String(badgeOpacity);
      });
    };

    // Initial measure after layout settles
    const tid = setTimeout(() => {
      measure();
      // Trigger once to set initial state
      onScroll();
    }, 300);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(tid);
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      // Reset transform on cleanup
      if (tvInnerRef.current) {
        tvInnerRef.current.style.transform = "";
      }
      if (tvBadgeBottomRef.current)
        tvBadgeBottomRef.current.style.opacity = "1";
      if (tvBadgeTopRef.current) tvBadgeTopRef.current.style.opacity = "1";
    };
  }, []); // eslint-disable-line

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.04); }
          28% { transform: scale(1); }
          42% { transform: scale(1.03); }
          70% { transform: scale(1); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
      <Navbar dark />

      {/* ── Hero ── */}
      {/* Outer tall wrapper: 450vh scroll track */}
      <div
        ref={outerWrapperRef}
        style={{
          position: "relative",
          height: isMobile ? "160vh" : "250vh",
          background:
            "linear-gradient(135deg, #0F2C1F 0%, #1a4a33 50%, #173B2A 100%)",
        }}
      >
        <div
          ref={stickyRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #0F2C1F 0%, #1a4a33 50%, #173B2A 100%)",
            minHeight: 580,
          }}
          className="relative flex items-center overflow-hidden"
        >
          {/* Animated background circles */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 animate-float" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-[#D07A2A]/10 animate-float-delayed" />
          {/* Pulsing ambient orbs */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15%",
                left: "8%",
                width: 180,
                height: 180,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(208,122,42,0.18) 0%, transparent 70%)",
                animation: "orbPulse 3s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                right: "10%",
                width: 220,
                height: 220,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(46,125,50,0.15) 0%, transparent 70%)",
                animation: "orbPulse 4s ease-in-out infinite 1s",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 140,
                height: 140,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
                animation: "orbPulse 2.5s ease-in-out infinite 0.5s",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "25%",
                width: 100,
                height: 100,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(208,122,42,0.12) 0%, transparent 70%)",
                animation: "orbPulse 3.5s ease-in-out infinite 2s",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 w-full py-8 md:py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Hero copy */}
              <div className="animate-fade-up text-center">
                <span className="inline-block bg-[#D07A2A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse-slow">
                  🇵🇰 Pakistan's #1 Livestock Platform
                </span>
                <h1
                  className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Pakistan's Premier Digital Livestock Marketplace
                </h1>
                <p
                  className="text-gray-300 text-lg mb-8"
                  style={{
                    animation: "heartbeat 2.2s ease-in-out infinite",
                    display: "inline-block",
                    textShadow:
                      "0 0 20px rgba(208,122,42,0.4), 0 0 40px rgba(208,122,42,0.15)",
                  }}
                >
                  Buy, sell and auction livestock online. Verified sellers,
                  transparent pricing, secure transactions.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
                  <button
                    type="button"
                    onClick={() => navigate("/auth")}
                    className="btn-orange font-semibold hover:scale-105 transition-transform w-full sm:w-auto"
                    data-ocid="hero.primary_button"
                  >
                    Explore Livestock
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/auth")}
                    className="border-2 border-white text-white rounded-full px-6 py-2.5 font-semibold hover:bg-white hover:text-[#173B2A] transition-all duration-200 w-full sm:w-auto text-center"
                    data-ocid="hero.secondary_button"
                  >
                    List Your Animals
                  </button>
                </div>
              </div>

              {/* Right: Video container */}
              <div
                ref={tvRef}
                className="relative flex justify-center"
                style={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Gradient border frame — animated by scroll handler */}
                <div
                  ref={tvInnerRef}
                  style={{
                    transform:
                      "perspective(900px) rotateY(10deg) rotateZ(4deg)",
                    transformOrigin: "center center",
                    willChange: "transform",
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  <div
                    className="p-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #2E7D32 0%, #D07A2A 50%, #5A8A2E 100%)",
                      boxShadow:
                        "0 0 40px rgba(208,122,42,0.3), 0 20px 60px rgba(0,0,0,0.4)",
                      borderRadius: 0,
                      width: "clamp(280px, 80vw, 560px)",
                      height: "clamp(190px, 54vw, 380px)",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        borderRadius: 0,
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        background: "#000",
                      }}
                    >
                      {heroImages.map((src, idx) => (
                        <img
                          key={src}
                          src={src}
                          alt={`Livestock ${idx + 1}`}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: idx === heroIndex ? 1 : 0,
                            transition: "opacity 1.2s ease-in-out",
                          }}
                        />
                      ))}
                      {/* dot indicators */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 10,
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: 6,
                          zIndex: 10,
                        }}
                      >
                        {heroImages.map((_, idx) => (
                          <div
                            // biome-ignore lint/suspicious/noArrayIndexKey: stable static array
                            key={idx}
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background:
                                idx === heroIndex
                                  ? "#D07A2A"
                                  : "rgba(255,255,255,0.5)",
                              transition: "background 0.4s",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge: bottom-left — inside tvInnerRef so it scales with TV */}
                <div
                  ref={tvBadgeBottomRef}
                  style={{
                    position: "absolute",
                    bottom: -12,
                    left: -12,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    background: "rgba(15,44,31,0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    zIndex: 10,
                    pointerEvents: "none",
                    willChange: "opacity",
                  }}
                >
                  <span style={{ fontSize: 18 }}>🐄</span>
                  <span>Live Livestock</span>
                </div>

                {/* Floating badge: top-right — inside tvInnerRef so it scales with TV */}
                <div
                  ref={tvBadgeTopRef}
                  style={{
                    position: "absolute",
                    top: -12,
                    right: -12,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    background: "rgba(208,122,42,0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 4px 20px rgba(208,122,42,0.4)",
                    zIndex: 10,
                    pointerEvents: "none",
                    willChange: "opacity",
                  }}
                >
                  <span style={{ fontSize: 18 }}>🐐</span>
                  <span>Buy &amp; Sell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end outer wrapper */}

      {/* ── Who We Are – Stacking Cards ── */}
      <WhoWeAreSection />

      {/* Stats bar */}
      <div className="bg-[#173B2A] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {value}
                </div>
                <div className="text-sm text-gray-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <FeaturedLivestockSlider />

      {/* How It Works */}
      <div className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1F2A22] mb-2">
            How It Works
          </h2>
          <p className="text-[#5E6660] mb-10">
            Simple, secure, and transparent
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Register & Choose Role",
                desc: "Sign up as a Buyer, Seller, Farm, or multiple roles at once.",
                icon: "👤",
              },
              {
                step: "2",
                title: "Browse & Connect",
                desc: "Search verified listings, compare animals, message sellers directly.",
                icon: "🔍",
              },
              {
                step: "3",
                title: "Secure Transaction",
                desc: "Book with deposit, complete payment on delivery. Fully escrow-protected.",
                icon: "🔒",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 hover:scale-110 transition-transform cursor-default"
                  style={{ background: "#E7F4EA" }}
                >
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-[#D07A2A] mb-1">
                  STEP {item.step}
                </div>
                <h3 className="font-bold text-lg text-[#1F2A22] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5E6660] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Live Auctions ── */}
      <AuctionSection />

      {/* Start Your Journey With Us */}
      <JourneySection />

      {/* Contact anchor */}
      <div id="contact" />
      <Footer />
    </div>
  );
}
