import React, { Component  } from 'react'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { layDanhSachPhim1Actions, layThongTinRapAction, layDanhSachPhimTheoRapAction } from '../../redux/actions/QuanLyPhimActions'
import MovieList from '../../component/layouts/MovieList/MovieList';
import MovieTheaterList from '../../component/layouts/MovieTheaterList/MovieTheaterList';
import FilmOfMovieTheater from '../../component/layouts/FilmOfMovieTheater/FilmOfMovieTheater';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maHeThongRap: 'cinestar' 
        }
    }

    componentWillMount() {
        this.props.layDanhSachPhim1Actions();
        this.props.layThongTinRap();
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Container>
                    <MovieList mangPhim={this.props.mangPhim}></MovieList>
                    <div className="row">
                        <div className="col-md-5">
                            <MovieTheaterList  mangRap={this.props.mangRap}></MovieTheaterList>
                        </div>
                        <div className="col-md-7">
                            <FilmOfMovieTheater maHeThongRap = {this.state.maHeThongRap} layDanhSachPhimTheoRap = {this.props.layDanhSachPhimTheoRap}></FilmOfMovieTheater>
                        </div>
                    </div>
                </Container>
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
        },
        layDanhSachPhimTheoRap: (maHeThongRap) => {
            dispatch(layDanhSachPhimTheoRapAction(maHeThongRap));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)