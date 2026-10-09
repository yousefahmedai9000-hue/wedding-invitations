import {mount} from './_base.js';
const css=`:root{--s:#e9e4ff;--g:#e8cf8f}
body{background:linear-gradient(180deg,#05061a,#0d1233 55%,#1a1442);color:var(--s);font-family:"Amiri",serif;line-height:1.9;text-align:center;min-height:100vh}
.st{position:fixed;inset:0;pointer-events:none;background:radial-gradient(1.5px 1.5px at 12% 18%,#fff,transparent),radial-gradient(1px 1px at 78% 12%,#fff,transparent),radial-gradient(1.5px 1.5px at 40% 40%,#fff,transparent),radial-gradient(1px 1px at 88% 52%,#fff,transparent),radial-gradient(1.5px 1.5px at 22% 70%,#fff,transparent),radial-gradient(1px 1px at 64% 82%,#fff,transparent),radial-gradient(1px 1px at 8% 90%,#fff,transparent);animation:tw 4s ease-in-out infinite alternate;z-index:0}
@keyframes tw{from{opacity:.35}to{opacity:1}}
main{position:relative;z-index:1}
.moon{width:92px;height:92px;border-radius:50%;margin:0 auto;box-shadow:inset -30px 8px 0 0 var(--g);transform:rotate(-20deg);filter:drop-shadow(0 0 22px #e8cf8f88);animation:fl 6s ease-in-out infinite alternate}
@keyframes fl{to{transform:rotate(-12deg) translateY(8px)}}
.top{padding:calc(50px + env(safe-area-inset-top,0px)) 20px 40px}
.top h1{margin:6px 0;font:700 clamp(46px,15vw,84px)/1.15 "Aref Ruqaa",serif;color:#fff;text-shadow:0 0 28px #b9a8ff88}
.top .t{color:var(--g);letter-spacing:.3em;font-size:14px;margin-top:18px}
.orb{width:min(66vw,260px);aspect-ratio:1;margin:24px auto;border-radius:50%;background-size:cover;background-position:center;box-shadow:0 0 0 6px #ffffff12,0 0 60px #8c7bff66}
.gl{max-width:430px;margin:18px auto;padding:30px 22px;background:#ffffff0f;border:1px solid #ffffff22;border-radius:26px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.gl p{margin:0;font-size:clamp(20px,5.6vw,26px)}.gl h2{margin:0 0 8px;font:400 28px "Aref Ruqaa",serif;color:var(--g)}
.dt b{display:block;font-size:clamp(22px,6.4vw,30px);color:#fff}.dt div+div{margin-top:12px;padding-top:12px;border-top:1px dashed #ffffff30}
.cd{display:flex;gap:10px;justify-content:center;direction:ltr}.cd div{width:68px;height:68px;border-radius:50%;border:1px solid var(--g);display:flex;flex-direction:column;justify-content:center;box-shadow:0 0 18px #e8cf8f33}.cd b{font:300 24px/1 Georgia,serif}.cd small{font-size:8px;color:var(--g);letter-spacing:.15em}
.gal{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px 22px 24px;direction:ltr;scrollbar-width:none}.gal::-webkit-scrollbar{display:none}
.gal div{flex:0 0 62vw;max-width:260px;aspect-ratio:1;border-radius:50%;scroll-snap-align:center;background-size:cover;background-position:center;box-shadow:0 0 0 5px #ffffff10,0 0 40px #8c7bff44}
.vp{width:100%;aspect-ratio:16/10;background-size:cover;background-position:center;border-radius:18px;margin:10px 0 16px}
.btn{display:inline-block;text-decoration:none;color:#14103a;background:linear-gradient(110deg,#d9bd78,#fff1c7);padding:12px 28px;border-radius:99px;margin:6px;font:700 18px Amiri,serif}.btn.o{background:none;color:var(--g);border:1px solid var(--g)}`;
const html=`<div class="st"></div><main><section class="top"><div class="moon"></div><div class="t">✦ ليلة العمر ✦</div><div class="orb" id="hero"></div><h1 id="bride"></h1><div style="color:var(--g)">✧ ✦ ✧</div><h1 id="groom"></h1></section>
<section class="gl rv"><h2>دعوة</h2><p id="msg"></p></section>
<section class="gl dt rv"><div><small>التاريخ</small><b id="dateText"></b></div><div><small>الساعة</small><b id="timeText"></b></div><div><small>المكان</small><b id="venue"></b></div></section>
<section class="gl rv"><h2>العد التنازلي</h2><div class="cd"><div><b id="d">00</b><small>DAYS</small></div><div><b id="h">00</b><small>HRS</small></div><div><b id="m">00</b><small>MIN</small></div><div><b id="s">00</b><small>SEC</small></div></div></section>
<section class="rv" style="padding:20px 0"><h2 style="font:400 28px 'Aref Ruqaa',serif;color:var(--g);margin:0">نجوم حكايتنا</h2><div class="gal"><div id="g1"></div><div id="g2"></div><div id="g3"></div><div id="g4"></div></div></section>
<section class="gl rv"><div class="vp" id="vp"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="gl rv"><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section><div style="height:40px"></div></main>`;
export default D=>mount(D,{css,html,grad:[["#3b2d8c","#0d1233"],["#2a2f7a","#080b25"],["#4a3a9e","#10173f"],["#33307f","#0a0e2c"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&display=swap'});
