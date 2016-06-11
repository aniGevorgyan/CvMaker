$(document).ready(function () {
    var page_height = $(document).innerHeight();
    var page_width = $(document).innerWidth();
    $('.content_1').css('min-height', (page_height - 117) + 'px');
    $('.content_login').css('min-height', (page_height - 117) + 'px');

    function infoFromInputs(infoFromTo) {
        var input = $("input[name=" + infoFromTo + "]").val();
        $("." + infoFromTo + "").text(input);
    }

    $('#preview').click(function () {
        $('.div').removeClass('bounceOutLeft').addClass('bounceInLeft').show();
        $('.main_div').show();
        $('.main_div').css('height',page_height-50+"px");
        $('.main_div').css('width',page_width-30+"px");
        $('').css('background','red');
        infoFromInputs("firstName");
        infoFromInputs("lastName");
        infoFromInputs("dob");
        infoFromInputs("nationality");
        infoFromInputs("email");
        infoFromInputs("phone");
        infoFromInputs("site");
        infoFromInputs("address");
    });
    $('.close_button').click(function () {
        $('.div').removeClass('bounceInLeft').addClass('bounceOutLeft');
        setTimeout(function(){$('.div').hide()}, 1500);
    });

    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $('#cmd').click(function () {
        doc.fromHTML($('.div').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });
});
