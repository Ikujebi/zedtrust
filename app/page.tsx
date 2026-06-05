// src/app/page.tsx
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Dashboard from "@/app/dashboard/page";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-forest-dark selection:bg-lemon selection:text-black">
      <Navbar />
      <Hero />
      
      {/* Immersive Dashboard Preview Section */}
      <section id="analytics" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Institutional Power. Personal Control.
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Review the architecture behind your live financial engine layout below.
          </p>
        </div>
        <div className="border border-forest-mid rounded-3xl p-2 bg-[#030d08] shadow-2xl">
          <Dashboard />
        </div>
      </section>
    </main>
  );
}