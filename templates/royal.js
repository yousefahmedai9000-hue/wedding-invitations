import {mount} from './_base.js';
const css=`:root{--g:#d9b66d;--g2:#f6e3b0}
body{background:radial-gradient(circle at 50% 0,#2a1d0c,#070605 60%);color:#f7efe0;font-family:"Amiri",serif;line-height:1.9;text-align:center}
.gt{background:linear-gradient(180deg,var(--g2),#a9822f);-webkit-background-clip:text;background-clip:text;color:transparent}
.orn{color:var(--g);font-size:22px;letter-spacing:.5em;margin:10px 0}
.top{padding:calc(36px + env(safe-area-inset-top,0px)) 20px 40px}
.top h1{margin:6px 0;font:700 clamp(46px,15vw,86px)/1.15 "Amiri",serif}
.ring{width:min(70vw,280px);aspect-ratio:1/1.25;margin:22px auto;border-radius:50%;background-size:cover;background-position:center;border:3px solid var(--g);box-shadow:0 0 0 8px #070605,0 0 0 10px var(--g),0 0 70px #d9b66d44}
.rib{margin:26px -10px;padding:22px 28px;background:linear-gradient(90deg,#4a0f16,#7a1a24,#4a0f16);border-block:2px solid var(--g);font-size:clamp(20px,5.6vw,26px)}
.sec{padding:36px 20px}
.tb{max-width:420px;margin:auto;border:1px solid var(--g);padding:6px}.tb div{display:flex;justify-content:space-between;gap:12px;padding:12px 14px;border-bottom:1px solid #d9b66d44}.tb div:last-child{border:0}.tb span{color:var(--g)}.tb b{font-size:clamp(18px,5vw,24px);text-align:end}
.cd{display:flex;justify-content:center;gap:10px;direction:ltr}.cd div{width:70px;padding:12px 0;border:1px solid var(--g);border-radius:40px 40px 6px 6px}.cd b{display:block;font:700 28px/1 Georgia,serif;color:var(--g2)}.cd small{font-size:10px;color:var(--g);letter-spacing:.2em}
.gal{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:400px;margin:auto}.gal div{aspect-ratio:3/4;background-size:cover;background-position:center;border:2px solid var(--g);border-radius:120px 120px 8px 8px}
.vp{width:min(84vw,380px);aspect-ratio:4/3;margin:16px auto;border-radius:200px 200px 10px 10px;background-size:cover;background-position:center;border:2px solid var(--g)}
.btn{display:inline-block;text-decoration:none;color:#1b1307;background:linear-gradient(110deg,#b28b3d,var(--g2));padding:13px 30px;border-radius:99px;margin:6px;font:700 18px Amiri,serif}.btn.o{background:none;color:var(--g2);border:1px solid var(--g)}`;
const html=`<section class="top"><div class="orn">❦ ❦ ❦</div><div class="gt" style="font-size:20px">بسم الله الرحمن الرحيم</div><div class="ring" id="hero"></div>
<h1 class="gt" id="bride"></h1><div class="orn">❖</div><h1 class="gt" id="groom"></h1></section>
<div class="rib rv"><span id="msg"></span></div>
<section class="sec rv"><div class="tb"><div><span>التاريخ</span><b id="dateText"></b></div><div><span>الساعة</span><b id="timeText"></b></div><div><span>المكان</span><b id="venue"></b></div></div></section>
<section class="sec rv"><div class="orn">✦</div><div class="cd"><div><b id="d">00</b><small>DAYS</small></div><div><b id="h">00</b><small>HRS</small></div><div><b id="m">00</b><small>MIN</small></div><div><b id="s">00</b><small>SEC</small></div></div></section>
<section class="sec rv"><div class="gal"><div id="g1"></div><div id="g2"></div><div id="g3"></div><div id="g4"></div></div></section>
<section class="sec rv"><div class="vp" id="vp"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="sec rv"><div class="orn">❦</div><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section>`;
export default D=>mount(D,{css,html,grad:[["#3a2a12","#0c0905"],["#2c2010","#0a0704"],["#43310f","#100b04"],["#352810","#0b0804"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'});
