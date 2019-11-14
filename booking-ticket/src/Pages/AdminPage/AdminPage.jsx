import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { Header, Content, Footer, Sider } = Layout;
        const { SubMenu } = Menu;
        return (
            <div></div>
        )
    }
}
