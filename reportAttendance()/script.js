let dateField = document.getElementById("att-date");
let nameField = document.getElementById("att-name");
let rollField = document.getElementById("att-roll");
let btnL = document.getElementById("btn-left");
let btnR = document.getElementById("btn-right");
let btnA = document.getElementById("btn-A");
let btnP = document.getElementById("btn-P");
let btnE = document.getElementById("btn-E");
let btnS = document.getElementById("btn-submit");

var studentList = {};
var attendanceData = {};
var studentIndex=0;

var webapp = null;

var spreadsheet_id = null;
var tab_name = "Sheet1";
var api_key = null;
var url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
           spreadsheet_id + '/values/' + tab_name +
           '?alt=json&key=' + api_key;


fetch(url, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    },
    })  .then(response => response.json())
        .then(response => studentList = response.values)
        .then(response => studentIndex = 1)
        .then(response => getToday())
        .then(response => updateFields(studentIndex));
        

function getToday() {
    dateField = document.getElementById("att-date");
    var date = new Date();
    date = date.toISOString().split('T')[0]
    dateField.value = date;
}

function updateFields(n) {
    nameField.innerHTML = studentList[2+n][1];
    rollField.value = studentList[2+n][0];
    studentIndex = n;   
}


function recordAttendance(n,attStat) {
    tmp0Roll = studentList[2+n][0];
    attendanceData[studentIndex] = [tmp0Roll,attStat];
    updateFields(studentIndex+1);
}


function submitAttendance() {
    btnS.innerHTML = "Submit. (Wait!)"
    attendanceData["date"] = dateField.value;
    fetch(webapp, {
        method: "POST",
        mode: "no-cors",
        credentials: "omit",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : false
        },
        body: JSON.stringify(attendanceData)
    })  .then(()=> btnS.innerHTML = "Submit. (Done!)")
}
