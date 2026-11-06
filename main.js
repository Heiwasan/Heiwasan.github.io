const lb=document.getElementById('lb'),im=lb.querySelector('img'),cp=lb.querySelector('p'),box=lb.querySelector('.lbs');
let list=[],cur=0,last=null;
function show(i){cur=(i+list.length)%list.length;const b=list[cur];im.src=b.dataset.src;im.alt=b.dataset.cap;cp.textContent=b.dataset.cap+' · '+b.dataset.dev+'  ('+(cur+1)+'/'+list.length+')';box.scrollTop=0}
function open_(b){const g=b.closest('.gallery');list=[...g.querySelectorAll('.shot:not([hidden])>button')];last=b;lb.hidden=false;document.body.style.overflow='hidden';show(list.indexOf(b));document.getElementById('lbx').focus()}
function close_(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
document.querySelectorAll('.gallery .shot>button').forEach(b=>b.onclick=()=>open_(b));
document.getElementById('lbx').onclick=close_;document.getElementById('lbp').onclick=()=>show(cur-1);document.getElementById('lbn').onclick=()=>show(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb)close_()});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close_();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
let x0=null;lb.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>60)show(cur+(d<0?1:-1));x0=null});
document.querySelectorAll('.chips').forEach(c=>c.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;c.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));const f=b.dataset.f;c.parentElement.querySelectorAll('.shot').forEach(s=>{s.hidden=!(f==='all'||s.dataset.dev===f);s.classList.add('in')})}));
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'}):null;
document.querySelectorAll('.shot').forEach(s=>io?io.observe(s):s.classList.add('in'));
