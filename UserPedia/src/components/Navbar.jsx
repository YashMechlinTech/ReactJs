import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <u>UserPedia</u>
          </a>

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  create Post{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All posts
                </a>
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
