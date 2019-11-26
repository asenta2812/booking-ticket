<<<<<<< HEAD
import React, { Component } from 'react';
=======

import React, { Component,NavLink } from 'react';

>>>>>>> master
import Avatar from '@material-ui/core/Avatar';
export default class HeaderHome extends Component {
    render() {
        return (
            <div className="header__style">
               
                    {/* <Avatar alt="Remy Sharp" src="./images/movie-clapper-open.png" />
                     */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#"><Avatar alt="Remy Sharp" src="./images/movie-clapper-open.png" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Liên hệ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Ứng dụng</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng ký</button>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng nhập</button>
                            </form>
                        </div>
                    </nav>
            </div>
        )
    }
}
