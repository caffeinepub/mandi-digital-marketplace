import { useState } from "react";
import { toast } from "sonner";
import Navbar from "../../components/Navbar";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function FarmDashboard() {
  const { profile } = useUserProfile();
  const [docUploaded, setDocUploaded] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#F4EFE3" }}>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8 animate-fade-up">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5A8A2E] to-[#173B2A] flex items-center justify-center text-white text-xl shadow-lg">
            🌾
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2A22]">
              Farm Dashboard
            </h1>
            <p className="text-[#5E6660] text-sm">
              Welcome back{profile.name ? `, ${profile.name}` : ""}! Manage your
              farm and livestock inventory.
            </p>
          </div>
        </div>

        {/* Verification banner */}
        {!profile.isVerified && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 animate-fade-up">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏳</span>
              <div className="flex-1">
                <p className="font-semibold text-amber-800">
                  Farm Verification Required
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Upload your farm registration documents to get verified and
                  unlock all features.
                </p>
                {!docUploaded ? (
                  <button
                    type="button"
                    onClick={() => {
                      setDocUploaded(true);
                      toast.success("Document uploaded! Pending admin review.");
                    }}
                    className="mt-3 text-sm btn-orange py-2"
                  >
                    Upload Documents
                  </button>
                ) : (
                  <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                    ✓ Documents submitted — pending review
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            {
              label: "Total Animals",
              count: "0",
              icon: "🐄",
              color: "#E7F4EA",
            },
            {
              label: "Listed for Sale",
              count: "0",
              icon: "📢",
              color: "#FEF3E2",
            },
            {
              label: "Sold This Month",
              count: "0",
              icon: "✅",
              color: "#F0FFF4",
            },
          ].map(({ label, count, icon, color }, i) => (
            <div
              key={label}
              className="rounded-2xl p-5 card-shadow text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
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
              title: "Livestock Inventory",
              desc: "Track all animals on your farm with health records.",
              phase: 2,
              icon: "🐄",
            },
            {
              title: "Vet Certificates",
              desc: "Upload and manage animal health documents.",
              phase: 2,
              icon: "📊",
            },
            {
              title: "Sell Animals",
              desc: "Create listings directly from your inventory.",
              phase: 2,
              icon: "📢",
            },
            {
              title: "Farm Analytics",
              desc: "Track performance, revenue, and buyer engagement.",
              phase: 3,
              icon: "📈",
            },
          ].map(({ title, desc, phase, icon }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-5 card-shadow hover:shadow-md transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${0.25 + i * 0.07}s` }}
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
      </div>
    </div>
  );
}
