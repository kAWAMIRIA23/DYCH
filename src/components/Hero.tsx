"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Fingerprint,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

const checkIns = [
  { name: "Amara N.", grade: "P5", time: "07:42", method: "Fingerprint" },
  { name: "Kwame O.", grade: "S2", time: "07:43", method: "ID Card" },
  { name: "Zawadi M.", grade: "P3", time: "07:45", method: "Fingerprint" },
  { name: "Tunde A.", grade: "S4", time: "07:46", method: "ID Card" },
  { name: "Nia K.", grade: "P6", time: "07:48", method: "Fingerprint" },
  { name: "Brian T.", grade: "S1", time: "07:49", method: "Fingerprint" },
];

const highlights = [
  { icon: ShieldCheck, label: "Secure entry points" },
  { icon: Bell, label: "Instant parent alerts" },
  { icon: Wallet, label: "Fee tracking" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function LiveDashboard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % checkIns.length), 2600);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((offset) => checkIns[(index + offset) % checkIns.length]);
  const present = 612 + index;
  const total = 640;
  const rate = Math.round((present / total) * 100);

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl rounded-[2rem]" />

      <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pl-5 pr-5 sm:pr-12 py-4 border-b border-slate-800">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">Today · Morning Gate</p>
            <p className="text-sm font-semibold text-white">Attendance Overview</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-slate-800">
          <div className="bg-slate-900 px-5 py-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Users className="h-3.5 w-3.5" /> Students present
            </div>
            <p className="mt-1 text-2xl font-bold text-white tabular-nums">
              {present}
              <span className="text-sm font-medium text-slate-500"> / {total}</span>
            </p>
          </div>
          <div className="bg-slate-900 px-5 py-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <CheckCircle2 className="h-3.5 w-3.5" /> Attendance rate
            </div>
            <p className="mt-1 text-2xl font-bold text-cyan-400 tabular-nums">{rate}%</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{ width: `${rate}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* Check-in feed */}
        <div className="px-5 py-4">
          <p className="text-xs font-medium text-slate-500 mb-3">Recent check-ins</p>
          <ul className="space-y-2 min-h-[10.5rem]">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((s) => (
                <motion.li
                  key={s.name}
                  layout
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between rounded-xl bg-slate-800/50 border border-slate-800 px-3 py-2.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 text-sm font-semibold">
                      {s.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{s.name}</p>
                      <p className="text-xs text-slate-500">
                        Class {s.grade} · {s.method}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs tabular-nums text-slate-400">{s.time}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>

      {/* Floating parent notification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -bottom-8 -left-4 sm:-left-10 w-64 rounded-xl border border-slate-700/60 bg-slate-900/95 backdrop-blur-xl p-3.5 shadow-xl"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
            <Bell className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-white">SMS sent to parent</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={visible[0].name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-slate-400 leading-snug"
              >
                {visible[0].name.split(" ")[0]} arrived safely at {visible[0].time}.
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Floating biometric badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:flex absolute -top-5 -right-5 h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-slate-900/95 text-cyan-400 shadow-lg shadow-cyan-500/20"
      >
        <Fingerprint className="h-7 w-7" />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Video background, kept subtle so content stays readable */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-blue-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-32 min-h-screen flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-300 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Smart School Systems by Dych Technologies
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Safer schools.{" "}
              <span className="block sm:inline">Accurate records.</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Informed parents.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Empowering African schools through inclusive digital transformation —
              biometric attendance, secure entry, real-time parent alerts and fee
              management in one connected platform.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#contact-team"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold rounded-full text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full text-white border border-slate-700 bg-slate-900/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors duration-200"
              >
                Explore Solutions
              </a>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon className="h-4 w-4 text-cyan-400" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: product preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pb-8"
          >
            <LiveDashboard />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
    </section>
  );
}
