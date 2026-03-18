import { navigate } from "../../App";
import Navbar from "../../components/Navbar";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function BuyerDashboard() {
  const { profile } = useUserProfile();
  return (
    <div className="min-h-screen" style={{ background: "#F4EFE3" }}>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8 animate-fade-up">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#173B2A] flex items-center justify-center text-white text-xl shadow-lg">
            🛒
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2A22]">
              Buyer Dashboard
            </h1>
            <p className="text-[#5E6660] text-sm">
              Welcome back{profile.name ? `, ${profile.name}` : ""}! Browse
              livestock and manage your purchases.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            {
              label: "Saved Listings",
              count: "0",
              icon: "❤️",
              color: "#E7F4EA",
            },
            { label: "My Bookings", count: "0", icon: "📋", color: "#FEF3E2" },
            {
              label: "Unread Messages",
              count: "0",
              icon: "💬",
              color: "#F0F4FF",
            },
          ].map(({ label, count, icon, color }, i) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 card-shadow text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s`, backgroundColor: color }}
            >
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-2xl font-bold text-[#173B2A]">{count}</div>
              <div className="text-sm text-[#5E6660]">{label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-6">
          {[
            {
              title: "Browse Livestock",
              desc: "Search and filter animals from verified sellers.",
              phase: 2,
              icon: "🔍",
            },
            {
              title: "Saved Listings",
              desc: "Animals you've bookmarked for later.",
              phase: 2,
              icon: "❤️",
            },
            {
              title: "My Bookings",
              desc: "Track your active bookings and payments.",
              phase: 2,
              icon: "📋",
            },
            {
              title: "Messages",
              desc: "Chat with sellers about animals.",
              phase: 2,
              icon: "💬",
            },
          ].map(({ title, desc, phase, icon }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-5 card-shadow hover:shadow-md transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.07}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <h3 className="font-bold text-[#1F2A22]">{title}</h3>
                    <p className="text-sm text-[#5E6660] mt-0.5">{desc}</p>
                  </div>
                </div>
                <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                  Phase {phase}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn-green text-sm hover:scale-105 transition-transform"
        >
          Browse Livestock
        </button>
      </div>
    </div>
  );
}
