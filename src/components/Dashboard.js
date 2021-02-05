import React from 'react';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props){
        super(props);  
      this.logout = this.logout.bind(this);
    }

    logout()
    {
        this.props.handleLogout();
    }
    render()
    {
        const username = this.props.username;
        if(username === 'admin')
        {
            return <Redirect to="/admin" />
        }
        return(
            <div>
                <h1>Welcome {this.props.username}  </h1>
                <button onClick={this.logout} >Logout</button>
            </div>
        );
    }

}

export default Dashboard;