

//slide anchor
jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
});

$('#filter input[type="reset"]').click(function(){
	$('#filter .jq-checkbox.checked').removeClass('checked');
})
$('#sort, #pagi, #viewOutput').on('click', 'li', function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	return false;
})

$('#viewsType .view__tabs, #viewsType .view__rows').click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	viewsType();
	return false;
})

function viewsType(){
	if ($('.view__tabs').hasClass('active')) {$('.catalog__main').removeClass('list').addClass('tabs')}
	if ($('.view__rows').hasClass('active')) {$('.catalog__main').removeClass('tabs').addClass('list')}

}

//rating stars

$('.star').hover(function(){
	starToActive($(this).index() + 1, $(this));
	console.log($(this).index());
}, function(){
	$(this).siblings().add($(this)).removeClass('star--hover');
})

function starToActive(cst, el){
	for(i = 0; i < cst; ++i){
		$(el).siblings().add($(el)).eq(i).addClass('star--hover');
		console.log(el, i);
	}
}

$(this).on('click', function(){
	$(this).snippet
})

$('#cartCol .minus').click(function(){
	var curVal = parseInt($(this).siblings('input').val());
	curVal--;
	if (curVal >= 1) {
		$(this).siblings('input').val(curVal--); 
		$(this).closest('.cart__footer').find('.priceColDesc').text($(this).siblings('input').val());
	}
})

$('#cartCol .plus').click(function(){
	var curVal = parseInt($(this).siblings('input').val());
	curVal++;
	if (curVal >= 1) {
		$(this).siblings('input').val(curVal++); 
		$(this).closest('.cart__footer').find('.priceColDesc').text($(this).siblings('input').val());
	}
})

$('.checkbox__row label').click(function(){
	$(this).parent().toggleClass('checked');
	console.log(this);
})

$('#tovarInfoTabs .tab__controls li').click(function(){
	var tabData = $(this).find('a').attr('href');
	tabData = '.'+tabData;
	console.log(tabData);
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$('#tovarInfoTabs .tab__content').removeClass('active').hide();
	$('#tovarInfoTabs .tab__content'+tabData+'').addClass('active').fadeIn(300);
	return false;
})

$('.header__menu-teh').on('mouseleave', function(){
	$('.submenu-teh').fadeOut(300);
	$('.menu-teh .menu li').removeClass('active');
})

var menSi;

$('.menu-teh .menu li').on('mouseover', function(e){
	var i = 0;
	clearInterval(menSi);
	e.preventDefault();
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	var submenuId = $(this).find('a').attr('href');
	
	menSi = setInterval(function(){
		i++;
		if(i == 2) {openSubmenu(submenuId)};
		// console.log(i);
	}, 100);
})

$('.menu-teh .menu li').on('mouseleave', function(){
	clearInterval(menSi);
})

var openSubmenu = function(id){
	$('.submenu-teh').fadeIn(300);
	$('.submenu__item').hide();
	$('.submenu__item#'+ id +'').show();
	return false;
}

$('#payMethod label').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	if ($('.nal').is('.active') || $('.carddop').is('.active')) {
		$('.oformlenie__address').fadeIn(300);
	}else{
		$('.oformlenie__address').hide();
	}
})

$('#userBlock .auth').on('click', function(){
	$('.user__dropdown').show().stop(true, true).animate({
		top: '36px',
		opacity: 1
	}, 300);
	return false;
})

$('#userBlock').on('mouseleave', function(){
	$('.user__dropdown').stop(true, true).animate({
		top: '-50px',
		opacity: 0
	}, 300, function(){
		$(this).hide();
	});
})

// $('#rememberMe').click(function(e){
// 	// e.preventDefault();
// 	$(this).find('.input-checkbox').toggleClass('active');
// })