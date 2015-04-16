// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

$( function() {

    // hide all sections at first
    $( '.page-section' ).hide();

    // offset the in-page navigation to account for the fixed header height
    //
    $( '.item' ).click( function() {
        var $this = $( this ),
            target = $this.attr( "href" );
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
        $( window ).scrollTop( $section.offset().top - 54 );
        return false; 
    });

    // try to load a hash section; load first one by default
    var hash = window.location.hash;
    if ( hash.length ) {
        hash = hash.substring( 1 );
        $( 'ul.nav' ).find( 'a.item.' + hash ).click();
    }
    else {
        $( 'ul.nav' ).find( 'a' ).first().click();
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

    $ulNav.perfectScrollbar();
    $drawerScroller.perfectScrollbar();

    var updateScrollbars = _.debounce( function () {
        $ulNav.perfectScrollbar( 'update' );
        $drawerScroller.perfectScrollbar( 'update' );
    }, 250 );

    $( window ).resize( updateScrollbars );

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

    // drawers
    var $body = $( 'body' );
    $( '#openDrawer' ).on( 'click', function () {
        $body.removeClass( 'with-collapsed-drawer' );
    });
    $( '#closeDrawer' ).on( 'click', function () {
        $body.addClass( 'with-collapsed-drawer' );
    });
});