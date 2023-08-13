const readline = require ("readline-sync");

//Crear nueva tarea
const tasks = [];

const createTask =() =>{
    return new Promise((resolve, reject) => {
    const indicator = readline.question(
        "Indicador de la tarea"
    );
    const description = readline.question(
        "Descripcion de la tarea"
    );

    resolve({
        id: tasks.length + 1,
        taskName: indicator,
        taskDescription: description,
        taskCompleted: false
    });
    })
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
    return new Promise((resolve,reject)=> {
    const index = readline.questionInt(
        "Indica el numero de la tarea que deseas marcar como completada:"
    ) - 1;
    if (index >= 0 && index <tasks.length) {
        tasks[index].completed = true;
        resolve(`La tarea "${tasks[index].indicator}" ha sido marcada como completada.`);
    } else {
        reject("Numero de tarea invalido");
    }
    });
};

//Eliminar tarea
const deleteTask = (tasks) => {
    return  new Promise ((resolve, reject)=>{
    const index = readline.questionInt(
        "Indica el numero de la tarea que deseas eliminar:"
    ) - 1;
    if (index >= 0 && index < tasks.length){
        tasks.splice(index, 1);
        resolve("La tarea ha sido eliminada.");
    } else {
        reject("Numero de tarea invalido.");
    }
    });
};

//funcionalidad principal

async function main () {
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
                try {
                const newTask = await createTask();
                tasks.push(newTask);
                } catch (error){
                    console.error(error)
                }
                break;
            case 2:
                showTasks(tasks);
                break;
            case 3:
                try {
                const result = await completeTask(tasks);
                console.log(result);
                }catch (error) {
                    console.error(error);
                }
                break;
            case 4:
                try {
                const result = await deleteTask(tasks);
                console.log(result);
                } catch (error) {
                    console.error(error);
                }
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