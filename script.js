$('.hamburger').click(function () { 
    $('.mobile-menu').css('display', 'block');

     $('.mobile-menu').css('height', '50vh');
    
    $('.mobile-menu-item').css('opacity', '1'); 
});

$('.close').click(function () { 
    
    $('.mobile-menu').css('height', '0');
    $('.mobile-menu-item').css('opacity', '0'); 
    $('.mobile-menu').css('display', 'none');
    
    
});

if($(window).width() < 830){
    $('.about-page > img').attr('src', 'images/mobile/image-interactive.jpg');
    $('.deep-earth > img').attr('src', 'images/mobile/image-deep-earth.jpg');
    $('.night-arcade > img').attr('src', 'images/mobile/image-night-arcade.jpg');
    $('.soccer > img').attr('src', 'images/mobile/image-soccer-team.jpg');
    $('.grid > img').attr('src', 'images/mobile/image-grid.jpg');
    $('.above > img').attr('src', 'images/mobile/image-from-above.jpg');
    $('.pocket > img').attr('src', 'images/mobile/image-pocket-borealis.jpg');
    $('.curiosity > img').attr('src', 'images/mobile/image-curiosity.jpg');
    $('.fisheye > img').attr('src', 'images/mobile/image-fisheye.jpg');
}
