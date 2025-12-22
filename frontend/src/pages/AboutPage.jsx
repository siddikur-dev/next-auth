import { CheckCircle2, Cpu, Rocket, ShieldCheck, Zap, Globe, Layout, Search, Smartphone, BellRing } from 'lucide-react';

export default function AboutPage() {
  const frontendTech = ['React 18', 'React Router', 'TanStack Query', 'React Hook Form', 'Tailwind CSS', 'Lucide Icons'];
  const backendTech = ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Zod Validation', 'REST API'];

  const features = [
    { title: 'Optimistic UI', desc: 'Instant feedback without waiting for server response.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Kanban & List', desc: 'Versatile views to manage tasks exactly how you want.', icon: Layout, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Smart Search', desc: 'Find any task instantly with real-time filtering.', icon: Search, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Responsive', desc: 'Optimized for mobile, tablet, and desktop screens.', icon: Smartphone, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Form Validation', desc: 'Secure data entry with real-time Zod & Hook Form.', icon: ShieldCheck, color: 'text-rose-600', bg: 'bg-rose-50' },
    { title: 'Notifications', desc: 'Never miss a deadline with instant toast alerts.', icon: BellRing, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      
      {/* 1. Hero Section */}
      <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">
          <Rocket size={14} /> Built for Performance
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Next Gen <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-700">Task Management</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          TaskMaster is a modern workspace designed to streamline your productivity using cutting-edge technologies.
        </p>
      </div>

      {/* 2. Tech Stack Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <Cpu className="text-blue-600" /> Tech Stack
            </h2>
            <p className="text-slate-500 font-medium">
              We use the most reliable and modern technologies to ensure speed, security, and scalability.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Card */}
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Globe className="text-blue-500" /> Frontend
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {frontendTech.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="text-slate-600 font-bold text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl transition-all group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="text-indigo-400" /> Backend
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {backendTech.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400" />
                    <span className="text-slate-300 font-bold text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Powerful Features</h2>
          <p className="text-slate-500">Everything you need to stay organized.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className={`${feature.bg} ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} strokeWidth={2.5} />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Footer CTA */}
      <div className="bg-linear-to-r from-blue-300 to-blue-700 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-200">
        <h2 className="text-3xl font-black mb-4 tracking-tight">Ready to boost your productivity?</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">Join thousands of users who are already managing their tasks with TaskMaster.</p>
        <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 active:scale-95 transition-all shadow-lg">
          Get Started Now
        </button>
      </div>

    </div>
  );
}