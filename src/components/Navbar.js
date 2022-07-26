import React,{useState} from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [btntext,setBtntext]=useState("Enable Dark Mode");

  const togglestyle=()=>{
    if(props.mode==='light'){
      setBtntext("Enable Dark Mode");
    }
    else{
      setBtntext("Enable Light Mode");
    }
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="\">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.hometext}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              onClick={props.togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${props.mode==='light'?'dark' : 'light'}`}
              htmlFor="flexSwitchCheckDefault"
              onClick={togglestyle}
            >
              {btntext}
              
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  hometext: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Navbar.defaultProps = {
  hometext: "Home text",
  title: "Title Is Here",
};
