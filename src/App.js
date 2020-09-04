import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Character from "./components/Character";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Character} />
          <Route path="/:name" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
