import "../style.css";
import menu from "../images/menu.svg"

function Header() {
    //header container
    const header = document.createElement("header");

    const navLogoContainer = document.createElement("div");
    navLogoContainer.classList.add("nav-logo-container");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    logoContainer.textContent = "To-Do List";
    /*const logoImage = new Image();
    logoImage.src = "../images/";
    logoImage.classList.add("logo-image");
    logoContainer.appendChild(logoImage); */

    navLogoContainer.appendChild(logoContainer);

    const nav = document.createElement("nav");
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    const all = document.createElement("li");
    all.textContent = "ALL";

    const work = document.createElement("li");
    work.textContent = "WORK";

    const gym = document.createElement("li");
    gym.textContent = "GYM";

    const school = document.createElement("li");
    school.textContent = "SCHOOL";

    const chores = document.createElement("li");
    chores.textContent = "CHORES"

    menuList.appendChild(all);
    menuList.appendChild(work);
    menuList.appendChild(gym);
    menuList.appendChild(school);
    menuList.appendChild(chores);

    nav.appendChild(menuList);

    const mobiLeMenuHamburgerContainer = document.createElement("div");
    mobiLeMenuHamburgerContainer.classList.add("hamburger-container");
    const mobileMenuHamburger = new Image();
    mobileMenuHamburger.src = menu;
    mobileMenuHamburger.classList.add("mobile-menu-hamburger")

    mobiLeMenuHamburgerContainer.appendChild(mobileMenuHamburger);

    navLogoContainer.appendChild(nav);

    navLogoContainer.appendChild(mobiLeMenuHamburgerContainer);
    header.appendChild(navLogoContainer);


    return header;
}

export default Header;