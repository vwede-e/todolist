import "../style.css";

function createTaskForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("task-form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("task-form-container");

    const form = document.createElement("form");
    form.classList.add("create-task-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-task-form-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Create Task";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Add Task Name*";
    taskNameLabel.setAttribute("for", "taskName");
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "ID");
    taskNameInput.setAttribute("type", "text");

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);


    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Select Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput);


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

export default createTaskForm;