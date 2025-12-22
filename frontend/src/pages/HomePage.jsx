import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckSquare, Zap, Shield, TrendingUp, Loader2, AlertCircle, ArrowRight } from 'lucide-react';

/**
 * HomePage Component
 * Translated to English with optimized Tailwind CSS styling.
 */
export default function HomePage() {
  const [status, setStatus] = useState('loading'); // 'loading' | 'error' | 'success'

  // Simulating data fetching or authentication check
  useEffect(() => {
    const timer = setTimeout(() => {
      // Logic could set to 'error' or 'success' based on API response
      setStatus('success');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Easily create, organize, and prioritize your daily tasks.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'See every change instantly without needing to refresh.',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is protected with industry-leading encryption.',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your growth with our advanced analytics dashboard.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  // 1. Loading State
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
        <p className="mt-4 text-gray-600 font-medium italic">Preparing your workspace...</p>
      </div>
    );
  }

  // 2. Error State
  if (status === 'error') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-red-50">
        <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
        <h2 className="text-xl font-bold text-gray-900">Something went wrong!</h2>
        <p className="text-gray-600 text-center max-w-sm mt-2">
          Unable to connect to the server. Please check your connection and try again.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  // 3. Main Success State
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
            v2.0 is now live! 🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Manage Tasks Like a <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-700">Professional</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Organize your daily workflow with precision. Boost your productivity 
            and achieve your goals with our intuitive task management system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/tasks" className="w-full sm:w-auto  bg-linear-to-r from-blue-300 to-blue-700 px-5 py-3 rounded-xl font-bold  shadow-xl flex items-center  gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-5 py-3 rounded-xl font-bold hover:bg-slate-50 transition shadow-sm">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Background Decorative Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 italic">Why TaskMaster?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 group">
                <div className={`${f.bg} ${f.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-300 to-blue-700 rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic ">Ready to Get Organized?</h2>
            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-xl mx-auto">
              Join thousands of users who have transformed their productivity. 
              Start your journey today!
            </p>
            <Link
              to="/tasks"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg active:scale-95 transform"
            >
              Start Free Trial
            </Link>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-5 rounded-full -ml-10 -mb-10"></div>
        </div>
      </section>


    </div>
  );
}