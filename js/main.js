$('.slides').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'.prev_arrow',
  nextArrow:'.next_arrow'
});
(function (){
  const burgerItem = document.querySelector('.header_burger');
  const headerNav = document.querySelector('.header_nav');
  const closeItem = document.querySelector('.header_nav_close');

  burgerItem.addEventListener('click', () =>{
    headerNav.classList.add('header_active');
  })
  closeItem.addEventListener('click', () =>{
    headerNav.classList.remove('header_active')
  })
}());