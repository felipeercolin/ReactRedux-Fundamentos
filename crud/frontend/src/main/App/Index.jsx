import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './Style.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../../components/templates/Logo/Index';
import Nav from '../../components/templates/Nav/Index';
import Routes from '../routes';
import Footer from '../../components/templates/Footer/Index';

export default props =>
<BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>