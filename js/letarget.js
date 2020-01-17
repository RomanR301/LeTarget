let front = {

  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  callbackPopup: $('.callback-popup'),
  briefPopup: $('.brief-popup'),
  filterGridBtn: $('.filter-grid__btn'),
  header_drop: $('.header-drop'),
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

      self.navMouseOver();
    //   $(window).on('scroll', function () {
    //       self.headerScroll();
    //   });

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
    //   $(document).on('click', '.header-nav__link', function (e) {
    //       e.preventDefault();
    //       console.log($(window).width());
    //       if ($(window).width() + 16 < 991) {
    //           $(this).toggleClass('js-link-active');
    //       }
    //   });


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


  // Hide Header on on scroll down
//   let didScroll;
//   let lastScrollTop = 0;
//   let delta = 5;
// //   let navbarHeight = $('.header').outerHeight();

//   $(window).scroll(function (event) {
//       didScroll = true;
//   });

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

//   setInterval(function () {
//       if (didScroll) {
//           hasScrolled();
//           didScroll = false;
//       }
//   }, 250);

//   function hasScrolled() {
//       let st = $(this).scrollTop();

//       // Make sure they scroll more than delta
//       if (Math.abs(lastScrollTop - st) <= delta)
//           return;

//       // If they scrolled down and are past the navbar, add class .nav-up.
//       // This is necessary so you never see what is "behind" the navbar.
//       if (st > lastScrollTop && st > navbarHeight) {
//           // Scroll Down
//           $('.header').removeClass('--down').addClass('--up');
//       } else {
//           // Scroll Up
//           if (st + $(window).height() < $(document).height()) {
//               $('.header').removeClass('--up').addClass('--down');
//           }
//       }

//       lastScrollTop = st;
//   }


});

$(function () {
    $(".form-control input, .form-control textarea").focusout(function() {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        }
        else {
            $(this).removeClass("has-content");
        }
    })
    $("#uploadBtn").click(function() {
        $('#uploadFile').addClass("has-content");
    })

    
//   let detectInview = function () {
//       let wh = $(window).height();
//       let scrollTop = $(window).scrollTop();

//       $('.detect-inview').each(function () {
//           let el = $(this);
//           if (el.offset().top - wh + 300 <= scrollTop && scrollTop <= el.offset().top + el.height()) {
//               el.addClass('to-animate');

//           } else {
//               el.removeClass('to-animate');
//           }
//       });

//   }
//   detectInview();
//   $(window).on('scroll', function () {
//       detectInview();
//   });
});

document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
};


// function alertFilename() {
//     var thefile = document.getElementById('form-file');
//     document.getElementById('label-file').innerHTML =  thefile.value; }

