import React from 'react';
import { withRouter,Link } from 'react-router-dom';

const Footer = ({location}, ...props) => {
    return (
        <footer className={(location.pathname === '/login' || location.pathname === '/signup' ? "ffoot" : "")}>
            <div className="container">
                <p><Link to="/">Home</Link> | <a href="#work">works</a> | <a href="#team">Team</a> | <a href="#contact">Contact</a></p>
                <div className="social">
                    <a href="/#"><i className="fab fa-facebook"></i></a>
                    <a href="/#"><i className="fab fa-twitter"></i></a>
                    <a href="/#"><i className="fab fa-dribbble"></i></a>
                    <a href="/#"><i className="fab fa-linkedin"></i></a>
                    <a href="/#"><i className="fab fa-google-plus"></i></a>
                </div>
                {/* <!-- copy right --> */}
                {/* <!-- This theme comes under Creative Commons Attribution 4.0 Unported. So don't remove below link back --> */}
                <p className="copy-right">Copyright &copy; 2014 <a href="/#">Your Site</a> | Designed By : <a href="http://www.indioweb.in/portfolio">IndioWeb</a>, All rights reserved. </p>
            </div>
        </footer>
    )
}

export default withRouter(Footer);