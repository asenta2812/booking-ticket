import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dangKyNguoiDungAction, layDanhSachLoaiNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { settings } from '../../../common/Config/Settings';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  
  const { Option } = Select;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nguoiDK: {
                taiKhoan: '',
                matKhau: '',
                email: '',
                soDt: '',
                maNhom: settings.groupID,
                maLoaiNguoiDung: '',
                hoTen: ''
            },
            errors: {
                taiKhoan: '',
                matKhau: '',
                matKhau2: '',
                email: '',
                soDt: '',
                maNhom: settings.groupID,
                maLoaiNguoiDung: '',
                hoTen: ''
            }
        }
    }

    componentWillMount() {
        this.props.layDanhSachLoaiNguoiDung()
    }
     
    handleErrors = (e) => {
        let { name, value } = e.target;
        let err = value === '' ? 'Không được để trống !' : '';
        if (name === 'taiKhoan') {
            err += !(value.length === 4) ? ' Mã nhân viên gồm 4 ký tự !' : '';
        }
        if (name === 'email') {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(value)) {
                err += ' Email không đúng định dạng !';
            }
        }
        if (name === 'soDt') {
            let regex = /(09|01[2|6|8|9])+([0-9]{8})\b/;
            if (!regex.test(value)) {
                err += ' Số điện thoại không đúng định dạng !';
            }
        }
        if(name === 'hoTen') {
            let regex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
            if(!regex.test(value)) {
                err += ' Họ và tên không hợp lệ !';
            }
        }
        if(name === 'matKhau') {
            if(value.length < 5 || value.length > 13)
            err += ' Mật khẩu từ 6 - 12 kí tự !';
        }
        if(name === 'matKhau2') {
            if(value !== this.state.nguoiDK.matKhau) {
                err += 'Mật khẩu đó không khớp. Hãy thử lại!';
            }
            else err += '';
        }
        this.setState({
            errors: { ...this.state.errors, [name]: err }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dangKyNguoiDung(this.state.nguoiDK)
    }

    handleChange = (e) => {
        let { value, name } = e.target;
        this.setState({
            nguoiDK: { ...this.state.nguoiDK, [name]: value }
        }, () => {
            console.log(this.state.nguoiDK)
        })

    }
    renderLoaiNguoiDung = () => {
        return this.props.mangLoaiNguoiDung.map((nguoiDung, index) => {
            if(nguoiDung.maLoaiNguoiDung !== "QuanTri")
            return <option key={index} value={nguoiDung.maLoaiNguoiDung}>{nguoiDung.tenLoai}</option>
        })
    }

    render() {
        return (
            <div className="register-user">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <h3 className="title-form">Đăng ký</h3>
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label >Tài khoản</label>
                                <input type="text" name="taiKhoan" id="taiKhoan"  className="form-control" value={this.state.nguoiDK.taiKhoan} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.taiKhoan != '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Loại người dùng</label>
                                <select className="form-control" name="maLoaiNguoiDung" value={this.state.nguoiDK.maLoaiNguoiDung} id="maLoaiNguoiDung" onChange={this.handleChange}>
                                    {this.renderLoaiNguoiDung()}
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Mật khẩu</label>
                                <input type="text" name="matKhau" id="matKhau" value={this.state.nguoiDK.matKhau} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors}/>
                                {this.state.errors.matKhau != '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Nhập lại mật khẩu</label>
                                <input type="text" name="matKhau2" id="matKhau2" className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.matKhau2 != '' ? <div className="alert alert-danger">{this.state.errors.matKhau2}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Họ và tên</label>
                                <input type="text" name="hoTen" id="hoTen" value={this.state.nguoiDK.hoTen} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.hoTen != '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="text" name="email" id="email" value={this.state.nguoiDK.email} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.email != '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Số điện thoại</label>
                                <input type="text" name="soDt" id="soDt" value={this.state.nguoiDK.soDt} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.soDt != '' ? <div className="alert alert-danger">{this.state.errors.soDt}</div> : ''}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mangLoaiNguoiDung: state.QuanLyNguoiDungReducer.mangLoaiNguoiDung,
    // objectNguoiDungDangKy: state.QuanLyNguoiDungReducer.objectNguoiDungDangKy
})

const mapDispatchToProps = (dispatch) => {
    return {
        dangKyNguoiDung: (nguoiDK) => {
            dispatch(dangKyNguoiDungAction(nguoiDK))
        },
        layDanhSachLoaiNguoiDung: () => {
            dispatch(layDanhSachLoaiNguoiDungAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)