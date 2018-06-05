import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className ='navbar navbar-default navbar-fixed-top'>           
                <h3>Pick a Waterfall! Keep the streak alive!</h3>
                <h4>Score: {this.props.score}</h4>
            </nav>
        )
    }
}

export default Navbar