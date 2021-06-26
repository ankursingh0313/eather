import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from './pages/Login';
import Home from './pages/Home';

function Router() {
    const dispatch = useDispatch();
    const { session_id } = useSelector((state) => state.AuthReducer.user);
    const { isLoggedIn } = useSelector((state) => state.AuthReducer);
    console.log("is Login ", isLoggedIn);
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => <Home {...props} />} />
                <Route path="/login" exact render={isLoggedIn?props =><Home {...props} />:props => <Login {...props} />} />
                <Route path="/login-page" exact render={isLoggedIn?props =><Home {...props} />:props => <Login {...props} />} />
                <Route path="/Login" exact render={isLoggedIn?props =><Home {...props} />:props => <Login {...props} />} />
                <Route path="/signin" exact render={isLoggedIn?props =><Home {...props} />:props => <Login {...props} />} />
                <Route path="/Signin" exact render={isLoggedIn?props =><Home {...props} />:props => <Login {...props} />} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
};
export default Router;