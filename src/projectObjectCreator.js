const createNewProjectObject = (id, title, description, /*dueDate,*/ category) => {

    /*getters 
    const getId = () => id;

    const getTitle = () => title;

    const getDescription = () => description;


    const getCategory = () => category;

    const setNewId = (newId) => {
        id = newId;
    };

    //setters    
    const setNewTitle = (newTitle) => {
        title = newTitle;
    };
    const setNewDescription = (newDescription) => {
        description = newDescription;
    };
    const setNewCategory = (newCategory) => {
        category = newCategory;
    };
    
    return {
        getId, getTitle, getDescription, getCategory, setNewId, setNewTitle, setNewDescription, setNewCategory
    }
    } */

    return {id, title, description, category}
 }

export default createNewProjectObject
