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


var controller = new ScrollMagic();

// Chapter 1

  var tween = TweenMax.to( '.fts-introduction-figure', .5, {y: -250});
  var scene1 = new ScrollScene({
        triggerElement: '.chapter-1',
        triggerHook: 0,
        duration: 1000
      })
      .setTween(tween)
      .addTo(controller);


// Chapter 2

 var scene2 = new ScrollScene({
       triggerElement: '.chapter-2', 
       triggerHook: 0,
       duration: 1000
     })
     .setPin('.chapter-2')
     .addTo(controller);

  var scene2_actions = new SceneActions(scene2, {
    internal_actions:[{
      start: 0, 
      end: .3,
      onStart: function(){
        $('.responsive-animation')
        .addClass('desktop')
        .removeClass('tablet mobile');
        
        $('.chapter-2').addClass('active');
      },
      onEnd: function(){ }
    },

    {
      start: .31, 
      end: .6,
      onStart: function(){
        $('.responsive-animation')
        .addClass('tablet')
        .removeClass('desktop mobile');

        $('.chapter-2').addClass('active');
      },
      onEnd: function(){ }
    },
    {
      start: .61, 
      end: 1,
      onStart: function(){
        $('.responsive-animation')
          .addClass('mobile')
          .removeClass('desktop tablet');

        $('.chapter-2').addClass('active');
      },
      onEnd: function(){ }
    }]
  });

  var scene3 = new ScrollScene({
         triggerElement: '.responsive-animation',
         duration: 100
       }).addTo(controller);

  var scene3_actions = new SceneActions(scene3, {
    on_before:function(){
      $('.chapter-2').removeClass('active');
    },

    on_inside: function(){
      $('.chapter-2').addClass('active');
    }
  });


// Chapter 3
  var tween4_2 = new TweenMax.to('.chapter-2', .5, {y: 400});

  var scene4 = new ScrollScene({
    triggerElement: '.chapter-3',
    triggerHook: 1,
    duration: 1000
  })
  .setTween(tween4_2)
  .addTo(controller);
  
  var scene5 = new ScrollScene({
    triggerElement: '.process-icons',
    duration: 100
  }).addTo(controller);

  var scene5_actions = new SceneActions(scene5, {
    on_before:function(){
      $('.chapter-3').removeClass('active');
    },

    on_inside: function(){
      $('.chapter-3').addClass('active');
    }
  });



// Chapter 4

  var scene6 = new ScrollScene({
    triggerElement: '.heart',
    duration: 100
  }).addTo(controller);

  var scene5_actions = new SceneActions(scene6, {
    on_before:function(){
      $('.heart').removeClass('active');
    },

    on_inside: function(){
      $('.heart').addClass('active');
    }
  });


/*   scene1.addIndicators(); */

  $(window).trigger('scroll');
}(jQuery));
