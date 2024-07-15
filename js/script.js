// Хедер скролл

$(document).ready(function () {  
  var top = $('#menubar-mob').offset().top - parseFloat($('#menubar-mob').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (_event) {
  // определяем позицию y относительно окна браузера
    var y = $(this).scrollTop();

    // если он является формой ниже
    if (y >= top) {
    // то присваиваем класс .fixed
    $('#menubar-mob').addClass('fixed');
    } else {
    // если нет – удаляем класс
    $('#menubar-mob').removeClass('fixed');
    }
  });
});


// Бургер-меню 

document.querySelector(".header-burger").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.add("active");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.querySelector(".header-mobile__burger-nav").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 

document.querySelector(".header-mobile__burger-close").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.remove("body-scroll")
}); 


// Показать текст

let btnsMore = document.querySelectorAll(".btnsMore");

for(btn of btnsMore) {
  btn.addEventListener('click', function() {
    let parent = this.closest('.section-review__item');
    let dots = parent.querySelector('.dots');
    let more = parent.querySelector('.more');

    if(dots.style.display === 'none') {
      dots.style.display = "inline";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
    };
  });
};


// Mодальное окно Город

document.getElementById("modal__btn-mob").addEventListener("click", function() {
  document.getElementById("modal__city").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll");
  document.querySelector(".header-mobile__burger-menu").classList.add("body-scroll");
});

document.getElementById("modal__btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.getElementById("close-city-btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.remove("open");
  document.querySelector("#scroll").classList.remove("body-scroll")
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__city").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

document.querySelector("#modal__city .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal__city").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.querySelector("#scroll").classList.remove("body-scroll")
});


// Слайдер Документы

const slider = document.querySelector('.section-doc__swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 769 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 2,
			spaceBetween: 17,
      initialSlide: 0,     
			slideClass: 'section-doc__item',
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 769) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

window.addEventListener('orientationchange', () => {
	mobileSlider();
});


// Слайдер Отзывы

const sliderReview = document.querySelector('.section-review__swiper');

let swiperReview;

function reviewSlider() {
	if (window.innerWidth <= 769 && sliderReview.dataset.mobile == 'false') {
		swiperReview = new Swiper(sliderReview, {
			slidesPerView: 1.5,
			spaceBetween: 17,
      initialSlide: 0,     
			slideClass: 'section-review__item',
		});

		sliderReview.dataset.mobile = 'true';
	}

	if (window.innerWidth > 769) {
		sliderReview.dataset.mobile = 'false';
		if (sliderReview.classList.contains('swiper-container-initialized')) {
			swiperReview.destroy();
		}
	}
}

reviewSlider()

window.addEventListener('resize', () => {
	reviewSlider();
});

window.addEventListener('orientationchange', () => {
	reviewSlider();
});


// Аккордеон

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });
});


// Табы сравнение

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-other__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-other__card').forEach(function(tabContent) {
        tabContent.classList.remove('section-other__card__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-other__card__active')
      document.querySelectorAll('.section-other__btn').forEach(function(activeBtn) {
        activeBtn.classList.remove('section-other__btn__active')
      })
      event.currentTarget.classList.add('section-other__btn__active')
    })
  })
})  