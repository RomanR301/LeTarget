window.addEventListener("load", function () {
  $(".carousel").addClass("loadSlider");
});

jQuery(function () {
  /*home*/
  let briefCarousel = document.querySelector('.brief-carousel') !== null;
  var $briefSlider;
  if (briefCarousel) {
      $briefSlider = front.newSlider('.brief-carousel', {
          cellAlign: 'left',
          pageDots: false,
          draggable: false,
          wrapAround: false
      });
      function updateStatus() {
        var cellNumber = $briefSlider.selectedIndex + 1;
        $('.brief-counter').text( cellNumber + ' / ' + $briefSlider.slides.length );
        if (cellNumber == 1) {
          $('.prev-brief').addClass('hidden');
        } else if (cellNumber == 2) {
          $('.prev-brief').removeClass('hidden');
          $('.next-brief').removeClass('hidden');
        } else if (cellNumber == 3) {
          $('.next-brief').addClass('hidden');
        }
      }
  }
  var prevButton = document.querySelector('.prev-brief');
    prevButton.addEventListener( 'click', function() {
    $briefSlider.previous();
  });
    var nextButton = document.querySelector('.next-brief');
    nextButton.addEventListener( 'click', function() {
    $briefSlider.next();
  });
  $briefSlider.on( 'change', updateStatus );


  let technologiesSlider = document.querySelector('.technologies-carousel') !== null;
  var $technologiesCarousel;
  if (technologiesSlider & matchMedia('screen and (min-width: 768px)').matches ) {
      $technologiesCarousel = front.newSlider('.technologies-carousel', {
        cellAlign: 'left',
        pageDots: true,
        wrapAround: false,
        prevNextButtons: false,
        groupCells: 5
      });
  } else {
    $technologiesCarousel = front.newSlider('.technologies-carousel', {
      cellAlign: 'center',
      pageDots: false,
      wrapAround: false,
      prevNextButtons: true,
      groupCells: 1
  });
  }


  let teamSlider = document.querySelector('.team-carousel') !== null;
  var $teamCarousel;
  if (teamSlider) {
      $teamCarousel = front.newSlider('.team-carousel', {
        cellAlign: 'center',
        pageDots: false,
        wrapAround: true,
        prevNextButtons: true
      });
  }
  let clientsSlider = document.querySelector('.clients-carousel') !== null;
  var $clientsCarusel;
  if (clientsSlider & matchMedia('screen and (min-width: 768px)').matches ) {
      $clientsCarusel = front.newSlider('.clients-carousel', {
        cellAlign: 'left',
        pageDots: true,
        wrapAround: false,
        prevNextButtons: false,
        groupCells: 5
      });
  } else {
    $clientsCarusel = front.newSlider('.clients-carousel', {
      cellAlign: 'center',
      pageDots: false,
      wrapAround: false,
      prevNextButtons: true,
      groupCells: 1
  });
  }
});
