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
      className="relative overflow-hidden py-24 px-4"
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
          height: 380,
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
            className="journey-enter flex justify-center gap-8 mb-8"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex flex-col items-center">
              <span
                className="text-3xl font-extrabold"
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
            className="journey-enter text-4xl md:text-5xl font-bold mb-4 leading-tight"
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
            className="journey-enter flex flex-wrap gap-4 justify-center mb-8"
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
  const CARD_WIDTH = 320;
  const CARD_GAP = 20;
  const VISIBLE_CARDS = 4;
  const CARD_STEP = CARD_WIDTH + CARD_GAP;
  const totalCards = MOCK_ANIMALS.length;
  const maxIndex = totalCards - VISIBLE_CARDS;

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

  const viewportWidth =
    VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;
  const viewportCenter = viewportWidth / 2;

  const CONVEX_ANGLES = [16, 5, -5, -16];
  const CONVEX_Z = [-60, 20, 20, -60];
  const getCardStyle = (i: number): React.CSSProperties => {
    if (phase === "sliding") {
      const visibleOffset = i - currentIndex;
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
        height: "calc(100vh - 64px)",
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
          height: 440px;
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
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
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
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
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
              width: `${viewportWidth}px`,
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
                    style={{ height: 260, position: "relative", flexShrink: 0 }}
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
    if (isMobile) return;

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
  }, [isMobile]);

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
          height: isMobile ? "auto" : "250vh",
          background:
            "linear-gradient(135deg, #0F2C1F 0%, #1a4a33 50%, #173B2A 100%)",
        }}
      >
        <div
          ref={stickyRef}
          style={{
            position: isMobile ? "relative" : "sticky",
            top: 0,
            height: isMobile ? "auto" : "100vh",
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

          <div className="max-w-6xl mx-auto px-4 w-full py-16 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Hero copy */}
              <div className="animate-fade-up text-center">
                <span className="inline-block bg-[#D07A2A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse-slow">
                  🇵🇰 Pakistan's #1 Livestock Platform
                </span>
                <h1
                  className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
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
                <div className="flex flex-wrap gap-4 justify-center">
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
                ref={tvRef}
                className="relative"
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
                      width: 560,
                      height: 380,
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
      <FeaturedLivestockSlider />

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
