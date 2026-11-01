// Explore page: campus map and nearby errands.

function Explore({errs,me,users,sel,setSel,accept,post}){
 const [dd,setDd]=useState(false);const L=sel!=null?LOCS[sel]:null;
 const cnt=n=>errs.filter(e=>e.status==="open"&&e.pickup===n).length;
 const list=errs.filter(e=>e.status==="open"&&!BLK.includes(e.by)&&(!L||e.pickup===L.n));
 return h`<div class="p-4 min-h-full"><div class="grid lg:grid-cols-[1fr_380px] gap-4">
 <div class="flex flex-col gap-3 min-h-[420px]"><div class="flex items-center gap-2 relative">
  <button onClick=${()=>setDd(!dd)} class=${BG+" flex items-center gap-2"}><${Ic} n="pin" s=${16}/>${L?L.n:"All campus"}<${Ic} n="down" s=${16}/></button>
  ${dd&&h`<div class="absolute top-full left-0 mt-2 z-30 w-72 p-1.5 rounded-2xl border border-white/10 bg-[#111827] shadow-2xl pop"><button onClick=${()=>{setSel(null);setDd(false)}} class="w-full text-left p-2.5 rounded-xl hover:bg-white/10 text-sm">All campus</button>${LOCS.map((l,i)=>h`<button onClick=${()=>{setSel(i);setDd(false)}} class="w-full flex justify-between items-center text-left p-2.5 rounded-xl hover:bg-white/10 text-sm"><span>${l.n}</span><span class="text-xs text-amber-400">${cnt(l.n)} open</span></button>`)}</div>`}
  <span class="text-xs text-white/50 hidden sm:block">Tap a pin to see students nearby</span></div>
 <div class=${G+" grid-bg relative flex-1 min-h-[360px] overflow-hidden"}>
  <div class="absolute left-0 right-0 top-[40%] h-6 bg-white/[0.05] -rotate-3 scale-110"></div><div class="absolute top-0 bottom-0 left-[58%] w-6 bg-white/[0.05] rotate-3 scale-110"></div>
  <div class="absolute left-[6%] top-[8%] w-[24%] h-[16%] rounded-xl bg-white/[0.04]"></div><div class="absolute right-[6%] bottom-[10%] w-[20%] h-[18%] rounded-xl bg-white/[0.04]"></div>
  ${LOCS.map((l,i)=>{const c=cnt(l.n),on=sel===i;return h`<button onClick=${()=>setSel(on?null:i)} style=${{left:l.x+"%",top:l.y+"%"}} class="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group" aria-label=${l.n}>
   <span class=${"relative grid place-items-center rounded-full transition-all "+(on?"w-11 h-11 bg-indigo-500 shadow-[0_0_28px_#6366f1]":"w-8 h-8 bg-[#1b2234] border border-white/20 group-hover:border-indigo-400")+(c&&!on?" pulse":"")}><${Ic} n="pin" s=${on?20:15}/>${c>0&&h`<b class="absolute -top-2 -right-2 text-[10px] bg-amber-500 text-black rounded-full w-5 h-5 grid place-items-center">${c}</b>`}</span>
   <span class=${"text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap "+(on?"bg-indigo-500":"bg-black/50")}>${l.n}</span></button>`})}
  ${sel!=null&&near(sel).map((s,j)=>h`<div class="absolute pop flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-400/40 rounded-full pl-1 pr-2.5 py-0.5 text-[11px]" style=${{left:Math.min(80,LOCS[sel].x+(j-1)*12+4)+"%",top:Math.min(92,LOCS[sel].y+9+j*4)+"%"}}><${Av} n=${s.n+" X"} s=${20}/>${s.n} · ${s.d}m</div>`)}
 </div></div>
 <aside class=${G+" p-4 flex flex-col gap-4 lg:max-h-[calc(100vh-110px)] overflow-y-auto"}>
  <div><div class="text-xs text-white/50">${L?"Selected location":"Campus-wide"}</div><h2 class="text-xl font-extrabold">${L?L.n:"Open errands"}</h2></div>
  ${L&&h`<div><div class="text-sm font-semibold mb-2">Runners nearby <span class="text-emerald-400">● ${near(sel).length} online</span></div><p class="text-sm text-white/60">Nearest: <b class="text-white">${[...near(sel)].sort((a,b)=>a.d-b.d)[0].n}</b>, ${[...near(sel)].sort((a,b)=>a.d-b.d)[0].d} m away</p>
   <button class=${BP+" w-full mt-4 flex items-center justify-center gap-2"} onClick=${()=>post(L.n)}><${Ic} n="plus" s=${16}/>Request something from here</button></div>`}
  <div><div class="text-sm font-semibold mb-2">${list.length} open ${list.length===1?"errand":"errands"}</div><div class="space-y-3">${list.length===0&&h`<p class="text-sm text-white/50">Nothing open here. Be the first to post.</p>`}
  ${list.map(e=>h`<div class="rounded-xl bg-white/5 border border-white/10 p-3 pop"><div class="flex justify-between gap-2"><b class="text-sm">${e.title}</b><span class="text-emerald-400 font-bold text-sm">₹${e.tip}</span></div><div class="text-xs text-white/50 mt-1">${e.pickup} → ${e.drop}</div><div class="flex justify-between items-center mt-2"><span class="text-xs text-white/50">by ${users[e.by].n.split(" ")[0]} · ${e.urg}</span>${e.by===me?h`<span class="text-xs text-amber-400">Your request</span>`:h`<button class=${BE+" !py-1.5 !px-3"} onClick=${()=>accept(e)}>Accept</button>`}</div></div>`)}</div></div>
 </aside></div></div>`;}
