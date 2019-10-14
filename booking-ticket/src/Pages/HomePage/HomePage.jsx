import React, { Component,useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import {layDanhSachPhim1Actions} from '../../redux/actions/QuanLyPhimActions'
import MovieList from '../../component/layouts/MovieList/MovieList';
function HomePage(props) {

    useEffect(()=> {
        props.layDanhSachPhim1Actions()
    },[])
console.log(props.mangPhim)
    return (
        <div>
            <MovieList mangPhim = {props.mangPhim}></MovieList>
        </div>
    )
}

const mapStateToProps = (state) => ({
    mangPhim: state.QuanLyPhimReducer.mangPhim
})

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachPhim1Actions: () => {
            dispatch(layDanhSachPhim1Actions());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)