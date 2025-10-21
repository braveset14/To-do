
import { storage } from "./storage";
import { Project } from "./Project";
import { createDefaultProject } from "./Project";
export const  projectManager={
    projects:[],
    currentProjectId: 'default',

    init() {
        const savedData = storage.loadData();
        if (savedData && savedData.projects) {
            // Load existing data
            this.projects = savedData.projects;
            this.currentProjectId = savedData.currentProjectId || 'default';
        } else {
            // First time user - create default project
            this.setupDefaultProject();
        }
    },
    
    setupDefaultProject() {
        const defaultProject = createDefaultProject(); // This calls the factory from project.js
        this.projects.push(defaultProject);
        this.currentProjectId = defaultProject.id;
        storage.saveData(this.getData());
    },

     addProject(name) { // Fixed parameter name
        const newProject = new Project(name); // Fixed variable name
        this.projects.push(newProject);
        storage.saveData(this.getData());
        return newProject;
    },


    deleteProject(projectId) { // Fixed parameter name
        if (projectId === 'default') return false;
        
        this.projects = this.projects.filter(project => project.id !== projectId);
        
        if (this.currentProjectId === projectId) { // Fixed variable name
            this.currentProjectId = 'default';
        }
        
        storage.saveData(this.getData());
        return true;
    },
     setCurrentProject(projectId) {
        const project = this.getProject(projectId);
        if (project) {
            this.currentProjectId = projectId;
            storage.saveData(this.getData());
            return true;
        }
        return false;
    },
    
    getCurrentProject(){
        return this.getProject(this.currentProjectId);
    },
    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    },
    getAllProjects() {
        return this.projects;
    },
    getData(){
        return{
            projects:this.projects,
            currentProjectId:this.currentProjectId
        };
    }
}