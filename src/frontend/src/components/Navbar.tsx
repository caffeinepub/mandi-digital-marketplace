import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type AppPage, navigate } from "../App";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  ROLE_META,
  type UserRole,
  useUserProfile,
} from "../hooks/useUserProfile";

const ABOUT_LINKS: { label: string; path: AppPage }[] = [
  { label: "Buyer", path: "/about/buyer" },
  { label: "Seller", path: "/about/seller" },
  { label: "Cattle Farmer", path: "/about/cattle-farmer" },
  { label: "Service Provider", path: "/about/service-provider" },
];

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const { identity, clear } = useInternetIdentity();
  const { profile, switchRole, clearProfile } = useUserProfile();
  const isAuthenticated =
    identity !== undefined && !identity.getPrincipal().isAnonymous();
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleDropOpen, setRoleDropOpen] = useState(false);
  const [aboutDropOpen, setAboutDropOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const roleDropRef = useRef<HTMLDivElement>(null);
  const aboutDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        roleDropRef.current &&
        !roleDropRef.current.contains(e.target as Node)
      ) {
        setRoleDropOpen(false);
      }
      if (
        aboutDropRef.current &&
        !aboutDropRef.current.contains(e.target as Node)
      ) {
        setAboutDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    clear();
    clearProfile();
    navigate("/");
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    setMenuOpen(false);
  };

  const bg = dark
    ? "bg-[#0F2C1F]/95 backdrop-blur-sm"
    : "bg-white/95 backdrop-blur-sm border-b border-[#E2D6C3]";
  const textColor = dark ? "text-white" : "text-[#1F2A22]";
  const navLinkBase = dark
    ? "text-gray-200 hover:text-white hover:bg-white/10"
    : "text-[#5E6660] hover:text-[#173B2A] hover:bg-[#F4EFE3]";

  const activeRole = profile.activeRole as UserRole;
  const activeMeta = ROLE_META[activeRole];

  return (
    <nav className={`${bg} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className={`flex items-center gap-2 font-bold text-xl ${textColor} hover:opacity-80 transition-opacity`}
        >
          <span className="text-2xl animate-pulse-slow">🐂</span>
          <span style={{ fontFamily: "'Playfair Display', serif" }}>Mandi</span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <button
            type="button"
            onClick={() => navigate("/")}
            className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${navLinkBase}`}
            data-ocid="nav.home_link"
          >
            Home
          </button>

          {/* About Us with dropdown */}
          <div className="relative" ref={aboutDropRef}>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => scrollToSection("who-we-are")}
                className={`text-sm font-medium px-3 py-2 rounded-l-lg transition-all ${navLinkBase}`}
                data-ocid="nav.about_link"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => setAboutDropOpen(!aboutDropOpen)}
                className={`text-sm font-medium px-1.5 py-2 rounded-r-lg transition-all ${navLinkBase}`}
                aria-label="About dropdown"
                data-ocid="nav.about_dropdown"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${aboutDropOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {aboutDropOpen && (
              <div className="absolute left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-[#E2D6C3] overflow-hidden z-50">
                <div className="px-3 py-2 border-b border-[#E2D6C3]">
                  <p className="text-xs text-[#9E9E9E] font-medium">
                    EXPLORE BY ROLE
                  </p>
                </div>
                {ABOUT_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setAboutDropOpen(false);
                    }}
                    className="w-full flex items-center px-3 py-2.5 text-sm text-[#5E6660] hover:bg-[#F4EFE3] hover:text-[#173B2A] transition-colors"
                    data-ocid={`nav.about_${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigate("/livestock")}
            className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${navLinkBase}`}
            data-ocid="nav.livestock_link"
          >
            Livestock
          </button>
          <button
            type="button"
            onClick={() => navigate("/auctions")}
            className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${navLinkBase}`}
            data-ocid="nav.auctions_link"
          >
            Auctions
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${navLinkBase}`}
            data-ocid="nav.contact_link"
          >
            Contact
          </button>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <>
              {profile.roles.length > 0 && (
                <div className="relative" ref={roleDropRef}>
                  <button
                    type="button"
                    onClick={() => setRoleDropOpen(!roleDropOpen)}
                    className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                      dark
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-[#F4EFE3] text-[#173B2A] hover:bg-[#E2D6C3]"
                    }`}
                  >
                    <span>{activeMeta.icon}</span>
                    <span>{activeMeta.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${roleDropOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {roleDropOpen && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-[#E2D6C3] overflow-hidden animate-dropdown">
                      <div className="px-3 py-2 border-b border-[#E2D6C3]">
                        <p className="text-xs text-[#9E9E9E] font-medium">
                          SWITCH ROLE
                        </p>
                      </div>
                      {profile.roles.map((role) => {
                        const meta = ROLE_META[role as UserRole];
                        return (
                          <button
                            type="button"
                            key={role}
                            onClick={() => {
                              switchRole(role as UserRole);
                              navigate(meta.dashPath as AppPage);
                              setRoleDropOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm transition-colors hover:bg-[#F4EFE3] ${
                              role === activeRole
                                ? "text-[#173B2A] font-semibold bg-[#F4EFE3]"
                                : "text-[#5E6660]"
                            }`}
                          >
                            <span>{meta.icon}</span>
                            <span>{meta.label}</span>
                            {role === activeRole && (
                              <span className="ml-auto text-[#173B2A] text-xs">
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      })}
                      <div className="border-t border-[#E2D6C3]">
                        <button
                          type="button"
                          onClick={() => {
                            navigate(activeMeta.dashPath as AppPage);
                            setRoleDropOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-[#173B2A] hover:bg-[#F4EFE3] transition-colors"
                        >
                          <LayoutDashboard size={14} />
                          <span>My Dashboard</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  dark
                    ? "text-gray-200 hover:text-white hover:bg-white/10"
                    : "text-[#173B2A] hover:bg-[#F4EFE3]"
                }`}
              >
                <User size={15} />
                <span>{profile.name || "Profile"}</span>
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-all"
              >
                <LogOut size={15} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => navigate("/auth")}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                  dark
                    ? "border-white/40 text-white hover:bg-white/10"
                    : "border-[#173B2A] text-[#173B2A] hover:bg-[#F4EFE3]"
                }`}
                data-ocid="nav.login_button"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => navigate("/auth")}
                className="btn-green text-sm hover:scale-105 transition-transform"
                data-ocid="nav.signup_button"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className={`md:hidden p-2 rounded-lg transition-colors ${
            dark
              ? "text-white hover:bg-white/10"
              : "text-[#1F2A22] hover:bg-[#F4EFE3]"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        } ${dark ? "bg-[#0F2C1F]" : "bg-white"} border-t border-[#E2D6C3]`}
      >
        <div className="px-4 py-4 space-y-2">
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className={`w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
              dark
                ? "text-gray-200 hover:bg-white/10"
                : "text-[#5E6660] hover:bg-[#F4EFE3]"
            }`}
            data-ocid="nav.mobile_home_link"
          >
            Home
          </button>

          {/* Mobile About Us expandable */}
          <div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => scrollToSection("who-we-are")}
                className={`flex-1 text-left text-sm font-medium px-3 py-2.5 rounded-l-lg transition-colors ${
                  dark
                    ? "text-gray-200 hover:bg-white/10"
                    : "text-[#5E6660] hover:bg-[#F4EFE3]"
                }`}
                data-ocid="nav.mobile_about_link"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`px-3 py-2.5 rounded-r-lg transition-colors ${
                  dark
                    ? "text-gray-200 hover:bg-white/10"
                    : "text-[#5E6660] hover:bg-[#F4EFE3]"
                }`}
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {mobileAboutOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {ABOUT_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      dark
                        ? "text-gray-300 hover:bg-white/10"
                        : "text-[#173B2A] hover:bg-[#E7F4EA]"
                    }`}
                    data-ocid={`nav.mobile_about_${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                  >
                    → {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              navigate("/livestock");
              setMenuOpen(false);
            }}
            className={`w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
              dark
                ? "text-gray-200 hover:bg-white/10"
                : "text-[#5E6660] hover:bg-[#F4EFE3]"
            }`}
            data-ocid="nav.mobile_livestock_link"
          >
            Livestock
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/auctions");
              setMenuOpen(false);
            }}
            className={`w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
              dark
                ? "text-gray-200 hover:bg-white/10"
                : "text-[#5E6660] hover:bg-[#F4EFE3]"
            }`}
            data-ocid="nav.mobile_auctions_link"
          >
            Auctions
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={`w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
              dark
                ? "text-gray-200 hover:bg-white/10"
                : "text-[#5E6660] hover:bg-[#F4EFE3]"
            }`}
            data-ocid="nav.mobile_contact_link"
          >
            Contact
          </button>

          {isAuthenticated ? (
            <>
              <div
                className={`text-xs font-semibold px-3 pt-2 pb-1 ${dark ? "text-gray-400" : "text-[#9E9E9E]"}`}
              >
                MY ROLES
              </div>
              {profile.roles.map((role) => {
                const meta = ROLE_META[role as UserRole];
                return (
                  <button
                    type="button"
                    key={role}
                    onClick={() => {
                      switchRole(role as UserRole);
                      navigate(meta.dashPath as AppPage);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                      role === activeRole
                        ? dark
                          ? "bg-white/20 text-white"
                          : "bg-[#E7F4EA] text-[#173B2A]"
                        : dark
                          ? "text-gray-200 hover:bg-white/10"
                          : "text-[#5E6660] hover:bg-[#F4EFE3]"
                    }`}
                  >
                    <span>{meta.icon}</span>
                    <span>{meta.label} Dashboard</span>
                    {role === activeRole && <span className="ml-auto">✓</span>}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-2 text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                  dark
                    ? "text-gray-200 hover:bg-white/10"
                    : "text-[#5E6660] hover:bg-[#F4EFE3]"
                }`}
              >
                <User size={15} />
                <span>My Profile</span>
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-2 text-sm font-medium px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={15} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  navigate("/auth");
                  setMenuOpen(false);
                }}
                className="flex-1 text-sm font-medium py-2.5 rounded-full border border-[#173B2A] text-[#173B2A] hover:bg-[#F4EFE3] transition-all"
                data-ocid="nav.mobile_login_button"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/auth");
                  setMenuOpen(false);
                }}
                className="flex-1 btn-green text-sm"
                data-ocid="nav.mobile_signup_button"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
