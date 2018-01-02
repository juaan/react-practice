// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends React.Component {
    props: {
        searchTerm: string,
        handleSearchTerm: Function,
        history: RouterHistory
    };

    goToSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.history.push('/search');
    };

    render() {
        return (
            <div className="landing">
                <h1>Video Keren</h1>
                <form onSubmit={this.goToSearch}>
                    <input
                        onChange={this.props.handleSearchTerm}
                        value={this.props.searchTerm}
                        type="text"
                        placeholder="search"
                    />
                </form>
                <Link to="/search">or Browse All</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
    handleSearchTerm(e) {
        dispatch(setSearchTerm(e.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
