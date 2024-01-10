//! Написання редюсера з використання ReduxToolkit
import { statusFilters } from './constants';
import { addTask, deleteTask, toggleCompleted, setStatusFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, builder => {
    builder
      .addCase(addTask, (state, action) => {
        // ✅ Immer замінить це на операцію оновлення
        state.push(action.payload);
      })
      .addCase(deleteTask, (state, action) => {
        // ✅ Immer замінить це на операцію оновлення
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
      })
      .addCase(toggleCompleted, (state, action) => {
        // ✅ Immer замінить це на операцію оновлення
        for (const task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
          }
        }
      });
  });
  
  const filtersInitialState = {
    status: statusFilters.all,
  };

  export const filtersReducer = createReducer(filtersInitialState, builder => {
    builder.addCase(setStatusFilter, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      state.status = action.payload;
    });
  });

//! Довгий запис без урахування того що під капотом ReduxToolkit використовує Immer
// export const tasksReducer = createReducer(tasksInitialState, builder => {
//   builder
//     .addCase(addTask, (state, action) => {
//       return [...state, action.payload];
//     })
//     .addCase(deleteTask, (state, action) => {
//       return state.filter(task => task.id !== action.payload);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
//     });
// });

// const filtersInitialState = {
//     status: statusFilters.all,
//   };

//   export const filtersReducer = createReducer(filtersInitialState, builder => {
//     builder.addCase(setStatusFilter, (state, action) => {
//       return {
//         ...state,
//         status: action.payload,
//       };
//     });
//   });



//! Створення редюсера за допомогою createReducer
// export const tasksReducer = (state = tasksInitialState, action) => {
//         switch (action.type) {
//           case "tasks/addTask":
//             return [...state, action.payload];
//           case "tasks/deleteTask":
//             return state.filter(task => task.id !== action.payload);
//           case "tasks/toggleCompleted":
//     return state.map(task => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return { ...task, completed: !task.completed };
//     });
//   default:
//     return state;
// }
//       };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//     switch (action.type) {
//         case "filters/setStatusFilter":
//           return {
//             ...state,
//             status: action.payload,
//           };
//         default:
//           return state;
//       }
// };

//! Написання редюсера без ReduxToolkit
// import { statusFilters } from "./constants";
// import { combineReducers } from "redux";

// //! Розділені редюсер які відповідають тільки за свою частину коду
// const tasksInitialState = [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ];

//   // Відповідає лише за оновлення властивості tasks
//   // Тепер значенням параметра state буде масив завдань
//   const tasksReducer = (state = tasksInitialState, action) => {
//     switch (action.type) {
//       case "tasks/addTask":
//         return [...state, action.payload];
//       case "tasks/deleteTask":
//         return state.filter(task => task.id !== action.payload);
//       case "tasks/toggleCompleted":
//         return state.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         });
//       default:
//         return state;
//     }
//   };

//   const filtersInitialState = {
//     status: statusFilters.all,
//   };

//   // Відповідає лише за оновлення властивості filters
//   // Тепер значенням параметра state буде об'єкт фільтрів
//   const filtersReducer = (state = filtersInitialState, action) => {
// switch (action.type) {
//   case "filters/setStatusFilter":
//     return {
//       ...state,
//       status: action.payload,
//     };
//   default:
//     return state;
// }
//   };

//   //! Кореневий редюсер створений за допомогою Redux
//   export const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   });

//! Кореневий редюсер створений вручну
//   export const rootReducer = (state = {}, action) => {
//     // Повертаємо об'єкт стану
//     return {
//       // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//       tasks: tasksReducer(state.tasks, action),
//       filters: filtersReducer(state.filters, action),
//     };
//   };

//! Загальний редюсер
// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//     case "tasks/addTask":
//     return {
//     ...state,
//     tasks: [...state.tasks, action.payload],
//     };
//     case "tasks/deleteTask":
//     return {
//     ...state,
//     tasks: state.tasks.filter(task => task.id !== action.payload),
//     };
//     case "tasks/toggleCompleted":
//     return {
//     ...state,
//     tasks: state.tasks.map(task => {
//     if (task.id === action.payload) {
//     return {
//     ...task,
//     completed: !task.completed,
//     };
//     }
//     return task;
//     }),
//     };
//     case "filters/setStatusFilter":
//     return {
//     ...state,
//     filters: {
//     ...state.filters,
//     status: action.payload,
//     },
//     };
//     default:
//     return state;
//     }
//     };

//! Пояснення коду редюсерів
// export const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     case "tasks/addTask": {
//       // Потрібно повернути новий об'єкт стану
//       return {
//         // в якому є всі дані існуючого стану
//         ...state,
//         // та новий масив задач
//         tasks: [
//           // в якому є всі існуючі завдання
//           ...state.tasks,
//           // та об'єкт нового завдання
//           action.payload,
//         ],
//       };
//     }
//     default:
//       // Кожен редюсер отримує всі екшени, відправлені в стор.
//       // Якщо редюсер не повинен обробляти якийсь тип екшену,
//       // необхідно повернути наявний стан без змін.
//       return state;

//       case "tasks/deleteTask":
//         return {
//             ...state,
//             tasks: satisfies.tasks.filter(task => task.id !== action.payload),
//         }

//   }
// };
