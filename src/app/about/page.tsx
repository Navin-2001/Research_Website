import Image from "next/image";
import { Github, Linkedin, Mail, Users, Share2, Brain, Layers, Mic } from "lucide-react";

interface Member {
  name: string;
  id: string;
  role: string;
  component: string;
  specialty: string;
  photo: string;
  color: string;
  icon: React.ElementType;
  iconColor: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: Member[] = [
  {
    name: "Navin Dissanayake",
    id: "IT22361240",
    role: "Project Lead & Researcher",
    component: "Social Media App Behavior Checking & Analysis",
    specialty: "Behavioral AI · Sentiment Analysis · React Native · Flask",
    photo: "/navin.png",
    color: "from-rose-500 to-pink-400",
    icon: Share2,
    iconColor: "text-rose-400",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "navin@wellmind.lk",
  },
  {
    name: "Nomin Danindu",
    id: "IT22345882",
    role: "ML Engineer",
    component: "Facial Expression Detection",
    specialty: "CNN · TensorFlow · OpenCV · MediaPipe",
    photo: "/nomin.jpeg",
    color: "from-blue-500 to-cyan-400",
    icon: Brain,
    iconColor: "text-blue-400",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nipun Shakthi",
    id: "IT22352408",
    role: "ML Engineer",
    component: "Multimodal Fusion & Scoring",
    specialty: "XGBoost · Attention Mechanism · SHAP · Scikit-learn",
    photo: "/nipun.png",
    color: "from-emerald-500 to-teal-400",
    icon: Layers,
    iconColor: "text-emerald-400",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dilakshi Thilini",
    id: "IT22310446",
    role: "ML Engineer",
    component: "Voice-Based Symptom Collection",
    specialty: "LSTM · librosa · MFCC · PyTorch · FastAPI",
    photo: "/thilini.png",
    color: "from-violet-500 to-purple-400",
    icon: Mic,
    iconColor: "text-violet-400",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

const journey = [
  { year: "2024",    event: "Research Proposal Approved by SLIIT" },
  { year: "Jan '25", event: "Project Kick-off & Team Formation"    },
  { year: "Mar '25", event: "Data Collection Phase Launched"       },
  { year: "Jun '25", event: "Individual ML Models Trained & Tested" },
  { year: "Ongoing", event: "Fusion Model & Mobile App Development" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-grid">

      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">
            <Users size={12} /> The Team
          </div>
          <h1 className="section-title text-gradient mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            About Us
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We are a multidisciplinary research team from{" "}
            <span className="text-white font-semibold">
              Sri Lanka Institute of Information Technology (SLIIT)
            </span>{" "}
            dedicated to advancing mental health technology through AI-driven innovation.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Values ───────────────────────── */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { label: "Mission", value: "Democratize early depression detection through accessible multimodal AI." },
            { label: "Vision",  value: "A world where mental health struggles are identified before they escalate." },
            { label: "Values",  value: "Privacy, transparency, clinical rigour, and compassionate technology." },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">{label}</span>
              <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team Cards ──────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="section-title text-center text-gradient mb-12"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Meet the Researchers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  className="glass glass-hover rounded-2xl overflow-hidden flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name} – ${m.role}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a20] via-transparent to-transparent" />

                    {/* Component badge */}
                    <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg`}>
                      <Icon size={15} className="text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div>
                      <h3
                        className="text-white font-bold text-base leading-tight"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {m.name}
                      </h3>
                      <p className="text-slate-500 text-xs font-mono mt-0.5">{m.id}</p>
                    </div>

                    {/* Role tag */}
                    <span className={`w-fit text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${m.color} bg-opacity-20 text-white`}
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      {m.role}
                    </span>

                    {/* Component */}
                    <div className="flex items-start gap-2">
                      <Icon size={13} className={`${m.iconColor} mt-0.5 shrink-0`} />
                      <p className="text-slate-300 text-xs leading-relaxed font-medium">{m.component}</p>
                    </div>

                    {/* Specialty tags */}
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {m.specialty.split(" · ").map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/5 border border-white/8 text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/8">
                      {m.github && (
                        <a
                          href={m.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                          aria-label={`${m.name} GitHub`}
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                          aria-label={`${m.name} LinkedIn`}
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                          aria-label={`${m.name} Email`}
                        >
                          <Mail size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Component Ownership Summary ─────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8">
          <h3
            className="text-white font-bold text-xl mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Component Ownership
          </h3>
          <div className="flex flex-col divide-y divide-white/8">
            {teamMembers.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.id} className="py-4 flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{m.component}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{m.specialty}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-slate-200 text-sm font-medium">{m.name}</p>
                    <p className="text-slate-500 text-xs font-mono">{m.id}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Project Journey ──────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="section-title text-center text-gradient mb-10"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Our Journey
          </h2>
          <div className="flex flex-col gap-6">
            {journey.map(({ year, event }, i) => (
              <div key={year} className="flex items-center gap-5">
                <div className="w-20 text-right text-xs font-bold text-violet-400 shrink-0">{year}</div>
                <div className="relative flex items-center justify-center shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i === journey.length - 1
                        ? "bg-blue-400 animate-pulse"
                        : "bg-violet-500"
                    }`}
                  />
                </div>
                <div className="glass rounded-xl px-4 py-2.5 flex-1">
                  <p className="text-slate-300 text-sm">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supervisors ──────────────────────────────────────── */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs uppercase tracking-widest text-center mb-6">
            Research Supervisors
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Supervisor 1 */}
            <div className="glass rounded-2xl p-6 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/20">
                ID
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">Supervisor</p>
                <h3
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Mr. Indunil Daluwatte
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Department of Computer Science &amp; Software Engineering
                </p>
                <p className="text-violet-400 text-sm font-medium mt-0.5">SLIIT</p>
              </div>
            </div>

            {/* Supervisor 2 */}
            <div className="glass rounded-2xl p-6 text-center flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/20">
                DJ
              </div>
              <div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">Co-Supervisor</p>
                <h3
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Ms. Dulani Jayasinghe
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Department of Computer Science &amp; Software Engineering
                </p>
                <p className="text-violet-400 text-sm font-medium mt-0.5">SLIIT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
