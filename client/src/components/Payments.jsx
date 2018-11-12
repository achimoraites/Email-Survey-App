import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { handleToken } from '../actions/index';

class Payments extends Component{

    render(){
        return(
            <StripeCheckout
            name = "Emaily"
            description = "Only 5$ for 5 email credits!"
            amount = {500} // cents
            token = {token => this.props.handleToken(token)}
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn btn-credits">Add Credits </button>
            </StripeCheckout>
        )
    }
}

  


export default connect(null,{handleToken})(Payments);