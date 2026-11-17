/* ভর্তি ক্যালেন্ডার — UI কোড। তথ্য বদলাতে exams.js এডিট করুন, এই ফাইল নয়। */
(function(){"use strict";
const D=window.ADMISSION,$=s=>document.querySelector(s),BN="০১২৩৪৫৬৭৮৯";
const ST={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const S={q:"",f:"all",fav:false,view:"list",lang:ST.get("lang","bn"),favs:ST.get("favs",[]),m:null};
const T={bn:{title:"২০২৬–২০২৭ শিক্ষাবর্ষ · লাইভ কাউন্টডাউন",warn:"⚠️ ইউজিসি জানিয়েছে সব পাবলিক বিশ্ববিদ্যালয়ের পরীক্ষা ১ ফেব্রুয়ারির পরে হবে। তবে ঢাবি ও বুয়েট আগের তারিখেই পরীক্ষা নিচ্ছে, অন্যরা একে একে সময়সূচি বদলাচ্ছে। তাই তারিখ বদলাতে পারে।",ph:"খুঁজুন: ঢাকা, DU, মেডিকেল, জানুয়ারি, 2027-01…",fall:"সব",fs:"বিজ্ঞান",fh:"মানবিক",fb:"ব্যবসায়",fm:"মেডিকেল",fe:"প্রকৌশল",fg:"সাধারণ",fa:"কৃষি",ffav:"★ আমার তালিকা",vlist:"তালিকা",vcal:"ক্যালেন্ডার",vtl:"টাইমলাইন",k1:"প্রতিষ্ঠান/গুচ্ছ",k2:"আসন্ন পরীক্ষা",k3:"৭ দিনের মধ্যে",k4:"এ মাসে",k5:"সম্পন্ন",k6:"তারিখ বদলেছে",next:"সবচেয়ে কাছের পরীক্ষা",rem:"⏰ রিমাইন্ডার (৭ দিনের মধ্যে)",none:"কিছু পাওয়া যায়নি",vv:"যাচাইকৃত",vp:"সাময়িক",va:"নিশ্চিত নয়",up:"আসন্ন",today:"আজ",done:"সম্পন্ন",postponed:"স্থগিত",chg:"তারিখ পরিবর্তিত",over:"শেষ হয়েছে",days:"দিন বাকি",tbd:"সময় জানানো হয়নি",lnotice:"অফিসিয়াল নোটিশ",lapply:"আবেদন",lsite:"ওয়েবসাইট",nolink:"অফিসিয়াল লিংক এখনো যোগ করা হয়নি",dl:"আবেদনের শেষ তারিখ",ad:"অ্যাডমিট কার্ড",hist:"তারিখ বদলের ইতিহাস",ann:"ঘোষণা",nAsk:"🔔 নোটিফিকেশন চালু করুন",nOn:"🔔 নোটিফিকেশন চালু আছে",nDen:"🔕 নোটিফিকেশন বন্ধ (ব্রাউজার সেটিংস থেকে চালু করুন)",nNo:"এই ব্রাউজারে নোটিফিকেশন সাপোর্ট নেই",moved:"তারিখ বদলেছে",foot1:"ভর্তি ক্যালেন্ডার",session:"শিক্ষাবর্ষ",upd:"সর্বশেষ আপডেট",disc:"তথ্য সংবাদমাধ্যম ও বিশ্ববিদ্যালয়ের ঘোষণা থেকে সংকলিত। চূড়ান্ত তারিখের জন্য অবশ্যই বিশ্ববিদ্যালয়ের অফিসিয়াল নোটিশ দেখুন।",rn:"নোটিফিকেশন শুধু তখনই আসে যখন আপনি পেজটি খোলেন (ফেভারিট পরীক্ষার ৭/৩/১ দিন আগে)। ব্যাকগ্রাউন্ডে আসে না।",contact:"যোগাযোগ / ফিডব্যাক"},
en:{title:"Session 2026–2027 · Live countdown",warn:"⚠️ UGC has asked all public universities to hold tests after 1 February, but DU and BUET are keeping earlier dates while others are rescheduling. Dates may change.",ph:"Search: Dhaka, DU, medical, January, 2027-01…",fall:"All",fs:"Science",fh:"Humanities",fb:"Business",fm:"Medical",fe:"Engineering",fg:"General",fa:"Agricultural",ffav:"★ My list",vlist:"List",vcal:"Calendar",vtl:"Timeline",k1:"Institutions",k2:"Upcoming",k3:"Within 7 days",k4:"This month",k5:"Completed",k6:"Date changed",next:"Next exam",rem:"⏰ Reminders (within 7 days)",none:"Nothing found",vv:"Verified",vp:"Provisional",va:"Unconfirmed",up:"Upcoming",today:"Today",done:"Completed",postponed:"Postponed",chg:"Date changed",over:"Over",days:"days left",tbd:"Time not announced",lnotice:"Official notice",lapply:"Apply",lsite:"Website",nolink:"Official link not added yet",dl:"Application deadline",ad:"Admit card",hist:"Date change history",ann:"Announced",nAsk:"🔔 Enable notifications",nOn:"🔔 Notifications on",nDen:"🔕 Notifications blocked (enable in browser settings)",nNo:"Notifications not supported in this browser",moved:"date changed",foot1:"Admission Calendar",session:"Session",upd:"Last updated",disc:"Compiled from news reports and university announcements. Always check the university's official notice for the final date.",rn:"Notifications appear only when you open this page (7/3/1 days before favourite exams). They do not arrive in the background.",contact:"Contact / feedback"}};
const t=k=>T[S.lang][k],n=x=>S.lang==="bn"?String(x).replace(/\d/g,d=>BN[d]):String(x);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const MB="জানু,ফেব্রু,মার্চ,এপ্রিল,মে,জুন,জুলাই,আগস্ট,সেপ্টেম্বর,অক্টোবর,নভেম্বর,ডিসেম্বর".split(","),ME="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");
const DB="রবিবার,সোমবার,মঙ্গলবার,বুধবার,বৃহস্পতিবার,শুক্রবার,শনিবার".split(","),DE="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
const MO=()=>S.lang==="bn"?MB:ME,DY=()=>S.lang==="bn"?DB:DE,DS=()=>S.lang==="bn"?"র,সো,ম,বু,বৃ,শু,শ".split(","):"S,M,T,W,T,F,S".split(",");
const CN={g:"সাধারণ General",e:"প্রকৌশল Engineering",m:"মেডিকেল Medical",a:"কৃষি Agricultural"},GN={s:"বিজ্ঞান Science",h:"মানবিক Humanities",b:"ব্যবসায় Business"};
const MF="জানুয়ারি,ফেব্রুয়ারি,মার্চ,এপ্রিল,মে,জুন,জুলাই,আগস্ট,সেপ্টেম্বর,অক্টোবর,নভেম্বর,ডিসেম্বর".split(","),MEF="January,February,March,April,May,June,July,August,September,October,November,December".split(",");
const norm=s=>String(s).toLowerCase().replace(/[০-৯]/g,d=>BN.indexOf(d));
const dk=()=>new Date(Date.now()+216e5).toISOString().slice(0,10); // Asia/Dhaka (UTC+6), কোনো DST নেই
const X=D.rows.map(r=>{const[s,u,unit,cat,g,date,time,ver,st,note,x]=r,[bnN,enN]=u.split("|"),m=+date.slice(5,7);
 const e=Object.assign({id:s+"|"+unit,s,bnN,enN:enN||bnN,unit,cat,g:g?g.split(","):[],date,time:time||"",ver:ver||"p",st:st||"",note:note||"",ts:Date.parse(date+"T"+(time||"00:00")+":00+06:00")},x);
 e.chg=e.st==="changed"||!!(e.changes&&e.changes.length);
 e.h=norm([s,bnN,e.enN,unit,e.note,date,CN[cat],e.g.map(k=>GN[k]).join(" "),MB[m-1],ME[m-1],MF[m-1],MEF[m-1]].join(" "));return e}).filter(e=>isFinite(e.ts)).sort((a,b)=>a.ts-b.ts);
const B={};X.forEach(e=>B[e.id]=e);
const name=e=>S.lang==="bn"?e.bnN:e.enN;
const fmtD=d=>{const[y,m,x]=d.split("-");return n(+x)+" "+MO()[+m-1]+" "+n(y)};
const fmtT=s=>{if(!s)return t("tbd");const[h,m]=s.split(":").map(Number);return n(String(h%12||12).padStart(2,"0")+":"+String(m).padStart(2,"0"))+(h<12?" am":" pm")};
const dow=d=>{const[y,m,x]=d.split("-").map(Number);return DY()[new Date(Date.UTC(y,m-1,x)).getUTCDay()]};
const dl=e=>Math.round((Date.parse(e.date)-Date.parse(dk()))/864e5);
const state=e=>e.st==="postponed"?"postponed":e.date===dk()?"today":e.date<dk()?"done":"up";
function cd(e){if(e.st==="postponed")return t("postponed");const s=Math.floor((e.ts-Date.now())/1e3);
 if(e.date===dk()&&!(e.time&&s>0))return t("today");if(s<=0)return t("over");
 const d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),c=s%60;
 return S.lang==="bn"?n(d)+" দিন "+n(h)+" ঘণ্টা "+n(m)+" মি. "+n(c)+" সে.":d+"d "+h+"h "+m+"m "+c+"s"}
function card(e){const s=state(e),fv=S.favs.includes(e.id),hot=s==="up"&&dl(e)<=7;
 const lk=[["notice","lnotice"],["apply","lapply"],["site","lsite"]].filter(a=>e[a[0]]).map(a=>`<a href="${esc(e[a[0]])}" target="_blank" rel="noopener">${t(a[1])}</a>`).join("");
 return `<article class="c ${s}"><div class="h"><div><b>${esc(name(e))}</b><div class="u">${esc(e.unit)}</div></div><button class="fv${fv?" on":""}" data-fav="${esc(e.id)}" aria-pressed="${fv}" aria-label="★">${fv?"★":"☆"}</button></div>
<div class="bd"><span class="b ${e.ver}">${t("v"+e.ver)}</span><span class="b ${s}">${t(s)}</span>${e.chg?`<span class="b chg">${t("chg")}</span>`:""}</div>
<div class="dt">${dow(e.date)}, ${fmtD(e.date)}, ${fmtT(e.time)}</div><div class="cd${hot?" s7":""}" data-id="${esc(e.id)}">${cd(e)}</div>
${e.note?`<div class="note">${esc(e.note)}</div>`:""}${e.deadline?`<div class="x">${t("dl")}: ${fmtD(e.deadline)}</div>`:""}${e.admit?`<div class="x">${t("ad")}: ${fmtD(e.admit)}</div>`:""}
${e.changes&&e.changes.length?`<details><summary>${t("hist")}</summary>${e.changes.map(c=>`<div class="x">${fmtD(c.from)} → ${fmtD(c.to)}${c.announced?" · "+t("ann")+": "+fmtD(c.announced):""}${c.notice?` · <a href="${esc(c.notice)}" target="_blank" rel="noopener">${t("lnotice")}</a>`:""}</div>`).join("")}</details>`:""}
${lk?`<div>${lk}</div>`:`<div class="nl">${t("nolink")}</div>`}</article>`}
function filtered(){const q=norm(S.q).split(/\s+/).filter(Boolean),g="shb".includes(S.f)&&S.f!=="all";
 return X.filter(e=>(S.f==="all"||(g?e.g.includes(S.f):e.cat===S.f))&&(!S.fav||S.favs.includes(e.id))&&q.every(w=>e.h.includes(w)))}
function stats(){const u=X.filter(e=>["up","today"].includes(state(e))),mo=dk().slice(0,7);
 const v=[new Set(X.map(e=>e.s)).size,u.length,u.filter(e=>dl(e)<=7).length,X.filter(e=>e.date.slice(0,7)===mo&&e.st!=="postponed").length,X.filter(e=>state(e)==="done").length,X.filter(e=>e.chg).length];
 $("#stats").innerHTML=v.map((x,i)=>`<div class="k"><b>${n(x)}</b><span>${t("k"+(i+1))}</span></div>`).join("")}
function next(){const e=X.find(e=>e.date>=dk()&&e.st!=="postponed");
 $("#next").innerHTML=e?`<small>${t("next")}</small><b>${esc(name(e))} — ${esc(e.unit)}</b><div class="t cd" data-id="${esc(e.id)}">${cd(e)}</div>`:""}
function rem(){const p=S.favs.length?X.filter(e=>S.favs.includes(e.id)):X,l=p.filter(e=>state(e)!=="done"&&e.st!=="postponed"&&dl(e)>=0&&dl(e)<=7);
 $("#rem").innerHTML=l.length?`<h3>${t("rem")}</h3>`+l.map(e=>`<div class="r">${esc(name(e))} · ${esc(e.unit)} — ${dl(e)?n(dl(e))+" "+t("days"):t("today")}</div>`).join(""):""}
function view(){const L=filtered();let h="";
 if(!L.length)h=`<p class="u">${t("none")}</p>`;
 else if(S.view==="list")h=L.map(card).join("");
 else if(S.view==="tl"){let cur="";L.forEach(e=>{const k=e.date.slice(0,7);if(k!==cur){if(cur)h+="</div>";cur=k;h+=`<h3>${MO()[+k.slice(5)-1]} ${n(k.slice(0,4))}</h3><div class="tl">`}h+=card(e)});h+="</div>"}
 else{const[y,m]=S.m.split("-").map(Number),f=new Date(Date.UTC(y,m-1,1)).getUTCDay(),dim=new Date(Date.UTC(y,m,0)).getUTCDate();let c="";
  for(let i=0;i<f;i++)c+="<i></i>";
  for(let d=1;d<=dim;d++){const ds=y+"-"+String(m).padStart(2,"0")+"-"+String(d).padStart(2,"0"),ev=L.filter(e=>e.date===ds);
   c+=`<div class="d${ds===dk()?" td":""}"><span>${n(d)}</span>${ev.slice(0,3).map(e=>`<em class="${e.chg?"chg":""}">${esc(e.s)}</em>`).join("")}${ev.length>3?`<em>+${n(ev.length-3)}</em>`:""}</div>`}
  h=`<div class="mn"><button data-m="-1" aria-label="prev">‹</button><b>${MO()[m-1]} ${n(y)}</b><button data-m="1" aria-label="next">›</button></div><div class="wk">${DS().map(x=>`<span>${x}</span>`).join("")}</div><div class="g">${c}</div><h3></h3>`+(L.filter(e=>e.date.startsWith(S.m)).map(card).join("")||`<p class="u">${t("none")}</p>`)}
 $("#view").innerHTML=h}
const nLabel=()=>!("Notification" in window)?t("nNo"):Notification.permission==="granted"?t("nOn"):Notification.permission==="denied"?t("nDen"):t("nAsk");
const moved=(()=>{const seen=ST.get("seen",null),cur={};X.forEach(e=>cur[e.id]=e.date);ST.set("seen",cur);return seen?X.filter(e=>seen[e.id]&&seen[e.id]!==e.date).map(e=>({e,from:seen[e.id]})):[]})();
function push(title,body){try{new Notification(title,{body})}catch(x){}}
function notify(){if(!("Notification" in window)||Notification.permission!=="granted")return;const sent=ST.get("sent",{});
 X.forEach(e=>{if(!S.favs.includes(e.id))return;[7,3,1].forEach(th=>{const k=e.id+"|"+th+"|"+e.date;if(dl(e)===th&&!sent[k]){sent[k]=1;push(name(e)+" · "+e.unit,n(th)+" "+t("days")+" · "+fmtD(e.date))}})});
 moved.forEach(o=>{const k="m|"+o.e.id+"|"+o.e.date;if(!sent[k]){sent[k]=1;push(name(o.e)+" · "+o.e.unit,t("moved")+": "+fmtD(o.from)+" → "+fmtD(o.e.date))}});ST.set("sent",sent)}
function render(){document.documentElement.lang=S.lang;
 document.querySelectorAll("[data-i]").forEach(el=>el.textContent=t(el.dataset.i));
 $("#warn").textContent=t("warn");$("#q").placeholder=t("ph");$("#bl").textContent=S.lang==="bn"?"EN":"বাং";$("#bn").textContent=nLabel();
 $("#chg").innerHTML=moved.map(o=>`<div class="al">⚠️ ${esc(name(o.e))} · ${esc(o.e.unit)} — ${t("moved")}: ${fmtD(o.from)} → ${fmtD(o.e.date)}</div>`).join("");
 $("#chips").innerHTML=["all","s","h","b","m","e","g","a"].map(k=>`<button class="${S.f===k?"on":""}" data-f="${k}">${t("f"+k)}</button>`).join("")+`<button class="${S.fav?"on":""}" data-fv="1">${t("ffav")}</button>`;
 $("#vw").innerHTML=[["list","vlist"],["cal","vcal"],["tl","vtl"]].map(a=>`<button class="${S.view===a[0]?"on":""}" data-v="${a[0]}">${t(a[1])}</button>`).join("");
 stats();next();rem();view();
 $("#foot").innerHTML=`<b>${t("foot1")}</b> · ${t("session")}: ${n(D.session)} · ${t("upd")}: ${fmtD(D.updated)}<p>${t("disc")}</p><p>${t("rn")}</p>`+(D.contact?`<p><a href="${esc(D.contact)}">${t("contact")}</a></p>`:"")}
const up=X.find(e=>e.date>=dk()),mm=(up?up.date:dk()).slice(0,7);S.m=mm;
document.addEventListener("click",ev=>{const b=ev.target.closest("button");if(!b)return;const d=b.dataset;
 if(d.f){S.f=d.f}else if(d.fv){S.fav=!S.fav}else if(d.v){S.view=d.v}
 else if(d.m){const[y,m]=S.m.split("-").map(Number),z=new Date(Date.UTC(y,m-1+ +d.m,1));S.m=z.getUTCFullYear()+"-"+String(z.getUTCMonth()+1).padStart(2,"0")}
 else if(d.fav){const i=S.favs.indexOf(d.fav);i<0?S.favs.push(d.fav):S.favs.splice(i,1);ST.set("favs",S.favs)}
 else if(b.id==="bl"){S.lang=S.lang==="bn"?"en":"bn";ST.set("lang",S.lang)}
 else if(b.id==="bt"){const h=document.documentElement,c=h.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),x=c==="dark"?"light":"dark";h.dataset.theme=x;ST.set("theme",x);return}
 else if(b.id==="bn"){if("Notification" in window)Notification.requestPermission().then(()=>{render();notify()});return}
 else return;render()});
$("#q").addEventListener("input",e=>{S.q=e.target.value;view()});
const th=ST.get("theme",null);if(th)document.documentElement.dataset.theme=th;
let day=dk();
setInterval(()=>{if(dk()!==day){day=dk();render();return}document.querySelectorAll(".cd").forEach(el=>{const e=B[el.dataset.id];if(e)el.textContent=cd(e)})},1000);
render();notify();
})();
