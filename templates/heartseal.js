import {mount} from './_base.js';
const css=`:root{--w:#5a0f24;--r:#c2294e;--b:#f9dfe4;--g:#e6c27a;--ink:#3a0c19}
body{background:linear-gradient(180deg,#fff5f6,#f9dfe4);color:var(--ink);font-family:"Amiri",serif;line-height:1.9;text-align:center}body.lk{overflow:hidden;height:100vh}
.k{font-family:"Aref Ruqaa","Amiri",serif}
#in{position:fixed;inset:0;z-index:60;background:radial-gradient(circle at 50% 45%,#8c1b3c,#3b0715 75%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px;clip-path:circle(150% at 50% 50%);transition:clip-path 1.5s cubic-bezier(.7,0,.3,1) .9s}
#in.go{clip-path:circle(0 at 50% 50%)}
#in .t{color:var(--g);font-size:22px;transition:opacity .4s}#in.go .t{opacity:0}
.seal{position:relative;width:min(58vw,230px);aspect-ratio:1;border:0;background:none;cursor:pointer;animation:beat 1.3s ease-in-out infinite;padding:0;transition:transform .7s ease,opacity .6s ease .1s}
.seal svg{width:100%;height:100%;filter:drop-shadow(0 12px 28px #000a)}
.seal span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding-bottom:10%;font:700 clamp(30px,10vw,44px) "Aref Ruqaa",serif;color:#ffd9e0;text-shadow:0 2px 3px #0008;letter-spacing:.05em}
#in.go .seal{transform:scale(1.9);opacity:0;animation:none}
@keyframes beat{0%,100%{transform:scale(1)}15%{transform:scale(1.1)}30%{transform:scale(1)}45%{transform:scale(1.07)}}
.ring{position:absolute;inset:-14px;border-radius:50%;border:2px solid #e6c27a66;animation:rp 2.6s ease-out infinite}@keyframes rp{from{transform:scale(.7);opacity:1}to{transform:scale(1.5);opacity:0}}
.bp{position:fixed;left:50%;top:45%;z-index:70;color:#ff7d9d;font-size:22px;pointer-events:none;animation:bst 1.4s ease-out forwards}
@keyframes bst{to{transform:translate(var(--x),var(--y)) rotate(var(--rt)) scale(.4);opacity:0}}
.bg i{position:fixed;bottom:-40px;color:#e0476b;opacity:.35;animation:rise linear infinite;pointer-events:none;font-style:normal;z-index:0}
@keyframes rise{to{transform:translateY(-115vh) rotate(25deg)}}
main{position:relative;z-index:1}
.top{padding:calc(36px + env(safe-area-inset-top,0px)) 18px 20px;background:radial-gradient(circle at 50% 30%,#fff,transparent 70%)}
.top h1{margin:0;font:700 clamp(44px,14vw,78px)/1.1 "Aref Ruqaa",serif;color:var(--r)}
.cp{width:min(72vw,280px);margin:6px auto 0;display:block;overflow:visible}
.cp .sw{transform-origin:50% 100%;animation:sway 3.6s ease-in-out infinite alternate}@keyframes sway{from{transform:rotate(-2.2deg)}to{transform:rotate(2.2deg)}}
.cp .hb{transform-origin:122px 150px;animation:beat 1.3s infinite}
.cp .fh{fill:#e0476b;opacity:0;animation:fh 4s ease-in infinite}.cp .fh:nth-of-type(2){animation-delay:1.3s}.cp .fh:nth-of-type(3){animation-delay:2.6s}
@keyframes fh{0%{opacity:0;transform:translateY(0)}20%{opacity:.9}100%{opacity:0;transform:translateY(-110px)}}
.heart{clip-path:url(#hc);background-size:cover;background-position:center}
.hh{width:min(76vw,310px);aspect-ratio:1/.95;margin:10px auto;filter:drop-shadow(0 10px 18px #c2294e55)}
.sec{padding:32px 20px}.sec h2{margin:0 0 10px;font:400 clamp(28px,8vw,38px) "Aref Ruqaa",serif;color:var(--r)}
.msg{max-width:420px;margin:auto;padding:30px 24px;background:#fff;border-radius:30px;box-shadow:0 14px 40px #c2294e22;border:1px solid #f1b8c4}.msg p{margin:0;font-size:clamp(20px,5.6vw,26px)}
.rb{max-width:430px;margin:auto;background:linear-gradient(90deg,var(--w),#8c1b3c,var(--w));color:#ffe9ee;padding:18px 12px;border-block:2px solid var(--g)}.rb div{padding:8px 0}.rb div+div{border-top:1px dashed #e6c27a66}.rb small{color:var(--g)}.rb b{display:block;font-size:clamp(21px,6vw,28px)}
.cd{display:flex;justify-content:center;gap:10px;direction:ltr}.cd div{width:70px;height:66px;background:var(--r);color:#fff;clip-path:url(#hc);display:flex;flex-direction:column;justify-content:center;padding-top:6px;animation:beat 1.3s infinite}.cd b{font:700 22px/1 Georgia,serif}.cd small{font-size:8px;letter-spacing:.1em}
.gal{display:grid;grid-template-columns:1fr 1fr;gap:6px;max-width:380px;margin:auto}.gal div{aspect-ratio:1/.95;filter:drop-shadow(0 6px 10px #c2294e44)}
.vp{max-width:400px;aspect-ratio:4/3;margin:12px auto;border-radius:200px 200px 22px 22px;background-size:cover;background-position:center;border:6px solid #fff;box-shadow:0 12px 30px #c2294e33}
.btn{display:inline-block;text-decoration:none;color:#fff;background:linear-gradient(110deg,#a81c40,#e0476b);padding:13px 30px;border-radius:99px;margin:6px;font:700 18px Amiri,serif;box-shadow:0 8px 20px #c2294e55}.btn.o{background:none;color:var(--r);border:1.5px solid var(--r);box-shadow:none}`;
const H='M120 215C50 160 20 120 20 80 20 45 45 22 75 22c20 0 36 10 45 28 9-18 25-28 45-28 30 0 55 23 55 58 0 40-30 80-100 135z';
const html=`<svg width="0" height="0" style="position:absolute"><clipPath id="hc" clipPathUnits="objectBoundingBox"><path d="M.5 .95C.1 .68 0 .45 0 .3 0 .12 .12 0 .27 0 .38 0 .46 .06 .5 .15 .54 .06 .62 0 .73 0 .88 0 1 .12 1 .3 1 .45 .9 .68 .5 .95Z"/></clipPath></svg>
<div id="in"><div class="t k">اضغط على القلب لفتح الدعوة</div><button class="seal" id="op" aria-label="افتح"><div class="ring"></div><svg viewBox="0 0 240 240"><defs><radialGradient id="wx" cx="35%" cy="30%"><stop offset="0" stop-color="#ff6b8d"/><stop offset=".6" stop-color="#b3153d"/><stop offset="1" stop-color="#5e0a20"/></radialGradient></defs><path d="${H}" fill="url(#wx)" stroke="#e6c27a" stroke-width="3"/><path d="${H}" fill="none" stroke="#ffffff30" stroke-width="2" transform="translate(120 120) scale(.82) translate(-120 -120)"/></svg><span id="ini"></span></button></div>
<div class="bg">${Array.from({length:10},(_,i)=>`<i style="left:${i*10+2}%;font-size:${14+i%4*8}px;animation-duration:${10+i*1.7}s;animation-delay:-${i*2.1}s">♥</i>`).join('')}</div>
<main><section class="top"><div class="k" style="color:var(--w);font-size:20px">بسم الله الرحمن الرحيم</div>
<svg class="cp" viewBox="0 0 240 270" aria-hidden="true"><g class="sw"><path d="M60 100 L108 100 L112 205 L58 205Z" fill="#2a1420"/><circle cx="84" cy="76" r="17" fill="#2a1420"/><path d="M84 100 L72 118 L84 150 L96 118Z" fill="#fff"/><path d="M84 106 L79 112 L84 118 L89 112Z" fill="#c2294e"/><rect x="62" y="205" width="20" height="55" rx="6" fill="#2a1420"/><rect x="88" y="205" width="20" height="55" rx="6" fill="#2a1420"/>
<path d="M165 98c-16 36-30 98-48 160h116c-18-62-32-124-48-160z" fill="#fff6f1" stroke="#e6c27a" stroke-width="2"/><circle cx="165" cy="76" r="16" fill="#e9c5a8"/><path d="M148 70c6-22 34-22 40 0 4 24 2 70 8 120-14-20-18-60-22-72-8 6-20 6-26-4z" fill="#fff" opacity=".85"/><path d="M110 148 L136 146" stroke="#e9c5a8" stroke-width="8" stroke-linecap="round"/><g class="hb"><path d="M122 138c-6-6-14-1-12 6 2 6 12 12 12 12s10-6 12-12c2-7-6-12-12-6z" fill="#e0476b"/></g></g>
<path class="fh" d="M110 120c-3-3-7-1-6 3 1 3 6 6 6 6s5-3 6-6c1-4-3-6-6-3z"/><path class="fh" d="M150 110c-3-3-7-1-6 3 1 3 6 6 6 6s5-3 6-6c1-4-3-6-6-3z"/><path class="fh" d="M130 100c-3-3-7-1-6 3 1 3 6 6 6 6s5-3 6-6c1-4-3-6-6-3z"/></svg>
<h1 id="bride"></h1><div class="k" style="color:var(--g);font-size:30px">♥</div><h1 id="groom"></h1></section>
<section class="sec rv"><div class="hh heart" id="hero"></div></section>
<section class="sec rv"><div class="msg"><h2>دعوة حب</h2><p id="msg"></p></div></section>
<section class="sec rv"><div class="rb"><div><small>التاريخ</small><b id="dateText"></b></div><div><small>الساعة</small><b id="timeText"></b></div><div><small>المكان</small><b id="venue"></b></div></div></section>
<section class="sec rv"><h2>باقي على الفرح</h2><div class="cd"><div><b id="d">00</b><small>DAYS</small></div><div><b id="h">00</b><small>HRS</small></div><div><b id="m">00</b><small>MIN</small></div><div><b id="s">00</b><small>SEC</small></div></div></section>
<section class="sec rv"><h2>حكايتنا</h2><div class="gal"><div class="heart" id="g1"></div><div class="heart" id="g2"></div><div class="heart" id="g3"></div><div class="heart" id="g4"></div></div></section>
<section class="sec rv"><h2>مكان الفرح</h2><div class="vp" id="vp"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="sec rv"><h2>وجودكم أحلى هدية</h2><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section><div style="height:40px"></div></main>`;
export default D=>{mount(D,{css,html,grad:[["#f6b8c4","#c2294e"],["#fbd5dc","#d9677f"],["#f3a9ba","#a81c40"],["#fac8d2","#cf5a74"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&display=swap'});
 const $=id=>document.getElementById(id);document.body.classList.add('lk');
 $('ini').textContent=((D.bride||'')[0]||'')+'♥'+((D.groom||'')[0]||'');
 const beat=()=>{try{const c=new(window.AudioContext||window.webkitAudioContext)();[0,.22].forEach(t=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=58;o.connect(g);g.connect(c.destination);g.gain.setValueAtTime(.0001,c.currentTime+t);g.gain.exponentialRampToValueAtTime(.5,c.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+t+.2);o.start(c.currentTime+t);o.stop(c.currentTime+t+.25)})}catch(e){}try{navigator.vibrate&&navigator.vibrate([40,90,40])}catch(e){}};
 $('op').onclick=()=>{if($('in').classList.contains('go'))return;$('in').classList.add('go');beat();
  for(let i=0;i<34;i++){const s=document.createElement('span');s.className='bp';s.textContent=i%3?'♥':'💗';const a=Math.random()*6.28,r=90+Math.random()*190;s.style.cssText=`--x:${Math.cos(a)*r}px;--y:${Math.sin(a)*r-40}px;--rt:${Math.random()*360}deg;font-size:${14+Math.random()*22}px;animation-delay:${Math.random()*.15}s`;document.body.appendChild(s);setTimeout(()=>s.remove(),1700)}
  setTimeout(()=>{document.body.classList.remove('lk');$('in').style.display='none'},2600)};
};
