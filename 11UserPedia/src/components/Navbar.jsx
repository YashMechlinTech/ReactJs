import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { users } = useSelector((state) => state.app);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>UserPedia</b>
          </Link>

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" href="#">
                  create user
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link" href="#">
                  All Users ({users.length})
                </Link>
              </li>
            </ul>

            <input
              className="form-control me-2 w-50 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
