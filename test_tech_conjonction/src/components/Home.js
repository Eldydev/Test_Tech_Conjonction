import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            EmailAlert: '',
            PasswordAlert: '',
        }

        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(e) {
        e.preventDefault();
        if (this.state.Email == '') {
            this.setState({ EmailAlert: 'invalid E-mail' })//check email
        }
        if (this.state.Password == '') {
            this.setState({ PasswordAlert: 'invalid Password' })//check password
        }
        if ((this.state.Email != '') && (this.state.Password != '')) {
            console.log('register');
            fetch('https://reqres.in/api/login', { //creating dummy user
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    email: this.state.Email,
                    password: this.state.Password
                })

            }).then((Response) => Response.json())
                .then((result) => {
                    console.log(result);
                    if (!result.error) {
                        setTimeout(() => this.props.history.push("/dashboard"), 500); //redirect to dashboard
                    }
                    else
                        this.setState({ EmailAlert: 'non registered user' });

                })
        }

    }
    render() {
        return (
            <div className="container">
                <div className="presbox">
                    <div className="SiteNameBox">
                        <p className="SiteTitle"><b>Dim</b>tech</p>
                        <p className="desc">The power of the dimensional technologie</p>
                    </div>
                    <div className="SiteHelloBox">
                        <p>Hi, <br></br>Welcome on Dimtech.</p>
                    </div>
                    <div className="SitePresBox">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button>LEARN MORE</button>
                    </div>

                </div>
                <div className="loginbox">
                    <h2>Sign-in</h2>
                    <form>
                        <p className="InputTitle">E-mail</p>
                        <input type="text" onChange={this.Email} placeholder="Enter Email" />
                        <p>{this.state.EmailAlert}</p>
                        <p className="InputTitle">Password</p>
                        <input type="password" onChange={this.Password} placeholder="Enter Password" />
                        <p>{this.state.PasswordAlert}</p>
                        <input type="checkbox" name="keep me logged" />
                        <label>keep me logged</label>
                        <Link className="linkpassword" to="/forgotpassword">forgot you password ?</Link><br></br>
                        <button onClick={e => this.login(e)}>SIGN IN</button>
                    </form>
                    <p>Need an account ?<Link className="linkSignup" to="/register">Sign up</Link></p>


                </div>

            </div>
        );
    }
}

export default Home;