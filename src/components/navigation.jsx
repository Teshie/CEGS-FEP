import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
  const navigate = useHistory();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            E-Government System
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              {/* <a href='#login' id="loginn" className='page-scroll'>
                Sign In
              </a> */}
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a href="#" className="page-scroll">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
