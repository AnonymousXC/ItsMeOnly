let side_bar = document.getElementById("side-bar");
let menu_btn = document.getElementById("toogle-menu");


function toogle_menu() {
    let computed_style = getComputedStyle(side_bar);
    let left = computed_style.left;
    if(left == "-300px"){
        side_bar.style.left = "0px";
        menu_btn.innerHTML = "<i class=\"bi bi-x-lg\"></i>";
    }
    else {
        side_bar.style.left = "-300px"
        menu_btn.innerHTML = "<i class=\"bi bi-list\"></i>";
    }
}

function correct_toggle() {
    let width = window.innerWidth;
    if(width >= 1000){
        side_bar.style.left = "0px"
    }
    else {
        side_bar.style.left = "-300px"
    }
}