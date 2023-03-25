document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector('#create-task-form');
const task = document.querySelector('#tasks');
form.addEventListener("submit", (event) => {
  event.preventDefault();
const formInput = document.querySelector('#new-task-description').value;
if(formInput){
    const newTask = document.createElement('li');
    newTask.textContent = formInput;
    task.appendChild(newTask);
    form.reset();
}
});
});













