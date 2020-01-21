$(function () {
  // use UI arrows in page content to control scrolling
  var scrolling = false;

  $('.scroll-arrows').on('mousedown', 'div', function (evt) {
      scrolling = true;
      startScrolling($('.scroll-box'), 100, evt.target.id);
  });
  
  $(document).mouseup(function () {
    scrolling = false;
  });

  function startScrolling(obj, spd, btn) {
      var travel = (btn.indexOf('up') > -1) ? '-=' + spd + 'px' : '+=' + spd + 'px';
      if (!scrolling) {
          obj.stop();
      } else {
          // recursively call startScrolling while mouse is pressed
          obj.animate({
              "scrollLeft": travel
          }, "fast", "linear", function () {
            startScrolling(obj, spd, btn);
          });
      }
  }
});