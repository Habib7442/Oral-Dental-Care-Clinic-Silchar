import React from "react";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { MoveRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />
      
      {/* 404 Center Content Container */}
      <main className="flex-1 flex flex-col items-center justify-center pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 px-6 relative overflow-hidden">
        {/* Decorative Corner Line */}
        <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/10 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />
        
        <div className="max-w-md w-full text-center flex flex-col items-center gap-6 bg-white border border-ink-300 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(27,19,32,0.03)] relative z-10">
          <div className="text-6xl md:text-7xl select-none animate-bounce duration-[2000ms]">
            🔍
          </div>
          
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-semibold text-plum-900 leading-tight">
              Page Not Found
            </h1>
            <p className="text-ink-500 text-[10px] font-bold uppercase tracking-widest font-sans">
              Error 404
            </p>
          </div>
          
          <p className="text-ink-700 text-sm leading-relaxed font-sans">
            The page you are looking for might have been moved, deleted, or does not exist on our servers.
          </p>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-plum-800 hover:bg-plum-900 text-porcelain text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer w-full mt-4 font-sans"
          >
            <span>Return to Homepage</span>
            <MoveRight className="w-4 h-4 text-gold-200" />
          </Link>
        </div>
      </main>
      
      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
