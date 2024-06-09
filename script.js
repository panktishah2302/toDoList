let input = document.querySelector('.input');
let preview = document.querySelector('.preview ul');

function Add() {
  localStorage.setItem('task', input.value);
  let savedTask = localStorage.getItem('task');
  input.value = "";

  let output = "";
  for (let i in savedTask) {
    output += savedTask[i];
  }

  if (output.trim() !== "") {
    let li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = '<div><input class="form-check-input me-2 check" type="checkbox" value="">' + output.trim() + '</div>' + '<i class="fa-solid fa-trash"></i>';
    preview.appendChild(li);

    let deleteTask = li.querySelector('.fa-trash');
    deleteTask.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.remove();
      }
    }, false);

    let check = li.querySelector('.check') 
    check.addEventListener('change', () => {

      if (check.checked) {
        li.style.textDecoration = 'line-through'
        deleteTask.style.pointerEvents = 'none'

      } else {
        li.style.textDecoration = 'none'
        deleteTask.style.pointerEvents = 'auto';
      }
    });
  }
}

Add();
