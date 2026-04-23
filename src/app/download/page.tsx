import { Smartphone, Download, Star, Shield, Zap, Brain, Mic, Share2, Layers, ExternalLink } from "lucide-react";

const features = [
  { icon: Brain,  label: "Facial Analysis",     desc: "Real-time emotion detection via your camera" },
  { icon: Mic,    label: "Voice Journal",        desc: "Speak your feelings; AI analyses your tone"  },
  { icon: Layers, label: "Fusion Score",         desc: "Unified depression risk score on your dashboard" },
  { icon: Share2, label: "Social Insights",     desc: "Behavioural patterns from your social activity" },
  { icon: Shield, label: "Privacy First",        desc: "On-device inference, zero raw data storage"  },
  { icon: Zap,    label: "Instant Feedback",    desc: "Real-time results in under 2 seconds"         },
];

const techStack = [
  "React Native",
  "Expo",
  "Flask",
  "FastAPI",
  "TensorFlow Lite",
  "PyTorch Mobile",
  "BERT",
  "OAuth 2.0",
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">
            <Download size={12} /> Available on Mobile
          </div>
          <h1 className="section-title text-gradient mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Download WellMind
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Get the WellMind app on your Android or iOS device. Built with React Native & Expo for a smooth, cross-platform experience.
          </p>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <a
                href="#"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} /> Download APK
                </span>
              </a>
              <a
                href="#"
                className="btn-outline w-full flex items-center justify-center gap-2 py-3 rounded-xl"
              >
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
              <a
                href="#"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} /> Download via Expo
                </span>
              </a>
              <a
                href="#"
                className="btn-outline w-full flex items-center justify-center gap-2 py-3 rounded-xl"
              >
                <ExternalLink size={15} /> TestFlight Beta
              </a>
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400" />)}
              <span className="text-slate-400 ml-1 text-xs">4.7 / 5 (Beta)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expo Go QR Placeholder */}
      <section className="py-10 px-6">
        <div className="max-w-md mx-auto glass rounded-2xl p-8 text-center">
          <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Quick Launch with Expo Go
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Scan the QR code in the Expo Go app (Android / iOS) to launch WellMind instantly — no installation required.
          </p>
          {/* QR Placeholder */}
          <div className="w-40 h-40 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-600 text-xs">
            QR Code Coming Soon
          </div>
          <p className="text-slate-500 text-xs mt-4">
            Available once published to Expo EAS
          </p>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center text-gradient mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
            App Features
          </h2>
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
      </section>

      {/* Tech Stack */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest font-semibold">Built With</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full text-sm font-medium glass border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
