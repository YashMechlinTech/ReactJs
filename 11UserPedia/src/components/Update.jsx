import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "../Features/UserDetailsSlice";

const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (users) {
      const singleuser = users.filter((ele) => ele.id === id);
      setUpdateData(singleuser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value }); //old value and new value added .
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  console.log(updateData);

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
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            onChange={newData}
            className="form-control"
            value={updateData && updateData.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            onChange={newData}
            className="form-control"
            value={updateData && updateData.age}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={updateData && updateData.gender === "male"}
            onChange={newData}
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
            checked={updateData && updateData.gender === "female"}
            onChange={newData}
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

export default Update;
