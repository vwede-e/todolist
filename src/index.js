import Header from "./components/header";
import Main from "./components/main"; 
import Footer from "./components/footer";
import MobileMenu from "./components/mobileMenuContainer";
import manager from "./manager";
import Form from "./components/form";
import "./style.css";
import editProjectForm from "./components/editProjectForm";
import createTaskForm from "./components/createTaskForm";
import createTaskModal from "./components/taskModal";
import EditTaskForm from "./components/editTaskForm";


//load components into the DOM
document.body.appendChild(Header());
document.body.appendChild(MobileMenu());
document.body.appendChild(Main());
document.body.appendChild(Footer());
document.body.appendChild(Form());
document.body.appendChild(editProjectForm());
document.body.appendChild(createTaskForm());
document.body.appendChild(createTaskModal());
document.body.appendChild(EditTaskForm());

manager.handleReadFromLocalStorage();

const mobileMenuSection = document.querySelector(".mobile-menu-section");
mobileMenuSection.style.display = "none";

const projectSection = document.querySelector("section.project-section");


const mobileMenuHamburger = document.querySelector(".mobile-menu-hamburger");
mobileMenuHamburger.addEventListener("click", ()=> {
    if (mobileMenuSection.style.display === "none") {
        mobileMenuSection.style.display = "block";
    }

    else {
        mobileMenuSection.style.display = "none";
    }

})


//event listeners
const navigationsNodeList = document.querySelectorAll(".menu-list > li");
const navigationsArray = [...navigationsNodeList];


//event listener for navigations

navigationsArray.forEach((navigation) => { 
    navigation.addEventListener("click", (event) => {
        handleCorrectNav(event.target.textContent);
        projectSection.innerHTML = "";
        manager.handleGetProjectsByCategories(event.target.textContent.toLowerCase());
        if (event.target.parentElement.classList.contains("mobile-menu-container")) {
            event.target.parentElement.parentElement.style.display = "none";
        }
    }
     )
    });


//event listener for add new project button   

const addProjectButton = document.querySelector(".new-project-container");
const formModal = document.querySelector(".form-section");
const editFormModal = document.querySelector(".edit-form-section");
const taskFormSection = document.querySelector(".task-form-section");
const taskModalSection = document.querySelector(".task-modal-section");
const editTaskFormSection = document.querySelector(".edit-task-form-section");

const createProjectForm = document.querySelector(".create-project-form");
const editForm = document.querySelector(".edit-project-form");
const taskForm = document.querySelector(".create-task-form");
const editTaskForm = document.querySelector(".edit-task-form");

const tasksContainer = taskModalSection.querySelector(".tasks");
tasksContainer.addEventListener("click", (event) => {

    if (event.target.getAttribute("class") === "delete-task") {
        const projectId = event.target.parentElement.getAttribute("data-parent");
        const taskId = event.target.parentElement.getAttribute("data-value");
        const project = manager.handleFindProject(projectId);
        const task = manager.handleFindTask(project, taskId);
        manager.handleRemoveTask(project, task);
        return;
    }

    if (event.target.getAttribute("class") === "edit-task") {

        editTaskFormSection.style.display = "flex";

        const projectId = event.target.parentElement.getAttribute("data-parent");
        const taskId = event.target.parentElement.getAttribute("data-value");
        const project = manager.handleFindProject(projectId);
        const task = manager.handleFindTask(project, taskId);

        editTaskFormSection.querySelector('div > form input[type="text"]').value = task.taskName;
        editTaskFormSection.querySelector('div > form input[type="date"]').value = task.taskDueDate;

        const initialiseEditTaskButton = ()=> {
            handleEditTaskButtonClick(project, task);
            editButton.removeEventListener("click", initialiseEditTaskButton)
        }

        const editButton = editTaskFormSection.querySelector("div > form button");
        editButton.addEventListener("click", initialiseEditTaskButton);
    }

})

function handleEditTaskButtonClick(project, task) {
    const taskInputName = document.querySelector('.edit-task-form input[type="text"]').value;
    const taskDueDate = document.querySelector('.edit-task-form input[type="date"]').value;


    if (taskInputName && taskDueDate) {
        manager.handleEditTask(project, task, taskInputName, taskDueDate);
    }

    else {
        alert("All Task Input Field Must Be Filled");
    }

    editTaskFormSection.style.display = "none";
    editTaskForm.reset();
}

addProjectButton.addEventListener("click", ()=> {
    formModal.style.display = "flex";
    }
)

// event listener for close form modal


const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", ()=> {
    formModal.style.display = "none";
    createProjectForm.reset()
})

const closeEditProjectModal = document.querySelector(".close-edit-project-modal");
closeEditProjectModal.addEventListener("click", ()=> {
    editFormModal.style.display = "none";
    editForm.reset();
})

const closeTaskFormModal = document.querySelector(".close-task-form-modal");
closeTaskFormModal.addEventListener("click", ()=> {
    taskFormSection.style.display = "none";
    taskForm.reset();
})

