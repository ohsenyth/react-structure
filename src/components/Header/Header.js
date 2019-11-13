import React from 'react';
import './Header.scss';
import HeaderNav from './HeaderNav/HeaderNav';

class Header extends React.Component {
    render() {
        return (
            <div id="header" className="Header">
                <span id="system-name">Audio Transcription</span>
                <HeaderNav></HeaderNav>
            </div>
        )
    }
}

export default Header;