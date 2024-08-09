import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../Features/UserDetailsSlice";
import { Link } from "react-router-dom";
import { deleteUser } from "../Features/UserDetailsSlice";
const Read = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  const { users, loading } = useSelector((state) => state.app);

  return (
    <>
      {loading ? <h1>Users are loading </h1> : <></>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          margin: "1px",
        }}
      >
        {users.map((ele) => (
          <div key={ele.id}
            className="card"
            style={{ width: "18rem", display: "flex", alignItems: "center" }}
          >
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <h6 className="card-text">{ele.age}</h6>
              <h6 className="card-text">{ele.email}</h6>
              <h6 className="card-text">{ele.gender}</h6>
            </div>
            <div className="card-actions" >
                <Link to={`/edit/${ele.id}`}> Edit </Link>
                <button  onClick={()=>dispatch(deleteUser(ele.id))} >Delete</button>
              </div>
          </div>
        ))}
         
        
      </div>
    </>
  );
};

export default Read;
