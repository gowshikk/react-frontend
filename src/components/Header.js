import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {


    logout()
    {
        this.props.handleLogout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WorkLog App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">                                
                                <Link className="nav-link active" aria-current="page"  to="/addLog">AddLog Form</Link>
                            </li>
                            <li className="nav-item">
                            {this.props.admin ? <span className="nav-link">Show Logs</span> : 
                                <Link className="nav-link" to="/showLog">Show Logs</Link> }
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick= { this.logout.bind(this) } >Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;