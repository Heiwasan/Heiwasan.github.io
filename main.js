const EN=document.documentElement.lang==='en';
const lb=document.getElementById('lb');
if(lb){const im=lb.querySelector('img'),cp=lb.querySelector('p'),box=lb.querySelector('.lbs');let list=[],cur=0,last=null;
function show(i){cur=(i+list.length)%list.length;const b=list[cur];im.src=b.dataset.src;im.alt=b.dataset.cap;cp.textContent=b.dataset.cap+' · '+b.dataset.dev+'  ('+(cur+1)+'/'+list.length+')';box.scrollTop=0}
function close_(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
document.querySelectorAll('.zm').forEach(b=>b.onclick=()=>{list=[...document.querySelectorAll('.zm')];last=b;lb.hidden=false;document.body.style.overflow='hidden';show(list.indexOf(b));document.getElementById('lbx').focus()});
document.getElementById('lbx').onclick=close_;document.getElementById('lbp').onclick=()=>show(cur-1);document.getElementById('lbn').onclick=()=>show(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb)close_()});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close_();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
let x0=null;lb.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>60)show(cur+(d<0?1:-1));x0=null})}
document.querySelectorAll('.car').forEach(car=>{const tr=car.querySelector('.track'),sl=[...tr.querySelectorAll('.slide')],cnt=car.querySelector('.cnt'),pb=car.querySelector('.cp'),nb=car.querySelector('.cn');
const idx=()=>{const c=tr.scrollLeft+tr.clientWidth/2;let b=0,bd=1e9;sl.forEach((s,i)=>{const d=Math.abs(s.offsetLeft+s.offsetWidth/2-c);if(d<bd){bd=d;b=i}});return b};
const go=i=>{i=Math.max(0,Math.min(sl.length-1,i));const s=sl[i];tr.scrollTo({left:s.offsetLeft-(tr.clientWidth-s.offsetWidth)/2,behavior:'smooth'})};
const upd=()=>{const i=idx();cnt.textContent=(i+1)+' / '+sl.length;pb.disabled=i===0;nb.disabled=i===sl.length-1};
pb.onclick=()=>go(idx()-1);nb.onclick=()=>go(idx()+1);tr.addEventListener('scroll',()=>requestAnimationFrame(upd));
tr.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();go(idx()+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(idx()-1)}});upd()});
const bg=document.querySelector('.burger'),sd=document.getElementById('side');
if(bg&&sd){bg.onclick=()=>{const o=sd.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.textContent=o?'×':'☰'};sd.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{sd.classList.remove('open');bg.textContent='☰'}))}

document.querySelectorAll('.tog button').forEach(b=>b.onclick=()=>document.querySelectorAll('.job').forEach(d=>d.open=b.dataset.t==='open'));

const ctf=document.getElementById('ctf');
if(ctf){ctf.addEventListener('submit',ev=>{ev.preventDefault();const n=ctf.n.value.trim(),e=ctf.e.value.trim(),m=ctf.m.value.trim(),note=document.getElementById('ctn');
if(!n||!/^\S+@\S+\.\S+$/.test(e)||!m){note.textContent=EN?'Please fill in your name, a valid email and your message.':'Completa tu nombre, un correo válido y el mensaje.';note.classList.add('err');return}
note.classList.remove('err');note.textContent=EN?'Opening your email app…':'Abriendo tu aplicación de correo…';
location.href='mailto:mpfretes@gmail.com?subject='+encodeURIComponent((EN?'Contact from the portfolio · ':'Contacto desde el portafolio · ')+n)+'&body='+encodeURIComponent(m+'\n\n— '+n+' ('+e+')')})}

document.querySelectorAll('.subh').forEach(function(b){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',o?'false':'true');b.parentNode.classList.toggle('open',!o);document.getElementById(b.getAttribute('aria-controls')).hidden=o;});});
document.querySelectorAll('.shop-tab').forEach(function(t){t.addEventListener('click',function(){var w=document.querySelector('.pipwrap');if(!w)return;w.setAttribute('data-shop',t.dataset.shop);document.querySelectorAll('.shop-tab').forEach(function(x){var on=x===t;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on?'true':'false');});var tr=w.querySelector('[data-s='+t.dataset.shop+'] .track');if(tr)tr.scrollLeft=0;});});
(function(){var vs=document.querySelectorAll('.vh video');if(!vs.length)return;var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(rm)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){});}else v.pause();});},{threshold:.25});vs.forEach(function(v){io.observe(v);});})();
