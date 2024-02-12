import React from "react";

class MenuUno extends React.Component {
    render() {
        return (
            <>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary justify-content-center">
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
                    <div className="collapse navbar-collapse px-2 justify-content-center" id="navbarCollapse">
                    <ul className="nav">
                        <li className="nav-item px-3">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Proyecto</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Comic</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link ">Equipo</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </>
        );
    }
}

export default MenuUno;
