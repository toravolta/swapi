import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  //   setTimeout(() => {
  //     props.history.push("/");
  //   }, 3000);
  // props get from withRouter higher order component on export

  return (
    <div>
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <a className="brand-logo">SWAPI</a>
          <ul className="right">
            <li>
              <Link to="/">Character</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default withRouter(Navbar);
