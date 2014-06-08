(function($){

  function AssetLoader(options){
    this.options      = this.getOptions(options);
    this.on_complete  = this.options.on_complete;
    this.on_file_load = this.options.on_file_load;
    this.queue        = new createjs.LoadQueue(true); 
    this.bind();
  }

  $.extend(AssetLoader.prototype, {
    getOptions: function(options){
      var defaults = {
        on_complete: function(){},
        on_file_load: function(){}
      }; 

      return $.extend({}, defaults, options);
    },

    bind: function(){
      this.queue.on('fileload', this.on_file_load.bind(this), this);
      this.queue.on('complete', this.on_complete.bind(this), this);
    },

    load: function(files){
      this.queue.loadManifest(files);
    } 
  });

  window.AssetLoader = AssetLoader;
}(jQuery));
