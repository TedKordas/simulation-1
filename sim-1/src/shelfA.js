import React from 'react';
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';
import './App.css';

export default function shelfA() {
    return (
        <div className="App">
            <header className="App-header">
            <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className="App-title">SHELFIE</h1>
            </header>
        </div>
    )
}