$(document).ready(function () {
    var page_height = $(document).innerHeight();
    var page_width = $(document).innerWidth();
    $('.content_1').css('min-height', (page_height - 117) + 'px');
    $('.content_login').css('min-height', (page_height - 117) + 'px');

    function infoFromInputs(infoFromTo) {
        var input = $("input[name=" + infoFromTo + "]").val();
        $("." + infoFromTo + "").text(input);
    }

    function infoFromCheckedInputs(infoFromTo) {
        var input = $("input[name=" + infoFromTo + "]:checked").val();
        $("." + infoFromTo + "").text(input);
    }

    function infoFromCheckedInputsImage(infoFromTo) {
        var input = $("input[name=" + infoFromTo + "]:checked").val();
        $("." + infoFromTo + "").html("<img src='/images/" + input + ".png' alt='" + input + "' />");
    }

    function infoFromTextArea(infoFromTo) {
        var textarea = $("textarea[name=" + infoFromTo + "]").val();
        $("." + infoFromTo + "").text(textarea);
    }

    $('.preview').click(function () {
        $('.div').removeClass('bounceOutLeft').addClass('bounceInLeft').show();
        $('.main_div').css('height', page_height - 50 + "px");
        $('.main_div').css('width', page_width - 30 + "px").show();
        $('').css('background', 'red');
        infoFromInputs("firstName");
        infoFromInputs("lastName");
        infoFromInputs("dob");
        infoFromInputs("nationality");
        infoFromInputs("email");
        infoFromInputs("phone");
        infoFromCheckedInputs("gender");
        infoFromInputs("address");
        infoFromInputs("eduCourse");
        infoFromInputs("eduStart");
        infoFromInputs("eduEnd");
        infoFromInputs("eduInstitution");
        infoFromInputs("workTitle");
        infoFromInputs("workCompany");
        infoFromInputs("workStart");
        infoFromInputs("workEnd");
        infoFromTextArea("eduInfo");
        infoFromTextArea("workInfo");
        infoFromInputs("language");
        infoFromInputs("language2");
        infoFromInputs("language3");
        // infoFromCheckedInputsImage("langRange");
        // infoFromCheckedInputsImage("langRange2");
        // infoFromCheckedInputsImage("langRange3");
        infoFromCheckedInputs("langRange");
        infoFromCheckedInputs("langRange2");
        infoFromCheckedInputs("langRange3");

        $("#pdf2htmldiv img").each(function(){$(this).attr("src", $(this).attr("src").replace(" /images/","http://localhost:8080/images/") )});
        $("#pdf2htmldiv img").each(function(){$(this).attr("src", $(this).attr("src").replace("\\uploads\\","http://localhost:8080\\uploads\\") )});
        var cont = $('#pdf2htmldiv').html();
        var cv_name = $('.firstName').html();
        var cv_lastname = $('.lastName').html();

        $('#allInfo').val(cont);
        $('#nameInfo').val(cv_name);
        $('#lastnameInfo').val(cv_lastname);

    });

    function closePrewiev() {
        $('.div').removeClass('bounceInLeft').addClass('bounceOutLeft');
        setTimeout(function () {
            $('.div').hide()
        }, 1500);
        setTimeout(function () {
            $('.main_div').hide()
        }, 1500);
    }

    $('.close_button').click(function () {
        closePrewiev();
    });
    $('#edit').click(function () {
        closePrewiev();
    });
});

var validationApp = angular.module('myApp', []);

validationApp.controller('validateCtrl', function ($scope) {
    $scope.submitForm = function () {
        if ($scope.myForm.$valid) {
            // alert('our form is amazing');
        }

    };

});
