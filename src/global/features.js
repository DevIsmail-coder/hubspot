import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    host: {},
  user: {},
  hostName: "",
  userToken: "",
  hostToken: "",
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
        hostName: (state, {payload}) => {
            state.hostName = payload
        },
        hostTok: (state, {payload}) => {
            state.hostToken = payload
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
          },
    }
})

export const {userdata, hostdata, isAdmin, isVerified, token, logout, hostTok, hostName} = features.actions
export default features.reducer