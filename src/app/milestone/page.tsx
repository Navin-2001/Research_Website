import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

type Status = "completed" | "in-progress" | "upcoming";

const milestones: {
  phase: string;
  date: string;
  status: Status;
  title: string;
  deliverables: string[];
}[] = [
  {
    phase: "Phase 1",
    date: "January 2025",
    status: "completed",
    title: "Project Initiation & Literature Review",
    deliverables: [
      "Research proposal approved",
      "Literature review on depression detection AI",
      "Dataset identification (AffectNet, DAIC-WOZ, CLEF 2022)",
      "Project plan and ethical clearance submission",
    ],
  },
  {
    phase: "Phase 2",
    date: "March 2025",
    status: "completed",
    title: "Data Collection & Preprocessing",
    deliverables: [
      "Participant consent and data collection protocol",
      "Facial dataset annotation pipeline",
      "Audio preprocessing pipeline (noise reduction, segmentation)",
      "Social media data scraping module (anonymized)",
    ],
  },
  {
    phase: "Phase 3",
    date: "June 2025",
    status: "completed",
    title: "Individual Model Development",
    deliverables: [
      "CNN facial emotion recognition model (AUC 0.91)",
      "LSTM voice biomarker extraction model",
      "BERT-based social media sentiment classifier",
      "Initial unit testing of all three modules",
    ],
  },
  {
    phase: "Phase 4",
    date: "August 2025",
    status: "in-progress",
    title: "Multimodal Fusion & Mobile App",
    deliverables: [
      "Attention-based fusion architecture implementation",
      "React Native / Expo mobile app (iOS & Android)",
      "Flask & FastAPI backend integration",
      "End-to-end pipeline testing",
    ],
  },
  {
    phase: "Phase 5",
    date: "October 2025",
    status: "upcoming",
    title: "Clinical Validation & User Study",
    deliverables: [
      "PHQ-9 benchmark validation with 200 participants",
      "Clinician feedback sessions",
      "Model fine-tuning based on real-world data",
      "Performance report: precision, recall, F1",
    ],
  },
  {
    phase: "Phase 6",
    date: "December 2025",
    status: "upcoming",
    title: "Publication & Public Release",
    deliverables: [
      "Research paper submission to IEEE conference",
      "Open-source model weights on HuggingFace Hub",
      "WellMind app published on Play Store & App Store",
      "Final project presentation & defence",
    ],
  },
];

const statusConfig: Record<Status, { icon: typeof CheckCircle2; color: string; badge: string; dot: string }> = {
  completed:   { icon: CheckCircle2, color: "text-emerald-400", badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", dot: "bg-emerald-400" },
  "in-progress": { icon: Clock,      color: "text-blue-400",    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",         dot: "bg-blue-400 animate-pulse" },
  upcoming:    { icon: AlertCircle,  color: "text-slate-500",   badge: "bg-slate-500/15 text-slate-400 border-slate-500/30",      dot: "bg-slate-600" },
};

export default function MilestonePage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">Project Timeline</div>
          <h1 className="section-title text-gradient mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Research Milestones
          </h1>
          <p className="text-slate-400 text-lg">
            Track our progress across six research phases — from ideation to clinical validation and public release.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mt-10">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Overall Progress</span>
            <span>50% Complete</span>
          </div>
          <div className="h-2 rounded-full bg-white/8 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
              style={{ width: "50%" }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs text-slate-500">
            {["Jan '25", "Mar '25", "Jun '25", "Aug '25", "Oct '25", "Dec '25"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line opacity-30" />

          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => {
              const cfg = statusConfig[m.status];
              const Icon = cfg.icon;
              const isRight = i % 2 === 0;

              return (
                <div
                  key={m.phase}
                  className={`relative flex gap-8 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:items-center`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-dark-900 shadow-lg z-10"
                    style={{ background: m.status === "completed" ? "#34d399" : m.status === "in-progress" ? "#60a5fa" : "#334155" }}
                  />

                  {/* Card (takes half width on md) */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass glass-hover rounded-2xl p-6 ${isRight ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{m.phase}</span>
                      <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.badge}`}>
                        <Icon size={11} />
                        {m.status === "in-progress" ? "In Progress" : m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">{m.date}</p>
                    <h3 className="text-white font-bold text-base mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {m.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {m.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2
                            size={13}
                            className={`shrink-0 mt-0.5 ${m.status === "completed" ? "text-emerald-400" : "text-slate-600"}`}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
