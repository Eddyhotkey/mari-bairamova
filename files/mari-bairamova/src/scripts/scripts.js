$(document).ready( function () {
    /*
        burger_button;
     */
    let burger_button = $( '.burger' );
    let menu_container = $( '.mobile_menu_overlay' );
    console.log( menu_container );

    $( burger_button ).click( function () {
        $(this).toggleClass('open');
    });

    $( menu_container ).click( function () {
        $( burger_button ).removeClass( 'open' );
    });

});

