import React, { useState } from "react"
import axios from "axios";
import '.././css/register.css'
import { Link } from "react-router-dom";

function Register(){
    const [user,setUsers] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        phone:0,
        gender:''
    })
    let registerUser = async () => {
        try {
            const { data } = await axios({
                method: 'post', //you can set what request you want to be
                url: `chat/users/register`,
                data: user,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // run some validation before returning
            return data;
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }

    let checkEmailValidity = async (e) => { 
        try {
            let user_email = setUsers({ ...user,email: e.target.value })
            const {data} = await axios({
                method: 'post',
                url: `chat/users/check_email`,
                data: user_email,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return data;
        } catch (e) {
            console.log(e);
            return console.log('Error')
        }
    }
    
    return(
        <div className="register-form">
            <div className = "register-form-wrapper">
                <div className="register-card">
                    <h4 className="register-title">REGISTER</h4>
                    <form className="d-flex mt-4">
                        <div className="content-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left d-block fs-14">First Name</label>
                                        <input value={user.first_name} onChange={e => setUsers({...user,first_name: e.target.value })} className="form-control register" placeholder="First Name" type="text" />
                                    </div>
                                </div>
                                <div className = "col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left d-block fs-14">Last Name</label>
                                        <input value={user.last_name} onChange={e => setUsers({...user,last_name: e.target.value })} className="form-control register" type="text" placeholder="Last Name" />
                                    </div>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left d-block fs-14">Email Address</label>
                                        <input value={user.email} onChange={checkEmailValidity} className="form-control register" placeholder="Email Address" type="text" />
                                    </div>
                                </div>
                                <div className = "col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left d-block fs-14">Password</label>
                                        <input value={user.password} onChange={e => setUsers({...user,password: e.target.value })} name="user.password" className="form-control register" type="password" placeholder="Password" />
                                    </div>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left d-block fs-14">Phone Number</label>
                                        <input value={user.phone} onChange={e => setUsers({...user,phone: e.target.value })} name="user.phone" className="form-control register" placeholder="Phone Number" type="number" />
                                    </div>
                                </div>
                                <div className = "col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group text-left">
                                        <label className="d-block fs-14">Gender</label>
                                        < div className = "form-check form-check-inline mt-1" >
                                            <label className = "form-check-label d-flex align-items-center pointer"> 
                                                <input value="Male" onChange={e => setUsers({...user,gender: e.target.value })} className="form-check-input" type="radio" name="user.gender" />
                                                <span className="radio-icon"></span>
                                                <span className="form-check-description fs-14">Male</span>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ml-0">
                                            <label className="form-check-label d-flex align-items-center pointer">
                                                <input value="Female" onChange={e => setUsers({...user,gender: e.target.value })} className="form-check-input" type="radio" name="user.gender" />
                                                <span className="radio-icon" > </span>
                                                < span className="form-check-description fs-14">Female</span>
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline ml-0">
                                            <label className="form-check-label d-flex align-items-center pointer">
                                                <input value="Custom" onChange={e => this.setUsers({...user,gender: e.target.value })} className="form-check-input" type="radio" v-model="gender" name="user.gender" />
                                                <span className="radio-icon"></span>
                                                <span className="form-check-description fs-14">Custom</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <button className="btn btn-link btn-smm fs-14 pull-right d-block pointer" onClick={registerUser} type="button">Register</button>
                            </div> 
                            <hr className="hr-line content-center mt-3"></hr>   
                        </div>
                    </form>
                    <span className="fs-14 mt-2 d-block">Already User?<Link to="/" className="text-primary ml-1 pointer">Login</Link></span>
                </div>
            </div>    
        </div>
    )
}

export default Register