import { settings } from "../../common/Config/Settings";
import axios from "axios";
import { actionTypes } from "../constants/QuanLyNguoiDungConstants";

export const layDanhSachLoaiNguoiDungAction =()=> {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
            method: 'GET'
        }).then (result => {
            dispatch({
                type: actionTypes.LOAI_NGUOI_DUNG,
                mangLoaiNguoiDung: result.data
            })
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const dangKyNguoiDungAction =(nguoiDK) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/DangKy`,
            method: "POST",
            data: {...nguoiDK}
        }).then(result => {
            console.log(result.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const dangNhapAction = (thongTinNguoiDung) =>{
    return dispatch =>{
        axios({
            url: settings.domain + `/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: thongTinNguoiDung
        }).then(result => {
            console.log(result.data)
            localStorage.setItem(settings.data, JSON.stringify(result.data));
            localStorage.setItem(settings.token, result.data.accessToken);
        }).catch(error => {
            console.log(error.response.data);
            // swal.fire('thong bao dang nhap', error.response.data, 'error')
        })
    }
}