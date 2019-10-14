import React, { Component } from 'react'
import { Container } from '@material-ui/core';

export default class MovieList extends Component {

    
    renderPhim = () => {
        let { mangPhim } = this.props;
        return mangPhim.map((phim, index) => {
            if(phim.moTa.length > 100) {
                phim.moTa = phim.moTa.substring(1,100) + `...`;
            }
            return (
                <div className="col-md-2" key= {index}>
                    <div className="card">
                        <img className="card-img-top" src={phim.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{phim.tenPhim}</h4>
                            <p className="card-text">{phim.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <Container >
                <div className="row">
                    {this.renderPhim()}
                </div>
            </Container>
        )
    }
}
