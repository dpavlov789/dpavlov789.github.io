$(document).ready(function (){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
              }
            }
          ],
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    let totalSlides = $('.slider').slick('getSlick').slideCount;
    $('.total-slides').text(totalSlides);
    
    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $('.current-slide').text(currentSlide + 1);
    });
});

$(document).ready(function (){
    $('.slider__steps').slick({
        responsive: [
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        infinite: true,
        autoplay: false,
        dots: true,
    });
});

function removeClassOnDesktop() {
  const element = document.querySelector('.steps__grid-wrap');
  
  if (window.innerWidth > 980) {
    element.classList.remove('slider__steps');
  } else {
    element.classList.add('slider__steps');
  }
}
document.addEventListener('DOMContentLoaded', removeClassOnDesktop);
window.addEventListener('resize', removeClassOnDesktop);

const newsItems = [
  "Дело помощи утопающим — дело рук самих утопающих!",
  "Шахматы двигают вперёд не только культуру, но и экономику!",
  "Лед тронулся, господа присяжные заседатели!"
];

function createTickerContent() {
  const container = document.getElementById('tickerContent');
  
  // Создаем несколько копий контента для плавности
  for (let i = 0; i < 4; i++) {
      newsItems.forEach(news => {
          const span = document.createElement('span');
          span.className = 'ticker-item';
          span.textContent = news;
          container.appendChild(span);
      });
  }
}

document.addEventListener('DOMContentLoaded', createTickerContent);

