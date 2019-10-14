import { actionTypes } from "../constants/QuanLyPhimConstants";

const initialState = {
    mangPhim: [],
    mangRap: []
}

export const QuanLyPhimReducer =  (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.LAY_DANH_SACH_PHIM_1: {
        state.mangPhim = action.mangPhim
        return {...state}
    }
    case actionTypes.LAY_DANH_SACH_PHIM_2: {
        state.mangRap = action.mangRap
        return {...state}
    }
    default:
        return state
    }
}
