// Copyright © 2012 by Scott Sanbar - see COPYRIGHT file
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

$(window).on('load', function () {
    $('#button').on('click', function () {
        $('#output').html($('#output').html() + '<br />' + $('#button').attr('value'));
    });
});