import { useState } from "react";
import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CATEGORIES = [
  { icon: "🐂", label: "Cattle", count: "18,400+" },
  { icon: "🐐", label: "Goats", count: "12,200+" },
  { icon: "🐑", label: "Sheep", count: "8,100+" },
  { icon: "🐃", label: "Buffalo", count: "6,300+" },
  { icon: "🐪", label: "Camel", count: "1,200+" },
  { icon: "🐓", label: "Poultry", count: "9,800+" },
];

const FEATURED = [
  {
    id: 1,
    title: "Sahiwal Bull",
    breed: "Sahiwal",
    age: "3 yrs",
    weight: "490 kg",
    loc: "Lahore",
    price: "PKR 210,000",
    emoji: "🐂",
  },
  {
    id: 2,
    title: "Beetal Goat Pair",
    breed: "Beetal",
    age: "2 yrs",
    weight: "62 kg",
    loc: "Multan",
    price: "PKR 75,000",
    emoji: "🐐",
  },
  {
    id: 3,
    title: "Nili Ravi Buffalo",
    breed: "Nili-Ravi",
    age: "4 yrs",
    weight: "580 kg",
    loc: "Faisalabad",
    price: "PKR 320,000",
    emoji: "🐃",
  },
  {
    id: 4,
    title: "Kajli Sheep",
    breed: "Kajli",
    age: "1.5 yrs",
    weight: "48 kg",
    loc: "Bahawalpur",
    price: "PKR 28,000",
    emoji: "🐑",
  },
];

export default function LivestockPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen" style={{ background: "#F4EFE3" }}>
      <Navbar dark />

      {/* Hero */}
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0F2C1F 0%, #1a4a33 50%, #173B2A 100%)",
          minHeight: 400,
        }}
      >
        <div
          className="absolute top-10 left-16 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "#D07A2A",
            filter: "blur(70px)",
            animation: "float 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-5 right-16 w-48 h-48 rounded-full opacity-10"
          style={{
            background: "#5A8A2E",
            filter: "blur(50px)",
            animation: "float 5s ease-in-out infinite reverse",
          }}
        />

        <div className="relative z-10 animate-fade-up">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
            style={{
              background: "rgba(90,138,46,0.3)",
              border: "1px solid rgba(90,138,46,0.6)",
              color: "#A8D55A",
            }}
          >
            🐄 Livestock Marketplace
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Browse Livestock
            <br />
            <span style={{ color: "#A8D55A" }}>Coming Soon</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Pakistan's largest verified livestock marketplace. Search thousands
            of animals from verified farms and sellers across all provinces.
          </p>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            className="btn-orange font-semibold hover:scale-105 transition-transform"
            data-ocid="livestock.primary_button"
          >
            Get Early Access
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold text-[#1F2A22] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Browse by Category
        </h2>
        <p className="text-[#5E6660] mb-6">
          50,000+ animals across all categories
        </p>
        <div className="flex flex-wrap gap-3 mb-2">
          {["All", ...CATEGORIES.map((c) => c.label)].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{
                background: activeCategory === cat ? "#173B2A" : "white",
                color: activeCategory === cat ? "white" : "#5E6660",
                border: "1.5px solid",
                borderColor: activeCategory === cat ? "#173B2A" : "#E2D6C3",
              }}
              data-ocid="livestock.tab"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className="bg-white rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
              data-ocid={`livestock.item.${i + 1}`}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="font-bold text-[#1F2A22] text-sm">
                {cat.label}
              </div>
              <div className="text-xs text-[#5E6660]">{cat.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Listings Preview */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2
          className="text-2xl font-bold text-[#1F2A22] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featured Listings Preview
        </h2>
        <p className="text-[#5E6660] mb-6">
          Hand-picked animals from verified sellers — full listings go live
          soon.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED.map((item, i) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
              data-ocid={`livestock.item.${i + 1}`}
            >
              <div
                className="h-36 flex items-center justify-center text-7xl"
                style={{
                  background: "linear-gradient(135deg, #E7F4EA, #B8D9C0)",
                }}
              >
                {item.emoji}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#1F2A22] mb-1">{item.title}</h3>
                <p className="text-xs text-[#5E6660] mb-0.5">🐄 {item.breed}</p>
                <p className="text-xs text-[#5E6660] mb-0.5">
                  📅 {item.age} · ⚖️ {item.weight}
                </p>
                <p className="text-xs text-[#5E6660] mb-3">📍 {item.loc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#173B2A] text-sm">
                    {item.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate("/auth")}
                    className="btn-green text-xs py-1.5 px-3 hover:scale-105 transition-transform"
                    data-ocid={`livestock.edit_button.${i + 1}`}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
