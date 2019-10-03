import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
export default class HeaderHome extends Component {
    render() {
        return (
            <div className="header__style">
                <Container fixed>
                     <Avatar alt="Remy Sharp" src="./images/movie-clapper-open.png" />
                </Container>
            </div>
        )
    }
}
