$(document).ready(function() {

    $('.container').children('img').each(function(i) { 
        $(this).fadeOut();
    }); 

});



// $(document).ready(function() {
//     var _intervalId;

//     function fadeInLastImg()
//     {
//         var backImg = $('.container img:first');
//         backImg.hide();
//         $('.container' ).append( backImg );
//         backImg.fadeIn()
//     };

//     _intervalId = setInterval( function() 
//     {
//         fadeInLastImg();
//     }, 1000 );

// });​