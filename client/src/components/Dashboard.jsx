import React, { Component } from 'react';

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
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m7">
                        <h2 class="header">Horizontal Card</h2>
                        <div class="card horizontal">
                            <div class="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" />
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
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