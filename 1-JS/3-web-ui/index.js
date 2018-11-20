console.log('-index.js-')

//-----------------------------------------------------------
// using DOM Api
//-----------------------------------------------------------

let alertBox = document.querySelector('.alert-info')
let greetBtn = document.querySelector('.btn-success')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')

greetBtn.addEventListener('click', e => {
    alertBox.innerHTML = "good morning"
})
showBtn.addEventListener('click', e => {
    alertBox.style.display = ''
})
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
})

//-----------------------------------------------------------



//-----------------------------------------------------------
// using XHR Api / Fetch Api
//-----------------------------------------------------------

let todosBtn = document.querySelector('.btn-warning')
todosBtn.addEventListener('click', e => {
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            let todoList = document.getElementById('todo-list')
            let temp = [];
            todos.forEach((todo, idx) => {
                let liTemplate = `
                <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>
            `
            temp.push(liTemplate)
            })
           todoList.innerHTML = temp.join(" ");
        })
})



//-----------------------------------------------------------
// using Timer Api
//-----------------------------------------------------------

let timeEle = document.querySelector('.badge')
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString()
}, 1000)