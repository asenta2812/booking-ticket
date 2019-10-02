import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTemplate";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact path="/" Component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
