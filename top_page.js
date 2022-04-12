
$(document).ready(function(){
 $('.multiple-items').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 2,
   dots: true,
   autoplay:true,
   speed: 300,
   adaptiveHeight:true,
});

 $('.carousel').slick({
   dots: true,
   autoplay: true,
   autoplaySpeed: 3000,
   fade: true,
   arrows: false,
});
});



$(function(){
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "locations" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
})

'user strict';

{
  const open = document.getElementById('open')
  const overlay = document.querySelector('.overlay');
  const cancel = document.getElementById('cancel');
  const location = document.getElementById('location');

  open.addEventListener('click',() => {
    overlay.classList.add('show');
    open.classList.add('hide')
  });

  cancel.addEventListener('click',() => {
    overlay.classList.remove('show');
    open.classList.remove('hide')
  });

  location.addEventListener('click',() => {
    overlay.classList.remove('show');
    open.classList.remove('hide')
  });
}



