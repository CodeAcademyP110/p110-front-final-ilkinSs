// SLIDER
let index = 0;

$(document).on('click', '.arrow-left', function(){
   index--;
   if(index < 0)
        index = document.querySelectorAll('.slider-lent img').length -1;
   slide();
})
$(document).on('click', '.arrow-right', function(){
    index++;
    if(index > document.querySelectorAll('.slider-lent img').length-1 )
             index = 0 ;
    slide();
})

function slide(){
    document.querySelector('.slider-lent').style.left = -index * 100 + '%'
}

$('.menu-bar-d').hide();
$(document).on('click' , ".menu-bar-icon", function(){
    
    $('.menu-bar-d').slideToggle()
})
// SLIDER


//  MENU BAR DROPDOWN
$('.menu-bar-childs').hide();
$(document).on('click' , ".fa-plus", function(){
    console.log('qq');
    $(this).parent().next().slideToggle();
})

// MeNU BAR DROPDOWN





// DATA INFO ACCORDEON

    $(document).on('click', '.date-type ul li a', function(a){
        a.preventDefault();
        $('li.active').removeClass('active');
       $(this).parent().addClass('active');


      let dateTypeId = ($(this).parent().attr('data-id'));
      
      let dateInfoId = $('.date-info').attr('data-id') 
       // DATA DA A YAZMISAN E YERINE
        $('.date-info.active').removeClass('active')

        let activeInfo = $(`.date-info[data-id="${dateTypeId}"]`);
        // activeInfo.toggle()
        activeInfo.addClass('active')
       
    })
    
// DATA INFO ACCORDEON




// DATA INFO MINI SLIDER

$(document).on('click', '.mini-slider-arrow-right', function(){

   if($('.mini-ul li.active').next()[0] !== undefined){

      $('.mini-ul li.active').removeClass('active').next().addClass("active");
    

   } else{
    $('.mini-ul li.active').removeClass('active');
      $('.mini-ul li:first-child').addClass("active");
    
   }


   //------------------------------------

   if($('.date-info.active').next()[0] !== undefined){
    let activeLi= $('.date-info.active').removeClass('active').next().addClass("active");
    
   
   
   
   } else{
    $('.date-info.active').removeClass('active');
      $('.balaw .date-info:first-child').addClass("active");
    
   }
   
    
})

$(document).on('click', '.mini-slider-arrow-left', function(){

    if($('.mini-ul li.active').prev()[0] !== undefined){
     let activeLi=  $('.mini-ul li.active').removeClass('active').prev().addClass("active");
    } else{
     $('.mini-ul li.active').removeClass('active');
       $('.mini-ul li:last-child').addClass("active");
     
    }


    //------------------------------------------

    if($('.date-info.active').prev()[0] !== undefined){
        let activeLi= $('.date-info.active').removeClass('active').prev().addClass("active");
        

       } else{
        $('.date-info.active').removeClass('active');
          $('.balaw .date-info:last-child').addClass("active");
        
       }
})
// DATA INFO MINI SLIDER

// $(window).scroll(function() {    // this will work when your window scrolled.
//     let height = $(window).scrollTop();  //getting the scrolling height of window
//     if(height  > 100) {
//         $("#header").css({"position": "fixed"});
//     } else{
//         $("#header").css({"position": "relative"});
//     }
// });