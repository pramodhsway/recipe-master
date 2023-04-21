import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAdminService, isDealerService } from "../../Services/LoginService";
import { logoutAction } from "../Actions/Login";
import "./index.css";

const NavBar = () => {
  const login = useSelector((state) => state.LogIn);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark wd-bg-color">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand mx-1 mx-md-3 mb-0 h1 wd-nav-bg-color wd-bg-text">
          <b>Recipe Master</b>
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
                <i className="fa fa-home" style={{ color: "white" }}></i>
                &nbsp;&nbsp;Home
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link className="nav-link wd-nav-bg-color" to="search/">
              <i
                    className="fa fa-search"
                    style={{ color: "white" }}
                  ></i>
                 &nbsp; &nbsp;Search
              </Link>
            </li>
            {login.logedIn && (
              <li className="nav-item active mx-3">
                <Link className="nav-link wd-nav-bg-color" to="/profile">
                  <i
                    className="fa fa-user"
                    style={{ color: "white" }}
                  ></i>
                   &nbsp;&nbsp;View Profile
                </Link>
              </li>
            )}
            {/*{login.logedIn && !isAdminService() && isDealerService() && (*/}
            {/*  <li className="nav-item active mx-3">*/}
            {/*    <Link className="nav-link wd-nav-bg-color" to="/dealer">*/}
            {/*      <i*/}
            {/*        className="fa-solid fa-coins"*/}
            {/*        style={{ color: "white" }}*/}
            {/*      ></i>*/}
            {/*      &nbsp;Dealer*/}
            {/*    </Link>*/}
            {/*  </li>*/}
            {/*)}*/}
            {/*{login.logedIn && isAdminService() && !isDealerService() && (*/}
            {/*  <li className="nav-item active mx-3">*/}
            {/*    <Link className="nav-link wd-nav-bg-color" to="/admin">*/}
            {/*      <i*/}
            {/*        className="fa-solid fa-unlock"*/}
            {/*        style={{ color: "white" }}*/}
            {/*      ></i>*/}
            {/*      &nbsp;Admin*/}
            {/*    </Link>*/}
            {/*  </li>*/}
            {/*)}*/}

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
                    className="fa fa-sign-out-alt fa-lg"
                    style={{ color: "white" }}
                  ></i>
                    &nbsp;&nbsp;Sign Out
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
                    className="fa fa-sign-in-alt fa-lg"
                    style={{ color: "white" }}
                  ></i>
                  &nbsp;&nbsp;Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
