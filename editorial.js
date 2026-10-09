const CSS=`
:root{--paper:#f1ece3;--ink:#16130f;--mut:#6f675a;--red:#b3261e;box-sizing:border-box}
*,*:before,*:after{box-sizing:inherit}
html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font-family:"Amiri",Georgia,serif;overflow-x:hidden;line-height:1.7}
.k{font-family:"Reem Kufi","Amiri",sans-serif}
.en{font-family:"Cormorant Garamond",Georgia,serif;letter-spacing:.24em;text-transform:uppercase;font-size:11px}
.mast{display:flex;justify-content:space-between;align-items:center;padding:calc(14px + env(safe-area-inset-top,0px)) 20px 12px;border-bottom:2px solid var(--ink);position:sticky;top:0;background:var(--paper);z-index:5}
.mast b{font-size:15px}
.cover{display:grid;grid-template-columns:1fr;padding:22px 20px 0;position:relative}
.cover h1{margin:0;font-weight:900;line-height:.92;font-size:clamp(70px,24vw,170px);letter-spacing:-.02em}
.cover h1.g{margin-inline-start:14vw;color:var(--red)}
.amp{position:absolute;inset-inline-end:6%;top:26%;font:italic 300 clamp(120px,40vw,300px)/1 "Cormorant Garamond",serif;color:transparent;-webkit-text-stroke:1px var(--ink);opacity:.35;pointer-events:none}
.photo{margin:26px 0 0;aspect-ratio:4/5;width:78%;margin-inline-start:auto;background-size:cover;background-position:center;position:relative;box-shadow:12px 12px 0 var(--ink)}
.photo figcaption{position:absolute;bottom:-26px;inset-inline-start:0;transform:translateX(-0)}
.vert{position:absolute;inset-inline-start:20px;top:55%;writing-mode:vertical-rl;transform:rotate(180deg)}
.tick{margin-top:56px;background:var(--ink);color:var(--paper);overflow:hidden;white-space:nowrap;padding:10px 0}
.tick div{display:inline-block;padding-inline-start:100%;animation:mq 22s linear infinite;font-size:20px}
@keyframes mq{to{transform:translateX(100%)}}
.art{padding:64px 22px 30px;max-width:640px;margin:auto}
.art p{margin:0;font-size:clamp(22px,6.2vw,30px)}
.art p:first-letter{float:inline-start;font-size:4.2em;line-height:.8;padding-inline-end:10px;color:var(--red);font-weight:700}
.rows{border-top:2px solid var(--ink);margin:30px 20px}
.row{display:grid;grid-template-columns:54px 1fr;gap:6px;align-items:baseline;padding:18px 0;border-bottom:1px solid var(--ink)}
.row i{font:italic 300 34px "Cormorant Garamond",serif;color:var(--red)}
.row small{display:block;color:var(--mut)}
.row strong{font-size:clamp(26px,8vw,44px);line-height:1.15;font-weight:700}
.cd{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin:40px 20px;border:2px solid var(--ink);direction:ltr}
.cd div{text-align:center;padding:16px 0;border-inline-end:1px solid var(--ink)}
.cd div:last-child{border:0}
.cd b{display:block;font:300 clamp(34px,11vw,64px)/1 "Cormorant Garamond",serif;font-variant-numeric:tabular-nums}
.col{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:20px;align-items:start}
.col div{background-size:cover;background-position:center;aspect-ratio:3/4}
.col div:nth-child(2){margin-top:44px}.col div:nth-child(3){margin-top:-30px}
.ven{position:relative;margin:30px 0 0}
.ven .im{aspect-ratio:4/3;background-size:cover;background-position:center;filter:grayscale(.25)}
.ven .card{position:relative;margin:-60px 20px 0;background:var(--paper);border:2px solid var(--ink);padding:20px;text-align:center}
.ven h3{margin:6px 0 14px;font-size:clamp(26px,8vw,40px);line-height:1.2}
.btn{display:inline-block;text-decoration:none;color:var(--paper);background:var(--ink);padding:12px 26px;margin:4px;font-size:18px}
.btn.o{background:none;color:var(--ink);border:2px solid var(--ink)}
.end{padding:70px 20px 60px;text-align:center}
.end h2{margin:0 0 20px;font-size:clamp(46px,15vw,110px);line-height:1;color:var(--red)}
.rv{opacity:0;transform:translateY(30px);transition:.9s ease}.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.tick div{animation:none}.rv{opacity:1;transform:none;transition:none}}
`;
const HTML=`
<header class="mast"><b class="k">العدد الخاص</b><span class="en">The Wedding Issue</span><span class="en" id="dT"></span></header>
<section class="cover">
 <h1 class="k" id="bride"></h1><h1 class="k g" id="groom"></h1><div class="amp">&amp;</div>
 <figure class="photo" id="hero"><figcaption class="en">Cover story</figcaption></figure>
 <div class="vert en">Save the date</div>
</section>
<div class="tick"><div id="tk"></div></div>
<article class="art rv"><div class="en" style="margin-bottom:14px">رسالة الدعوة</div><p id="msg"></p></article>
<section class="rows rv">
 <div class="row"><i>01</i><div><small class="en">التاريخ</small><strong id="dateText"></strong></div></div>
 <div class="row"><i>02</i><div><small class="en">الساعة</small><strong id="timeText"></strong></div></div>
 <div class="row"><i>03</i><div><small class="en">المكان</small><strong id="venue"></strong></div></div>
</section>
<section class="cd rv"><div><b id="d">00</b><span class="en">Days</span></div><div><b id="h">00</b><span class="en">Hrs</span></div><div><b id="m">00</b><span class="en">Min</span></div><div><b id="s">00</b><span class="en">Sec</span></div></section>
<section class="col rv" id="col"></section>
<section class="ven rv"><div class="im" id="vp"></div><div class="card"><div class="en">Location</div><h3 id="venue2"></h3><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></div></section>
<section class="end rv"><h2 class="k">نشوفكم هناك</h2><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section>
`;
export default function render(D){
 document.querySelectorAll('style').forEach(e=>e.remove());
 const b=document.body;b.removeAttribute('style');b.className='';delete b.dataset.design;document.documentElement.removeAttribute('style');
 const f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Reem+Kufi:wght@500;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap';document.head.appendChild(f);
 const st=document.createElement('style');st.textContent=CSS+'.petal{display:none!important}';document.head.appendChild(st);
 b.innerHTML=HTML;
 const $=id=>document.getElementById(id),put=(id,v)=>{if($(id)&&v)$(id).textContent=v};
 const G=[["#cdbfa6","#8a7a5e"],["#b9a48c","#5e4d3b"],["#d6c9b4","#9c8667"],["#a8987d","#4b3f2f"]];
 const bg=(u,i)=>u?`url("${String(u).replace(/"/g,'%22')}")`:`linear-gradient(135deg,${G[i%4][0]},${G[i%4][1]})`;
 put('bride',D.bride);put('groom',D.groom);put('msg',D.msg);put('dateText',D.date);put('timeText',D.time);put('venue',D.venue);put('venue2',D.venue);put('dT',D.date);
 $('tk').textContent=[D.bride+' & '+D.groom,D.date,D.venue].filter(Boolean).join('   ✦   ')+'   ✦   ';
 $('hero').style.backgroundImage=bg(D.hero,0);$('vp').style.backgroundImage=bg(D.venuePhoto,2);
 ['photo1','photo2','photo3','photo4'].forEach((k,i)=>{const e=document.createElement('div');e.style.backgroundImage=bg(D[k],i);$('col').appendChild(e)});
 if(D.map)$('mapBtn').href=D.map;
 if(D.phone)$('rsvpBtn').href='https://wa.me/'+String(D.phone).replace(/\D/g,'')+'?text='+encodeURIComponent('تأكيد حضور فرح '+(D.bride||'')+' و'+(D.groom||'')+'. الاسم: ');
 document.title='دعوة زفاف '+(D.bride||'')+' و'+(D.groom||'');
 const p=n=>String(n).padStart(2,'0');
 const tick=()=>{const t=new Date(D.when).getTime();if(isNaN(t))return;const x=Math.max(0,t-Date.now());$('d').textContent=p(Math.floor(x/864e5));$('h').textContent=p(Math.floor(x%864e5/36e5));$('m').textContent=p(Math.floor(x%36e5/6e4));$('s').textContent=p(Math.floor(x%6e4/1e3))};
 tick();setInterval(tick,1000);
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
 document.querySelectorAll('.rv').forEach(el=>io.observe(el));
 $('shareBtn').onclick=async e=>{e.preventDefault();try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);e.target.textContent='تم النسخ ✓'}}catch(_){}};
}
