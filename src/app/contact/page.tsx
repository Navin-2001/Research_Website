"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-badge mx-auto w-fit">
            <Mail size={12} /> Get In Touch
          </div>
          <h1 className="section-title text-gradient mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-slate-400 text-lg">
            Have questions about our research, collaboration opportunities, or the WellMind app? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Research Team
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Location</p>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Sri Lanka Institute of Information Technology (SLIIT)<br />
                      New Kandy Road, Malabe, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <a href="mailto:wellmind.research@gmail.com" className="text-violet-400 text-sm hover:text-violet-300 transition-colors mt-0.5 block">
                      wellmind.research@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Phone</p>
                    <p className="text-slate-400 text-sm mt-0.5">Available on request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response info */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm mb-3">What to expect</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Response within 24–48 hours",
                  "Research collaboration inquiries welcome",
                  "Dataset access requests (with ethics approval)",
                  "App feedback and bug reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center animate-glow">
                  <CheckCircle2 size={34} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-slate-400 max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline px-6 py-2 text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject *</label>
                    <select
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="form-input"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="dataset">Dataset Access Request</option>
                      <option value="app">App Feedback / Bug Report</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input resize-none"
                    />
                  </div>
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-70"
                  >
                    <span className="flex items-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
