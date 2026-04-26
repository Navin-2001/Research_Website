"use client";
import { useState } from "react";
import { Calendar, Award, ChevronDown, ChevronUp, Milestone, Zap } from "lucide-react";

const milestones = [
  {
    title: "Project Proposal",
    date: "August 2024",
    marks: "5%",
    desc: "Initial project outline, problem statement, and scope definition for the WellMind depression detection system.",
    status: "Completed",
  },
  {
    title: "Progress Presentation-1",
    date: "November 2024",
    marks: "15%",
    desc: "Evaluation of the literature survey, detailed research gap analysis, and the initial architectural design.",
    status: "Completed",
  },
  {
    title: "Progress Presentation-2",
    date: "January 2025",
    marks: "15%",
    desc: "Review of unimodal model performance (Facial & Voice) and initial data fusion experiments.",
    status: "Completed",
  },
  {
    title: "Final Assessment",
    date: "May 2025",
    marks: "40%",
    desc: "Final integration of all 4 components, SHAP explainability implementation, and clinical validation results.",
    status: "In Progress",
  },
  {
    title: "Viva & Poster Session",
    date: "June 2025",
    marks: "25%",
    desc: "Oral examination and public presentation of the research findings and the WellMind mobile application.",
    status: "Pending",
  },
];

export default function MilestonesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">Project Timeline</div>
          <h1 className="section-title text-gradient mb-4" style={{ fontFamily: "'Outfit',sans-serif" }}>Milestones</h1>
          <p className="text-slate-400 text-lg">
            Track our research journey from the initial proposal to the final clinical validation.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-4">
          {milestones.map((m, i) => (
            <div key={m.title} className="glass rounded-2xl overflow-hidden border border-white/10 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                    m.status === "Completed" ? "bg-emerald-500/20 text-emerald-400" : 
                    m.status === "In Progress" ? "bg-blue-500/20 text-blue-400" : "bg-slate-500/20 text-slate-400"
                  }`}>
                    <Milestone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ fontFamily: "'Outfit',sans-serif" }}>{m.title}</h3>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{m.status}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-xs text-slate-400">{m.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold text-violet-400">Weightage</span>
                    <span className="text-white font-bold">{m.marks}</span>
                  </div>
                  {openIndex === i ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 pt-2 border-t border-white/5 animate-fade-in">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {m.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Calendar size={14} className="text-violet-400" />
                      <span className="text-xs text-slate-300">{m.date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Award size={14} className="text-emerald-400" />
                      <span className="text-xs text-slate-300">{m.marks} Allocated</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
