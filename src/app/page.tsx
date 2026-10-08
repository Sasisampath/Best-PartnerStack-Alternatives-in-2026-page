import type { Metadata } from "next";
import Link from "next/link";
import { GridBackground } from "@/components/layout/grid-background";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Buyer’s Guides | JazzHQ",
  description: "Independent comparison guides for partner and distribution software.",
};

export default function HomePage() {
  return (
    <GridBackground>
      <Header />
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-6 py-24 text-[#242424] lg:px-16">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Buyer’s Guides</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6A7077]">Independent comparison guides for partner and distribution software.</p>
        <Link href="/buyers-guide/partnerstack-alternatives" className="mt-8 inline-flex rounded-xl bg-[#564EF0] px-5 py-3 text-sm font-semibold text-white">
          View PartnerStack Alternatives
        </Link>
      </main>
      <Footer />
    </GridBackground>
  );
}
