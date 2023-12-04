// ConsultantList.js
import React from 'react';

const ConsultantList = ({ consultants }) => {
  return (
    <div>
      <h2>Consultants</h2>
      <ul>
        {consultants.map((consultant) => (
          <li key={consultant.id}>{consultant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultantList;
