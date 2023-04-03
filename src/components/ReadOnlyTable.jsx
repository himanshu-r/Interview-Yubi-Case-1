import React from 'react'

function ReadOnlyTable({data, handleEditClick, handleDeleteClick }) {
  return (
    <tr>
      <td>{data.tableName}</td>
      <td>{data.columnName}</td>
      <td>{data.cityName}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, data)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ReadOnlyTable