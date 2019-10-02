import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../component/Header/Header";
const HomeLayout = props => {
    return <Fragment>
        <Header />
        {props.children}
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
