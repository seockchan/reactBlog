import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Join from './pages/join/Join';
import My from './pages/my/My';
import View from './pages/view/View';
import Write from './pages/write/Write';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/Join">
                        <Join />
                    </Route>
                    <Route path="/My">
                        <My />
                    </Route>
                    <Route path="/View">
                        <View />
                    </Route>
                    <Route path="/Write">
                        <Write />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
