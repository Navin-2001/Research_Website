"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/",              label: "Home"          },
  { href: "/domain",        label: "Domain"        },
  { href: "/milestones",    label: "Milestones"    },
  { href: "/download",      label: "Downloads"     },
  { href: "/about",         label: "About Us"      },
  { href: "/contact",       label: "Contact Us"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg shadow-black/30 py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/40 transition-all duration-300">
            <Brain size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-xl text-gradient" style={{ fontFamily: "'Outfit', sans-serif" }}>
            WellMind
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-white bg-white/10 border border-white/15"
                      : "text-slate-300 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobile(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/8 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobile(false)}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                  : "text-slate-300 hover:text-white hover:bg-white/6"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
