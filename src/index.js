var nav = document.getElementById("nav");
var menu = document.getElementById("menu");
var close = document.getElementById("close");

menu.addEventListener("click", () => {
    console.log("coming aa");
    menu.classList.toggle("hidden");
    nav.classList.toggle("right-[0%]");
})
close.addEventListener("click", () => {
    console.log("coming soon");
    nav.classList.toggle("right-[0%]");
    menu.classList.toggle("hidden");
})
