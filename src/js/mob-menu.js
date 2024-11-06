const headerEl = document.querySelector('#js-header');
const burgerEl = document.querySelector('#js-menu');
const menuEl = document.querySelector('#js-header-pages');

document.addEventListener('DOMContentLoaded', function () {
  burgerEl.addEventListener('click', function () {
    headerEl.classList.toggle('open');
    if (headerEl.classList.contains('open')) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  });
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    headerEl.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
  }
});

burgerEl.addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

menuEl.addEventListener('click', e => {
  headerEl.classList.remove('open');
  document.documentElement.style.overflow = 'auto';
});

document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  headerEl.classList.remove('open');
  document.documentElement.style.overflow = 'auto';
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    headerEl.classList.remove('open');
    document.documentElement.style.overflow = 'auto';
  }
});

function setActiveMenu() {
  if (window.innerWidth > 768) {
    menuEl.addEventListener('click', event => {
      if (event.target.closest('.header-pages-item')) {
        document
          .querySelectorAll('.header-pages-item')
          .forEach(item => item.classList.remove('active'));

        event.target.closest('.header-pages-item').classList.add('active');
      }
    });
  }
}

setActiveMenu();

function toggleHeaderShadow() {
  if (window.scrollY > 50) {
    headerEl.classList.add('shadow');
  } else {
    headerEl.classList.remove('shadow');
  }
}

window.addEventListener('scroll', toggleHeaderShadow);
