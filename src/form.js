/* Component Name: form
 * Purpose: The Login page that users use to access other pages
 * Props: None
 */

import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import './form.css'
import validator from 'validator' 
import Dashboard from './dashboard.js'


export default class Form extends Component {  
  /* constructor that sets state and binds this */
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      password: "",
      address: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);

  }

  /* emailIsValid
   * Parameters: the email that it takes in to check
   * Does: Returns bool saying whether the email is Valid 
   */
  emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  /* numberIsValid
   * Parameters: the number that it takes in to check
   * Does: Returns bool saying whether the number is Valid –
   */
  numberIsValid(number) {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
  }


  /* handleInputChange()
   * Parameters: input change event
   * Does: sets state to reflect what is in the input box of the
   *       given name (either email, password and confirmpassword)  
   */
  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  /* handleNewUser()
   * Parameters: None
   * Does: Does input validation to see if all inputs are both filled and valid. 
   */
  async handleNewUser(event) {
    event.preventDefault();
    // empty field validation 
    if (this.state.email === "" || this.state.password === "" || this.state.number === ""
        || this.state.address === "" || this.state.name === "") {
      this.setState({emptyError: true, emailValidError: false, numberValidError: false});
      return;
    } else {
      this.setState({emptyError: false});
    }

    // email validity (make sure email has @ and .)
    if (!this.emailIsValid(this.state.email)) {
      this.setState({validEmail: true});
      return;
    } else {
      this.setState({validEmail: false});
    }
    
    if (!this.numberIsValid(this.state.number)) {
      this.setState({validNumber: true});
      return;
    } else {
      this.setState({validNumber: false});
    }
    this.setState({loggedin: true}, () => {
      return this.state.name;
    })
  
  }

    
  /* renders form for creating an account with options to load verification messages
   * if the state is correctly set. 
   */
  render() {
    if (this.state.loggedin) {
      return <Dashboard name={this.state.name}/>
    }
    return (
      <div class = "background">
          <div class = "loginrow">
                     <h1> Welcome! Please Create an account</h1>
                     <form onSubmit={this.handleNewUser}> 
                            <div id = "userandpass">
                                Name: <input type = "text" 
                                              name = "name" 
                                              className = "logininput" 
                                              placeholder = "Name" 
                                              value = {this.state.name}
                                              onChange={this.handleInputChange}/> 
                                <br />
                                Email: <input type = "text" 
                                            name = "email" 
                                            className = "logininput" 
                                            placeholder = "Email" 
                                            value = {this.state.email}
                                            onChange={this.handleInputChange}/> 
                              <br />
                              Address: <input type = "text" 
                                            name = "address" 
                                            className = "logininput" 
                                            placeholder = "Address" 
                                            value = {this.state.address}
                                            onChange={this.handleInputChange}/> 
                              <br />
                              Phone Number: <input type = "text" 
                                            name = "number" 
                                            className = "logininput" 
                                            placeholder = "Phone Number" 
                                            value = {this.state.number}
                                            onChange={this.handleInputChange}/> 
                              <br />
                                Password: <input type = "password" 
                                          name = "password"
                                          className = "logininput" 
                                          value = {this.state.password}
                                          placeholder = "Password" 
                                          onChange={this.handleInputChange} />
                            </div>
                            {
                              this.state.emptyError &&
                              <span style={{color: 'red'}}> All fields must be filled before submitting </span>
                            }

                            {
                              this.state.validNumber &&
                              <span style={{color: 'red'}}> Please make sure your number is valid. </span>
                            }
                            
                            {
                              this.state.validEmail &&
                              <span style={{color: 'red'}}> Please make sure your email is valid. </span>
                            }
                        <br /> <br />
                        <input type = "button" onClick={this.handleNewUser} id = "loginbutton" value = "Submit"/>
                      </form>
                 </div>
                 </div>
    )
  }
}

