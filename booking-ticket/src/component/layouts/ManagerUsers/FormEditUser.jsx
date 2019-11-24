import React, { Component } from 'react'
import { settings } from '../../../common/Config/Settings';
import {connect} from 'react-redux';
import { layDanhSachLoaiNguoiDungAction, capNhatNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';

class FormEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userSave: {
                taiKhoan: '',
                matKhau: '',
                email: '',
                soDt: '',
                maNhom: '',
                maLoaiNguoiDung: settings.groupID,
                hoTen: ''
            },
            errors: {
                taiKhoan: '',
                matKhau: '',
                email: '',
                soDt: '',
                maNhom: '',
                maLoaiNguoiDung: settings.groupID,
                hoTen: ''
            },
            btnDisabled: false
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
        this.setState({
            errors: { ...this.state.errors, [name]: err }
        })
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
            userSave: {...this.state.userSave, [name]:value}
        },()=>{
            console.log(this.state.userSave)
        })
    }
    componentWillReceiveProps(nextProps){
        //nextProps: là props sau khi thay đổi 
        this.setState({
            userSave:nextProps.userEdit
        })
    }
    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="editUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cập nhật thông tin tài khoản</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                                <label >Tài khoản</label>
                                <input disabled type="text" name="taiKhoan" id="taiKhoan"  className="form-control" value={this.state.userSave.taiKhoan} onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.taiKhoan != '' ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Loại người dùng</label>
                                <select className="form-control" name="maLoaiNguoiDung" value={this.state.userSave.maLoaiNguoiDung} id="maLoaiNguoiDung" onChange={this.handleChange}>
                                    {this.renderLoaiNguoiDung()}
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Mật khẩu</label>
                                <input type="text" name="matKhau" id="matKhau" value={this.state.userSave.matKhau} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors}/>
                                {this.state.errors.matKhau != '' ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Họ và tên</label>
                                <input type="text" name="hoTen" id="hoTen" value={this.state.userSave.hoTen} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.hoTen != '' ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="text" name="email" id="email" value={this.state.userSave.email} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.email != '' ? <div className="alert alert-danger">{this.state.errors.email}</div> : ''}
                            </div>
                            <div className="form-group">
                                <label >Số điện thoại</label>
                                <input type="text" name="soDt" id="soDt" value={this.state.userSave.soDt} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.soDt != '' ? <div className="alert alert-danger">{this.state.errors.soDt}</div> : ''}
                            </div>
                            {/* <div className="form-group">
                                <label >Mã nhóm</label>
                                <input type="text" name="maNhom" id="maNhom" value={this.state.userSave.maNhom} className="form-control" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} />
                                {this.state.errors.maNhom != '' ? <div className="alert alert-danger">{this.state.errors.maNhom}</div> : ''}
                            </div> */}
                            <div className="form-group">
                                <button onClick = {() => this.props.capNhatNguoiDung(this.state.userSave)} className="btn btn-success">Cập nhật</button>
                            </div>
                             </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button  type="button" className="btn btn-primary">Save</button>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    mangLoaiNguoiDung: state.QuanLyNguoiDungReducer.mangLoaiNguoiDung,
    userEdit: state.QuanLyNguoiDungReducer.userEdit
})
const mapDispatchToProps = (dispatch)=> {
    return {
        layDanhSachNguoiDung: () => {
            dispatch(layDanhSachLoaiNguoiDungAction())
        },
        capNhatNguoiDung : (userSave) => {
            dispatch(capNhatNguoiDungAction(userSave))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormEditUser)