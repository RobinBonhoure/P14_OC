import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from '../reducers/createEmployee'

const store = configureStore({
    reducer:{
        employee: employeeReducer
    }
})

export default store