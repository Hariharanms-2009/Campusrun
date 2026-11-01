// Core helpers: React hooks, the htm template tag, shared Tailwind class strings.

const {useState,useEffect,useRef}=React;const h=htm.bind(React.createElement);

const now=()=>new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});

const G="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl";

const B="rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-95 disabled:opacity-40";

const BP=B+" bg-indigo-500 hover:bg-indigo-400 text-white",BG=B+" bg-white/5 hover:bg-white/10 border border-white/10",BE=B+" bg-emerald-500 hover:bg-emerald-400 text-[#052e1f]";

const IN="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-indigo-400";

const REPL=["👍 Got it!","On my way, 2 mins.","Sure, I’ll wait at the entrance.","Thanks! Almost there."];
