document.addEventListener("DOMContentLoaded", () => {
  // your code here
//class declaration creates a new class with a given name using prototype-based inheritance.
class Task {
//constructor creates and initializes an object of that class.
  constructor(description) {
    this.description = description;
    }
  render() {
    return `
    <li>
    ${this.description} <button data-description="${this.description}">*</button>
    </li>
    `}
  }
class taskList { constructor() { this.tasks = [];}
  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
}
  
  renderTask() {
    return this.tasks.map((task) => task.render()).join("");
}
  
  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description === description);
}}
  

// first I need to create a user-defined object/ class
 const tasker = new taskList()
 const formTask = document.getElementById('create-task-form')
 //pulls info from form id and gives me a link to input information
 const descriptionTask = document.getElementById('new-task-description')
 // this line give me access to change description task

 const listTask = document.getElementById('tasks')
 //this line gives access to <ul> id tasks which is where i want the data to go 

 const attach = () => (listTask.innerHTML = tasker.renderTask())
 // innerHtml sets or returns the HTML content and renderTask inits a new instance of the task
 //now i need to create an event listner for new inputs to tasks and prevent changes to default description placeholder
 formTask.addEventListener('submit', (e) => {
  e.preventDefault();
  tasker.createNewTask(descriptionTask.value);
  e.target.reset();
  attach();
 });
  listTask.addEventListener('click', (e) => {
    if (e.target.nodeName === "Button") {
      tasker.deleteTask(e.target.dataset.description)
      attach()
    }
  })


})

