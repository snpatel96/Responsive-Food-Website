// set current year
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// mobile navigation
const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

// sticky navigation
const sectionHero = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHero);
