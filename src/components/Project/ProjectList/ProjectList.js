import React from 'react';
import './ProjectList.scss';
import Search from './Search/ProjectSearch';

export default function ProjectList() {
    return (
        <div className="container">
            <div id="heading-wrapper" className="heading-wrapper">
                <h1>Project List</h1>
                <Search></Search>
            </div>
        </div>
    )
}