import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Forgotpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <h2>password recovery page</h2>
                <Link to="/">Return home</Link>
            </div>
        );
    }
}

export default Forgotpassword;