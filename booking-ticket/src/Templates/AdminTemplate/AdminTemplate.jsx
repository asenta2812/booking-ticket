import React, { Fragment } from "react"
import HeaderAdmin from "../../component/layouts/Header/HeaderAdmin/HeaderAdmin"
import FooterAdmin from "../../component/layouts/Footer/FooterAdmin/FooterAdmin"
import { Route } from 'react-router-dom'
const AdminLayout = (props) => {
    return <Fragment>
        <HeaderAdmin />
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