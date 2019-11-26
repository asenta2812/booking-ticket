import React, { Component } from 'react'
import { connect } from 'react-redux'
import { thongTinTaiKhoanAction } from '../../../redux/actions/QuanLyNguoiDungAction';

class DetailUser extends Component {

    componentDidMount(){
        let {taiKhoan} = this.props.match.params;
        this.props.thongTinNguoiDung(taiKhoan)
    }
    render() {
        return (
            <div>
                detail user
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        thongTinNguoiDung :(taiKhoan) => {
            dispatch(thongTinTaiKhoanAction(taiKhoan))
        }
    }
}
export default connect(null,mapDispatchToProps)(DetailUser)
