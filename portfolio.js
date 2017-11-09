$(document).ready(function(){
   // responsive menu
  $('#resp-princ').click(function(){
    $('#menu-princ').toggleClass('show hide');
    $('.image').toggleClass('showimage hideimage');
  })

  $('#work-resp').click(function(){
    $('#work-menu').toggleClass('show hide');
  })

  // work menu

  $('.work-item').click(function(){
    $('.work-item').removeClass('zwak');
    $(this).addClass('zwak');
  })

  //tech slider icon
  var itemWidth = $('.tech-item').width();
  function slide(){
    $('.tech-list').animate({
      left:  75
    },1400, function(){
      $('.tech-list li:last-child').prependTo('.tech-list')
      $('.tech-list').css('left', '10px')
      slide()
    })
  }
slide();

// job filter section

var idItem = '';

$('.work-item').click(function(){
  idItem = $(this).attr('id');
   switch(idItem){
     case 'all' :
        $('.job-wrap').removeClass('show');
        $('.job-wrap').addClass('show');
        break;
     case 'wordpress' :
        $('.job-wrap').removeClass('show');
        $('.job-wrap').addClass('hide');
        $('.pikwordpress').addClass('show');
        break;
     case 'codepen' :
        $('.job-wrap').removeClass('show');
        $('.job-wrap').addClass('hide');
        $('.pikcodepen').addClass('show');
        break;
     case 'ui' :
        $('.job-wrap').removeClass('show');
        $('.job-wrap').addClass('hide');
        $('.pikui').addClass('show');
        break;
     default:
      $('.job-wrap').addClass('hide');
   }
})

  })
