import { useEffect, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Send, 
  Calculator, 
  Layers, 
  Smartphone, 
  Globe, 
  Cpu, 
  Sparkles, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  ArrowRight,
  Database
} from 'lucide-react';

import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { OrangeDots, SquigglyLine } from '../../components/common/Decorations';
import StickerBadge from '../../components/common/StickerBadge';
import { services } from '../../data/services';
import { submitQuoteRequest } from '../../services/api';
import { useToast } from '../../context/ToastContext';

const projectTypes = [
  {
    id: 'web',
    name: 'Custom Web Application',
    desc: 'High-performance React/Next.js web portal with responsive layouts',
    basePrice: 5500,
    baseWeeks: 6,
    icon: Globe,
    recommendedStack: 'React / Next.js + Node.js + Tailwind',
  },
  {
    id: 'mobile',
    name: 'Mobile App (iOS & Android)',
    desc: 'Cross-platform React Native app with native performance',
    basePrice: 8500,
    baseWeeks: 8,
    icon: Smartphone,
    recommendedStack: 'React Native + Node.js API + Firebase',
  },
  {
    id: 'saas',
    name: 'Full-Stack SaaS Platform',
    desc: 'Multi-tenant cloud architecture, billing, and enterprise controls',
    basePrice: 12500,
    baseWeeks: 10,
    icon: Layers,
    recommendedStack: 'MERN Stack + PostgreSQL + AWS / Docker',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Solution',
    desc: 'Multi-vendor store, checkout engine, and inventory workflows',
    basePrice: 7500,
    baseWeeks: 7,
    icon: Zap,
    recommendedStack: 'Next.js + Stripe + Redis + MongoDB',
  },
  {
    id: 'ai',
    name: 'AI & Automation Engine',
    desc: 'Custom LLM integrations, document processors, or workflow bots',
    basePrice: 9000,
    baseWeeks: 8,
    icon: Cpu,
    recommendedStack: 'Python / FastAPI + Node.js + Vector DB',
  },
  {
    id: 'mvp',
    name: 'Rapid MVP Prototype',
    desc: 'Lean startup launchpad built in accelerated sprints',
    basePrice: 4200,
    baseWeeks: 4,
    icon: Sparkles,
    recommendedStack: 'Tailwind + Vite React + Supabase',
  },
];

const featureAddons = [
  { id: 'auth', name: 'User Authentication & RBAC', price: 1200, weeks: 1, desc: 'OAuth, Magic Links, role hierarchies' },
  { id: 'payments', name: 'Payment Gateway & Invoicing', price: 1600, weeks: 1, desc: 'Stripe, PayPal, recurring subscription flows' },
  { id: 'realtime', name: 'Real-Time WebSockets / Chat', price: 2200, weeks: 2, desc: 'Live notifications, chat, live GPS maps' },
  { id: 'ai-bot', name: 'Embedded AI Agent / LLM', price: 3400, weeks: 2, desc: 'RAG retrieval, custom prompt pipelines' },
  { id: 'cms', name: 'Custom Admin & CMS Portal', price: 1800, weeks: 1, desc: 'Content publishing, role-based dashboards' },
  { id: 'analytics', name: 'Telemetry & Analytics Suite', price: 1400, weeks: 1, desc: 'User events, conversion funnels, CSV exports' },
  { id: 'devops', name: 'Cloud CI/CD & Dockerization', price: 1500, weeks: 1, desc: 'Automated staging/prod pipelines on AWS/GCP' },
  { id: 'i18n', name: 'Multi-Language Support (i18n)', price: 900, weeks: 0.5, desc: 'Localization for global markets' },
];

const timelineSpeed = [
  { id: 'standard', name: 'Standard Cadence', multiplier: 1.0, desc: 'Balanced engineering cadence' },
  { id: 'accelerated', name: 'Fast-Track Delivery', multiplier: 1.25, desc: 'Parallel team sprints (+25% sprint density)' },
  { id: 'rush', name: 'Sprint Rush (Urgent)', multiplier: 1.5, desc: 'Dedicated daily focus for tight milestones' },
];

