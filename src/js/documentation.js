// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

$( function() {

    // hide all sections at first
    $( '.page-section' ).hide();

    // hide the working screen
    $( '#app-working' ).hide();
    $( '#app-working-overlay' ).hide();

    // offset the in-page navigation to account for the fixed header height
    $( '.item' ).click( function() {
        var $this = $( this ),
            target = $this.attr( "href" ),
            actionsPadding = ( $( 'body' ).hasClass( 'with-actions' ) )
                ? $( 'section.actions' ).outerHeight()
                : 0;
            padding = 54 + actionsPadding;
        target = target.substring( 1, target.length );
        var $section = $( 'section#' + target );
        // activate this LI
        $( 'ul.nav li' ).removeClass( 'active' );
        $this.closest( 'li' ).addClass( 'active' );
        // hide visible page sections
        $( '.page-section:visible' ).hide();
        $section.show();
        // update hash and scroll
        window.location.hash = '#' + target;
        $( window ).scrollTop( $section.offset().top - padding );
        return false; 
    });

    // try to load a hash section; load first one by default
    var hash = window.location.hash;
    if ( hash.length ) {
        hash = hash.substring( 1 );
        $( 'ul.nav' ).find( 'a.item.' + hash ).click();
    }
    else {
        $( 'main' ).find( 'section' ).eq( 1 ).show();
    }

    // set up checkboxes using icheck
    $( 'input[type="checkbox"]' ).iCheck({
        checkboxClass: 'icheck',
        increaseArea: '20%'
    });

    $( 'input[type="radio"]' ).iCheck({
        radioClass: 'iradio',
        increaseArea: '20%'
    });

    // set up scrollers
    var $ulNav = $( 'ul.nav' );
    var $drawerScroller = $( '#drawerScroller' );

    /*
    $ulNav.perfectScrollbar();
    $drawerScroller.perfectScrollbar();

    var updateScrollbars = _.debounce( function () {
        $ulNav.perfectScrollbar( 'update' );
        $drawerScroller.perfectScrollbar( 'update' );
    }, 250 );

    $( window ).resize( updateScrollbars );
    */

    // set up notifyjs
    $.notify.addStyle( 'flat', {
        html:
            '<div>' +
                '<div class="icon" data-notify-html="icon"/>' +
                '<div class="text-wrapper sans-font">' +
                    '<div class="md-text text" data-notify-text="text"/>' +
                '</div>' +
            '</div>',
        classes: {}
    });

    $.notify.defaults({
        // whether to hide the notification on click
        clickToHide: true,
        // whether to auto-hide the notification
        autoHide: true,
        // if autoHide, hide after milliseconds
        autoHideDelay: 10000,
        // show the arrow pointing at the element
        arrowShow: false,
        // arrow size in pixels
        arrowSize: 5,
        // default positions
        elementPosition: 'bottom left',
        globalPosition: 'top right',
        // default style
        style: 'flat',
        // default class (string or [string])
        className: 'error',
        // show animation
        showAnimation: 'fadeIn',
        // show animation duration
        showDuration: 400,
        // hide animation
        hideAnimation: 'fadeOut',
        // hide animation duration
        hideDuration: 200,
        // padding between element and notification
        gap: 2
    });

    // functions for an API to use
    window.notify = {
        success: function ( message ) {
            $.notify({
                text: message,
                icon: '<i class="fa fa-check" style="top:-2px;"></i>'
            }, 'success' );
        },
        error: function ( message ) {
            $.notify({
                text: message,
                icon: '<i class="fa fa-times-circle"></i>'
            }, 'error' );
        },
        info: function ( message ) {
            $.notify({
                text: message,
                icon: '<i class="fa fa-info-circle"></i>'
            }, 'info' );
        },
        warning: function ( message ) {
            $.notify({
                text: message,
                icon: '<i class="fa fa-warning"></i>'
            }, 'warning' );
        }
    };

    // Drawers
    var $body = $( 'body' );
    $( '#openDrawer' ).on( 'click', function () {
        $body.removeClass( 'with-collapsed-drawer' );
    });
    $( '#closeDrawer' ).on( 'click', function () {
        $body.addClass( 'with-collapsed-drawer' );
    });

    // Update font size on toggle
    var $toggle = $( '#toggle-zoom' ),
        bodySizes = [
            { pt: 15, mag: 1 },
            { pt: 16, mag: 2 },
            { pt: 17, mag: 3 },
            { pt: 18, mag: 4 },
            { pt: 19, mag: 5 }
        ];
    // When the + or - button is pressed
    $toggle.on( 'click', 'button.adjust', function ( e ) {
        var $this = $( this ),
            $size = $this.parent().find( '.size' ),
            direction = $this.data( 'direction' ),
            mag = $size.data( 'mag' );

        if ( direction === 'up' ) {
            mag++;
        }
        else if ( direction === 'down' ) {
            mag--;
        }

        mag = Math.min( bodySizes[ _.size( bodySizes ) - 1 ].mag, mag );
        mag = Math.max( bodySizes[ 0 ].mag, mag );
        setFontSize( mag );
        e.stopPropagation();
        e.preventDefault();
    });

    // When the middle divider is pressed, do nothing
    $( '#toggle-zoom' ).on( 'click', 'button.size', function ( e ) {
        e.stopPropagation();
    });

    // Updates font size setting based on a magnification level
    function setFontSize ( mag ) {
        var size;

        if ( ! mag ) {
            mag = 2;
        }

        size = _.findWhere( bodySizes, { mag: mag } );

        $( 'body' ).removeClass( 'x1 x2 x3 x4 x5' )
            .addClass( 'x' + mag );
        $( '#toggle-zoom' ).find( '.size' )
            .data( 'pt', size.pt )
            .data( 'mag', size.mag )
            .text( size.pt + ' pt' );
    }
});
