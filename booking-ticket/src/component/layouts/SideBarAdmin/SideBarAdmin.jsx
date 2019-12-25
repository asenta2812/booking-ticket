import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { Item } = Menu;


class SideBarAdmin extends Component {

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <NavLink to="/trangquanly/phim">
                            <Icon type="video-camera" />
                            <span>Quản lý phim</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/trangquanly/quanlynguoidung">
                            <Icon type="user" />
                            <span>Quản lý người dùng</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
const mapStateToProps = (state) => ({
    collapsed: state.BookingTicketReducer.collapsed
})

export default connect(mapStateToProps, null)(SideBarAdmin)
