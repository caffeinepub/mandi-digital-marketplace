import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const problems = [
  {
    icon: "🚛",
    title: "Crushing Transport Costs",
    desc: "Hiring trucks to bring animals to mandi can cost PKR 5,000–20,000 each way. Before you sell a single animal, you're already in debt.",
  },
  {
    icon: "🤝",
    title: "Dalal Commission",
    desc: "Dalals and brokers take 5–15% off every sale. They control access to buyers and you have no choice but to accept.",
  },
  {
    icon: "⏱️",
    title: "Time Pressure & Forced Deals",
    desc: "Animals need to eat, drink, and be cared for. Every day unsold costs money. You're forced to accept bad offers.",
  },
  {
    icon: "🗺️",
    title: "Limited to Local Area",
    desc: "Your buyers are only from your district. A buyer in Karachi would pay 40% more for your Punjabi bull — but you can never reach them.",
  },
  {
    icon: "📉",
    title: "No Reputation System",
    desc: "Years of honest selling, perfect animals — and still strangers negotiate as if you're untrustworthy. No verifiable reputation.",
  },
  {
    icon: "🌧️",
    title: "Seasonal & Weather Risks",
    desc: "Rain, heat, holidays — mandi attendance drops and you're stuck. No way to sell remotely when the mandi is empty.",
  },
];

const features = [
  {
    icon: "📱",
    title: "Free Listing from Home",
    desc: "List your animals in minutes with photos, videos, and details. No travel, no setup cost.",
  },
  {
    icon: "🌍",
    title: "Nationwide Reach",
    desc: "Your listing is visible to buyers across all provinces. Lahore sellers can reach Karachi buyers instantly.",
  },
  {
    icon: "💬",
    title: "Direct Buyer Contact",
    desc: "Buyers message you directly. No dalal in between. You negotiate your price yourself.",
  },
  {
    icon: "🔒",
    title: "Escrow Payment Security",
    desc: "Buyer deposits 10% upfront to reserve. You receive full payment on delivery. Zero payment risk.",
  },
  {
    icon: "📊",
    title: "Seller Analytics",
    desc: "See how many people viewed your listing, where they're from, and what price range is converting.",
  },
  {
    icon: "⭐",
    title: "Build Your Reputation",
    desc: "Verified seller badge, star ratings, review history. Honest sellers command premium prices.",
  },
];

const steps = [
  {
    num: "01",
    title: "Register as Seller",
    desc: "Create your account, verify your phone, complete your seller profile in under 5 minutes.",
  },
  {
    num: "02",
    title: "Create Animal Listing",
    desc: "Add photos, videos, breed, age, weight, health status, and asking price. Our team verifies within 24 hours.",
  },
  {
    num: "03",
    title: "Receive Buyer Inquiries",
    desc: "Buyers across Pakistan see your listing and message you directly in-app. No intermediaries.",
  },
  {
    num: "04",
    title: "Negotiate & Confirm",
    desc: "Agree on price with buyer. They pay 10% escrow deposit to confirm the booking.",
  },
  {
    num: "05",
    title: "Arrange Delivery",
    desc: "Use our partner transporters or your own. Animal delivered directly to buyer's location.",
  },
  {
    num: "06",
    title: "Receive Full Payment",
    desc: "Once buyer confirms delivery, escrow releases full payment to your account. Instant and secure.",
  },
];

const testimonials = [
  {
    name: "Riaz Ahmed",
    city: "Faisalabad, Punjab",
    quote:
      "Pehle mujhe mandi mein jaana padta tha. 15,000 truck kharch, dalal ka commission, aur agar bikka nahi toh double loss. Ab ghar baith ke list karta hoon, Punjab se Karachi tak buyers aate hain.",
    initials: "RA",
    bg: "#173B2A",
  },
  {
    name: "Ghulam Nabi",
    city: "Bahawalpur, Punjab",
    quote:
      "My verified seller badge has changed everything. Buyers trust me without even asking questions. I sold 8 animals last season at prices 20% higher than mandi rates.",
    initials: "GN",
    bg: "#D07A2A",
  },
  {
    name: "Saima Khurshid",
    city: "Hyderabad, Sindh",
    quote:
      "As a woman seller, going to the mandi was impossible. Mandi platform gave me a way to sell my goats directly to buyers. I handle everything from home.",
    initials: "SK",
    bg: "#1E3A4A",
  },
];

const BG = "linear-gradient(135deg, #2A1A0F 0%, #3A2516 60%, #2E1F10 100%)";
const ACCENT = "#E8A838";

export default function AboutSellerPage() {
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
              For Sellers
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
            Sell More. Earn More. Stress Less.
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            No dalals. No transport costs. No local limits. List from home,
            reach buyers across Pakistan.
          </p>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "14px 36px",
              borderRadius: 8,
              border: "none",
              background: ACCENT,
              color: "#1F1000",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
            data-ocid="about_seller.hero.primary_button"
          >
            Start Selling Today →
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
              The Mandi System Is Rigged Against Sellers
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

      <section style={{ padding: "60px 24px", background: "#FFF8EE" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
              The Difference
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
              Traditional Mandi vs. Mandi Platform
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
                ❌ Traditional Mandi
              </div>
              {[
                "Pay PKR 5–20K transport per trip",
                "Dalal takes 5–15% commission",
                "Only local buyers see your animals",
                "Forced to sell at any price after days",
                "No written record of past deals",
                "No way to build or prove reputation",
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
                ✅ Mandi Platform
              </div>
              {[
                "Zero transport cost to list",
                "Zero commission — keep 100% of your price",
                "Nationwide visibility across all provinces",
                "Animals stay listed until sold — no pressure",
                "Full transaction history and analytics",
                "Verified seller badge earns buyer trust",
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
              Everything a Seller Needs
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

      <section style={{ padding: "60px 24px", background: "#2A1A0F" }}>
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
              6 Steps from Listing to Payment
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
              Sellers Who Switched to Mandi
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
          Ready to Sell Smarter?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            marginBottom: 28,
          }}
        >
          Join thousands of sellers across Pakistan already earning more with
          less effort.
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
              color: "#1F1000",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
            data-ocid="about_seller.cta.primary_button"
          >
            Join as Seller Today 💰
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
            data-ocid="about_seller.cta.secondary_button"
          >
            ← Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
