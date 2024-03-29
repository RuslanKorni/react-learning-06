import {createSlice} from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
    status: statusFilters.all,
  };

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setStatusFilter(state, action) {
            // ✅ Immer замінить це на операцію оновлення
      state.status = action.payload;
        },

    }
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;