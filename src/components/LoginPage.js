import React from "react";
import './CSS/Login.css'

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isAdmin: false,
      isUser:false,
      loginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      this.setState({ isAdmin: true })
    } else {
      this.setState({ isUser: true })
    }
    this.props.handleLogin(username);
    alert("LogeedIn");
  }

  render() {
    return (
      <div><br />

        <form onSubmit={this.handleSubmit}>

          <h3>Log In Here</h3>

          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter Username" required/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;