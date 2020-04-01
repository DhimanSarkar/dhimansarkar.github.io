let RequestURL = "http://worldtimeapi.org/api/timezone/Asia/Kolkata.json"
var year;
fetch(RequestURL)
    .then(res => res.json())
    .then((out) => {
        year = out.datetime.substr(0,4);
        document.getElementById("me-age").innerHTML += year-1998;
}).catch(err => console.error(err));

this.console.clear();