import React, { Fragment } from "react";
import { BrowserRouter, Switch ,Route} from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTemplate";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovie from "./Pages/DetailPageForMovie/DetailMovie";
import DetailMovieTheater from "./Pages/DetailPageForMovieTheater/DetailMovieTheater";
import AdminPage from "./Pages/AdminPage/AdminPage"
import { AdminTemplate } from "./Templates/AdminTemplate/AdminTemplate";
import LoginAdmin from "./Pages/LoginPageAdmin/LoginAdmin";
import Register from "./component/functions/Register/Register";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact path="/" Component={HomePage} />
          <HomeTemplate exact path="/trangchu" Component={HomePage} />
          <HomeTemplate exact path="/chitietphim" Component={DetailMovie} />
          <HomeTemplate exact path="/chitietrap" Component={DetailMovieTheater}/>
          <AdminTemplate exact path="/trangquanly" Component={AdminPage}/>
          <Route exact path="/quanly" component={LoginAdmin}/>
          <Route exact path="/dangky" component={Register}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
