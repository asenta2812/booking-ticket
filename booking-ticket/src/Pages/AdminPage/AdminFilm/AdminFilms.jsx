import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { layDanhSachPhim1Actions, deleteFilmByIdAction } from '../../../redux/actions/QuanLyPhimActions';

class AdminFilms extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.layDanhSachPhim();
    }
    renderFilm = () => {
        if (this.props.mangPhim.length === 0) {
            return <tr></tr>
        }
        return this.props.mangPhim.map((phim, index) => {
            return (
                <tr key={index}>
                    <td>{phim.maPhim}</td>
                    <td>{phim.tenPhim}</td>
                    <td><img src={phim.hinhAnh} className="img-size" /></td>
                    <td>{phim.moTa}</td>
                    <td>{phim.maNhom}</td>
                    <td>{phim.ngayKhoiChieu}</td>
                    <td className="display-flex">
                        <button className="btn btn-outline-success ">Tạo lịch chiếu</button>
                        <NavLink className="btn btn-outline-secondary" to={`/trangquanly/suaphim/${phim.tenPhim}`}>Sửa</NavLink>
                        <button className="btn btn-outline-danger" onClick={() => this.props.deleteFilmById(phim.maPhim)}>Xoá</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Quản lý xem phim</h1>
                <NavLink className="btn btn-success" to="/trangquanly/themphim">Thêm mới</NavLink>

                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Danh sách phim</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Mã phim</th>
                                        <th>Tên Phim</th>
                                        <th>Hình Ảnh</th>
                                        <th>Mô tả</th>
                                        <th>Mã nhóm</th>
                                        <th>Ngày khởi chiếu</th>
                                        <th>Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderFilm()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    mangPhim: state.QuanLyPhimReducer.mangPhim
})

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachPhim: () => {
            dispatch(layDanhSachPhim1Actions())
        },
        deleteFilmById: (maPhim) => {
            dispatch(deleteFilmByIdAction(maPhim));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminFilms)

