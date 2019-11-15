import { settings } from "../../common/Config/Settings";
import axios from "axios";
import { actionTypes } from "../constants/QuanLyNguoiDungConstants";
// import { BrowserRouter, Switch ,Route} from "react-router-dom";

export const layDanhSachLoaiNguoiDungAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: actionTypes.LOAI_NGUOI_DUNG,
                mangLoaiNguoiDung: result.data
            })
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const dangKyNguoiDungAction = (nguoiDK) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/DangKy`,
            method: "POST",
            data: { ...nguoiDK }
        }).then(result => {
            console.log(result.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const dangNhapAction = (thongTinNguoiDung) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: thongTinNguoiDung
        }).then(result => {
            
            localStorage.setItem(settings.data, JSON.stringify(result.data));
            localStorage.setItem(settings.token, result.data.accessToken);
            console.log(result.data)
            if(result.data.maLoaiNguoiDung === "QuanTri")
            window.location.href = '/trangquanly';
            else window.location.href = '/trangchu';
        }).catch(error => {
            console.log(error.response.data);
            // swal.fire('thong bao dang nhap', error.response.data, 'error')
        })
    }
}
export const themNguoiDungAction = (userAdd) => {
    return dispath => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/ThemNguoiDung`,
            method: 'post',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        }).then(result => {
            console.log(result.data)
        }).catch(errors => {
            console.log(errors.response.data)
        })
    }
}
export const layDanhSachNguoiDungAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`,
            method: 'get'
        }).then(result => {
            dispatch({
                type: actionTypes.LAY_DANH_SACH_NGUOI_DUNG,
                listDSNguoiDung: result.data
            })
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const xoaNguoiDungAction = (taiKhoan) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: 'delete',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        }).then(result => {
            console.log(result.data)
            this.setState({ isPageTween: false });
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}