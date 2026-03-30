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

  // Mobil profil menü toggle - ha van ilyen elem
  const mobileProfileHeader = document.querySelector(".mobile-profile-header");
  const mobileProfileSubmenu = document.querySelector(".mobile-profile-submenu");
  const mobileProfileToggle = document.querySelector(".mobile-profile-toggle");

  if (mobileProfileHeader && mobileProfileSubmenu) {
    mobileProfileHeader.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileProfileSubmenu.classList.toggle("open");
      if (mobileProfileToggle) {
        mobileProfileToggle.textContent = mobileProfileSubmenu.classList.contains("open") ? "Fiók ▲" : "Fiók ▼";
      }
    });

    // Almenü linkjei - bezárás kattintáskor
    mobileProfileSubmenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileProfileSubmenu.classList.remove("open");
        if (mobileProfileToggle) {
          mobileProfileToggle.textContent = "Fiók ▼";
        }
      });
    });

    // Almenü bezárása külső klikkeléskor
    document.addEventListener("click", (e) => {
      if (!mobileProfileHeader.contains(e.target) && !mobileProfileSubmenu.contains(e.target)) {
        mobileProfileSubmenu.classList.remove("open");
        if (mobileProfileToggle) {
          mobileProfileToggle.textContent = "Fiók ▼";
        }
      }
    });
  }
});
