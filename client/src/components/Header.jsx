import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';
import { Link } from 'react-router-dom';



class Header extends Component{


  logout(){
    this.props.logoutUser(); 
  }

    renderContent(){
      switch(this.props.auth){
        case null:
          return;
        case false:
          return <li><a href="/auth/google">Login with Google</a></li>;
        default:
          return <li onClick={()=>this.logout()}><button style={{color: '#fff'}} className="btn-flat btn-large">Log out {this.props.auth.firstName}?</button></li>;
      }
    }

    render(){
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Emaily</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                { this.renderContent() }
              </ul>
            </div>
          </nav>
        )
    }
}

function mapStateToProps({auth}){
 console.log('auth',auth);
  return {
    auth
  }
}

export default connect(mapStateToProps,{logoutUser})(Header);