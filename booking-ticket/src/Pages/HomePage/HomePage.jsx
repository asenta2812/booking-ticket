import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { layDanhSachPhim1Actions, layThongTinRapAction, layDanhSachPhimTheoRapAction } from '../../redux/actions/QuanLyPhimActions'
import MovieList from '../../component/layouts/MovieList/MovieList';
import MovieTheaterList from '../../component/layouts/MovieTheaterList/MovieTheaterList';
// import FilmOfMovieTheater from '../../component/layouts/FilmOfMovieTheater/FilmOfMovieTheater';

class HomePage extends Component {


    componentDidMount() {
        this.props.layDanhSachPhim1Actions();
        this.props.layThongTinRap();
    }

    render() {
        if (!this.props.mangRap[0])
            return <div></div>
        return (
            <div>
                <Container>
                    <MovieList mangPhim={this.props.mangPhim}></MovieList>

                    <MovieTheaterList mangRap={this.props.mangRap} ></MovieTheaterList>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)