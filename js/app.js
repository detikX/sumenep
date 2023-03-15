$(document).ready(function () {
  new WOW().init();
})

$('.all-photo').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//fancy box
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


//scroll trigger
gsap.registerPlugin(ScrollTrigger);

var targetsEndTrigger = document.querySelectorAll(".endtrigger");

var targetsHeight = document.querySelectorAll(".height");

var targetsBreak = document.querySelectorAll(".break");

targetsEndTrigger.forEach((target, index) => {
  const pinSpacing = index === targetsEndTrigger.length - 1 ? "true" : false;
  const endTrigger = `#card${index + 1}`
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsEndTrigger.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        // end,
        endTrigger,
        markers: false,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsHeight.forEach((target, index) => {
  const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
  const end =
    index === targetsHeight.length - 1 ?
      `+=${target.offsetHeight}px` :
      `+=${targetsHeight[index + 1].offsetHeight}px`;
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        end,
        markers: false,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsBreak.forEach((target, index) => {
  const pinSpacing = index === targetsBreak.length - 1 ? "true" : false;
  const end =
    index === targetsBreak.length - 1 ?
      `+=${target.offsetHeight}px` :
      `+=${targetsBreak[index + 1].offsetHeight}px`;
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsBreak.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        end,
        markers: false,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

$('.shortcut .menus').find('a').click(function () {
  var $href = $(this).attr('href');
  // alert($href)
  var $anchor = $($href).offset();
  $('body,html').animate({ scrollTop: $anchor.top }, 200);
  // return false;
});

$(".menus").hide()
$(".dots").click(function () {
  $(".menus").fadeToggle();
});