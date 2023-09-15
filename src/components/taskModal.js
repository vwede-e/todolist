import "../style.css";

function createTaskModal() {

    const taskModalSection = document.createElement("section");
    taskModalSection.classList.add("task-modal-section")
    
    const taskModalContainer = document.createElement("div");
    taskModalContainer.classList.add("task-modal-container");

    const taskModalContent = document.createElement("div");
    taskModalContent.classList.add("task-modal-content");

    const closeTaskModalContainer = document.createElement("div");
    const closeTaskModal = document.createElement("div");
    closeTaskModal.innerHTML = "&times;"
    closeTaskModal.classList.add("close-task-modal");
    closeTaskModalContainer.appendChild(closeTaskModal);
    closeTaskModalContainer.classList.add("close-form-modal-container");

    taskModalContent.appendChild(closeTaskModalContainer);

    
    const taskTitle = document.createElement("div");
    taskTitle.textContent = "Tasks";
    taskTitle.classList.add("task-title");

    taskModalContent.appendChild(taskTitle);


    const tasks = document.createElement("div");
    tasks.classList.add("tasks");

    taskModalContent.appendChild(tasks);
    
    taskModalContainer.appendChild(taskModalContent);
    taskModalSection.appendChild(taskModalContainer);

    return taskModalSection
}

export default createTaskModal;