import { NavLink } from "react-router-dom";
import home from "../assets/home.png";
import notification from "../assets/notification.png";
import message from "../assets/message.png";
import profile from "../assets/profile.png";
import createPost from "../assets/createpost.png";


export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <svg className="bi" width="30" height="24">
            <use xlink:Href="#bootstrap"></use>
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2024 Company, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlink:Href="#twitter"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlink:Href="#instagram"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlink:Href="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
