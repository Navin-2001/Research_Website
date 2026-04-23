import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Mic,
  Share2,
  Layers,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const components = [
  {
    icon: Brain,
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.25)",
    title: "Facial Expression Detection",
    desc: "Deep learning CNN models analyze micro-expressions in real-time to identify emotional markers indicative of depressive states.",
    tag: "Computer Vision",
  },
  {
    icon: Mic,
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.25)",
    title: "Voice-Based Symptom Collection",
    desc: "NLP and acoustic feature extraction from speech patterns detect vocal biomarkers—prosody, tone, and rhythm—correlated with depression.",
    tag: "Speech AI",
  },
  {
    icon: Layers,
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.25)",
    title: "Multimodal Fusion & Scoring",
    desc: "An ensemble ML model fuses facial, audio, and behavioral signals into a unified depression probability score with explainable outputs.",
    tag: "Fusion Model",
  },
  {
    icon: Share2,
    color: "from-rose-500 to-pink-400",
    glow: "rgba(244,63,94,0.25)",
    title: "Social Media Behavior Analysis",
    desc: "Sentiment analysis and behavioral pattern recognition across social platforms reveal linguistic and activity markers of mental health shifts.",
    tag: "Behavioral AI",
  },
];

const stats = [
  { value: "4", label: "AI Components",    icon: Zap      },
  { value: "95%", label: "Detection Accuracy", icon: Shield },
  { value: "24/7", label: "Monitoring",     icon: Sparkles },
  { value: "10K+", label: "Data Points",   icon: Users    },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-indigo-900/30 rounded-full blur-3xl" />
          {/* Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${4 + i * 2}px`,
                height: `${4 + i * 2}px`,
                background: `hsl(${220 + i * 30}deg 80% 65%)`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 1.2}s`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">
          {/* Left copy */}
          <div className="animate-fade-up">
            <div className="section-badge">
              <Sparkles size={12} />
              AI-Powered Mental Health Research
            </div>

            <h1
              className="section-title mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Detecting{" "}
              <span className="text-gradient">Depression</span>{" "}
              Through Multimodal AI
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              <strong className="text-white">WellMind</strong> combines facial
              recognition, voice analysis, social media insights, and multimodal
              fusion to enable early, accurate depression detection—making
              mental healthcare proactive and accessible.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/project-scope" className="btn-primary inline-flex items-center gap-2">
                <span className="flex items-center gap-2">
                  Explore Research <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/download" className="btn-outline inline-flex items-center gap-2">
                Download App
              </Link>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["Machine Learning", "React Native", "Expo", "Flask", "Deep Learning", "NLP"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative flex justify-center animate-float">

            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl scale-110 pointer-events-none" />
            <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-2xl scale-125 pointer-events-none" />

            {/* Main image card */}
            <div className="relative w-full max-w-[560px] rounded-3xl overflow-hidden animate-glow"
              style={{ boxShadow: "0 0 80px rgba(99,102,241,0.25), 0 0 160px rgba(59,130,246,0.1)" }}>

              <Image
                src="/hero.png"
                alt="WellMind – Multimodal Depression Detection AI Visualization"
                width={560}
                height={560}
                className="w-full object-cover rounded-3xl"
                priority
              />

              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#050512]/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating badge — top left */}
              <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-blue-500/30">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-semibold">Face Scan Active</span>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute top-4 right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-violet-500/30">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-300 text-xs font-semibold">Voice Analysis</span>
              </div>

              {/* Floating score badge — bottom */}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
          <span>Scroll to explore</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-1">
                <Icon size={18} className="text-violet-400" />
              </div>
              <span
                className="text-4xl font-extrabold text-gradient"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {value}
              </span>
              <span className="text-slate-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPONENTS ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="section-badge mx-auto w-fit">
              <Layers size={12} /> Research Components
            </div>
            <h2 className="section-title text-gradient mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Four Pillars of Detection
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              WellMind integrates four specialized AI modules that work together to deliver comprehensive mental health assessment.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map(({ icon: Icon, color, glow, title, desc, tag }) => (
              <div
                key={title}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
                style={{ ["--glow-color" as string]: glow }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{tag}</span>
                <h3 className="font-bold text-white text-lg leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
                <Link href="/project-scope" className="text-violet-400 text-sm font-semibold hover:text-violet-300 flex items-center gap-1 mt-auto transition-colors">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-cyan-600/5 rounded-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="section-badge mx-auto w-fit">
              <Sparkles size={12} /> Available Now
            </div>
            <h2 className="section-title text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Try <span className="text-gradient">WellMind</span> Today
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Download our React Native app built with Expo and experience AI-powered mental health monitoring on your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/download" className="btn-primary inline-flex items-center gap-2">
                <span className="flex items-center gap-2">
                  Download the App <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/milestone" className="btn-outline inline-flex items-center gap-2">
                View Milestones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
