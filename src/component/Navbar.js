import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "white",
  //   backgroundColor: "#232D3F",
  // });
  // const toggleMode = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //       color: "#232D3F",
  //       backgroundColor: "white",
  //     });
  //   } else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "#232D3F",
  //     });
  //   }
  // };

  return (
    <div light>
      <nav className="navbar navbar-expand-lg bg-body-dark" light>
        <div className="container-fluid" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
          <a className="navbar-brand" href="/" light style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
            {props.title}
          </a>
          <button
            className="navbar-toggler btn1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item dmn1">
                <a
                  className="nav-link active dmn1"
                  aria-current="page"
                  href="/"
                  light  style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}
                >
                  Home
                </a>
              </li>
              <li className="nav-item" light >
                <a className="nav-link dmn1" href="/" light style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
                  Link
                </a>
              </li>
              <li className="nav-item dropdown" light>
                <a
                  className="nav-link dropdown-toggle dmn1"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  light style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dmn1" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
                  <li>
                    <a className="dropdown-item" href="/" light style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" light style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" light />
                  </li>
                  <li>
                    <a className="dropdown-item" light href="/" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}>
                      Something else here
                    </a>
                  </li>

                  
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled dmn1"
                  href="/"
                  aria-disabled="true"
                  light style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#232D3F'}}
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary btn1" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
};
