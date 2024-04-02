// script.js

// DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoDate = document.getElementById('todo-date');
const todoContainer = document.getElementById('todo-container');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get user input values
  const todoText = todoInput.value.trim();
  const todoDateValue = todoDate.value.trim();
  
  // Check if input is not empty
  if (todoText !== '' && todoDateValue !== '') {
    // Create a new div element
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    
    // Create spans for title and date
    const titleSpan = document.createElement('span');
    titleSpan.textContent = todoText;
    
    const dateSpan = document.createElement('span');
    dateSpan.textContent = todoDateValue;
    
    // Append spans to todoDiv
    todoDiv.appendChild(titleSpan);
    todoDiv.appendChild(dateSpan);
    
    // Append todoDiv to todoContainer
    todoContainer.appendChild(todoDiv);
    
    // Clear input fields
    todoInput.value = '';
    todoDate.value = '';
  }
});