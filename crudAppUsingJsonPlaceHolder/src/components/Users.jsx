import React from "react";
import '../App.css'
function Users({ id, name, email,onDelete }) {
  const handleDelete=()=>{
    onDelete(id);
  }
  return (
    <div className="List">
      <span>{id}</span>
      <span>{name}</span>
      <span>{email}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Users;
