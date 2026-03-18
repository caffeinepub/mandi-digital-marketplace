import { useEffect, useState } from "react";
import { toast } from "sonner";
import { navigate } from "../App";
import Navbar from "../components/Navbar";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { type UserRole, useUserProfile } from "../hooks/useUserProfile";

const ROLES: {
  role: UserRole;
  icon: string;
  label: string;
  desc: string;
  color: string;
  border: string;
}[] = [
  {
    role: "buyer",
    icon: "🛒",
    label: "Buyer",
    desc: "Browse & buy livestock",
    color: "#E7F4EA",
    border: "#2E7D32",
  },
  {
    role: "seller",
    icon: "🏪",
    label: "Seller",
    desc: "List & sell animals",
    color: "#FEF3E2",
    border: "#D07A2A",
  },
  {
    role: "farm",
    icon: "🌾",
    label: "Farm",
    desc: "Manage farm inventory",
    color: "#EEF4E7",
    border: "#5A8A2E",
  },
  {
    role: "admin",
    icon: "⚙️",
    label: "Admin",
    desc: "Platform management",
    color: "#F5F5F5",
    border: "#9E9E9E",
  },
];

export default function Auth() {
  const { login, isLoggingIn, isLoginSuccess } = useInternetIdentity();
  const { saveProfile } = useUserProfile();
  const [tab, setTab] = useState<"login" | "signup">("signup");
  const [selectedRoles, setSelectedRoles] = useState<UserRole[]>(["buyer"]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    region: "",
  });
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  // Redirect to home after successful login
  useEffect(() => {
    if (isLoginSuccess && hasLoggedIn) {
      navigate("/");
    }
  }, [isLoginSuccess, hasLoggedIn]);

  const toggleRole = (role: UserRole) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.length > 1
          ? prev.filter((r) => r !== role)
          : prev // keep at least one
        : [...prev, role],
    );
  };

  const handleLogin = () => {
    setHasLoggedIn(true);
    login();
    toast.info("Opening Internet Identity...");
  };

  const handleSignup = () => {
    if (selectedRoles.length === 0) {
      toast.error("Please select at least one role");
      return;
    }
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    saveProfile({
      name: form.name,
      phone: form.phone,
      city: form.city,
      region: form.region,
      roles: selectedRoles,
      activeRole: selectedRoles[0],
    });
    setHasLoggedIn(true);
    login();
    toast.info("Opening Internet Identity...");
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F4EFE3" }}
    >
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-md animate-fade-up">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3 animate-bounce-slow">🐂</div>
            <h1
              className="text-3xl font-bold text-[#1F2A22]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mandi
            </h1>
            <p className="text-[#5E6660] text-sm mt-1">
              Pakistan's Digital Livestock Marketplace
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 card-shadow">
            {/* Tab toggle */}
            <div
              className="flex rounded-xl overflow-hidden mb-6 p-1"
              style={{ background: "#F4EFE3" }}
            >
              {(["signup", "login"] as const).map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    tab === t
                      ? "bg-[#173B2A] text-white shadow-sm"
                      : "text-[#5E6660] hover:text-[#173B2A]"
                  }`}
                >
                  {t === "signup" ? "Create Account" : "Log In"}
                </button>
              ))}
            </div>

            {tab === "signup" ? (
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="auth-name"
                    className="text-sm font-medium text-[#1F2A22] block mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="auth-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Muhammad Ali"
                    className="input-field"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="auth-phone"
                    className="text-sm font-medium text-[#1F2A22] block mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <span className="border border-[#E2D6C3] rounded-xl px-3 py-2.5 text-sm bg-gray-50 text-[#5E6660] select-none">
                      +92
                    </span>
                    <input
                      id="auth-phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="300 1234567"
                      className="input-field flex-1"
                    />
                  </div>
                </div>

                {/* City + Province */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="auth-city"
                      className="text-sm font-medium text-[#1F2A22] block mb-1"
                    >
                      City
                    </label>
                    <input
                      id="auth-city"
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      placeholder="Lahore"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="auth-region"
                      className="text-sm font-medium text-[#1F2A22] block mb-1"
                    >
                      Province
                    </label>
                    <input
                      id="auth-region"
                      value={form.region}
                      onChange={(e) =>
                        setForm({ ...form, region: e.target.value })
                      }
                      placeholder="Punjab"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Multi-role selector */}
                <div>
                  <p className="text-sm font-medium text-[#1F2A22] mb-1">
                    Select Your Role(s) *
                  </p>
                  <p className="text-xs text-[#5E6660] mb-2">
                    You can be a buyer, seller, and farmer all at once.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {ROLES.map(({ role, icon, label, desc, color, border }) => {
                      const selected = selectedRoles.includes(role);
                      return (
                        <button
                          type="button"
                          key={role}
                          onClick={() => toggleRole(role)}
                          style={{
                            backgroundColor: selected ? color : "#fff",
                            border: `2px solid ${selected ? border : "#E2D6C3"}`,
                          }}
                          className="rounded-xl p-3 text-left hover:scale-[1.02] transition-all duration-200 relative"
                        >
                          {selected && (
                            <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#173B2A] text-white text-[10px] flex items-center justify-center">
                              ✓
                            </span>
                          )}
                          <div className="text-2xl mb-1">{icon}</div>
                          <div className="text-xs font-semibold text-[#1F2A22]">
                            {label}
                          </div>
                          <div className="text-xs text-[#5E6660] mt-0.5">
                            {desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSignup}
                  disabled={isLoggingIn}
                  className="w-full btn-green py-3 font-semibold text-sm hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoggingIn ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Opening Identity...
                    </span>
                  ) : (
                    "Create Account with Internet Identity"
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center py-4">
                  <div className="text-5xl mb-4">🔑</div>
                  <p className="text-[#5E6660] text-sm mb-6">
                    Sign in securely using Internet Identity. No password
                    required.
                  </p>
                  <button
                    type="button"
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    className="w-full btn-green py-3 font-semibold text-sm hover:scale-[1.02] transition-transform disabled:opacity-60"
                  >
                    {isLoggingIn ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Opening Identity...
                      </span>
                    ) : (
                      "Log In with Internet Identity"
                    )}
                  </button>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-[#5E6660] mt-4">
              By continuing, you agree to Mandi's Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
