import { Link, NavLink } from 'react-router';
import { CheckSquare, Menu, X, Bell, User, LogOut, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useUser(); // logout ফাংশনটি context থেকে নিয়ে নিন

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/tasks', label: 'Dashboard' },
    { to: '/about', label: 'Product' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200 py-2' 
          : 'bg-slate-50 border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* 1. Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group transition-transform active:scale-95">
            <div className="bg-linear-to-r from-blue-300 to-blue-700 p-2 rounded-xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              <CheckSquare className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-black text-slate-900 tracking-tight">TaskMaster</h1>
              <div className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${user ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {user ? 'Active Workspace' : 'Guest Mode'}
                </p>
              </div>
            </div>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center bg-slate-200/50 p-1 rounded-2xl border border-slate-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-6 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* 3. User Actions / Login Trigger */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              // if user login than will show this bar
              <>
                <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                </button>
                
                <div className="h-8 w-[1px] bg-slate-200"></div>

                <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                  <div className="text-right hidden lg:block">
                    <p className="text-sm font-black text-slate-900 leading-none">{user.name}</p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">{user.email}</p>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-300 to-blue-700 border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm ring-2 ring-slate-100 transition-transform hover:scale-105">
                    {user.name.charAt(0)}
                  </button>
                  <button 
                    onClick={logout} 
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </>
            ) : (
              // ইউজার লগইন না থাকলে এই বাটন দেখাবে
              <Link 
                to="/login" 
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            )}
          </div>

          {/* 4. Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 bg-slate-100 rounded-xl text-slate-600 active:scale-90 transition-transform"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 5. Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center p-4 rounded-xl font-bold transition-all ${
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100">
                {user ? (
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-slate-900">{user.name}</p>
                      <p className="text-xs font-medium text-slate-500 truncate">{user.email}</p>
                    </div>
                    <button onClick={logout} className="p-2 text-slate-400 hover:text-red-500">
                      <LogOut size={20} />
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-blue-100"
                  >
                    Join TaskMaster
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}