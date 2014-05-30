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


  var controller = $.superscrollorama();

  // Chapter 1
  controller.addTween('.fts-introduction-statement', 
    TweenMax.from( $('.fts-introduction-statement'), .5, {css: {opacity: 0}}));

  controller.pin($('.fts-introduction-figure'), 1000, {
    anim: (new TimelineLite())
    
    .append(
      TweenMax.to( $('.fts-introduction-figure'), .5, {
        y: '-300',
      })
    ),
    offset: -1
  });


  //Chapter 2
  
  controller.addTween(
    '.responsive-animation',
    TweenMax.to('.responsive-animation', 0, {className: '+=active'})
  );


  $(window).trigger('scroll');
}(jQuery));
