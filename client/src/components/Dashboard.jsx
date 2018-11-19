import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
            <div style={{ marginTop: "5rem" }} className="container">
                <div className="row">


                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Sample Email Survey</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to={'/surveys'}>This is a link</Link>
                                <Link to={'/surveys'}>This is a link</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m7">
                        <h2 className="header">Horizontal Card</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img alt="" src="https://lorempixel.com/100/190/nature/6" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                    <Link to={'/surveys'}>This is a link</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Dashboard;