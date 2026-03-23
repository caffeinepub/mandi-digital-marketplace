import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const problems = [
  {
    icon: "👥",
    title: "Limited Customer Niche",
    desc: "You're known only in your taluka. The buyer in another province willing to pay premium for your Sahiwal breed will never find you.",
  },
  {
    icon: "🐄",
    title: "Managing Multiple Breeds is Chaos",
    desc: "Multiple cattle, different breeds, varying availability — tracking it all manually and communicating it to buyers is overwhelming.",
  },
  {
    icon: "📢",
    title: "No Platform for Herd Showcase",
    desc: "You've built a premium farm but buyers see only what's at the mandi that day. Your farm's history, quality, and reputation is invisible.",
  },
  {
    icon: "🏢",
    title: "Competing With Informal Sellers",
    desc: "Large informal traders with no certification or quality standards undercut your prices and confuse buyers about who is trustworthy.",
  },
  {
    icon: "🔄",
    title: "No Customer Update System",
    desc: "Previous buyers want to know when new animals are available. Without a notification system, loyal customers drift to whoever they see first.",
  },
  {
    icon: "📈",
    title: "Seasonal Demand Spikes Mismanaged",
    desc: "Eid, Qurbani season — demand spikes but you have no advance booking or pre-reservation system. You scramble and under-price.",
  },
];

const features = [
  {
    icon: "🏡",
    title: "Dedicated Farm Profile",
    desc: "Your own branded farm page: name, location, established year, specializations, and full photo gallery.",
  },
  {
    icon: "📸",
    title: "Herd Showcase",
    desc: "List your full herd with individual profiles per animal. Buyers browse your entire catalogue from anywhere.",
  },
  {
    icon: "📋",
    title: "Breeding Records",
    desc: "Document parentage, breeding dates, and lineage for premium breeds. Proves quality to serious buyers.",
  },
  {
    icon: "✅",
    title: "Verified Farm Badge",
    desc: "Pass our farm verification process and earn the Verified Farm badge. Commands 20–35% premium pricing.",
  },
  {
    icon: "🔔",
    title: "Buyer Notification System",
    desc: "Previous buyers automatically notified when you add new animals. Build a loyal customer base.",
  },
  {
    icon: "💡",
    title: "Seasonal Pricing & Pre-Booking",
    desc: "Set pre-Eid booking windows, reserve animals in advance, and manage Qurbani hissa allocations efficiently.",
  },
];

const steps = [
  {
    num: "01",
    title: "Register Your Farm",
    desc: "Create your farm profile with details, location, and photos. Submit for verification.",
  },
  {
    num: "02",
    title: "Get Verified",
    desc: "Our team reviews your farm documentation. Receive your Verified Farm badge within 7 days.",
  },
  {
    num: "03",
    title: "List Your Herd",
    desc: "Add each animal with breed, age, weight, feeding record, and health certificate. Bulk upload supported.",
  },
  {
    num: "04",
    title: "Manage Inquiries",
    desc: "Receive and respond to buyer inquiries. Negotiate directly. Accept bookings with 10% deposit.",
  },
  {
    num: "05",
    title: "Fulfill Orders",
    desc: "Use our transporter network or your own for delivery. Generate digital sale records.",
  },
  {
    num: "06",
    title: "Build Repeat Business",
    desc: "Buyers who loved your animals come back. Use analytics to understand your best-selling breeds and seasons.",
  },
];

const testimonials = [
  {
    name: "Malik Farooq",
    city: "Okara, Punjab",
    quote:
      "We have 200+ Sahiwal cattle. Before Mandi platform, I could sell 40 a year locally. This year, my farm profile brought buyers from Karachi, Hyderabad, even AJK. Sales are 3x. The verified badge is gold.",
    initials: "MF",
    bg: "#173B2A",
  },
  {
    name: "Haji Bashir",
    city: "Dera Ghazi Khan, Punjab",
    quote:
      "The pre-booking for Qurbani season changed my business completely. 40 animals pre-booked 3 months in advance. No rush, no stress, predictable income.",
    initials: "HB",
    bg: "#4FC3F7",
  },
  {
    name: "Zulfiqar Raza",
    city: "Larkana, Sindh",
    quote:
      "My Larkana buffalo farm now has customers in Lahore. That was impossible before. The buyer notification system is perfect — whenever I list new buffaloes, 50+ saved buyers are notified instantly.",
    initials: "ZR",
    bg: "#D07A2A",
  },
];

const BG = "linear-gradient(135deg, #172B38 0%, #1E3A4A 60%, #163040 100%)";
const ACCENT = "#4FC3F7";

