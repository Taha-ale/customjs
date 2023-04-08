jQuery('.welcome-text').each(function() {
        jQuery(this).insertBefore(jQuery(this).parent().find('.subject'));
});
