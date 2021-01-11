import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: '',
            NameAlert: '',
            EmailAlert: '',
            PasswordAlert: '',
        }

        this.Name = this.Name.bind(this);
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.register = this.register.bind(this);
    }
    Name(event) {
        this.setState({ Name: event.target.value })
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    register(e) {
        e.preventDefault();
        if (this.state.Name == '') {
            this.setState({ NameAlert: 'invalid Name' })//check name
        }
        if (this.state.Email == '') {
            this.setState({ EmailAlert: 'invalid E-mail' })//check email
        }
        if (this.state.Password == '') {
            this.setState({ PasswordAlert: 'invalid Password' })//check password
        }
        if ((this.state.Email != '') && (this.state.Password != '') && (this.state.Name != '')) {
            console.log('register');
            fetch('https://reqres.in/api/users', { //creating dummy user
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
                        localStorage.setItem('Name', JSON.stringify(this.state.Name))
                        setTimeout(() => this.props.history.push("/dashboard"), 500); //redirect to dashboard
                    }

                })
        }

    }
    render() {
        return (
            <div>
                <h2>Register Page</h2>
                <form>
                    <p>Name</p>
                    <input type="text" onChange={this.Name} placeholder="Enter Name" />
                    <p>{this.state.NameAlert}</p>
                    <p>E-mail</p>
                    <input type="text" onChange={this.Email} placeholder="Enter Email" />
                    <p>{this.state.EmailAlert}</p>
                    <p>Password</p>
                    <input type="password" onChange={this.Password} placeholder="Enter Password" />
                    <p>{this.state.PasswordAlert}</p>
                    <button onClick={e => this.register(e)}>Sign Up</button>
                </form>
                <p><Link to="/">Return home</Link></p>
            </div>
        );
    }
}

export default Register;