import {settings} from '../../common/Config/Settings'
import { actionTypes } from '../constants/QuanLyPhimConstants';
import axios from 'axios';

export const layDanhSachPhim1Actions = () => {
    return dispatch => {
        axios ({
            url: settings.domain + `/QuanLyPhim/LayDanhSachPhim?maNhom=${settings.groupID}`,
            method: 'GET'
        }).then(result => {
            dispatch ({
                type:actionTypes.LAY_DANH_SACH_PHIM,
                mangPhim:result.data
            })
            // console.log(result)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const layThongTinRapAction =()=> {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyRap/LayThongTinHeThongRap`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type:actionTypes.LAY_DANH_SACH_RAP,
                mangRap:result.data

            })
            console.log(result.data)
        }).catch( err => {
            console.log(err.response.data)
        })
    }
}