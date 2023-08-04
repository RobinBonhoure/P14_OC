import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: [{
        firstname: '',
        lastname: '',
        date: '',
        departement: '',
        birth: '',
        street: '',
        city: '',
        state: '',
        code: ''
    }
    ]
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employee = [...state.employee, { ...action.payload }];
    },
  },
});


export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer