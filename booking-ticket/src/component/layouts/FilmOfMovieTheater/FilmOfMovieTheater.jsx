import React, { Component } from 'react'

export default class FilmOfMovieTheater extends Component {

    renderPhimTheoRap = () => {
        return this.props.layDanhSachPhimTheoRap(this.props.maHeThongRap)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderPhimTheoRap()}
            </div>
        )
    }
}
