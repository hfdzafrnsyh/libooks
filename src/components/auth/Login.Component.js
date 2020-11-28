import React from "react";
import { Link } from "react-router-dom";


class Login extends React.Component{
    render(){
        return(
     

<div className="container">
                    <div className="row justify-content-center">
                <div className="col-lg-6 mt-5 mb-5">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0 bg-white">
                        <div className="row">
                            <div className="col-sm-12  login">
                                <div className="p-5">
                                <div className="header-login">
                                    <h4><u>Login</u></h4>
                                </div>
                                <form >

                                <div className="form-group">
                                <input type="email" className="form-control" required   name="email"  placeholder="Email" ></input>
                                </div>

                                <div className="form-group">
                                <input type="password" className="form-control"  required  name="password"  placeholder="Password"  ></input>
                                </div>

                                <div className="button-login">
                                    <button type="submit" className="btn btn-danger text-white">Login</button>
                                </div>
                                    <Link to='/' >Back?</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                </div>
            </div>

     
        )
    }
}

export default Login;