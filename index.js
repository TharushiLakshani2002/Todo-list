const todoList = [
    { name: 'Make Dinner', dueDate: '2022-05-03' },
];

rendertodoList();

function rendertodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
            <div>${name}</div>  
            <div>${dueDate}</div>
            <div>
                <button onclick="
                    todoList.splice(${i},1);
                    rendertodoList();
                " class="delete-todo-button">Delete</button>
            </div>`;/*if we use <div>name</div> it will not give actual value of name. just give 'name'  */
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateinputElement.value;

    todoList.push({ name: name, dueDate: dueDate });

    inputElement.value = '';/*once we add all data into an array, the todo space should be empty */
    rendertodoList();
}
