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
            <div class="container">
                <div class="presbox">
                    <h1>Dimtech</h1>
                    <p>The power of the dimensional technologie</p>
                    <h2>Hi,</h2>
                    <h2>Welcome on Dimtech</h2>
                    <p>Ob haec et huius modi multa, quae cernebantur in paucis, omnibus timeri sunt coepta. et ne tot malis dissimulatis paulatimque serpentibus acervi crescerent aerumnarum, nobilitatis decreto legati mittuntur</p>
                    <button>LEARN MORE</button>
                </div>
                <div class="loginbox">
                    <h2>Sign-in</h2>
                    <form>
                        <p>E-mail</p>
                        <input type="text" onChange={this.Email} placeholder="Enter Email" />
                        <p>{this.state.EmailAlert}</p>
                        <p>Password</p>
                        <input type="password" onChange={this.Password} placeholder="Enter Password" />
                        <p>{this.state.PasswordAlert}</p>
                        <button onClick={e => this.login(e)}>SIGN IN</button>
                    </form>
                    <p>Need an account ? </p>
                    <Link to="/register">Sign up</Link>

                </div>

            </div>
        );
    }
}

export default Home;