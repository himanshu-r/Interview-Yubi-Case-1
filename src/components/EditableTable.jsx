import React from 'react'

function EditableTable({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Table Name"
        name="tableName"
        value={editFormData.tableName}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="Column Name"
        name="columnName"
        value={editFormData.columnName}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="text"
        required="required"
        placeholder="City Name"
        name="cityName"
        value={editFormData.cityName}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </td>
  </tr>
  )
}

export default EditableTable