import type { Metadata } from "next";
import { GridBackground } from "@/components/layout/grid-background";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Assets | JazzHQ",
  description: "Resources and visuals used in our buyer’s guides.",
};

export default function AssetsPage() {
  return (
    <GridBackground>
      <Header />
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-6 py-24 text-[#242424] lg:px-16">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Assets</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6A7077]">Resources and visuals used in our buyer’s guides.</p>
        <p className="mt-8 text-[#6A7077]">More resources coming soon.</p>
      </main>
    </GridBackground>
  );
}
