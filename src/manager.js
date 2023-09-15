import projectStorage from "./projectStore";
import createNewProjectObject from "./projectObjectCreator";
import dom from "./domUpdate";

const manager = (() => {

    let currentSection = "ALL";

    const handleNewProjectCreation = (id, title, description, category) => {
        const obj = createNewProjectObject(id, title, description, category);
        projectStorage.addNewProject(obj);
        dom.createProjectUI(obj);
        projectStorage.writeToLocalStorage();

        // udpate DOM ADDITION
    }

    const handleProjectRemoval = (project, projectId) => {
        projectStorage.removeProject(project);
        dom.deleteProjectUI(projectId);
        projectStorage.writeToLocalStorage();
        // update DOM REMOVAL
    }

    const handleProjectEdit = (project, projectId, title, description, category) => {
        projectStorage.editProject(project, title, description, category);
        dom.editProjectUI(projectId, title, description, category);
        projectStorage.writeToLocalStorage();
        // udpdate DOM EDITING
    }

    /*const handleGetAllProjects = () => {
       const projects = projectStorage.getProjects();
       return projects;
       // dom stuff for display projects 
    } */

    const handleGetProjectsByCategories = (category) => {
        if (category == "all") {
            console.log(category)
            const projects = projectStorage.getProjects()
            console.log(projects)
            if (projects.length > 0) {
                projects.map(dom.createProjectUI)
            }
        }

        else {
            const projects = projectStorage.getProjectByCategory(category);
            console.log(projects);
            if (projects.length > 0) {
                projects.map(dom.createProjectUI)
        }
        // dom stuff for projets display by category
    }
}

    const handleAddTask = (projectToEdit, taskName, taskDueDate) => {
        projectStorage.addTask(projectToEdit, taskName, taskDueDate);
        projectStorage.writeToLocalStorage();
        // dom stuff for project task
    }

    const getCurrentSection = () => currentSection;

    const setCurrentSection = (newCurrentSection) => {
        currentSection = newCurrentSection
    }

    const handleFindProject = (id) => projectStorage.findProjectById(id);

    const handleFindTask = (project, taskId) => projectStorage.findTaskById(project, taskId);

    const handleRemoveTask = (project, task) => {
        projectStorage.removeTask(project, task);
        dom.deleteTask(task.getUniqueId());
        projectStorage.writeToLocalStorage()
    }

    const handleGetTasks = (project) => {
        const tasks = projectStorage.getTasks(project);
        if (tasks && tasks.length > 0) {
            tasks.map(dom.renderTask);
        }
        else {
            dom.renderEmptyTasks();
        }
        console.log(tasks);
    }

    const handleEditTask = (project, task, taskName, dueDate) => {
        const oldUniqueId = task.getUniqueId();
        const newUniqueId = projectStorage.editTask(project, task, taskName, dueDate);
        dom.editTask(oldUniqueId, newUniqueId, taskName, dueDate);
        projectStorage.writeToLocalStorage();
    }

    const handleWriteToLocalStorage = () => {
        projectStorage.writeToLocalStorage();

    }

    const handleReadFromLocalStorage =() => {
        projectStorage.readFromLocalStorage();
        const projects = projectStorage.getProjects();
        if (projects.length > 0) {
            projects.map(dom.createProjectUI)
        }
    }

    return {
        handleNewProjectCreation,
        handleProjectRemoval,
        handleProjectEdit,
        handleGetProjectsByCategories,
        getCurrentSection,
        setCurrentSection,
        handleAddTask,
        handleFindProject,
        handleGetTasks,
        handleFindTask,
        handleRemoveTask,
        handleEditTask,
        handleReadFromLocalStorage,
        handleWriteToLocalStorage
    }

}) ()

export default manager