import React, { Fragment } from "react"
import HeaderAdmin from "../../component/layouts/Header/HeaderAdmin/HeaderAdmin"
import FooterAdmin from "../../component/layouts/Footer/FooterAdmin/FooterAdmin"
import { Route } from 'react-router-dom'
import SideBarAdmin from "../../component/layouts/SideBarAdmin/SideBarAdmin"
// import './sb-admin-2.min.css';
const AdminLayout = (props) => {
    return <Fragment>
        <HeaderAdmin />
        <SideBarAdmin/>
        {props.children}
        <FooterAdmin />
    </Fragment>
}
export const AdminTemplate = ({ Component, ...props }) => (
    <Route {...props} render={propsComponent => (
        <AdminLayout {...propsComponent}>
            <Component />
        </AdminLayout>
    )} />
)