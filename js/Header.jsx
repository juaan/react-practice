// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, handleSearch?: Function, searchTerm?: string }) => {
    return (
        <header>
            <h1><Link to="/">JuanVids</Link></h1>
            {props.showSearch
                ? <input type="text" onChange={props.handleSearch} value={props.searchTerm} placeholder="Search" />
                : <h2><Link to="/search"> back </Link></h2>}
        </header>
    );
};

Header.defaultProps = {
    showSearch: false,
    handleSearch: function noop() {},
    searchTerm: ''
};

export default Header;