const closeTaskModal = document.querySelector(".close-task-modal");
closeTaskModal.addEventListener("click", ()=> {
    taskModalSection.style.display = "none";
    taskModalSection.querySelector(".tasks").innerHTML = "";
})

const createProjectButton = document.querySelector('button[type="button"]');
createProjectButton.addEventListener("click", ()=> {
    const id = document.querySelector('input[id="ID"]').value;
    const title = document.querySelector('input[id="Title"]').value;
    const description = document.querySelector('input[id="Description"]').value;
    //const date = document.querySelector('input[id="Date"]').value;
    const select = document.querySelector("select").value;

    const checkId = manager.handleFindProject(id);
    
    if (checkId) {
        alert("ID already exists! Pick a new one");
        console.log("ID exists");
        return;
    }
    
    if (id && title) {
        manager.handleNewProjectCreation(id, title, description, select);
       // console.log(manager.handleGetAllProjects())
        createProjectForm.reset();
        formModal.style.display = "none";
    }
    else {
        alert("Sections Marked with Asterisk Can't be Empty");
    }
})

// event listener to project section

projectSection.addEventListener("click", (event)=> {

    //if the event target is the add function, get the project ID it belongs to
    if (event.target.getAttribute("id") === "add") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");

        taskFormSection.style.display = "flex";
        const createTaskButton = document.querySelector(".create-task-form > .button-container > button:first-of-type");
        
        const initalisehandleTaskButton = () => {
            const project = manager.handleFindProject(projectId);
            handleAddTaskButtonClick(project);
            createTaskButton.removeEventListener("click", initalisehandleTaskButton);
        }

        createTaskButton.addEventListener("click", initalisehandleTaskButton);

        //set process for adding tasks manager.handleAddTask(id, )
        return
    }

    if (event.target.getAttribute("id") === "delete") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");
        const project = manager.handleFindProject(projectId);
        manager.handleProjectRemoval(project, projectId);
        return;
    }

    if (event.target.getAttribute("id") === "edit") {
        const projectDetailsUI = event.target.parentElement.parentElement.nextElementSibling;
        const projectDetailsUIChildren = projectDetailsUI.children;

        editFormModal.style.display = "flex";

        const editInputId = document.querySelector(".edit-form-section #edit-ID");
        editInputId.value = projectDetailsUIChildren[0].textContent;
        editInputId.disabled = true;

        const editInputTitle = document.querySelector(".edit-form-section #edit-Title");
        editInputTitle.value = projectDetailsUIChildren[1].textContent;

        const editInputDescription = document.querySelector(".edit-form-section #edit-Description");
        editInputDescription.value = projectDetailsUIChildren[2].textContent;

        const editSelect = document.querySelector(".edit-form-section #edit-Category");
        editSelect.value = projectDetailsUIChildren[3].textContent;

        const editProjectButton = document.querySelector(".edit-form-section button");
        editProjectButton.addEventListener("click", handleEditProjectButtonClick);
        return;
    }

    if (event.target.getAttribute("id") === "view") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");
        const project = manager.handleFindProject(projectId);
        taskModalSection.style.display = "flex";
        manager.handleGetTasks(project);     
    }
})

function handleAddTaskButtonClick(project) {

    const taskInputName = document.querySelector('.create-task-form input[type="text"]').value;
    const taskDueDate = document.querySelector('.create-task-form input[type="date"]').value;


    if (taskInputName && taskDueDate) {
        manager.handleAddTask(project, taskInputName, taskDueDate);
    }

    else {
        alert("All Task Input Field Must Be Filled");
    }

    taskFormSection.style.display = "none";
    taskForm.reset();
    
}

function handleEditProjectButtonClick() {
    const id = document.querySelector('input[id="edit-ID"]').value;
    const title = document.querySelector('input[id="edit-Title"]').value;
    const description = document.querySelector('input[id="edit-Description"]').value;
    //const date = document.querySelector('input[id="Date"]').value;
    const select = document.querySelector('select[id="edit-Category"]').value;

    if (title) {

        const project = manager.handleFindProject(id);
        manager.handleProjectEdit(project, id, title, description, select);

        editFormModal.style.display = "none";
        const editForm = document.querySelector(".edit-project-form");
        editForm.reset();
    }
    else {
        alert("Sections Marked with Asterisk Can't be Empty");

    }
}

function handleCorrectNav(section) {
    // get name of current section
    const currSection = manager.getCurrentSection(); 

    const currNavigation = navigationsArray.find((navigation)=> navigation.textContent === section);
    const prevSection = document.getElementById("current-section");
    if (prevSection) {
        prevSection.removeAttribute("id", "current-section");
    }
    currNavigation.setAttribute("id", "current-section");
    manager.setCurrentSection(currNavigation.textContent);
}


handleCorrectNav("ALL");
