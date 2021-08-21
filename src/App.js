import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Views/Home";
import Intro from "./Views/Intro";
import Signin from "./Views/Signin"

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/home" exact component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
