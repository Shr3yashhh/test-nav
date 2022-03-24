// function myFunction() {
//     let el = document.querySelectorAll(' #wrapper2_ul li');
//     console.log(el.length);
// }
////// adding css in <li> with onclick
var el = document.querySelectorAll(" #wrapper2_ul li");
// console.log("this is working")
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function() {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'nth';
        }
        el[i].className = ' add-bg';
    };
}