import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { layDanhSachPhimTheoRapAction } from '../../../redux/actions/QuanLyPhimActions';

class MovieTheaterList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         maHeThongRap: this.props.mangRap[0].maHeThongRap
    //     }
    // }
    componentDidMount() {
        this.props.layDanhSachPhimTheoRap(this.props.mangRap[0].maHeThongRap)
    }
    renderListRap = () => {
        const { mangHeThongRap } = this.props;
        return mangHeThongRap[0].lstCumRap.map((rap, index) => {
            return (
                <div className="card">
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
                <div className="">
                    <div className="groupmovietheater text-center">
                        <button onClick={() => { this.props.layDanhSachPhimTheoRap(rap.maHeThongRap) }} className="movietheaterItems py-3 d-block w-100" key={index}>
                            <div className="">
                                <img src={rap.logo} alt="" width={50} />
                                <h3 className="card-title">
                                    {rap.tenHeThongRap}
                                </h3>
                            </div>
                        </button>
                    </div>
                </div>
            )
        })
    }
    render() {
        if (this.props.mangHeThongRap.length > 0)
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
        return (
            <div>
                {this.renderRap()}
            </div>
        )
    }
}
// MovieTheaterList.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

// MovieTheaterList.defaultProps = {
//     mangHeThongRap: this.props.layDanhSachPhimTheoRap(this.props.mangRap[0].maHeThongRap)
// }

// MovieTheaterList.propTypes = {
//     mangHeThongRap: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => ({
    mangHeThongRap: state.QuanLyPhimReducer.mangHeThongRap
})

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachPhimTheoRap: (maHeThongRap) => {
            dispatch(layDanhSachPhimTheoRapAction(maHeThongRap));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieTheaterList)