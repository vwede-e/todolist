import "../style.css";

function MobileMenu() {

    const mobileMenuSection = document.createElement("section");
    mobileMenuSection.classList.add("mobile-menu-section");


    const mobileMenuContainer = document.createElement("ul");
    mobileMenuContainer.classList.add("menu-list");
    mobileMenuContainer.classList.add("mobile-menu-container");

    const all = document.createElement("li");
    all.textContent = "ALL";

    const work = document.createElement("li");
    work.textContent = "WORK";

    const gym = document.createElement("li");
    gym.textContent = "GYM";

    const school = document.createElement("li");
    school.textContent = "SCHOOL";

    const chores = document.createElement("li");
    chores.textContent = "CHORES";

    mobileMenuContainer.appendChild(all);
    mobileMenuContainer.appendChild(work);
    mobileMenuContainer.appendChild(gym);
    mobileMenuContainer.appendChild(school);
    mobileMenuContainer.appendChild(chores);

    mobileMenuSection.appendChild(mobileMenuContainer);

    return mobileMenuSection
}

export default MobileMenu