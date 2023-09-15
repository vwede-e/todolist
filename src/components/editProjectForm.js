import "../style.css";

function editProjectForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("edit-form-section");
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("edit-form-container");

    const form = document.createElement("form");
    form.classList.add("edit-project-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-edit-project-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Edit To-Do";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const idLabel = document.createElement("label");
    idLabel.textContent = "Add Project ID*";
    idLabel.setAttribute("for", "editID");
    const idInput = document.createElement("input");
    idInput.setAttribute("id", "edit-ID");
    idInput.setAttribute("type", "number");
    idInput.setAttribute("min", 0);

    form.appendChild(idLabel);
    form.appendChild(idInput);

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Add Project Title*";
    titleLabel.setAttribute("for", "editTitle");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "edit-Title");
    titleInput.setAttribute("type", "text");

    form.appendChild(titleLabel);
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.textContent = "Add Project Description";
    descriptionLabel.setAttribute("for", "editDescription");
    descriptionInput.setAttribute("id", "edit-Description");
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
    selectLabel.setAttribute("for", "editCategory");
    const selectInput = document.createElement("select");
    selectInput.setAttribute("id", "edit-Category");
    
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
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("type", "button");


    buttonContainer.appendChild(editButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

export default editProjectForm;