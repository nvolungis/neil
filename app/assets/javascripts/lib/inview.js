(function($){

  function update_status(inview, $el){
    if(inview){
      $el.addClass('active');
    }else {
      $el.removeClass('active');
    }
  }

  var scenes = [];

  scenes.push({
    register: function(){
      var $process_icons = $('.process-icons');
          $chapter     = $('.chapter-3');

      $process_icons.bind('inview', function(e, inview, vx, vy){
        update_status(inview, $chapter);
      });
    }
  });
  
  scenes.push({
    register: function(){
      var $heart = $('.heart');

      $heart.on('inview', function(e, inview){
        update_status(inview, $heart);
      });
    }
  });

  scenes.push({
    register: function(){
      var $sentence = $('.sentence'),
          $chapter = $('.chapter-5');
      
      $sentence.bind('inview', function(e, inview) {
        update_status(inview, $chapter);
      });
    }
  })


  function register_inview_scenes(){
    var i, len = scenes.length;

    for (i = 0; i < len; i += 1) {
      scenes[i].register();
    }
  }

  register_inview_scenes();


}(jQuery));
