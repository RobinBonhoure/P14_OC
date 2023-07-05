function Select ({data, value}) {
    return(
        <select className="input_employee" onChange={value}>
            <option value=""></option>
            {data.map((dataMapped, index) => {
                return(
                    <option value={dataMapped.name} key={index}>{dataMapped.name}</option>
                )
            })}
        </select>
    )
}

export default Select