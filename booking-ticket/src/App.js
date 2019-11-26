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
<<<<<<< HEAD
import AddFilm from "./component/layouts/AddFilm/AddFilm";
import AddUsers from "./component/layouts/AddUsers/AddUsers";
import ManagerUser from "./component/layouts/ManagerUsers/ManagerUser";
import DetailUser from "./component/layouts/DetailUser/DetailUser";
=======

import AddFilm from "./component/layouts/AddFilm/AddFilm";
import AddUsers from "./component/layouts/AddUsers/AddUsers";
import ManagerUser from "./component/layouts/ManagerUsers/ManagerUser";

>>>>>>> master
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
<<<<<<< HEAD
          <AdminTemplate exact path="/trangquanly/themphim" Component={AddFilm}/>
          <AdminTemplate exact path="/trangquanly/themnguoidung" Component={AddUsers}/>
          <AdminTemplate exact path="/trangquanly/quanlynguoidung" Component={ManagerUser}/>
          <AdminTemplate exact path="/trangquanly/chitietnguoidung/:taiKhoan" Component={DetailUser}/>
          {/* <Route exact path="/quanly" component={LoginAdmin}/> */}
=======

          <AdminTemplate exact path="/trangquanly/themphim" Component={AddFilm}/>
          <AdminTemplate exact path="/trangquanly/themnguoidung" Component={AddUsers}/>
          <AdminTemplate exact path="/trangquanly/quanlynguoidung" Component={ManagerUser}/>
          {/* <Route exact path="/quanly" component={LoginAdmin}/> */}

>>>>>>> master
          <Route exact path="/dangky" component={Register}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
