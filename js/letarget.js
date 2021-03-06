let front = {

  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  callbackPopup: $('.callback-popup'),
  briefPopup: $('.brief-popup'),
  slider_options_default: {
      wrapAround: true,
      pageDots: false,
      prevNextButtons: true,
      autoPlay: false,
      cellAlign: 'left',
      contain: true
  },
  
  
  init: function () {
      this.events();
    //   this.headerScroll();
  },

  newSlider: function (selector, options) {
      options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
      // let carousel = new Flickity(document.querySelector(selector), options);
      return new Flickity(document.querySelector(selector), options);
  },

  

//   headerScroll: function () {
//       if ($(window).scrollTop() > 5) {
//           $('.header').addClass('fixed');
//       } else {
//           $('.header').removeClass('fixed');
//       }
//   },

  toggleNav: function () {
      if (!this.hamburger.hasClass('open')) {
          this.hamburger.addClass('open');
          this.nav.toggleClass('active');
      } else {
          this.hamburger.removeClass('open');
          this.nav.toggleClass('active');
      }
  },
  toggleCallback: function() {
    if (!this.callbackPopup.hasClass('open')){
        this.callbackPopup.addClass('open')
    } else {
        null
    }
  },
  
  toggleBrief: function() {
    if (!this.briefPopup.hasClass('open')){
        this.briefPopup.addClass('open')
    } else {
        null
    }
  },
  navMouseOver: function () {
      $(".primary-navigation .menu-item-has-children").hover(function () {
          $("body").addClass('BackDropped');
      }, function () {
          $("body").removeClass('BackDropped');
      });
  },

  toggleHeaderDrop: function () {
      if (!this.header_drop.hasClass('is-active')) {
          this.header_drop.addClass("is-active");
      } else {
          this.header_drop.removeClass("is-active");
      }
  },

  copyText: function () {
      let copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("copy");
  },
  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },

  events: function () {
      let self = this;
      if (window.matchMedia("(min-width: 767px)").matches) {
        $(".development-list__item").mouseenter(function() {
            let $this = $(this);
            let elems = $(".development-list__item");
            let contentHeight = $(this).find('.development__item__content').height()
            if(!$this.hasClass('active')) {
                elems.removeClass('active')
                $this.addClass('active');
                $this.parent().parent().css('margin-bottom', contentHeight)
            }
          });
          let developmentFirst = $(".development-list__item:first-of-type").find('.development__item__content').height()
          $(".development-list__item:first-of-type").addClass( "active" ).parent().parent().css('margin-bottom', developmentFirst)
      } else {
          null
      }
    // $(".development-list__item").mouseenter(function() {
    //     let $this = $(this);
    //     let elems = $(".development-list__item");
    //     let contentHeight = $(this).find('.development__item__content').height()
    //     if(!$this.hasClass('active')) {
    //         elems.removeClass('active')
    //         $this.addClass('active');
    //         $this.parent().parent().css('margin-bottom', contentHeight)
    //     }
    //   });
    //   let developmentFirst = $(".development-list__item:first-of-type").find('.development__item__content').height()
    //   $(".development-list__item:first-of-type").addClass( "active" ).parent().parent().css('margin-bottom', developmentFirst)

      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).on('click', '.callback-trigger', function() {
         self.toggleCallback(); 
      });
      $(document).on('click', '.brief-trigger', function() {
         self.toggleBrief(); 
      });
      $(document).on('click', '.coupon-btn', function () {
          self.copyText();
      });
      $(document).on('click', '.popup-close', function() {
        $('.popup').removeClass('open');
      });

      $(document).on('click', '.footer-navigation .menu-item-has-children > a', function (e) {
          e.preventDefault();
          if ($(window).width() + 16 < 991) {
              $(this).toggleClass('active');
          }
      });
      $(document).on('click', '.work-time', function(){
		if ($(this).hasClass('custom-data')) {
			$('.date-project').addClass("show-date");
		} else {
			$('.date-project').removeClass("show-date");
		}
      })

      $('.js-scrollLink').on('click', function () {

          let target = this.hash;
          let $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top - 80
          }, 500, 'swing');
      });

      $(".scroll-downs").click(function () {
          $('html,body').animate({
                  scrollTop: $(".second").offset().top - 120
              },
              'slow');
      });
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
  }
};


jQuery(function () {
  front.init();
  modal.init();

  $(window).scroll(function(){
      $('.parallax-image').each(function(){
            if ($(this).offset().top < $(window).scrollTop()) {
            var difference = $(window).scrollTop() - $(this).offset().top;
            var half = (difference / 2) + 'px',
                transform = 'translate3d( 0, ' + half + ',0)';
            $(this).find('img').css('transform', transform);
        } else {
            $(this).find('img').css('transform', 'translate3d(0,0,0)');
        }
      });
  });
});
    $(function () {
        $('.form-control input, form-control textarea')
            .on('focusin', function(){
            $(this).parent().parent().find('.label-name').addClass('active');
        })
            .on('focusout', function(){
        $(this).parent().parent().find('.label-name').removeClass('active');
        })
        $(".form-control input, .form-control textarea").focusout(function() {
            let $this = $(this);
            let $label = $this.parent().parent().find('.label-name')

            if ($this.val() != "") {
                $this.addClass("has-content");
                $label.addClass("active");
            }
            else {
                $this.removeClass("has-content");
                $label.removeClass("active");
            }

        })
        $("#uploadBtn").click(function() {
            $('#uploadFile').addClass("has-content");
        })
    });
