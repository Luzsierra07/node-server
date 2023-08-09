const readline = require ("readline-sync");

//Crear nueva tarea
const tasks = [];

const createTask =() =>{
    const indicator = readline.question(
        "Indicador de la tarea"
    );
    const description = readline.question(
        "Descripcion de la tarea"
    );

    return{
        id: tasks.length + 1,
        taskName: indicator,
        taskDescription: description,
        taskCompleted: false
    };
};

//Mostrar lista de tareas

const showTasks = (tasks) => {
    console.log("\nLista de tareas:");
    tasks.forEach((task)=> {
        const state= task.completed? "Completada" : "Pendiente";
        console.log(`ID: ${task.id}, Nombre: ${task.taskName}, Descripcion: ${task.taskDescription}, Estado: ${state}`);        
    });
};

//Marcar tarea completada
const completeTask = (tasks) => {
    const index = readline.questionInt(
        "Indica el numero de la tarea que deseas marcar como completada:"
    ) - 1;
    if (index >= 0 && index <tasks.length) {
        tasks[index].completed = true;
        console.log(`La tarea "${tasks[index].indicator}" ha sido marcada como completada.`);
    } else {
        console.log("Numero de tarea invalido");
    }
};

//Eliminar tarea
const deleteTask = (tasks) => {
    const index = readline.questionInt(
        "Indica el numero de la tarea que deseas eliminar:"
    ) - 1;
    if (index >= 0 && index < tasks.length){
        tasks.splice(index, 1);
        console.log("La tarea ha sido eliminada.");
    } else {
        console.log("Numero de tarea invalido.");
    }
};

//funcionalidad principal

function main () {
    const tasks = [];

    while (true) {
        console.log("\nOpciones:");
        console.log("1. Crear tarea");
        console.log("2. Mostrar tareas");
        console.log("3. Marcar tarea como completada");
        console.log("4. Eliminar tarea");
        console.log("5. salir");

        const opcion = readline.questionInt("Selecciona una opcion:");

        switch (opcion) {
            case 1:
                const newTask = createTask();
                tasks.push(newTask);
                break;
            case 2:
                showTasks(tasks);
                break;
            case 3:
                completeTask(tasks);
                break;
            case 4:
                deleteTask(tasks);
                break;
            case 5:
                console.log("¡Hasta luego!");
                return;
            default:
                console.log("Opcion invalida.");
        }
    }
}

main();