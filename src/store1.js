import {createStore} from 'redux';
import counterReducer from './counterReducer';

const counterStore = createStore(counterReducer);

export default counterStore;