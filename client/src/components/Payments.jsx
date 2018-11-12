import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component{

    render(){
        return(
            <StripeCheckout
            name = "Emaily"
            description = "Only 5$ for 5 email credits!"
            amount = {500} // cents
            token = {token => console.log('token',token)}
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            />
        )
    }
}

export default Payments;