// $(function () {
//     let inputField = $('.form-control input');
//     $('.form-control input')
//         .on('focusin', function(){
//             $(this).parent().parent().find('.label-name').addClass('pressed');
//         })
//         .on('focusout', function(){
//          $(this).parent().parent().find('.label-name').removeClass('pressed');
//         })
//         if ($(this).val() != "") {
//             $(this).addClass("has-content");
//         }
//         else {
//             $(this).removeClass("has-content");
//         }
//         if ($('.label-name').hasClass('.pressed')) {
//             alert('12')
//         }
//     })

//     $(function () {
//         $(".form-control input, .form-control textarea").focusout(function() {
//             if ($(this).val() != "") {
//                 $(this).addClass("has-content");
//             }
//             else {
//                 $(this).removeClass("has-content");
//             }

            
//         })
//         $("#uploadBtn").click(function() {
//             $('#uploadFile').addClass("has-content");
//         })
//     });





// $(function () {
//     $(".form-control input, .form-control textarea").focus(function() {
//         $(this).parent().parent().find('.label-name').addClass('some');
//     })
//     $(".form-control input, .form-control textarea").focusOut(function() {
//         $(this).parent().parent().find('.label-name').removeClass('some');
//     })
// });

document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
};


document.addEventListener("DOMContentLoaded", function (event) {

    let childrenItem = document.querySelectorAll('.menu-item-has-children > a');
    for (let i = 0; i < childrenItem.length; i++) {
        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.className = "nav-btn";                    // add class
        btn.innerHTML = `<i class="icon-arrow-big"></i>`;
        childrenItem[i].appendChild(btn);
    }
});

$(document).on('click', '.nav-btn', function (e) {
    e.preventDefault();
    var navTitle = document.createElement("p");
    var navBack = document.createElement("span");
    navTitle.className = "nav-title";        
    navBack.className = "prev-page"
    navBack.innerHTML = '<i class="icon-arrow-big"></i>Назад';
    navTitle.innerHTML = $(this).parent().text();
    $(this).parent().next().append(navBack);
    $(this).parent().next('.sub-menu').prepend(navTitle);
    if (!$(this).parent().next('.sub-menu').hasClass('menuOpen')) {
        $(this).parent().next('.sub-menu').addClass('menuOpen');
        $(this).parent().parent().addClass('show');
    } else {
        $(this).parent().next('.sub-menu').removeClass("menuOpen");
    }
});


$(document).on('click', '.prev-page', function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass('menuOpen')) {
        $(this).parent().removeClass("menuOpen");
        $(this).parent().find('p').remove();
        $(this).parent().find('span').remove();
        $(this).parent().parent().removeClass('show');
    }
});

$(".services-column:nth-child(1) .home-services__item").attr('data-rellax-speed', '2');
$(".services-column:nth-child(2) .home-services__item").attr('data-rellax-speed', '0.5');
$(".services-column:nth-child(3) .home-services__item").attr('data-rellax-speed', '1.5');
$(".services-column:nth-child(4) .home-services__item").attr('data-rellax-speed', '2');
$(".services-column:nth-child(5) .home-services__item").attr('data-rellax-speed', '0.5');
$(".services-column:nth-child(6) .home-services__item").attr('data-rellax-speed', '1.5');

$(".about-services .services-column:nth-child(1) .home-services__item").attr('data-rellax-speed', '1');
$(".about-services .services-column:nth-child(2) .home-services__item").attr('data-rellax-speed', '0.5');
$(".about-services .services-column:nth-child(3) .home-services__item").attr('data-rellax-speed', '1.3');
$(".about-services .services-column:nth-child(4) .home-services__item").attr('data-rellax-speed', '1');
$(".about-services .services-column:nth-child(5) .home-services__item").attr('data-rellax-speed', '0.5');
$(".about-services .services-column:nth-child(6) .home-services__item").attr('data-rellax-speed', '1.3');

$(".primary__image__container:nth-child(1) .primary__image").attr('data-rellax-speed', '10');
$(".primary__image__container:nth-child(2) .primary__image").attr('data-rellax-speed', '7');
$(".primary__image__container:nth-child(3) .primary__image").attr('data-rellax-speed', '9');
$(".primary__image__container:nth-child(4) .primary__image").attr('data-rellax-speed', '9');
$(".primary__image__container:nth-child(5) .primary__image").attr('data-rellax-speed', '8');
$(".primary__image__container:nth-child(6) .primary__image").attr('data-rellax-speed', '8');


let rellaxHome = document.querySelector('.rellax-main') !== null;
if (rellaxHome) {
    var rellax = new Rellax('.rellax-main', {
    round: true,
    vertical: true,
    horizontal: false
    });
}

let rellaxHeader = document.querySelector('.rellax') !== null;
if (rellaxHeader) {
    var rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
}

if (window.matchMedia("(max-width: 767px)").matches) {
    rellax.destroy();
  } else {
      null
  }

// var rellax = new Rellax('.rellax-main', {
//     round: true,
//     vertical: true,
//     horizontal: false
// });

// var rellax = new Rellax('.rellax', {
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
//   });




//   $(function(){
//     $(".development-list__item").hover(
//       function () {
//         let $this = $(this);
//         let contentHeight = $(this).find('.development__item__content').height()
//         $this.toggleClass('active');
//         $this.parent().parent().css('margin-bottom', contentHeight)
//       }, 
//     );
// });


