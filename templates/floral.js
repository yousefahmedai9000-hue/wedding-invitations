import {mount} from './_base.js';
const leaf='<svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true"><g fill="none" stroke="#7d9470" stroke-width="1.4"><path d="M5 115C30 80 50 50 100 8"/><path d="M30 88c-14-2-22-12-24-24 14 0 24 8 24 24zM52 62c-12-4-18-15-18-27 14 2 21 12 18 27zM76 36c-9-6-12-17-9-27 12 5 15 15 9 27z"/></g><g fill="#e9b7bf" opacity=".85"><circle cx="100" cy="10" r="7"/><circle cx="86" cy="18" r="5"/><circle cx="108" cy="26" r="4"/></g></svg>';
const css=`:root{--bg:#fbf4ee;--rose:#c98a96;--sage:#7d9470;--ink:#4a3338}
body{background:var(--bg);color:var(--ink);font-family:"Amiri",serif;line-height:1.8;text-align:center}
.k{font-family:"Aref Ruqaa","Amiri",serif}.en{font-family:"Cormorant Garamond",serif;letter-spacing:.3em;font-size:11px;text-transform:uppercase;color:var(--sage)}
.sec{padding:60px 22px;position:relative}
.arch{width:min(78vw,340px);aspect-ratio:3/4.2;margin:0 auto;border-radius:999px 999px 18px 18px;background-size:cover;background-position:center;border:8px solid #fff;box-shadow:0 18px 50px #c98a9633;position:relative}
.top{padding-top:calc(40px + env(safe-area-inset-top,0px));background:radial-gradient(circle at 50% 0,#f6dfe0,transparent 60%)}
.top h1{margin:20px 0 0;font:700 clamp(46px,15vw,84px)/1.1 "Aref Ruqaa",serif;color:var(--rose)}
.top h1+i{display:block;font:italic 300 34px "Cormorant Garamond",serif;color:var(--sage)}
.lf{position:absolute;opacity:.9;pointer-events:none}.lf.a{top:0;inset-inline-start:0}.lf.b{top:0;inset-inline-end:0;transform:scaleX(-1)}.lf.c{bottom:0;inset-inline-start:0;transform:scaleY(-1)}.lf.d{bottom:0;inset-inline-end:0;transform:scale(-1)}
.card{max-width:420px;margin:0 auto;background:#fff;border-radius:200px 200px 24px 24px/120px 120px 24px 24px;padding:70px 26px 40px;box-shadow:0 14px 40px #c98a9622;position:relative}
.card p{margin:12px 0 0;font-size:clamp(20px,5.6vw,26px)}
.badge{width:180px;height:180px;border-radius:50%;margin:0 auto;border:1.5px dashed var(--rose);display:flex;flex-direction:column;justify-content:center;font-size:20px}
.badge b{font:700 24px "Aref Ruqaa",serif;color:var(--rose)}
.cd{display:flex;gap:10px;justify-content:center;direction:ltr;margin-top:20px}
.cd div{width:72px;height:72px;border-radius:50%;background:#fff;border:1px solid #e9b7bf;display:flex;flex-direction:column;justify-content:center;font:300 26px "Cormorant Garamond",serif;line-height:1}
.cd small{font-size:9px;color:var(--sage);letter-spacing:.15em}
.pol{display:grid;grid-template-columns:1fr 1fr;gap:20px 14px;max-width:420px;margin:0 auto}
.pol div{background:#fff;padding:8px 8px 26px;box-shadow:0 8px 24px #4a33381f}
.pol div i{display:block;aspect-ratio:1;background-size:cover;background-position:center}
.pol div:nth-child(1){transform:rotate(-4deg)}.pol div:nth-child(2){transform:rotate(3deg) translateY(20px)}.pol div:nth-child(3){transform:rotate(2deg)}.pol div:nth-child(4){transform:rotate(-3deg) translateY(18px)}
.vp{width:min(86vw,380px);aspect-ratio:4/3;margin:20px auto;border-radius:180px 180px 18px 18px;background-size:cover;background-position:center;border:6px solid #fff}
.btn{display:inline-block;text-decoration:none;background:var(--rose);color:#fff;padding:12px 28px;border-radius:99px;margin:6px;font-size:18px}.btn.o{background:none;border:1.5px solid var(--rose);color:var(--rose)}
h2.k{margin:6px 0 14px;font-size:clamp(28px,8vw,40px);color:var(--rose);font-weight:400}
.fl{position:fixed;top:-20px;font-size:16px;opacity:.7;animation:fall linear infinite;pointer-events:none;z-index:3}
@keyframes fall{to{transform:translateY(110vh) rotate(360deg)}}`;
const html=`${[1,2,3,4,5,6,7].map(i=>`<span class="fl" style="left:${i*14-6}%;animation-duration:${11+i*2}s;animation-delay:-${i*2}s">❀</span>`).join('')}
<section class="sec top"><div class="lf a">${leaf}</div><div class="lf b">${leaf}</div>
<div class="en">بسم الله الرحمن الرحيم</div><div class="arch" id="hero" style="margin-top:20px"></div>
<h1 id="bride"></h1><i>&amp;</i><h1 id="groom"></h1></section>
<section class="sec rv"><div class="card"><div class="en">دعوة زفاف</div><p id="msg"></p></div></section>
<section class="sec rv"><div class="badge"><span class="en">Save the date</span><b id="dateText"></b><span id="timeText"></span></div>
<div class="cd"><div><b id="d">00</b><small>DAYS</small></div><div><b id="h">00</b><small>HRS</small></div><div><b id="m">00</b><small>MIN</small></div><div><b id="s">00</b><small>SEC</small></div></div></section>
<section class="sec rv"><h2 class="k">لحظاتنا</h2><div class="pol"><div><i id="g1"></i></div><div><i id="g2"></i></div><div><i id="g3"></i></div><div><i id="g4"></i></div></div></section>
<section class="sec rv"><div class="lf c">${leaf}</div><div class="lf d">${leaf}</div><div class="en">مكان الحفل</div><div class="vp" id="vp"></div><h2 class="k" id="venue"></h2><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="sec rv"><h2 class="k">يسعدنا حضوركم</h2><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section>`;
export default D=>mount(D,{css,html,grad:[["#f3d3d6","#c98a96"],["#dfe6d6","#7d9470"],["#f7e6dc","#d9a98f"],["#e8d5e0","#a97a95"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap'});
