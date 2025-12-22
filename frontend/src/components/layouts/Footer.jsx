import { Link } from 'react-router';
import { Github, Twitter, Linkedin, CheckSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* ১. লোগো এবং কপিরাইট */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg shadow-sm">
                <CheckSquare className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">TaskMaster</span>
            </Link>
            <span className="hidden md:block h-4 w-[1px] bg-slate-200"></span>
            <p className="text-xs font-medium text-slate-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* ২. কুইক লিংকস */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/tasks" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Tasks</Link>
            <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</Link>
          </div>

          {/* ৩. সোশ্যাল আইকন */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}