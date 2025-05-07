//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
}

const hamburgerMenu = document.querySelector("#hamburger-menu");
//klik diluar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e){
    if(!hamburgerMenu.contains(e.target) && (!navbarNav.contains(e.target))){
        navbarNav.classList.remove("active");
    }
})