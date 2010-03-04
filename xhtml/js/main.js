$(document).ready(function() {
  $('.wrapper').css('opacity', 0);
  $('.content').css('left', '-1600px');
  
  $('.wrapper').animate({
    opacity:1
  }, 800, function(){
    $('.content').animate({
      left:0
    }, 400);
  });

  // $('.slide').animate({
  //     opacity:1
  //   },3000, function(){
  //     
  //     $('.slide2').animate({
  //       left: '10px'
  //     }, 1000, function() {
  // 
  //       $('.slide3').animate({
  //           left: '10px'
  //         }, 1500, function() {
  //           $('.sliding1').animate({
  //              opacity: 1,
  //              left: '300px'
  //            }, 1500, function() {
  //              $('.sliding2').animate({
  //                 opacity: 1,
  //                 left: '300px'
  //               }, 1500, function() {
  //                 $('.sliding3').animate({
  //                    opacity: 1,
  //                    left: '300px'
  //                  }, 1500, function() {
  // 
  //                  });
  //               });
  //            });
  //         });
  //     });
  //   });
});





