$(document).ready(function(){
  if($('.subnav li:first').hasClass('current') && !$('.nav li:last').hasClass('current') &&$('.nav li:first').hasClass('current')){
    $('.wrapper').css('left', '1600px');
    $('.content').css('left', '-1600px');
    $('.wrapper').animate({
      left:0
    }, 600, function(){
      $('.content').animate({
        left:0
      }, 400);
    });
  }

  
// Splash Animation
  $('.slide').css({'height' : '50px', 'width' : '50px', 'z-index' : '400'});
  $('.slide2').css({ 'left' : '245px'});
  $('.slide3').css({'left': '490px'});
  $('.slide3').css({'left': '490px'});
  $('.sliding').css({'left': '2000px'});

  $('.slide').animate({
    width: 235,
    height:175
  }, 2500);
 $('.slide').animate({opacity: 1.0}, 3000),

  $('.slide2').animate({
    top:0,
    left:0
  },600, function(){
    $('.slide3').animate({
      top:0,
      left:0
    },600, function(){
      $('.sliding1').animate({
        left:265,
        top:10
      }, 2000, function(){
        $('.sliding2').animate({
          left:265,
          top:70
        }, 2000, function(){
          $('.sliding3').animate({
            left:265,
            top:130
          },2000, function(){
		          $('.sliding3').animate({
		            opacity:1
		          },5000, function(){
            $(window.location = 'home.html').delay(1500);
            });
		  });
        });
      });
    });
  });
  //end

// Campus Tour Animations
  $('.campus-tour').cycle({
	  fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
  });
  
});