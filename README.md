¿Qué sucedio al usar async y await?
 Al momento de ejecutar en consola las opciones se desplegaron correctamente y la llmada de cada opción funciono de igual manera, e incluso las funciones de crear tarea, mostrar tarea, marcar tarea como completada, eliminar tarea y salir, funcionaron correctamente tal como antes de modificar para que retornaran una promesa. 

¿Qué sucedio al usar el método then()?
 cuando ejecute en consola las opciones se desplegaron correctamente y la llmada de cada opción funciono de igual manera, el unico inconveniente que tuve, fue que al momento de crear una tarea y solicitaba que se mostrara en lista de tarea, no aparecia, es decir, que las funcionalidades como tal no funcionaron, pensé que se trataba de un error de código, pero todo estaba bien, creo que se debe a que mi variable tasks estaba definida tanto a nivel global como dentro de la función, lo cual con async funciono perfectamente y no hubo error, pero con metodo then() solo debe estar declarada dentro de la función y no de manera global.

¿Qué diferencias encontraste entre async, await y el método then()? 
Al usar el método async/await, pude notar que la estructura del código fue facíl de leer, entender y a su vez el manejo de los errores fueron simplificados.
cuando implemente el metodo then() no fue tan intuitivo y claro.
