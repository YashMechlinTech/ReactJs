import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

function Update() {
  const { id } = useParams();
  //returns the id
  const allusers = useSelector((state) => state.app.users);
  console.log(allusers);
  const singleuser = allusers.filter((ele) => ele.id === id);
  console.log(singleuser);
  return (
    <div className="my-2">
      <h2>Edit the in Form</h2>
      <form className="w-50 p-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={singleuser[0].name}
            //   onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            //   onChange={getUserData}
            className="form-control"
            value={singleuser[0].email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            //   onChange={getUserData}
            className="form-control"
            value={singleuser[0].age}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            //   onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="gender"
            value="female"
            type="radio"
            //   onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary" navigate="/read">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
