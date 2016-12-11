$(document).ready(function () {

    var $submit = $('.submit-button');
    var $formInProgress = $('.in-progress');
    var $formAccepted = $('.form-accepted');

    var $name = $("#name");
    var $email = $("#email");
    var $country = $('#country');
    var $errorOne = $(".error-one");
    var $errorTwo = $(".error-two");

    function validation() {
        $submit.on("click", function (e) {
            var nameValue = $name.val();
            var emailValue = $email.val();
            e.preventDefault();

            if (nameValue.length < 5) {
                $errorOne.text("To pole musi mieć co najmniej 5 znakow");
                $errorOne.show();
            } else {
                $errorOne.text("");
                $errorOne.hide();
            }

            if (emailValue.length < 5 || emailValue.search("@") === -1) {
                $errorTwo.text("Email musi mieć co najmniej 5 znaków i zawierać znak @");
                $errorTwo.show();
            } else {
                $errorTwo.text("");
                $errorTwo.hide();
            }

        });
    }

    validation();

});
