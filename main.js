const textInput = document.querySelector(".textInput");
const addBtn = document.querySelector(".btn");
const taskList = document.querySelector(".task-item"); // Cambié la variable taskItem a taskList
const textHeader = document.getElementById("textHeader")

const totalTodos = document.getElementById("totalTodos")
const ulElement = document.getElementById("miLista");
const divElements = ulElement.getElementsByTagName("div");


function getCompletedTodo() {
    const textCompletedTodos = document.getElementById("completedTodos")
    const completedTodos = document.getElementsByClassName("completed");
    let cantidadCompleted = completedTodos.length;
    textCompletedTodos.textContent = cantidadCompleted;
}

function agregarTarea() {

    if (textInput.value != "") {
        let state = false;

        //Crea el elemento Li en donde se agrega el texto y agrega el texto
        const item = document.createElement("li");
        item.textContent = textInput.value;
        // Crea el icono unchecked
        const icono = document.createElement("i");
        icono.classList.add("bi", "bi-check-circle", "wait");

        // Crea el contenedor donde meteremos item y el icono mas adelante
        const itemContainer = document.createElement("div")
        itemContainer.classList.add("item-container")

        itemContainer.append(item, icono);
        taskList.appendChild(itemContainer)
        textInput.value = "";

        totalTodos.textContent = divElements.length;

        icono.addEventListener("click", () => {
            state
                ? (icono.classList.replace("bi-check-circle-fill", "bi-check-circle"), icono.classList.replace("completed", "wait"), state = !state)
                : (icono.classList.replace("bi-check-circle", "bi-check-circle-fill"), icono.classList.replace("wait", "completed"), state = !state)

            getCompletedTodo()
        })

    } else {
        alert("Ingresa una tarea antes de continuar")
    }
}


addBtn.addEventListener("click", agregarTarea);



