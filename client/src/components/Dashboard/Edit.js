import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [date, setDate] = useState(selectedEmployee.date);
  const [title, setTitle] = useState(selectedEmployee.title);
  const [description, setDescription] = useState(selectedEmployee.description);
  const [geolocation, setGeolocation] = useState(selectedEmployee.geolocation);
  const [image, setImage] = useState(selectedEmployee.image);


  const handleUpdate = e => {
    e.preventDefault();

    if (!date || !title || !description || !geolocation) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields except the image URL are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      date,
      title,
      description,
      geolocation,
      image,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.title}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit case</h1>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="geolocation">Geolocation</label>
        <input
          id="geolocation"
          type="text"
          name="geolocation"
          value={geolocation}
          onChange={e => setGeolocation(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          onChange={e => setImage(e.target.files[0])}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
