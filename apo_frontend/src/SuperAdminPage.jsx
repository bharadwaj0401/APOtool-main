import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuperAdminPage = () => {
  const [userCustomerMapping, setUserCustomerMapping] = useState([]);
  const [selectedMapping, setSelectedMapping] = useState(null);

  useEffect(() => {
    // Fetch user-customer mapping data from the Node.js backend
    axios.get('http://localhost:3001/user-customer-mapping')
      .then((response) => {
        setUserCustomerMapping(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user-customer mapping:', error);
      });
  }, []);

  const handleMappingSelect = (mapping) => {
    setSelectedMapping(mapping);
  };

  return (
    <div>
      <h1>Superadmin Page</h1>
      <div>
        <label>Select a Mapping:</label>
        <select value={selectedMapping} onChange={(e) => handleMappingSelect(e.target.value)}>
          <option value="">Select a mapping...</option>
          {userCustomerMapping.map((mapping) => (
            <option key={mapping.User_id} value={mapping.User_id}>
              {mapping.Username} - {mapping.Customer_name}
            </option>
          ))}
        </select>
      </div>
      {selectedMapping && (
        <div>
          {/* Display the selected mapping information here */}
          <h2>Mapping Details:</h2>
          <p>User ID: {selectedMapping.User_id}</p>
          <p>Username: {selectedMapping.Username}</p>
          <p>Customer ID: {selectedMapping.Customer_id}</p>
          <p>Customer Name: {selectedMapping.Customer_name}</p>
          {/* You can add more details or processing as needed */}
        </div>
      )}
    </div>
  );
};

export default SuperAdminPage;
