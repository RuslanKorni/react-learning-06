//* Старі способи написання Екшенів
//! Написання екшенів з використанням ReduxToolkit
// import { createAction, nanoid } from "@reduxjs/toolkit";
// export const addTask = createAction("tasks/addTask", text => {
//   return {
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//   },
//   };
// });

// export const deleteTask = createAction("tasks/deleteTask", taskId => {
//   return {
//     payload: taskId,
//   }
// });

// export const toggleCompleted = createAction("tasks/toggleCompleted", taskId => {
//   return {
//     payload: taskId,
//   }
// });

// export const setStatusFilter = createAction("filters/setStatusFilter", value => {
//   return {
//     payload: value,
//   }
// });

//! Створення екшенів без використання ReduxToolkit
// Когда добавляем таск генерируем id для таска

// export const addTask = (text) => {
// return {
//     type: "tasks/addTask",
    // payload: {
    //     id: nanoid(),
    //     completed: false,
    //     text,
    // },
// };
// };

// export const deleteTask = taskId => {
//     return {
//       type: "tasks/deleteTask",
//       payload: taskId,
//     };
//   };
  
//   export const toggleCompleted = taskId => {
//     return {
//       type: "tasks/toggleCompleted",
//       payload: taskId,
//     };
//   };
  
//   export const setStatusFilter = value => {
//     return {
//       type: "filters/setStatusFilter",
//       payload: value,
//     };
//   };