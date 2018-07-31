"use strict";

let listaTareas = [
  { text: "Preparar práctica PDAP", tags: ["pdap", "practica"] },
  { text: "Mirar fechas congreso", done: true, tags: [] },
  { text: "Ir al supermercado", tags: ["personal"] },
  { text: "Mudanza", done: false, tags: ["personal"] },
];

/**
 * Devuelve las tareas de la lista de entrada que no hayan sido finalizadas.
 */
function getToDoTasks(tasks) {
   return tasks.filter(n=>n.done!==true).map(n=>n.text);
}

/**
 * Devuelve las tareas que contengan el tag especificado
 */
function findByTag(tasks, tag) {
  return tasks.filter(n=>n.tags.indexOf(tag)!==-1);
}

/**
 * Devuelve el número de tareas finalizadas
 */
function countDone(tasks) {
  return tasks.reduce( (x,y) => {if(y.done===true) x++; return x},0);
}

module.exports = {
  getToDoTasks: getToDoTasks,
  findByTag: findByTag,
  countDone: countDone
}