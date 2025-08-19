$(document).ready(function (){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        infinite: true,
        autoplay: false,
        autoplaySpeed: 300,
        dots: true,
    });
});

function removeClassOnDesktop() {
  const element = document.querySelector('.steps__grid-wrap');
  
  if (window.innerWidth > 768) {
    element.classList.remove('slider__steps');
  } else {
    element.classList.add('slider__steps');
  }
}
document.addEventListener('DOMContentLoaded', removeClassOnDesktop);
window.addEventListener('resize', removeClassOnDesktop);

