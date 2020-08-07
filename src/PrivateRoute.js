import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

let currentTime;
let decoded;

if (localStorage.store_user) {
    const token = JSON.parse(localStorage.getItem('store_user'));

    // Decode token and get user info and exp
    decoded = jwt_decode(token.token);
    console.log(decoded)

    // check for expired token
    currentTime = Date.now() / 1000;
}

const PrivateRoute = ({ component: Component, auth, ...rest }) => 
    (
        <Router>
            <Route { ...rest } render = {props => (decoded && decoded.exp < currentTime) || !localStorage.store_user ? (<Redirect to={{ pathname: '/login',state: { from: props.location }}}/>) : (<Component { ...props } />)}/>
        </Router>
    )

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

export default PrivateRoute;