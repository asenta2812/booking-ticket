import React, { Component } from 'react'
import { connect } from 'react-redux'
import { layThongTinCumRapTheoHeThongAction, layThongTinLichChieuHeThongRapAction } from '../../../redux/actions/QuanLyPhimActions';

class MovieTheaterList extends Component {

    componentWillMount() {
        this.props.layThongTinCumRapTheoHeThong(this.props.mangRap[0].maHeThongRap);
        this.props.layThongTinLichChieuHeThongRap(this.props.mangRap[0].maHeThongRap);
        
    }
    renderListRap = () => {
        const { mangHeThongRap } = this.props;
        return mangHeThongRap.map((rap, index) => {
            return (
                <div className="card" key={index}>
                    {/* <img className="card-img-top" src="holder.js/100x180/" alt /> */}
                    <div className="card-body">
                        <h4 className="card-title">{rap.tenCumRap}</h4>
                        <p className="card-text">Địa chỉ: {rap.diaChi}</p>
                    </div>
                </div>

            )
        })
    }
    renderRap = () => {
        const { mangRap } = this.props;
        return mangRap.map((rap, index) => {
            return (
                <div className="groupmovietheater text-center" key ={index}>
                    <button onClick={() => { this.props.layThongTinLichChieuHeThongRap(rap.maHeThongRap); this.props.layThongTinCumRapTheoHeThong(rap.maHeThongRap) }} className="movietheaterItems py-3 d-block w-100" key={index}>
                        <div className="">
                            <img src={rap.logo} alt="" width={50} />
                            <h3 className="card-title">
                                {rap.tenHeThongRap}
                            </h3>
                        </div>
                    </button>
                </div>
            )
        })
    }
    render() {
            return (
                <div className="row">
                    <div className="col-md-3">
                        {this.renderRap()}
                    </div>
                    <div className="col-md-3">
                        {this.renderListRap()}
                    </div>
                </div>
            )
    }
}

const mapStateToProps = (state) => ({
    mangHeThongRap: state.QuanLyPhimReducer.mangHeThongRap,
    mangLichChieu: state.QuanLyPhimReducer.mangLichChieu
})
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinLichChieuHeThongRap: (maHeThongRap) => {
            dispatch(layThongTinLichChieuHeThongRapAction(maHeThongRap));
        },
        layThongTinCumRapTheoHeThong: (maHeThongRap)=> {
            dispatch(layThongTinCumRapTheoHeThongAction(maHeThongRap))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieTheaterList)