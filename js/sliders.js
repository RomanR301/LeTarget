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

});

// $(function(){
// 	var owl = $('.owl-carousel.brief');
// 	owl.owlCarousel({
// 	 /* loop: true,*/
//         margin: 10,
//         autoplay: false,
//         autoplayTimeout: 7000,
//         transitionStyle: "fade",
//         autoplayHoverPause: true,
// 		items: 1,
// 		 touchDrag: false,
//         mouseDrag: false,
// 		nav: false,
//         dots: false,
// 		navText: ["", ""],
// 	  onInitialized  : counter, //When the plugin has initialized.
// 	  onTranslated : counter //When the translation of the stage has finished.
// 	});
	
// 	function counter(event) {
// 	   var element   = event.target;         // DOM element, in this example .owl-carousel
// 		var items     = event.item.count;     // Number of items
// 		var item      = event.item.index + 1;     // Position of the current item

//         if(item == 1){
//             $('#briefForm a.btn.prev-brief').fadeOut(300);
//         }else{
//             $('#briefForm a.btn.prev-brief').fadeIn(300);           
//         }

//         console.log('item number = '+item);

// 	  $('#counterBrief').html(item+" / "+items)
// 	};
// 	// Custom Navigation Events
// 		$(".next-brief").click(function(){
		
// 			owl.trigger('next.owl.carousel');
// 		});
// 		$(".prev-brief").click(function(){
// 			owl.trigger('prev.owl.carousel');
// 		});
// })