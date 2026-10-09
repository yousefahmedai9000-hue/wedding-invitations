import {mount} from './_base.js';
const css=`:root{--bg:#0b0b0d;--g:#c9a24f;--g2:#f1d68d;--ink:#f2e9d6}
body{background:var(--bg);color:var(--ink);font-family:"Amiri",serif;line-height:1.8;text-align:center;background-image:repeating-linear-gradient(45deg,#ffffff05 0 1px,transparent 1px 22px)}
.k{font-family:"Reem Kufi",sans-serif}.en{font-family:"Cormorant SC","Cormorant Garamond",serif;letter-spacing:.4em;font-size:12px;color:var(--g)}
.fr{margin:14px;padding:14px;border:1px solid var(--g);position:relative}.fr:before{content:"";position:absolute;inset:6px;border:1px solid #c9a24f55;pointer-events:none}
.fan{height:90px;background:conic-gradient(from 270deg at 50% 100%,var(--g) 0 15deg,transparent 15deg 30deg,var(--g) 30deg 45deg,transparent 45deg 60deg,var(--g) 60deg 75deg,transparent 75deg 90deg,var(--g) 90deg 105deg,transparent 105deg 120deg,var(--g) 120deg 135deg,transparent 135deg 150deg,var(--g) 150deg 165deg,transparent 165deg 180deg);clip-path:ellipse(50% 100% at 50% 100%);width:180px;margin:0 auto -1px;opacity:.9}
.top{padding:calc(24px + env(safe-area-inset-top,0px)) 10px 50px}
.top h1{margin:6px 0;font:700 clamp(40px,13vw,76px)/1.15 "Reem Kufi",sans-serif;color:var(--g2);letter-spacing:.06em;background:linear-gradient(180deg,var(--g2),var(--g));-webkit-background-clip:text;background-clip:text;color:transparent}
.dm{display:flex;align-items:center;gap:10px;justify-content:center;color:var(--g);margin:10px 0}.dm:before,.dm:after{content:"";height:1px;width:60px;background:var(--g)}.dm i{width:9px;height:9px;background:var(--g);transform:rotate(45deg)}
.hero{width:min(74vw,300px);aspect-ratio:3/4;margin:20px auto;background-size:cover;background-position:center;clip-path:polygon(14% 0,86% 0,100% 8%,100% 92%,86% 100%,14% 100%,0 92%,0 8%);border:0;outline:2px solid var(--g)}
.sec{padding:46px 18px}
.sec p{margin:10px auto 0;max-width:420px;font-size:clamp(20px,5.6vw,26px)}
.info{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:440px;margin:20px auto 0}
.info div{border:1px solid var(--g);padding:14px 8px;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}
.info div.w{grid-column:1/-1}.info b{display:block;font:700 clamp(20px,5.6vw,26px)/1.3 "Reem Kufi",sans-serif;color:var(--g2)}
.cd{display:flex;gap:8px;justify-content:center;direction:ltr;margin-top:18px}
.cd div{width:70px;padding:12px 0;border:1px solid var(--g);font:600 28px/1 "Cormorant SC",serif;color:var(--g2);clip-path:polygon(8px 0,calc(100% - 8px) 0,100% 8px,100% calc(100% - 8px),calc(100% - 8px) 100%,8px 100%,0 calc(100% - 8px),0 8px)}
.cd small{display:block;font-size:9px;letter-spacing:.2em;color:var(--g);margin-top:6px}
.gal{display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:420px;margin:18px auto 0}
.gal div{aspect-ratio:3/4;background-size:cover;background-position:center;outline:1px solid var(--g);outline-offset:4px;margin:4px}
.vp{max-width:420px;aspect-ratio:16/10;margin:18px auto;background-size:cover;background-position:center;outline:1px solid var(--g);outline-offset:6px}
.btn{display:inline-block;text-decoration:none;color:#15110a;background:linear-gradient(110deg,var(--g),var(--g2));padding:13px 30px;margin:6px;font:700 17px "Reem Kufi",sans-serif;clip-path:polygon(12px 0,calc(100% - 12px) 0,100% 50%,calc(100% - 12px) 100%,12px 100%,0 50%)}.btn.o{background:none;color:var(--g2);outline:1px solid var(--g)}
.glow{animation:gl 4s ease-in-out infinite alternate}@keyframes gl{to{filter:drop-shadow(0 0 10px #c9a24f88)}}`;
const html=`<div class="fr"><section class="top"><div class="fan glow"></div><div class="en" style="margin-top:14px">THE WEDDING OF</div>
<h1 id="bride"></h1><div class="dm"><i></i></div><h1 id="groom"></h1><div class="hero glow" id="hero"></div></section></div>
<section class="sec rv"><div class="en">Invitation</div><p id="msg"></p><div class="info"><div><small class="en">DATE</small><b id="dateText"></b></div><div><small class="en">TIME</small><b id="timeText"></b></div><div class="w"><small class="en">VENUE</small><b id="venue"></b></div></div></section>
<section class="sec rv"><div class="dm"><i></i></div><div class="en">COUNTDOWN</div><div class="cd"><div><b id="d">00</b><small>DAYS</small></div><div><b id="h">00</b><small>HRS</small></div><div><b id="m">00</b><small>MIN</small></div><div><b id="s">00</b><small>SEC</small></div></div></section>
<section class="sec rv"><div class="en">Gallery</div><div class="gal"><div id="g1"></div><div id="g2"></div><div id="g3"></div><div id="g4"></div></div></section>
<section class="sec rv"><div class="en">Location</div><div class="vp" id="vp"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="sec rv"><div class="dm"><i></i></div><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a><div class="fan" style="transform:rotate(180deg);margin-top:30px"></div></section>`;
export default D=>mount(D,{css,html,grad:[["#3a2d12","#0e0b05"],["#2b2412","#0a0905"],["#40320f","#120d04"],["#33290f","#0b0804"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Reem+Kufi:wght@500;700&family=Cormorant+SC:wght@500;600&display=swap'});
