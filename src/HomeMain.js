import React, { Component } from 'react'
import fire from './config/Fire'
import Home from './Home'
import UserTable from './UserTable'
import {Navbar,Nav} from 'react-bootstrap'
import Piechart from './UserPieChart'
import Chart from './UersChart'
import Welcome from './Welcome'
import Login from './Login'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Main extends Component {
    logOutHandle = () =>{
        fire.auth().signOut();
    }
    
    render() {
        return (
            
            <Router>
            <div className="App">
            <Navbar bg="#003350" expand="lg">
                <Navbar.Brand href={"/mainhome/"}><b>Leave Request</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/mainhome/home">LeaveApply</Nav.Link>
                            <Nav.Link href="/mainhome/user-table">UserTable</Nav.Link>
                            <Nav.Link href="/mainhome/piechart">PieChart</Nav.Link>
                            <Nav.Link href="/mainhome/">Chart</Nav.Link>
                            <Nav.Link onClick={this.logOutHandle} href="/sign-in">SignOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            {/* <div className="auth-wrapper">
                <div className="auth-inner"> */}
                <Switch>
                    <Route path="/mainhome/home" component={Home} />
                    <Route path="/mainhome/user-table" component={UserTable} />
                    <Route path="/mainhome/piechart" component={Piechart} />
                    <Route path="/mainhome/" component={Chart} />
                    {/* <Route exact path="/mainhome/" component={Welcome} /> */}
                    <Route path="/sign-in" component={Login} />
                   
                </Switch>
                {/* </div>
            </div> */}
            </div>
        </Router>
            
        )
    }
}
