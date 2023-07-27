/* eslint-disable react/prop-types */
function Select ({data, value, name}) {
    return(
        <select className="input_employee" onChange={value}>
            <option>{name}</option>
            {data.map((dataMap, index) => {
                return(
                    <option value={dataMap.name} key={index}>{dataMap.name}</option>
                )
            })}
        </select>
    )
}

export default Select