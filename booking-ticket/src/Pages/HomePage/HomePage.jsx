import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { layDanhSachPhim1Actions, layThongTinRapAction } from '../../redux/actions/QuanLyPhimActions'
import MovieList from '../../component/layouts/MovieList/MovieList';
import MovieTheaterList from '../../component/layouts/MovieTheaterList/MovieTheaterList';
import { Carousel } from 'antd';
// import FilmOfMovieTheater from '../../component/layouts/FilmOfMovieTheater/FilmOfMovieTheater';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            linkTrailer: ''
        }
    }

    componentWillMount() {
        this.props.layDanhSachPhim1Actions();
        this.props.layThongTinRap();
    }

    getTrailerLink = (link) => {
        this.setState({
            linkTrailer : link
        })
    }

    render() {
        if (!this.props.mangRap[0])
            return <div></div>
        return (
            <div>
                <Carousel>
                    <div>
                        <img src={this.props.mangPhim[0].hinhAnh} alt="" />
                    </div>
                    <div>
                        <img src={this.props.mangPhim[1].hinhAnh} alt="" />
                    </div>
                    <div>
                        <img src={this.props.mangPhim[2].hinhAnh} alt="" />
                    </div>
                    <div>
                        <img src={this.props.mangPhim[3].hinhAnh} alt="" />
                    </div>
                    <div>
                        <img src={this.props.mangPhim[4].hinhAnh} alt="" />
                    </div>
                </Carousel>
                <div className="container">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                    <MovieList mangPhim={this.props.mangPhim} getTrailerLink={this.getTrailerLink}></MovieList>
                    <MovieTheaterList mangRap={this.props.mangRap} ></MovieTheaterList>
                </div>
                <div className="modal fade" id="modelTrailer" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <iframe width="800" height="409" src={this.state.linkTrailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    mangPhim: state.QuanLyPhimReducer.mangPhim,
    mangRap: state.QuanLyPhimReducer.mangRap
})

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachPhim1Actions: () => {
            dispatch(layDanhSachPhim1Actions());
        },
        layThongTinRap: () => {
            dispatch(layThongTinRapAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)