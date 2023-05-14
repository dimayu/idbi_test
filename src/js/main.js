const swiper = new Swiper('.swiper-home', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperProduct = new Swiper('.swiper-new-product', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    940: {
      slidesPerView: 3,
    },
    1120: {
      slidesPerView: 4,
    }
  }
});

document.querySelector('.header__items__right__link--search').addEventListener('click', () => {
  document.querySelector('.form__search').classList.toggle('form__search--visible');
});

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  const header = document.querySelector('.header');
  
  scrollDistance > 90 ? header.classList.add('bg-visible') : header.classList.remove('bg-visible')
});

document.querySelector('#burger').addEventListener('click', () => {
  document.querySelector('.header-menu').classList.toggle('active');
  document.querySelector('#burger').classList.toggle('active');
});