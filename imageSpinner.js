$(document).ready(function($){
    var imageBox = $('.slider ul'),
 imageWidth = $('.slider ul li').first().children('img').width(),
imageQuantity = $('.slider ul').children('li').length,
 currentImage = 1;

imageBox.css('width', imageWidth*imageQuantity)
console.log(imageWidth);

   
    $('.nav button').on('click', function(){ 
    var whichButton = $(this).data('nav'); 
      if(whichButton === 'next'){
          if(currentImage === imageQuantity){
              currentImage = 1
          } else {
          currentImage++;
          transition(currentImage, imageWidth);
          }  
      } else if(whichButton === 'prev'){
          if(currentImage === 1){
              currentImage = imageQuantity;
              transition(currentImage, imageWidth);
          } else {
          currentImage--;
          transition(currentImage, imageWidth);
          }
        }
    });
    function transition(currentImageInput, ImageWidthInput){
        var pxValue = -(currentImageInput-1) * ImageWidthInput

        imageBox.animate({
            'left': pxValue
        });
    }
 });