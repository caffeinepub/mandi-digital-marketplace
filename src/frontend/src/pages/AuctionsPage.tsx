import { useEffect, useState } from "react";
import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const UPCOMING_AUCTIONS = [
  {
    id: 1,
    title: "Premium Sahiwal Bull",
    breed: "Sahiwal",
    location: "Lahore, Punjab",
    startBid: "PKR 250,000",
    endsIn: "2d 14h",
    bids: 7,
  },
  {
    id: 2,
    title: "Pair of Beetal Goats",
    breed: "Beetal",
    location: "Faisalabad",
    startBid: "PKR 80,000",
    endsIn: "1d 6h",
    bids: 12,
  },
  {
    id: 3,
    title: "Holstein Dairy Cow",
    breed: "Holstein Friesian",
    location: "Gujranwala",
    startBid: "PKR 195,000",
    endsIn: "3d 2h",
    bids: 4,
  },
];

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 3, mins: 24, secs: 17 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) {
          secs = 59;
          mins--;
        }
        if (mins < 0) {
          mins = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          mins = 0;
          secs = 0;
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-3 justify-center">
      {[
        { label: "Days", val: time.days },
        { label: "Hours", val: time.hours },
        { label: "Mins", val: time.mins },
        { label: "Secs", val: time.secs },
      ].map(({ label, val }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {pad(val)}
            </div>
            <div className="text-xs text-green-300 mt-1 font-medium">
              {label}
            </div>
          </div>
          {i < 3 && (
            <span className="text-2xl text-white/60 font-bold pb-5">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AuctionsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F4EFE3" }}>
      <Navbar dark />

      {/* Hero */}
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, #0F2C1F 0%, #1a4a33 50%, #173B2A 100%)",
          minHeight: 480,
        }}
      >
        {/* Animated background blobs */}
        <div
          className="absolute top-10 left-20 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "#D07A2A",
            filter: "blur(80px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-10 right-20 w-56 h-56 rounded-full opacity-10"
          style={{
            background: "#2E7D32",
            filter: "blur(60px)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        <div className="relative z-10 animate-fade-up">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
            style={{
              background: "rgba(208,122,42,0.25)",
              border: "1px solid rgba(208,122,42,0.5)",
              color: "#F5A623",
            }}
          >
            🔨 Live Auctions
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Live Auctions
            <br />
            <span style={{ color: "#F5A623" }}>Coming Soon</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Real-time 24-hour livestock auctions with transparent bidding,
            escrow protection, and verified sellers.
          </p>

          <div className="mb-10">
            <p className="text-green-300 text-sm mb-4 font-medium">
              Next Auction Batch Launches In
            </p>
            <Countdown />
          </div>

          <button
            type="button"
            onClick={() => navigate("/auth")}
            className="btn-orange font-semibold hover:scale-105 transition-transform"
            data-ocid="auctions.primary_button"
          >
            Notify Me When Live
          </button>
        </div>
      </div>

      {/* Upcoming Auctions Preview */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold text-[#1F2A22] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Upcoming Auctions
        </h2>
        <p className="text-[#5E6660] mb-8">
          Preview animals coming up for auction. Register now to start bidding.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {UPCOMING_AUCTIONS.map((item, i) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
              data-ocid={`auctions.item.${i + 1}`}
            >
              <div
                className="h-40 relative"
                style={{
                  background: `linear-gradient(135deg, #173B2A ${i * 20}%, #2E7D32)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                  {i === 0 ? "🐂" : i === 1 ? "🐐" : "🐄"}
                </div>
                <span
                  className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: "#D07A2A", color: "white" }}
                >
                  {item.bids} bids
                </span>
                <div
                  className="absolute bottom-3 left-3 text-xs font-semibold px-2 py-1 rounded-full text-white"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  ⏱ Ends in {item.endsIn}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#1F2A22] mb-1">{item.title}</h3>
                <p className="text-xs text-[#5E6660] mb-0.5">🐄 {item.breed}</p>
                <p className="text-xs text-[#5E6660] mb-3">
                  📍 {item.location}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#9E9E9E]">Starting Bid</p>
                    <p className="font-bold text-[#173B2A] text-sm">
                      {item.startBid}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate("/auth")}
                    className="btn-green text-xs py-1.5 px-3 hover:scale-105 transition-transform"
                    data-ocid={`auctions.edit_button.${i + 1}`}
                  >
                    Bid Now
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
