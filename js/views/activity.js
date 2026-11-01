// Activity page: my requests and deliveries.

function Activity({errs,me,users,open,setModal}){const [tab,setTab]=useState("req");
 const list=errs.filter(e=>tab==="req"?e.by===me:e.runner===me);
 return h`<div class="p-4 max-w-3xl mx-auto"><h2 class="text-2xl font-extrabold mb-4">Activity</h2>
 <div class="flex gap-1 p-1 rounded-xl bg-white/5 border border-white/10 w-fit mb-5">${[["req","My Requests"],["run","My Deliveries"]].map(([k,l])=>h`<button onClick=${()=>setTab(k)} class=${"text-sm px-4 py-1.5 rounded-lg "+(tab===k?"bg-indigo-500":"text-white/60")}>${l}</button>`)}</div>
 ${list.length===0&&h`<div class=${G+" p-10 text-center text-white/50"}>Nothing here yet.</div>`}
 <div class="space-y-3">${list.map(e=>h`<div class=${G+" p-4 space-y-3 pop"}><div class="flex justify-between gap-2"><div><b>${e.title}</b><div class="text-xs text-white/50 mt-0.5">${e.pickup} → ${e.drop}</div></div><${Chip} s=${e.status}/></div><${Steps} s=${e.status}/>
 <div class="flex justify-between items-center"><span class="text-sm"><b>₹${e.cost+e.tip}</b> <span class="text-emerald-400 text-xs">₹${e.tip} tip</span></span><div class="flex gap-2">
  ${e.status!=="open"&&h`<button class=${BG+" !py-1.5"} onClick=${()=>open(e.id)}>Open chat</button>`}${e.runner===me&&e.status!=="delivered"&&h`<button class=${BP+" !py-1.5"} onClick=${()=>setModal({t:"otp",id:e.id})}>Verify & Deliver</button>`}${e.by===me&&e.status==="delivered"&&!e.reviewed&&h`<button class=${BP+" !py-1.5"} onClick=${()=>setModal({t:"review",id:e.id})}>Review & settle</button>`}</div></div></div>`)}</div></div>`;}
