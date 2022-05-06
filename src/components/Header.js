import React from 'react';
import logo from "../globe.png";

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} width="25" height="25" alt="logo" />
            <h2 className="App-header--title">my travel journal</h2>
        </header>
    )
}