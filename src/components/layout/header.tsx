"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Shared navigation for the homepage and editorial guide.
export function Header({ fullNavigation = true }: { fullNavigation?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E2D9] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <nav className="relative flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logo/jazzhq.svg"
              alt="JazzHQ"
              width={132}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {fullNavigation && <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/assets" onClick={() => setMenuOpen(false)}>Assets</Link>
          </div>}
          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="rounded-xl bg-[#5048E5] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4039D4]"
            >
              List Your Product
            </a>

            <a
              href="#"
              className="rounded-xl bg-[#E84545] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D43838]"
            >
              Become a Partner
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E2D9] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="text-xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div id="site-mobile-menu" className="flex flex-col gap-3 border-t border-[#E5E2D9] py-4 lg:hidden">
            {fullNavigation && <div className="flex flex-col gap-4 py-3 text-sm font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/assets" onClick={() => setMenuOpen(false)}>Assets</Link>
            </div>}
            <a
              href="#"
              className="rounded-xl bg-[#5048E5] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              List Your Product
            </a>

            <a
              href="#"
              className="rounded-xl bg-[#E84545] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Become a Partner
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
