// app/not-found.tsx (or pages/404.tsx)

"use client";
import Link from "next/link";
import { Zap, PlugZap, Sparkles } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
      {/* Spark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-blue-100 opacity-50 animate-pulse z-0" />

      {/* Decorative Sparks */}
      <Sparkles className="absolute top-10 left-10 text-yellow-400 animate-spin-slow" size={40} />
      <Sparkles className="absolute bottom-10 right-10 text-blue-400 animate-ping" size={40} />

      {/* Content */}
      <div className="z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 text-yellow-500 text-4xl font-bold">
          <PlugZap size={40} />
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-4">
          Connection Lost
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Seems like this page isn’t wired up yet. As an Electrical Engineer, I
          know a thing or two about broken circuits — and this one’s clearly open!  
          <br />
          But don’t worry — you can always reroute your signal back home.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-md font-medium transition"
        >
          Go Back to Home
          <Zap size={18} />
        </Link>

        <p className="mt-10 text-sm text-gray-500 italic">
          {`//`} Electrical Engineer Portfolio – where creativity meets current ⚙️⚡
        </p>
      </div>
    </div>
  );
}
