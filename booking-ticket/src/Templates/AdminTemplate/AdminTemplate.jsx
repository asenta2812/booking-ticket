import React, { Fragment, useState } from "react";
import HeaderAdmin from "../../component/layouts/Header/HeaderAdmin/HeaderAdmin";
import FooterAdmin from "../../component/layouts/Footer/FooterAdmin/FooterAdmin";
import { Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import SideBarAdmin from "../../component/layouts/SideBarAdmin/SideBarAdmin";

const AdminLayout = props => {
  const { Content } = Layout;
  return (
    <Fragment>
      <Layout>
        <SideBarAdmin />
        <Layout style={{ minHeight: "100vh" }}>
          {/* <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}> */}
          <HeaderAdmin />
          <Layout>
            <Content style={{ margin: "0 16px" }}>{props.children}
              <FooterAdmin />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};
export const AdminTemplate = ({ Component, ...props }) => (
  <Route
    {...props}
    render={propsComponent => (
      <AdminLayout>
        <Component {...propsComponent} />
      </AdminLayout>
    )}
  />
);
