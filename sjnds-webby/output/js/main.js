$(document).ready(function() {
  $('.wrapper').css('opacity', 0);
  $('.content').css('top', '1600px');
  $('.subnav').css('left', '-800px');
  $('.subnav li').css('left', '-800px');
  $('.content p').css('left', '800px');
  
  $('.wrapper').animate({
    opacity:1
  }, 800, function(){
    $('.content').animate({
      top:0
    }, 400, function(){
      $('.subnav').animate({
        left:0
      }, 400, function(){
        $('.subnav li').animate({
          left:0
        }, 300);
        $('.content p').animate({
          left:0
        }, 300);
      });
    });
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





