$(document).ready(function() {
    $(".eat-burger").on("click", function () {
        var id = $(this).data("id");

        $.ajax("/burgers/update/devour/" + id, {
            type: "PUT"
           
        }).then(
            function () {
               
                location.reload();
            }
        );
    });


});