import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react'

const Router = () => {
    return (
        <div>
            <Router>
        <Switch>
          <Route path="/" exact component={} />
          <Route path="/home" exact component={Home} />
         
        </Switch>
      </Router>
        </div>
    )
}

export default Router
