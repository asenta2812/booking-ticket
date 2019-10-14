import { actionTypes } from "../constants/QuanLyPhimConstants";

const initialState = {
    mangPhim: [],
}

export const QuanLyPhimReducer =  (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.LAY_DANH_SACH_PHIM_1: {
        state.mangPhim = action.mangPhim
        return {...state}
    }
    default:
        return state
    }
}
