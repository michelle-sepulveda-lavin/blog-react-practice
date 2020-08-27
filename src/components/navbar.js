import React from 'react';
import { withRouter,Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <header>
            {/* <!-- navigation --> */}
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/#"><img className="img-responsive" src="img/logo.png" alt="Logo" /></a>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li className="dropdown">
                                <Link to="/#" className="dropdown-toggle" data-toggle="dropdown">Menu <span className="caret"></span></Link>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="#event">Events</Link></li>
                                    <li><Link to="#blog">New Blogs</Link></li>
                                    <li><Link to="#subscribe">Subscribe</Link></li>
                                    <li><Link to="#team">Executive Team</Link></li>
                                    <li><Link to="/#">One more separated link</Link></li>
                                </ul> 
                            </li>
                        </ul>
                    </div>{/* <!-- /.navbar-collapse --> */}
                </div>{/* <!-- /.container-fluid --> */}
            </nav>
        </header>
    )
}

export default withRouter(Navbar);