import { createSlice } from '@reduxjs/toolkit';


const initialPlan ={
  plan:null,
}

export const planSlice = createSlice({
  name: 'plan',
  initialPlan,
  reducers: {
    setplan:(state,action) => {
      state.plan = action.payload;
    },
  },
});

export const {setplan} = planSlice.actions;

export const selectPlan = (state) => state.plan.plan;

export default planSlice.reducer;

// const initialState = {
//   user: null,
// };


// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: {
//    login:(state,action) =>{
//     state.user = action.payload;
//    },
//    logout:(state) =>{
//     state.user = null;
//    }
//   },
// });

// export const { login,logout } = userSlice.actions;

// export const selectUser = (state) => state.user.user;

// export default userSlice.reducer;
