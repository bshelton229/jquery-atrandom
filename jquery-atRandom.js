!function($){
  /**
   * Get a random integer between min and max
   */
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // The plugin definition
  $.fn.atRandom = function(action) {
    var $this = $(this),
        $el = $this.eq(getRandomInt(0,$this.length-1));
    if (typeof(action) == 'function') {
      action.call($el, $el);
    }
    else if (typeof(action) == 'string' && typeof($el[action]) == 'function') {
      $el[action].call($el);
    }

    // We return the original selector.
    // I'm still not sure we shouldn't return the
    // randomly selected element.
    return this;
  }
}(window.jQuery);
