import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <span id="system-name">Audio Transcription</span>
            </div>
        )
    }
}

export default Header;