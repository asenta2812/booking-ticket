import React, { Component } from 'react'
import { Carousel, Rate } from 'antd';

export default class MovieList extends Component {


    renderPhim = () => {
        let { mangPhim } = this.props;

        return mangPhim.map((phim, index) => {

            if (phim.moTa.length > 50) {

                phim.moTa = phim.moTa.substring(1, 50) + `...`;
                console.log(phim.moTa.length)
            }

            return (
                <div className="col-md-3 col-movie-list" key={index}>
                    <div className="card-home-page">
                        <div className="content-movie">
                            <div className="img-film">
                                <img className="card-img-top" src={phim.hinhAnh} alt="" />
                            </div>
                            <div className="date-open">{phim.ngayKhoiChieu}</div>
                            <span>
                                <Rate value={phim.danhGia} />
                            </span>
                            <div className="card-body">
                                <h4 className="card-title">{phim.tenPhim}</h4>
                            </div>
                        </div>
                        <div className="over-lay">
                            <a onClick = {() => this.props.getTrailerLink(phim.trailer)} href="#videostory" id="videolink" data-toggle="modal" data-target="#modelTrailer"><img src="./images/play-video.png" alt="" /></a>
                            <button className="btn order-movie">Mua ve</button>
                        </div>
                    </div>

                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="list-movie">
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}
