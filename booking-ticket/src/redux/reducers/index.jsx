import { combineReducers } from 'redux';
import {BookingTicketReducer} from './BookingTicketReducer'
import {QuanLyPhimReducer} from './QuanLyPhimReducer'
import {QuanLyNguoiDungReducer} from './QuanLyNguoiDungReducer'
export const rootReducers = combineReducers ({
    BookingTicketReducer,
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer
})