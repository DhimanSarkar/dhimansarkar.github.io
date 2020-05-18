const blog_navBtn = document.querySelector("#blog-nav-button");
const blog_nav = document.querySelector("#blog-nav");
var blog_nav_show = false;

nav_switch = () => {
    if (blog_nav_show === false){
        blog_nav_show = true;
        blog_nav.classList.add("show");
        blog_nav.classList.remove("hide");
        blog_navBtn.classList.add("rotate-up");
        blog_navBtn.classList.remove("rotate-down");
    }
    else{
        blog_nav_show = false;
        blog_nav.classList.add("hide");
        blog_nav.classList.remove("show");
        blog_navBtn.classList.add("rotate-down");
        blog_navBtn.classList.remove("rotate-up");
        setTimeout(()=>{
            blog_navBtn.classList.remove("rotate-down");},300);
    }
    console.log ("sdf");
}

blog_navBtn.addEventListener("click",function(){nav_switch();});