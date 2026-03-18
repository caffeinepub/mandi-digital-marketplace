import { useState } from "react";
import { toast } from "sonner";
import Navbar from "../../components/Navbar";

const MOCK_USERS = [
  {
    principal: "abc-123",
    name: "Ali Hassan",
    role: "Seller",
    isVerified: false,
    isBanned: false,
    status: "pending",
  },
  {
    principal: "def-456",
    name: "Fatima Khan",
    role: "Farm",
    isVerified: true,
    isBanned: false,
    status: "approved",
  },
  {
    principal: "ghi-789",
    name: "Usman Raza",
    role: "Buyer",
    isVerified: false,
    isBanned: true,
    status: "rejected",
  },
];

const MOCK_DOCS = [
  {
    id: "d1",
    owner: "Fatima Khan",
    type: "Farm Registration",
    date: "2026-03-01",
    approved: true,
  },
  {
    id: "d2",
    owner: "Ali Hassan",
    type: "Vet Certificate",
    date: "2026-03-10",
    approved: false,
  },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [docs, setDocs] = useState(MOCK_DOCS);
  const [tab, setTab] = useState<"users" | "documents">("users");

  const toggleVerify = (principal: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.principal === principal ? { ...u, isVerified: !u.isVerified } : u,
      ),
    );
    toast.success("Verification status updated");
  };

  const toggleBan = (principal: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.principal === principal ? { ...u, isBanned: !u.isBanned } : u,
      ),
    );
    toast.success("Ban status updated");
  };

  const approveDoc = (id: string) => {
    setDocs((prev) =>
      prev.map((d) => (d.id === id ? { ...d, approved: true } : d)),
    );
    toast.success("Document approved");
  };

  const stats = [
    { label: "Total Users", count: users.length, icon: "👥", color: "#E7F4EA" },
    {
      label: "Pending Verification",
      count: users.filter((u) => !u.isVerified && !u.isBanned).length,
      icon: "⏳",
      color: "#FEF3E2",
    },
    {
      label: "Banned Users",
      count: users.filter((u) => u.isBanned).length,
      icon: "🚫",
      color: "#FFF0F0",
    },
    {
      label: "Farm Documents",
      count: docs.length,
      icon: "📄",
      color: "#F0F4FF",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F4EFE3" }}>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8 animate-fade-up">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5E6660] to-[#1F2A22] flex items-center justify-center text-white text-xl shadow-lg">
            ⚙️
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1F2A22]">
              Admin Dashboard
            </h1>
            <p className="text-[#5E6660] text-sm">
              Manage users, verify farms, and moderate content.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, count, icon, color }, i) => (
            <div
              key={label}
              className="rounded-2xl p-4 card-shadow text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.07}s`, backgroundColor: color }}
            >
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-2xl font-bold text-[#173B2A]">{count}</div>
              <div className="text-xs text-[#5E6660]">{label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["users", "documents"] as const).map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                tab === t
                  ? "bg-[#173B2A] text-white shadow-md scale-105"
                  : "bg-white text-[#5E6660] border border-[#E2D6C3] hover:bg-[#F4EFE3]"
              }`}
            >
              {t === "users" ? "👥 Users" : "📄 Farm Documents"}
            </button>
          ))}
        </div>

        {tab === "users" ? (
          <div className="bg-white rounded-2xl card-shadow overflow-hidden animate-fade-up">
            {/* Mobile card view */}
            <div className="sm:hidden">
              {users.map((user) => (
                <div
                  key={user.principal}
                  className="p-4 border-b border-[#E2D6C3] last:border-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-[#1F2A22]">
                      {user.name}
                    </span>
                    <span className="bg-[#E7F4EA] text-[#2E7D32] text-xs px-2 py-0.5 rounded-full">
                      {user.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        user.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : user.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {user.status}
                    </span>
                    {user.isVerified && (
                      <span className="verified-badge">✓ Verified</span>
                    )}
                    {user.isBanned && (
                      <span className="text-xs text-red-600 font-medium">
                        Banned
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => toggleVerify(user.principal)}
                      className={`flex-1 text-xs py-1.5 rounded-lg font-medium ${
                        user.isVerified
                          ? "bg-gray-100 text-gray-600"
                          : "bg-[#E7F4EA] text-[#2E7D32]"
                      }`}
                    >
                      {user.isVerified ? "Unverify" : "Verify"}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleBan(user.principal)}
                      className={`flex-1 text-xs py-1.5 rounded-lg font-medium ${
                        user.isBanned
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.isBanned ? "Unban" : "Ban"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop table view */}
            <div className="hidden sm:block responsive-table">
              <table className="w-full text-sm">
                <thead style={{ background: "#F4EFE3" }}>
                  <tr>
                    {[
                      "Name",
                      "Role",
                      "Status",
                      "Verified",
                      "Banned",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 font-semibold text-[#5E6660]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.principal}
                      className="border-t border-[#E2D6C3] hover:bg-[#F4EFE3] transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-[#1F2A22]">
                        {user.name}
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-[#E7F4EA] text-[#2E7D32] text-xs px-2 py-0.5 rounded-full">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            user.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : user.status === "rejected"
                                ? "bg-red-100 text-red-700"
                                : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {user.isVerified ? (
                          <span className="verified-badge">✓ Yes</span>
                        ) : (
                          <span className="text-xs text-[#5E6660]">No</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {user.isBanned ? (
                          <span className="text-xs text-red-600 font-medium">
                            Banned
                          </span>
                        ) : (
                          <span className="text-xs text-[#5E6660]">No</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => toggleVerify(user.principal)}
                            className={`text-xs px-2 py-1 rounded-lg font-medium transition-colors ${
                              user.isVerified
                                ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                : "bg-[#E7F4EA] text-[#2E7D32] hover:bg-[#D0EDDA]"
                            }`}
                          >
                            {user.isVerified ? "Unverify" : "Verify"}
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleBan(user.principal)}
                            className={`text-xs px-2 py-1 rounded-lg font-medium transition-colors ${
                              user.isBanned
                                ? "bg-green-100 text-green-700 hover:bg-green-200"
                                : "bg-red-100 text-red-700 hover:bg-red-200"
                            }`}
                          >
                            {user.isBanned ? "Unban" : "Ban"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl card-shadow overflow-hidden animate-fade-up">
            {/* Mobile */}
            <div className="sm:hidden">
              {docs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 border-b border-[#E2D6C3] last:border-0"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[#1F2A22]">
                      {doc.owner}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        doc.approved
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {doc.approved ? "Approved" : "Pending"}
                    </span>
                  </div>
                  <p className="text-sm text-[#5E6660] mb-2">
                    {doc.type} • {doc.date}
                  </p>
                  {!doc.approved && (
                    <button
                      type="button"
                      onClick={() => approveDoc(doc.id)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#E7F4EA] text-[#2E7D32] font-medium w-full"
                    >
                      Approve Document
                    </button>
                  )}
                </div>
              ))}
            </div>
            {/* Desktop */}
            <div className="hidden sm:block responsive-table">
              <table className="w-full text-sm">
                <thead style={{ background: "#F4EFE3" }}>
                  <tr>
                    {[
                      "Owner",
                      "Document Type",
                      "Upload Date",
                      "Status",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 font-semibold text-[#5E6660]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {docs.map((doc) => (
                    <tr
                      key={doc.id}
                      className="border-t border-[#E2D6C3] hover:bg-[#F4EFE3] transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-[#1F2A22]">
                        {doc.owner}
                      </td>
                      <td className="px-4 py-3">{doc.type}</td>
                      <td className="px-4 py-3 text-[#5E6660]">{doc.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            doc.approved
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {doc.approved ? "Approved" : "Pending"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {!doc.approved && (
                          <button
                            type="button"
                            onClick={() => approveDoc(doc.id)}
                            className="text-xs px-3 py-1 rounded-lg bg-[#E7F4EA] text-[#2E7D32] font-medium hover:bg-[#D0EDDA] transition-colors"
                          >
                            Approve
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
