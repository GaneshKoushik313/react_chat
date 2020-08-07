import React,{useEffect,useState} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import cookie from 'react-cookies'
import store from './redux/store';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute'
/* eslint-disable react/prop-types */
function App() {
    const [token,setCookie] = useState()
    useEffect(() => {
        load()
    })
    let load = async () => {
       setCookie(cookie.load('Token'))
    }
    return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Switch>    
                            <Route path="/login" exact component={Login} />
                            <Route path="/register" exact component={Register} />
                            <PrivateRoute path="/" component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </Provider>  
    );
}

export default App;
