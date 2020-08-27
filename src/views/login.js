import React from 'react';

const Login = props =>{
    return(
        /* <!-- banner --> */
        <div className="banner">
            <div className="container">
                {/* <!-- form content / login area --> */}
                <div className="login-area">
                    {/* <!-- heading --> */}
                    <h3>Sign In, To Your Account</h3>
                    <form role="form" id="login-form">
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputUser1" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="checkbox form-group">
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;