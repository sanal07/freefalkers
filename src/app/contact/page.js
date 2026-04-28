"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="w-full max-w-2xl text-center p-6 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-white/90">

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Contact
        </h1>

        {/* Contact Info */}
        <div className="space-y-3 text-sm sm:text-base">

          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a href="mailto:sanaldathgs@gmail.com" className="underline hover:text-white">
              sanaldathgs@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">Phone:</span>{" "}
            <a href="tel:7510352561" className="underline hover:text-white">
              7510352561
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a
              href="https://github.com/sanaldath"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              github.com/sanaldath
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">GitHub (Alt):</span>{" "}
            <a
              href="https://github.com/sanal07"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              github.com/sanal07
            </a>
          </p>

        </div>

        {/* Experience */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Experience</h2>
          <p className="text-sm sm:text-base opacity-90 leading-relaxed">
            Frontend-focused developer with experience in building modern web applications using
            React and Next.js. Comfortable with component architecture, state management, and
            creating responsive, user-friendly interfaces. Also experienced in handling JSON data,
            building utility-based tools, and implementing clean UI systems.
          </p>
        </div>

      </div>
    </div>
  );
}