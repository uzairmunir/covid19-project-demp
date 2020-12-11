import React from 'react'
import './table.css'

const Table = ({countries}) => {
    return (
        <div className="table">
            <th>Active Cases</th>
           {
               countries.map(({country,active})=>(
                   <tr>
                       <td>{country}</td>
               <td>{active}</td>
                   </tr>
               ))
           }
        </div>
    )
}

export default Table
