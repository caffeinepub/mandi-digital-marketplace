import { navigate } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const problems = [
  {
    icon: "🌾",
    title: "Fodder Suppliers Invisible Online",
    desc: "Tori, gandum, khal, and green fodder suppliers exist in every district but have zero digital presence. Farmers drive to them by word of mouth only.",
  },
  {
    icon: "🗺️",
    title: "Serving Only Local Area",
    desc: "Your service zone is limited to where people physically know you. Expansion beyond your neighbourhood is nearly impossible.",
  },
  {
    icon: "🐕‍🦺",
    title: "Vet Services Unknown Beyond the Street",
    desc: "Livestock vets, vaccination teams, and animal health services are in demand across the district but buyers can't find them.",
  },
  {
    icon: "🚛",
    title: "Transporters Waste Capacity",
    desc: "Livestock transporters often run half-empty or idle because there's no matching platform for supply and demand.",
  },
  {
    icon: "🛒",
    title: "No Unified Marketplace",
    desc: "Livestock-related products — feed, equipment, medicine — are scattered across physical shops with no central discovery point.",
  },
  {
    icon: "📣",
    title: "No Customer Reviews or Trust Signal",
    desc: "A quality fodder supplier has no way to demonstrate their quality or reliability to new customers across the region.",
  },
];

const serviceTypes = [
  {
    icon: "🌾",
    name: "Fodder Suppliers",
    desc: "Tori, gandum, khal, green grass, silage, hay — list your feed products with pricing and availability.",
  },
  {
    icon: "🐄",
    name: "Feed & Nutrition",
    desc: "Concentrates, mineral blocks, vitamins, supplements for cattle, goats, sheep, and buffaloes.",
  },
  {
    icon: "💉",
    name: "Veterinary Services",
    desc: "Mobile vets, vaccination teams, AI technicians — serve the whole region.",
  },
  {
    icon: "🚛",
    name: "Livestock Transport",
    desc: "Animal-friendly trucks and vehicles for local and inter-city livestock movement.",
  },
  {
    icon: "🏗️",
    name: "Farm Equipment",
    desc: "Milking machines, feeding troughs, halters, ropes, weighing scales — list your inventory.",
  },
  {
    icon: "💊",
    name: "Animal Medicine",
    desc: "Dewormers, antibiotics, supplements — reach farmers who need your products urgently.",
  },
];

const features = [
  {
    icon: "📋",
    title: "Service & Product Listings",
    desc: "Create detailed listings for your products or services with pricing, availability, and service area.",
  },
  {
    icon: "📍",
    title: "Service Area Setup",
    desc: "Define exactly which districts and cities you serve. Buyers in your area find you automatically.",
  },
  {
    icon: "⭐",
    title: "Customer Reviews",
    desc: "Build a verified review history. Quality providers rise to the top — your reputation works for you.",
  },
  {
    icon: "📅",
    title: "Booking Management",
    desc: "Accept advance bookings, manage your calendar, and get notified of new service requests.",
  },
  {
    icon: "📦",
    title: "Product Catalogue",
    desc: "List all your livestock products with photos, stock levels, and bulk pricing tiers.",
  },
  {
    icon: "💬",
    title: "Direct Customer Contact",
    desc: "Buyers message you directly. Negotiate terms, confirm orders, and handle queries all in-app.",
  },
];

const steps = [
  {
    num: "01",
    title: "Register as Service Provider",
    desc: "Sign up, select your service type (fodder, vet, transport, equipment, etc.), and set up your profile.",
  },
  {
    num: "02",
    title: "Define Your Service Area",
    desc: "Select the districts and cities you serve. Buyers in those areas will see your listing in search results.",
  },
  {
    num: "03",
    title: "Create Your Listings",
    desc: "Add your products or services with descriptions, photos, pricing, and availability.",
  },
  {
    num: "04",
    title: "Receive Inquiries",
    desc: "Farmers, buyers, and sellers in your area contact you directly through the app.",
  },
  {
    num: "05",
    title: "Fulfill & Earn Reviews",
    desc: "Deliver great service. Customers leave verified reviews that build your reputation.",
  },
  {
    num: "06",
    title: "Grow Your Business",
    desc: "Analytics show you peak demand periods, top-performing products, and geographic expansion opportunities.",
  },
];

const testimonials = [
  {
    name: "Nadeem Fodder Store",
    city: "Sahiwal, Punjab",
    quote:
      "We sell tori and khal. Before listing on Mandi, our customers were only from Sahiwal city. After listing, farmers from Okara and Pakpattan started ordering. Sales up 60% in 3 months.",
    initials: "NF",
    bg: "#173B2A",
  },
  {
    name: "Dr. Asif Livestock Vet",
    city: "Gujranwala, Punjab",
    quote:
      "Being listed as a verified vet on Mandi completely changed my mobile clinic business. I now serve 4 districts. The booking system keeps my calendar organised and clients trust me more.",
    initials: "AV",
    bg: "#A8D44F",
  },
  {
    name: "Raza Transport Services",
    city: "Multan, Punjab",
    quote:
      "Livestock transport used to be 40% idle. After Mandi listing, I get booking requests every week. Animal-safe trucks matched to the right farmers. Never had this much consistent work.",
    initials: "RT",
    bg: "#D07A2A",
  },
];

const BG = "linear-gradient(135deg, #2A2A0F 0%, #3A3A18 60%, #2E2E12 100%)";
const ACCENT = "#A8D44F";

export default function AboutServiceProviderPage() {
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
              For Service Providers
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
            The Livestock Economy Needs You
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Fodder, feed, vet services, transport, equipment — list where the
            buyers already are. Grow beyond your local area.
          </p>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "14px 36px",
              borderRadius: 8,
              border: "none",
              background: ACCENT,
              color: "#1A1F00",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
            data-ocid="about_provider.hero.primary_button"
          >
            List Your Services Today →
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
              Who This Is For
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
              Every Livestock Service Provider Welcome
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {serviceTypes.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 18px",
                  border: "1.5px solid #E2D6C3",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 28, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#1F2A22",
                      marginBottom: 4,
                      fontSize: 14,
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{ color: "#5E6660", fontSize: 13, lineHeight: 1.6 }}
                  >
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#F9F6EE" }}>
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
              Why Service Providers Stay Small
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

      <section style={{ padding: "60px 24px", background: "#EEFAEE" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 40 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#2E5E10",
                textTransform: "uppercase" as const,
              }}
            >
              The Mandi Advantage
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
                "Known only within 5km radius",
                "No digital presence or visibility",
                "New customers only by word of mouth",
                "Idle capacity in transport & services",
                "No way to accept advance bookings",
                "No review history for trust building",
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
                "Reach buyers across entire district/province",
                "Professional listing with photos & pricing",
                "Farmers find you on search — 24/7",
                "Booking system fills idle capacity",
                "Advance bookings and calendar management",
                "Verified reviews build lasting trust",
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
              Built for Every Service Provider
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

      <section style={{ padding: "60px 24px", background: "#2A2A0F" }}>
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
              Start Reaching More Customers in Days
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
              Providers Growing with Mandi
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
          Ready to Grow Your Business?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            marginBottom: 28,
          }}
        >
          Join Pakistan's largest livestock service marketplace and reach
          customers across the country.
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
              color: "#1A1F00",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
            data-ocid="about_provider.cta.primary_button"
          >
            List Your Services 🌾
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
            data-ocid="about_provider.cta.secondary_button"
          >
            ← Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
