import "./style.css"
import add from "./images/add.svg";
import del from "./images/delete.svg";
import view from "./images/view.svg";
import edit from "./images/edit.svg";

const dom = (() => {

    const createProjectUI = (projectObject) => {
        
        const projectSection = document.querySelector(".project-section");

        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const projectFunctions = document.createElement("div");
        projectFunctions.classList.add("project-functions");

        const projectEdit = document.createElement("div");
        const editImage = new Image()
        editImage.src = edit;
        editImage.setAttribute("id", "edit")
        projectEdit.appendChild(editImage);

        const projectView = document.createElement("div");
        const viewImage = new Image()
        viewImage.src = view;
        projectView.appendChild(viewImage);
        viewImage.setAttribute("id", "view")

        const projectAdd = document.createElement("div");
        const addImage = new Image();
        addImage.src = add;
        projectAdd.appendChild(addImage);
        addImage.setAttribute("id","add");

        const projectDelete = document.createElement("div");
        const deleteImage = new Image();
        deleteImage.src = del;
        projectDelete.appendChild(deleteImage);
        deleteImage.setAttribute("id", "delete")
        
        projectFunctions.appendChild(projectEdit);
        projectFunctions.appendChild(projectView);
        projectFunctions.appendChild(projectAdd);
        projectFunctions.appendChild(projectDelete);

        const projectDetails = document.createElement("div");
        projectDetails.classList.add("project-details");

        const projectId = document.createElement("div");
        const projectTitle = document.createElement("div");
        const projectDescription = document.createElement("div");
        const projectCategory = document.createElement("div");

        projectId.textContent = projectObject.id;
        projectTitle.textContent = projectObject.title;
        projectDescription.textContent = projectObject.description;
        projectCategory.textContent = projectObject.category;

        projectTitle.classList.add("title");
        projectId.classList.add("id");

        projectDetails.appendChild(projectId);
        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectCategory);

        projectContainer.appendChild(projectFunctions);
        projectContainer.appendChild(projectDetails);
        projectContainer.setAttribute("data-value", projectId.textContent);

        projectSection.appendChild(projectContainer);
    }

    const deleteProjectUI = (projectId) => {
        const project = document.querySelector(`div[data-value="${projectId}"]`);
        const projectSection = document.querySelector(".project-section");
        projectSection.removeChild(project);
    }

    const editProjectUI = (projectId, title, description, category) => {
        const project = document.querySelector(`div[data-value="${projectId}"]`);
        const projectDetailUI = project.lastElementChild;
        const projectDetailUIChildren = projectDetailUI.children;
        projectDetailUIChildren[1].textContent = title;
        projectDetailUIChildren[2].textContent = description;
        projectDetailUIChildren[3].textContent = category;        
    }

    const renderTask = (taskObject) => {
        const tasks = document.querySelector(".tasks");

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        
        const taskTitle = document.createElement("div");
        taskTitle.textContent = taskObject.taskName;

        const taskDueDate = document.createElement("div");
        taskDueDate.textContent = taskObject.taskDueDate;

        const taskEdit = new Image();
        taskEdit.src = edit;
        taskEdit.classList.add("edit-task");

        const taskDelete = new Image();
        taskDelete.src = del;
        taskDelete.classList.add("delete-task");

        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDueDate);
        taskContainer.appendChild(taskEdit);
        taskContainer.appendChild(taskDelete);
        taskContainer.setAttribute("data-value", `${taskObject.getUniqueId()}`)
        taskContainer.setAttribute("data-parent", `${taskObject.taskParent}`)

        tasks.appendChild(taskContainer);
    }

    const renderEmptyTasks = () => {
        const tasks = document.querySelector(".tasks");
        tasks.textContent = "Nothing to see here...";
    }

    const deleteTask = (taskUniqueId) => {
        const tasks = document.querySelector(".tasks");
        const taskToDelete = tasks.querySelector(`div[data-value = "${taskUniqueId}"]`);
        tasks.removeChild(taskToDelete);
    }

    const editTask = (oldUniqueId, newUniqueId, taskName, dueDate) => {
        const tasks = document.querySelector(".tasks");
        const taskToEdit = tasks.querySelector(`div[data-value = "${oldUniqueId}"]`);

        console.log(oldUniqueId);
        console.log(newUniqueId);

        taskToEdit.querySelector("div:first-of-type").textContent = taskName;
        taskToEdit.querySelector("div:last-of-type").textContent = dueDate;
        taskToEdit.setAttribute("data-value", `${newUniqueId}`);
    }

    return {createProjectUI, deleteProjectUI, editProjectUI, renderTask, renderEmptyTasks, deleteTask, editTask}
}) ()

export default dom