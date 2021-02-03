import logo from './logo.svg';
import './App.css';
import Login from "./auth/login";
import Register from "./auth/register";
import Reg from "./components/reg";
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
           <Route exact path="/loginss" component={Login} />
           <Route exact path="/reg" component={Reg} />
        </Switch>
      </Router>
       {/* <Register /> */}
       {/* <Login /> */}
       {/* <Reg /> */}
    </div>
  );
}

export default App;
