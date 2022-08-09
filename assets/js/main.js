$(document).ready(function(){
    
   
   
    $(".homepages-slides").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:false,
        navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }

    })
   
    $(".team-list").owlCarousel({
        loop:true,
        nav:false,
        margin:30,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }

    })
    $(".testimonial-list").owlCarousel({
        items:3,
        loop:true,
        nav:false,
        margin:30,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }

    })
    $(".logo-carousel").owlCarousel({
        items:5,
        loop:true,
        nav:false,
        margin:30,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }

    })
    $("#web-design-skillbar").circleProgress({
        value:.9,
        size:270,
        fill:'#0bbbc1',
        thickness:2,
        emptyFill:"#fff"
    })
   
    .on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
      });
    $("#graphic-design-skillbar").circleProgress({
        value:.9,
        size:270,
        fill:'#0bbbc1',
        thickness:2,
        emptyFill:"#fff"
    })
    .on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
      });
    $("#digital-marketing-skillbar").circleProgress({
        value:.9,
        size:270,
        fill:'#0bbbc1',
        thickness:2,
        emptyFill:"#fff"
    })
    .on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
      });

      $(".portfoli-filter li").on("click",function(){
        $(".portfoli-filter li").removeClass("active")
        $(this).addClass("active")
        var filterValue = $(this).attr("data-filter")
        $(".portfolio-list").isotope({
            filter:filterValue 
        })
      })
      $('.video-play-btn').magnificPopup({
        type: 'iframe',
    });
    $("#main-nav").slicknav({
        prependTo:'.mobile-menu-wrap',
        allowParentLinks:true
    })
    
      $(".portfolio-list").isotope({
        layoutMode:'masonry',
        masonry:{
            columnWidth:'.col-md-3',
            horizontalOrder:false
        }
      })

    


})