import { combineReducers } from 'redux';
import Mistakes from './Mistakes/Mistakes.reducer';

// Thats unnecessary for now, but if we want to add more features in the future
export default combineReducers({
    Mistakes: Mistakes
})