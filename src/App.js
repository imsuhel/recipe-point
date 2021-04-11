import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={() => <Recipes />} />
        <Route exact path="/recipes/:id" component={Recipes} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
