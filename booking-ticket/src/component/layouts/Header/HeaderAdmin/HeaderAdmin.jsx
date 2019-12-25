import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
const { Header } = Layout;

class HeaderAdmin extends Component {
    toggle = () => {
        this.props.toggle(!this.props.collapsed)
    };
    render() {
        console.log(this.props.collapsed)
        return (
            <Layout>
                <Header className="header">

                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => ({
    collapsed: state.BookingTicketReducer.collapsed
})


const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (collapsed) => {
            dispatch({
                type: 'TOGGLE_MENU',
                collapse: collapsed
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin)




