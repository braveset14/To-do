export function Todo(title,description='',duedate='',priority='medium',projectId='default'){
    this.id=Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.title=title;
    this.description=description;
    this.duedate=duedate;
    this.priority=priority;
    this.completed=false;
    this.projectId=projectId;
    this.createdAt=new Date();

    this.toggleComplete = function() {
        this.completed = !this.completed;
    };
    this.updateDetails = function(updates) {
        Object.assign(this, updates);
    };
}