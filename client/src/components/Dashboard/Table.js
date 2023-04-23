import React, { useState } from 'react';

const Table = ({ employees, handleEdit, handleDelete, handlePost }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleView = (employee) => {
    setSelectedEmployee(employee);
  };

  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: null,
  // });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Title</th>
            <th>Geolocation</th>
            {/* <th>Salary</th> */}
            {/* <th>Date</th> */}
            <th colSpan={4} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.date} </td>
                <td>{employee.title}</td>
                <td>{employee.geolocation}</td>
                {/* <td>{employee.email}</td> */}
                {/* <td>{formatter.format(employee.salary)}</td> */}
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleView(employee)}
                    className="button muted-button"
                  >
                    View
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handlePost(employee.id)}
                    className="button muted-button"
                  >
                    Post
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>There is nothing</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedEmployee && (
        <div className="view-container">
          <h2>Details</h2>
          <div>
            <strong>Date: </strong> {selectedEmployee.date}
          </div>
          <div>
            <strong>Title: </strong> {selectedEmployee.title}
          </div>
          <div>
            <strong>Geolocation: </strong> {selectedEmployee.geolocation}
          </div>
          {/* <div>
            <strong>Email: </strong> {selectedEmployee.email}
          </div> */}
          {/* <div>
            <strong>Salary: </strong>{' '}
            {formatter.format(selectedEmployee.salary)}
          </div> */}
          <div className="text-center">
            <button
              onClick={() => setSelectedEmployee(null)}
              className="button muted-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
