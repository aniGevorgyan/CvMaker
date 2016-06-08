$(document).ready(function () {
    var page_height = $(window).height();
    $('.content_1').css('min-height', (page_height - 117) + 'px');
    $('.content_login').css('min-height', (page_height - 117) + 'px');

    function infoFromInputs(infoFromTo) {
        var input = $("input[name=" + infoFromTo + "]").val();
        $("." + infoFromTo + "").text(input);
    }

    $('#preview').click(function () {
        $('.div').show();
        infoFromInputs("firstName");
        infoFromInputs("lastName");
        infoFromInputs("dob");
    });
    $('.close_button').click(function () {
        $('.div').hide();
    });

    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $('#cmd').click(function () {
        doc.fromHTML($('body').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });
});
