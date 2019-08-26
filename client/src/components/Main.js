import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import API from '../utils/API';
import Cards from './Cards'

class Main extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/');
      })
      .catch(err => alert(err));
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control"
                      placeholder="Email goes here..."
                      name="email"
                      type="email"
                      id="email"
                      onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input className="form-control"
                      placeholder="Password goes here..."
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={this.handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control"
                      placeholder="Username goes here..."
                      name="username"
                      type="text"
                      id="username"
                      onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control"
                      placeholder="Email goes here..."
                      name="email"
                      type="email"
                      id="email"
                      onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input className="form-control"
                      placeholder="Password goes here..."
                      name="password"
                      type="password"
                      id="pwd"
                      onChange={this.handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>


        <Cards />


        {/* <p><Link to="/login">Go to Login</Link></p> */}
      </div>
    );
  }
}

export default Main;