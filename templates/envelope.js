import {mount} from './_base.js';
const css=`:root{--p:#f6efe2;--ink:#3b2f24;--r:#9b2f3a}
body{background:var(--p);color:var(--ink);font-family:"Amiri",serif;line-height:1.9;text-align:center}body.lk{overflow:hidden;height:100vh}
.k{font-family:"Aref Ruqaa","Amiri",serif}
#ev{position:fixed;inset:0;z-index:50;background:radial-gradient(#ead9b9,#c9b186);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px;transition:opacity 1s 1.9s}#ev.go{opacity:0;pointer-events:none}
.env{position:relative;width:min(84vw,330px);height:min(56vw,225px);perspective:900px}
.back{position:absolute;inset:0;background:#e6d5b2;box-shadow:0 24px 50px #0005}
.let{position:absolute;inset:10px;background:#fffdf8;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:transform 1.1s ease .7s;z-index:2;font-size:22px}
.fr{position:absolute;inset:0;background:linear-gradient(#efe2c4,#dcc9a0);clip-path:polygon(0 0,50% 54%,100% 0,100% 100%,0 100%);z-index:3}
.fp{position:absolute;top:0;left:0;right:0;height:56%;background:#d9c598;clip-path:polygon(0 0,100% 0,50% 100%);transform-origin:top;transition:transform .8s ease;z-index:4}
.wax{position:absolute;left:50%;top:46%;width:54px;height:54px;margin:-27px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#d4505c,var(--r) 60%,#5c1620);z-index:5;display:flex;align-items:center;justify-content:center;color:#f6d9b8;font-size:24px;transition:opacity .3s}
#ev.go .fp{transform:rotateX(180deg);z-index:1}#ev.go .let{transform:translateY(-62%)}#ev.go .wax{opacity:0}
#op{border:1px solid var(--r);background:none;color:var(--r);font:20px Amiri,serif;padding:11px 30px;border-radius:99px;cursor:pointer}#ev.go #op{opacity:0}
.top{padding:calc(40px + env(safe-area-inset-top,0px)) 22px 30px}
.card{max-width:420px;margin:auto;background:#fffdf8;padding:30px 22px 40px;box-shadow:0 12px 40px #3b2f2422;position:relative;outline:1px solid #9b2f3a44;outline-offset:-10px}
.card h1{margin:4px 0;font:700 clamp(46px,14vw,74px)/1.15 "Aref Ruqaa",serif;color:var(--r)}
.ph{aspect-ratio:4/3;background-size:cover;background-position:center;margin:16px 0}
.st{display:inline-block;transform:rotate(-6deg);border:2px dashed var(--r);color:var(--r);padding:8px 18px;margin:10px;font:700 24px "Aref Ruqaa",serif}
.sec{padding:30px 22px}.sec p{margin:0 auto;max-width:420px;font-size:clamp(20px,5.6vw,26px)}
.cd{display:flex;gap:8px;justify-content:center;direction:ltr}.cd div{background:#fffdf8;padding:12px 10px;min-width:64px;box-shadow:0 6px 18px #3b2f2418}.cd b{display:block;font:700 26px/1 Georgia,serif;color:var(--r)}.cd small{font-size:9px;letter-spacing:.15em}
.gal{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:400px;margin:auto}.gal div{aspect-ratio:3/4;background-size:cover;background-position:center;border:8px solid #fffdf8;box-shadow:0 8px 22px #3b2f242a}.gal div:nth-child(odd){transform:rotate(-2deg)}.gal div:nth-child(even){transform:rotate(2deg)}
.btn{display:inline-block;text-decoration:none;color:#fff;background:var(--r);padding:12px 28px;border-radius:4px;margin:6px;font-size:18px}.btn.o{background:none;color:var(--r);border:1px solid var(--r)}`;
const html=`<div id="ev"><div class="env"><div class="back"></div><div class="let"><div class="k" style="color:var(--r);font-size:30px" id="eb"></div><div>&amp;</div><div class="k" style="color:var(--r);font-size:30px" id="eg"></div></div><div class="fr"></div><div class="fp"></div><div class="wax">❦</div></div><button id="op">افتح الرسالة</button></div>
<section class="top"><div class="card"><div style="font-size:18px">بسم الله الرحمن الرحيم</div><h1 id="bride"></h1><div>&amp;</div><h1 id="groom"></h1><div class="ph" id="hero"></div><p id="msg" style="margin:0"></p></div></section>
<section class="sec rv"><div class="st" id="dateText"></div><div class="st" id="timeText"></div><p id="venue" style="margin-top:10px"></p></section>
<section class="sec rv"><div class="cd"><div><b id="d">00</b><small>DAYS</small></div><div><b id="h">00</b><small>HRS</small></div><div><b id="m">00</b><small>MIN</small></div><div><b id="s">00</b><small>SEC</small></div></div></section>
<section class="sec rv"><div class="gal"><div id="g1"></div><div id="g2"></div><div id="g3"></div><div id="g4"></div></div></section>
<section class="sec rv"><div class="ph" id="vp" style="max-width:400px;margin:0 auto 14px"></div><a class="btn" id="mapBtn" target="_blank" rel="noopener">الموقع على الخريطة</a></section>
<section class="sec rv"><a class="btn" id="rsvpBtn" target="_blank" rel="noopener">تأكيد الحضور</a><a class="btn o" id="shareBtn" href="#">مشاركة</a></section>`;
export default D=>{mount(D,{css,html,grad:[["#e8d9bd","#c4ad82"],["#eadfca","#cdb98f"],["#e2d2b2","#b9a177"],["#ecdfc6","#c8b389"]],fonts:'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&display=swap'});
 const $=id=>document.getElementById(id);$('eb').textContent=D.bride||'';$('eg').textContent=D.groom||'';document.body.classList.add('lk');
 const go=()=>{$('ev').classList.add('go');setTimeout(()=>{document.body.classList.remove('lk');$('ev').style.display='none'},3000)};$('op').onclick=go;$('ev').querySelector('.wax').onclick=go};
