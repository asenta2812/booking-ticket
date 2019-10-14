import React, { Component } from 'react'

export default class MovieTheaterList extends Component {

    renderRap = () => {
        let { mangRap } = this.props;
        return mangRap.map((rap, index) => {
            return (
                <div className="movietheaterItems" key={index}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={rap.logo} alt="" />
                        </div>
                        <div className="col-md-8">
                            <h3 className="card-title">
                                {rap.tenHeThongRap}
                            </h3>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderRap()}
            </div>
        )
    }
}
