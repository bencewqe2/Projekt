// Mobil navigáció hamburger menü
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mainNav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

    // Menü bezárása, ha klikkunk kívül
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('nav-open');
      }
    });

    // Menü bezárása linke klikkeléskor
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }
});
