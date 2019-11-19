import { actionTypes } from "../constants/QuanLyNguoiDungConstants";
import { settings } from "../../common/Config/Settings";

const initialState = {
    data: {},
    mangLoaiNguoiDung: [],
    listDSNguoiDung: [],
    userEdit: {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: '',
        maLoaiNguoiDung: '',
        hoTen: ''
    }
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LAY_DANH_SACH_NGUOI_DUNG: {
            state.listDSNguoiDung = action.listDSNguoiDung
            return { ...state }
        }
        case actionTypes.LOAI_NGUOI_DUNG: {
            state.mangLoaiNguoiDung = action.mangLoaiNguoiDung
            return { ...state }
        }
        case actionTypes.CHINH_SUA_NGUOI_DUNG : {
            state.userEdit = action.userEdit;
            return { ...state }
        }
        default:
            return state
    }
}
