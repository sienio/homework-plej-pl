document.addEventListener("DOMContentLoaded", function () {
    var submit = document.querySelector('.submit-button');
    var formInProgress = document.querySelector('.in-progress');
    var formAccepted = document.querySelector('.form-accepted');

    submit.addEventListener('click', function (event) {
        event.preventDefault();
        formInProgress.style.display = 'none';
        formAccepted.style.display = 'block';
    });
})
