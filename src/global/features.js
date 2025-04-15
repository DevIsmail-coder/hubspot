import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    host: {},
  user: {},
  userToken: "",
  admin: false,
  verified: false,
}

const features = createSlice({
    name: "hubspot",
    initialState,
    reducers: {
        userdata: (state, {payload}) => {
            state.user = payload
        },
        hostdata: (state, {payload}) => {
            state.host = payload
        },
        isAdmin: (state, {payload}) => {
            state.admin = payload
        },
        isVerified: (state, {payload}) => {
            state.verified = payload
        },
        token: (state, {payload}) => {
            state.userToken = payload
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
          },
    }
})

export const {userdata, hostdata, isAdmin, isVerified, token, logout} = features.actions
export default features.reducer