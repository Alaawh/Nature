/* global $, document, window, AOS */
window.onload = function () {
    
    'use strict';
    
    $('.loading2').css('display', 'none');
    
};
//scrolled
$(document).scroll(function () {
    
    'use strict';
    
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
    
});

$('.textarea').on('input', function () {
    'use strict';
    
    $('.num').text(150 - $(this).val().length);
    
    if ($('.num').text() < 0) {
        
        $('.num').css('color', 'red');
        
    } else {
        
        $('.num').css('color', '#fff');
    }
    
});

 AOS.init();