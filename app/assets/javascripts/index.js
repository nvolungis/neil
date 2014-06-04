(function($){
  $(document).ready(function(){

    $('.site-footer-thanks').fitText(1, {
      maxFontSize: '100px',
      minFontSize: '50px'
    });

    if(!Modernizr.touch) skrollr.init({
      forceHeight: false
    });

    enquire.register('screen and (min-width:700px)', {
      match: function(){
        register_chapters();
      }, 

      unmatch: function(){
        unregister_chapters();
      },

      setup: function(){
        setup_chapters();
      }
    });

  });



  $(window).trigger('scroll');
}(jQuery));
