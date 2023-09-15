import "../style.css";

function Form() {

    const formSection = document.createElement("section");
    formSection.classList.add("form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const form = document.createElement("form");
    form.classList.add("create-project-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Create To-Do";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const idLabel = document.createElement("label");
    idLabel.textContent = "Add Project ID*";
    idLabel.setAttribute("for", "ID");
    const idInput = document.createElement("input");
    idInput.setAttribute("id", "ID");
    idInput.setAttribute("type", "number");
    idInput.setAttribute("min", 0);
    idInput.setAttribute("placeholder", "25");

    form.appendChild(idLabel);
    form.appendChild(idInput);

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Add Project Title*";
    titleLabel.setAttribute("for", "Title");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "Title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Create a to-do list")

    form.appendChild(titleLabel);
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.textContent = "Add Project Description";
    descriptionLabel.setAttribute("for", "Description");
    descriptionInput.setAttribute("id", "Description");
    descriptionInput.setAttribute("type", "text");

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    
    /*
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Pick Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput); */


    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Select Category";
    selectLabel.setAttribute("for", "Category");
    const selectInput = document.createElement("select");
    selectInput.setAttribute("id", "Category");
    
    const workOption = document.createElement("option");
    workOption.value = "Work";
    workOption.textContent = "Work";

    const gymOption = document.createElement("option");
    gymOption.value = "Gym";
    gymOption.textContent = "Gym";

    const schoolOption = document.createElement("option");
    schoolOption.value = "School";
    schoolOption.textContent = "School";

    const choreOption = document.createElement("option");
    choreOption.value = "Chores";
    choreOption.textContent = "Chores";

    selectInput.appendChild(workOption);
    selectInput.appendChild(gymOption);
    selectInput.appendChild(schoolOption);
    selectInput.appendChild(choreOption);

    form.appendChild(selectLabel);
    form.appendChild(selectInput);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.setAttribute("type", "button");

    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset";

    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(resetButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

export default Form;