import cfg from './site-config.js';
const el=(t,p,txt)=>{const e=document.createElement(t);if(p)Object.assign(e,p);if(txt)e.textContent=txt;return e};
/* ---------- فوتر التواصل ---------- */
(function(){const c=cfg.contact||{};if(![c.name,c.whatsapp,c.instagram,c.facebook,c.email].some(Boolean))return;
 const f=el('div');f.id='ex-ft';f.style.cssText='position:relative;z-index:5;margin:0;padding:30px 20px calc('+(34+(document.querySelector('nav.bar')?60:0))+'px + env(safe-area-inset-bottom,0px));background:rgba(12,10,14,.92);color:#f3ead9;text-align:center;font-family:Tahoma,Arial,sans-serif;direction:rtl;border-top:1px solid rgba(212,176,106,.4)';
 f.appendChild(el('div',{},c.title||'للتواصل')).style.cssText='font-size:14px;color:#d4b06a;margin-bottom:6px';
 if(c.name)f.appendChild(el('div',{},c.name)).style.cssText='font-size:22px;font-weight:700;margin-bottom:14px';
 const row=el('div');row.style.cssText='display:flex;gap:10px;justify-content:center;flex-wrap:wrap';
 const L=(t,h)=>{const a=el('a',{href:h,target:'_blank',rel:'noopener'},t);a.style.cssText='color:#14100a;background:linear-gradient(110deg,#b8903f,#f0d99c);text-decoration:none;padding:10px 20px;border-radius:99px;font-size:15px;font-weight:700';row.appendChild(a)};
 if(c.whatsapp)L('واتساب','https://wa.me/'+String(c.whatsapp).replace(/\D/g,''));
 if(c.instagram)L('إنستجرام','https://instagram.com/'+String(c.instagram).replace(/^@/,''));
 if(c.facebook)L('فيسبوك',c.facebook);
 if(c.email)L('إيميل','mailto:'+c.email);
 f.appendChild(row);document.body.appendChild(f)})();
/* ---------- الموسيقى ---------- */
(function(){let eng=null,on=false,asked=false;
 const synth=()=>{const C=new(window.AudioContext||window.webkitAudioContext)(),g=C.createGain();g.gain.value=(cfg.volume||.5)*.3;g.connect(C.destination);
  const P=[[261.6,329.6,392],[220,261.6,329.6],[174.6,220,261.6],[196,246.9,293.7]];let i=0,tid=0;
  const n=(f,t,d)=>{const o=C.createOscillator(),e=C.createGain();o.type='triangle';o.frequency.value=f;e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.5,t+.03);e.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(e);e.connect(g);o.start(t);o.stop(t+d)};
  const bar=()=>{const t=C.currentTime+.05,ch=P[i++%4];[0,1,2,1,2,1,0,2].forEach((k,j)=>n(ch[k]*(j%4?1:.5),t+j*.42,1.4));n(ch[0]/2,t,3.2);tid=setTimeout(bar,3300)};
  return{play(){C.resume();clearTimeout(tid);bar()},pause(){clearTimeout(tid);C.suspend()}}};
 const file=()=>{const a=new Audio(cfg.music);a.loop=true;a.volume=cfg.volume||.5;return{play(){return a.play()},pause(){a.pause()}}};
 const b=el('button',{type:'button',ariaLabel:'الموسيقى'},'🔇');const nb=document.querySelector('nav.bar')?64:0;b.style.cssText='position:fixed;left:14px;bottom:calc('+(14+nb)+'px + env(safe-area-inset-bottom,0px));width:46px;height:46px;border-radius:50%;border:1px solid rgba(212,176,106,.6);background:rgba(12,10,14,.75);color:#fff;font-size:20px;z-index:90;cursor:pointer;backdrop-filter:blur(6px)';
 const set=v=>{on=v;b.textContent=v?'🔊':'🔇'};
 const start=()=>{if(asked)return;asked=true;try{eng=cfg.music?file():synth();Promise.resolve(eng.play()).then(()=>set(true)).catch(()=>{asked=false})}catch(e){asked=false}};
 b.onclick=e=>{e.stopPropagation();if(!eng){start();return}on?(eng.pause(),set(false)):(Promise.resolve(eng.play()),set(true))};
 ['pointerdown','touchend','keydown'].forEach(ev=>addEventListener(ev,start,{once:true,passive:true}));
 document.body.appendChild(b)})();
