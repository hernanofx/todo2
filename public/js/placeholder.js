$('input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="time"], input[type="week"]').each(function() {
    var el = this, type = $(el).attr('type');
    if ($(el).val() == '') $(el).attr('type', 'text');
    $(el).focus(function() {
        $(el).attr('type', type);
        el.click();
    });
    $(el).blur(function() {
        if ($(el).val() == '') $(el).attr('type', 'text');
    });
});
