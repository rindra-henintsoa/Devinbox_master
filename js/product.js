$(document).ready(function() {
    /*$('.add_basket').click(function() {
        if($(this).hasClass('checked')) {
            $(this).children('i').remove();
            $(this).parent().siblings('.product_price').children('.add_basket').children('i').remove();
            $(this).next().remove();
            $(this).parent().siblings('.product_price').children('.add_basket').next().remove();
        } else {
            $(this).append(' <i class="fa fa-check"></i>');
            $(this).parent().siblings('.product_price').children('.add_basket').append(' <i class="fa fa-check"></i>');
            $(this).parent().append('<p><a href="#">Voir le panier</a></p>');
            $(this).parent().siblings('.product_price').append('<p><a href="#">Voir le panier</a></p>');
        }
        $(this).toggleClass('checked');
        $(this).parent().siblings('.product_price').children('.add_basket').toggleClass('checked');
    });
    */
    $('.card').css('height', $('.card').width());
    $('.card .img span').css('background-size', $('.card').width());
    $(window).resize(function() {
        $('.card').css('height', $('.card').width());
        $('.card .img span').css('background-size', $('.card').width());
    })
})