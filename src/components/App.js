import React from 'react';
import Home from '../pages/Home';
import Header from './Header';
//style 
import {GlobalStyle } from '../components/styles/GlobalStyle';
const App = () => {
    return (
        <div>
               <GlobalStyle/>
            <Header/>
            <Home/>
        </div>
    );
};

export default App;
