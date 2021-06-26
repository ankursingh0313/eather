import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
// import {isLogin} from './components/script/functions';

function Router() {
    const dispatch = useDispatch();
    const { session_id } = useSelector((state) => state.AuthReducer.user);
    const { isLoggedIn } = useSelector((state) => state.AuthReducer);
    console.log("is Login ", isLoggedIn);
    // const dispatch = useDispatch();
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={isLoggedIn?props => <Home {...props} />:props => <Login {...props} />} />
                <Route path="/login" exact render={props => <Login {...props} />} />
                <Route path="/login-page" exact render={props => <Login {...props} />} />
                <Route path="/Login" exact render={props => <Login {...props} />} />
                <Route path="/signin" exact render={props => <Login {...props} />} />
                <Route path="/Signin" exact render={props => <Login {...props} />} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
};
export default Router;