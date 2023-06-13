import React from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

const TableBody =(props)=>{
 
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
}

function Table (props){
 //console.log(this.props);

    return (
        <table className="table is-bordered">
        <TableHeader/>
        <TableBody characterData={props.characterData}/> 
        </table>
    )


}

export default Table