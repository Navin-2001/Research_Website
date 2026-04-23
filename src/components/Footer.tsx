import Link from "next/link";
import { Brain, Github, Mail, MapPin, Heart } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home",          href: "/"              },
    { label: "Project Scope", href: "/project-scope" },
    { label: "Milestone",     href: "/milestone"     },
    { label: "Download",      href: "/download"      },
  ],
  "Research": [
    { label: "About Us",      href: "/about"   },
    { label: "Contact Us",    href: "/contact" },
    { label: "Publications",  href: "#"        },
    { label: "Dataset",       href: "#"        },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-dark-900 pt-16 pb-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Brain size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-gradient" style={{ fontFamily: "'Outfit', sans-serif" }}>
                WellMind
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              An AI-powered research platform for early depression detection using facial expressions, voice analysis, multimodal fusion, and social media behavior.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={14} className="text-violet-400" />
              <span>Sri Lanka Institute of Information Technology</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <Mail size={14} className="text-violet-400" />
              <span>wellmind.research@gmail.com</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-slate-400 text-sm hover:text-violet-300 transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} WellMind Research. Made with{" "}
            <Heart size={11} className="text-violet-400 fill-violet-400" /> for mental health.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              <Github size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
