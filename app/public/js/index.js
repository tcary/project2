
$("#subBtn").on("click", function (event) {
    event.preventDefault();

    let user = {
        ministry: $("#ministrySelect").val().trim(),
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        note: $("#note").val().trim()
    };
    console.log(user);

    // Here we are clearing the form
    $("#mainForm input, #mainForm select, #mainForm textarea").val("");

    // here we save the user in the local storage

    // here we send the data to the back end.
        window.location.href = "/calendar"

    $.post("/api/form", user) //
        .then(function (data) {
            console.log("add.html", data);
            localStorage.setItem("userId", data);
            console.log(data);

        });

    // $.ajax({
    //     method: "POST",
    //     url: "/api/schedule",
    //     data: user
    // // this one or the one below. what is the difference that is the question? 
    // }).then(function(data) {
    //     console.log("add.html", data);
    //     alert("Adding to schedule...");
    //     });
    // this one or the one above. what is the difference that is the question?



})
//on click of day in the calendar,
$.get("/api/days/:day").then(function () {

})