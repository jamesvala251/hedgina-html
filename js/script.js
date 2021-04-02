$('a.nav-link.profile').click(function(){
    $('.myprofilebox').addClass('active');
});
$('.closeprofile').click(function(){
    $('.myprofilebox').removeClass('active');
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});