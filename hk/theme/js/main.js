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

//addOnloadEvent() code snippet is from http://www.tek-tips.com/faqs.cfm?fid=4862
function addOnloadEvent(f){
    if ( typeof window.addEventListener != "undefined" )
        window.addEventListener( "load", f, false );
    else if ( typeof window.attachEvent != "undefined" ) {
        window.attachEvent( "onload", f );
    } else {
        if ( window.onload != null ) {
            var oldOnload = window.onload;
            window.onload = function ( e ) {
                oldOnload( e );
                window[f]();
            };
        } else {
            window.onload = f;
        }
    }
}

//based on the script from http://briancray.com/2009/03/14/google-analytics-hack-track-outbound-links/
addOnloadEvent ( 
    function () {
        var links = document.getElementsByTagName('a');
        for (var i=0; i < links.length; i++) {
            links[i].onmouseup = function () {
                var myDomain = new RegExp(document.domain, 'i');
                if(!myDomain.test(this.getAttribute('href'))) {
                    _gat._getTrackerByName()._trackEvent('Outbound Links', this.getAttribute('href'));
                    setTimeout('document.location = "' + link.href + '"', 100);
                    //pageTracker._trackPageview('/outgoing/' + this.getAttribute('href'));
                }
            };
        }
    }
);