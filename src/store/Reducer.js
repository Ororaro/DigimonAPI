import {createSlice,current} from '@reduxjs/toolkit'

const initialState = {
    lists:[],
    details:{},
}

const listSlice = createSlice({
    name:"ListName",
    initialState,
    reducers:{
        addList:(state,action) =>{
            state.lists = action.payload
        },
        adddetail:(state,action)=>{
            state.details = action.payload
        }
    }
})
export const {addList,adddetail} = listSlice.actions
export default listSlice.reducer