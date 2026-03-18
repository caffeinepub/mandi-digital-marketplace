import { useState } from "react";
import { toast } from "sonner";
import { type AppPage, navigate } from "../App";
import Navbar from "../components/Navbar";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  ROLE_META,
  type UserRole,
  useUserProfile,
} from "../hooks/useUserProfile";

const ALL_ROLES: UserRole[] = ["buyer", "seller", "farm", "admin"];

export default function Profile() {
  const { identity } = useInternetIdentity();
  const { profile, saveProfile, switchRole } = useUserProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: profile.name || "Muhammad Ali",
    phone: profile.phone || "+92 300 1234567",
    city: profile.city || "Lahore",
    region: profile.region || "Punjab",
  });
  const [editRoles, setEditRoles] = useState<UserRole[]>(profile.roles);

  const principal = identity?.getPrincipal().toText() ?? "";

  const toggleEditRole = (role: UserRole) => {
    setEditRoles((prev) =>
      prev.includes(role)
        ? prev.length > 1
          ? prev.filter((r) => r !== role)
          : prev
        : [...prev, role],
    );
  };

  const handleSave = () => {
    const newActiveRole = editRoles.includes(profile.activeRole)
      ? profile.activeRole
      : editRoles[0];
    saveProfile({
      name: form.name,
      phone: form.phone,
      city: form.city,
      region: form.region,
      roles: editRoles,
      activeRole: newActiveRole,
    });
    toast.success("Profile saved!");
    setIsEditing(false);
  };

  const displayName = profile.name || form.name || "User";
  const activeRole = profile.activeRole as UserRole;

  return (
    <div className="min-h-screen" style={{ background: "#F4EFE3" }}>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Header card */}
        <div className="bg-white rounded-2xl p-6 card-shadow mb-6 animate-fade-up">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#173B2A] to-[#2E7D32] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {displayName[0]?.toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-bold text-[#1F2A22]">
                    {displayName}
                  </h2>
                  {profile.isVerified && (
                    <span className="verified-badge">✓ Verified</span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1 flex-wrap">
                  {profile.roles.map((role) => {
                    const meta = ROLE_META[role as UserRole];
                    return (
                      <span
                        key={role}
                        style={{
                          backgroundColor: meta.color,
                          color: meta.border,
                        }}
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      >
                        {meta.icon} {meta.label}
                      </span>
                    );
                  })}
                </div>
                {principal && (
                  <p className="text-xs text-[#9E9E9E] mt-1 font-mono">
                    ID: {principal.slice(0, 24)}...
                  </p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="btn-green text-sm py-2 hover:scale-105 transition-transform"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="p-name"
                    className="text-xs font-medium text-[#5E6660] block mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="p-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="p-phone"
                    className="text-xs font-medium text-[#5E6660] block mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="p-phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="p-city"
                    className="text-xs font-medium text-[#5E6660] block mb-1"
                  >
                    City
                  </label>
                  <input
                    id="p-city"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="p-region"
                    className="text-xs font-medium text-[#5E6660] block mb-1"
                  >
                    Province
                  </label>
                  <input
                    id="p-region"
                    value={form.region}
                    onChange={(e) =>
                      setForm({ ...form, region: e.target.value })
                    }
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-[#5E6660] mb-2">
                  My Roles (select all that apply)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {ALL_ROLES.map((role) => {
                    const meta = ROLE_META[role];
                    const selected = editRoles.includes(role);
                    return (
                      <button
                        type="button"
                        key={role}
                        onClick={() => toggleEditRole(role)}
                        style={{
                          backgroundColor: selected ? meta.color : "#fff",
                          border: `2px solid ${selected ? meta.border : "#E2D6C3"}`,
                        }}
                        className="rounded-xl p-2.5 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]"
                      >
                        <span>{meta.icon}</span>
                        <span className="text-sm font-medium text-[#1F2A22]">
                          {meta.label}
                        </span>
                        {selected && (
                          <span className="ml-auto text-[#173B2A] text-xs font-bold">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSave}
                className="w-full btn-green py-2.5 text-sm font-semibold hover:scale-[1.02] transition-transform"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Phone", value: profile.phone || form.phone },
                { label: "City", value: profile.city || form.city },
                { label: "Province", value: profile.region || form.region },
                {
                  label: "Status",
                  value: profile.isVerified
                    ? "Verified"
                    : "Pending Verification",
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-[#9E9E9E] mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-[#1F2A22]">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick access dashboards */}
        <div
          className="bg-white rounded-2xl p-6 card-shadow mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="font-bold text-[#1F2A22] mb-4">My Dashboards</h3>
          <div className="grid grid-cols-2 gap-3">
            {profile.roles.map((role) => {
              const meta = ROLE_META[role as UserRole];
              const isActive = role === activeRole;
              return (
                <button
                  type="button"
                  key={role}
                  onClick={() => {
                    switchRole(role as UserRole);
                    navigate(meta.dashPath as AppPage);
                  }}
                  style={{
                    backgroundColor: isActive ? meta.color : "#fff",
                    border: `2px solid ${isActive ? meta.border : "#E2D6C3"}`,
                  }}
                  className="rounded-xl p-4 text-left hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="text-2xl mb-2">{meta.icon}</div>
                  <div className="text-sm font-semibold text-[#1F2A22]">
                    {meta.label}
                  </div>
                  <div className="text-xs text-[#5E6660]">
                    {isActive ? "Active role" : "Switch to this"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {!profile.isVerified && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 animate-fade-up">
            <p className="text-sm font-semibold text-amber-800">
              ⏳ Verification Pending
            </p>
            <p className="text-xs text-amber-700 mt-1">
              Your account is awaiting admin verification. This usually takes
              1–2 business days.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-sm text-[#5E6660] hover:text-[#173B2A] transition-colors"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
