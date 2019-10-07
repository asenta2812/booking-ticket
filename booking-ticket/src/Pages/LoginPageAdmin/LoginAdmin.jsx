import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop : 30
    },
    dense: {
        marginTop: theme.spacing(),
    },
    menu: {
        width: 200,
    },
}));

export default class LoginAdmin extends Component {
    render() {
        return (

            <div className="login-admin">
                <div className="login-card">
                    <h3 className="title__h3 text-center">Đăng nhập</h3>
                    <TextField
                        id="taiKhoan"
                        label="Tài khoản"
                        className={useStyles.textField}
                        placeholder="Tài khoản..."
                        // onChange={handleChange('name')}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="matKhau"
                        label="Mật khẩu"
                        className={useStyles.textField}
                        placeholder="Mật khẩu..."
                        // onChange={handleChange('name')
                        margin="normal"
                        fullWidth
                    />
                
                </div>
            </div>
        )
    }
}
