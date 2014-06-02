(function($){
  var controller, chapters, register_chapters;

  controller = new ScrollMagic();

  chapters = [{
    //Chapter 1;

    register: function(){
      var tween, scene;
      
      tween = TweenMax.to( '.fts-introduction-figure', .5, {y: -250});
      scene = new ScrollScene({
        triggerElement: '.chapter-1',
        triggerHook: 0,
        duration: 1000
      })
      .setTween(tween)
      .addTo(controller);
    }},

    {
      //Chapter 2
      register: function(){
        var scene, scene_actions, scene2, scene2_actions, $chapter, $responsive_animation;

        $chapter = $('.chapter-2');
        $responsive_animation = $('.responsive-animation');
        
        scene = new ScrollScene({
           triggerElement: '.chapter-2', 
           triggerHook: 0,
           duration: 1000
         }).setPin('.chapter-2').addTo(controller);

        scene_actions = new SceneActions(scene, {
          internal_actions:[{
            start: 0, end: .3,
            onStart: function(){
              $responsive_animation.addClass('desktop').removeClass('tablet mobile');
              $chapter.addClass('active');
            },
            onEnd: function(){ }
          },
          {
            start: .31, end: .6,
            onStart: function(){
              $responsive_animation.addClass('tablet').removeClass('desktop mobile');
              $chapter.addClass('active');
            },
            onEnd: function(){ }
          },
          {
            start: .61, end: 1,
            onStart: function(){
              $responsive_animation.addClass('mobile').removeClass('desktop tablet');
              $chapter.addClass('active');
            },
            onEnd: function(){ }
          }]
        });

        scene2 = new ScrollScene({
           triggerElement: '.responsive-animation',
           duration: 600
         }).addTo(controller);

        scene2_actions = new SceneActions(scene2, {
          on_before:function(){
            $chapter.removeClass('active');
          },

          on_inside: function(){
            $chapter.addClass('active');
          },

          on_after: function(){
            $chapter.addClass('active');
            $responsive_animation.addClass('mobile').removeClass('desktop tablet');
          }
        });
      }
    },

    {
      // Chapter 3
      register: function(){
        var tween, scene, scene2, scene2_actions, $chapter;

        $chapter = $('.chapter-3');

        tween = new TweenMax.to('.chapter-2', .5, {y: 400});

        scene = new ScrollScene({
          triggerElement: '.chapter-3',
          triggerHook: 1,
          duration: 1000
        }).setTween(tween).addTo(controller);
        
        scene2 = new ScrollScene({
          triggerElement: '.process-icons',
          duration: 100
        }).addTo(controller);

        var scene2_actions = new SceneActions(scene2, {
          on_before:function(){
            $chapter.removeClass('active');
          },

          on_inside: function(){
            $chapter.addClass('active');
          },

          on_after: function(){
            $chapter.addClass('active');
          }
        });
      }
    },

    {
      // Chapter 4
      register: function(){
        var scene, scene_actions, $heart;

        $heart = $('.heart');

        scene = new ScrollScene({
          triggerElement: '.heart',
          duration: 100
        }).addTo(controller);

        scene_actions = new SceneActions(scene, {
          on_before:function(){
            $heart.removeClass('active');
          },

          on_inside: function(){
            $heart.addClass('active');
          },

          on_after: function(){
            $heart.addClass('active');
          }
        });
      }
    },

    {
      // Chapter 5
      register: function(){
        var scene, scene_actions, $chapter;

        $chapter = $('.chapter-5');

        scene = new ScrollScene({
          triggerElement: '.sentence',
          duration: 100
        }).addTo(controller);

        scene_actions = new SceneActions(scene, {
          on_before:function(){
            $chapter.removeClass('active');
          },

          on_inside: function(){
            $chapter.addClass('active');
          },

          on_after: function(){
            $chapter.addClass('active');
          }
        });
      }
    }];

    register_chapters = function(){
      for(var i = 0; i < chapters.length; i += 1){
        chapters[i].register(); 
      }
    }

    window.register_chapters = register_chapters;

}(jQuery));
