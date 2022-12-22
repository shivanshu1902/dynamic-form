import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <div>Name:- {contact.fullName}</div>
      <div>Address:- {contact.address}</div>
      <div>Phone:- {contact.phoneNumber}</div>
      <div>Email:- {contact.email}</div>

      <button
        type="button"
        onClick={(event) => handleEditClick(event, contact)}
      >
        Edit
      </button>
      <button type="button" onClick={() => handleDeleteClick(contact.id)}>
        Delete
      </button>
    </>
  );
};

export default ReadOnlyRow;
