import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <h2>Register Page</h2>
                <Link to="/">Return home</Link>
            </div>
        );
    }
}

export default Register;