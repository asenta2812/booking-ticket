import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTemplate";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovie from "./Pages/DetailPageForMovie/DetailMovie";
import DetailMovieTheater from "./Pages/DetailPageForMovieTheater/DetailMovieTheater";
import AdminPage from "./Pages/AdminPage/AdminPage"
import { AdminTemplate } from "./Templates/AdminTemplate/AdminTemplate";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact path="/" Component={HomePage} />
          <HomeTemplate exact path="/trangchu" Component={HomePage} />
          <HomeTemplate exact path="/chitietphim" Component={DetailMovie} />
          <HomeTemplate exact path="/chitietrap" Component={DetailMovieTheater}/>
          <AdminTemplate exact path="/admin" Component={AdminPage}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
