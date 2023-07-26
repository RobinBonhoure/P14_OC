import { useState } from "react";
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const shouldForwardProp = prop => isPropValid(prop);

const Table = () => {
    const test = useSelector((state => state.employee))

    const columns = [{
        name: 'First Name',
        selector: row => row.firstname,
        sortable: true
    },
    {
        name: 'Last name',
        selector: row => row.lastname,
        sortable: true
    },
    {
        name: 'Start Date',
        selector: row => row.date,
        sortable: true
    },
    {
        name: 'Departement',
        selector: row => row.departement,
        sortable: true
    },
    {
        name: 'Date of Birth',
        selector: row => row.birth,
        sortable: true
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true

    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true
    },
    {
        name: 'Zip Code',
        selector: row => row.code,
        sortable: true
    }
    ]

    const [search, setSearch] = useState(test.employee)
    const handleFilter = (e) => {
        const dataFiltered = test.employee.filter(data => {
            return (
                data.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.lastname.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.departement.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.street.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
                data.state.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        setSearch(dataFiltered)
    }
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <div className="table_container">
                <input type="text" onChange={handleFilter} placeholder="search" />
                <DataTable
                    columns={columns}
                    data={search}
                    pagination
                />
            </div>
        </StyleSheetManager>
    )


}

export default Table