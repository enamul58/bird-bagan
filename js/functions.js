jQuery(document).ready( function($){

    $(window).on("load", function(){
        $('.preloder').fadeOut();
    });    
    //for toggle
    $('#menu-trigger').click(function(){
        $('.menu > .main-menu').slideToggle();
    });

    //for load resize scroll 
    $(window).on("load resize scroll",function(){
        var windowWidth = $(window).width();
        
        if ( (windowWidth + 17) > 760 ) {
            $('.menu > .main-menu').css('display', 'block');
        } else {
            $('.menu > .main-menu').css('display', 'none');
        }  
    });

    //for slider auto play
    initSlider();
});
function initSlider(){
    $('.autoplay').slick({
        ots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
      });
}


//form validation 
$('#contact-submit').click( function(e){
    e.preventDefault();
    var error = false;

    // Validate Your Name Field
    var your_name = $('#your-name').val(); 
    if(your_name == "") {
        error = true;
        $('#your-name').addClass('error').removeClass('no-error');
    } else {
        $('#your-name').addClass('no-error').removeClass('error');
    }

    // Validate Your Email Field
    var your_email = $('#your-email').val(); 
    if(your_email !== "" && ValidateEmail(your_email) ) {
        $('#your-email').addClass('no-error').removeClass('error');
    } else {
        error = true;
        $('#your-email').addClass('error').removeClass('no-error');
    }
    // Validate Your Subject Field
    var your_subject = $('#your-subject').val(); 
    if(your_subject == "") {
        error = true;
        $('#your-subject').addClass('error').removeClass('no-error');
    } else {
        $('#your-subject').addClass('no-error').removeClass('error');
    }
    // Validate Your Message Field
    var your_message = $('#your-message').val(); 
    if(your_message == "") {
        error = true;
        $('#your-message').addClass('error').removeClass('no-error');
    } else {
        $('#your-message').addClass('no-error').removeClass('error');
    }

    if(error == false){
        $('#contact-form').submit();
    }
});


//subscribe email
$('#subscribe-submit').click( function(e){
    e.preventDefault();
    var error = false;

    var your_email = $('#sub-your-email').val(); 
    if(your_email !== "" && ValidateEmail(your_email) ) {
        $('#sub-your-email').addClass('no-error').removeClass('error');
    } else {
        error = true;
        $('#sub-your-email').addClass('error').removeClass('no-error');
    }

    if(error == false){
        $('#subscribe-form').submit();
    }
});

//email formate checking
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
       return (true)
     } else {
       return (false)
     }
}
   