import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            pic: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png',

        }

    }
    componentDidMount() {
        const Name = localStorage.getItem('Name')
        const pict = localStorage.getItem('Avatar')
        if (Name) {
            var name = Name.replace(/['"]+/g, '')
            var picture = pict.replace(/['"]+/g, '')
            this.setState({ Name: name });
            this.setState({ pic: picture });

        }
    }
    render() {
        return (
            <div className="dashcontainer">
                <div className="username">
                    <h2>Welcome {this.state.Name}</h2>
                </div>
                <div className="container">
                    <div className="picsandinfos">
                        <p>profile pic and infos</p>
                        <img className="pic"
                            src={this.state.pic}
                            alt="profile picture"></img>
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