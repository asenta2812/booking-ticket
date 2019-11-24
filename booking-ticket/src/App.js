import React, { Fragment } from "react";
import { BrowserRouter, Switch ,Route} from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate/HomeTemplate";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovie from "./Pages/DetailPageForMovie/DetailMovie";
import DetailMovieTheater from "./Pages/DetailPageForMovieTheater/DetailMovieTheater";
import AdminPage from "./Pages/AdminPage/AdminPage"
import { AdminTemplate } from "./Templates/AdminTemplate/AdminTemplate";
// import LoginAdmin from "./Pages/LoginPageAdmin/LoginAdmin";
import Register from "./component/functions/Register/Register";
import Login from "./component/functions/Login/Login";
import AddFilm from "./component/layouts/AddFilm/AddFilm";
import AddUsers from "./component/layouts/AddUsers/AddUsers";
import ManagerUser from "./component/layouts/ManagerUsers/ManagerUser";
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
          <AdminTemplate exact path="/trangquanly/themphim" Component={AddFilm}/>
          <AdminTemplate exact path="/trangquanly/themnguoidung" Component={AddUsers}/>
          <AdminTemplate exact path="/trangquanly/quanlynguoidung" Component={ManagerUser}/>
          {/* <Route exact path="/quanly" component={LoginAdmin}/> */}
          <Route exact path="/dangky" component={Register}/>
          <Route exact path="/dangnhap" component={Login}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
