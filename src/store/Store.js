import { configureStore } from "@reduxjs/toolkit";
import listSlice from './Reducer'

export default configureStore({
    reducer:{
        lists:listSlice,
        details:listSlice
    }
})