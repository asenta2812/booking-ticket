import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import { TweenOneGroup } from 'rc-tween-one';
import { connect } from 'react-redux'
import { QuanLyNguoiDungReducer } from '../../../redux/reducers/QuanLyNguoiDungReducer';
import {layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';

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
        this.columns = [
            { title: 'Tai khoản', dataIndex: 'taiKhoan', key: 'taiKhoan' },
            { title: 'Mật khẩu', dataIndex: 'matKhau', key: 'matKhau' },
            { title: 'Họ tên', dataIndex: 'hoTen', key: 'hoTen' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            { title: 'Số điện thoại', dataIndex: 'soDt', key: 'soDt' },
            {
                title: 'Thao tac',
                dataIndex: '',
                key: 'x',
                render: (text, record) => (
                    <span
                        className={`${this.props.className}-delete`}
                        onClick={() => { this.props.xoaNguoiDung(record.taiKhoan); }}
                    >
                        Delete
                    </span>
                ),
            },
        ];
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

        this.state = {
            isPageTween: false,
        };
    }

    componentWillMount() {
        this.props.layDanhSachNguoiDung();
    }
    onEnd = (e) => {
        const dom = e.target;
        dom.style.height = 'auto';
    }

    onAdd = () => {
        const { data } = this.state;
        const i = Math.round(Math.random() * (this.data.length - 1));
        data.unshift({
            key: Date.now(),
            name: this.data[i].name,
            age: this.data[i].age,
            address: this.data[i].address,
        });
        this.setState({
            data,
            isPageTween: false,
        });
    };

    // onDelete = (key, e) => {
    //     e.preventDefault();
    //     const data = this.state.data.filter(item => item.key !== key);
    //     this.setState({ data, isPageTween: false });
    // }

    pageChange = () => {
        this.setState({
            isPageTween: true,
        });
    };
    render() {
        console.log(this.props)
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
                            <div className={`${this.props.className}-action-bar`}>
                                <Button type="primary" onClick={this.onAdd}>Add</Button>
                            </div>
                            <TableContext.Provider value={this.state.isPageTween}>
                                <Table
                                    columns={this.columns}
                                    pagination={{ pageSize: 15 }}
                                    dataSource={this.props.listDSNguoiDung}
                                    className={`${this.props.className}-table`}
                                    components={{ body: { wrapper: this.animTag } }}
                                    onChange={this.pageChange}
                                />
                            </TableContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listDSNguoiDung: state.QuanLyNguoiDungReducer.listDSNguoiDung
})

const mapDispatchToProps = (dispatch) =>{
    return{
        layDanhSachNguoiDung: () => {
            dispatch(layDanhSachNguoiDungAction())
        },
        xoaNguoiDung: (taiKhoan) => {
            dispatch(xoaNguoiDungAction(taiKhoan))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagerUser)