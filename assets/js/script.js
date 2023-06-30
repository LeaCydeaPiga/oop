/*wow js*/
   $(function() {
      new WOW().init();
 });


/*preloader*/

 $(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(1500);
 })


/*toTop*/

  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll",() => {

    if (window.pageYOffset > 100) {      
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
     }
    });

/*swiperJs*/

    var swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets : true,
        
      },

      loop:true,
       autoplay: {
        delay:2000,
        disableOnInteraction: false,

      },
    });

  /*counterJs*/

    $(document).ready(function() {
    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 15000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    });

