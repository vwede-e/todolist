const projectStorage = (() => {
    let projects = []

    const addNewProject = (newProject) => projects.push(newProject);

    const removeProject = (unwantedProject) => {
        const index = projects.indexOf(unwantedProject);
        projects.splice(index, 1);
    }
    
    const editProject = (projectToEdit, title, description, category) => {
        const index = projects.indexOf(projectToEdit);

        projects[index].title = title;
        projects[index].description = description;
        projects[index].category = category;
    }

    const addTask = (projectToEdit, taskName, taskDueDate) => {
        const index = projects.indexOf(projectToEdit);
        if ("task" in projects[index]) {
            const newIndex = projects[index]["task"].length;
            projects[index]["task"][newIndex] = {taskParent: projects[index].id, taskName: taskName, taskDueDate: taskDueDate};
            console.log(projects[index]["task"]);
            console.log(projects[index].id)
        }

        else {
            projects[index]["task"] = [];
            projects[index]["task"][0] = {taskParent: projects[index].id, taskName: taskName, taskDueDate: taskDueDate, getUniqueId() { return this.taskName+this.taskDueDate}}
            console.log(projects[index]["task"]);
        }
    }

    const getProjects = () => {
        return projects
    }

    const getProjectByCategory = (category) => {
       return projects.filter((project) => project.category.toLowerCase() === category)
    }

    const findProjectById = (id) => projects.find((project) => project.id === id)

    function getUniqueId() {return this.taskName+this.taskDueDate};

    const getTasks = (project) => {
        const index = projects.indexOf(project);
        const taskList = projects[index]["task"];
        console.log(taskList);

        if (!taskList || taskList.length === 0) {return taskList}

        if (!(taskList[0].hasOwnProperty("getUniqueId"))) {
            taskList.map((task) => task["getUniqueId"] = getUniqueId);
        } 
        taskList.map((task) => task["getUniqueId"] = getUniqueId);
        return taskList;
    }

    const findTaskById = (project, taskId) => {
        const index = projects.indexOf(project);
        console.log(projects[index]["task"]);
        if (!(projects[index]["task"][0].hasOwnProperty("getUniqueId"))) {
            project[index]["task"].map((task)=> task["getUniqueId"] = getUniqueId);
        }
        const task = projects[index]["task"].find((taskObject) => taskObject.getUniqueId() === taskId);
        return task;
    }

    const removeTask = (project, task) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex]["task"].indexOf(task);
        projects[projectIndex]["task"].splice(taskIndex, 1)
    }

    const editTask = (project, task, taskName, dueDate) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex]["task"].indexOf(task);
        projects[projectIndex]["task"][taskIndex]["taskName"] = taskName;
        projects[projectIndex]["task"][taskIndex]["taskDueDate"] = dueDate;
        return projects[projectIndex]["task"][taskIndex].getUniqueId();        
    }

    const readFromLocalStorage = () => {
        const projectStorage = JSON.parse(localStorage.getItem("projectStorage"));
        if (projectStorage && projectStorage.length > 0) {
            projects = projects.concat(projectStorage);
        }
    }

    const writeToLocalStorage = () => {
        localStorage.setItem("projectStorage", JSON.stringify(projects));
        console.log(projects);
    }

    return {addNewProject, removeProject, editProject, getProjects, getProjectByCategory, 
        addTask, findProjectById, getTasks, findTaskById, removeTask, editTask, 
        readFromLocalStorage, writeToLocalStorage}

}) ()

export default projectStorage
