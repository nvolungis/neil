(function($){
  $(document).ready(function(){

    $('.site-footer-thanks').fitText(1, {
      maxFontSize: '100px',
      minFontSize: '50px'
    });

    if(!Modernizr.touch) skrollr.init({
      forceHeight: false
    });
  });
}(jQuery));
