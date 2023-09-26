
$(function () {
    $('.bxslider').bxSlider({
        speed: 5,
        mode: 'fade',
        captions: true,
        auto: true,
        pager:false,
       
      

    });
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        750: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 5
        }}
  
})

$(document).ready(function(){
    $icon= $(".fa-bars");
        $(".btn").click(function(){
            $(".navv2").toggleClass("navv22")
            if(  $(".navv2").hasClass("navv22")==true)
            {
                $icon.removeClass("fa-bars")
                $icon.addClass("fa-close")
            }
            else{
                $icon.addClass("fa-bars")
                $icon.removeClass("fa-close")
            }
        })

        
    })
  

