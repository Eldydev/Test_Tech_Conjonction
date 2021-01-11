import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <div className="dashcontainer">
                <div className="username">
                    <h2>name</h2>
                </div>
                <div className="container">
                    <div className="picsandinfos">
                        <p>profile pic and infos</p>
                        <p className='pic'>pic</p>
                        <p className='infos'>info</p>
                    </div>
                    <div className="seriesdisplay">
                        <p className='series'>members series infos</p>
                    </div>
                </div>
                <Link to="/">Return home</Link>
            </div>
        );
    }
}

export default Dashboard;