"use client";
import { useState } from "react";
import { Smartphone, Download, Star, Shield, Zap, Brain, Mic, Share2, Layers, ExternalLink, FileText, CheckCircle2, Clock, Presentation, Play } from "lucide-react";

type Section = "app" | "documents" | "presentations";

const features = [
  { icon: Brain,  label: "Facial Analysis",     desc: "Real-time emotion detection via your camera" },
  { icon: Mic,    label: "Voice Journal",        desc: "Speak your feelings; AI analyses your tone"  },
  { icon: Layers, label: "Fusion Score",         desc: "Unified depression risk score on your dashboard" },
  { icon: Share2, label: "Social Insights",     desc: "Behavioural patterns from your social activity" },
  { icon: Shield, label: "Privacy First",        desc: "On-device inference, zero raw data storage"  },
  { icon: Zap,    label: "Instant Feedback",    desc: "Real-time results in under 2 seconds"         },
];

const documents = [
  { title: "Project Proposal (Navin)", status: "Completed", link: "https://drive.google.com/drive/folders/1AonEkj14svgozxPJzhSE4npPwgjarQ7y?usp=sharing", type: "Proposal" },
  { title: "Project Proposal (Nipun)", status: "Completed", link: "https://drive.google.com/drive/folders/1Ni7rQkWiameYaADI9Fhy3-WgyEM9ss6G?usp=sharing", type: "Proposal" },
  { title: "Project Proposal (Nomin)", status: "Completed", link: "https://drive.google.com/drive/folders/1bc6eclagS02iuM2bzVt95jvOoppRcL0h?usp=sharing", type: "Proposal" },
  { title: "Project Proposal (Thilini)", status: "Completed", link: "https://drive.google.com/drive/folders/1BJy2a_KKnR6eK1-0rDcvsWWAoGEE9PHc?usp=sharing", type: "Proposal" },
  { title: "Check List Documents", status: "Completed", link: "https://drive.google.com/drive/folders/1u2MUQlQ4bX_Wuyfm_Et7E9d0-BoIgVJ5?usp=sharing", type: "Checklist" },
  { title: "Project Charter", status: "Completed", link: "#", type: "Charter" },
  { title: "Final Thesis Document", status: "Pending", link: "#", type: "Final" },
];

const slides = [
  { title: "Proposal Presentation", status: "Completed", link: "#", desc: "Initial project pitch covering the core idea, problem statement, and proposed architecture." },
  { title: "Progress Presentation-1", status: "Completed", link: "https://drive.google.com/drive/folders/1yc32aNLEwXCj5Ym270nUdBWuh6PPJVkW?usp=sharing", desc: "Focus on literature review findings, refined research gap, and methodology validation." },
  { title: "Progress Presentation-2", status: "Completed", link: "https://drive.google.com/drive/folders/1HJPgUHhKcsaFzAwofCX1Qbq6V8mjXfJ1?usp=sharing", desc: "Update on unimodal model development, data processing pipelines, and preliminary results." },
  { title: "Final Presentation", status: "Completed", link: "https://drive.google.com/drive/folders/1fu6ctUrEGHw1fJdBkXF3bEJeYO5-uvPx?usp=sharing", desc: "Complete system showcase, evaluation metrics, SHAP analysis, and final conclusion." },
];

export default function DownloadsPage() {
  const [active, setActive] = useState<Section>("app");

  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">
            <Download size={12} /> Downloads & Archive
          </div>
          <h1 className="section-title text-gradient mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Downloads
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Get the WellMind app, access formal project documentation, and view presentation slides.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-[#050512]/90 backdrop-blur-xl border-b border-white/8 px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActive("app")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              active === "app" ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "glass text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <Smartphone size={12} /> App Download
          </button>
          <button
            onClick={() => setActive("documents")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              active === "documents" ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30" : "glass text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <FileText size={12} /> Documents
          </button>
          <button
            onClick={() => setActive("presentations")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              active === "presentations" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" : "glass text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <Presentation size={12} /> Presentations
          </button>
        </div>
      </div>

      {/* Content Panels */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* App Download */}
        {active === "app" && (
          <div className="animate-fade-in">
            {/* Download Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Android */}
              <div className="glass glass-hover rounded-2xl p-8 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Smartphone size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Android</h2>
                  <p className="text-slate-400 text-sm">Android 8.0+ required · APK via Expo · ~48 MB</p>
                </div>
                <div className="w-full space-y-3">
                  <a href="#" className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl">
                    <span className="flex items-center gap-2"><Download size={16} /> Download APK</span>
                  </a>
                  <a href="#" className="btn-outline w-full flex items-center justify-center gap-2 py-3 rounded-xl">
                    <ExternalLink size={15} /> Google Play Store
                  </a>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400" />)}
                  <span className="text-slate-400 ml-1 text-xs">4.8 / 5 (Beta)</span>
                </div>
              </div>

              {/* iOS */}
              <div className="glass glass-hover rounded-2xl p-8 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Smartphone size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>iOS</h2>
                  <p className="text-slate-400 text-sm">iOS 14.0+ required · Expo Go or TestFlight · ~52 MB</p>
                </div>
                <div className="w-full space-y-3">
                  <a href="#" className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl">
                    <span className="flex items-center gap-2"><Download size={16} /> Download via Expo</span>
                  </a>
                  <a href="#" className="btn-outline w-full flex items-center justify-center gap-2 py-3 rounded-xl">
                    <ExternalLink size={15} /> TestFlight Beta
                  </a>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400" />)}
                  <span className="text-slate-400 ml-1 text-xs">4.7 / 5 (Beta)</span>
                </div>
              </div>
            </div>

            {/* Expo Go QR Placeholder */}
            <div className="max-w-md mx-auto glass rounded-2xl p-8 text-center mb-16">
              <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Launch with Expo Go</h3>
              <p className="text-slate-400 text-sm mb-6">Scan the QR code in the Expo Go app (Android / iOS) to launch WellMind instantly.</p>
              <div className="w-40 h-40 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-600 text-xs">QR Code Coming Soon</div>
              <p className="text-slate-500 text-xs mt-4">Available once published to Expo EAS</p>
            </div>

            {/* App Features */}
            <div className="max-w-5xl mx-auto">
              <h2 className="section-title text-center text-gradient mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>App Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="glass glass-hover rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-violet-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{label}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Documents */}
        {active === "documents" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <div key={doc.title} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center shadow-lg">
                      <FileText size={24} className="text-white" />
                    </div>
                    {doc.status === "Completed" ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CheckCircle2 size={12} /> {doc.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Clock size={12} /> {doc.status}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{doc.type}</span>
                    <h3 className="text-white font-bold text-lg mt-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.title}</h3>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-3">
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        doc.link === "#" ? "bg-white/5 text-slate-600 cursor-not-allowed" : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      <ExternalLink size={14} /> View Document
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Presentations */}
        {active === "presentations" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {slides.map((s) => (
                <div key={s.title} className="glass glass-hover rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Presentation size={120} />
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-xl">
                      <Play size={28} className="text-white fill-current" />
                    </div>
                    {s.status === "Completed" ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CheckCircle2 size={14} /> {s.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Clock size={14} /> {s.status}
                      </span>
                    )}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                  </div>
                  <div className="mt-auto relative z-10">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-sm font-bold transition-all ${
                        s.link === "#" ? "bg-white/5 text-slate-600 cursor-not-allowed" : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-teal-500/20"
                      }`}
                    >
                      <ExternalLink size={18} /> View Slides
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
