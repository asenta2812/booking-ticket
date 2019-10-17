import React, { Fragment } from "react"
import HeaderAdmin from "../../component/layouts/Header/HeaderAdmin/HeaderAdmin"
import FooterAdmin from "../../component/layouts/Footer/FooterAdmin/FooterAdmin"
import { Route } from 'react-router-dom';
import SideBarAdmin from "../../component/layouts/SideBarAdmin/SideBarAdmin";
const AdminLayout = (props) => {
    return <Fragment>
        <div id="wrapper">
            <SideBarAdmin />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <HeaderAdmin />
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
                <FooterAdmin />
            </div>
        </div>
    </Fragment>
}
export const AdminTemplate = ({ Component, ...props }) => (
    <Route {...props} render={propsComponent => (
        <AdminLayout {...propsComponent}>
            <Component />
        </AdminLayout>
    )} />
)