import React, { Component } from 'react';


class Landing extends Component {

    render() {
        return (
            <div className="landing">
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 style={{color: '#4ed9d2'}} className="header center">Emaily</h1>
                        <div className="row center">
                            <h5 className="header col s12 light"> Get faster feedback from your customers , by bombarding their inbox with questions</h5>
                        </div>
                        <div className="row center">
                            <a style={{backgroundColor:'#2aa538'}} href="/auth/google" id="download-button" className="btn-large waves-effect waves-light">Join US</a>
                        </div>
                    </div>
                </div>

                <div style={{width: '95%'}} className="container">
            <div className="section">
              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block center">
                  <i className="medium material-icons">blur_on</i>
                    <h5 className="center">Easy Data Collection</h5>
                    <p className="light">We collect all the 
                     information you need for a successful survey.
                    </p>
                    
                  </div>
                </div>
        
                <div className="col s12 m4">
                  <div className="icon-block center">
                  <i className="medium material-icons">assessment</i>
                    <h5 className="center">User Experience Focused</h5>
                    <p className="light">Our dedicated team of 'zombie' scientists have  researched the best ways to trap your audience!</p>
                  </div>
                </div>
        
                <div className="col s12 m4">
                  <div className="icon-block center">
                  <i className="medium material-icons">mood</i>
                    <h5 className="center">Easy to work with</h5>      
                    <p className="light">You are just a click away from <del>wasting your money</del> your next successful survey!</p>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
            </div>
        )
    }
}

export default Landing;