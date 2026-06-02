// Language toggle
let isFa = false;
function toggleLang(){
  isFa = !isFa;
  document.documentElement.lang = isFa ? 'fa' : 'en';
  document.body.dir = isFa ? 'rtl' : 'ltr';
  document.body.classList.toggle('fa', isFa);
  const btn = document.getElementById('langbtn');
  if(btn) btn.textContent = isFa ? '🌐 English' : '🌐 فارسی';
  document.querySelectorAll('[data-en]').forEach(el=>{
    const val = el.getAttribute('data-'+(isFa?'fa':'en'));
    if(val !== null) el.innerHTML = val;
  });
}

// Mobile nav
function toggleMobileNav(){
  document.querySelector('.nav-links')?.classList.toggle('open');
}

// Group tabs
function sg(g, btn){
  document.querySelectorAll('.tp').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tb').forEach(b=>b.classList.remove('on'));
  const el = document.getElementById('g-'+g);
  if(el) el.classList.add('on');
  if(btn) btn.classList.add('on');
}

// Smooth scroll
function go(id){
  const el = typeof id === 'string' ? document.querySelector(id) : id;
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// Active nav highlight (single-page sections)
function initScrollSpy(ids){
  const btns = document.querySelectorAll('.nav-a[data-section]');
  if(!btns.length) return;
  window.addEventListener('scroll',()=>{
    let cur = ids[0];
    ids.forEach(id=>{
      const el = document.getElementById(id);
      if(el && window.scrollY >= el.offsetTop - 90) cur = id;
    });
    btns.forEach(b=> b.classList.toggle('on', b.dataset.section === cur));
  },{passive:true});
}

// Animate bars on intersection
document.addEventListener('DOMContentLoaded',()=>{
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.transition='width .7s ease';
        io.unobserve(e.target);
      }
    });
  },{threshold:.1});
  document.querySelectorAll('.pf,.pf2,.wbf,.odds-bar').forEach(el=>io.observe(el));
});
