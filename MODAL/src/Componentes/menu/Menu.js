import React from "react";
 
class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary ">
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-2" id="navbarCollapse">
          <ul className="navbar-nav nav justify-content-center">
            <li className="nav-item active">
              <a className="nav-link px-2" href="#">
                Inicio <span className="sr-only px-2"></span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link px-2" href="#">
                Proyecto
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link px-2" href="#">
                Comic
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link px-2" href="#">
                Equipo
              </a>
            </li>
          </ul>
         
        </div>
      </nav>
    );
  }
}
 
export default Menu;
