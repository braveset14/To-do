import { Todo } from './Todo.js'; 
export function Project(name,id=null){
    this.name=name;
    this.id= id || Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.todos=[];
    this.createdAt=new Date();

    this.addTodo=function(todo1){
        const todo=new Todo(todo1.title,todo1.description,todo1.dueDate,todo1.priority,this.id);
        this.todos.push(todo);
        return todo;
    }
    this.deleteTodo=function(todoId){
         this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
    this.getTodo=function(todoId){
         return this.todos.find(todo => todo.id === todoId);
    }
}
export function createDefaultProject(){
     const defaultProject = new Project('Default', 'default');
     defaultProject.addTodo({
         title: 'Welcome to your todo app!',
         description: 'Click here to edit me',
         priority: 'medium'
     });
     return defaultProject;
}