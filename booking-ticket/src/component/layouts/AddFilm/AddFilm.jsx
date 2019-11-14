import React, { Component } from 'react'
import { connect } from 'react-redux'
import { settings } from '../../../common/Config/Settings';
import { themPhimAction } from '../../../redux/actions/QuanLyPhimActions';


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
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.themPhim(this.state.phimAdd)
    }
    handleChange = (e) => {
        let { value, name , type} = e.target;
        if(type!=='file') {
            this.setState({
                phimAdd: {...this.state.phimAdd, [name]: value}
            },() => {
                console.log(this.state.phimAdd)
            })
        }
        else {
            //xử lý khi post file
            console.log(e.target.files)
            this.setState({
                phimAdd: {...this.state.phimAdd, [name]: e.target.files[0]}
            },() => {
                console.log(this.state.phimAdd)  
            })
        }

    }
    render() {
        return (
            <div className="container">
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label >Mã phim</label>
                            <input type="text" name="maPhim" id className="form-control" value={this.state.phimAdd.maPhim} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Ngày khởi chiếu</label>
                            <input type="date" name="ngayKhoiChieu" id className="form-control" value={this.state.phimAdd.ngayKhoiChieu} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Tên phim</label>
                            <input type="text" name="tenPhim" id className="form-control" value={this.state.phimAdd.tenPhim} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Đánh giá</label>
                            <input type="text" name="danhGia" id className="form-control" value={this.state.phimAdd.danhGia} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Trailer</label>
                            <input type="text" name="trailer" id className="form-control" value={this.state.phimAdd.trailer} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Hinh ảnh</label>
                            <input type="file" name="hinhAnh" id className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Bí danh</label>
                            <input type="area-text" name="biDanh" id className="form-control" value={this.state.phimAdd.biDanh} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Mô tả</label>
                            <input type="area-text" name="moTa" id className="form-control" value={this.state.phimAdd.moTa} onChange={this.handleChange} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        themPhim: (phimAdd) => {
            dispatch(themPhimAction(phimAdd))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddFilm)