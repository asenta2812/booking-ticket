import { actionTypes } from "../constants/QuanLyNguoiDungConstants";

const initialState = {
    data: {},
    mangLoaiNguoiDung: []
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.DANG_KY: {
            state.objectNguoiDungDangKy = action.objectNguoiDungDangKy
            return { ...state }
        }
        case actionTypes.LOAI_NGUOI_DUNG: {
            state.mangLoaiNguoiDung = action.mangLoaiNguoiDung
            return { ...state }
        }
        default:
            return state
    }
}
