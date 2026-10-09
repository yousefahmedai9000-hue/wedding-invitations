import {mount} from './_base.js';
const css=`:root{--s:#ece8df;--ink:#161512;--m:#7a7568;--a:#b5483a}
body{background:var(--s);color:var(--ink);font-family:"Tajawal",sans-serif;line-height:1.7}
.mono{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.08em;color:var(--m)}
.w{padding:0 18px;max-width:640px;margin:auto}
.hd{display:flex;justify-content:space-between;padding:calc(14px + env(safe-area-inset-top,0px)) 18px 10px;border-bottom:1px solid var(--ink)}
.h{position:relative;padding:26px 0 0}
.h .big{font:800 clamp(64px,21vw,150px)/.88 "Tajawal",sans-serif;margin:0;text-transform:uppercase}
.h .big.b{margin-inline-start:18vw;color:transparent;-webkit-text-stroke:1.5px var(--ink)}
.blk{height:62vh;margin:26px 0 0;background-size:cover;background-position:center;position:relative;filter:grayscale(.3) contrast(1.05)}
.blk:after{content:"";position:absolute;inset:14px -14px -14px 14px;border:1px solid var(--ink);z-index:-1}
.ln{display:grid;grid-template-columns:64px minmax(0,1fr);gap:10px;padding:28px 0;border-top:1px solid var(--ink)}
.ln>i{font:200 54px/1 "IBM Plex Mono",monospace;font-style:normal;color:var(--a)}
.ln p{margin:0;font-size:clamp(19px,5.2vw,24px)}
.tbl{width:100%;border-collapse:collapse}.tbl td{padding:12px 0;border-bottom:1px solid #16151233;vertical-align:baseline}.tbl td:first-child{width:90px}.tbl b{font-size:clamp(19px,5.4vw,26px);font-weight:700}
.cd{display:grid;grid-template-columns:repeat(4,1fr);direction:ltr;border:1px solid var(--ink)}.cd div{padding:14px 0;text-align:center;border-inline-end:1px solid var(--ink)}.cd div:last-child{border:0}.cd b{display:block;font:300 clamp(30px,10vw,52px)/1 "IBM Plex Mono",monospace}
.gr{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:8px}.gr div{background-size:cover;background-position:center;filter:grayscale(.3)}.gr div:nth-child(1){aspect-ratio:1/1.2}.gr div:nth-child(2){aspect-ratio:1/1.9;margin-top:40px}.gr div:nth-child(3){aspect-ratio:1/1.9;margin-top:-40px}.gr div:nth-child(4){aspect-ratio:1/1.2}
.vp{aspect-ratio:16/9;background-size:cover;background-position:center;margin-bottom:12px}
.btn{display:block;text-align:center;text-decoration:none;color:var(--s);background:var(--ink);padding:15px;margin:8px 0;font-weight:700}.btn.o{background:none;color:var(--ink);border:1px solid var(--ink)}
.ft{padding:40px 0}`;
const html=`<div class="hd mono"><span>WEDDING / INVITATION</span><span>SAVE THE DATE</span></div>
<div class="w"><section class="h"><div class="mono">N 30°03′ E 31°14′</div><h1 class="big" id="bride"></h1><h1 class="big b" id="groom"></h1><div class="blk" id="hero"></div></section>
<section class="ln rv"><i>01</i><p id="msg"></p></section>
<section class="ln rv"><i>02</i><table class="tbl"><tr><td class="mono">DATE</td><td><b id="dateText"></b></td></tr><tr><td class="mono">TIME</td><td><b id="timeText"></b></td></tr><tr><td class="mono">VENUE</td><td><b id="venue"></b></td></tr></table></section>
<section class="ln rv"><i>03</i><div class="cd"><div><b id="d">00</b><span class="mono">DAYS</span></div><div><b id="h">00</b><span class="mono">HRS</span></div><div><b id="m">00</b><span class="mono">MIN</span></div><div><b id="s">00</b><span class="mono">SEC</span></div></div></section>
<section class="ln rv"><i>04</i><div class="gr"><div id="g1"></div><div id="g2"></div><div id="g3"></div><div id="g4"></div></div></section>
<section class="ln rv"><i>05</i><div><div class="vp" id="vp"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></div></section><div class="ft"></div></div>`;
export default D=>mount(D,{css,html,grad:[["#bdb7a6","#6f6a5c"],["#a9a391","#4c483e"],["#cfc9b8","#8a8473"],["#b5af9d","#58544a"]],fonts:'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;500;800&family=IBM+Plex+Mono:wght@200;400&display=swap'});
