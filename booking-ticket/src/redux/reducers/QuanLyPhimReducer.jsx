import { actionTypes } from "../constants/QuanLyPhimConstants";

const initialState = {
    mangPhim: [],
    mangRap: [],
    mangPhimTheoRap: []
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LAY_DANH_SACH_PHIM: {
            state.mangPhim = action.mangPhim
            return { ...state }
        }
        case actionTypes.LAY_DANH_SACH_RAP: {
            state.mangRap = action.mangRap
            return { ...state }
        }
        case actionTypes.LAY_DANH_SACH_PHIM_THEO_RAP: {
            state.mangPhimTheoRap = action.mangPhimTheoRap
            return { ...state }
        }
        default:
            return state
    }
}
