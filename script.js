document.getElementById('year').textContent = new Date().getFullYear();
// tiny animation effect on load
window.addEventListener('load',()=>{
  const hero = document.querySelector('.hero-inner');
  hero.style.transform='translateY(-6px)';
  hero.style.transition='transform 700ms cubic-bezier(.2,.9,.3,1)';
});