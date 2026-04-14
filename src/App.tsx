/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Shield, 
  Eye, 
  Bell, 
  Smartphone, 
  Battery, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  MapPin,
  Clock,
  TrendingDown,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-safety-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
          <span className="text-xl font-display font-bold tracking-tight text-navy-deep">ASTRATEQ <span className="text-xs block -mt-1 font-normal tracking-widest opacity-60">GADGETS</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["HOW IT WORKS", "PRODUCTS", "GUARDIAN MODE"].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs font-semibold tracking-widest text-navy-deep/70 hover:text-safety-orange transition-colors">
              {link}
            </a>
          ))}
          <div className="flex items-center gap-2 text-[10px] font-bold text-navy-deep/40 ml-4">
            <span className="text-navy-deep">EN</span>
            <span className="opacity-30">|</span>
            <span>FR</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-safety-orange hover:bg-safety-orange/90 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-lg shadow-safety-orange/20 uppercase">
            Reserve Your Spot
          </button>
          <button className="md:hidden text-navy-deep" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {["HOW IT WORKS", "PRODUCTS", "GUARDIAN MODE"].map((link) => (
              <a key={link} href="#" className="text-sm font-bold text-navy-deep py-2">{link}</a>
            ))}
            <button className="bg-safety-orange text-white w-full py-3 rounded-md font-bold uppercase">Reserve Your Spot</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const DashboardMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="relative w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-navy-deep p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">ASTRATEQ GUARDIAN</span>
          </div>
          <span className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded">ACTIVE</span>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h4 className="text-xs font-bold text-navy-deep/40 uppercase tracking-wider">Pulse Dashboard</h4>
              <p className="text-2xl font-display font-bold text-navy-deep">Dad's Drive</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-green-500 uppercase">Safe Zone</p>
              <p className="text-xs font-bold text-navy-deep/60">Toronto, ON</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-warm-bg-start p-4 rounded-2xl border border-gray-100">
              <p className="text-[10px] font-bold text-navy-deep/40 uppercase mb-1">Road Risk Score</p>
              <p className="text-3xl font-display font-bold text-navy-deep">12</p>
              <p className="text-[10px] font-bold text-green-500 mt-1">LOW • All clear</p>
            </div>
            <div className="bg-warm-bg-start p-4 rounded-2xl border border-gray-100">
              <p className="text-[10px] font-bold text-navy-deep/40 uppercase mb-1">Next Service Flag</p>
              <p className="text-3xl font-display font-bold text-navy-deep">41d</p>
              <p className="text-[10px] font-bold text-orange-500 mt-1">Brake fluid variance</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Shield size={16} /></div>
                <span className="text-xs font-bold text-navy-deep">Fatigue Index</span>
              </div>
              <span className="text-xs font-bold text-green-500">Normal</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 text-teal-subtle rounded-lg"><Eye size={16} /></div>
                <span className="text-xs font-bold text-navy-deep">AI Confidence</span>
              </div>
              <span className="text-xs font-bold text-navy-deep">94%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-navy-deep/40 uppercase">Overall Risk</span>
              <span className="text-[10px] font-bold text-navy-deep">12 / 100</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[12%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-10 h-10 bg-teal-subtle/10 text-teal-subtle rounded-full flex items-center justify-center">
          <CheckCircle2 size={20} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-navy-deep/40 uppercase">Family View</p>
          <p className="text-xs font-bold text-navy-deep">Connected</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-deep/5 rounded-full border border-navy-deep/10">
            <span className="w-2 h-2 bg-safety-orange rounded-full" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep/60">Engineered for Canadian Families</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-navy-deep leading-[1.1]">
            Keep Your Parents <span className="text-safety-orange">Safer</span> on Every Canadian Road.
          </h1>
          
          <p className="text-lg text-navy-deep/70 max-w-lg leading-relaxed">
            "If you can't be in the passenger seat, be in the loop." ASTRA-AI predicts vehicle issues 3-6 weeks ahead with 94% accuracy. Guardian Mode keeps your family informed — without being intrusive.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-safety-orange hover:bg-safety-orange/90 text-white px-8 py-4 rounded-md font-bold transition-all shadow-xl shadow-safety-orange/30 flex items-center gap-2 group uppercase text-xs">
              Reserve Your Spot Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-navy-deep font-bold flex items-center gap-2 hover:text-safety-orange transition-colors uppercase text-xs">
              See How It Works
              <ChevronRight size={18} />
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-4 bg-[#FFF4ED] border border-safety-orange/20 px-3 py-1 rounded-full"
          >
            <span className="text-[10px] font-bold text-safety-orange uppercase tracking-wider">250 Founding spots remaining</span>
          </motion.div>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { id: "01", title: "Proactive risk alerts", desc: "Detects mechanical and road risk patterns weeks before they surface. Your loved one gets a calm, helpful notification — not a frightening alarm. Early intervention, always.", icon: <Bell className="text-safety-orange" /> },
    { id: "02", title: "Incident evidence mode", desc: "Automatic high-fidelity recording during critical events, providing peace of mind and clear documentation if the unexpected happens.", icon: <Shield className="text-teal-subtle" /> },
    { id: "03", title: "Family notifications (opt-in)", desc: "Stay informed with gentle updates on vehicle health and safety scores. Respectful monitoring that preserves their independence.", icon: <Smartphone className="text-navy-deep" /> },
    { id: "04", title: "Winter safety alerts", desc: "Specialized Canadian road condition monitoring. Real-time alerts for black ice, freezing rain, and extreme temperature impacts.", icon: <Battery className="text-blue-500" /> },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase text-safety-orange">Guardian Mode</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-deep mt-4">
            ALWAYS WATCHING.<br />
            <span className="opacity-40 italic">Never intrusive.</span>
          </h2>
          <p className="text-navy-deep/60 mt-4 max-w-md">
            Four layers of protection — running silently, alerting only when it genuinely matters.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.2fr_0.8fr_1fr] gap-8 items-start">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep mb-4 block">ALWAYS WATCHING. Never intrusive.</span>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div 
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-4 bg-white rounded-lg border-l-3 border-teal-subtle shadow-card hover:shadow-md transition-all cursor-pointer"
                >
                  <h3 className="text-xs font-bold text-navy-deep mb-1">{f.title}</h3>
                  <p className="text-[10px] text-navy-deep/60 leading-relaxed">{f.desc.split('.')[0]}.</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-navy-deep rounded-lg p-8 text-white text-center shadow-card">
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-60 mb-4 block">System Integrity</span>
            <h2 className="text-5xl font-bold text-safety-orange">94%</h2>
            <p className="text-[10px] text-white/60 mt-4 leading-relaxed">
              Industry leading AI hazard detection for rural & urban Canadian terrain.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep mb-4 block">THREE STEPS. Five minutes.</span>
            <div className="flex flex-col gap-3">
              {[
                { title: "01. Order Kit", desc: "Shipped free across Canada." },
                { title: "02. Plug & Play", desc: "Installs in seconds (OBD-II)." },
                { title: "03. Rest Easy", desc: "24/7 peace of mind starts." }
              ].map((step, i) => (
                <div key={i} className="p-4 bg-white rounded-lg border-l-3 border-safety-orange shadow-card">
                  <h4 className="text-xs font-bold text-navy-deep">{step.title}</h4>
                  <p className="text-[10px] text-navy-deep/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: "Canadian winter conditions", desc: "Black ice, freezing rain, and reduced visibility demand more from every driver. Guardian Mode monitors conditions in real time.", icon: <MapPin className="text-blue-500" /> },
    { title: "Proactive — not reactive", desc: "Most safety systems respond after something goes wrong. ASTRA-AI detects early warning signs weeks before they become incidents.", icon: <Clock className="text-safety-orange" /> },
    { title: "Independence with a safety net", desc: "Your parent stays in full control of their car and their life. ASTRA-AI runs quietly in the background, alerting only when it matters.", icon: <Shield className="text-teal-subtle" /> },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-deep uppercase leading-[1.1]">
              THEY DESERVE THEIR <span className="opacity-30">independence.</span><br />
              YOU DESERVE <span className="text-safety-orange">PEACE OF MIND.</span>
            </h2>
          </div>
          <div className="text-right italic text-navy-deep/40 text-lg">
            "If you can't be in the passenger seat,<br />be in the loop."
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-warm-bg-start rounded-2xl flex items-center justify-center mb-6">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-4">{b.title}</h3>
              <p className="text-navy-deep/60 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { 
      name: "DriveGuard", 
      price: "329", 
      tag: "MOST POPULAR", 
      best: "BEST FOR: FAMILIES WITH AGING PARENTS",
      features: ["Real-time driving behaviour analysis", "Predictive maintenance alerts 3-6 weeks ahead", "Guardian Mode with family dashboard", "OBD-II plug-and-play • 5 min setup"]
    },
    { 
      name: "RoadGuard Pro", 
      price: "449", 
      tag: "ADVANCED", 
      best: "BEST FOR: FREQUENT DRIVERS & FLEET MANAGERS",
      features: ["Fleet-wide predictive maintenance", "Multi-vehicle Guardian Mode", "Driver fatigue detection", "Priority support access"]
    },
    { 
      name: "EV Battery Intelligence Kit", 
      price: "379", 
      tag: "BEST FOR: ELECTRIC VEHICLE OWNERS", 
      best: "BEST FOR: ELECTRIC VEHICLE OWNERS",
      features: ["Battery degradation forecasting", "Range anxiety early alerts", "OBD-II + EV API sync", "Charge cycle optimisation"]
    },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-safety-orange">Pre-launch Pricing</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 uppercase leading-none">
              CHOOSE YOUR<br /><span className="opacity-30">protection</span><br />LEVEL.
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs text-right">
            All plans include Guardian Mode. Pre-launch pricing locked for founding members only.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-lg shadow-card border ${i === 0 ? "bg-white text-navy-deep border-safety-orange border-2" : "bg-white border-transparent"} flex flex-col relative`}
            >
              {i === 0 && <span className="absolute -top-3 right-6 bg-safety-orange text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span>}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-navy-deep/40">{p.best}</p>
                <h3 className="text-xl font-bold mt-2">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs font-bold text-navy-deep">$</span>
                  <span className="text-4xl font-bold text-navy-deep">{p.price}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-safety-orange" />
                    <span className="text-xs text-navy-deep/70">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`mt-8 w-full py-3 rounded-md font-bold transition-all uppercase text-xs ${i === 0 ? "bg-safety-orange text-white shadow-lg shadow-safety-orange/20 hover:bg-safety-orange/90" : "bg-navy-deep text-white hover:bg-navy-deep/90"}`}>
                Reserve Your Spot
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
          250 FOUNDING SPOTS ONLY • DEPOSIT FULLY REFUNDABLE • NO CHARGE UNTIL PRODUCT SHIPS
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-6 bg-warm-bg-start">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-2">
          <span className="text-6xl font-display font-bold text-safety-orange">94%</span>
          <p className="text-xs font-bold text-navy-deep/40 uppercase tracking-widest">Predictive accuracy target<br /><span className="opacity-50">INTERNAL VALIDATION</span></p>
        </div>
        <div className="space-y-2">
          <span className="text-6xl font-display font-bold text-navy-deep">3—6</span>
          <p className="text-xs font-bold text-navy-deep/40 uppercase tracking-widest">Weeks early warning<br /><span className="opacity-50">MAINTENANCE + HAZARD</span></p>
        </div>
        <div className="space-y-2">
          <span className="text-6xl font-display font-bold text-navy-deep">40%</span>
          <p className="text-xs font-bold text-navy-deep/40 uppercase tracking-widest">Risk reduction goal<br /><span className="opacity-50">PILOT • EARLY TRIALS</span></p>
        </div>
      </div>
      <p className="text-center text-[10px] text-navy-deep/20 mt-12 max-w-2xl mx-auto">
        Results vary • Astrateq Safety Technology — Does not replace attentive driving • All figures represent targets and early validation data
      </p>
    </section>
  );
};

const Steps = () => {
  const steps = [
    { id: "01", title: "Plug in — 5 minutes", desc: "Connect the OBD-II device to your vehicle's diagnostic port. No tools, no mechanic, no appointment needed. Works with any car made after 1996.", icon: <Car /> },
    { id: "02", title: "Guardian Mode activates", desc: "ASTRA-AI begins learning your vehicle's patterns — engine health, driving behaviour, and road conditions. Silently monitoring, never intrusive.", icon: <Shield /> },
    { id: "03", title: "Proactive alerts, not alarms", desc: "When the AI detects a potential risk, you get a calm notification with clear guidance. Weeks before it becomes a problem.", icon: <Bell /> },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase text-safety-orange">How it works</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-deep mt-4 uppercase">
            THREE STEPS.<br />
            <span className="opacity-30 italic">Five minutes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group"
            >
              <span className="text-xs font-bold text-navy-deep/10 absolute top-8 right-8">{s.id}</span>
              <div className="w-12 h-12 bg-warm-bg-start text-navy-deep/40 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-safety-orange group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-4">{s.title}</h3>
              <p className="text-navy-deep/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GiftSection = () => {
  return (
    <section className="py-24 px-6 bg-warm-bg-end">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-safety-orange">Pre-launch Access</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-navy-deep mt-4 uppercase leading-none">
            GIVE THEM<br />THE GIFT OF<br /><span className="opacity-30 italic">safer roads.</span>
          </h2>
          <p className="text-navy-deep/60 mt-8 max-w-md leading-relaxed">
            Join the waitlist for pre-launch pricing, your free Canadian Winter Safety Guide, and priority access to Guardian Mode before public launch.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-6">
              <div className="text-3xl font-display font-bold text-navy-deep">250</div>
              <div>
                <p className="text-xs font-bold text-navy-deep">Founding spots remaining</p>
                <p className="text-[10px] font-bold text-navy-deep/40 uppercase">DEPOSITS FULLY REFUNDABLE</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { id: "01", title: "Reserve your spot", desc: "Fully refundable deposit. No charge until the product ships to you." },
                { id: "02", title: "Receive your guide", desc: "Your free Canadian Winter Safety Guide lands in your inbox instantly." },
                { id: "03", title: "Get early access", desc: "Founding members get Guardian Mode before public launch with locked pricing." }
              ].map(item => (
                <div key={item.id} className="flex gap-4">
                  <span className="text-[10px] font-bold text-navy-deep/20 mt-1">{item.id}</span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-deep">{item.title}</h4>
                    <p className="text-xs text-navy-deep/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-card border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep/40">Waitlist Registration</span>
            <span className="text-[10px] font-bold text-safety-orange">250 SPOTS ONLY</span>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">Email Address *</label>
              <input type="email" placeholder="you@email.com" className="w-full px-4 py-3 bg-warm-bg-start border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-orange/20 transition-all" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">First Name</label>
                <input type="text" placeholder="e.g. Jennifer" className="w-full px-4 py-3 bg-warm-bg-start border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-orange/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">City / Province</label>
                <input type="text" placeholder="e.g. Oakville, ON" className="w-full px-4 py-3 bg-warm-bg-start border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-orange/20 transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">This is for</label>
                <select className="w-full px-4 py-3 bg-warm-bg-start border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-orange/20 transition-all appearance-none">
                  <option>My parent</option>
                  <option>Myself</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">Their Vehicle</label>
                <select className="w-full px-4 py-3 bg-warm-bg-start border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-orange/20 transition-all appearance-none">
                  <option>Gas or Hybrid</option>
                  <option>Electric (EV)</option>
                </select>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 accent-safety-orange" defaultChecked />
              <p className="text-[10px] text-navy-deep/60 leading-relaxed">
                Send me the free <span className="font-bold text-navy-deep">Canadian Winter Safety Guide</span> — essential reading for Ontario drivers
              </p>
            </div>

            <button className="w-full bg-safety-orange text-white py-4 rounded-md font-bold shadow-lg shadow-safety-orange/20 hover:bg-safety-orange/90 transition-all uppercase text-xs">
              Join the Family Safety Waitlist →
            </button>
            
            <p className="text-center text-[10px] font-bold text-navy-deep/20 uppercase tracking-widest">
              🔒 NO CHARGE UNTIL SHIPS • CA CANADIAN COMPANY • CAN CALL COMPLIANT • CANCEL ANYTIME
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_repeat(4,1fr)] gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-safety-orange rounded-md flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className="text-xl font-bold tracking-tight">ASTRATEQ GADGETS</span>
          </div>
          <p className="text-white/60 text-[10px] leading-relaxed">
            Protecting Canadian families through AI innovation. Proudly headquartered in Toronto.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Products</h5>
          <ul className="space-y-2 text-[10px] text-white/80">
            <li><a href="#" className="hover:text-safety-orange transition-colors">DriveGuard</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">RoadGuard Pro</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">EV Kits</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Support</h5>
          <ul className="space-y-2 text-[10px] text-white/80">
            <li><a href="#" className="hover:text-safety-orange transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">Installation</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">Warranty</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Company</h5>
          <ul className="space-y-2 text-[10px] text-white/80">
            <li><a href="#" className="hover:text-safety-orange transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">Safety Board</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">Careers</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-[10px] font-bold uppercase tracking-widest opacity-50">Connect</h5>
          <ul className="space-y-2 text-[10px] text-white/80">
            <li><a href="#" className="hover:text-safety-orange transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-safety-orange transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-safety-orange/30 selection:text-navy-deep">
      {/* Top Banner */}
      <div className="bg-safety-orange text-white py-2 px-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
          🇨🇦 Free shipping • All of Canada • 🛡️ PIPEDA compliant • Data stays in Canada • ⚡ Fully refundable deposit • 250 spots only
        </p>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Scrolling Ticker */}
        <div className="bg-navy-deep/5 border-y border-navy-deep/10 py-4 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-12 items-center">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex gap-12 items-center">
                <span className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">Victoria BC — RoadGuard Pro — 8m ago</span>
                <span className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">London ON — RoadGuard Pro — 26m ago</span>
                <span className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">Victoria BC — DriveGuard — 17m ago</span>
                <span className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">Edmonton AB — RoadGuard Pro — 27m ago</span>
                <span className="text-[10px] font-bold text-navy-deep/40 uppercase tracking-widest">Vancouver BC — EV Battery Intelligence Kit — 32m ago</span>
              </div>
            ))}
          </div>
        </div>

        <Features />
        <Benefits />
        <Pricing />
        <Stats />
        <Steps />
        <GiftSection />

        {/* Built to Canadian Standards */}
        <section className="py-12 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-[10px] font-bold text-navy-deep/20 uppercase tracking-[0.3em] mb-8">Built to Canadian Standards</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Shield size={16} /> PIPEDA COMPLIANT</div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><MapPin size={16} /> CA CANADIAN DATA STORAGE</div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Shield size={16} /> 256-BIT SSL ENCRYPTED</div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Car size={16} /> TRANSPORT CANADA NOTICE FILED</div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><CheckCircle2 size={16} /> OBD-II UNIVERSAL COMPATIBLE</div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-[9px] font-bold text-navy-deep/20 uppercase tracking-widest">
              <span>Compatible with:</span>
              {["Tesla", "GM", "Hyundai", "Kia", "Ford", "Toyota", "Honda"].map(brand => (
                <span key={brand} className="px-2 py-1 border border-navy-deep/10 rounded">{brand}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Buttons (Fixed Right) */}
      <div className="fixed right-6 bottom-1/2 translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {[1,2,3,4].map(i => (
          <button key={i} className="w-10 h-10 bg-white shadow-lg border border-gray-100 rounded-full flex items-center justify-center text-navy-deep hover:bg-safety-orange hover:text-white transition-all">
            <span className="text-[10px] font-bold">{i}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
