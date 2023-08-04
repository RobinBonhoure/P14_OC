import { useState } from "react";
import Modal from '../components/Modal'
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";
import { states } from "../assets/data/states";
import { departements } from "../assets/data/departments";
import Select from "react-select-robin-easy";
import { useDispatch } from "react-redux";
import { addEmployee } from "../reducers/createEmployee";


const Form = () => {

    const [openModal, setOpenModal] = useState(false)
    const [firstname, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [birth, setBirth] = useState(new Date())
    const [date, setStart] = useState(new Date())
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [code, setCode] = useState("")
    const [departement, setDepartement] = useState("")
    const [state, setState] = useState("")
    const data = {
        firstname,
        lastname,
        birth: birth.toISOString().slice(0, 10),
        date: date.toISOString().slice(0, 10),
        street,
        city,
        code,
        departement,
        state
    };
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(addEmployee(data))
        setOpenModal(true)
        
    }
    const stateValue = (e) => {
        setState(e.target.value)
    }

    const departementValue = (e) => {
        setDepartement(e.target.value)
    }

    return (
        <>
        <Link to="/employee-list">View Current Employees</Link> 
        <div className="container">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <input className="input_employee" type="text" id="first-name" onChange={(e) => setName(e.target.value)}  placeholder="First name"/>
                <input className="input_employee" type="text" id="last-name" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
                <DatePicker className="input_employee" placeholderText="Date of birth" selected={birth} onChange={(date) => {setBirth(date)}} format='yyyy-MM-dd'/>
                <DatePicker className="input_employee" placeholderText="Start date" selected={date} onChange={(date) => setStart(date)} format='yyyy-MM-dd'/>
                <input className="input_employee" placeholder="Street" id="street" type="text" onChange={(e) => setStreet(e.target.value)}/>
                <input className="input_employee" placeholder="City" id="city" type="text" onChange={(e) => setCity(e.target.value)} />
                    <Select name="State" id="state" data={states} value={stateValue} />
                    <input className="input_employee" placeholder="Zip code" id="zip-code" type="number" onChange={(e) => setCode(e.target.value)} />
                <Select name="Departement" id="departement" data={departements} value={departementValue} />
            </form>
            <button onClick={handleClick}>Save</button> 
            {openModal && <Modal closeModal={setOpenModal} />}
        </div>
        </>
    )
}

export default Form