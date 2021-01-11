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
            Array1: [],
            Array2: [],
            UserArray: [],
        }

        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() { //focntion au chargement de la page
        fetch('https://reqres.in/api/users') //recuperation des informations de tout les users
            .then(res => res.json())

            .catch(error => console.error('Error: ', error))

            .then(result => {
                this.setState({ Array1: result.data })
            });
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())

            .catch(error => console.error('Error: ', error))

            .then(result => {
                this.setState({ Array2: result.data })
                this.Concatarray();
            })

    }
    Concatarray() {
        this.setState({ UserArray: this.state.Array1.concat(this.state.Array2) }) //concatenation des Array users
        console.log(this.state.UserArray); 
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
            this.state.UserArray.forEach((user) => {
                if (user.email === this.state.Email) { //comparaison des users pour verifier que l'email corresponds aux infos du formulaires
                    console.log("match")
                    localStorage.setItem('Name', JSON.stringify(user.first_name)) // stockage des infos en localstorage
                    localStorage.setItem('Avatar', JSON.stringify(user.avatar))
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
