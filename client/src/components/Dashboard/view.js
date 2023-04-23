import React from 'react';

const View = ({ employee, handleClose }) => {
  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: null,
  // });

  return (
    <div className="view-container">
      <h2>View Employee Details</h2>
      <div>
        <strong>Date: </strong> {employee.date}
      </div>
      <div>
        <strong>Title: </strong> {employee.title}
      </div>
      <div>
        <strong>Geolocation: </strong> {employee.geolocation}
      </div>
      {/* <div>
        <strong>Email: </strong> {employee.email}
      </div> */}
      {/* <div>
        <strong>Salary: </strong>{' '}
        {formatter.format(employee.salary)}
      </div> */}
      <div className="text-center">
        <button
          onClick={handleClose}
          className="button muted-button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default View;
