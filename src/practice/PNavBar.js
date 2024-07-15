
import React, { Component } from 'react'

export default class PNavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            item1: "",
            item2: "",
            item3: "",
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{this.props.item1}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{this.props.item2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{this.props.item3}</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
