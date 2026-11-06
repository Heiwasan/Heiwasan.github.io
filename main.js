const lb=document.getElementById('lb'),im=lb.querySelector('img'),cp=lb.querySelector('p');
document.querySelectorAll('.gallery button').forEach(b=>b.onclick=()=>{im.src=b.dataset.src;im.alt=b.dataset.cap;cp.textContent=b.dataset.cap;lb.hidden=false});
lb.onclick=()=>lb.hidden=true;document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.hidden=true});
