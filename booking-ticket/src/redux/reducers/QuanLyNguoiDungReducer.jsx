import { actionTypes } from "../constants/QuanLyNguoiDungConstants";

const initialState = {
    data: {},
    mangLoaiNguoiDung: [],
    listDSNguoiDung: []
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
        default:
            return state
    }
}
