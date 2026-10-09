import {mount} from './_base.js';
const css=`:root{--e:#0a2b23;--g:#d7c29a;--g2:#f2e3bd}
body{background:var(--e) radial-gradient(circle at 25px 25px,#d7c29a14 2px,transparent 3px) 0 0/50px 50px;color:#f8f0df;font-family:"Amiri",serif;line-height:1.9;text-align:center}
.k{font-family:"Aref Ruqaa","Amiri",serif}
.arch{margin:0 auto;width:min(86vw,400px);padding:46px 20px 36px;background:linear-gradient(#0e3b30,#082219);border:2px solid var(--g);clip-path:polygon(50% 0,100% 14%,100% 100%,0 100%,0 14%);position:relative}
.top{padding:calc(30px + env(safe-area-inset-top,0px)) 0 20px}
.top h1{margin:0;font:700 clamp(46px,14vw,78px)/1.2 "Aref Ruqaa",serif;color:var(--g2)}
.top .wa{font-size:34px;color:var(--g)}
.circ{width:min(54vw,210px);aspect-ratio:1;margin:12px auto;border-radius:50%;background-size:cover;background-position:center;outline:2px solid var(--g);outline-offset:6px}
.star{color:var(--g);letter-spacing:.6em;margin:8px 0}
.sec{padding:28px 18px}
.sec h2{margin:0 0 10px;font:400 clamp(26px,7vw,34px) "Aref Ruqaa",serif;color:var(--g2)}
.sec p{margin:0 auto;max-width:420px;font-size:clamp(20px,5.6vw,26px)}
.i3{display:grid;gap:10px;max-width:420px;margin:auto}.i3 div{border:1px solid var(--g);border-radius:60px 60px 10px 10px;padding:16px 10px}.i3 small{color:var(--g)}.i3 b{display:block;font-size:clamp(21px,6vw,28px)}
.cd{display:flex;justify-content:center;gap:8px;direction:ltr}.cd div{width:68px;padding:12px 0;border:1px solid var(--g);clip-path:polygon(50% 0,100% 18%,100% 100%,0 100%,0 18%);background:#082219}.cd b{display:block;font:700 26px/1 Georgia,serif;color:var(--g2)}.cd small{font-size:9px;color:var(--g)}
.gal{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:400px;margin:auto}.gal div{aspect-ratio:3/4;background-size:cover;background-position:center;border:2px solid var(--g);clip-path:polygon(50% 0,100% 12%,100% 100%,0 100%,0 12%)}
.vp{width:min(86vw,400px);aspect-ratio:4/3;margin:12px auto;background-size:cover;background-position:center;clip-path:polygon(50% 0,100% 12%,100% 100%,0 100%,0 12%);border:2px solid var(--g)}
.btn{display:inline-block;text-decoration:none;color:#0a2b23;background:linear-gradient(110deg,var(--g),var(--g2));padding:12px 28px;border-radius:99px;margin:6px;font:700 18px Amiri,serif}.btn.o{background:none;color:var(--g2);border:1px solid var(--g)}`;
const html=`<section class="top"><div class="arch"><div class="wa">۞</div><div class="k" style="color:var(--g);font-size:22px">بسم الله الرحمن الرحيم</div><div class="circ" id="hero"></div><h1 id="bride"></h1><div class="star">✦ ✦ ✦</div><h1 id="groom"></h1></div></section>
<section class="sec rv"><h2>دعوة كريمة</h2><p id="msg"></p></section>
<section class="sec rv"><div class="i3"><div><small>التاريخ</small><b id="dateText"></b></div><div><small>الساعة</small><b id="timeText"></b></div><div><small>المكان</small><b id="venue"></b></div></div></section>
<section class="sec rv"><h2>باقي على الفرح</h2><div class="cd"><div><b id="d">00</b><small>يوم</small></div><div><b id="h">00</b><small>ساعة</small></div><div><b id="m">00</b><small>دقيقة</small></div><div><b id="s">00</b><small>ثانية</small></div></div></section>
<section class="sec rv"><h2>من حكايتنا</h2><div class="gal"><div id="g1"></div><div id="g2"></div><div id="g3"></div><div id="g4"></div></div></section>
<section class="sec rv"><h2>مكان اللقاء</h2><div class="vp" id="vp"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="sec rv"><div class="star">✦ ✦ ✦</div><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section>`;
export default D=>mount(D,{css,html,grad:[["#1c5a47","#0a2b23"],["#164a3a","#082219"],["#236b55","#0c3025"],["#1a5242","#09261d"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&display=swap'});
