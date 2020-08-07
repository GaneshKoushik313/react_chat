import React,{useState,useEffect} from "react"
import axios from "axios";
import cookie from 'react-cookies'
import { Link, useHistory } from "react-router-dom";
import '.././css/login.css'

function Login(){
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    useEffect(() => {
        // if(cookie){
        //     history.push('/')
        // }
    })
    let loginUser = async () => {
        try {
            const {data} = await axios({
                method: 'post', //you can set what request you want to be
                url: `chat/users/login`,
                data: user,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log(data.token);
            localStorage.setItem('store_user',JSON.stringify(data));
            cookie.save('Token', data.token, { path: '/' })
            history.push("/");
            // run some validation before returning
            return data;
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    } 
    return(
        <div className="login-form">
            <div className = "login-form-wrapper">
                <div className="login-card">
                    <h4 className="login-title">LOGIN</h4>
                    <form className="d-flex mt-4 justify-content-center">
                        <div className="w-100 ml-10 mr-10">
                            <div className="form-group">
                                <label className="text-left d-block fs-14">Email Address</label>
                                <input value={user.email} onChange={e => setUser({...user,email:e.target.value})} className="form-control login" placeholder="Email Address" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="text-left d-block fs-14">Password</label>
                                <input value={user.password} onChange={e => setUser({...user,password:e.target.value})} className="form-control login" type="password" placeholder="Password" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-primary ml-1 pointer fs-14">Forgot Password?</span>
                                <button className="btn btn-link btn-smm fs-14 pull-right d-block pointer" onClick={loginUser} type="button">Login</button>
                            </div> 
                            <hr className="hr-line"></hr>   
                            <span className="fs-14">New User?<Link to="/register" className="text-primary ml-1 pointer">Register</Link></span>
                        </div>
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default Login