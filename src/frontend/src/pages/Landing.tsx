import { useEffect, useRef } from "react";
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
    location: "Faisalabad",
    price: "PKR 220,000",
  },
  {
    id: 3,
    title: "Beetal Goat",
    breed: "Beetal",
    age: "2 years",
    weight: "65 kg",
    location: "Multan",
    price: "PKR 45,000",
  },
  {
    id: 4,
    title: "Bakra Eid Special",
    breed: "Teddy Goat",
    age: "1.5 years",
    weight: "55 kg",
    location: "Karachi",
    price: "PKR 38,000",
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

// Pastoral SVG animation for Who We Are section
function PastoralScene() {
  return (
    <div
      className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #87CEEB 0%, #B8E4F7 40%, #E7F4EA 60%, #5A8A2E 100%)",
      }}
    >
      <style>{`
        @keyframes graze {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(18px); }
        }
        @keyframes graze-goat {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-14px); }
        }
        @keyframes bobHead {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes cloudDrift {
          0% { transform: translateX(-10px); }
          100% { transform: translateX(10px); }
        }
        @keyframes sunPulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes grassWave {
          0%, 100% { transform: rotate(-3deg) translateY(0); }
          50% { transform: rotate(3deg) translateY(-3px); }
        }
        @keyframes floatBird {
          0% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(15px) translateY(-8px); }
          66% { transform: translateX(30px) translateY(0); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}</style>

      {/* Sun */}
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 40,
          width: 52,
          height: 52,
          background: "radial-gradient(circle, #FFE066 60%, #FFD700 100%)",
          borderRadius: "50%",
          boxShadow: "0 0 30px 10px rgba(255,220,50,0.35)",
          animation: "sunPulse 3s ease-in-out infinite",
        }}
      />

      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <div
          key={deg}
          style={{
            position: "absolute",
            top: 42,
            right: 63,
            width: 2,
            height: 14,
            borderRadius: 2,
            background: "rgba(255,220,50,0.6)",
            transformOrigin: "50% -14px",
            transform: `rotate(${deg}deg)`,
            animation: "sunPulse 3s ease-in-out infinite",
            animationDelay: "0.15s",
          }}
        />
      ))}

      {/* Cloud 1 */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          animation: "cloudDrift 5s ease-in-out infinite alternate",
        }}
      >
        <div style={{ position: "relative", width: 80, height: 28 }}>
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 0,
              width: 50,
              height: 20,
              background: "rgba(255,255,255,0.85)",
              borderRadius: 20,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 14,
              width: 36,
              height: 26,
              background: "rgba(255,255,255,0.9)",
              borderRadius: 20,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 6,
              left: 36,
              width: 30,
              height: 18,
              background: "rgba(255,255,255,0.8)",
              borderRadius: 20,
            }}
          />
        </div>
      </div>

      {/* Cloud 2 */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 140,
          animation: "cloudDrift 7s ease-in-out infinite alternate-reverse",
        }}
      >
        <div style={{ position: "relative", width: 60, height: 22 }}>
          <div
            style={{
              position: "absolute",
              top: 6,
              left: 0,
              width: 40,
              height: 16,
              background: "rgba(255,255,255,0.75)",
              borderRadius: 16,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 10,
              width: 28,
              height: 20,
              background: "rgba(255,255,255,0.85)",
              borderRadius: 16,
            }}
          />
        </div>
      </div>

      {/* Birds */}
      <div
        style={{
          position: "absolute",
          top: 55,
          left: 80,
          animation: "floatBird 8s ease-in-out infinite",
        }}
      >
        <svg
          width="24"
          height="10"
          viewBox="0 0 24 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 5 Q6 0 12 5 Q18 0 24 5"
            stroke="#444"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Ground hill */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg
          aria-hidden="true"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 60 }}
        >
          <ellipse cx="200" cy="120" rx="260" ry="90" fill="#4A7C2E" />
          <ellipse cx="50" cy="110" rx="130" ry="70" fill="#5A8A2E" />
          <ellipse cx="350" cy="115" rx="120" ry="65" fill="#5A8A2E" />
        </svg>
      </div>

      {/* Grass blades */}
      {[60, 100, 160, 200, 260, 300].map((x, i) => (
        <div
          key={x}
          style={{
            position: "absolute",
            bottom: 52,
            left: x,
            animation: `grassWave ${1.5 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
            transformOrigin: "bottom center",
          }}
        >
          <svg width="12" height="22" viewBox="0 0 12 22" aria-hidden="true">
            <path
              d="M6 22 Q2 14 5 0"
              stroke="#3A6B1E"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M6 22 Q10 13 7 2"
              stroke="#4A7C2E"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}

      {/* Cow SVG */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: 30,
          animation: "graze 4s ease-in-out infinite",
        }}
      >
        <svg
          aria-hidden="true"
          width="110"
          height="75"
          viewBox="0 0 110 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Body */}
          <ellipse
            cx="55"
            cy="45"
            rx="36"
            ry="20"
            fill="#F5F0E8"
            stroke="#8B7355"
            strokeWidth="1.5"
          />
          {/* Head */}
          <g
            style={{
              transformOrigin: "28px 32px",
              animation: "bobHead 3s ease-in-out infinite",
            }}
          >
            <ellipse
              cx="22"
              cy="32"
              rx="14"
              ry="11"
              fill="#F5F0E8"
              stroke="#8B7355"
              strokeWidth="1.5"
            />
            {/* Snout */}
            <ellipse
              cx="14"
              cy="37"
              rx="7"
              ry="5"
              fill="#E8D5C0"
              stroke="#8B7355"
              strokeWidth="1"
            />
            {/* Nostril */}
            <circle cx="12" cy="38" r="1.2" fill="#8B7355" />
            <circle cx="16" cy="38" r="1.2" fill="#8B7355" />
            {/* Eye */}
            <circle cx="22" cy="28" r="2.5" fill="#2C2C2C" />
            <circle cx="23" cy="27" r="0.8" fill="white" />
            {/* Horns */}
            <path
              d="M28 22 Q30 16 25 14"
              stroke="#C4A882"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M20 22 Q18 16 22 13"
              stroke="#C4A882"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </g>
          {/* Legs */}
          <rect
            x="30"
            y="62"
            width="8"
            height="13"
            rx="3"
            fill="#D4C5A9"
            stroke="#8B7355"
            strokeWidth="1"
          />
          <rect
            x="44"
            y="62"
            width="8"
            height="13"
            rx="3"
            fill="#D4C5A9"
            stroke="#8B7355"
            strokeWidth="1"
          />
          <rect
            x="60"
            y="62"
            width="8"
            height="13"
            rx="3"
            fill="#D4C5A9"
            stroke="#8B7355"
            strokeWidth="1"
          />
          <rect
            x="74"
            y="62"
            width="8"
            height="13"
            rx="3"
            fill="#D4C5A9"
            stroke="#8B7355"
            strokeWidth="1"
          />
          {/* Patches */}
          <ellipse
            cx="55"
            cy="40"
            rx="12"
            ry="8"
            fill="#8B7355"
            opacity="0.3"
          />
          <ellipse cx="70" cy="48" rx="8" ry="5" fill="#8B7355" opacity="0.2" />
          {/* Tail */}
          <path
            d="M91 45 Q100 38 96 55"
            stroke="#8B7355"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="96" cy="56" r="3" fill="#8B7355" />
          {/* Udder */}
          <ellipse
            cx="52"
            cy="64"
            rx="10"
            ry="5"
            fill="#F2C0C0"
            stroke="#D4A0A0"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Goat SVG */}
      <div
        style={{
          position: "absolute",
          bottom: 68,
          right: 25,
          animation: "graze-goat 3.5s ease-in-out infinite",
        }}
      >
        <svg
          aria-hidden="true"
          width="80"
          height="65"
          viewBox="0 0 80 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Body */}
          <ellipse
            cx="42"
            cy="38"
            rx="26"
            ry="16"
            fill="#E8DCC8"
            stroke="#7A6548"
            strokeWidth="1.5"
          />
          {/* Head */}
          <g
            style={{
              transformOrigin: "20px 24px",
              animation: "bobHead 2.5s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <ellipse
              cx="16"
              cy="22"
              rx="11"
              ry="9"
              fill="#E8DCC8"
              stroke="#7A6548"
              strokeWidth="1.5"
            />
            {/* Snout */}
            <ellipse
              cx="9"
              cy="27"
              rx="5.5"
              ry="4"
              fill="#D4BFA0"
              stroke="#7A6548"
              strokeWidth="1"
            />
            {/* Nostril */}
            <circle cx="8" cy="28" r="1" fill="#7A6548" />
            <circle cx="11" cy="28" r="1" fill="#7A6548" />
            {/* Eye */}
            <ellipse cx="17" cy="19" rx="2.2" ry="2.8" fill="#2C2C2C" />
            <circle cx="17.8" cy="18" r="0.7" fill="white" />
            {/* Ears */}
            <ellipse
              cx="26"
              cy="18"
              rx="5"
              ry="3"
              fill="#C8A878"
              stroke="#7A6548"
              strokeWidth="1"
              transform="rotate(-20 26 18)"
            />
            {/* Beard */}
            <path
              d="M9 31 Q8 38 10 40"
              stroke="#C8A878"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Horns */}
            <path
              d="M22 14 Q25 8 21 5"
              stroke="#9A8060"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M15 14 Q12 8 15 4"
              stroke="#9A8060"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </g>
          {/* Legs */}
          <rect
            x="22"
            y="51"
            width="6"
            height="12"
            rx="2.5"
            fill="#C8B090"
            stroke="#7A6548"
            strokeWidth="1"
          />
          <rect
            x="33"
            y="51"
            width="6"
            height="12"
            rx="2.5"
            fill="#C8B090"
            stroke="#7A6548"
            strokeWidth="1"
          />
          <rect
            x="48"
            y="51"
            width="6"
            height="12"
            rx="2.5"
            fill="#C8B090"
            stroke="#7A6548"
            strokeWidth="1"
          />
          <rect
            x="58"
            y="51"
            width="6"
            height="12"
            rx="2.5"
            fill="#C8B090"
            stroke="#7A6548"
            strokeWidth="1"
          />
          {/* Tail */}
          <path
            d="M68 36 Q75 30 72 40"
            stroke="#7A6548"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Small tree */}
      <div style={{ position: "absolute", bottom: 62, right: 120 }}>
        <svg width="30" height="55" viewBox="0 0 30 55" aria-hidden="true">
          <rect x="13" y="35" width="5" height="20" fill="#5C3A1E" />
          <ellipse cx="15" cy="28" rx="14" ry="18" fill="#3A7D2E" />
          <ellipse cx="15" cy="20" rx="10" ry="14" fill="#4A9A3A" />
        </svg>
      </div>

      {/* Ambient floating particles */}
      {[
        { x: 70, y: 80, delay: "0s" },
        { x: 150, y: 60, delay: "1.2s" },
        { x: 280, y: 75, delay: "0.6s" },
      ].map((p) => (
        <div
          key={p.x}
          style={{
            position: "absolute",
            top: p.y,
            left: p.x,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255,220,50,0.5)",
            animation: "sunPulse 3s ease-in-out infinite",
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

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
        <div className="text-center pt-16 pb-10 px-4">
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
            className="auction-heading text-4xl md:text-6xl font-bold text-white leading-tight"
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
          <p className="auction-subtitle text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Watch real-time livestock auctions. Bid on premium cattle, goats,
            and more — directly from verified farms across Pakistan.
          </p>
        </div>

        {/* 4 tall video containers — flush, no gap, no border */}
        <div
          className="flex flex-col sm:flex-row w-full"
          style={{ minHeight: 520 }}
        >
          {AUCTION_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`auction-card-${i + 1} relative flex-1 overflow-hidden`}
              style={{ minHeight: 520 }}
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("journey-visible");
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

  return (
    <section
      className="relative overflow-hidden py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, #0F2C1F 0%, #173B2A 60%, #0F2C1F 100%)",
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
        @keyframes shimmerText {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pillSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes journeyFadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .journey-visible .journey-animate { animation: journeyFadeUp 0.7s ease forwards; }
        .journey-visible .pill-1 { animation: pillSlideUp 0.5s ease forwards 0.3s; }
        .journey-visible .pill-2 { animation: pillSlideUp 0.5s ease forwards 0.45s; }
        .journey-visible .pill-3 { animation: pillSlideUp 0.5s ease forwards 0.6s; }
        .journey-visible .pill-4 { animation: pillSlideUp 0.5s ease forwards 0.75s; }
        .pill-1, .pill-2, .pill-3, .pill-4 { opacity: 0; }
        .journey-animate { opacity: 0; }
      `}</style>

      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: -80,
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "rgba(208,122,42,0.12)",
          filter: "blur(60px)",
          animation: "blobFloat1 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(90,138,46,0.15)",
          filter: "blur(50px)",
          animation: "blobFloat2 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "15%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(23,59,42,0.5)",
          filter: "blur(40px)",
          animation: "blobFloat1 6s ease-in-out infinite reverse",
        }}
      />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="journey-animate mb-6 inline-block">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
            style={{
              background: "rgba(208,122,42,0.2)",
              border: "1px solid rgba(208,122,42,0.45)",
              color: "#F5A623",
            }}
          >
            🌟 Join 12,000+ Traders Already on Mandi
          </span>
        </div>

        {/* Headline */}
        <h2
          className="journey-animate text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            animationDelay: "0.1s",
          }}
        >
          Start Your Journey{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #F5A623, #FFD700, #D07A2A, #F5A623)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmerText 3s linear infinite",
            }}
          >
            With Us
          </span>
        </h2>

        {/* Sub-headline */}
        <p
          className="journey-animate text-gray-300 text-lg mb-8 max-w-xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          Join Pakistan's fastest-growing livestock marketplace. Buy, sell, and
          auction with confidence.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {JOURNEY_PILLS.map((pill, i) => (
            <span
              key={pill.label}
              className={`pill-${i + 1} inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white`}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span>{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="journey-animate flex flex-wrap gap-4 justify-center mb-8"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            type="button"
            onClick={() => navigate("/livestock")}
            className="font-semibold px-8 py-3 rounded-full text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #D07A2A, #F5A623)",
              boxShadow: "0 4px 20px rgba(208,122,42,0.45)",
            }}
            data-ocid="journey.primary_button"
          >
            Explore Livestock
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            className="font-semibold px-8 py-3 rounded-full text-white border-2 border-white/40 transition-all duration-200 hover:scale-105 hover:bg-white/10"
            data-ocid="journey.secondary_button"
          >
            List Your Animals
          </button>
        </div>

        {/* Trust line */}
        <p
          className="journey-animate text-gray-400 text-sm"
          style={{ animationDelay: "0.4s" }}
        >
          Free to join &nbsp;·&nbsp; No hidden fees &nbsp;·&nbsp; Verified
          community
        </p>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar dark />

      {/* ── Hero ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0F2C1F 0%, #1a4a33 50%, #173B2A 100%)",
          minHeight: 580,
        }}
        className="relative flex items-center overflow-hidden"
      >
        {/* Animated background circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 animate-float" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-[#D07A2A]/10 animate-float-delayed" />

        <div className="max-w-6xl mx-auto px-4 w-full py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Hero copy */}
            <div className="animate-fade-up">
              <span className="inline-block bg-[#D07A2A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse-slow">
                🇵🇰 Pakistan's #1 Livestock Platform
              </span>
              <h1
                className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pakistan's Premier Digital Livestock Marketplace
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Buy, sell and auction livestock online. Verified sellers,
                transparent pricing, secure transactions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="btn-orange font-semibold hover:scale-105 transition-transform"
                  data-ocid="hero.primary_button"
                >
                  Explore Livestock
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="border-2 border-white text-white rounded-full px-6 py-2.5 font-semibold hover:bg-white hover:text-[#173B2A] transition-all duration-200"
                  data-ocid="hero.secondary_button"
                >
                  List Your Animals
                </button>
              </div>
            </div>

            {/* Right: Video container */}
            <div
              className="animate-fade-up relative"
              style={{ animationDelay: "0.15s" }}
            >
              {/* Gradient border frame */}
              <div
                className="rounded-2xl p-1"
                style={{
                  background:
                    "linear-gradient(135deg, #2E7D32 0%, #D07A2A 50%, #5A8A2E 100%)",
                  boxShadow:
                    "0 0 40px rgba(208,122,42,0.3), 0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                <div className="rounded-2xl overflow-hidden aspect-video relative bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/pCFTe_EWyAA?autoplay=1&mute=1&loop=1&playlist=pCFTe_EWyAA&controls=0&rel=0"
                    title="Livestock Video"
                    allow="autoplay; encrypted-media"
                    className="w-full h-full absolute inset-0"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              {/* Floating badge: bottom-left */}
              <div
                className="absolute -bottom-3 -left-3 flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "rgba(15,44,31,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-lg">🐄</span>
                <span>Live Livestock</span>
              </div>

              {/* Floating badge: top-right */}
              <div
                className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "rgba(208,122,42,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 20px rgba(208,122,42,0.4)",
                }}
              >
                <span className="text-lg">🐐</span>
                <span>Buy &amp; Sell</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Who We Are ── */}
      <section
        id="who-we-are"
        className="relative overflow-hidden"
        style={{ background: "#F4EFE3" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Animated pastoral scene */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              <PastoralScene />
            </div>

            {/* Right: Story */}
            <div className="animate-fade-up">
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: "#D07A2A" }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#D07A2A" }}
                >
                  OUR STORY
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1F2A22] mb-2 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Who We Are
              </h2>
              {/* Animated underline */}
              <div
                className="h-1 w-20 rounded-full mb-6"
                style={{
                  background: "linear-gradient(90deg, #D07A2A, #F5A623)",
                  animation: "shimmerBar 2s ease-in-out infinite alternate",
                }}
              />

              <p className="text-[#5E6660] text-base leading-relaxed mb-4">
                Mandi is Pakistan's first fully digital livestock marketplace,
                born from a vision to transform how farmers, sellers, and buyers
                connect. We bridge the gap between rural livestock markets and
                modern digital commerce.
              </p>
              <p className="text-[#5E6660] text-base leading-relaxed mb-8">
                From cattle farms in Punjab to goat markets in Sindh, Mandi
                brings every corner of Pakistan's livestock economy onto a
                single trusted platform.
              </p>

              {/* Value badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "🇵🇰 Made for Pakistan",
                  "🤝 Community-Driven",
                  "🔒 Fully Verified",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: "#E7F4EA",
                      color: "#173B2A",
                      border: "1.5px solid #B8D9C0",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate("/auth")}
                className="btn-green hover:scale-105 transition-transform"
                data-ocid="who_we_are.primary_button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom value propositions strip */}
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

        {/* Wavy SVG divider */}
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
      </section>

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
      <div className="py-16" style={{ background: "#F4EFE3" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2A22] mb-2">
            Featured Livestock
          </h2>
          <p className="text-[#5E6660] mb-8">
            Hand-picked animals from verified sellers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_ANIMALS.map((animal, i) => (
              <div
                key={animal.id}
                className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/400/250?random=${animal.id + 10}`}
                    alt={animal.title}
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 verified-badge">
                    ✓ Verified
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1F2A22] mb-1">
                    {animal.title}
                  </h3>
                  <p className="text-xs text-[#5E6660] mb-0.5">
                    🐄 {animal.breed}
                  </p>
                  <p className="text-xs text-[#5E6660] mb-0.5">
                    📅 {animal.age} &nbsp;⚖️ {animal.weight}
                  </p>
                  <p className="text-xs text-[#5E6660] mb-3">
                    📍 {animal.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#173B2A] text-sm">
                      {animal.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => navigate("/auth")}
                      className="btn-green text-xs py-1.5 px-3 hover:scale-105 transition-transform"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
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
