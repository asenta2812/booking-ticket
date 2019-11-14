import React, { Component } from 'react'
import { settings } from '../../../common/Config/Settings';
import { connect } from 'react-redux'
import { themNguoiDungAction, layDanhSachLoaiNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';

class AddUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userAdd: {
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
                email: '',
                soDt: '',
                maNhom: settings.groupID,
                maLoaiNguoiDung: '',
                hoTen: ''
            }
        }
    }
    componentWillMount() {
        this.props.layDanhSachNguoiDung()
    }
    handleErrors = (e) => {
        let { name, value } = e.target;
        let err = value === '' ? 'Không được để trống !' : '';
        // if (name === 'taiKhoan') {
        //     err += !(value.length === 4) ? ' Mã nhân viên gồm 4 ký tự !' : '';
        // }
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
        // if(name === 'matKhau2') {
        //     if(value !== this.state.userAdd.matKhau) {
        //         err += 'Mật khẩu đó không khớp. Hãy thử lại!';
        //     }
        //     else err += '';
        // }
        this.setState({
            errors: { ...this.state.errors, [name]: err }
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.themNguoiDung(this.state.userAdd)
    }
    renderLoaiNguoiDung = () => {
        return this.props.mangLoaiNguoiDung.map((nguoiDung, index) => {
            // if(nguoiDung.maLoaiNguoiDung !== "QuanTri")
            return <option key={index} value={nguoiDung.maLoaiNguoiDung}>{nguoiDung.tenLoai}</option>
        })
    }
    handleChange=(e)=>{
        let {name,value} = e.target;
        this.setState({
            userAdd: {...this.state.userAdd, [name]:value}
        },()=>{
            console.log(this.state.userAdd)
        })
    }
    render() {
        return (
            <div className="register-user">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <h3 className="title-form">Thêm người dùng</h3>
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label >Tài khoản</label>
                                <input type="text" name="taiKhoan" id="taiKhoan"  className="form-control" value={this.state.userAdd.taiKhoan} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.taiKhoan != '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Loại người dùng</label>
                                <select className="form-control" name="maLoaiNguoiDung" value={this.state.userAdd.maLoaiNguoiDung} id="maLoaiNguoiDung" onChange={this.handleChange}>
                                    {this.renderLoaiNguoiDung()}
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Mật khẩu</label>
                                <input type="text" name="matKhau" id="matKhau" value={this.state.userAdd.matKhau} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors}/>
                                {this.state.errors.matKhau != '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Họ và tên</label>
                                <input type="text" name="hoTen" id="hoTen" value={this.state.userAdd.hoTen} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.hoTen != '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="text" name="email" id="email" value={this.state.userAdd.email} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.email != '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Số điện thoại</label>
                                <input type="text" name="soDt" id="soDt" value={this.state.userAdd.soDt} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.soDt != '' ? <div className="alert alert-danger">{this.state.errors.soDt}</div> : ''}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">Thêm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    mangLoaiNguoiDung: state.QuanLyNguoiDungReducer.mangLoaiNguoiDung
})

const mapDispatchToProps = (dispatch)=> {
    return {
        themNguoiDung: (userAdd)=>{
            dispatch(themNguoiDungAction(userAdd))
        },
        layDanhSachNguoiDung: () => {
            dispatch(layDanhSachLoaiNguoiDungAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddUsers)