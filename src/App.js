import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import Signin from "./Views/Signin"
function App(props) {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/home" exact component={Home} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
