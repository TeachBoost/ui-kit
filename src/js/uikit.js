/**
 * Main page objects and functions
 */

$( function() {

    var Global = {

        clearFileInput: function() {

            $( '.form-group' ).on( 'click', 'a.clear-file', function( e ) {
                e.preventDefault();
                var input = $( this ).parent().children( 'input' );
                    input.wrap('<form>').closest('form').get(0).reset();
                    input.unwrap();
            });

        }
    };

    // run them
    Global.clearFileInput();

});
