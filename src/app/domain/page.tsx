"use client";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Lightbulb, FlaskConical, BookOpen, ChevronDown, ChevronUp, Brain, Mic, Layers, Share2 } from "lucide-react";

type Section = "survey" | "gap" | "problem" | "objectives" | "methodology" | "technologies";

const sections: { id: Section; label: string; icon: typeof BookOpen }[] = [
  { id: "survey",      label: "Literature Survey",    icon: BookOpen     },
  { id: "gap",         label: "Research Gap",          icon: AlertCircle  },
  { id: "problem",     label: "Research Problem",      icon: Lightbulb    },
  { id: "objectives",  label: "Research Objectives",   icon: CheckCircle2 },
  { id: "methodology", label: "Methodology",           icon: FlaskConical },
  { id: "technologies",label: "Technologies Used",     icon: Layers       },
];

const litSurvey = [
  { domain: "Facial Expression", color: "from-blue-500 to-cyan-400", icon: Brain, papers: [
    "Ekman's FACS model for Action Unit-based emotion coding (1978)",
    "FER-2013 & AffectNet CNN benchmarks — Mollahosseini et al. (2017)",
    "Deep face pipeline achieving 97.35% accuracy on LFW dataset",
    "Real-time affect recognition with MediaPipe facial landmarks (Google, 2020)",
  ]},
  { domain: "Voice & Speech", color: "from-violet-500 to-purple-400", icon: Mic, papers: [
    "MFCC feature extraction for depression biomarkers — Cummins et al. (2015)",
    "DAIC-WOZ dataset: 189 clinical interviews labelled with PHQ-8",
    "LSTM prosody modelling for mood classification — Williamson et al. (2016)",
    "Spectral entropy as a vocal biomarker of anhedonia — Mundt et al.",
  ]},
  { domain: "Multimodal Fusion", color: "from-emerald-500 to-teal-400", icon: Layers, papers: [
    "Late fusion vs. feature-level fusion comparison — Poria et al. (2017)",
    "Attention-based multimodal transformer for affect (MISA) — Hazarika et al.",
    "AVEC 2019: AV+text fusion surpassing unimodal baselines",
    "SHAP for explainable mental health AI — Lundberg & Lee (2017)",
  ]},
  { domain: "Social Media NLP", color: "from-rose-500 to-pink-400", icon: Share2, papers: [
    "CLPsych shared task: Twitter depression detection (2015)",
    "BERT fine-tuned on Reddit r/depression posts",
    "Posting-frequency anomaly detection — De Choudhury et al. (2013)",
    "Ethical NLP framework for mental health data — Chancellor et al. (2019)",
  ]},
];

const gaps = [
  { g: "G1", text: "Existing systems rely on a single modality (face OR voice), reducing robustness in noisy real-world conditions." },
  { g: "G2", text: "No publicly available end-to-end mobile pipeline integrating facial, audio, and social signals simultaneously." },
  { g: "G3", text: "Most clinical tools (PHQ-9) are self-reported — susceptible to under-reporting and recall bias." },
  { g: "G4", text: "Current multimodal models lack explainability, limiting clinical trust and adoption." },
  { g: "G5", text: "Existing datasets are predominantly English-speaking Western populations, limiting cross-cultural generalisability." },
];

const objectives = [
  "Develop a real-time CNN model for 7-class facial emotion classification with ≥ 90% accuracy.",
  "Build an LSTM-based vocal biomarker extractor using MFCC features from speech samples.",
  "Design a BERT-based social media sentiment classifier fine-tuned on mental health corpora.",
  "Implement an attention-based multimodal fusion model that outperforms any single modality.",
  "Validate the fused score against PHQ-9 clinical benchmarks with AUC-ROC ≥ 0.90.",
  "Deploy the complete system as a cross-platform mobile app (React Native / Expo).",
  "Ensure SHAP-based explainability so clinical stakeholders can interpret model decisions.",
];

const methodologySteps = [
  { n:"01", title:"Data Collection",      desc:"Collect labelled video, audio, and social-media data from 1,000+ participants under ethics clearance. Annotate using PHQ-9 clinical scale." },
  { n:"02", title:"Preprocessing",        desc:"Face alignment & normalisation; audio denoising & segmentation (16 kHz WAV); text tokenisation & anonymisation for social content." },
  { n:"03", title:"Unimodal Modelling",   desc:"Train CNN (facial), LSTM (voice), and BERT (social) models independently. Validate on stratified held-out test splits." },
  { n:"04", title:"Multimodal Fusion",    desc:"Combine unimodal embeddings via cross-attention transformer. Optimise with weighted focal loss to handle class imbalance." },
  { n:"05", title:"Clinical Validation",  desc:"Benchmark against PHQ-9 with 200 clinical participants. Compute precision, recall, F1, and AUC-ROC." },
  { n:"06", title:"Deployment",           desc:"Export models to TFLite & ONNX for on-device inference. Ship via React Native / Expo on Android & iOS, backed by Firebase." },
];

