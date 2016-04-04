

import React, { Component } from 'react';
import FYNAB from 'figo-to-ynab';
import { Button } from 'react-bootstrap';
require("./styles/style.scss");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      apiKey: "",
      apiSecret: ""
    }
  }
  onChange = (state) => {
    this.setState(state);
  };
  handleChange = (event) => {
    this.setState({apiKey: event.target.value});
    console.log(this.state.apiKey);
  };
  render() {
    var self = this;
    return (
          <div className="container">
            <form className="form-signin">
              <h2 className="form-signin-heading">Please insert data</h2>
              <label htmlFor="inputAPIKey" className="sr-only">API Key</label>
              <input type="apikey" id="inputAPIKey" value={self.state.apiKey} onChange={self.handleChange.bind(self)} className="form-control" placeholder="API Key" required autofocus></input>
                <label htmlFor="inputAPISecret" className="sr-only">API Secret</label>
                <input type="apisecret" id="inputAPISecret" className="form-control" placeholder="API Secret" required></input>
              <label htmlFor="inputUsername" className="sr-only">Email</label>
              <input type="email" id="inputUsername" className="form-control" placeholder="Email" required></input>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                  <button className="btn btn-lg btn-primary btn-block" onClick={self.getCSVs}>Download</button>
            </form>
          </div>
    );
  }
  getCSVs = (event) => {
    event.preventDefault();
    var figoYnab = new FYNAB(this.state.apiKey, this.state.apiSecret, this.state.username, this.state.password);
    figoYnab.YNABcsvs(new Date('2016-03-30'), null, (err, csvs) => {
      if (err) {
        return;
      }
      alert(csvs[0]);
    });
  }

}
