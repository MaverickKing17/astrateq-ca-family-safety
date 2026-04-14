/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
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
import { FOOTER_CONTENT } from "./content";

// --- Components ---

const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <img 
      src="https://i.ibb.co/20m1hyy8/Astrateq-Gadgets-Logo.png" 
      alt="Astrateq Gadgets" 
      className={`h-10 w-auto ${light ? "brightness-0 invert" : ""}`}
      referrerPolicy="no-referrer"
    />
  </div>
);

const PageModal = ({ isOpen, onClose, pageId }: { isOpen: boolean, onClose: () => void, pageId: string | null }) => {
  if (!pageId || !FOOTER_CONTENT[pageId as keyof typeof FOOTER_CONTENT]) return null;
  
  const page = FOOTER_CONTENT[pageId as keyof typeof FOOTER_CONTENT];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-warm-bg-start">
              <h2 className="text-2xl font-bold text-navy-deep">{page.title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-navy-deep/5 rounded-full transition-colors"
              >
                <X size={24} className="text-navy-deep" />
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div 
                className="prose prose-navy max-w-none"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-navy-deep text-white rounded-md font-bold text-sm hover:bg-navy-deep/90 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

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
        <Logo />

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

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-gray-100 bg-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Automotive Safety Interface" 
              className="w-full h-[400px] object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent pointer-events-none" />
            
            {/* Floating UI Element to reinforce the "Gadget" feel */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-safety-orange/10 text-safety-orange rounded-full flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-navy-deep/40 uppercase">Guardian Mode</p>
                    <p className="text-xs font-bold text-navy-deep">Active Protection</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-teal-subtle uppercase">Accuracy</p>
                  <p className="text-xs font-bold text-navy-deep">94.2%</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-safety-orange/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-subtle/10 rounded-full blur-3xl" />
        </motion.div>
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

const Footer = ({ onOpenPage }: { onOpenPage: (id: string) => void }) => {
  return (
    <footer className="bg-navy-deep text-white border-t-2 border-safety-orange relative overflow-hidden">
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-[#051525] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1: Logo & Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo light />
            <div className="space-y-4">
              <p className="text-lg font-bold text-white/90 leading-tight">
                AI-Powered Automotive Safety for Canadian Families
              </p>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                Premium AI safety devices designed in Canada for families with aging parents. Built with 94% predictive accuracy and Canadian winter conditions in mind.
              </p>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Products</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><button onClick={() => onOpenPage('driveguard')} className="hover:text-safety-orange transition-colors">DriveGuard</button></li>
              <li><button onClick={() => onOpenPage('roadguard-pro')} className="hover:text-safety-orange transition-colors">RoadGuard Pro</button></li>
              <li><button onClick={() => onOpenPage('ev-battery-intelligence')} className="hover:text-safety-orange transition-colors text-left">EV Battery Intelligence Kit</button></li>
              <li><button onClick={() => onOpenPage('accessories')} className="hover:text-safety-orange transition-colors">Accessories</button></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Support</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><button onClick={() => onOpenPage('help-center')} className="hover:text-safety-orange transition-colors">Help Center</button></li>
              <li><button onClick={() => onOpenPage('installation-guide')} className="hover:text-safety-orange transition-colors">Installation Guide</button></li>
              <li><button onClick={() => onOpenPage('warranty')} className="hover:text-safety-orange transition-colors">Warranty</button></li>
              <li><button onClick={() => onOpenPage('contact-us')} className="hover:text-safety-orange transition-colors">Contact Us</button></li>
              <li><button onClick={() => onOpenPage('shipping-returns')} className="hover:text-safety-orange transition-colors">Shipping & Returns</button></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><button onClick={() => onOpenPage('our-story')} className="hover:text-safety-orange transition-colors text-left">Our Story</button></li>
              <li><button onClick={() => onOpenPage('safety-board')} className="hover:text-safety-orange transition-colors text-left">Safety Board</button></li>
              <li><button onClick={() => onOpenPage('careers')} className="hover:text-safety-orange transition-colors text-left">Careers</button></li>
              <li><button onClick={() => onOpenPage('press')} className="hover:text-safety-orange transition-colors text-left">Press</button></li>
              <li><button onClick={() => onOpenPage('canadian-standards')} className="hover:text-safety-orange transition-colors text-left">Canadian Standards</button></li>
            </ul>
          </div>
        </div>

        {/* Column 5: Connect / Social & Newsletter */}
        <div className="mt-16 pt-16 border-t border-white/5 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h4>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety-orange transition-all group">
                  <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-bold text-white/90">Join the Family Safety Waitlist</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-safety-orange/50 transition-all"
              />
              <button className="bg-safety-orange hover:bg-safety-orange/90 text-white px-6 py-2 rounded-md text-sm font-bold transition-all uppercase tracking-wider">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sub-footer Bar */}
      <div className="bg-[#051525] py-8 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
              © 2026 Astrateq Gadgets. All rights reserved. Built for Canadian Roads.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <button onClick={() => onOpenPage('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => onOpenPage('terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button>
              <button onClick={() => onOpenPage('accessibility')} className="hover:text-white transition-colors">Accessibility</button>
              <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Made in Canada</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 py-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
              <CheckCircle2 size={14} className="text-safety-orange" />
              94% Predictive Accuracy
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
              <Car size={14} className="text-safety-orange" />
              OBD-II Plug & Play
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
              <MapPin size={14} className="text-safety-orange" />
              Designed for Canadian Winters
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<string | null>(null);

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

      <Footer onOpenPage={(id) => setActivePage(id)} />

      <PageModal 
        isOpen={!!activePage} 
        onClose={() => setActivePage(null)} 
        pageId={activePage} 
      />
    </div>
  );
}
