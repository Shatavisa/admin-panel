import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
      name: "user",
      initialState: {
            currentUser: null,
            isFetching: false,
            error: false,
            message: '',
      },
      reducers: {
            logout: (state) => {
                  state.currentUser = null;
                  state.isFetching = false;
                  state.error = false;
                  state.message = "";
            },
            loginStart: (state) => {
                  state.isFetching = true
                  state.error = false
            },
            loginSuccess: (state, action) => {
                  state.isFetching = false
                  state.currentUser = action.payload
                  state.error = false
                  state.message = ''
            },
            loginFailure: (state, action) => {
                  state.isFetching = false
                  state.error = true
                  state.message = action.payload.message
            },
            hideAlert: (state) => {
                  state.error = false;
                  state.message = '';
            }
      }
})

export const { loginStart, loginSuccess, loginFailure, hideAlert, logout } = userSlice.actions
export default userSlice.reducer