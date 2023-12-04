import React, { useState } from 'react';

const AdminPage = () => {
  // Initialize state to manage the table data and input fields.
  const [tableData, setTableData] = useState([]);
  const [newRowData, setNewRowData] = useState({
    User_Role: '',
    User_id: '',
    user_password: '',
    first_name: '',
    last_name: '',
  });

  // Function to handle adding a new row to the table.
  const handleAddRow = () => {
    // Validate input fields (you can add more robust validation as needed).
    if (!newRowData.User_Role || !newRowData.User_id || !newRowData.user_password || !newRowData.first_name || !newRowData.last_name) {
      alert('Please fill in all fields.');
      return;
    }

    // Add the new row to the table data.
    setTableData([...tableData, newRowData]);

    // Clear input fields.
    setNewRowData({
      User_Role: '',
      User_id: '',
      user_password: '',
      first_name: '',
      last_name: '',
    });
  };

  // Function to handle deleting a row from the table.
  const handleDeleteRow = (User_id) => {
    // Filter out the row with the specified id.
    const updatedData = tableData.filter((row) => row.User_id !== User_id);
    setTableData(updatedData);
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <table>
        {/* <thead>
          <tr>
            <th>User Role</th>
            <th>User Id</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead> */}
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Record</h3>
      <div>
        <label>User Role:</label>
        <input
          type="text"
          value={newRowData.User_Role}
          onChange={(e) => setNewRowData({ ...newRowData, User_Role: e.target.value })}
        />
      </div>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={newRowData.User_id}
          onChange={(e) => setNewRowData({ ...newRowData, User_id: e.target.value })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          value={newRowData.user_password}
          onChange={(e) => setNewRowData({ ...newRowData, user_password: e.target.value })}
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={newRowData.first_name}
          onChange={(e) => setNewRowData({ ...newRowData, first_name: e.target.value })}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={newRowData.last_name}
          onChange={(e) => setNewRowData({ ...newRowData, last_name: e.target.value })}
        />
      </div>
      <button onClick={handleAddRow}>Add Record</button>
      
      <button onClick={handleDeleteRow}>Delete Record</button>
    </div>
  );
};

export default AdminPage;