"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import ThemeToggle from "../ui/ThemeToggle";
import AvailabilityDot from "../ui/AvailabilityDot";

const links = [
  { label: "Work", hash: "#work" },
  { label: "About", hash: "#about" },
  { label: "Experience", hash: "#experience" },
  { label: "Certifications", hash: "#certifications" },
  { label: "Contact", hash: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function navHref(hash: string) {
    return isHome ? hash : `/${hash}`;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-lg font-bold tracking-tight text-text"
          >
            SA
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={navHref(link.hash)}
                  className="font-mono text-xs font-medium uppercase tracking-wider text-muted transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <div className="flex items-center gap-2 rounded border border-border px-3 py-1.5">
              <AvailabilityDot />
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-text">
                Available_for_hire
              </span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-8 w-8 items-center justify-center text-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 border-t border-border bg-background md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-8">
              {links.map((link) => (
                <Link
                  key={link.hash}
                  href={navHref(link.hash)}
                  onClick={() => setMobileOpen(false)}
                  className="rounded px-4 py-3 font-mono text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:bg-surface hover:text-text"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex items-center gap-4 border-t border-border px-4 pt-6">
                <ThemeToggle />
                <div className="flex items-center gap-2">
                  <AvailabilityDot />
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-text">
                    Available_for_hire
                  </span>
                </div>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
