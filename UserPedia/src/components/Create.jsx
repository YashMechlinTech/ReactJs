import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createuser } from "../Features/UserDetailsSlice";
import { useNavigate } from "react-router";
const Create = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  //creating dispatch to send data to api through the handle submit button function
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(users);
    e.preventDefault(); //prevents the page from loading again
    dispatch(createuser(users)); //this function is dispatched from the userdetails slice
    navigate("/read");
  };
  //set the value of new users
  return (
    <div className="my-2">
      <h2>Fill the Data in Form</h2>
      <form className="w-50 p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            onChange={getUserData}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            onChange={getUserData}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={getUserData}
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
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