export default function AboutCattleFarmerPage() {
  return (
    <div style={{ background: "#F4EFE3", minHeight: "100vh" }}>
      <Navbar dark={false} />

      <section
        style={{
          background: BG,
          padding: "80px 24px 60px",
          textAlign: "center" as const,
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: `${ACCENT}22`,
              border: `1px solid ${ACCENT}44`,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: ACCENT,
                textTransform: "uppercase" as const,
              }}
            >
              For Cattle Farmers
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 60px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.15,
            }}
          >
            Your Farm, Pakistan's Market
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            A verified farm profile, nationwide buyer reach, and intelligent
            herd management. Built for serious cattle farmers.
          </p>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "14px 36px",
              borderRadius: 8,
              border: "none",
              background: ACCENT,
              color: "#0F1F28",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
            data-ocid="about_farmer.hero.primary_button"
          >
            Register Your Farm →
          </button>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#F4EFE3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#D07A2A",
                textTransform: "uppercase" as const,
              }}
            >
              The Problem
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Why Cattle Farms Stay Small
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {problems.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px 20px",
                  border: "1.5px solid #E2D6C3",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 28, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#1F2A22",
                      marginBottom: 4,
                      fontSize: 15,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{ color: "#5E6660", fontSize: 13, lineHeight: 1.6 }}
                  >
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#EEF6F9" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#1E3A4A",
                textTransform: "uppercase" as const,
              }}
            >
              The Mandi Difference
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Small Farm vs. Mandi-Powered Farm
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "#fff3f3",
                borderRadius: 12,
                padding: 24,
                border: "2px solid #ffcdd2",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: "#c62828",
                  marginBottom: 16,
                  fontSize: 16,
                }}
              >
                ❌ Before Mandi
              </div>
              {[
                "Known only within 50km radius",
                "No way to showcase herd quality",
                "Lost loyal customers between seasons",
                "Undercut by informal traders",
                "Pre-Eid chaos and under-pricing",
                "No breeding records visible to buyers",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    color: "#5E6660",
                    fontSize: 13,
                    marginBottom: 8,
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#ef5350", flexShrink: 0 }}>✗</span>
                  {t}
                </div>
              ))}
            </div>
            <div
              style={{
                background: "#f1f8e9",
                borderRadius: 12,
                padding: 24,
                border: "2px solid #aed581",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: "#2e7d32",
                  marginBottom: 16,
                  fontSize: 16,
                }}
              >
                ✅ With Mandi Platform
              </div>
              {[
                "Nationwide visibility, cross-province buyers",
                "Full farm profile with herd gallery",
                "Buyer notification on new listings",
                "Verified badge differentiates you clearly",
                "Advance Qurbani pre-booking system",
                "Breeding records visible to serious buyers",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    color: "#5E6660",
                    fontSize: 13,
                    marginBottom: 8,
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#43a047", flexShrink: 0 }}>✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#F4EFE3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#D07A2A",
                textTransform: "uppercase" as const,
              }}
            >
              Key Features
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Tools Built for Cattle Farmers
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 24,
                  border: "1.5px solid #E2D6C3",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#1F2A22",
                    marginBottom: 6,
                    fontSize: 15,
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{ color: "#5E6660", fontSize: 13, lineHeight: 1.6 }}
                >
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#172B38" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: ACCENT,
                textTransform: "uppercase" as const,
              }}
            >
              How It Works
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                color: "#fff",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              From Farm Registration to Full Market Access
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {steps.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: ACCENT,
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {s.num}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 4,
                      fontSize: 14,
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#F4EFE3" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#173B2A",
                textTransform: "uppercase" as const,
              }}
            >
              Testimonials
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Farmers Who Scaled with Mandi
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 24,
                  border: "1.5px solid #E2D6C3",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: t.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#1F2A22",
                        fontSize: 14,
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ color: "#9E9E9E", fontSize: 12 }}>
                      {t.city}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    color: "#5E6660",
                    fontSize: 13,
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "60px 24px",
          background: BG,
          textAlign: "center" as const,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 12,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Ready to Scale Your Farm?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            marginBottom: 28,
          }}
        >
          Join Pakistan's fastest-growing network of verified cattle farms.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "14px 36px",
              borderRadius: 8,
              border: "none",
              background: ACCENT,
              color: "#0F1F28",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
            data-ocid="about_farmer.cta.primary_button"
          >
            Register Your Farm 🐄
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              padding: "14px 36px",
              borderRadius: 8,
              border: "2px solid rgba(255,255,255,0.3)",
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
            }}
            data-ocid="about_farmer.cta.secondary_button"
          >
            ← Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
