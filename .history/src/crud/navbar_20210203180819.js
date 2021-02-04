import React from 'react';
import {Nav,Form,FormControl,Button,Navbar} from "react-bootstrap";
import Read from "../crud/read";
import Create from "../crud/create";
import Uptoken from "../crud/update";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navb = () => {
    return (
        <div>
         <Router>
            <Navbar bg="light" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                <Link exact to="/navbar/create">Create</Link> &nbsp; &nbsp; &nbsp; 
                <Link exact to="/navbar/read">Read</Link>&nbsp; &nbsp; &nbsp;
                 <Link to="/navbar/update">Update</Link>&nbsp; &nbsp; &nbsp;
                </Nav>

                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

           
                <Switch>
                <Route exact path="/navbar/create" component={Create} />
                <Route exact path="/navbar/read" component={Read} />
                <Route exact path="/navbar/update" component={Uptoken} />
                


                {/* <Route exact path="/user/:id" render={(props)=>(<Update {...props} />)} > */}

                </Switch>
            </Router>
            
        </div>
    );
};

export default Navb;
