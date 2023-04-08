$('.welcome-text').each(function() {
        $(this).insertBefore($(this).parent().find('.subject'));
});
