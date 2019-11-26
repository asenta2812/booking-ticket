import React, { Component } from 'react';
// import Table from 'antd/lib/table';
// import Button from 'antd/lib/button';
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> master
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import { TweenOneGroup } from 'rc-tween-one';
import { connect } from 'react-redux'
import { QuanLyNguoiDungReducer } from '../../../redux/reducers/QuanLyNguoiDungReducer';
<<<<<<< HEAD
import { layDanhSachNguoiDungAction, xoaNguoiDungAction, capNhatNguoiDungAction, timKiemNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
=======
import { layDanhSachNguoiDungAction, xoaNguoiDungAction, editNguoiDungAction, capNhatNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
>>>>>>> master
import FormEditUser from './FormEditUser';
import { actionTypes } from '../../../redux/constants/QuanLyNguoiDungConstants';
import AddUsers from '../AddUsers/AddUsers';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


const TableContext = React.createContext(false);

class ManagerUser extends Component {

    static propTypes = {
        className: PropTypes.string,
    };
    static defaultProps = {
        className: 'table-enter-leave-demo',
    };
    constructor(props) {
        super(props);
        this.state = {
            isPageTween: false,
<<<<<<< HEAD
            searchKey: ''
=======
>>>>>>> master
        };
        this.enterAnim = [
            {
                opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0,
            },
            {
                height: 0,
                duration: 200,
                type: 'from',
                delay: 250,
                ease: 'easeOutQuad',
                onComplete: this.onEnd,
            },
            {
                opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad',
            },
            { delay: 1000, backgroundColor: '#fff' },
        ];
        this.pageEnterAnim = [
            {
                opacity: 0, duration: 0,
            },
            {
                height: 0,
                duration: 150,
                type: 'from',
                delay: 150,
                ease: 'easeOutQuad',
                onComplete: this.onEnd,
            },
            {
                opacity: 1, duration: 150, ease: 'easeOutQuad',
            },
        ];
        this.leaveAnim = [
            { duration: 250, opacity: 0 },
            { height: 0, duration: 200, ease: 'easeOutQuad' },
        ];
        this.pageLeaveAnim = [
            { duration: 150, opacity: 0 },
            { height: 0, duration: 150, ease: 'easeOutQuad' },
        ];
        this.animTag = ($props) => {
            return (
                <TableContext.Consumer>
                    {(isPageTween) => {
                        return (
                            <TweenOneGroup
                                component="tbody"
                                enter={!isPageTween ? this.enterAnim : this.pageEnterAnim}
                                leave={!isPageTween ? this.leaveAnim : this.pageLeaveAnim}
                                appear={false}
                                exclusive
                                {...$props}
                            />
                        );
                    }}
                </TableContext.Consumer>
            );
        };
    }
    componentWillMount() {
        this.props.layDanhSachNguoiDung();
    }
    pageChange = () => {
        this.setState({
            isPageTween: true,
        });
    };
    handleChange = (e) => {
        this.setState({
            searchKey : e.target.value
        },()=>{
            console.log(this.state.searchKey)
        })
    }
    checkSearch = (searchKey)=>{
        if(searchKey !== ''){
            this.props.timKiemNguoiDung(searchKey)
        }
        else {
            this.props.layDanhSachNguoiDung();
        }
    }
    render() {
        const columns = [
            { title: 'Tài khoản', dataIndex: 'taiKhoan', key: 'taiKhoan' },
            { title: 'Mật khẩu', dataIndex: 'matKhau', key: 'matKhau'  },
            { title: 'Họ tên', dataIndex: 'hoTen', key: 'hoTen' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            { title: 'Số điện thoại', dataIndex: 'soDt', key: 'soDt' },
            {
                title: '',
                dataIndex: '',
                key: 'x',
                render: (text, record) => (
                    <div>
                        <button
                            className="btn btn-danger mr-2"
                            onClick={() => this.props.xoaNguoiDung(record.taiKhoan)}
                        >
                            Delete
                        </button>
                        <button
                            className="btn btn-success mr-2" data-toggle="modal" data-target="#editUser"
                            onClick={() => this.props.editNguoiDung(record)}
                        >
                            Edit
                        </button>
                        <Link to={`chitietnguoidung/${record.taiKhoan}`}
                            className="btn btn-primary" 
                            
                        >
                            Detail
                        </Link>
                    </div>

                ),
            },
        ];
        return (
            <div>
                <div className={`${this.props.className}-wrapper`}>
                    <div className={this.props.className}>
                        {/* <div className={`${this.props.className}-header`}>
                            <ul>
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                        </div> */}
                        {/* <div className={`${this.props.className}-list`}>
                            <QueueAnim type="bottom" component="ul">
                                <li key="0" />
                                <li key="1" />
                                <li key="2" />
                                <li key="3" />
                                <li key="4" />
                            </QueueAnim>
                        </div> */}
                        <div className={`${this.props.className}-table-wrapper`}>
                            <div className="searchbox">
                            <Icon type='search' />
                                    <input type="text" name="searchKey" id="searchKey"  className="form-control" value = {this.state.searchKey} onChange={this.handleChange} onKeyUp={()=> this.checkSearch(this.state.searchKey.trim())} placeholder="Search"/>
                                
                            </div>
                            <div className={`${this.props.className}-action-bar`}>
                                <Button type="primary" data-toggle="modal" data-target="#modelAddUser">Add</Button>
                                <AddUsers />
                            </div>
                            <TableContext.Provider value={this.state.isPageTween}>
                                <Table
                                    columns={columns}
                                    pagination={{ pageSize: 12 }}
                                    dataSource={this.props.listDSNguoiDung}
                                    className={`${this.props.className}-table`}
                                    components={{ body: { wrapper: this.animTag } }}
                                    onChange={this.pageChange}
                                />
                            </TableContext.Provider>
                        </div>
                    </div>
                </div>
                <FormEditUser />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listDSNguoiDung: state.QuanLyNguoiDungReducer.listDSNguoiDung
})
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => {
            dispatch(layDanhSachNguoiDungAction())
        },
        xoaNguoiDung: (taiKhoan) => {
            dispatch(xoaNguoiDungAction(taiKhoan))
        },
        editNguoiDung: (userEdit) => {
            let action = {
                type: actionTypes.CHINH_SUA_NGUOI_DUNG,
                userEdit
            }
            dispatch(action)
        },
        capNhatNguoiDung: (userSave) => {
            dispatch(capNhatNguoiDungAction(userSave))
        },
        timKiemNguoiDung: (searchKey) =>{
            dispatch(timKiemNguoiDungAction(searchKey))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerUser)