import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    render() {
        return (
            <div style={{ marginTop: "5rem" }} className="container">
             

                    <div className="fixed-action-btn">
                        <Link to={'/surveys/new'} className="btn-floating btn-large red">
                            <i className="large material-icons">add</i>
                        </Link>
                    </div>


                </div>
     

        )
    }
}

export default Dashboard;