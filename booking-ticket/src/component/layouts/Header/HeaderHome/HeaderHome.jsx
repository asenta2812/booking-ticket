import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";
export default class HeaderHome extends Component {
    render() {
        return (
            <div className="header__style">
               
                    {/* <Avatar alt="Remy Sharp" src="./images/movie-clapper-open.png" />
                     */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="true"><Avatar alt="Remy Sharp" src="./images/movie-clapper-open.png" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="true">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="true">Liên hệ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="true">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="true">Ứng dụng</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
<<<<<<< HEAD
                                <a href="/dangky" className="btn btn-outline-success my-2 my-sm-0" >Đăng ký</a>
                                <a href="/dangnhap" className="btn btn-outline-success my-2 my-sm-0" >Đăng nhập</a>
                            </form>
=======
                                <NavLink className="btn btn-outline-success my-2 my-sm-0" to="/dangky">Đăng ký</NavLink>
                                <NavLink className="btn btn-outline-primary my-2 my-sm-0" to="/dangnhap">Đăng nhập</NavLink>
                           
                          </form>
>>>>>>> origin
                        </div>
                    </nav>
            </div>
        )
    }
}
