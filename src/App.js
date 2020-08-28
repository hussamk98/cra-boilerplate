import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar/>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' render={props => (
                            <Fragment>
                                <h2>Create react app - boilerplate</h2>
                                <Home/>
                            </Fragment>
                        )}/>
                        <Route exact path='/about' component={About}/>
                    </Switch>
                </div>
            </Fragment>
        </Router>
    );
}

export default App;
