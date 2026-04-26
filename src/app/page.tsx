import Image from "next/image";
import Link from "next/link";
import { Brain, Mic, Share2, Layers, ArrowRight, ChevronDown, Sparkles, Shield, Zap, Users, BookOpen, FileText, Presentation } from "lucide-react";

const pillars = [
  { icon: Brain,  color: "from-blue-500 to-cyan-400",    title: "Facial Expression Detection",      tag: "Computer Vision" },
  { icon: Mic,    color: "from-violet-500 to-purple-400", title: "Voice-Based Symptom Collection",   tag: "Speech AI"       },
  { icon: Layers, color: "from-emerald-500 to-teal-400",  title: "Multimodal Fusion & Scoring",      tag: "Fusion Model"    },
  { icon: Share2, color: "from-rose-500 to-pink-400",     title: "Social Media Behavior Analysis",   tag: "Behavioral AI"   },
];

const stats = [
  { value: "4",    label: "AI Components",      icon: Zap      },
  { value: "95%",  label: "Target Accuracy",    icon: Shield   },
  { value: "24/7", label: "Passive Monitoring", icon: Sparkles },
  { value: "4",    label: "Researchers",         icon: Users    },
];

const quickLinks = [
  { icon: BookOpen,     label: "Explore Domain",    href: "/domain",        color: "from-blue-500 to-cyan-400"    },
  { icon: FileText,     label: "Downloads & Archive", href: "/download",    color: "from-violet-500 to-purple-400" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-indigo-900/30 rounded-full blur-3xl" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="particle" style={{ width:`${4+i*2}px`, height:`${4+i*2}px`, background:`hsl(${220+i*30}deg 80% 65%)`, left:`${10+i*17}%`, top:`${20+(i%3)*25}%`, animationDelay:`${i*1.2}s`, opacity:0.45 }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="section-badge">
              <Sparkles size={12} /> AI-Powered Mental Health Research · SLIIT 2025
            </div>
            <h1 className="section-title mb-5" style={{ fontFamily:"'Outfit',sans-serif" }}>
              <span className="text-gradient">WellMind</span>
              <br />Depression Detection<br />via Multimodal AI
            </h1>
            <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-lg">
              Depression affects <strong className="text-white">280 million people</strong> globally yet remains chronically under-detected.
              WellMind is a research project that combines <strong className="text-white">facial expression analysis</strong>,{" "}
              <strong className="text-white">voice biomarker extraction</strong>,{" "}
              <strong className="text-white">social media behaviour monitoring</strong>, and an{" "}
              <strong className="text-white">attention-based multimodal fusion engine</strong> to enable
              early, accurate, and accessible depression screening through a React Native mobile application.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/domain" className="btn-primary inline-flex items-center gap-2">
                <span className="flex items-center gap-2">Explore Research <ArrowRight size={15}/></span>
              </Link>
              <Link href="/download" className="btn-outline inline-flex items-center gap-2">Downloads</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning","React Native","Expo","Flask","Firebase","TensorFlow","BERT","LSTM"].map(t=>(
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400">{t}</span>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative flex justify-center animate-float">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl scale-110 pointer-events-none" />
            <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-2xl scale-125 pointer-events-none" />
            <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden animate-glow"
              style={{ boxShadow:"0 0 80px rgba(99,102,241,0.25), 0 0 160px rgba(59,130,246,0.1)" }}>
              <Image src="/hero.png" alt="WellMind AI Depression Detection" width={540} height={540} className="w-full object-cover rounded-3xl" priority />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#050512]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-blue-500/30">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold">Face Scan Active</span>
              </div>
              <div className="absolute top-4 right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-violet-500/30">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-300 text-xs font-semibold">Voice Analysis</span>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-3 flex items-center gap-3 border border-emerald-500/30">
                <div className="flex flex-col">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Risk Score</span>
                  <span className="text-white font-extrabold text-lg leading-none" style={{ fontFamily:"'Outfit',sans-serif" }}>24 / 100</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs">Severity</span>
                  <span className="text-emerald-400 font-bold text-sm">Minimal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
          <span>Scroll to explore</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="py-14 border-y border-white/8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-1">
                <Icon size={18} className="text-violet-400" />
              </div>
              <span className="text-4xl font-extrabold text-gradient" style={{ fontFamily:"'Outfit',sans-serif" }}>{value}</span>
              <span className="text-slate-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABSTRACT ─────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-badge w-fit mb-4"><BookOpen size={12}/> Abstract</div>
          <h2 className="section-title text-gradient mb-6" style={{ fontFamily:"'Outfit',sans-serif" }}>Project Overview</h2>
          <div className="glass rounded-2xl p-8 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Mental health disorders, particularly depression, represent one of the most significant global health challenges of the 21st century.
              Traditional diagnostic approaches rely heavily on self-reported questionnaires (PHQ-9, BDI) which are susceptible to subjective bias,
              recall error, and deliberate under-reporting — leading to widespread under-diagnosis.
            </p>
            <p>
              <strong className="text-white">WellMind</strong> addresses this gap by proposing a multimodal AI-driven framework that passively and
              continuously collects behavioural data through four complementary channels:{" "}
              <span className="text-blue-300 font-medium">facial micro-expression analysis</span>,{" "}
              <span className="text-violet-300 font-medium">vocal biomarker extraction from speech</span>,{" "}
              <span className="text-pink-300 font-medium">social media activity and sentiment monitoring</span>, and an{" "}
              <span className="text-emerald-300 font-medium">attention-based multimodal fusion engine</span> that synthesises signals
              into a single, explainable depression risk score calibrated against clinical PHQ-9 benchmarks.
            </p>
            <p>
              The system is delivered as a cross-platform mobile application built with React Native and Expo, backed by a Flask/FastAPI ML inference
              backend and Firebase for real-time data storage, authentication, and serverless processing. SHAP-based explainability ensures
              clinical transparency and trust.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto w-fit mb-3"><Layers size={12}/> Research Components</div>
            <h2 className="section-title text-gradient" style={{ fontFamily:"'Outfit',sans-serif" }}>Four Pillars of Detection</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, color, title, tag }) => (
              <div key={title} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{tag}</span>
                <h3 className="font-bold text-white text-sm leading-snug" style={{ fontFamily:"'Outfit',sans-serif" }}>{title}</h3>
                <Link href="/domain" className="text-violet-400 text-xs font-semibold hover:text-violet-300 flex items-center gap-1 mt-auto transition-colors">
                  Learn more <ArrowRight size={12}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ──────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {quickLinks.map(({ icon: Icon, label, href, color }) => (
            <Link key={label} href={href}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center gap-3 text-center group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                <Icon size={22} className="text-white" />
              </div>
              <span className="text-white font-semibold">{label}</span>
              <ArrowRight size={14} className="text-slate-500 group-hover:text-violet-400 transition-colors" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
