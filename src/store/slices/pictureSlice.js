import { createSlice } from "@reduxjs/toolkit";

const pictureSlice = createSlice({
    name : "picture",
    initialState : {
        value : JSON.parse(localStorage.getItem("picture")) || []
    },
    reducers : {
        handlePicture(state, {payload}){
            state.value = payload.picture
            localStorage.setItem("picture", JSON.stringify(state.value))
        }
    }
})

export const selectPicture = (store) => store.pictureSlice.value

export const {handlePicture} =  pictureSlice.actions

export default pictureSlice.reducer