$(document).ready(function ($) {
  
    // Sidebar Toggle
    $('.btn-navbar').click(function() {
	    $('html').toggleClass('expanded');

    });

    //根据markdown内容生成右侧内容
	$('#container h2').each(function(index) {
		$(this).nextUntil('h2').wrapAll('<div class="container-fluid"><div class="row-fluid content"></div></div>');
		$(this).add($(this).next()).wrapAll('<section class="section" id="section' + (index+2) + '"data-section="' + (index+2) + '"><div class="container-fluid"><div class="row-fluid span12"></div></div></section>');
		$(this).wrap('<div class="container-fluid"><div class="row-fluid title"><div class="span4"></div></div></div>');
		$('<div class="span8 hidden-phone"><hr></div>').insertAfter($(this).parent());
	});
    

	// Waypoints Scrolling
	
	var links = $('.navigation').find('li');
    var section = $('section');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    // var $ = require('waypoint');

    section.waypoint(function(direction) {
    	var datasection = $(this).attr('data-section');
    	if(direction === 'down') {
    		$('.navigation li[data-section="' + datasection + '"]').addClass('active').siblings().removeClass('active');
    	} else {
    		var newsection = parseInt(datasection) - 1;
    		$('.navigation li[data-section="' + newsection + '"]').addClass('active').siblings().removeClass('active');
    	}
    });

    function goToByScroll(datasection) {
    	if(datasection == 1) {
			htmlbody.animate({
    			scrollTop:$('.section[data-section="' + datasection + '"]').offset().top
    		}, 500, 'easeOutQuart');
    	}else{
			htmlbody.animate({
    			scrollTop:$('.section[data-section="' + datasection + '"]').offset().top + 70
    		}, 500, 'easeOutQuart');
    	}
    }

    links.click(function(e) {
    	e.preventDefault();
    	var datasection = $(this).attr('data-section');
    	goToByScroll(datasection);
    });
    
   
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-section="1"]').addClass('active');
            $('.navigation li[data-section="2"]').removeClass('active');
        }
    });
    
});