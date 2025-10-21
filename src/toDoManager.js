
import { projectManager } from "./projectManager";
import { storage } from "./storage";
export const todoManager={
    addTodo(data){
        const currentP=projectManager.getCurrentProject();
        if(!currentP) return null;
        const todo=currentP.addTodo(data);
        storage.saveData(projectManager.getData());
        return todo;
    },
    deleteTodo(todoId){
        const currentP=projectManager.getCurrentProject();
        if(!currentP) return;
        currentP.deleteTodo(todoId);
        storage.saveData();
    },
    toggleTodo(todoId){
        const currentP=projectManager.getCurrentProject();
        if(!currentP) return;
        const todo=currentP.getTodo(todoId);
        if(todo){ 
           todo.toggleComplete();
           storage.saveData();
        }
    },
    updateTodo(todoId,updates){
        const currentP=projectManager.getCurrentProject();
        if(!currentP) return;
        const todo = currentP.getTodo(todoId);
        if (todo) {
            todo.updateDetails(updates);
            storage.saveData(projectManager.getData());
        }
    },
    getCurrentTodos() {
        const currentProject = projectManager.getCurrentProject();
        return currentProject ? currentProject.todos : [];
    },
     getTodo(todoId) {
        const currentProject = projectManager.getCurrentProject();
        return currentProject ? currentProject.getTodo(todoId) : null;
    },
    getTodoForEdit(todoId) {
        const currentP = projectManager.getCurrentProject();
        if (!currentP) return null;
        return currentP.getTodo(todoId);
    },
    
    updateTodo(todoId, updates) {
        const currentP = projectManager.getCurrentProject();
        if (!currentP) return;
        const todo = currentP.getTodo(todoId);
        if (todo) {
            todo.updateDetails(updates);
            storage.saveData(projectManager.getData());
        }
    }
};