import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAdminService, isDealerService } from "../../Services/LoginService";
import { logoutAction } from "../Actions/Login";
import "./index.css";

const Header = () => {
  const login = useSelector((state) => state.LogIn);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark wd-bg-color">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand mx-1 mx-md-3 mb-0 h1 wd-nav-bg-color wd-bg-text">
            Recipe Master
          </span>
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav wd-nav-options">
            <li className="nav-item active mx-3">
              <Link className="wd-nav-bg-color nav-link" to="/">
                <i className="fa-solid fa-house" style={{ color: "white" }}></i>
                &nbsp;Home
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link wd-nav-bg-color" to="search/">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "white" }}
                ></i>
                &nbsp;Search
              </Link>
            </li>
            {login.logedIn && (
              <li className="nav-item active mx-3">
                <Link className="nav-link wd-nav-bg-color" to="/profile">
                  <i
                    className="fa-solid fa-user"
                    style={{ color: "white" }}
                  ></i>
                  &nbsp;View Profile
                </Link>
              </li>
            )}
            {login.logedIn ? (
              <li className="nav-item active mx-3">
                <Link
                  className="nav-link wd-nav-bg-color"
                  onClick={async () => {
                    logoutAction(dispatch);
                  }}
                  to="/"
                >
                  <i
                    className="fa-solid fa-right-from-bracket"
                    style={{ color: "white" }}
                  ></i>
                  <strong> &nbsp;Logout</strong>
                </Link>
              </li>
            ) : (
              <li className="nav-item active mx-3">
                <Link
                  className="nav-link wd-nav-bg-color"
                  onClick={() => {}}
                  to="/login"
                >
                  <i
                    className="fa-solid fa-right-to-bracket"
                    style={{ color: "white" }}
                  ></i>
                  <strong> &nbsp;Login</strong>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
