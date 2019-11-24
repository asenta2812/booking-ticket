import React, { Component } from 'react'

export default class FooterAdmin extends Component {
    render() {
        return (
            <div>
                {/* Begin Page Footer*/}
                <footer className="main-footer">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                            <p className="text-gradient-02">Design By Saerox</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="documentation.html">Documentation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="changelog.html">Changelog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                {/* End Page Footer */}

            </div>
        )
    }
}
