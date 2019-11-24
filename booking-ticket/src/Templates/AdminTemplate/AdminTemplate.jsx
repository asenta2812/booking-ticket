import React, { Fragment } from "react"
import HeaderAdmin from "../../component/layouts/Header/HeaderAdmin/HeaderAdmin"
import FooterAdmin from "../../component/layouts/Footer/FooterAdmin/FooterAdmin"
import { Route } from 'react-router-dom';
import SideBarAdmin from "../../component/layouts/SideBarAdmin/SideBarAdmin";

const AdminLayout = (props) => {
    return <Fragment>
        {/* Begin Preloader */}
        <div id="preloader">
            <div className="canvas">
                <img src="assets/img/logo.png" alt="logo" className="loader-logo" />
                <div className="spinner" />
            </div>
        </div>
        {/* End Preloader */}

        <div id="page">
            <HeaderAdmin />
            <div className="page-content d-flex align-items-stretch">
                <SideBarAdmin />
                <div className="content-inner">
                    <div className="container-fluid">
                        {props.children}
                    </div>
                    <FooterAdmin />
                </div>
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