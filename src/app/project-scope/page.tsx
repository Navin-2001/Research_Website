"use client";
import { Brain, Mic, Layers, Share2, Target, Database, BarChart3, Shield, CheckCircle2, AlertCircle, Lightbulb, FlaskConical, BookOpen, ArrowRight, ArrowDown } from "lucide-react";

/* ── Literature Survey ───────────────────────── */
const litSurvey = [
  { domain: "Facial Expression", color: "from-blue-500 to-cyan-400", papers: ["Ekman's FACS model for AU-based emotion coding", "FER-2013 & AffectNet CNN benchmarks (Mollahosseini et al.)", "Deep-face pipeline achieving 97.35% on LFW dataset", "Real-time affect recognition with MediaPipe landmarks"] },
  { domain: "Voice & Speech", color: "from-violet-500 to-purple-400", papers: ["MFCC feature extraction for depression biomarkers (Cummins et al.)", "DAIC-WOZ dataset: 189 clinical interviews labelled with PHQ-8", "LSTM prosody modelling for mood classification", "Spectral entropy as vocal biomarker of anhedonia"] },
  { domain: "Multimodal Fusion", color: "from-emerald-500 to-teal-400", papers: ["Late fusion vs. feature-level fusion comparison (Poria et al.)", "Attention-based multimodal transformer for affect (MISA)", "AVEC 2019: AV+text fusion surpassing unimodal baselines", "SHAP for explainable mental health AI (Lundberg & Lee)"] },
  { domain: "Social Media NLP", color: "from-rose-500 to-pink-400", papers: ["CLPsych shared task: Twitter depression detection", "BERT fine-tuned on Reddit r/depression posts", "Posting-frequency anomaly detection (De Choudhury et al.)", "Ethical NLP framework for mental health data (Chancellor et al.)"] },
];

/* ── Research Gap ────────────────────────────── */
const gaps = [
  "Existing systems rely on a single modality (face OR voice), reducing robustness in noisy real-world conditions.",
  "No publicly available end-to-end mobile pipeline that integrates facial, audio, and social signals simultaneously.",
  "Most clinical tools (PHQ-9) are self-reported — susceptible to under-reporting and recall bias.",
  "Current multimodal models lack explainability, limiting clinical trust and adoption.",
  "Datasets used are predominantly English-speaking Western populations, limiting cross-cultural generalisability.",
];

/* ── Problem & Solution ──────────────────────── */
const problems = [
  { problem: "Depression is under-detected until crisis point", solution: "Passive, continuous monitoring via smartphone sensors and social activity" },
  { problem: "Single-modal AI is unreliable in diverse conditions", solution: "Attention-based fusion of 4 independent modalities improves accuracy" },
  { problem: "Clinicians cannot interpret black-box AI scores", solution: "SHAP explainability layer provides per-feature contribution report" },
  { problem: "No affordable accessible screening tool exists", solution: "Free React Native app with on-device inference for privacy" },
];

/* ── Methodology steps ───────────────────────── */
const steps = [
  { n: "01", title: "Data Collection", desc: "Collect labelled video, audio, and social-media data from 1,000+ participants under IRB ethics clearance. Annotate using PHQ-9 clinical scale." },
  { n: "02", title: "Preprocessing", desc: "Face alignment & normalisation; audio denoising & segmentation; text tokenisation & anonymisation for social media content." },
  { n: "03", title: "Unimodal Modelling", desc: "Train CNN (facial), LSTM (voice) and BERT (social) models independently, validate on held-out test splits." },
  { n: "04", title: "Multimodal Fusion", desc: "Combine unimodal embeddings via cross-attention transformer. Optimise using weighted focal loss to handle class imbalance." },
  { n: "05", title: "Clinical Validation", desc: "Benchmark against PHQ-9 scores with 200 clinical participants. Compute precision, recall, F1, AUC-ROC." },
  { n: "06", title: "Deployment", desc: "Export models to TFLite & ONNX for on-device inference. Ship via React Native / Expo app on Android & iOS." },
];

/* ── System Architecture nodes ───────────────── */
type ArchItem = { icon: string; name: string; color: string; wide?: boolean };
type ArchRow  = { label: string; items: ArchItem[] };

