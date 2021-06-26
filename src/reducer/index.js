import loginReducer from './logint';
import backendDevReducer from './backenddev';
import domainReducer from './domain';
import frontendDevReducer from './frontenddev';
import hostingReducer from './hosting';
import javaBackendReducer from './javabackend';
import nodeBackendReducer from './nodebackend';
import phpBackendReducer from './phpbackend';
import pythonBackendReducer from './pythonbackend';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    islogin     : loginReducer,
    priceState  : combineReducers({
        backendDev      : backendDevReducer,
        takeDomain      : domainReducer,
        frontendDev     : frontendDevReducer,
        takeHosting     : hostingReducer,
        javaBackend     : javaBackendReducer,
        nodeBackend     : nodeBackendReducer,
        phpBackend      : phpBackendReducer,
        pythonBackend   : pythonBackendReducer
    })
})
// const reducer = () => {

// }
export default reducers;