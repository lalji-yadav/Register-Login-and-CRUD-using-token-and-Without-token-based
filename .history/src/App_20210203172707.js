import './App.css';
import Login from "./auth/login";
import Register from "./auth/register";
import Reg from "./components/reg";
import Table from "./components/table";
import Update from "./components/update";

import Read from "./crud/read";
import Create from "./crud/create";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
           <Route exact path="/" component={Register} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/reg" component={Reg} />
           <Route exact path="/table" component={Table} />

           <Route exact path="/crud" component={Read} />
           <Route exact path="/create" component={Create} />
           
           <Route exact path="/user/:id" render={(props)=>(<Update {...props} />)} >

         
              
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
