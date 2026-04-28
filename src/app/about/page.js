"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="w-full max-w-2xl text-center p-6 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-white/90">

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          About This App
        </h1>

        <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-4">
          This tool helps you analyze your Instagram data to understand your social connections better.
          By uploading your exported JSON files, you can quickly identify who doesn’t follow you back
          and manage your network more effectively.
        </p>

        <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-4">
          It works completely on the client side, meaning your data stays private and is never uploaded
          to any server. Everything is processed securely within your browser.
        </p>

        <p className="text-sm sm:text-base leading-relaxed opacity-90">
          The goal of this project is to provide a simple, fast, and privacy-friendly way to gain insights
          from your Instagram data without relying on third-party services.
        </p>

      </div>
    </div>
  );
}