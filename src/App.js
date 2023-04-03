
import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import tabledata from "./mock-data.json"
import ReadOnlyTable from './components/ReadOnlyTable';
import EditableTable from "./components/EditableTable";

const App = () => {
  const [data, setData] = useState(tabledata);
  const [addFormData, setAddFormData] = useState({
    tableName: "",
    columnName: "",
    cityName: "",
  });

  const [editFormData, setEditFormData] = useState({
    tableName: "",
    columnName: "",
    cityName: "",
  });

  const [editFormId, setEditFormId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTable = {
      id: nanoid(),
      tableName: addFormData.tableName,
      columnName: addFormData.columnName,
      cityName: addFormData.cityName,
    };

    const newdata = [...tabledata, newTable];
    setData(newdata);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedData = {
      id: editFormId,
      tableName: editFormData.tableName,
      columnName: editFormData.columnName,
      cityName: editFormData.cityName,
    };

    const newdata = [...data];

    const index = data.findIndex((data) => data.id === editFormId);

    newdata[index] = editedData;

    setData(newdata);
    setEditFormId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditFormId(data.id);

    const formValues = {
      tableName: data.tableName,
      columnName: data.columnName,
      cityName: data.cityName,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditFormId(null);
  };

  const handleDeleteClick = (dataId) => {
    const newdata = [...data];

    const index = data.findIndex((data) => data.id === dataId);

    newdata.splice(index, 1);

    setData(newdata);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Table Name</th>
              <th>Column Name</th>
              <th>City Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
                editFormId === data.id ? (
                  <EditableTable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyTable
                    data={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Table Data</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="tableName"
          required="required"
          placeholder="Table Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="columnName"
          required="required"
          placeholder="Column Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="cityName"
          required="required"
          placeholder="City Name"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
