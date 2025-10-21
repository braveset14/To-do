import './style.css';
import { projectManager } from './projectManager.js';
import { todoManager } from './toDoManager.js';
import { domManager } from './domManager.js';
import { storage } from './storage.js';
  

console.log('index.js loaded successfully!');
class TodoApp {
    constructor() {
        this.editingTodoId = null; 
        this.init();
    }

    init() {
    console.log('TodoApp init started');
    
    try {
        // Initialize project manager (loads from storage)
        projectManager.init();
        
        // Get initial data
        const projects = projectManager.getAllProjects();
        const currentProject = projectManager.getCurrentProject();
        
        console.log('Projects loaded:', projects);
        console.log('Current project:', currentProject);
        
        // Initialize DOM - PASS THE CURRENT PROJECT OBJECT, NOT JUST THE ID
        domManager.init(projects, currentProject); // CHANGED THIS LINE
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('Todo app initialized successfully!');
    } catch (error) {
        console.error('Error during init:', error);
    }
}
refreshUI() {
    const projects = projectManager.getAllProjects();
    const currentProject = projectManager.getCurrentProject();
    
    // PASS THE CURRENT PROJECT OBJECT, NOT JUST THE ID
    domManager.renderProjectsSidebar(projects, projectManager.currentProjectId);
    domManager.renderTodos(currentProject); // CHANGED THIS LINE
}

    setupEventListeners() {
        // Add project button
        document.getElementById('add-project-btn').addEventListener('click', () => {
            domManager.showProjectModal();
        });

        // Add todo button
        document.getElementById('add-todo-btn').addEventListener('click', () => {
            domManager.showTodoModal();
        });

        // Project form submission
        document.getElementById('project-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddProject();
        });

        // Todo form submission
        document.getElementById('todo-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddTodo();
        });

        // Cancel buttons
        document.getElementById('cancel-project').addEventListener('click', () => {
           this.editingTodoId = null; // Reset editing state
            document.getElementById('modal-title').textContent = 'Add Todo'; 
            domManager.hideProjectModal();
        });

        document.getElementById('cancel-todo').addEventListener('click', () => {
            domManager.hideTodoModal();
        });

        // Project list clicks (event delegation)
        document.getElementById('projects-list').addEventListener('click', (e) => {
            this.handleProjectListClick(e);
        });

        // Todos container clicks (event delegation)
        document.getElementById('todos-container').addEventListener('click', (e) => {
            this.handleTodosContainerClick(e);
        });
    }

    handleAddProject() {
        const nameInput = document.getElementById('project-name');
        const name = nameInput.value.trim();
        
        if (name) {
            projectManager.addProject(name);
            this.refreshUI();
            domManager.hideProjectModal();
            nameInput.value = '';
        }
    }

    handleAddTodo() {
    const title = document.getElementById('todo-title').value.trim();
    const description = document.getElementById('todo-description').value.trim();
    const dueDate = document.getElementById('todo-due-date').value;
    const priority = document.getElementById('todo-priority').value;
    
    if (title) {
        if (this.editingTodoId) {
            // Editing existing todo
            todoManager.updateTodo(this.editingTodoId, {
                title,
                description,
                dueDate,
                priority
            });
            this.editingTodoId = null; // Reset
        } else {
            // Adding new todo
            todoManager.addTodo({
                title,
                description,
                dueDate,
                priority
            });
        }
        
        this.refreshUI();
        domManager.hideTodoModal();
        document.getElementById('todo-form').reset();
        document.getElementById('modal-title').textContent = 'Add Todo'; // Reset title
    }
}

    handleProjectListClick(e) {
        const projectItem = e.target.closest('.project-item');
        if (!projectItem) return;

        const projectId = projectItem.dataset.projectId;
        
        if (e.target.classList.contains('delete-project-btn')) {
            // Delete project
            projectManager.deleteProject(projectId);
        } else {
            // Switch to project
            projectManager.setCurrentProject(projectId);
        }
        
        this.refreshUI();
    }

    handleTodosContainerClick(e) {
        const todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;

        const todoId = todoItem.dataset.todoId;
        
        if (e.target.classList.contains('todo-checkbox')) {
            // Toggle completion
            todoManager.toggleTodo(todoId);
            this.refreshUI();
        } else if (e.target.classList.contains('delete-todo-btn')) {
            // Delete todo
            todoManager.deleteTodo(todoId);
            this.refreshUI();
        } else if (e.target.classList.contains('edit-todo-btn')) {
            // Edit todo (you can implement this later)
              this.handleEditTodo(todoId);
        }
    }
    handleEditTodo(todoId) {
    const todo = todoManager.getTodoForEdit(todoId);
    if (todo) {
        // Populate the form with existing todo data
        document.getElementById('todo-title').value = todo.title;
        document.getElementById('todo-description').value = todo.description || '';
        document.getElementById('todo-due-date').value = todo.dueDate || '';
        document.getElementById('todo-priority').value = todo.priority;
        
        // Change modal title and set up for editing
        document.getElementById('modal-title').textContent = 'Edit Todo';
        
        // Store the todo ID we're editing
        this.editingTodoId = todoId;
        
        // Show the modal
        domManager.showTodoModal();
    }
}

    refreshUI() {
        const projects = projectManager.getAllProjects();
        const currentProject = projectManager.getCurrentProject();
        
        domManager.renderProjectsSidebar(projects, projectManager.currentProjectId);
        domManager.renderTodos(currentProject);
    }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});