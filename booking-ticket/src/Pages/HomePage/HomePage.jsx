import React, { Component, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { layDanhSachPhim1Actions, layThongTinRapAction } from '../../redux/actions/QuanLyPhimActions'
import MovieList from '../../component/layouts/MovieList/MovieList';
import MovieTheaterList from '../../component/layouts/MovieTheaterList/MovieTheaterList';
function HomePage(props) {

    useEffect(() => {
        props.layDanhSachPhim1Actions();
        props.layThongTinRap();
    }, [])
    console.log(props.mangRap)
    return (
        <div>
            <Container>
                <MovieList mangPhim={props.mangPhim}></MovieList>
                <div className="row">
                    <div className="col-md-5">
                        <MovieTheaterList mangRap={props.mangRap}></MovieTheaterList>
                    </div>
                </div>
            </Container>
        </div>
    )
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