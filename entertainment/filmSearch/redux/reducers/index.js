import reducerSearch from './reducerSearch';
import reducerFav from './reducerFav';
import reducerLoad from './reducerLoad'
import { combineReducers } from 'redux';
export default combineReducers({reducerFav, reducerSearch, reducerLoad});