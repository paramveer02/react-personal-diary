// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/404-bg.png')",
      }}
    >
      {/* <div className="bg-black/10 px-10 py-8 rounded-xl text-center shadow-xl backdrop-blur-sm"> */}
      <Link
        to="/"
        className="bg-white/20 px-6 py-3 rounded-lg text-white font-medium hover:bg-white/30 transition-all"
      >
        Take Me Home
      </Link>
    </div>
    // </div>
  );
}
