import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//creating action outside the slicer

export const createuser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://66b5065e9f9169621ea53c09.mockapi.io/Userpedia",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//updateUser
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch(
      `https://66b5065e9f9169621ea53c09.mockapi.io/Userpedia/${data.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//reading opereation by default fetch api has the get method involved .

export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    //_ is used .
    const response = await fetch(
      "https://66b5065e9f9169621ea53c09.mockapi.io/Userpedia"
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//createasyncthunk returns a promise which is pending fullfileed rejected
//we have to handle them all

//delete user function

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://66b5065e9f9169621ea53c09.mockapi.io/Userpedia/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  //name , initial state, recucers: { incremented }
  name: "userDetail",
  initialState: {
    //state.users, state.loading
    users: [], //actual data of the users stored here
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle createuser actions
      .addCase(createuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createuser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle showUser actions
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        console.log(state.users); // Logging the users to console
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //handling deleteUser action
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          //if id found or let's say data come then
          state.users = state.users.filter((ele) => ele.id !== id); //send those data where element.id != id
        }
        // Logging the users to console
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;

//exporting it and it will be used in the store
//like reducers app:userDetail
