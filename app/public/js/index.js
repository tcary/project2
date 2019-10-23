
$("#subBtn").on("click", function (event) {
    event.preventDefault();

    let user = {
        ministry: $("#ministrySelect").val().trim(),
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        note: $("#note").val().trim()
    };
    // console.log(user);

    // Here we are clearing the form
    $("#mainForm input, #mainForm select, #mainForm textarea").val("");

// here we redirect the user to the next page
    window.location.href = "/calendar"

    

    $.post("/api/form", user) 

  

        .then(function (data) {

            localStorage.setItem("userId", data.id);



        });

})



