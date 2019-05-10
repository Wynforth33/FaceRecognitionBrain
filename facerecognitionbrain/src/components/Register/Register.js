import React, { Component } from 'react';

class Register extends Component {
   constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onSubmitRegister = () => {
    const { onRouteChange, loadUser } = this.props;
    const { name, email, password } = this.state; 
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then( resp => resp.json())
      .then( user => {
        if ( user.id ) {
          loadUser(user);
          onRouteChange('home'); 
        } else {
          this.setState({
            email: '',
            password: '',
            name: ''
          })
        }
      })  
  }

  render(){
    const { name, email, password } = this.state;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 center">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Name</label>
                <input 
                    onChange={this.onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="name"
                    value={name}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Email</label>
                <input 
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    value={email}
                 />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Password</label>
                <input 
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password"
                    value={password}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                  onClick={this.onSubmitRegister} 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Register" 
              />
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default Register; 