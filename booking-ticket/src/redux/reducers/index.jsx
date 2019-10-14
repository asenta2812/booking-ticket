import { combineReducers } from 'redux';
import {BookingTicketReducer} from './BookingTicketReducer'
import {QuanLyPhimReducer} from './QuanLyPhimReducer'
export const rootReducers = combineReducers ({
    BookingTicketReducer,
    QuanLyPhimReducer
})