const techStack = [
  { cat: "Mobile App",      color: "border-blue-500/40 bg-blue-500/8",    items: ["React Native","Expo","TypeScript","React Navigation"] },
  { cat: "ML / AI Models",  color: "border-violet-500/40 bg-violet-500/8", items: ["TensorFlow / TFLite","PyTorch","HuggingFace Transformers","Scikit-learn","OpenCV","MediaPipe","librosa"] },
  { cat: "Backend APIs",    color: "border-emerald-500/40 bg-emerald-500/8",items: ["Flask","FastAPI","Docker","REST API","SHAP","XGBoost"] },
  { cat: "Database",        color: "border-orange-500/40 bg-orange-500/8", items: ["Firebase Firestore","Firebase Auth","Firebase Storage","Cloud Functions"] },
  { cat: "Research Tools",  color: "border-pink-500/40 bg-pink-500/8",     items: ["PHQ-9 Scale","DAIC-WOZ","AffectNet","FER-2013","NLTK","MFCC"] },
  { cat: "DevOps / Other",  color: "border-cyan-500/40 bg-cyan-500/8",     items: ["GitHub","Vercel","Next.js (Website)","Google Fonts","Tailwind CSS"] },
];

export default function DomainPage() {
  const [active, setActive] = useState<Section>("survey");

  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">Research Domain</div>
          <h1 className="section-title text-gradient mb-4" style={{ fontFamily:"'Outfit',sans-serif" }}>Domain</h1>
          <p className="text-slate-400 text-lg">
            Detailed domain analysis covering literature, research gap, problem statement, objectives, methodology, and technologies.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-[#050512]/90 backdrop-blur-xl border-b border-white/8 px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                active === id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "glass text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              <Icon size={12} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Panels */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Literature Survey */}
        {active === "survey" && (
          <div>
            <div className="section-badge w-fit mb-4"><BookOpen size={12}/>Literature Survey</div>
            <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Literature Survey</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">Key prior work that informs WellMind&apos;s methodology across all four research domains.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {litSurvey.map(l => {
                const Icon = l.icon;
                return (
                  <div key={l.domain} className="glass glass-hover rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${l.color} flex items-center justify-center`}><Icon size={16} className="text-white"/></div>
                      <span className="font-bold text-white">{l.domain}</span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {l.papers.map(p => (
                        <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0"/>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Research Gap */}
        {active === "gap" && (
          <div>
            <div className="section-badge w-fit mb-4"><AlertCircle size={12}/>Research Gap</div>
            <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Research Gap</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">Critical limitations in existing depression detection research that WellMind directly addresses.</p>
            <div className="flex flex-col gap-4">
              {gaps.map(({ g, text }) => (
                <div key={g} className="glass glass-hover rounded-xl p-5 flex items-start gap-4">
                  <span className="w-9 h-9 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs shrink-0">{g}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Problem */}
        {active === "problem" && (
          <div>
            <div className="section-badge w-fit mb-4"><Lightbulb size={12}/>Research Problem</div>
            <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Research Problem &amp; Solution</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">How WellMind directly addresses the core challenges in real-world depression screening.</p>
            <div className="flex flex-col gap-5">
              {[
                { problem:"Depression is under-detected until crisis point", solution:"Passive, continuous monitoring via smartphone sensors and social activity" },
                { problem:"Single-modal AI is unreliable in diverse real-world conditions", solution:"Attention-based fusion of 4 independent modalities improves robustness and accuracy" },
                { problem:"Clinicians cannot interpret black-box AI scores", solution:"SHAP explainability layer provides per-feature contribution reports" },
                { problem:"No affordable, accessible screening tool exists for developing nations", solution:"Free React Native app with on-device TFLite inference for privacy" },
              ].map((ps, i) => (
                <div key={i} className="glass rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5"><AlertCircle size={14}/></span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-1">Problem</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{ps.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5"><CheckCircle2 size={14}/></span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Solution</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{ps.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Objectives */}
        {active === "objectives" && (
          <div>
            <div className="section-badge w-fit mb-4"><CheckCircle2 size={12}/>Research Objectives</div>
            <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Research Objectives</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">Specific, measurable goals that define the scope and success criteria of WellMind.</p>
            <div className="flex flex-col gap-3">
              {objectives.map((obj, i) => (
                <div key={i} className="glass glass-hover rounded-xl p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold text-xs shrink-0">{String(i+1).padStart(2,"0")}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Methodology */}
        {active === "methodology" && (
          <div>
            <div className="section-badge w-fit mb-4"><FlaskConical size={12}/>Methodology</div>
            <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Methodology</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">A six-phase research process from data collection through clinical validation and deployment.</p>

            {/* System Architecture Image */}
            <div className="glass rounded-2xl p-4 mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 text-center">System Architecture Diagram</p>
              <img src="/system-architecture.png" alt="WellMind System Architecture" className="w-full rounded-xl object-contain" style={{ maxHeight:"560px" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {methodologySteps.map(s => (
                <div key={s.n} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3">
                  <span className="text-4xl font-black text-gradient opacity-50" style={{ fontFamily:"'Outfit',sans-serif" }}>{s.n}</span>
                  <h3 className="text-white font-bold" style={{ fontFamily:"'Outfit',sans-serif" }}>{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Used */}
        {active === "technologies" && (
          <div>
            <div className="section-badge w-fit mb-4"><Layers size={12}/>Technologies</div>
            <h2 className="section-title text-gradient mb-3" style={{ fontFamily:"'Outfit',sans-serif" }}>Technologies Used</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">The complete technology stack powering WellMind across mobile, AI, backend, and database layers.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {techStack.map(({ cat, color, items }) => (
                <div key={cat} className={`glass rounded-2xl p-5 border ${color}`}>
                  <h3 className="text-white font-bold text-sm mb-4" style={{ fontFamily:"'Outfit',sans-serif" }}>{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/6 border border-white/10 text-slate-300">{item}</span>
                    ))}
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
