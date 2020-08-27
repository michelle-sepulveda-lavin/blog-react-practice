import React from 'react';

const SignUp = props => {
    return (
        /* <!-- banner --> */
        <div className="banner">
            <div className="container">
                {/* <!-- form content / register area --> */}
                <div className="register-area">
                    {/* <!-- heading --> */}
                    <h3>Sign Up, For An Account</h3>
                    <form role="form" id="register-form">
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-info">
                                    <input type="radio" name="options" id="option1" /> Male
									</label>
                                <label className="btn btn-info">
                                    <input type="radio" name="options" id="option2" /> Female
									</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-Password" />
                        </div>
                        <div className="checkbox form-group">
                            <label>
                                <input type="checkbox" /> I agree with all terms and conditions.
								</label>
                        </div>
                        <button type="submit" className="btn btn-default">SignUp</button>&nbsp;
							<button type="reset" className="btn btn-default">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;