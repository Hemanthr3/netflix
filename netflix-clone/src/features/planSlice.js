import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  plan:null,
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setplan:(state,action) => {
      state.plan = action.payload;
    },
  },
});

export const {setplan} = planSlice.actions;

export const selectPlan = (state) => state.plan.plan;

export default planSlice.reducer;
