import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class SideBarAdmin extends Component {
    render() {
        return (
            <div className="default-sidebar">
                {/* Begin Side Navbar */}
                <nav className="side-navbar box-scroll sidebar-scroll">
                    {/* Begin Main Navigation */}
                    <span className="heading">Quản lý</span>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/trangquanly/phim" activeClassName="selected">
                                <i className="la la-share-alt" />
                                <span>Quản lý phim</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trangquanly/nguoidung" activeClassName="selected">
                                <i className="la la-font" />
                                <span>Quản lý người dùng</span>
                            </NavLink>
                        </li>


                    </ul>
                    {/* End Main Navigation */}
                </nav>
                {/* End Side Navbar */}
            </div>


        )
    }
}
