$(function() {
    $("[data-modal]").on("click", function(event){
        event.preventDefault();

        $(modal_resume).addClass('show');

    });

    $(modal_resume).on("click", function() {
        $(modal_resume).removeClass('show');
    });
});