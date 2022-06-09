$(document).ready(function() {

    $('#reviews-form').on('submit', function() {
        var $this = $(this);
        $.post($(this).attr('action'), $(this).serialize() + "&btn_post_review=", function(data) {
            console.log(data);
            var data = $.parseJSON(data);
            if (Object.keys(data.errors).length > 0) {
                $this.find(':input').each(function() {
                    if ($(this).attr('name') in data.errors) {
                        $(this).addClass('error');
                    } else {
                        $(this).removeClass('error');
                    }

                });
                for (var i in data.errors) {
                    $this.find('#message').addClass('error').html(data.errors[i]);
                    break;
                }
            } else {
                $this.find(':input').each(function() {
                    $(this).removeClass('error')
                });
                for (var i in data.values) $this.find('[name=' + i + ']').val(data.values[i]);
                $this.find('#message').removeClass('error').addClass('success').html("Your review has been submitted!");
            }
        });
        return false;
    });

    if ($.fn.datepicker) $('.datepicker').datepicker();
    if ($.fn.timepicker) $('.timepicker').timepicker();
    if ($.fn.fancybox) $('.fancybox').fancybox();

    if ($.fn.owlCarousel) {
        $("#available").owlCarousel({
            items: 4,
            autoPlay: 3000,
            stopOnHover: true
        });
    }


    $('.click-nav > ul').toggleClass('no-js js');
    $('.click-nav .js ul').hide();
    $('.click-nav .js').click(function(e) {
        $(this).find('ul').slideToggle(200);
        $(this).find('.clicker').toggleClass('active');
        e.stopPropagation();
    });

    $(document).click(function() {
        if ($('.click-nav .js ul').is(':visible')) {
            $('.click-nav .js ul', this).slideUp();
            $('.clicker').removeClass('active');
        }
    });

    $('.faq-question').click(function() {
        $(this).parent().parent().parent().find('.faq-answer').slideToggle();
    });

});

function update_booking_image(s, i) {
    console.log('Changing booking image');
    $('#booking_image_' + i).attr('src', $(s).find(':selected').data('filename')).parent().show();
}