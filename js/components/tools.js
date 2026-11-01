// Top tools: notification bell and SOS button.

function Tools({notifs,seen,setSeen,sos,side}){const [o,setO]=useState(false),n=notifs.length-seen;
 return h`<div class=${'relative flex items-center gap-2 '+(side==='v'?'flex-col':'')}><button onClick=${sos} aria-label='Safety centre' title='Safety' class='h-10 min-w-10 px-2.5 rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30 text-xs font-bold'>SOS</button>
 <button onClick=${()=>{setO(!o);setSeen(notifs.length)}} aria-label='Notifications' title='Notifications' class='relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 grid place-items-center'><${Ic} n='bell' s=${18}/>${n>0&&h`<b class='absolute -top-1 -right-1 bg-emerald-500 text-black text-[10px] rounded-full min-w-4 h-4 px-1 grid place-items-center'>${n}</b>`}</button>
 ${o&&h`<div class='fixed inset-0 z-40' onClick=${()=>setO(false)}></div>`}
 ${o&&h`<div class=${'absolute w-72 max-h-80 overflow-y-auto rounded-2xl border border-white/10 bg-[#111827] shadow-2xl p-2 pop z-50 '+(side?'left-full ml-3 bottom-0':'right-0 top-full mt-2')}><div class='px-2.5 py-1.5 text-xs font-semibold text-white/50'>Notifications</div>${notifs.length===0?h`<p class='p-3 text-sm text-white/50'>Nothing yet.</p>`:notifs.map(x=>h`<div class='p-2.5 rounded-xl hover:bg-white/5 text-sm'>${x.t}<div class='text-[10px] text-white/40'>${x.ts}</div></div>`)}</div>`}</div>`}
