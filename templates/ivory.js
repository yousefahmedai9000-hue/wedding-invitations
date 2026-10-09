import {mount} from './_base.js';
const css=`:root{--bg:#faf9f6;--ink:#1a1a18;--mut:#8b877e;--ln:#d9d5cb}
body{background:var(--bg);color:var(--ink);font-family:"Tajawal","Amiri",sans-serif;font-weight:300;line-height:1.9}
.en{font-family:"Cormorant Garamond",serif;letter-spacing:.3em;font-size:11px;text-transform:uppercase;color:var(--mut)}
.w{max-width:560px;margin:auto;padding:0 28px}
.top{min-height:92svh;display:flex;flex-direction:column;justify-content:flex-end;padding-top:calc(50px + env(safe-area-inset-top,0px));padding-bottom:50px}
.top h1{margin:0;font:200 clamp(64px,22vw,150px)/.95 "Tajawal",sans-serif;letter-spacing:-.03em}
.top .a{display:flex;align-items:center;gap:14px;margin:14px 0;color:var(--mut)}.top .a:after{content:"";flex:1;height:1px;background:var(--ln)}
.sec{padding:70px 0;border-top:1px solid var(--ln)}
.sec p{margin:0;font-size:clamp(20px,5.4vw,26px)}
dl{margin:0}dl div{display:flex;justify-content:space-between;align-items:baseline;gap:20px;padding:16px 0;border-bottom:1px solid var(--ln)}
dt{color:var(--mut)}dd{margin:0;font-size:clamp(19px,5.4vw,26px);text-align:end}
.cd{display:flex;direction:ltr;justify-content:space-between;font:200 clamp(38px,13vw,72px)/1 "Cormorant Garamond",serif;font-variant-numeric:tabular-nums}
.cd small{display:block;font:10px "Cormorant Garamond",serif;letter-spacing:.25em;color:var(--mut);margin-top:6px}
.ph{aspect-ratio:4/5;background-size:cover;background-position:center;margin-bottom:6px;filter:grayscale(.15)}
.ph.s{aspect-ratio:16/10}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.duo .ph{aspect-ratio:3/4;margin:0}.duo .ph:nth-child(even){margin-top:36px}
.bar{position:fixed;left:0;right:0;bottom:0;display:flex;gap:1px;background:var(--ink);z-index:9;padding-bottom:env(safe-area-inset-bottom,0px)}
.bar a{flex:1;text-align:center;color:var(--bg);text-decoration:none;padding:15px 0;font-size:16px;letter-spacing:.05em}.bar a+a{border-inline-start:1px solid #555}
.ft{height:90px}`;
const html=`<div class="w"><section class="top"><div class="en">Wedding invitation</div><h1 id="bride"></h1><div class="a"><span class="en">&amp;</span></div><h1 id="groom"></h1></section>
<section class="sec rv"><div class="en" style="margin-bottom:18px">01 — Invitation</div><p id="msg"></p></section>
<section class="sec rv"><div class="en" style="margin-bottom:6px">02 — Details</div><dl><div><dt>التاريخ</dt><dd id="dateText"></dd></div><div><dt>الساعة</dt><dd id="timeText"></dd></div><div><dt>المكان</dt><dd id="venue"></dd></div></dl></section>
<section class="sec rv"><div class="en" style="margin-bottom:22px">03 — Countdown</div><div class="cd"><div><span id="d">00</span><small>DAYS</small></div><div><span id="h">00</span><small>HRS</small></div><div><span id="m">00</span><small>MIN</small></div><div><span id="s">00</span><small>SEC</small></div></div></section>
<section class="sec rv"><div class="en" style="margin-bottom:22px">04 — Moments</div><div class="ph" id="hero"></div><div class="duo"><div class="ph" id="g1"></div><div class="ph" id="g2"></div><div class="ph" id="g3"></div><div class="ph" id="g4"></div></div></section>
<section class="sec rv"><div class="en" style="margin-bottom:22px">05 — Venue</div><div class="ph s" id="vp"></div><p id="venue2" style="margin-top:14px"></p></section><div class="ft"></div></div>
<nav class="bar"><a id="mapBtn" target="_blank" rel="noopener">الموقع</a><a id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a id="shareBtn" href="#">مشاركة</a></nav>`;
export default D=>mount(D,{css,html,grad:[["#e8e4da","#cfc9ba"],["#dcd8cc","#b9b3a2"],["#efece3","#d6d0c0"],["#e1ddd1","#c2bcab"]],fonts:'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400&family=Amiri:wght@400&family=Cormorant+Garamond:wght@200;300&display=swap'});
