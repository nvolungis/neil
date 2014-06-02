(function($){
  function SceneActions(scene, options){
    var options = this.get_default_options(options);

    this.current_state    = null,
    this.internal_actions = options.internal_actions;
    this.on_progress      = options.on_progress;

    this.scene     = scene;
    this.on_before = options.on_before;
    this.on_after  = options.on_after;
    this.on_inside = options.on_inside;
    this.bind();
  }

  $.extend(SceneActions.prototype, {
    bind: function(){
      this.scene.on('progress',    this.on_progress_private.bind(this));
      this.scene.on('enter leave', this.on_enter_leave.bind(this));
      this.scene.on('start end',   this.on_start_end.bind(this));
    },

    get_default_options: function(options){
      var defaults = {
        on_before: function(){},
        on_after:  function(){},
        on_inside: function(){},
        on_progress: function(){},
        internal_actions: []
      };

      return $.extend({}, defaults, options);
    },

    on_enter_leave: function(e){
      this.in_or_out = e.type == 'enter' ? 'in' : 'out';
      this.on_state_changing();
    },

    on_start_end: function(e){
      this.top_or_bottom = e.type == 'start' ? 'top' : 'bottom';
    },

    on_state_changing: function(){
      if(this.in_or_out == 'out'){
        this.outer_state = this.top_or_bottom == 'top' ? 'before' : 'after';
      }else {
        this.outer_state = 'inside'; 
      }

      this['on_' + this.outer_state]();
    },

    on_progress_private: function(e){
      var i, len = this.internal_actions.length, progress = e.progress;

      this.on_progress(progress);

      for(i = 0; i < len; i++){
        this.check_internal_action(this.internal_actions[i], i, progress);
      }
    },

    check_internal_action: function(action, state, progress){
      var is_outside_range = progress < action.start || progress >= action.end,
          is_inside_range = !is_outside_range;

      if(is_outside_range){
        if(this.current_state == state) {
          this.current_state = null;
          action.onEnd();
        }
      }
      
      if(is_inside_range){
        if(this.current_state != state){
          this.current_state = state;
          action.onStart();
        } 
      }
    }
  });

  window.SceneActions = SceneActions;
}(jQuery));
