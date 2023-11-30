$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    },
   
})