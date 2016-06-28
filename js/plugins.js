/*===============================================
plugins
===============================================*/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
  }(jQuery));


// Place any jQuery/helper plugins in here.
var tovarCarouselCollection = [];

$(document).ready(function(){
    $('#pointTabs, #ordersTabs').qTabs();  //tabinit
    $('.fancybox').fancybox(); //fancyboxinit
    $('.point-list__item').qToggle();
    $('#mainSlider').bxSlider({
        controls: false,
        auto: true,
        pause: 10000
    });

for(i = 0; i < $('#tovarsCarousel .tovars__category').length; i++){
    tovarCarouselCollection[i] = $('#tovarsCarousel .tovars__category').eq(i).bxSlider({
        controls: true,
        // auto: true,
        pause: 10000,
        slideWidth: 322,
        minSlides: 4,
        maxSlides: 4,
    });
}

$('#partnersCarousel').bxSlider({
    controls: true,
    auto: true,
    pause: 10000,
    slideWidth: 322,
    minSlides: 4,
    maxSlides: 4,
    pager:false
})

$('#recentlyCarousel, #carouselWidth').bxSlider({
    controls: true,
    auto: true,
    pause: 10000,
    slideWidth: 322,
    minSlides: 3,
    maxSlides: 4,
    pager:false
})
   
    $('.main__slider').css('visibility','visible');
})

$('#tovarsNav').on('click', 'li', function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var num = $(this).index()
    checkCategoryActive(num);
})


//big photo ===========================================================================
var bigPhotoList = $('#photoList').bxSlider({
    mode: 'vertical',
    pager: false,
    controls: false,
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 84,
    slideHeight: 84,
})
$('#bigPhotoColntrols .top').click(function(){
    bigPhotoList.goToPrevSlide();
})
$('#bigPhotoColntrols .bot').click(function(){
    bigPhotoList.goToNextSlide();
})
$('#photoList').on('click', 'a', function(){
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    $('#mainPhoto').attr('src', $(this).attr('href'));
    return false;
})



$(document).ready(function(){
    $('.photo__list').css('visibility', 'visible');
})

// =====================================================================================

function checkCategoryActive(num){
    $('.tovars__carousel').eq(num).siblings().hide().removeClass('active');
    $('.tovars__carousel').eq(num).fadeIn(500).addClass('active');
    tovarCarouselCollection[num].reloadSlider()
}

//slider
  $(function() {
    $( "#filterSliderRange" ).slider({
      range: true,
      min: 5000,
      max: 10000,
      values: [ 7000, 10000 ],
      slide: function( event, ui ) {
        $( "#priceFrom" ).val(ui.values[ 0 ]);  
        $( "#priceTo" ).val(ui.values[ 1 ]); 
      }
    });
    $( "#priceFrom" ).val($( "#filterSliderRange" ).slider('values', 0));  
    $( "#priceTo" ).val($( "#filterSliderRange" ).slider('values', 1)); 

    $('#filter input[type="checkbox"], .cart__right input, .tovar__pay input').styler();
  });

  