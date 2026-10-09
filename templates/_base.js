export function mount(D,o){
 document.querySelectorAll('style').forEach(e=>e.remove());
 const b=document.body;b.removeAttribute('style');b.className='';delete b.dataset.design;document.documentElement.removeAttribute('style');
 const f=document.createElement('link');f.rel='stylesheet';f.href=o.fonts;document.head.appendChild(f);
 const st=document.createElement('style');st.textContent='*,*:before,*:after{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;overflow-x:hidden}.petal{display:none!important}.rv{opacity:0;transform:translateY(26px);transition:opacity 1s ease,transform 1s ease}.rv.in{opacity:1;transform:none}@media(prefers-reduced-motion:reduce){*{animation:none!important}.rv{opacity:1;transform:none;transition:none}}'+o.css;document.head.appendChild(st);
 b.innerHTML=o.html;
 const $=id=>document.getElementById(id),put=(id,v)=>{if($(id)&&v)$(id).textContent=v};
 [['bride',D.bride],['groom',D.groom],['msg',D.msg],['dateText',D.date],['timeText',D.time],['venue',D.venue],['venue2',D.venue]].forEach(a=>put(...a));
 const G=o.grad||[["#cdbfa6","#8a7a5e"],["#b9a48c","#5e4d3b"],["#d6c9b4","#9c8667"],["#a8987d","#4b3f2f"]];
 const bg=(u,i)=>u?`url("${String(u).replace(/"/g,'%22')}")`:`linear-gradient(135deg,${G[i%4][0]},${G[i%4][1]})`;
 [['hero',D.hero],['g1',D.photo1],['g2',D.photo2],['g3',D.photo3],['g4',D.photo4],['vp',D.venuePhoto]].forEach(([id,u],i)=>{if($(id))$(id).style.backgroundImage=bg(u,i)});
 if(D.map&&$('mapBtn'))$('mapBtn').href=D.map;
 if(D.phone&&$('rsvpBtn'))$('rsvpBtn').href='https://wa.me/'+String(D.phone).replace(/\D/g,'')+'?text='+encodeURIComponent('تأكيد حضور فرح '+(D.bride||'')+' و'+(D.groom||'')+'. الاسم: ');
 document.title='دعوة زفاف '+(D.bride||'')+' و'+(D.groom||'');
 const p=n=>String(n).padStart(2,'0');
 const tick=()=>{const t=new Date(D.when).getTime();if(isNaN(t))return;const x=Math.max(0,t-Date.now());put('d',p(Math.floor(x/864e5)));put('h',p(Math.floor(x%864e5/36e5)));put('m',p(Math.floor(x%36e5/6e4)));put('s',p(Math.floor(x%6e4/1e3)))};
 tick();setInterval(tick,1000);
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
 document.querySelectorAll('.rv').forEach(el=>io.observe(el));
 if($('shareBtn'))$('shareBtn').onclick=async e=>{e.preventDefault();try{if(navigator.share)await navigator.share({title:document.title,url:location.href});else{await navigator.clipboard.writeText(location.href);e.target.textContent='تم النسخ ✓'}}catch(_){}};
}
