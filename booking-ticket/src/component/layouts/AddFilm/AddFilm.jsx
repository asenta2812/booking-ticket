import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../../../common/Config/Settings';
import { themPhimAction, getFilmByNameAction } from '../../../redux/actions/QuanLyPhimActions';


class AddFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phimAdd: {
                maPhim: '',
                tenPhim: '',
                biDanh: '',
                trailer: '',
                hinhAnh: '',
                moTa: '',
                maNhom: settings.groupID,
                ngayKhoiChieu: '',
                danhGia: ''
            },
            errors: {
                maPhim: '',
                tenPhim: '',
                biDanh: 'tenPhim',
                trailer: '',
                hinhAnh: '',
                moTa: '',
                maNhom: settings.groupID,
                ngayKhoiChieu: '',
                danhGia: ''
            }
        }
    }
    componentDidMount() {
        let { tenPhim } = this.props.match.params;
        this.props.getFilmByName(tenPhim);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // convert date => dd/mm/yyyy    
        var date = new Date(this.state.phimAdd.ngayKhoiChieu);
        this.state.phimAdd.ngayKhoiChieu = `${date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}`;
        this.props.themPhim(this.state.phimAdd)
    }
    handleChange = (e) => {
        let { value, name, type } = e.target;

        if (type !== 'file') {
            this.setState({
                phimAdd: { ...this.state.phimAdd, [name]: value }
            })
        }
        else {
            //xử lý khi post file
            this.setState({
                phimAdd: { ...this.state.phimAdd, [name]: e.target.files[0] }
            })
        }
    }
    formatDate = (date) => {
        //yyyy-MM-dd
        var datefm = new Date(date);
        // console.log(datefm)
        var monthFm = ((datefm.getMonth() + 1) < 10) ? "0" + (datefm.getMonth() + 1) : (datefm.getMonth() + 1);
        var dayFm = ((datefm.getDate() < 10) ? "0" + datefm.getDate() : datefm.getDate());

        datefm = `${datefm.getFullYear() + "-" + monthFm + "-" + dayFm}`;
        return datefm;
    }
    render() {
        if (this.props.mangPhim.length === 1) {
            let filmEdit = this.props.mangPhim[0];
            filmEdit.ngayKhoiChieu = this.formatDate(filmEdit.ngayKhoiChieu);
            this.state.phimAdd = filmEdit;
        }

        return (
            <div className="container">
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label >Mã phim</label>
                            <input type="text" name="maPhim" className="form-control" value={this.state.phimAdd.maPhim} onChange={this.handleChange}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Ngày khởi chiếu</label>
                            <input type="date" name="ngayKhoiChieu" className="form-control" value={this.state.phimAdd.ngayKhoiChieu} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Tên phim</label>
                            <input type="text" name="tenPhim" className="form-control" value={this.state.phimAdd.tenPhim} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Đánh giá</label>
                            <input type="text" name="danhGia" className="form-control" value={this.state.phimAdd.danhGia} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Trailer</label>
                            <input type="text" name="trailer" className="form-control" value={this.state.phimAdd.trailer} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Hinh ảnh</label>
                            <input type="file" name="hinhAnh" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Bí danh</label>
                            <input type="area-text" name="biDanh" className="form-control" value={this.state.phimAdd.biDanh} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Mô tả</label>
                            <input type="area-text" name="moTa" className="form-control" value={this.state.phimAdd.moTa} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success">Add phim</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    mangPhim: state.QuanLyPhimReducer.mangPhim
})
const mapDispatchToProps = (dispatch) => {
    return {
        themPhim: (phimAdd) => {
            dispatch(themPhimAction(phimAdd))
        },
        getFilmByName: (name) => {
            dispatch(getFilmByNameAction(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddFilm)