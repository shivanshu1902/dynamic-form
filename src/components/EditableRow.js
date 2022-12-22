import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <>
      Name:
      <input
        type="text"
        required="required"
        placeholder="Enter a name..."
        name="fullName"
        value={editFormData.fullName}
        onChange={handleEditFormChange}
      />
      <br />
      Address:
      <input
        type="text"
        required="required"
        placeholder="Enter an address..."
        name="address"
        value={editFormData.address}
        onChange={handleEditFormChange}
      />
      <br />
      Phone Number:
      <input
        type="text"
        required="required"
        placeholder="Enter a phone number..."
        name="phoneNumber"
        value={editFormData.phoneNumber}
        onChange={handleEditFormChange}
      />
      <br />
      Email:
      <input
        type="email"
        required="required"
        placeholder="Enter an email..."
        name="email"
        value={editFormData.email}
        onChange={handleEditFormChange}
      />
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </>
  );
};

export default EditableRow;