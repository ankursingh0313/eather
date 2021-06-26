import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navbars/DemoNavbar';
import SimpleFooter from './components/Footers/SimpleFooter';
import Router from './Router';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
import {NotificationContainer} from 'react-notifications';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <NavigationBar />
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                <SimpleFooter />
            </div>
            <NotificationContainer />
        </Provider>
    );
}

export default App;
