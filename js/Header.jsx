// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

const Header = (props: { showSearch?: boolean, handleSearch: Function, searchTerm: string }) => {
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
    showSearch: false
};

const mapStateToProps = state => ({
    searchTerm : state.searchTerm
})

const mapDispatchToProps = (dispatch: Function) => ({
    handleSearch(e) {
        dispatch(setSearchTerm(e.target.value))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
