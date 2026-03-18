import { navigate } from "../App";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0F2C1F 0%, #173B2A 100%)",
      }}
      className="text-white pt-12 pb-6"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <span className="text-2xl">🐂</span>
              <span style={{ fontFamily: "'Playfair Display', serif" }}>
                Mandi
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Pakistan's premier digital livestock marketplace, connecting
              buyers, sellers, and farms nationwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-100">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="hover:text-white"
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/auth")}
                  className="hover:text-white"
                >
                  Log In
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-100">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Help Center</li>
              <li>How It Works</li>
              <li>Safety Tips</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-100">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 +92 300 0000000</li>
              <li>✉️ support@mandi.pk</li>
              <li>📍 Lahore, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 pt-4 text-center text-xs text-gray-400">
          © 2026 Mandi Digital Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
