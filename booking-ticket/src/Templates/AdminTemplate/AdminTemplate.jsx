import React, { Fragment } from "react"
import HeaderAdmin from "../../component/layouts/Header/HeaderAdmin/HeaderAdmin"
import FooterAdmin from "../../component/layouts/Footer/FooterAdmin/FooterAdmin"
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';

const AdminLayout = (props) => {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu, Item } = Menu;

    return <Fragment>
        <Layout style={{ minHeight: '100vh' }}>
            {/* <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}> */}
            <Sider>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Item key="1">
                        <Icon type="desktop" ></Icon>
                        <Link to="/trangquanly/themphim">Quản lý phim</Link>
                    </Item>
                    <Item key="2">
                        <Icon type="user" />
                        <Link to="/trangquanly/themnguoidung">Quản lý người dùng</Link>
                    </Item>
                    <Item key="3" >
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Item>
                    {/* <li className="nav-item active">
                        <Link className="nav-link" to="/trangquanly/themphim">Trang chủ</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/trangquanly/themnguoidung">Trang chủ</Link>
                    </li> */}
                </Menu>
            </Sider>
            <Layout>
                <HeaderAdmin />
                <Content style={{ margin: '0 16px' }}>
                    {props.children}
                </Content>
                <FooterAdmin />
            </Layout>
        </Layout>



    </Fragment>
}
export const AdminTemplate = ({ Component, ...props }) => (
    <Route {...props} render={propsComponent => (
        <AdminLayout {...propsComponent}>
            <Component />
        </AdminLayout>
    )} />
)