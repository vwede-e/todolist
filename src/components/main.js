import "../style.css";

function Main() {
    const main = document.createElement("main");

    const searchSection = document.createElement("div");
    searchSection.classList.add("search-section");

    //const searchContainer = document.createElement("div");
    const addNewProjectContainer = document.createElement("div");

   // const search = document.createElement("input");
    //search.setAttribute("type", "search");
    //search.setAttribute("placeholder", "Search by title");
   // search.classList.add("search");
   // searchContainer.appendChild(search);

    const addContainer = document.createElement("div");
    addContainer.innerHTML = "<span>&plus;</span>Add New Project";
    addNewProjectContainer.appendChild(addContainer);
    addNewProjectContainer.classList.add("new-project-container")
    addContainer.classList.add("add-container");

   // searchSection.appendChild(searchContainer);
    searchSection.appendChild(addNewProjectContainer);

    main.appendChild(searchSection);

    const projectSection = document.createElement("section");
    projectSection.classList.add("project-section");

    main.appendChild(projectSection);
   
    return main;

}

export default Main
