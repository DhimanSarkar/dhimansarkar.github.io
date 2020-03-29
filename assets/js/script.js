const test_btn = document.getElementById("tstBtn");

const home_btn = document.getElementById("nav-home");
const blog_btn = document.getElementById("nav-blog");
const contact_btn = document.getElementById("nav-contact");
const about_btn = document.getElementById("nav-about");

const home_section = document.getElementById("home-wrapper");
const blog_section = document.getElementById("blog-wrapper");
const contact_section = document.getElementById("contact-wrapper");
const about_section = document.getElementById("about-wrapper");

var view = function (nav_no)
{
    if (nav_no === 1) {
        test_btn.style.background = "red";
        home_section.scrollIntoView();
    } else if (nav_no === 2) {
        test_btn.style.background = "green";

    } else if (nav_no === 3) {
        test_btn.style.background = "blue";
        contact_section.scrollIntoView();
    } else if (nav_no === 4) {
        test_btn.style.background = "yellow";
        about_section.scrollIntoView();
    } else if (nav_no === 5) {
        test_btn.style.background = "purple";
    } else { // Default set to Home i.e. 1
        test_btn.style.background = "red";
    }
}

view(1); //On First Load - Inititialization

// Event listeners for Navigation Buttons
home_btn.addEventListener("click", function(){view(1);});
blog_btn.addEventListener("click", function(){view(2);});
contact_btn.addEventListener("click", function(){view(3);});
about_btn.addEventListener("click", function(){view(4);});