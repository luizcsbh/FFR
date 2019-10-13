import React from 'react';

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.age}</td>
            <td>
                <button type="button" class="btn btn-primary" onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

export default TableBody;