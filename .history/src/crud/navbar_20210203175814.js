import React from 'react';
import {Nav,NavDropdown,Form,FormControl,Button,Navbar} from "react-bootstrap";
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
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                <Link exact to="/navbar/crud">Read</Link>
                <Nav.Link href="#link">Link</Nav.Link>
                 <Link to="/uptoken">Update</Link>
                </Nav>

                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

           
                <Switch>

                <Route exact path="/navbar/crud" component={Read} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/uptoken" component={Uptoken} />
                


                {/* <Route exact path="/user/:id" render={(props)=>(<Update {...props} />)} > */}

                </Switch>
            </Router>
            
        </div>
    );
};

export default Navb;
