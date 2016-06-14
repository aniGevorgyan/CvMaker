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
        $('.main_div').css('height', page_height - 50 + "px");
        $('.main_div').css('width', page_width - 30 + "px").show();
        $('').css('background', 'red');
        infoFromInputs("firstName");
        infoFromInputs("lastName");
        infoFromInputs("dob");
        infoFromInputs("nationality");
        infoFromInputs("email");
        infoFromInputs("phone");
        infoFromInputs("site");
        infoFromInputs("address");
    });

    function closePrewiev(){
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

validationApp.controller('validateCtrl', function($scope) {
    $scope.submitForm = function() {
        if ($scope.myForm.$valid) {
            // alert('our form is amazing');
        }

    };

});
