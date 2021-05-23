let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
    clearList = document.querySelector('.clear');
    todo = document.querySelector('.todo');



let toDoList = [];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

addButton.addEventListener('click', function () {

    let newTodo = {
        todo: addMessage.value,
    };
    toDoList.push(newTodo);
    displayMessage();
    localStorage.setItem('todo', JSON.stringify(toDoList));
});

clearList.addEventListener('click', function () {
    localStorage.clear();
    todo.innerHTML = ' ';
})

function displayMessage() {
    let displayMessage = '';
    if (toDoList.length === 0) {
        todo.innerHTML = ' ';
    }
    toDoList.forEach(function (item, i) {
        displayMessage += `
        <li>
        <label for='item_${i}'> ${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    }
    )
};

todo.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    toDoList.forEach(function (item, i) {
        if (event.ctrlKey) {
            toDoList.splice(i, 1);
        }
    displayMessage();
        localStorage.setItem('todo', JSON.stringify(toDoList));    
    })
    
});
    
