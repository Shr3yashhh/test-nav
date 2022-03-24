let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
//     sidebar.classList.toggle("open");
//     menuBtnChange(); //calling the function(optional)
// });

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
}

var el = document.querySelectorAll(".sidebar ul li a");
var tg = document.querySelectorAll(".sidebar ul li a i");

for (let i = 0; i < el.length; i++) {
    el[i].onclick = function() {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'nth';
        }
        console.log("this is working")
        el[i].className = 'add_bg';
    };
}

for (let i = 0; i < tg.length; i++) {
    tg[i].onclick = function() {
        var c = 0;
        while (c < tg.length) {
            tg[c++].className = 'nth';
        }
        console.log("this is working")
        tg[i].className = 'add_c';
    };
}