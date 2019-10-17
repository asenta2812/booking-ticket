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