import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) =>{
      state.user = action.payload;
    },
    logout:(state)=>{
      state.user = null;
    }
  },
 
});

export const { login,logout } = userSlice.actions;


export const selectUser = (state) => state.user.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default userSlice.reducer;
