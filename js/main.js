/* global $, window*/

window.onload = function () {
    
    'use strict';
    
    $('.loading2').css('display', 'none');
    
};

$(function () {
   
    'use strict';
    
    //Adjust Slider Hight
    var winh = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),//height + padding + marging
        navh  = $('.navbar').innerHeight();
     
    $('.slider, .carousel-item').height(winh - (upperh + navh));
    
    //featured work shuffle
    $('.featured-word ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
                
            $('.shuffle-img .col-sm').css('opacity', 1);
            
        } else {
                
            $('.shuffle-img .col-sm').css('opacity', '.08');
                
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});


var btn = document.getElementById('topbutton');

btn.addEventListener('click', function(){
     'use strict';
    window.scrollTo(0,0);
    
});