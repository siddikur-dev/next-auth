import { Link, NavLink } from "react-router";
import { CheckSquare, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();

  // আপনার দেওয়া ব্লু গ্রেডিয়েন্ট
  const brandGradient = "bg-linear-to-r from-blue-300 to-blue-700";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tasks", label: "Dashboard" },
    { to: "/about", label: "Product" },
  ];

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* 1. Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`${brandGradient} p-2.5 rounded-2xl shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform duration-300`}
            >
              <CheckSquare className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block leading-none">
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">
                TaskMaster
              </h1>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-1">
                Premium
              </p>
            </div>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center bg-slate-100/40 border border-slate-200/30 p-1 rounded-2xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm shadow-blue-100/50"
                      : "text-slate-500 hover:text-slate-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* 3. User Display (Always Visible - No Interaction) */}
          <div className="hidden md:flex items-center">
            {user && (
              <div className="flex items-center gap-4 pl-4 py-1.5 pr-1.5 bg-white/50 border border-slate-100 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md">
                <div className="text-right leading-tight">
                  <p className="text-xs font-black text-slate-900">
                    {user.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                    {user.email}
                  </p>
                </div>
                <div
                  className={`w-9 h-9 rounded-xl ${brandGradient} flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-100`}
                >
                  {user.name.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-600 shadow-sm"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 bg-white mt-4 rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-6 py-4 rounded-2xl font-black text-sm transition-all ${
                    isActive
                      ? `${brandGradient} text-white shadow-xl shadow-blue-100`
                      : "text-slate-600 bg-slate-50/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-100">
              {user && (
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-3xl">
                  <div
                    className={`w-12 h-12 rounded-2xl ${brandGradient} flex items-center justify-center text-white font-black text-lg shadow-lg`}
                  >
                    {user.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-black text-slate-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}