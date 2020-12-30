import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    <p>E-mail</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="text" />
                    <p>keep me logged</p>
                    <p><Link to="/forgotpassword">Forgot your password ?</Link></p>
                    <button>SIGN IN</button>
                    <p>Need an account ? sign up</p>

                </div>

            </div>
        );
    }
}

export default Home;