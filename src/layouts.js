import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './views/index';
import SignUp from './views/signup';
import Login from './views/login';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import injectContext from './store/appContext';

const Layouts = props => {
    return (
        <>
            <BrowserRouter>
                <div className="wrapper">
                    <Navbar />
                    <Switch>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                        {/* <Route exact path="/event/:id" component={EventDetail} /> */}
                        <Route exact path="/" component={Index} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>

        </>
    )
}

export default injectContext(Layouts);