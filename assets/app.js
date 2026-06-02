// ─── FLAGS (no emoji — use flagcdn.com) ──────────────────────────────
function flagUrl(iso2){
  return `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
}
function fi(iso2, cls='f-img'){
  return `<img src="${flagUrl(iso2)}" class="${cls}" alt="" onerror="this.style.opacity='.2'">`;
}

// ─── LANGUAGE TOGGLE ──────────────────────────────────────────────────
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

// ─── MOBILE NAV ───────────────────────────────────────────────────────
function toggleMobileNav(){
  const nl = document.querySelector('.nav-links');
  if(nl) nl.classList.toggle('open');
}

// ─── GROUP TABS ───────────────────────────────────────────────────────
function sg(g, btn){
  document.querySelectorAll('.tp').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tb').forEach(b=>b.classList.remove('on'));
  const el = document.getElementById('g-'+g);
  if(el) el.classList.add('on');
  if(btn) btn.classList.add('on');
}

// ─── SMOOTH SCROLL ────────────────────────────────────────────────────
function go(id){
  const el = typeof id === 'string' ? document.querySelector(id) : id;
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// ─── ANIMATE BARS ON LOAD ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.transition='width .7s ease';
        io.unobserve(e.target);
      }
    });
  },{threshold:.1});
  document.querySelectorAll('.pf,.pf2,.wbf,.o-bar').forEach(el=>io.observe(el));
});
