export const domManager={
    init(projects, currentProject) {
        this.renderProjectsSidebar(projects, currentProject.id);
        this.renderTodos(currentProject);
    },
     renderProjectsSidebar(projects, currentProjectId) {
        const projectsList = document.getElementById('projects-list');
        projectsList.innerHTML = projects.map(project => `
            <li class="project-item ${project.id === currentProjectId ? 'active' : ''}" 
                data-project-id="${project.id}">
                ${project.name}
                ${project.id !== 'default' ? '<button class="delete-project-btn">×</button>' : ''}
            </li>
        `).join('');
    },
    renderTodos(project) { // project should be the project OBJECT, not ID
        const todosContainer = document.getElementById('todos-container');
        const projectTitle = document.getElementById('current-project-title');
        
        // Check if project exists
        if (!project) {
            console.error('Project is undefined in renderTodos!');
            todosContainer.innerHTML = '<p class="empty-state">Project not found</p>';
            return;
        }
        
        projectTitle.textContent = project.name;
        
        // Check if todos exists and is an array
        if (!project.todos || !Array.isArray(project.todos) || project.todos.length === 0) {
            todosContainer.innerHTML = '<p class="empty-state">No todos yet. Add one above!</p>';
            return;
        }

        todosContainer.innerHTML = project.todos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}" 
                 data-todo-id="${todo.id}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} class="todo-checkbox">
                <div class="todo-content">
                    <h3 class="todo-title">${todo.title}</h3>
                    ${todo.dueDate ? `<span class="todo-due">Due: ${todo.dueDate}</span>` : ''}
                </div>
                <div class="todo-actions">
                    <button class="edit-todo-btn">Edit</button>
                    <button class="delete-todo-btn">Delete</button>
                </div>
            </div>
        `).join('');
    },
    showTodoModal() {
        document.getElementById('todo-modal').classList.remove('hidden');
    },
     hideTodoModal() {
        document.getElementById('todo-modal').classList.add('hidden');
    },

    showProjectModal() {
        document.getElementById('project-modal').classList.remove('hidden');
    },

    hideProjectModal() {
        document.getElementById('project-modal').classList.add('hidden');
    }
}