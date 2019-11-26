import { settings } from '../../common/Config/Settings'
import { actionTypes } from '../constants/QuanLyPhimConstants';
import axios from 'axios';

export const layDanhSachPhim1Actions = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyPhim/LayDanhSachPhim?maNhom=${settings.groupID}`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: actionTypes.LAY_DANH_SACH_PHIM,
                mangPhim: result.data
            })
            console.log(result)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const layThongTinRapAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyRap/LayThongTinHeThongRap`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: actionTypes.LAY_DANH_SACH_RAP,
                mangRap: result.data
            })
<<<<<<< HEAD
            console.log(result.data)
=======
            // console.log(result.data)
>>>>>>> master
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const layThongTinLichChieuHeThongRapAction = (maHeThongRap) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${settings.groupID}`,
            method: 'GET'
        }).then(result => {
            dispatch({
<<<<<<< HEAD
                type: actionTypes.LAY_DANH_SACH_RAP_THEO_CUM_RAP,
                mangLichChieu: result.data
            })
            console.log(result.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const layThongTinCumRapTheoHeThongAction = (maHeThongRap) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: actionTypes.LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
                mangHeThongRap: result.data
            })
            console.log(result.data)
=======

                type:actionTypes.LAY_DANH_SACH_RAP_THEO_CUM_RAP,
                mangLichChieu:result.data
            })
>>>>>>> master
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
<<<<<<< HEAD
=======
export const layThongTinCumRapTheoHeThongAction = (maHeThongRap) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: actionTypes.LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP,
                mangHeThongRap: result.data
            })
            console.log(result.data)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
>>>>>>> master
export const themPhimAction = (phimAdd) => {
    let file = phimAdd.hinhAnh;
    phimAdd.hinhAnh = file.name;
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyPhim/ThemPhim`,
            method: 'POST',
<<<<<<< HEAD
            data: { ...phimAdd },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        }).then(result => {
            console.log(result.data);
            //sau khi người dùng thêm khoa học thành công
            //gọi API upload hình ảnh
            let frm = new FormData();
            frm.append('file', file);
            frm.append('tenPhim', phimAdd.tenPhim);
            frm.append('maNhom', settings.groupID)
            console.log(frm)
            axios({
                url: settings.domain + `/QuanLyPhim/UploadHinhAnhPhim`,
                method: 'post',
                data: frm 
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err.response.data)
            })
        })
            .catch(err => {
                console.log(err.response.data)
            })
=======
            data: {... phimAdd},
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        }).then( result=> {
            console.log(result.data);
            let frm = new FormData();
            frm.append('file', file);
            frm.append('tenPhim',phimAdd.tenPhim);
            axios ({
                url: settings.domain + `/QuanLyPhim/UploadHinhAnhPhim`,
                method: 'post',
                data: frm
            }).then(result => {
                console.log(result)
            }).catch(err =>{
                console.log(err.response.data)

            })
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}
export const layDanhSachMangPhimTheoPageAction = (trangHienTai, soPhanTuTrenTrang) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${settings.groupID}&soTrang=${trangHienTai}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: actionTypes.LAY_DANH_SACH_PHIM_THEO_TRANG,
                danhSachPhimTheoTrang: result.data
            })
        }).catch(err => {
            console.log(err.response.data);
        })
    }
}
export const deleteFilmByIdAction = (maPhim) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            method: "DELETE"
        }).then(result => console.log(result))
        .catch(err => console.log(err))
>>>>>>> master
    }
}