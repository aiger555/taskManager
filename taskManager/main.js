document.addEventListener('DOMContentLoaded', function () {
  // Get the variables
  const err = document.querySelector(".err");
  const inputTask = document.getElementById("input-task");
  const addTaskBtn = document.querySelector("#add-task");
  const inputSearch = document.getElementById("search-input");
  const taskList = document.querySelector(".task-list");
  const clearAllBtn = document.querySelector(".clear-all");
  const logoutButton = document.querySelector("#logoutButton");
  
  // Add a task
  addTaskBtn.addEventListener("click", addTaskFun);

  function addTaskFun(e) {
    e.preventDefault();
    // check if the input task is not empty
    if (inputTask.value !== "") {
      // get our input value and trim
      const taskText = inputTask.value.trim();
      console.log(taskText);
      // create a new li
      const newli = document.createElement("li");
      newli.className = "task";
      // create an input field -> type of text, disabled, class name of disabled task
      const taskInput = document.createElement("input");
      taskInput.type = "text";
      taskInput.disabled = true;
      taskInput.className = "disabled-task";
      // put the input trimmed value into the disabled task input
      taskInput.value = taskText;
      // put the input field that contains the task into new li
      newli.appendChild(taskInput);
      // create the delete btn and -> class of delete btn, text of delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "deleteBtn";
      // put the delete btn into the li
      newli.appendChild(deleteBtn);
      // create an edit btn with class of edit btn
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.className = "editBtn";
      // put the edit btn into the li too
      newli.appendChild(editBtn);
      // create a mark as complete button
      const completeBtn = document.createElement("button");
      completeBtn.innerText = "Mark as Complete";
      completeBtn.className = "completeBtn";
      // put the mark as complete button into the li
      newli.appendChild(completeBtn);
      // put the new li that contains all the information into the task list
      taskList.appendChild(newli);
      // clear the input task
      inputTask.value = "";
    } else {
      err.style.display = "block";
      setTimeout(() => {
        err.style.display = "none";
      }, 2000);
    }
  }

  // delete a task
  taskList.addEventListener("click", (e) => {
    e.preventDefault();
    // check if the clicked target is a delete button
    if (e.target.classList.contains("deleteBtn")) {
      // get the parent of that delete button
      // remove the parent
      e.target.parentElement.remove();
    }
  });

  // edit a task
  taskList.addEventListener("click", (e) => {
    e.preventDefault();
    // check if the clicked target is having a class name of editBtn
    if (e.target.classList.contains("editBtn")) {
      // get the parent of that editBtn
      // get the child of that parent that has a class name of disabled-task or Html tag of input
      const input = e.target.parentElement.querySelector(".disabled-task");
      //check if the input of the task is disabled.
      input.disabled = !input.disabled;
      //check again if the input field is disabled
      if (!input.disabled) {
        //make the input field to be in focus
        input.focus();
      }
    }
  });

  // mark as complete
  taskList.addEventListener("click", (e) => {
    e.preventDefault();
    // check if the clicked target is a complete button
    if (e.target.classList.contains("completeBtn")) {
      // get the parent of that complete button
      // toggle a class to mark it as complete (you can customize the class name)
      e.target.parentElement.classList.toggle("completed");
    }
  });

  // delete all tasks
  clearAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //target all the innerHtml taskList and make them empty string
    taskList.innerHTML = "";
  });

    // search task
      // add a keyup event on the search input field
      inputSearch.addEventListener("keyup", (e) => {
        e.preventDefault();
        // get the value from the search input
        // turn the search value or text to lowecase
        const searchText = inputSearch.value.toLowerCase();
        // get all the li or task
        const taskItems = document.querySelectorAll(".task");
        // loop through the li or tasks
        for (let i = 0; i < taskItems.length; i++) {
          const liTask = taskItems[i];
          // target the child of each looped li of type input or class of disabled task
          // get the value of the input or value of disabled task
          // turn the value or text into lowercase
          const taskTextItem = liTask.querySelector(".disabled-task").value.toLowerCase();
          console.log(taskTextItem);
          // check if the searched word is in the looped input field
          if (taskTextItem.indexOf(searchText) !== -1){
            // display it block or display it none
            liTask.style.display = "block";
          }else{
            liTask.style.display = "none";
          }
        }
        
      });
    
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Simulate clearing session or removing tokens
        // You should replace this with your actual logout logic
        sessionStorage.clear(); // Clear session storage

        // Redirect to the user page after logout
        window.location.href = "user.html"; 
        });
    }
});


