// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        console.log('id', id)
        var newDevoured = $(this).data("new-devoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    //on submit listener for the create burger form

    $("#add-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //check if the user has entered something
        if (!$("#burger-name").val()) {
            //exit
            return;
        }

        //create a new burger object
        var newBurger = {
            name: $("#burger-name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim(),
            ingredients: $("#ingredients").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("burger-frontend.js: created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});