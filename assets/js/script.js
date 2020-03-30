const test_btn = document.getElementById("tstBtn");

const home_btn = document.getElementById("nav-home");
const blog_btn = document.getElementById("nav-blog");
const contact_btn = document.getElementById("nav-contact");
const about_btn = document.getElementById("nav-about");

const home_section = document.getElementById("home-wrapper");
const blog_section = document.getElementById("blog-wrapper");
const contact_section = document.getElementById("contact-wrapper");
const about_section = document.getElementById("about-wrapper");

//Chek if mobile browser
var isMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
window.onload = () => {
  if(isMobile() == true){
      document.getElementById("nav").classList.remove("nav-desktop");
      document.getElementById("nav").classList.add("nav-mobile");
  } else {
      document.getElementById("nav").classList.add("nav-desktop");
  }
};


// window selector
var view = function (nav_no)
{
    if (nav_no === 1) { //Home Window
        test_btn.style.background = "red";
         home_section.style.display=""; // Enable Home Window
        contact_section.style.display = "none"; // Dont Display Contact
        about_section.style.display = "none"; // Dont Display About
        home_section.scrollIntoView();
        contact_btn.parentNode.classList.remove("active");
        about_btn.parentNode.classList.remove("active");
        home_btn.parentNode.classList.add("active");
        home_section.classList.remove("hide");
        home_section.classList.add("show");
        about_section.classList.add("hide");
        about_section.classList.remove("show");
        contact_section.classList.add("hide");
        contact_section.classList.remove("show");
    } else if (nav_no === 2) {
        test_btn.style.background = "green";

    } else if (nav_no === 3) { //Contact Window
        test_btn.style.background = "blue";
        contact_section.style.display=""; // Enable Contact Window
        contact_section.scrollIntoView();
        home_btn.parentNode.classList.remove("active");
        about_btn.parentNode.classList.remove("active");
        contact_btn.parentNode.classList.add("active");
        contact_section.classList.remove("hide");
        contact_section.classList.add("show");
        home_section.classList.add("hide");
        home_section.classList.remove("show");
        about_section.classList.add("hide");
        about_section.classList.remove("show");
        about_section.style.display = "none"; // Dont Display About
        home_section.style.display = "none"; // Dont Display Home
    } else if (nav_no === 4) {
        test_btn.style.background = "yellow";
        about_section.style.display=""; //Enable About Window
        about_section.scrollIntoView();
        home_btn.parentNode.classList.remove("active");
        contact_btn.parentNode.classList.remove("active");
        about_btn.parentNode.classList.add("active");
        about_section.classList.remove("hide");
        about_section.classList.add("show");
        home_section.classList.add("hide");
        home_section.classList.remove("show");
        contact_section.classList.add("hide");
        contact_section.classList.remove("show");
        home_section.style.display = "none"; // Dont Display Home
        contact_section.style.display = "none"; // Dont Display Contact
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

/*
window.onscroll = function () {
    windowYOffset = window.pageYOffset;
    console.log(windowYOffset);

    if (windowYOffset === about_section.offsetTop) {
        this.view(4);
        this.console.log("about");
    } 
    else if (windowYOffset === contact_section.offsetTop) {
        this.view(3);
        this.console.log('contact');
    }
}*/