export default function QuotePage() {
  const [selectedType, setSelectedType] = useState('web');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payments']);
  const [selectedSpeed, setSelectedSpeed] = useState('standard');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [copied, setCopied] = useState(false);

  const { success, error } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    document.title = 'Interactive Quote Calculator & RFP — Growme Tech';
    window.scrollTo(0, 0);
  }, []);

  // Compute live estimates
  const calculation = useMemo(() => {
    const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
    const currentSpeed = timelineSpeed.find((s) => s.id === selectedSpeed) || timelineSpeed[0];

    const addonsCost = selectedFeatures.reduce((acc, featId) => {
      const feat = featureAddons.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const addonsWeeks = selectedFeatures.reduce((acc, featId) => {
      const feat = featureAddons.find((f) => f.id === featId);
      return acc + (feat ? feat.weeks : 0);
    }, 0);

    const rawCost = (currentType.basePrice + addonsCost) * currentSpeed.multiplier;
    const minBudget = Math.round(rawCost * 0.9 / 100) * 100;
    const maxBudget = Math.round(rawCost * 1.15 / 100) * 100;

    const rawWeeks = Math.max(3, Math.round((currentType.baseWeeks + addonsWeeks) / (currentSpeed.id === 'rush' ? 1.4 : currentSpeed.id === 'accelerated' ? 1.2 : 1)));

    return {
      type: currentType,
      speed: currentSpeed,
      minBudget,
      maxBudget,
      estimatedWeeks: rawWeeks,
      addonsCount: selectedFeatures.length,
      currency: 'USD',
    };
  }, [selectedType, selectedFeatures, selectedSpeed]);

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const copyScopeSummary = () => {
    const currentType = projectTypes.find((t) => t.id === selectedType);
    const featureNames = featureAddons
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.name)
      .join(', ');

    const summary = `Growme Tech Project Scope Estimate:\n` +
      `• Project Type: ${currentType.name}\n` +
      `• Estimated Investment: $${calculation.minBudget.toLocaleString()} - $${calculation.maxBudget.toLocaleString()} USD\n` +
      `• Estimated Timeline: ~${calculation.estimatedWeeks} Weeks\n` +
      `• Selected Modules: ${featureNames || 'Core only'}\n` +
      `• Delivery Speed: ${calculation.speed.name}\n` +
      `• Architecture: ${currentType.recommendedStack}\n`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    success('Scope estimate copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data) => {
    const generatedRef = `GM-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullPayload = {
      ...data,
      refId: generatedRef,
      projectType: calculation.type.name,
      estimatedBudget: `$${calculation.minBudget.toLocaleString()} - $${calculation.maxBudget.toLocaleString()}`,
      estimatedTimeline: `${calculation.estimatedWeeks} Weeks`,
      selectedFeatures: featureAddons.filter((f) => selectedFeatures.includes(f.id)).map((f) => f.name),
      submittedAt: new Date().toISOString(),
    };

    // Save lead to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('growme_inquiries') || '[]');
      existing.unshift(fullPayload);
      localStorage.setItem('growme_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage failure
    }

    try {
      await submitQuoteRequest(fullPayload);
    } catch {
      // Backend mock fallback
    }

    setRefId(generatedRef);
    setIsSubmitted(true);
    success(`Quote request submitted! Reference ${generatedRef}`);
    reset();
  };

  return (
    <main className="bg-cream min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Page Header ── */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <SectionLabel label="PROJECT COST & SCOPE ESTIMATOR" />
            <StickerBadge text="LIVE CALCULATOR" color="violet" rotate={-2} size="sm" />
          </div>
          
          <SectionHeading as="h1" size="xl">
            CALCULATE YOUR PROJECT.
          </SectionHeading>

          <p className="mt-4 text-base md:text-lg text-medium-gray font-medium leading-relaxed">
            Configure your technical scope, feature modules, and desired delivery speed below to receive an instant transparent budget and timeline estimate.
          </p>
        </div>

        {/* ── Calculator + Live Summary Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Scope Builder (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Step 1: Project Type */}
            <div className="bg-warm-white border-2 border-black rounded-2xl p-6 sm:p-8 shadow-brutal">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black text-white text-xs font-mono font-bold flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-display font-black text-lg sm:text-xl text-black">
                    SELECT PROJECT ARCHETYPE
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-primary">Required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-yellow-sticker/40 border-black shadow-brutal -translate-y-0.5'
                          : 'bg-white border-black/20 hover:border-black hover:bg-cream/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-black ${isSelected ? 'bg-primary text-white shadow-[1px_1px_0px_#111]' : 'bg-light-gray text-black'}`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-mono font-black text-black">
                          From ${type.basePrice.toLocaleString()}
                        </span>
                      </div>
                      <h4 className="font-display font-black text-sm text-black mb-1">{type.name}</h4>
                      <p className="text-xs text-medium-gray leading-snug">{type.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Modules */}
            <div className="bg-warm-white border-2 border-black rounded-2xl p-6 sm:p-8 shadow-brutal">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black text-white text-xs font-mono font-bold flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-display font-black text-lg sm:text-xl text-black">
                    FEATURE MODULES & CAPABILITIES
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-medium-gray">
                  {selectedFeatures.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureAddons.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-cream border-black shadow-brutal-sm'
                          : 'bg-white border-black/20 hover:border-black'
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded-md border-2 border-black flex items-center justify-center flex-shrink-0 ${isChecked ? 'bg-primary text-white' : 'bg-white'}`}>
                        {isChecked && <Check size={14} strokeWidth={3} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="font-display font-bold text-xs text-black truncate">
                            {feat.name}
                          </span>
                          <span className="text-[10px] font-mono font-black text-primary">
                            +${feat.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[11px] text-medium-gray leading-tight">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Cadence */}
            <div className="bg-warm-white border-2 border-black rounded-2xl p-6 sm:p-8 shadow-brutal">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black text-white text-xs font-mono font-bold flex items-center justify-center">
                    03
                  </span>
                  <h2 className="font-display font-black text-lg sm:text-xl text-black">
                    DELIVERY SPEED & CADENCE
                  </h2>
                </div>
                <Clock size={16} className="text-medium-gray" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineSpeed.map((spd) => {
                  const isSelected = selectedSpeed === spd.id;
                  return (
                    <div
                      key={spd.id}
                      onClick={() => setSelectedSpeed(spd.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer text-center transition-all ${
                        isSelected
                          ? 'bg-yellow-sticker border-black shadow-brutal font-bold'
                          : 'bg-white border-black/20 hover:border-black'
                      }`}
                    >
                      <span className="text-xs font-display font-black text-black block mb-1">
                        {spd.name}
                      </span>
                      <span className="text-[11px] text-medium-gray block leading-snug">
                        {spd.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Scope & Investment Card (4 cols, Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            <div className="bg-warm-white border-3 border-black rounded-3xl p-6 shadow-brutal-lg relative overflow-hidden">
              {/* Badge sticker */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-medium-gray">
                  ESTIMATE BENCHMARK
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b-2 border-black/10">
                <span className="text-[11px] font-display font-bold uppercase text-medium-gray block mb-1">
                  Projected Investment
                </span>
                <div className="text-2xl sm:text-3xl font-display font-black text-black tracking-tight">
                  ${calculation.minBudget.toLocaleString()} – ${calculation.maxBudget.toLocaleString()}
                  <span className="text-xs font-mono text-medium-gray ml-1 font-normal">USD</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 font-bold block mt-1">
                  ✓ Includes Architecture, Design, QA & 60-Day Warranty
                </span>
              </div>

              {/* Timeline & Sprints */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-cream border border-black rounded-xl p-3 shadow-brutal-sm">
                  <span className="text-[10px] font-mono uppercase text-medium-gray block">Timeline</span>
                  <span className="text-sm font-display font-black text-black block mt-0.5">
                    ~{calculation.estimatedWeeks} Weeks
                  </span>
                </div>
                <div className="bg-cream border border-black rounded-xl p-3 shadow-brutal-sm">
                  <span className="text-[10px] font-mono uppercase text-medium-gray block">Engineering Sprints</span>
                  <span className="text-sm font-display font-black text-primary block mt-0.5">
                    {Math.ceil(calculation.estimatedWeeks / 2)} Sprints
                  </span>
                </div>
              </div>

              {/* Architecture Blueprint preview */}
              <div className="bg-white border border-black rounded-xl p-3.5 mb-6 text-xs shadow-brutal-sm">
                <span className="text-[10px] font-mono font-bold uppercase text-medium-gray block mb-1">
                  Recommended Stack
                </span>
                <span className="font-display font-bold text-black block text-xs">
                  {calculation.type.recommendedStack}
                </span>
              </div>

              {/* Scope Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={copyScopeSummary}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-black bg-cream hover:bg-yellow-sticker text-xs font-display font-black text-black shadow-brutal-sm transition-all hover:-translate-y-0.5"
                >
                  {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
                  <span>{copied ? 'Scope Summary Copied!' : 'Copy Scope Summary'}</span>
                </button>

                <a
                  href="#inquiry-form"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-black bg-primary text-white hover:bg-primary-dark text-xs font-display font-black uppercase tracking-wider shadow-brutal transition-all hover:-translate-y-0.5"
                >
                  <span>Submit For Official Proposal</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Guarantee footer */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-2 text-[10px] font-mono text-medium-gray">
                <ShieldCheck size={14} className="text-primary flex-shrink-0" />
                <span>Zero obligations. Confidentiality guaranteed.</span>
              </div>
            </div>

          </div>

        </div>

        {/* ── RFP Proposal Form Section ── */}
        <section id="inquiry-form" className="pt-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <Card hover={false} padding="p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-black flex items-center justify-center mb-5 shadow-brutal">
                    <CheckCircle size={32} className="text-emerald-600" />
                  </div>
                  
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-yellow-sticker border border-black mb-3 shadow-[1px_1px_0px_#111]">
                    REFERENCE // {refId}
                  </span>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-black mb-3">
                    Proposal Request Received!
                  </h3>
                  
                  <p className="text-medium-gray max-w-lg text-sm md:text-base leading-relaxed mb-6 font-medium">
                    Our lead architect is reviewing your configuration. You will receive a detailed line-item technical proposal and timeline breakdown within 24 hours.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button to="/" variant="secondary" size="md">
                      Return to Home
                    </Button>
                    <Button to="/portfolio" variant="primary" size="md" arrow>
                      Explore Case Studies
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  
                  <div className="border-b-2 border-black/10 pb-5 mb-2">
                    <span className="text-xs font-mono font-black uppercase text-primary tracking-wider block mb-1">
                      FINAL STEP
                    </span>
                    <h3 className="font-display font-black text-2xl text-black">
                      LOCK IN YOUR PROPOSAL & DISCOVERY CALL
                    </h3>
                    <p className="text-xs sm:text-sm text-medium-gray font-medium mt-1">
                      We'll attach the scope configuration you built above to your formal proposal.
                    </p>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block font-display font-black text-xs uppercase tracking-wider mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Sarah Connor"
                        className="input-brutal w-full text-sm"
                        {...register('fullName', { required: 'Full name is required' })}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1 font-bold">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-display font-black text-xs uppercase tracking-wider mb-2">
                        Business Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="sarah@company.com"
                        className="input-brutal w-full text-sm"
                        {...register('email', {
                          required: 'Business email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address',
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-bold">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-display font-black text-xs uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="input-brutal w-full text-sm"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block font-display font-black text-xs uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Apex Technologies LLC"
                        className="input-brutal w-full text-sm"
                        {...register('company')}
                      />
                    </div>
                  </div>

                  {/* Project Notes / Brief */}
                  <div>
                    <label htmlFor="notes" className="block font-display font-black text-xs uppercase tracking-wider mb-2">
                      Specific Requirements, Integrations, or Constraints
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      placeholder="Share any existing designs, target launch dates, or legacy systems we should connect to..."
                      className="textarea-brutal w-full text-sm"
                      {...register('notes')}
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-medium-gray">
                      Estimated scope: <span className="font-bold text-black">${calculation.minBudget.toLocaleString()} - ${calculation.maxBudget.toLocaleString()}</span> (~{calculation.estimatedWeeks} wks)
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto btn-primary text-xs font-display font-black uppercase tracking-wider py-3.5 px-8 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>{isSubmitting ? 'Transmitting RFP...' : 'Request Formal Proposal'}</span>
                    </button>
                  </div>

                </form>
              )}
            </Card>
          </div>
        </section>

      </div>
    </main>
  );
}
