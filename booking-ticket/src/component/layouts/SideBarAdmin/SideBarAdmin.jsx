import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class SideBarAdmin extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/trangquanly">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Trang Quản Lý</div>
                </NavLink>
                {/* Divider */}
                <hr className="sidebar-divider mt-5 mb-1" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item mb-3">
                    <NavLink className="nav-link" to="/trangquanly/phim">
                        <i className="fas mr-3 fa-tachometer-alt" />
                        <span>Quản lý xem phim</span>
                    </NavLink>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/trangquanly/nguoidung">
                        <i className="fas mr-3 fa-tachometer-alt" />
                        <span>Quản lý người dùng</span>
                    </NavLink>
                </li>
                {/*                  
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" />
                    </div> */}
            </ul>
        )
    }
}