const archRows: ArchRow[] = [
  { label: "INPUT SOURCES",     items: [{ icon: "📷", name: "Camera",                                           color: "#3b82f6" }, { icon: "🎙️", name: "Microphone",       color: "#8b5cf6" }, { icon: "📱", name: "Social API",          color: "#ec4899" }] },
  { label: "PROCESSING MODELS", items: [{ icon: "🧠", name: "CNN Facial Model",                                 color: "#3b82f6" }, { icon: "🎵", name: "LSTM Audio Model",  color: "#8b5cf6" }, { icon: "💬", name: "BERT Social NLP",     color: "#ec4899" }] },
  { label: "FUSION LAYER",      items: [{ icon: "⚡", name: "Attention-Based Multimodal Fusion Engine",         color: "#10b981", wide: true }] },
  { label: "OUTPUT",            items: [{ icon: "📊", name: "Depression Risk Score (0–100) + SHAP Report",      color: "#f59e0b", wide: true }] },
  { label: "DELIVERY",          items: [{ icon: "📲", name: "WellMind Mobile App",                              color: "#06b6d4" }, { icon: "🏥", name: "Clinician Dashboard", color: "#06b6d4" }] },
];


export default function ProjectScopePage() {
  return (
    <div className="min-h-screen bg-grid">

      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">Research Overview</div>
          <h1 className="section-title text-gradient mb-5" style={{ fontFamily: "'Outfit',sans-serif" }}>Project Scope</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            WellMind pioneers a multimodal AI system for early depression detection — integrating computer vision, speech processing, NLP, and behavioural analytics.
          </p>
        </div>
      </section>

      {/* Nav pills */}
      <div className="flex flex-wrap justify-center gap-2 px-6 pb-12">
        {["Literature Survey","Research Gap","Problem & Solution","Methodology","System Diagram","Components"].map(s => (
          <a key={s} href={`#${s.toLowerCase().replace(/ /g,"-").replace("&","-")}`}
            className="px-4 py-1.5 rounded-full text-xs font-semibold glass border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-all">
            {s}
          </a>
        ))}
      </div>

      {/* ── LITERATURE SURVEY ─────────────────── */}
      <section id="literature-survey" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-badge w-fit mb-4"><BookOpen size={12}/>Literature Survey</div>
          <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Literature Survey</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">Key prior work that informs WellMind's methodology across all four research domains.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {litSurvey.map(l => (
              <div key={l.domain} className="glass glass-hover rounded-2xl p-6">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${l.color} text-white`}>{l.domain}</div>
                <ul className="flex flex-col gap-2.5">
                  {l.papers.map(p => (
                    <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0"/>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH GAP ──────────────────────── */}
      <section id="research-gap" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-badge w-fit mb-4"><AlertCircle size={12}/>Research Gap</div>
          <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Research Gap</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">Critical limitations identified across existing depression detection literature that WellMind addresses.</p>
          <div className="flex flex-col gap-4">
            {gaps.map((g, i) => (
              <div key={i} className="glass glass-hover rounded-xl p-5 flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs shrink-0">G{i+1}</span>
                <p className="text-slate-300 text-sm leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH PROBLEM & SOLUTION ───────── */}
      <section id="problem---solution" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-badge w-fit mb-4"><Lightbulb size={12}/>Problem & Solution</div>
          <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Research Problem &amp; Solution</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">How WellMind directly addresses the core challenges in real-world depression screening.</p>
          <div className="grid grid-cols-1 gap-5">
            {problems.map((ps, i) => (
              <div key={i} className="glass rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                    <AlertCircle size={14}/>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1">Problem</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{ps.problem}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={14}/>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Solution</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{ps.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ───────────────────────── */}
      <section id="methodology" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-badge w-fit mb-4"><FlaskConical size={12}/>Methodology</div>
          <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Methodology</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">A six-phase research methodology from data collection through to clinical validation and deployment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(s => (
              <div key={s.n} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3">
                <span className="text-4xl font-black text-gradient opacity-60" style={{ fontFamily:"'Outfit',sans-serif" }}>{s.n}</span>
                <h3 className="text-white font-bold text-base" style={{ fontFamily:"'Outfit',sans-serif" }}>{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM ARCHITECTURE DIAGRAM ───────── */}
      <section id="system-diagram" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-badge w-fit mb-4"><Layers size={12}/>System Diagram</div>
          <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>System Architecture</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">End-to-end pipeline showing data flow from raw user inputs through ML models to the final depression risk score.</p>

          <div className="glass rounded-3xl p-8 flex flex-col items-center gap-0">
            {archRows.map((row, ri) => (
              <div key={row.label} className="w-full flex flex-col items-center">
                {/* Row label */}
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">{row.label}</p>
                {/* Nodes */}
                <div className={`flex flex-wrap justify-center gap-3 w-full ${row.items[0]?.wide ? "max-w-lg" : ""}`}>
                  {row.items.map(item => (
                    <div key={item.name}
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold transition-all hover:scale-105 ${item.wide ? "w-full justify-center text-base" : ""}`}
                      style={{ borderColor: item.color+"55", background: item.color+"18", color: item.color }}>
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
                {/* Arrow */}
                {ri < archRows.length - 1 && (
                  <div className="flex flex-col items-center my-3 text-slate-600">
                    <div className="w-px h-6 bg-gradient-to-b from-slate-600 to-slate-500"/>
                    <ArrowDown size={14}/>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {[["#3b82f6","Facial Module"],["#8b5cf6","Voice Module"],["#ec4899","Social Module"],["#10b981","Fusion Layer"],["#f59e0b","Risk Output"],["#06b6d4","Delivery"]].map(([c,l])=>(
              <div key={l as string} className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-3 h-3 rounded-full" style={{ background: c as string }}/>
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPONENTS ────────────────────────── */}
      <section id="components" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-badge w-fit mb-4"><Target size={12}/>Components</div>
          <h2 className="section-title text-gradient mb-10" style={{ fontFamily:"'Outfit',sans-serif" }}>Research Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id:"01", icon:Brain, color:"from-blue-500 to-cyan-400", title:"Facial Expression Detection", overview:"CNN trained on AffectNet & FER-2013 classifies 7 core emotions in real-time video frames using MediaPipe landmarks.", objectives:["Real-time facial landmark detection","7-class emotion classification","Temporal mood tracking","On-device inference"], tech:["TensorFlow","OpenCV","MediaPipe","CNN","AffectNet"] },
              { id:"02", icon:Mic, color:"from-violet-500 to-purple-400", title:"Voice-Based Symptom Collection", overview:"Extracts MFCCs, pitch, energy and speaking rate to identify vocal biomarkers linked to depression and anxiety.", objectives:["MFCC & spectrogram extraction","Guided voice journaling","Flat affect & slow speech detection","LSTM sequential modelling"], tech:["librosa","PyTorch","LSTM","MFCC","FastAPI"] },
              { id:"03", icon:Layers, color:"from-emerald-500 to-teal-400", title:"Multimodal Fusion & Scoring", overview:"Attention-based ensemble fuses facial, audio and social signals into a single explainable depression risk score.", objectives:["Feature & decision-level fusion","Dynamic attention weighting","SHAP explainability","Confidence-calibrated score"], tech:["XGBoost","Random Forest","SHAP","Attention","Scikit-learn"] },
              { id:"04", icon:Share2, color:"from-rose-500 to-pink-400", title:"Social Media Behavior Analysis", overview:"BERT-based sentiment analysis and activity pattern detection uncover linguistic and behavioural markers of depression.", objectives:["BERT sentiment analysis","Anomaly detection on posting patterns","Linguistic marker extraction","Privacy-first OAuth access"], tech:["BERT","HuggingFace","NLTK","Graph Analysis","OAuth2"] },
            ].map(({id,icon:Icon,color,title,overview,objectives,tech}) => (
              <div key={id} className="glass glass-hover rounded-2xl p-7">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}><Icon size={22} className="text-white"/></div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Component {id}</span>
                    <h3 className="text-white font-bold text-base mt-1" style={{ fontFamily:"'Outfit',sans-serif" }}>{title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{overview}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Objectives</p>
                    <ul className="flex flex-col gap-1.5">
                      {objectives.map(o=>(
                        <li key={o} className="flex items-start gap-1.5 text-xs text-slate-400">
                          <CheckCircle2 size={11} className="text-emerald-400 shrink-0 mt-0.5"/>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {tech.map(t=>(
                        <span key={t} className="px-2 py-0.5 rounded-full text-[10px] bg-white/6 border border-white/10 text-slate-300">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 text-center">
        <a href="/milestone" className="btn-primary inline-flex items-center gap-2">
          <span className="flex items-center gap-2">View Project Milestones <ArrowRight size={16}/></span>
        </a>
      </section>
    </div>
  );
}
