import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../../component/layouts/Header/HeaderHome/HeaderHome";
import FooterHome from "../../component/layouts/Footer/FooterHome/FooterHome";
const HomeLayout = props => {
    return <Fragment>
        <HeaderHome />
        {props.children}
        <FooterHome/>
    </Fragment>

};
export const HomeTemplate = ({ Component, ...props }) => {
    return (
        <Route {...props} render={propsComponent => (
            <HomeLayout {...propsComponent} >
                <Component />
            </HomeLayout>
        )} />
    )
};
