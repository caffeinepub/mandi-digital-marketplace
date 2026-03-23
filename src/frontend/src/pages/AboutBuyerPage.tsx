import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const problems = [
  {
    icon: "🚗",
    title: "Wasted Journeys",
    desc: "Travelling hours to mandis only to find overpriced, unhealthy animals — or nothing suitable at all.",
  },
  {
    icon: "🎥",
    title: "Fake & Misrepresented Animals",
    desc: "Sellers hide defects, age, or health issues. You only discover the truth after paying.",
  },
  {
    icon: "💸",
    title: "Middlemen Markup",
    desc: "Dalals add 15–30% commission invisibly. The quoted price is never the real market price.",
  },
  {
    icon: "💪",
    title: "Physical Exhaustion",
    desc: "Herding, loading, transport — buying livestock is heavy manual labour with no guarantee of success.",
  },
  {
    icon: "🏥",
    title: "No Health Verification",
    desc: "No vet certificates, no health records. Sick animals spread disease to your healthy herd.",
  },
  {
    icon: "📊",
    title: "Zero Price Transparency",
    desc: "Every seller names a different price. There's no benchmark, no comparison, no fairness.",
  },
];

const features = [
  {
    icon: "✅",
    title: "Verified Listings",
    desc: "Every animal verified. Photos, videos, weight, breed, age — all confirmed by our team.",
  },
  {
    icon: "📋",
    title: "Vet Health Certificates",
    desc: "Mandatory health certificates from registered vets before any listing is approved.",
  },
  {
    icon: "⚖️",
    title: "Price Comparison",
    desc: "Browse hundreds of listings. Compare by breed, age, weight, location. Find fair market value instantly.",
  },
  {
    icon: "🔒",
    title: "Escrow Protection",
    desc: "10% booking deposit held in escrow. Pay the rest only after delivery. Your money is always protected.",
  },
  {
    icon: "🚚",
    title: "Doorstep Delivery",
    desc: "Arrange transport through our verified transporter network. Animal delivered to your address.",
  },
  {
    icon: "⭐",
    title: "Review System",
    desc: "Real buyer reviews on every seller and animal. Make decisions based on community trust.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create Your Account",
    desc: "Sign up as a Buyer in 2 minutes. Verify your identity and you're ready.",
  },
  {
    num: "02",
    title: "Browse & Filter",
    desc: "Search by breed, age, weight, price range, and city. Use advanced filters to find exactly what you need.",
  },
  {
    num: "03",
    title: "View & Compare",
    desc: "Full animal profiles: photos, videos, health cert, seller rating. Compare multiple animals side by side.",
  },
  {
    num: "04",
    title: "Message the Seller",
    desc: "Chat directly. Ask questions, request more photos, negotiate — all inside the app.",
  },
  {
    num: "05",
    title: "Book with Deposit",
    desc: "Pay 10% escrow deposit to reserve. The animal is locked for you.",
  },
  {
    num: "06",
    title: "Receive & Complete",
    desc: "Animal delivered. Inspect it. Happy? Release the remaining payment. Not happy? Raise a dispute.",
  },
];

const testimonials = [
  {
    name: "Tariq Mehmood",
    city: "Lahore, Punjab",
    quote:
      "Last Eid I used to travel to Shah Alam Mandi and waste two full days. This year I bought a perfect Sahiwal bull on Mandi in 30 minutes, delivered to my house. Koi khuwari nahi.",
    initials: "TM",
    bg: "#173B2A",
  },
  {
    name: "Amna Bibi",
    city: "Multan, Punjab",
    quote:
      "The health certificate feature gave me confidence. My previous animal from a local mandi was sick and I lost money. On Mandi platform, everything was transparent.",
    initials: "AB",
    bg: "#D07A2A",
  },
  {
    name: "Farhan Siddiqui",
    city: "Karachi, Sindh",
    quote:
      "Price comparison is the best feature. I saved PKR 40,000 on a buffalo by comparing three verified sellers. The escrow payment gave me full peace of mind.",
    initials: "FS",
    bg: "#1E3A4A",
  },
];

const BG = "linear-gradient(135deg, #0F2C1F 0%, #173B2A 60%, #1A4A34 100%)";
const ACCENT = "#D07A2A";

function SectionTag({
  text,
  color = ACCENT,
}: { text: string; color?: string }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.2em",
        color,
        textTransform: "uppercase" as const,
      }}
    >
      {text}
    </span>
  );
}

export default function AboutBuyerPage() {
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
            <SectionTag text="For Buyers" />
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
            Buy Livestock with Confidence
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            No more khuwari. No more middlemen. No more surprises. Verified
            animals, transparent prices, doorstep delivery.
          </p>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "14px 36px",
              borderRadius: 8,
              border: "none",
              background: ACCENT,
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
            data-ocid="about_buyer.hero.primary_button"
          >
            Start Buying Today →
          </button>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#F4EFE3" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <SectionTag text="The Problem" />
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              What's Broken in Traditional Mandi Buying
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

      <section style={{ padding: "60px 24px", background: "#E7F4EA" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <SectionTag text="The Solution" color="#173B2A" />
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Without Mandi vs. With Mandi
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
                ❌ Without Mandi
              </div>
              {[
                "Drive hours to mandi",
                "Pay dalal commission (15–30%)",
                "No health certificate",
                "Risk of fake/sick animals",
                "No price comparison",
                "No payment protection",
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
                ✅ With Mandi
              </div>
              {[
                "Browse from home on mobile",
                "Zero commission — direct seller price",
                "Mandatory vet health certificate",
                "Every animal verified & photographed",
                "Compare hundreds of listings",
                "Escrow payment — money 100% safe",
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
            <SectionTag text="Key Features" />
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Everything a Buyer Needs
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

      <section style={{ padding: "60px 24px", background: "#173B2A" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <SectionTag text="How It Works" color={ACCENT} />
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 800,
                color: "#fff",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              6 Steps to Your Perfect Animal
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
            <SectionTag text="Testimonials" color="#173B2A" />
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: "#1F2A22",
                marginTop: 8,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Real Buyers, Real Results
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
          Ready to Buy Smarter?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            marginBottom: 28,
          }}
        >
          Join thousands of buyers across Pakistan who never visit a mandi alone
          again.
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
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
            data-ocid="about_buyer.cta.primary_button"
          >
            Join as Buyer Today 🛒
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
            data-ocid="about_buyer.cta.secondary_button"
          >
            ← Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
