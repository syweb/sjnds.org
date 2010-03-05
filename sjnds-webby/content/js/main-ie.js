$(document).ready(function() {
  $('.wrapper').css('left', '1600px');
  $('.content').css('left', '-1600px');
  
  $('.wrapper').animate({
    left:0
  }, 600, function(){
    $('.content').animate({
      left:0
    }, 400);
  });
});

// SCREW YOU MSIE & your crappy filters!! -- rahulmax@insightmethods.com