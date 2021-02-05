import React, { Fragment } from 'react';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import WorkLogForm from './components/WorkLogForm';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import GetLog from './components/GetLog';
import AdminPage from './components/AdminPage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isloggedIn: false,
      isAdmin : false,
      toUpdateData: [
        {
          name: 'Gowshik',
          position : 'PAT',
          project : 'GSSP',
          logDetails: [{
            log: 'Completed the User story 1 today with unit testing',
            hours: 8,
            date: new Date().toISOString()
          }]

        },
        {
          name: 'Bharath',
          position : 'PA',
          project : 'GSSP',
          logDetails: [{
            log: 'Conducted interview for PAT',
            hours: 2,
            date: new Date().toISOString()
          }]

        },

        {
          name: 'Joel Solomon',
          position : 'PAT',
          project : 'MetLife',
          logDetails: [{
            log: 'Completed Testing fr UI',
            hours: 5,
            date: new Date().toISOString()
          }]

        },
        {
          name: 'Logesh',
          position : 'SR.Associate',
          project : 'GSSP',
          logDetails: [{
            log: 'Training session for PAT',
            hours: 4,
            date: new Date().toISOString()
          }]

        },
        
        {
          name: 'Gowtham',
          position : 'Associate',
          project : 'GSSP',
          logDetails: [{
            log: 'Completed the User story 2',
            hours: 6,
            date: new Date().toISOString()
          }]

        },
        {
          name: 'Murali',
          position : 'SR.Associate',
          project : 'Metlife',
          logDetails: [{
            log: 'Completed the User story 3',
            hours: 5,
            date: new Date().toISOString()
          }]

        }
      ]
    }

  }

  login(username) {
    if(username === 'admin')
    {
      this.setState({isAdmin : true})
    }
    this.setState({
      username: username,
      isloggedIn: true
    })
  }

  logout() {
    this.setState(
      {
        isloggedIn: false,
        isAdmin : false
      }
    )
  }

  logSubmit(data) {
    this.setState({ toUpdateData: [...this.state.toUpdateData, data] })
    console.log("SUBMITTED------>")
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Header handleLogout={this.logout.bind(this)} admin = {this.state.isAdmin} />
            <div className="container">
              <Switch>
                <Route exact path="/" render={() => (this.state.isloggedIn) ? <Dashboard username={this.state.username} handleLogout={this.logout.bind(this)} /> : <LoginPage handleLogin={this.login.bind(this)} />}></Route>
                <Route exact path="/addLog" render={() => (this.state.isloggedIn) ? <WorkLogForm username={this.state.username} onFormSubmit={this.logSubmit.bind(this)} /> : <Redirect to='/' />}></Route>
                <Route exact path="/showLog" render={() => (this.state.isloggedIn) ? <GetLog username={this.state.username} logData={this.state.toUpdateData} /> : <Redirect to='/' />}></Route>
                <Route exact path="/admin" render={() => (this.state.isloggedIn) ? <AdminPage username={this.state.username} logData={this.state.toUpdateData} handleLogout={this.logout.bind(this)} /> : <Redirect to='/' />}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>

      </div>
    );
  }

}

export default App;
