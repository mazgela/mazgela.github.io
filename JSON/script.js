let myData = [{
    id: 1,
    first_name: "Noah",
    last_name: "Bradley",
    email: "noahbradley@artcamp.com",
    gender: "Male"
}, {
    id: 2,
    first_name: "Cam",
    last_name: "Sykes",
    email: "camsykes@gmail.com",
    gender: "Male"
}, {
    id: 3,
    first_name: "Jason",
    last_name: "Chan",
    email: "jchan@riotgames.com",
    gender: "Male"
}, {
    id: 4,
    first_name: "Emily",
    last_name: "Hare",
    email: "memhare@gmail.com",
    gender: "Female"
}, {
    id: 5,
    first_name: "Natasha",
    last_name: "Khan",
    email: "natkhan@gmail.com",
    gender: "Female"
}, {
    id: 6,
    first_name: "Johannes",
    last_name: "Hedgeson",
    email: "johannh@gmail.com",
    gender: "Male"
}];


$(document).ready(() => {
    $("#fill").click(() => {
        FillTable();
        $("#fill").prop("disabled", true);
    });
})

function FillTable() {
    let table = $("#JSONtable");

    myData.forEach(item => {
        let row = $("<tr>");
        for (let key in item) {
            console.log(key, item[key])
            let rowData = $("<td>");
            rowData.text(item[key]);
            row.append(rowData);
        }
        table.append(row);
    });

}