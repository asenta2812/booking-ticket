import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dangNhapAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: {
                taiKhoan: '',
                matKhau: ''
            }

        }
    };
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            userLogin: { ...this.state.userLogin, [name]: value }
        }, () => {
            // console.log(this.state.userLogin)
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dangNhap(this.state.userLogin);
        // console.log(this.state.userLogin);
    };
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_page">
                <div className="container">
                    <Row className="form_login">
                        <Col span={8} offset={8}>
                            <h3 className="title-form">Đăng nhập</h3>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Tài khoản" onChange={this.handleChange} name="taiKhoan"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Mật khẩu" name="matKhau" onChange={this.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Đăng nhập
                              </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dangNhap: (thongTinNguoiDung) => {
            dispatch(dangNhapAction(thongTinNguoiDung))
        }
    }
}
export default connect(null, mapDispatchToProps)(Login)