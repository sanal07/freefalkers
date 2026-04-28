import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="absolute z-50 bottom-0 left-0 w-full px-4 sm:px-8 py-4 sm:py-6">
      <div className="w-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Branding */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Freefalkers</p>
            <p className="text-white/50 text-xs mt-0.5">Instagram Analytics Tool</p>
          </div>
        </div>

        {/* Links — hidden on small, visible from sm */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          <Link href="/" className="text-white/70 text-xs hover:text-white transition">Home</Link>
          <Link href="/about" className="text-white/70 text-xs hover:text-white transition">About</Link>
          <Link href="/follow-unfollow" className="text-white/70 text-xs hover:text-white transition">Freefalkers</Link>
          <Link href="/pending-requests" className="text-white/70 text-xs hover:text-white transition">Requests</Link>
          <Link href="/contact" className="text-white/70 text-xs hover:text-white transition">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-right">
          <p className="text-white/40 text-xs">© 2026 Freefalkers</p>
          <p className="text-white/30 text-xs mt-0.5">Made to quench the ego</p>
        </div>

      </div>
    </footer>
  );
}