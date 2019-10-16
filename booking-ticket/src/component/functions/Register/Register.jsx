import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dangKyNguoiDungAction, layDanhSachLoaiNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { settings } from '../../../common/Config/Settings';

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
            }
        }
    }

    componentWillMount() {
        this.props.layDanhSachLoaiNguoiDung()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dangKyNguoiDung(this.state.nguoiDK)
    }

    handleChange = (e) => {
        let { value, name } = e.target;
        this.setState({
            nguoiDK: { ...this.state.nguoiDK, [name]: value }
        },() => {
            console.log(this.state.nguoiDK)
        })
        
    }
    renderLoaiNguoiDung = () => {
        return this.props.mangLoaiNguoiDung.map((nguoiDung, index) => {
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
                                <input type="text" name="taiKhoan" id="taiKhoan" value={this.state.nguoiDK.taiKhoan} className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Loại người dùng</label>
                                <select className="form-control" name="maLoaiNguoiDung" value={this.state.nguoiDK.maLoaiNguoiDung}id="maLoaiNguoiDung" onChange={this.handleChange}>
                                    {this.renderLoaiNguoiDung()}
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Mật khẩu</label>
                                <input type="text" name="matKhau" id="matKhau" value={this.state.nguoiDK.matKhau} className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Nhập lại mật khẩu</label>
                                <input type="text" name id="matKhau" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Họ và tên</label>
                                <input type="text" name="hoTen" id="hoTen" value={this.state.nguoiDK.hoTen} className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="text" name="email" id="email" value={this.state.nguoiDK.email} className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Số điện thoại</label>
                                <input type="text" name="soDt" id="soDt" value={this.state.nguoiDK.soDt} className="form-control" onChange={this.handleChange} />
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