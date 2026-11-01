// Small reusable UI pieces: avatar, status chip, progress steps, modal, form field, switch, segmented control, counter, tracking bar.

const Av=({n,s=36})=>h`<div style=${{width:s,height:s,fontSize:s/3}} class="shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center font-bold">${n.split(" ").map(x=>x[0]).join("")}</div>`;

const Chip=({s})=>{const c={open:"bg-amber-500/15 text-amber-400 ring-amber-500/30",accepted:"bg-indigo-500/15 text-indigo-300 ring-indigo-500/30",picked:"bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",delivered:"bg-emerald-500/15 text-emerald-400 ring-emerald-500/30"};return h`<span class=${"text-xs font-semibold rounded-full px-2.5 py-1 ring-1 whitespace-nowrap "+c[s]}>${{open:"Pending",accepted:"Accepted",picked:"In transit",delivered:"Delivered"}[s]}</span>`};

const Steps=({s})=>h`<div class="flex items-center gap-1">${STEPS.map((t,i)=>h`<div class="flex-1"><div class=${"h-1.5 rounded-full "+(i<=SI[s]?(i===3?"bg-emerald-400":"bg-indigo-400"):"bg-white/10")}></div><div class=${"text-[10px] mt-1 "+(i<=SI[s]?"text-white/80":"text-white/30")}>${t}</div></div>`)}</div>`;

const Modal=({close,title,children})=>h`<div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-3" onClick=${close}><div class=${G+" bg-[#111827] w-full max-w-md max-h-[90vh] overflow-y-auto p-5 pop"} onClick=${e=>e.stopPropagation()}><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-bold">${title}</h3><button onClick=${close} class="text-white/50 hover:text-white text-xl leading-none" aria-label="Close">×</button></div>${children}</div></div>`;

const Fld=({l,v,set,...r})=>h`<label class="block mb-3"><span class="block text-xs text-white/60 mb-1">${l}</span><input class=${IN} value=${v} onInput=${e=>set(e.target.value)} ...${r}/></label>`;

const VerBadge=({v})=>v==='verified'?h`<span class='inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 ring-1 ring-emerald-500/30 rounded-full px-2 py-0.5'>✓ Verified</span>`:null;

const Sw=({v,set,l,d})=>h`<div class='flex items-center justify-between gap-3 py-3 border-b border-white/10 last:border-0'><div><div class='text-sm font-semibold'>${l}</div>${d&&h`<div class='text-xs text-white/50'>${d}</div>`}</div><button onClick=${()=>set(!v)} role='switch' aria-checked=${v} aria-label=${l} class=${'shrink-0 w-12 h-7 rounded-full p-1 transition '+(v?'bg-emerald-500':'bg-white/15')}><span class=${'block w-5 h-5 rounded-full bg-white transition '+(v?'translate-x-5':'')}></span></button></div>`;

const Seg=(v,set,o)=>h`<div class='flex gap-1 p-1 rounded-xl bg-white/5 border border-white/10 w-fit'>${o.map(([k,l])=>h`<button onClick=${()=>set(k)} class=${'text-sm px-3 py-1.5 rounded-lg '+(v===k?'bg-indigo-500 text-white':'text-white/60')}>${l}</button>`)}</div>`;

function Count({to,suf=''}){const [n,setN]=useState(0);useEffect(()=>{let s=null,r;const f=ts=>{if(!s)s=ts;const p=Math.min(1,(ts-s)/1200);setN(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)r=requestAnimationFrame(f)};r=requestAnimationFrame(f);return()=>cancelAnimationFrame(r)},[to]);return n.toLocaleString()+suf}

const Track=({s})=>{const p={open:0,accepted:28,picked:68,delivered:100}[s],eta={accepted:'~8 min away',picked:'~3 min away',delivered:'Arrived'}[s];return s==='open'?null:h`<div class='mt-1'><div class='flex justify-between text-[11px] text-white/50 mb-1'><span>Live tracking</span><span class='text-emerald-300'>${eta}</span></div><div class='relative h-2 rounded-full bg-white/10'><div class='absolute inset-y-0 left-0 rounded-full bg-emerald-400/60 transition-all duration-1000' style=${{width:p+'%'}}></div><div class='absolute -top-1 w-4 h-4 -ml-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/25 transition-all duration-1000' style=${{left:p+'%'}}></div></div></div>`};
