(function($){
  var controller, chapters, register_chapters, scenes = [];

  function update_status(inview, $el){
    if(inview){
      $el.addClass('active');
    }else {
      $el.removeClass('active');
    }
  }

  function activate($el){
    $el.addClass('active');
  }

  controller = new ScrollMagic();

  scenes.push({
    register: function(){
      this.$process_icons = $('.process-icons');
      this.$chapter     = $('.chapter-3');

      this.$process_icons.bind('inview', function(e, inview, vx, vy){
        update_status(inview, this.$chapter);
      }.bind(this));
    },

    unregister: function(){
      this.$process_icons.unbind('inview');
      activate(this.$chapter);
    },

    setup: function(){
      var $process_icons = $('.process-icons');

      activate($process_icons);
    }
  });
  
  scenes.push({
    register: function(){
      this.$heart = $('.heart');

      this.$heart.on('inview', function(e, inview){
        update_status(inview, this.$heart);
      }.bind(this));
    },

    unregister: function(){
      this.$heart.off('inview');
      this.$heart.removeClass('active');
    },
    
    setup: function(){
      var $heart = $('.heart');
      $heart.removeClass('active');
    }
  });

  scenes.push({
    register: function(){
      this.$sentence = $('.sentence');
      this.$chapter = $('.chapter-5');
      
      this.$sentence.bind('inview', function(e, inview) {
        update_status(inview, this.$chapter);
      }.bind(this));
    },

    unregister: function(){
      this.$sentence.unbind('inview');
      activate(this.$chapter);
    },

    setup: function(){
      var $chapter = $('.chapter-5');
      $chapter.addClass('active');
    }
  })

  // The responsive design scene
  scenes.push({
    register: function(){
      var scene, scene_actions, scene2, scene2_actions, $chapter, $responsive_animation,
          that = this;

      this.$chapter = $('.chapter-2');
      this.$responsive_animation = $('.responsive-animation');

      this.$chapter.css({
        height: '100%'
      });
      
      this.scene = new ScrollScene({
         triggerElement: '.chapter-2', 
         triggerHook: 0,
         duration: 1000
       }).setPin('.chapter-2').addTo(controller);

      scene_actions = new SceneActions(this.scene, {
        internal_actions:[{
          start: 0, end: .3,
          onStart: function(){
            that.$responsive_animation.addClass('desktop').removeClass('tablet mobile');
            that.$chapter.addClass('active');
          }.bind(that),
          onEnd: function(){ }
        },
        {
          start: .31, end: .6,
          onStart: function(){
            that.$responsive_animation.addClass('tablet').removeClass('desktop mobile');
            that.$chapter.addClass('active');
          }.bind(that),
          onEnd: function(){ }
        },
        {
          start: .61, end: 1,
          onStart: function(){
            that.$responsive_animation.addClass('mobile').removeClass('desktop tablet');
            that.$chapter.addClass('active');
          }.bind(that),
          onEnd: function(){ }
        }]
      });

      this.scene2 = new ScrollScene({
         triggerElement: '.responsive-animation',
         duration: 600
       }).addTo(controller);

      scene2_actions = new SceneActions(this.scene2, {
        on_before:function(){
          that.$chapter.removeClass('active');
        },

        on_inside: function(){
          that.$chapter.addClass('active');
        },

        on_after: function(){
          that.$chapter.addClass('active');
          that.$responsive_animation.addClass('mobile').removeClass('desktop tablet');
        }
      });
    },

    unregister: function(){
      var $spacer = $('.scrollmagic-pin-spacer'),
          $chapter_2 = $spacer.find('.chapter-2').clone(),
          $before_spacer = $spacer.prev();

      $spacer.remove();
      $chapter_2.find('.responsive-animation').removeClass('tablet mobile').addClass('desktop');
      $chapter_2.insertAfter($before_spacer).css({
        position: 'static',
        height: 'auto'
      }).addClass('active');

      this.scene.destroy();
      this.scene2.destroy();
    },

    setup: function(){
      console.log('setup');
      $('.chapter-2').addClass('active');
      $('.responsive-animation').find('.responsive-animation').removeClass('tablet mobile').addClass('desktop');
    }
  });

  setup_chapters = function(){
    console.log('setup_chapters');
    for(var i = 0; i < scenes.length; i += 1){
      if(scenes[i].setup){
        scenes[i].setup(); 
      }
    }
  }

  register_chapters = function(){
    for(var i = 0; i < scenes.length; i += 1){
      scenes[i].register(); 
    }
  }

  unregister_chapters = function(){
    for(var i = 0; i < scenes.length; i += 1){
      scenes[i].unregister(); 
    }
  }

  window.register_chapters = register_chapters;
  window.unregister_chapters = unregister_chapters;
  window.setyps_chapters = setup_chapters;

}(jQuery));
