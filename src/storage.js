import { Project } from './Project.js';  // ADD THIS
import { Todo } from './Todo.js';        

export const storage = {
    // Key for localStorage
    STORAGE_KEY: 'todoAppData',
    
    // Save all app data to localStorage
    saveData(data) {
        try {
            const dataToStore = {
                projects: data.projects,
                currentProjectId: data.currentProjectId,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dataToStore));
            return true;
        } catch (error) {
            console.error('Failed to save data:', error);
            return false;
        }
    },
    
    // Load app data from localStorage
    loadData() {
        try {
            const storedData = localStorage.getItem(this.STORAGE_KEY);
            if (!storedData) return null;
            
            const parsedData = JSON.parse(storedData);
            if (parsedData.projects) {
                parsedData.projects = this.reviveProjects(parsedData.projects);
            }
            return parsedData;
        } catch (error) {
            console.error('Failed to load data:', error);
            return null;
        }
    },
    reviveProjects(projectsData) {
        return projectsData.map(projectData => {
            // Create new Project instance
            const project = new Project(projectData.name, projectData.id);
            project.createdAt = new Date(projectData.createdAt);
            
            // Convert todos to Todo instances
            project.todos = projectData.todos.map(todoData => {
                const todo = new Todo(
                    todoData.title,
                    todoData.description,
                    todoData.dueDate,
                    todoData.priority,
                    todoData.projectId
                );
                
                // Manually set properties that don't go through constructor
                todo.id = todoData.id;
                todo.completed = todoData.completed;
                todo.createdAt = new Date(todoData.createdAt);
                
                return todo;
            });
            
            return project;
        });
    },
    
    // Clear all saved data (for testing/reset)
    clearData() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            return true;
        } catch (error) {
            console.error('Failed to clear data:', error);
            return false;
        }
    },
    
    // Check if we have saved data
    hasData() {
        return localStorage.getItem(this.STORAGE_KEY) !== null;
    }
};