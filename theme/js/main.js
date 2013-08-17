$('.nullium-nav li').hover(
    function() {
    	$(this).parent().children().children().removeClass('nullium-nav-hover-item');
    	$(this).children().addClass('nullium-nav-hover-item');
    },
    function() {
   }
);

$('.nullium-nav').hover(
    function() {
    },
    function() {
    	$(this).children().children().children().removeClass('nullium-nav-hover-item');
    	$(this).children().children().children('.nullium-nav-active-item').addClass('nullium-nav-hover-item');
   }
);
            
$('.nullium-creations-screenshots>a, .nullium-creations-screenshots-vertical>a').colorbox({opacity:0.7,onComplete:function()
    {
        $('.cboxPhoto').unbind().click($.colorbox.close);
    }
});

new Image().src = 'theme/img/social-icons/facebook-icon.png';
new Image().src = 'theme/img/social-icons/google-plus-icon.png';
new Image().src = 'theme/img/social-icons/twitter-icon.png';
new Image().src = 'theme/img/social-icons/rss-icon.png';