import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//creating action outside the slicer

export const createuser = createAsyncThunk("createUser", async (data,{rejectWithValue}) => {
  const response = await fetch(
    "https://66b5065e9f9169621ea53c09.mockapi.io/Userpedia",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data;
      return result; 
    })
    .catch(error)
    {
      return rejectWithValue(error);
    }

});

//createasyncthunk returns a promise which is pending fullfileed rejected 
//we have to handle them all 

export const userDetail = createSlice({
  //name , initial state, recucers: { incremented }
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    [createuser.pending]: (state) => {
      state.loading = true;
    },
    [createuser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createuser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});

export default userDetail.reducer;
