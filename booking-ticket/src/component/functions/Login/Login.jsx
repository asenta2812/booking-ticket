import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dangNhapAction } from '../../../redux/actions/QuanLyNguoiDungAction';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: {
                taiKhoan: '',
                matKhau: ''
            }
            
        }
    }
    handleChange=(e)=>{
        let {name,value} = e.target;
        this.setState({
            userLogin: {...this.state.userLogin, [name]:value}
        },()=>{
            console.log(this.state.userLogin)
        })
    }
    handleSubmit =(e)=> {
        e.preventDefault();
        this.props.dangNhap(this.state.userLogin);
        console.log(this.state.userLogin);
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <h3>Dang nhap</h3>
                <div className="form-group">
                    <span>Tai khoan</span>
                    <input type="text" name="taiKhoan" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span>Mat khau</span>
                    <input type="password" name="matKhau" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <button>Dang nhap</button>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dangNhap:(thongTinNguoiDung) => {
            dispatch(dangNhapAction(thongTinNguoiDung))
        }
    }
}
export default connect(null, mapDispatchToProps)(Login)