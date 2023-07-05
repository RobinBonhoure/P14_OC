import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: [{
        firstname: "X",
        lastname: "X",
        date: '12-12-2000',
        departement: 'X',
        birth: '12-12-2023',
        street: 'X',
        city: 'X',
        state: 'X',
        code: '00000'
    }
    ]
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employee.push({ ...action.payload })
        }
    }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer