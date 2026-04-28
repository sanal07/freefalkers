"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-28 sm:pt-28 sm:pb-32">

      <div className="relative z-10 w-full max-w-md sm:max-w-xl text-center px-6 py-8 sm:px-10 sm:py-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-white/90">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Find Who <br /> Unfollows You
        </h1>

        <p className="text-xs sm:text-sm opacity-90 mb-6 leading-relaxed max-w-sm mx-auto">
        Download your Instagram data as a JSON file, unzip it, and upload your{" "}
            <span className="font-semibold text-white">followers</span>{" "}
            and{" "}
            <span className="font-semibold text-white">following</span>{" "}
            files to instantly discover who doesn&apos;t follow you back.
        </p>

        <Link
          href="/follow-unfollow"
          className="inline-block bg-white/90 text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-white transition shadow-md"
        >
          Find Unfollowers
        </Link>

        <div className="w-16 h-[1px] bg-white/30 mx-auto my-6 sm:my-8" />

        <p className="text-xs sm:text-sm opacity-90 mb-5 leading-relaxed max-w-sm mx-auto">
          Check the follow requests you&apos;ve sent that are still pending.
        </p>

        <Link
          href="/pending-requests"
          className="inline-block bg-white/90 text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-white transition shadow-md"
        >
          View Pending Requests
        </Link>

      </div>
    </div>
  );
}