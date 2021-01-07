import {combineReducers} from 'redux'
import fb_login from './fb_login'

export default combineReducers({
    login: fb_login
})