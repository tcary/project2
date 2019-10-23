let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    // console.log(firstDay, currentMonth, daysInMonth);

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let dateIndex = 0;
    let date = dateIndex + 1;
    // let date1 = $(this).attr("data-name");
    for (let i = 0; i < 5; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && dateIndex < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.append(cellText);
                row.append(cell);
            }
            else if (i === 4 && date > daysInMonth) {
                // console.log(dateIndex);
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                // cell.attr("data-name", date1);
                cell.append(cellText);
                row.append(cell);
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                // let cell = $("<td><button></button></td>")
                $(cell).attr("data-date", date);
                $(cell).addClass("activeDay");
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
            dateIndex++;
        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}
$(".activeDay").on("click", function () {

    $(".volunteer-view").empty();
    $("#submit").show();
    let clickedDay = $(this).data("date")
    

    // console.log(clickedDay.day)
    // console.log(today)

    // Add logic to make sure the pass date is not able to be selected. 
    // if (clickedDay.day < today) {
    //     return alert("Time Mashine is broken")

    // }


    // console.log($(this).data("date"));
    for (let i = 0; i <= 5; i++) {
        let volDiv = $("<div>");
        volDiv.addClass("volDiv"); // adding a class
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        volDiv.html("");
        $(".volunteer-view").append(input);
        let volName = $();
    }
    // $.ajax(`/api/days/${clickedDay}`).then(function (data) {
        
    //     console.log(data);

    // })
    
    // $.put(`/api/days${clickedDay}`).then(function(data){
    //     console.log("I have not idea what Im doing.")
    // })

    $.ajax({
        method: "PUT",
        url: `/api/days/${clickedDay}`,
        data: {userId:  localStorage.getItem("userId")}
      })
        .then(function() {
        //   window.location.href = "/blog";
        console.log("You are in business MTF")
        });


        




})

$("#submit").hide();