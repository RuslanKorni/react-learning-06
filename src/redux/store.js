//! ReduxToolkit написання стору
import { configureStore } from "@reduxjs/toolkit";

//!======================== Before =================================
//? import { tasksReducer, filtersReducer} from "./reducer";

//!======================= After ===================================
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

//! Написання стора без ReduxToolkit 
// import { createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import {rootReducer} from './reducer'

//! Початкове значення стану Redux для кореневого редюсера, якщо не передати параметр preloadedState.
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
 