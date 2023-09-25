import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name : "photo",
    initialState : {
        value : JSON.parse(localStorage.getItem("photos")) || []
    },
    reducers : {
        handlePhotos(state, {payload}){
            state.value = payload.photos
            localStorage.setItem("photos", JSON.stringify(state.value))
        },
    }
})

export const {handlePhotos} = photoSlice.actions

export const selectPhotos = (store) => store.photoSlice.value

export default photoSlice.reducer